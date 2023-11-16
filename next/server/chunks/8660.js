exports.id = 8660;
exports.ids = [8660];
exports.modules = {

/***/ 76360:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7535))

/***/ }),

/***/ 44023:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 82074:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 69346))

/***/ }),

/***/ 7535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57091);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function error() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen items-center flex-col justify-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-4 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-xl font-bold",
                        children: "Application error occured!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Please try to reloading page this might get help to get rid from error"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                    className: "text-white",
                    children: "Back to Home"
                })
            })
        ]
    });
}


/***/ }),

/***/ 96328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Button({ children, className, loading, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        disabled: loading || props.disabled,
        className: `rounded-md bg-primary px-3 py-3  ${className}`,
        children: !loading ? children : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-center gap-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-6 w-6 animate-spin rounded-full border-2 border-b-white border-l-white border-t-white"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Loading..."
                })
            ]
        })
    });
}


/***/ }),

/***/ 64530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const ClientOnly = ({ children })=>{
    const [hasMounted, setHasMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHasMounted(true);
        return ()=>{
            setHasMounted(false);
        };
    }, []);
    if (!hasMounted) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientOnly);


/***/ }),

/***/ 57091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zx: () => (/* reexport */ Button["default"]),
  II: () => (/* reexport */ Input["default"]),
  gx: () => (/* reexport */ textarea_Textarea),
  ZD: () => (/* reexport */ Toggle)
});

// UNUSED EXPORTS: ClientOnly, PDFViewer, Sidebar, Tag

// EXTERNAL MODULE: ./components/button/Button.tsx
var Button = __webpack_require__(96328);
// EXTERNAL MODULE: ./components/client_only/ClientOnly.tsx
var ClientOnly = __webpack_require__(64530);
// EXTERNAL MODULE: ./components/input/Input.tsx
var Input = __webpack_require__(21866);
// EXTERNAL MODULE: ./components/pdf_viewer/PDFViewer.tsx
var PDFViewer = __webpack_require__(87232);
// EXTERNAL MODULE: ./components/sidebar/Sidebar.tsx + 1 modules
var Sidebar = __webpack_require__(63789);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./components/tag/Tag.tsx

function Tag({ label, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        className: `bg-[#DCF6D6] px-2 py-1 rounded-md text-sm text-primary ${props.className}`,
        children: label
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/textarea/Textarea.tsx


const VARIANTS = {
    outline: "bg-white",
    filled: "bg-gray-100 dark:bg-primaryBg border-2 border dark:border-gray-500 dark:focus-within:border-primary focus-within:border-primary"
};
function Textarea({ label, variant, error, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "",
                className: "mb-2 text-sm",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                ...props,
                className: `h-[200px] resize-none  rounded-md px-2 py-3 outline-none ${VARIANTS[variant]}`
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                className: "mt-1 text-sm text-red-500",
                children: error
            })
        ]
    });
}
/* harmony default export */ const textarea_Textarea = (Textarea);

;// CONCATENATED MODULE: ./components/toggle/Toggle.tsx


function Toggle({ title, value, onChange, name }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: "relative w-fit inline-flex items-center cursor-pointer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                name: name,
                onChange: onChange,
                type: "checkbox",
                checked: value,
                className: "sr-only peer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
                children: title
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/index.ts











/***/ }),

/***/ 21866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
const VARIANTS = {
    outline: "bg-white",
    filled: "bg-gray-100 dark:bg-primaryBg border border-2 dark:border-gray-500 focus-within:border-primary dark:focus-within:border-primary focus-within:border-primary"
};
function Input({ label, variant, error, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "",
                className: "mb-2 text-sm",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...props,
                className: `text-md rounded-md px-2  py-3 outline-none  ${VARIANTS[variant]}`
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                className: "mt-1 text-sm text-red-500",
                children: error
            })
        ]
    });
}


/***/ }),

/***/ 87232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const PDFViewer = ({ pdfFile, url })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            security: "false",
            src: url,
            width: "100%",
            height: "600px"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PDFViewer);


/***/ }),

/***/ 63789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-icons/rx/index.esm.js
var index_esm = __webpack_require__(2175);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(75484);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(64348);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/react-icons/si/index.esm.js
var si_index_esm = __webpack_require__(99266);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(16775);
// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.esm.js
var gi_index_esm = __webpack_require__(93347);
// EXTERNAL MODULE: ./node_modules/react-icons/ci/index.esm.js
var ci_index_esm = __webpack_require__(11408);
// EXTERNAL MODULE: ./node_modules/react-icons/tb/index.esm.js
var tb_index_esm = __webpack_require__(79130);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(17808);
// EXTERNAL MODULE: ./context/useSidebar.tsx
var useSidebar = __webpack_require__(19816);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(14889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(4798);
;// CONCATENATED MODULE: ./utils/cn.ts


const cn = (...inputs)=>{
    return (0,tw_merge/* twMerge */.m)(clsx_default()(inputs));
};

;// CONCATENATED MODULE: ./components/sidebar/Sidebar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


















const styles = {
    li: "flex cursor-pointer items-center gap-4 py-4 px-4",
    icon: "text-2xl"
};
function Sidebar() {
    const [loading, setLoading] = (0,react_.useState)(false);
    const usePath = (0,navigation.usePathname)();
    const sidebar = (0,react_.useContext)(useSidebar/* SidebarContext */.l);
    function isActive(path, isHomePage = false) {
        if (isHomePage) return usePath === path;
        return usePath.includes(path);
    }
    async function handleLogout() {
        if (loading) return;
        setLoading(true);
        try {
            await (0,react.signOut)();
            dist/* toast */.Am.success("Logged out succesfully!");
        } catch (e) {
            dist/* toast */.Am.error("Something went wrong while logging you out!");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${cn("z-50 max-w-[300px] bg-primaryBg text-white fixed top-0 bottom-0 left-0 md:relative", {
            "w-0 md:fixed": !sidebar?.open,
            "w-full md:relative": sidebar?.open
        })}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>sidebar?.handleOpen(!sidebar.open),
                className: "absolute -right-12 bg-primary p-2 rounded-md cursor-pointer flex items-center justify-center top-2 shadow-md",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ci_index_esm/* CiMenuFries */.F3G, {
                    className: "text-2xl"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "overflow-y-auto h-screen py-4 overflow-x-hidden w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-4 p-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/images/logo.png",
                                width: 35,
                                height: 35,
                                alt: "",
                                className: "rounded-md object-contain"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-xl font-semibold",
                                        children: "Onkey"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Workspace dashboard"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "mt-4 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard",
                                className: `${isActive("/dashboard", true) ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: `${styles.li} `,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* RxDashboard */.toC, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Dashboard"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/users",
                                className: `${isActive("/dashboard/users") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fi_index_esm/* FiUser */.fzv, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Users"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/courses",
                                className: `${isActive("/dashboard/courses") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsBook */.R_f, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Courses"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/tags",
                                className: `${isActive("/dashboard/tags") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsFillTagFill */.zig, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Tags"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/lessons",
                                className: `${isActive("/dashboard/lessons") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdOutlineInsertPageBreak */.Xmp, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Lessons"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/quizzes",
                                className: `${isActive("/dashboard/quizzes") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdOutlineQuiz */.OWq, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Quizzes"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/questions",
                                className: `${isActive("/dashboard/questions") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsQuestionSquare */.wHm, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Questions"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/answers",
                                className: `${isActive("/dashboard/answers") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdOutlineQuestionAnswer */.Iqb, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Answers"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/grades",
                                className: `${isActive("/dashboard/grades") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(si_index_esm/* SiGoogleclassroom */.cbR, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Grades"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/enrollments",
                                className: `${isActive("/dashboard/enrollments") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaWpforms */.XFe, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Enrollments"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/progresses",
                                className: `${isActive("/dashboard/progresses") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(gi_index_esm/* GiProgression */.fi_, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Progress"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/user-quizzes",
                                className: `${isActive("/dashboard/user-quizzes") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(tb_index_esm/* TbHomeQuestion */.C9N, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "User Quizzes"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/user-answers",
                                className: `${isActive("/dashboard/user-answers") ? "bg-primary text-white hover:bg-primary" : "hover:bg-gray-700"}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: styles.li,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaUserCheck */.TZR, {
                                            className: styles.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "User Answers"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                onClick: handleLogout,
                                className: styles.li,
                                children: [
                                    loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "h-6 w-6 animate-spin rounded-full border-2 border-b-primary border-l-primary border-t-primary"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(ci_index_esm/* CiLogout */.GAI, {
                                        className: styles.icon
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Log Out"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 60721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ CreateAnswerModelContext),
/* harmony export */   n: () => (/* binding */ CreateAnswerModalProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CreateAnswerModelContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const CreateAnswerModalProvider = ({ children })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onOpen = ()=>setOpen(true);
    const onClose = ()=>setOpen(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateAnswerModelContext.Provider, {
        value: {
            open,
            onClose,
            onOpen
        },
        children: children
    });
};


/***/ }),

/***/ 58359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ CreateTagModalProvider),
/* harmony export */   Y: () => (/* binding */ CreateTagModelContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CreateTagModelContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const CreateTagModalProvider = ({ children })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onOpen = ()=>setOpen(true);
    const onClose = ()=>setOpen(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateTagModelContext.Provider, {
        value: {
            open,
            onClose,
            onOpen
        },
        children: children
    });
};


/***/ }),

/***/ 19816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ SidebarContextProvider),
/* harmony export */   l: () => (/* binding */ SidebarContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const SidebarContextProvider = ({ children })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const handleOpen = (val)=>setOpen(val);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContext.Provider, {
        value: {
            open,
            handleOpen
        },
        children: children
    });
};


/***/ }),

/***/ 69346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33518);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53167);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_useCreateAnswerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60721);
/* harmony import */ var _context_useCreateTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58359);
/* harmony import */ var _context_useSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19816);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Providers({ children }) {
    const client = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__/* .Toaster */ .x7, {
                position: "bottom-left"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
                client: client,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_useSidebar__WEBPACK_IMPORTED_MODULE_6__/* .SidebarContextProvider */ .f, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_useCreateAnswerContext__WEBPACK_IMPORTED_MODULE_4__/* .CreateAnswerModalProvider */ .n, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_useCreateTag__WEBPACK_IMPORTED_MODULE_5__/* .CreateTagModalProvider */ .V, {
                            children: children
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 94363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17814);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Avinash\Downloads\temp\app\error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 32613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Roboto","arguments":[{"weight":["100","300","400","500","700","900"],"subsets":["vietnamese"]}],"variableName":"roboto"}
var target_path_app_layout_tsx_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_vietnamese_variableName_roboto_ = __webpack_require__(73642);
var target_path_app_layout_tsx_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_vietnamese_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_vietnamese_variableName_roboto_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./providers/Providers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Avinash\Downloads\temp\providers\Providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Providers = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(92817);
;// CONCATENATED MODULE: ./app/layout.tsx




const metadata = {
    title: "Onkey",
    description: "Onkey dashboard"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: `${(target_path_app_layout_tsx_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_vietnamese_variableName_roboto_default()).className} bg-white dark:bg-darkBg`,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Providers, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 61892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zx: () => (/* reexport */ Button),
  qx: () => (/* reexport */ ClientOnly),
  YE: () => (/* reexport */ Sidebar),
  Vp: () => (/* reexport */ Tag)
});

// UNUSED EXPORTS: Input, PDFViewer, Textarea, Toggle

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./components/button/Button.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Avinash\Downloads\temp\components\button\Button.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Button = (__default__);
;// CONCATENATED MODULE: ./components/client_only/ClientOnly.tsx

const ClientOnly_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Avinash\Downloads\temp\components\client_only\ClientOnly.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ClientOnly_esModule, $$typeof: ClientOnly_$$typeof } = ClientOnly_proxy;
const ClientOnly_default_ = ClientOnly_proxy.default;


/* harmony default export */ const ClientOnly = (ClientOnly_default_);
;// CONCATENATED MODULE: ./components/input/Input.tsx

const Input_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Avinash\Downloads\temp\components\input\Input.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Input_esModule, $$typeof: Input_$$typeof } = Input_proxy;
const Input_default_ = Input_proxy.default;


/* harmony default export */ const Input = ((/* unused pure expression or super */ null && (Input_default_)));
;// CONCATENATED MODULE: ./components/pdf_viewer/PDFViewer.tsx

const PDFViewer_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Avinash\Downloads\temp\components\pdf_viewer\PDFViewer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: PDFViewer_esModule, $$typeof: PDFViewer_$$typeof } = PDFViewer_proxy;
const PDFViewer_default_ = PDFViewer_proxy.default;


/* harmony default export */ const PDFViewer = ((/* unused pure expression or super */ null && (PDFViewer_default_)));
;// CONCATENATED MODULE: ./components/sidebar/Sidebar.tsx

const Sidebar_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Avinash\Downloads\temp\components\sidebar\Sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Sidebar_esModule, $$typeof: Sidebar_$$typeof } = Sidebar_proxy;
const Sidebar_default_ = Sidebar_proxy.default;


/* harmony default export */ const Sidebar = (Sidebar_default_);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./components/tag/Tag.tsx

function Tag({ label, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `bg-[#DCF6D6] px-2 py-1 rounded-md text-sm text-primary ${props.className}`,
        children: label
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
;// CONCATENATED MODULE: ./components/textarea/Textarea.tsx


const VARIANTS = {
    outline: "bg-white",
    filled: "bg-gray-100 dark:bg-primaryBg border-2 border dark:border-gray-500 dark:focus-within:border-primary focus-within:border-primary"
};
function Textarea({ label, variant, error, ...props }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ _jsx("label", {
                htmlFor: "",
                className: "mb-2 text-sm",
                children: label
            }),
            /*#__PURE__*/ _jsx("textarea", {
                ...props,
                className: `h-[200px] resize-none  rounded-md px-2 py-3 outline-none ${VARIANTS[variant]}`
            }),
            error && /*#__PURE__*/ _jsx("small", {
                className: "mt-1 text-sm text-red-500",
                children: error
            })
        ]
    });
}
/* harmony default export */ const textarea_Textarea = ((/* unused pure expression or super */ null && (Textarea)));

;// CONCATENATED MODULE: ./components/toggle/Toggle.tsx


function Toggle({ title, value, onChange, name }) {
    return /*#__PURE__*/ _jsxs("label", {
        className: "relative w-fit inline-flex items-center cursor-pointer",
        children: [
            /*#__PURE__*/ _jsx("input", {
                name: name,
                onChange: onChange,
                type: "checkbox",
                checked: value,
                className: "sr-only peer"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
                children: title
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/index.ts











/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;