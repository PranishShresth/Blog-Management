import React from "react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import { Grid, Container } from "@material-ui/core";

function Landing() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container style={{ marginTop: 100 }} spacing={3}>
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
          </Grid>{" "}
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>{" "}
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>{" "}
          <Grid item md={4}>
            <BlogCard
              blogTitle="Jhonnatan keeps on making english mistakes"
              blogCategory="frustration"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Landing;
