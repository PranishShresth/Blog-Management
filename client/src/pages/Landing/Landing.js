import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import { Grid, Container } from "@material-ui/core";

function Landing() {
  return (
    <>
      <Header />
      <Container style={{ marginTop: 100 }} maxWidth="lg">
        <h1>Trending Blogs</h1>

        <Grid container spacing={3}>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
        </Grid>

        <h1>Latest Blogs</h1>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Landing;
