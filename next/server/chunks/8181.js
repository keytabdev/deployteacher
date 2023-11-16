"use strict";
exports.id = 8181;
exports.ids = [8181];
exports.modules = {

/***/ 68181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21830);

class TagsService {
    static async getTags(token, query = "") {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/tags${query}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async getTagByID(token, id) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/tags/${id}?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async createTag(token, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/tags", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async updateTag(token, id, data) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/tags/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async deleteTag(token, id) {
        const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/tags/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsService);


/***/ })

};
;