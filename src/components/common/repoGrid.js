import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

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

const AnchorTag = props => <a {...props} />;

const RepoGrid = props => {
  const classes = useStyle();
  return (
    <div>
      <Grid container spacing={2}>
        {REPOSITORY.map((repo, index) => {
          return (
            <Grid item xs={4} md={2} key={index}>
              <NavLink
                to={`/popular/${repo.toLowerCase()}`}
                style={{
                  textDecoration: "none"
                }}
                component={AnchorTag}
                activeStyle={{ color: "blue" }}
              >
                <Card className={classes.card} elevation={1}>
                  {" "}
                  <Typography>{repo}</Typography>
                </Card>
              </NavLink>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RepoGrid;
