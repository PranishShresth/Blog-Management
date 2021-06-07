import React, { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, TextField, Button, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import {
  fetchBlogSuccess,
  blogError,
  getReviewsSuccess,
} from "../actions/actions";
import { BlogContext } from "../context/BlogContext/BlogContext";
import { UserContext } from "../context/UserContext/UserContext";
import ReviewCard from "../components/ReviewCard";
import axios from "../utils/axios";

function Blog() {
  const { userState, userDispatch } = useContext(UserContext);
  const { blogState, blogDispatch } = useContext(BlogContext);
  const [review, setReview] = useState("");
  const params = useParams();

  useEffect(() => {
    async function getBlogById() {
      try {
        const blog = await axios.get(`/api/blog/${params.blogId}`);
        blogDispatch(fetchBlogSuccess(blog.data));
      } catch (err) {
        blogDispatch(blogError(err));
      }
    }

    async function getReviews() {
      try {
        const reviews = await axios.get(`/api/blog/${params.blogId}/review`);
        blogDispatch(getReviewsSuccess(reviews.data));
      } catch (err) {
        blogDispatch(blogError(err));
      }
    }
    getBlogById();
    getReviews();

    return () => {
      blogDispatch({ type: "BLOG_UNLOADED" });
    };
  }, [blogDispatch, params.blogId]);

  const handleReviewSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { data } = axios.post("/api/blog/review", {
        content: review,
        blog: params.blogId,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="blog">
      <Header />
      <Container maxWidth="lg" style={{ margin: "100px 0" }}>
        {blogState.loading && <div>Loading...</div>}
        <div className="blogContainer">
          <div
            dangerouslySetInnerHTML={{ __html: blogState.blog?.content }}
          ></div>
        </div>

        {userState.authenticated && (
          <form onSubmit={handleReviewSubmit}>
            <TextField
              id="review"
              label="Review"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={review}
              onChange={(ev) => setReview(ev.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ margin: "30px 0" }}
            >
              Add Review
            </Button>
          </form>
        )}

        <h1>Reviews</h1>

        <Grid container spacing={3}>
          {blogState.reviews?.reviews?.map((review) => {
            return (
              <Grid item key={review._id} md={12} lg={12} xs={12}>
                <ReviewCard
                  content={review.content}
                  author={review.author.username}
                  createdAt={review.createdAt}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;
