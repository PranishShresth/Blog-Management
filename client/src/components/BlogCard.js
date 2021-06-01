import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Chip,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "100%" },
  media: {
    height: 200,
  },
}));
function BlogCard(props) {
  const classes = useStyles();
  const { blogTitle, blogId, blogCategory } = props;
  return (
    <div className={classes.root}>
      <CardMedia
        image="https://cdn.vox-cdn.com/thumbor/4hL2bA5OUf0lSqR2WlY9ogSYtTE=/152x62:1340x953/920x613/filters:focal(615x92:829x306):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66220207/the_child_star_wars_gallery_5e3204be4f668.0.jpg"
        className={classes.media}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {blogTitle}
        </Typography>
        <Typography paragraph>{blogCategory}</Typography>
      </CardContent>
    </div>
  );
}

export default BlogCard;