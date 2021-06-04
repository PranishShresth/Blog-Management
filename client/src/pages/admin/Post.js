import React, { useEffect, useState, useContext } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { getAllBlogs } from "../../actions/admin/actions";
import { BlogContext } from "../../context/BlogContext/BlogContext";
import axios from "../../utils/axios";

function Post() {
  const { blogState, blogDispatch } = useContext(BlogContext);
  useEffect(() => {
    async function getAllBlogs() {
      try {
        const { data, status } = await axios.get("/api/admin/blog");
      } catch (err) {}
    }
  }, []);
  return <div></div>;
}

export default Post;
