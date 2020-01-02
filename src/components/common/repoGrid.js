import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const REPOSITORY = [
  "ALL",
  "JAVASCRIPT",
  "RUBY",
  "PYTHON",
  "JAVA",
  "ANGULAR",
  "PYTHON",
  "JAVA",
  "ANGULAR"
];

const useStyle = makeStyles({
  card: {
    minHeight: 100,
    backgroundColor: "aliceblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const RepoGrid = props => {
  const classes = useStyle();
  return (
    <div>
      <Grid container spacing={2}>
        {REPOSITORY.map(repo => {
          return (
            <Grid item xs={4} md={2}>
              <Card className={classes.card} elevation={1}>
                {" "}
                <Typography>{repo}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RepoGrid;
