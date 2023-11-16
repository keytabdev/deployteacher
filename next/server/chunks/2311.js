"use strict";
exports.id = 2311;
exports.ids = [2311];
exports.modules = {

/***/ 21830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
    headers: {
        "Content-Type": "application/json"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ 57025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ CreateUserSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58952);

const CreateUserSchema = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry({
    email: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required("email is required").trim().email("email should be valid"),
    password: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().trim().required("password is required"),
    username: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().trim().required("username is required")
});


/***/ }),

/***/ 64421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d7: () => (/* binding */ AxiosError)
/* harmony export */ });
/* unused harmony exports Axios, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, mergeConfig */
/* harmony import */ var _lib_axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);


// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  mergeConfig
} = _lib_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];




/***/ })

};
;