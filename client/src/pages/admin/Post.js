import React, { useEffect, useContext } from "react";
import { Button, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Edit, Visibility, DeleteForever } from "@material-ui/icons";

import { getAllBlogsSuccess } from "../../actions/admin/actions";
import { BlogContext } from "../../context/BlogContext/BlogContext";
import AdminLayout from "../../components/admin/AdminLayout";
import axios from "../../utils/axios";
import { useSnackbar } from "notistack";

function Post() {
  const { blogState, blogDispatch } = useContext(BlogContext);
  const { enqueueSnackbar } = useSnackbar();
  const handleDelete = async (blogId) => {
    try {
      await axios.delete(`/api/admin/blog/${blogId}`);
      enqueueSnackbar("Blog deleted", { variant: "warning" });
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async (blogId, payload) => {
    try {
      const { data } = await axios.put(`/api/admin/blog/${blogId}`, payload);
      blogDispatch({ type: "BLOG_UPDATE", payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      label: "Blog Title",
      name: "title",
      options: {
        filter: true,
      },
    },
    {
      label: "Blog Author",
      name: "author",
      options: {
        filter: true,
      },
    },
    {
      label: "isPublished?",
      name: "Published",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          const isPublished = blogState.blogs[dataIndex].isPublished;
          if (isPublished) {
            return (
              <Button
                variant="contained"
                color="secondary"
                style={{ background: "#d32f2f" }}
                onClick={() => {
                  handleUpdate(blogState.blogs[dataIndex]._id, {
                    isPublished: !isPublished,
                  });
                }}
              >
                Unpublish
              </Button>
            );
          }
          return (
            <Button
              variant="contained"
              color="primary"
              style={{ background: "#689f38" }}
              onClick={() => {
                handleUpdate(blogState.blogs[dataIndex]._id, {
                  isPublished: !isPublished,
                });
              }}
            >
              Publish
            </Button>
          );
        },
      },
    },
    {
      name: "category",
      label: "Category",
      options: {
        filter: false,
      },
    },

    {
      label: "Last Updated",
      name: "updatedAt",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "Actions",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <IconButton
                onClick={() => {
                  handleDelete(blogState.blogs[dataIndex]._id);
                }}
              >
                <DeleteForever />
              </IconButton>
              <IconButton
                onClick={() => {
                  //   navigate(`/admin/editCourse/${courses[dataIndex]._id}`);
                }}
              >
                <Edit />
              </IconButton>
              <IconButton
                onClick={() => {
                  //   handleOpenCourse(courses[dataIndex]._id);
                }}
              >
                <Visibility />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  const options = {
    filterType: "checkbox",
  };
  useEffect(() => {
    async function getAllBlogs() {
      try {
        const { data } = await axios.get("/api/admin/blog");

        blogDispatch(getAllBlogsSuccess(data.blogs));
      } catch (err) {}
    }
    getAllBlogs();
  }, []);
  return (
    <AdminLayout>
      {blogState && (
        <MUIDataTable
          title={"All Posts"}
          data={blogState.blogs}
          columns={columns}
          options={options}
        />
      )}
    </AdminLayout>
  );
}

export default Post;
