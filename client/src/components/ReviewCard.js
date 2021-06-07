import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
  CardActionArea,
} from "@material-ui/core";
export default function ReviewCard({ content, author, createdAt }) {
  const fullDate = new Date(createdAt);
  const month = fullDate.getMonth();
  const day = fullDate.getDay();
  const year = fullDate.getFullYear();
  return (
    <Card>
      <Paper>
        <CardContent style={{ background: "grey", color: "white" }}>
          <Typography gutterBottom variant="h5" component="h2">
            {content}
          </Typography>
          <Typography variant="body2" component="p">
            {author}
          </Typography>
          <Typography variant="body2" component="p">
            {`${year}/${month}/${day}`}
          </Typography>
          <Typography paragraph></Typography>
        </CardContent>
      </Paper>
    </Card>
  );
}
