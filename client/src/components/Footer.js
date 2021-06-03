import React from "react";
import { Container, makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 80,
    padding: "60px 0",
    width: "100%",
    background: "#d7d7d8",
    position: "fixed",
    bottom: 0,
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justify="space-around">
          <Grid item md={4}>
            <Typography gutterBottom variant="h5" component="h2">
              Read blogs.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              To start writing blogs, read a lot of blogs to learn how other
              people write and convey their learnings.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography gutterBottom variant="h5" component="h2">
              Brainstorm.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Take your ideas and visualize the concepts that you are going to
              write. It makes it easier to write the blogs.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography gutterBottom variant="h5" component="h2">
              Write and Share.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Tell a fact, story or share a knowlege around a particular topic
              you choose. Share it with the world with us.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
