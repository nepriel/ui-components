import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Divider,
  Typography,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import { Field, useFormikContext } from "formik";

import theme from "../theme";

import Password from "../FieldElements/Password";
import TextField from "../FieldElements/TextField";
import Button from "../Buttons/Button";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      // height: theme.spacing(64),
    },
  },
}));

const Register = ({ goToLogin }) => {
  const classes = useStyles();
  const { handleSubmit } = useFormikContext();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Grid
            container
            spacing={2}
            style={{
              height: theme.spacing(7),
            }}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <Typography
                variant="button"
                gutterBottom
                onClick={goToLogin}
                style={{
                  height: theme.spacing(5),
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                }}
              >
                se connecter
              </Typography>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
          <Divider variant="middle" />
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid
              item
              xs={10}
              style={{
                display: "flex",
                //   backgroundColor: theme.palette.primary.light,
                // height: theme.spacing(25),
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                marginBottom: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}
            >
              <Field
                as={TextField}
                type="input"
                label="prénom"
                name="firstname"
                color="primary"
              />
              <Field
                as={TextField}
                type="input"
                label="nom"
                name="lastname"
                color="primary"
              />
              <Field
                as={TextField}
                type="input"
                label="mail"
                name="mail"
                color="primary"
              />
              <Field
                as={Password}
                withStrengthMeter
                label="mot de passe"
                name="password"
                color="primary"
              />
            </Grid>
            <Grid item xs={1}></Grid> <Grid item xs={1}></Grid>
            <Grid item xs={10} style={{ marginBottom: theme.spacing(4) }}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleSubmit}
                style={{ height: "60px" }}
              >
                créer un compte
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

Register.propTypes = {
  goToLogin: PropTypes.func,
};

export default Register;
