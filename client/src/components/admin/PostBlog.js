import React, { useState, useContext } from "react";
import ReactQuill from "react-quill";
import {
  TextField,
  makeStyles,
  Button,
  Grid,
  Paper,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import "react-quill/dist/quill.snow.css";
import { quillFormats, quillModules } from "./quillConfig";
import { postBlogSuccess } from "../../actions/admin/actions";
import { BlogContext } from "../../context/BlogContext/BlogContext";
import AdminLayout from "./AdminLayout";
import axios from "../../utils/axios";
const useStyles = makeStyles((theme) => ({
  form: {
    height: "100%",
  },
  input: { width: "80%", margin: "20px 0", background: "white" },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContainer: {
    height: "100%",
  },
  asidePaper: {
    height: 200,
    margin: "20px",
    padding: "5px 10px",
  },
  tags: {
    width: "100%",
    margin: "10px 0",
  },
}));
function PostBlog() {
  const classes = useStyles();
  const { blogDispatch } = useContext(BlogContext);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");

  const handlePostBlog = async (ev) => {
    ev.preventDefault();
    if (ev.keyCode === 13) {
      return;
    }
    try {
      const { data, status } = await axios.post("/api/admin/blog", {
        title,
        tags,
        content,
        category,
      });
      if (status === 201) {
        blogDispatch(postBlogSuccess(data.blog));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AdminLayout>
      <form className={classes.form} id="postForm" onSubmit={handlePostBlog}>
        <div className={classes.heading}>
          <h2>Posts</h2>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disableElevation
          >
            Publish
          </Button>
        </div>
        <Grid container className={classes.mainContainer}>
          <Grid item md={8} xs={12}>
            <TextField
              label="Post Title"
              name="title"
              placeholder="Title"
              value={title}
              multiline
              onChange={(ev) => {
                setTitle(ev.target.value);
              }}
              variant="outlined"
              className={classes.input}
            />
            <div className="quillContainer">
              <ReactQuill
                theme="snow"
                value={content}
                id="content"
                onChange={setContent}
                className={classes.quill}
                formats={quillFormats}
                modules={quillModules}
                bounds={".quillContainer"}
              />
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container>
              <Grid item md={8} xs={8}>
                <Paper className={classes.asidePaper}>
                  <TextField
                    className={classes.tags}
                    label="Tags"
                    name="tags"
                    value={tag}
                    onChange={(ev) => {
                      setTag(ev.target.value);
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => {
                      if (!tags.includes(tag)) {
                        setTags((prev) => [...prev, tag]);
                      }
                    }}
                  >
                    Add tag
                  </Button>
                  <div>
                    {/* {tags.map((txt, idx) => {
                      return (
                        <Chip
                          label={txt}
                          style={{ margin: 5 }}
                          onDelete={() => {
                            deleteTag(txt);
                          }}
                          key={txt}
                        />
                      );
                    })} */}
                  </div>
                </Paper>
              </Grid>
              <Grid item md={8} xs={8}>
                <Paper className={classes.asidePaper}>
                  <FormControl className={classes.tags}>
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                      id="category"
                      value={category}
                      onChange={(ev) => {
                        setCategory(ev.target.value);
                      }}
                    >
                      <MenuItem value={`Uncategorized`}>Uncategorized</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AdminLayout>
  );
}

export default PostBlog;
