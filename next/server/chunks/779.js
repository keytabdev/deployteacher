"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 60779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M1: () => (/* binding */ createNewCreator),
/* harmony export */   Nq: () => (/* binding */ updateUser),
/* harmony export */   Rf: () => (/* binding */ getUsers),
/* harmony export */   XB: () => (/* binding */ deleteUserByID)
/* harmony export */ });
/* unused harmony exports getAdminUsers, logout, getUserByID */
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21830);


const getUsers = async (token, query)=>{
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/users${query || ""}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};
const getAdminUsers = async (token, query)=>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/users`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};
const logout = async (token)=>{
    const res = await api.get(`/auth/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};
const createNewCreator = async (token, data)=>{
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/auth/local/register`, data);
    return res.data;
};
const getUserByID = async (token, id)=>{
    const res = await api.get(`/users/${id}?populate=role`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};
const updateUser = async (token, id, data)=>{
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.put(`/users/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};
const deleteUserByID = async (token, id)=>{
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};


/***/ })

};
;