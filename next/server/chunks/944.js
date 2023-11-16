"use strict";
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 10944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32930);

class CourseService {
    static async createCourse(token, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/courses", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    }
    static updateCourse(token, id, data) {
        return _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/courses/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
    }
    static async getCourseByID(token, id) {
        return await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/courses/${id}?populate[instructor_id]=*&populate[course_image]=*&populate[tags][fields][0]=name&populate[lessons]=*`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    static async deleteByID(token, id) {
        return await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/courses/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    static async getCourses(token, query) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/courses?${query ? query : ""}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseService);


/***/ })

};
;