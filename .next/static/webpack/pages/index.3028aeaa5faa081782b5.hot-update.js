self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var _SpeakerList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerList */ "./src/components/SpeakerList.js");
/* harmony import */ var _SpeakerToolBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeakerToolBar */ "./src/components/SpeakerToolBar.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Development\\React\\Code\\design-react-components\\src\\components\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();







var Speakers = function Speakers(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      showSessions = _useState[0],
      setShowSessions = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('light'),
      theme = _useState2[0],
      setTheme = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: theme === 'light' ? 'container-fluid light' : 'container-fluid dark',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.default, {
      theme: theme
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerToolBar__WEBPACK_IMPORTED_MODULE_3__.default, {
      theme: theme,
      setTheme: setTheme,
      showSessions: showSessions,
      setShowSessions: setShowSessions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerList__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(Speakers, "yxHOn5N/KtgcT/bKbDfmimfpnrA=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd1Nlc3Npb25zIiwic2V0U2hvd1Nlc3Npb25zIiwidGhlbWUiLCJzZXRUaGVtZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVjQywrQ0FBUSxDQUFDLElBQUQsQ0FGdEI7QUFBQSxNQUVuQkMsWUFGbUI7QUFBQSxNQUVMQyxlQUZLOztBQUFBLG1CQUdBRiwrQ0FBUSxDQUFDLE9BQUQsQ0FIUjtBQUFBLE1BR25CRyxLQUhtQjtBQUFBLE1BR1pDLFFBSFk7O0FBSzFCLHNCQUNFO0FBQUssYUFBUyxFQUFFRCxLQUFLLEtBQUssT0FBVixHQUFvQix1QkFBcEIsR0FBOEMsc0JBQTlEO0FBQUEsNEJBQ0UsOERBQUMsNENBQUQ7QUFBUSxXQUFLLEVBQUVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFDRSxXQUFLLEVBQUVBLEtBRFQ7QUFDZ0IsY0FBUSxFQUFFQyxRQUQxQjtBQUVFLGtCQUFZLEVBQUVILFlBRmhCO0FBRThCLHFCQUFlLEVBQUVDO0FBRi9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFLDhEQUFDLGlEQUFEO0FBQWEsVUFBSSxFQUFFRyw4Q0FBSUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FkRDs7R0FBTVAsUTs7S0FBQUEsUTtBQWdCTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDI4YWVhYTVmYWEwODE3ODJiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tICcuLi8uLi9TcGVha2VyRGF0YSdcclxuaW1wb3J0IFNwZWFrZXJMaXN0IGZyb20gJy4vU3BlYWtlckxpc3QnXHJcbmltcG9ydCBTcGVha2VyVG9vbEJhciBmcm9tICcuL1NwZWFrZXJUb29sQmFyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgW3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJ2xpZ2h0Jyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09ICdsaWdodCcgPyAnY29udGFpbmVyLWZsdWlkIGxpZ2h0JyA6ICdjb250YWluZXItZmx1aWQgZGFyayd9PlxyXG4gICAgICA8SGVhZGVyIHRoZW1lPXt0aGVtZX0vPlxyXG4gICAgICA8U3BlYWtlclRvb2xCYXIgXHJcbiAgICAgICAgdGhlbWU9e3RoZW1lfSBzZXRUaGVtZT17c2V0VGhlbWV9IFxyXG4gICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfSBzZXRTaG93U2Vzc2lvbnM9e3NldFNob3dTZXNzaW9uc30vPlxyXG4gICAgICA8U3BlYWtlckxpc3QgZGF0YT17ZGF0YX0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==