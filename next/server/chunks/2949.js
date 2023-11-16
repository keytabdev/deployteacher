"use strict";
exports.id = 2949;
exports.ids = [2949];
exports.modules = {

/***/ 92949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ handler),
/* harmony export */   POST: () => (/* binding */ handler),
/* harmony export */   authOptions: () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32930);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25214);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1215);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94658);




const authOptions = {
    providers: [
        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                try {
                    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/auth/local", {
                        identifier: credentials?.email,
                        password: credentials?.password
                    });
                    // find role of current user
                    const { data: roleData } = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/users/${res.data.user.id}?populate=role`, {
                        headers: {
                            Authorization: `Bearer ${res.data.jwt}`
                        }
                    });
                    if (roleData.role.type === "creator") {
                        return {
                            email: res.data.user.email,
                            ...res.data
                        };
                    } else {
                        throw new Error("You are not authenticated as a creator!");
                    }
                } catch (err) {
                    if (err instanceof axios__WEBPACK_IMPORTED_MODULE_3__/* .AxiosError */ .d7) {
                        throw new Error(err.response?.data.error.message);
                    } else {
                        throw new Error(err);
                    }
                }
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user })=>{
            return Promise.resolve({
                ...token,
                ...user
            });
        },
        session: ({ session, token, user })=>{
            // @ts-ignore
            session.user.data = token.user;
            // @ts-ignore
            session.user.token = token.jwt;
            return Promise.resolve(session);
        }
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug:  true ? false : 0,
    session: {
        strategy: "jwt"
    }
};
const handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions);




/***/ }),

/***/ 32930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26274);

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
    headers: {
        "Content-Type": "application/json"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ })

};
;