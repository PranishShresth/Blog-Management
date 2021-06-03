import React from "react";
import ReactQuill from "react-quill";
import { TextField, Grid, Paper } from "@material-ui/core";
import "react-quill/dist/quill.snow.css";
import { quillFormats, quillModules } from "./quillConfig";
import AdminLayout from "./AdminLayout";

function PostBlog() {
  return (
    <AdminLayout>
      Post Blog
      <div>
        <Grid container>
          <Grid item md={8} xs={12}>
            <TextField
              label="Post title"
              multiline
              variant="outlined"
            ></TextField>
            <ReactQuill
              theme="snow"
              modules={quillModules}
              formats={quillFormats}
            ></ReactQuill>
          </Grid>
        </Grid>
      </div>
    </AdminLayout>
  );
}

export default PostBlog;
