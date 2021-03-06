import React from "react";
import PropTypes from "prop-types";
import { TextField as MaterialTextfield } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const TextField = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MaterialTextfield {...props} fullWidth />
    </ThemeProvider>
  );
};

TextField.propTypes = {
  dummy: PropTypes.string,
};

export default TextField;
