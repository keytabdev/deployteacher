"use strict";
exports.id = 7010;
exports.ids = [7010];
exports.modules = {

/***/ 97010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21830);

class QuizService {
    static async getQuizzes(token, query) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/quizzes?${query ? query : ""}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async getQuizzByID(token, id) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/quizzes/${id}?populate[lesson][populate][thumbnail]=*`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async deleteByID(token, id) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/quizzes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async createQuiz(token, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/quizzes`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async updateQuiz(token, id, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/quizzes/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizService);


/***/ })

};
;