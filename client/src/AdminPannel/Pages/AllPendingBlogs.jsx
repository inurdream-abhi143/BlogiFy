import React, { useEffect } from "react";
import { useAdminBlogs } from "../../contexts/AdminsBlogsReqContext";
import axios from "axios";
import { toast } from "react-toastify";

const AllPendingBlogs = () => {
  const { allPendingBlogs, getAllBlogs } = useAdminBlogs();

  useEffect(() => {
    getAllBlogs();
  }, []);

  const blogActions = async (id, status) => {
    const blogId = id;
    const body = { status };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const res = await axios.patch(
        `http://localhost:3000/posts/${blogId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success(`Blog ID: ${blogId} has been ${status}`);
        getAllBlogs();
      }
    } catch (err) {
      console.error("Error handling blog action:", err);
    }
  };
  console.log(allPendingBlogs);
  return (
    <div className="container-fluid py-4 bg-dark text-light min-vh-100">
      <header className="bg-black text-white py-4 px-3 rounded shadow mb-5">
        <h1 className="fs-2 mb-0 text-center">🛠️ Pending Blog Moderation</h1>
      </header>

      {allPendingBlogs.length === 0 ? (
        <div className="text-center mt-5">
          <h4 className="text-muted">No pending blogs 💤</h4>
        </div>
      ) : (
        <div className="row">
          {allPendingBlogs.map((blog) => (
            <div key={blog._id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card bg-dark text-light shadow border-light border-1 h-100">
                {blog.coverImage && (
                  <img
                    src={blog.coverImage}
                    alt="Blog Cover"
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-2">{blog.title}</h5>
                  <p className="mb-1">
                    <strong>Author:</strong>{" "}
                    <span className="text-info">{blog.authorName}</span>
                  </p>
                  <p className="mb-3">
                    <strong>Category:</strong>{" "}
                    <span className="badge bg-secondary">{blog.category}</span>
                  </p>
                  <div className="d-flex justify-content-between gap-2 mt-auto">
                    <button
                      className="btn btn-success w-50 fw-semibold"
                      onClick={() => blogActions(blog._id, "approved")}
                    >
                      ✅ Approve
                    </button>
                    <button
                      className="btn btn-danger w-50 fw-semibold"
                      onClick={() => blogActions(blog._id, "rejected")}
                    >
                      ❌ Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPendingBlogs;
