/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: /product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim ()

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard React Base Styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Soft UI Dashboard React Helper Function
import rgba from "assets/theme/functions/rgba";

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { xxl } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: white.main,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: xxl,
    },
  },
};

export default card;