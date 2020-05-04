import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const Lowercase = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <SvgIcon {...props}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4500 4500"
        >
          <path d="M1298.8 603.3l-949.7 548.2v2197l950.1 548.4c830.4 479.3 950.3 548.3 952.4 547.5 1.4-.5 429.2-247.3 950.9-548.4l948.4-547.5v-2197l-949.4-548c-522.1-301.4-950.1-548.1-951.2-548.2-1-.2-429.2 246.4-951.5 548zM3080 812.2l830 479.1v1917.4l-830 479.2-830 479.2-830-479.2-830-479.2V1291.3l829.8-479.1c456.3-263.5 829.8-479.1 830-479.2.2 0 373.8 215.6 830.2 479.2z" />
          <path d="M1313 1812c-95.6 6.6-185.8 30.4-260 68.6-18.9 9.8-41.9 23.4-42 24.9-.1 2.7 43.7 127.5 44.9 128 .7.3 7-2.9 14-7.1 16.1-9.7 46.3-24.5 65.6-32.2 61.5-24.5 130.7-38.2 194.1-38.2 132.9-.1 212.5 60.8 232.3 177.5 3.5 20.4 4.2 28.1 4.8 56.1l.6 27.1-36.4.6c-99 1.7-183.4 11.6-259.3 30.3-196.7 48.5-310.6 153.3-332.5 305.9-12.3 85.3 3.9 163.6 47.3 228.4 39.8 59.6 101.1 101.8 175.1 120.5 31.6 8 58.1 11 97 11 32.2 0 47.2-1.2 75.5-6 95.7-16.1 184.8-68.3 240.3-140.5 4.4-5.8 7.5-8.9 8.8-8.9 1 0 1.9.4 1.9 1 0 1.5 13.9 123.1 14.6 127.2l.6 3.8h87.7c59.5 0 88-.3 88.7-1 .8-.8.5-4.4-.8-11.8-4.5-26.4-9.3-70.3-11.8-108.2-3.1-48-3.3-65.1-4-317-.5-142.7-1-261.1-1.4-263-.3-1.9-1-9.4-1.6-16.5-12.2-142.3-69.8-249.1-165-305.9-48.5-29-103.8-46-173-53.2-18-1.8-86.1-2.7-106-1.4zm258.7 638.7c-.4 83.7-.7 99.1-2 106.9-8.8 50.4-33.4 97.1-70.7 134.4-7.4 7.5-17.2 16.5-21.8 20-35.1 27.4-75.3 45-119.2 52.4-87.3 14.7-159.7-10-198.3-67.8-30.4-45.4-38.2-117.7-19.1-175.6 4.6-14.1 15.8-36.3 24.1-47.9 48-66.9 146.8-106.4 293.4-117.1 23.3-1.7 50.9-2.7 84.2-2.8l29.8-.2-.4 97.7zM2769.2 1913.7l.3 78.8 284.3.5 284.4.5-38.3 45c-40.5 47.6-70.5 83.4-88.3 105.3-5.9 7.2-117.8 152.6-248.7 322.9L2725 2776.4l.2 56.5.3 56.6h857v-155l-307.2-.3c-169-.1-307.3-.5-307.3-.8 0-.3 7.1-8.7 15.8-18.7 44.6-51.5 74.5-88.3 112.3-138.2 11.3-14.9 122.9-160.3 248.1-323.1l227.7-296.2 1.1-59.6c.7-32.8.9-60.3.6-61.1-.5-1.3-47.3-1.5-402.6-1.5h-402l.2 78.7zM2027.5 2229.2c-.3.7-.4 33.2-.3 72.3l.3 71h540v-144l-269.8-.3c-215.3-.2-269.9 0-270.2 1z" />
        </svg>
      </SvgIcon>
    </ThemeProvider>
  );
};

export default Lowercase;
