import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const BlogReq = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    category: Yup.string().required("Category is required"),
    tags: Yup.string().required("Tags are required"),
    image: Yup.mixed().required("Image is required"),
  });

  const handleSubmit = async (value, { resetForm }) => {
    const token = localStorage.getItem("token");

    const decode = jwtDecode(token);

    const authorId = decode.id;
    const authorName = decode.username;

    // console.log(token, decode);
    // console.log(authorId);

    // const blogData = {
    //   blogId: Math.random().toString(36).substring(2, 8),
    //   author: authorId,
    //   authorname: authorname,
    //   title: value.title,
    //   content: value.content,
    //   category: value.category,
    //   tags: value.tags.split(",").map((tag) => tag.trim()),
    //   coverImage: append(value.image),
    // };

    const fromData = new FormData();

    fromData.append("blogId", Math.random().toString(36).substring(2, 8));
    fromData.append("author", authorId);

    fromData.append("authorName", authorName);
    fromData.append("title", value.title);
    fromData.append("content", JSON.stringify(value.content));
    fromData.append("category", value.category);
    fromData.append(
      "tags",
      value.tags.split(",").map((tag) => tag.trim())
    );
    fromData.append("coverImage", value.image);

    console.log("Form Data:", fromData);
    try {
      const res = await axios.post("http://localhost:3000/posts", fromData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        toast.success("Blog request submitted successfully!");
        resetForm();
        setPreviewImage(null); // Clear preview after submission
        // Reset form or redirect as needed
      }
    } catch (error) {
      console.error("Error submitting blog request:", error);
      toast.error("Failed to submit blog request. Please try again.");
    }
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-warning text-center text-dark py-4 rounded-top">
              <h3 className="fw-bold mb-1">📤 Submit Blog for Review</h3>
              <p className="mb-0 small text-muted">
                Fill in the blog details carefully before submitting
              </p>
            </div>

            <div className="card-body bg-light px-4 py-5">
              <Formik
                initialValues={{
                  title: "",
                  content: "",
                  category: "",
                  tags: "",
                  image: null,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <Form>
                    {/* Title */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Title</label>
                      <Field
                        name="title"
                        type="text"
                        className="form-control"
                        placeholder="Amazing blog title"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-danger small mt-1"
                      />
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Content</label>
                      <Field
                        name="content"
                        as="textarea"
                        rows="6"
                        className="form-control"
                        placeholder="Write your blog content here..."
                      />
                      <ErrorMessage
                        name="content"
                        component="div"
                        className="text-danger small mt-1"
                      />
                    </div>

                    {/* Image Upload + Preview */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Image</label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setFieldValue("image", file);
                          setPreviewImage(URL.createObjectURL(file));
                        }}
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-danger small mt-1"
                      />
                      {/* Preview */}
                      {previewImage && (
                        <div className="mt-3 text-center">
                          <img
                            src={previewImage}
                            alt="Preview"
                            className="img-fluid rounded shadow-md"
                            style={{ maxHeight: "150px", objectFit: "contain" }}
                          />
                          <p className="text-muted small mt-1">Image Preview</p>
                        </div>
                      )}
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Category</label>
                      <Field
                        name="category"
                        as="select"
                        className="form-select"
                      >
                        <option value="">-- Select Category --</option>
                        <option value="technology">Technology</option>
                        <option value="health">Health</option>
                        <option value="finance">Finance</option>
                        <option value="travel">Travel</option>
                      </Field>
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="text-danger small mt-1"
                      />
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Tags</label>
                      <Field
                        name="tags"
                        type="text"
                        className="form-control"
                        placeholder="e.g. react, mongodb, ux"
                      />
                      <ErrorMessage
                        name="tags"
                        component="div"
                        className="text-danger small mt-1"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-warning fw-bold px-5 py-2"
                      >
                        🚀 Submit Blog Request
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogReq;
