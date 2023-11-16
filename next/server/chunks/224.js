"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 60224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21830);

class QuestionService {
    static async getQuestions(token, query = "") {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/questions?${query}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async getQuestionByID(token, id) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/questions/${id}?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async createQuestion(token, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/questions", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async updateQuestion(token, id, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/questions/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async deleteQuestion(token, id) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/questions/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionService);


/***/ })

};
;