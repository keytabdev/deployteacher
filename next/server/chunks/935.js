"use strict";
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 40562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21830);

class AnswerService {
    static async getAnswers(token, query) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/answers?${query ? query : ""}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async getAnswerById(token, id) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/answers/${id}?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async deleteByID(token, id) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/answers/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async createAnswer(token, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/answers", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async updateAnswer(token, id, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/answers/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerService);


/***/ }),

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ CreateAnswerSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58952);

const CreateAnswerSchema = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry({
    answerText: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().trim("answer text should be valid").required("answer text is required"),
    isCorrect: yup__WEBPACK_IMPORTED_MODULE_0__/* .boolean */ .O7().default(false)
});


/***/ })

};
;