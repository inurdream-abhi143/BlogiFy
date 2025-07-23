import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BlogReq = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    category: Yup.string().required("Category is required"),
    tags: Yup.string().required("Tags are required"),
    image: Yup.mixed().required("Image is required"),
  });

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-warning text-dark text-center py-3">
              <h3 className="fw-bold mb-0">📤 Submit Blog for Review</h3>
              <small className="text-muted">
                Fill in your blog details below
              </small>
            </div>

            <div className="card-body bg-light">
              <Formik
                initialValues={{
                  title: "",
                  content: "",
                  category: "",
                  tags: "",
                  image: null,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log("Form Submitted: ", values);
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    {/* Title */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Title</label>
                      <Field
                        name="title"
                        type="text"
                        className="form-control"
                        placeholder="Enter blog title"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    {/* Content */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Content</label>
                      <Field
                        name="content"
                        as="textarea"
                        rows="5"
                        className="form-control"
                        placeholder="Write your blog content..."
                      />
                      <ErrorMessage
                        name="content"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Image</label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        onChange={(e) =>
                          setFieldValue("image", e.target.files[0])
                        }
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    {/* Category */}
                    <div className="mb-3">
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
                        className="text-danger small"
                      />
                    </div>

                    {/* Tags */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Tags</label>
                      <Field
                        name="tags"
                        type="text"
                        className="form-control"
                        placeholder="e.g. react, mongodb, ui/ux"
                      />
                      <ErrorMessage
                        name="tags"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-warning px-5 py-2 fw-bold"
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
