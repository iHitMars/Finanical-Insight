/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: /product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim ()

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */

function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
