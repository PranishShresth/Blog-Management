import React, { useEffect, useState, useContext } from "react";
import { makeStyles, Button, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Edit, Visibility, DeleteForever } from "@material-ui/icons";

import { getAllBlogsSuccess } from "../../actions/admin/actions";
import { BlogContext } from "../../context/BlogContext/BlogContext";
import AdminLayout from "../../components/admin/AdminLayout";
import axios from "../../utils/axios";

function Post() {
  const { blogState, blogDispatch } = useContext(BlogContext);
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
        // customBodyRenderLite: (dataIndex) => {
        //   //   const isPublished = blogs[dataIndex].isPublished;
        //   if (isPublished) {
        //     return (
        //       <Button
        //         variant="contained"
        //         color="secondary"
        //         style={{ background: "#d32f2f" }}
        //         onClick={() => {
        //           //   handlePublish(blogs[dataIndex]._id, {
        //           //     isPublished: !isPublished,
        //           //   });
        //         }}
        //       >
        //         Unpublish
        //       </Button>
        //     );
        //   }
        //   return (
        //     <Button
        //       variant="contained"
        //       color="primary"
        //       style={{ background: "#689f38" }}
        //       onClick={() => {
        //         // handlePublish(blogs[dataIndex]._id, {
        //         //   isPublished: !isPublished,
        //         // });
        //       }}
        //     >
        //       Publish
        //     </Button>
        //   );
        // },
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
                  //   handleClickOpen(courses[dataIndex]);
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
        const { data, status } = await axios.get("/api/admin/blog");

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
