exports.id = 7163;
exports.ids = [7163];
exports.modules = {

/***/ 17163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileViewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33518);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19722);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45489);
/* harmony import */ var _pdf_viewer_PDFViewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87232);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96328);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29102);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const ReactPlayer = (/* unused pure expression or super */ null && (_ReactPlayer));

function FileViewer({ state, setState, label, url, thumbnail }) {
    const uniqueId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
    function removeImage() {
        setState({
            ...state,
            image: null
        });
    }
    async function handleChange(e) {
        const files = e.target.files;
        if (!files) {
            setState({
                ...state,
                error: "please choose course image"
            });
            return;
        }
        const reader = new FileReader();
        reader.readAsArrayBuffer(files[0]);
        reader.addEventListener("error", ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .Am.error("cannot load the media please try choosing again!"));
        reader.addEventListener("load", (e)=>{
            const buffer = e.target?.result;
            if (!buffer) return;
            const blob = new Blob([
                buffer
            ], {
                type: files[0].type
            });
            const url = URL.createObjectURL(blob);
            setState({
                ...state,
                image: files[0],
                dataURL: url
            });
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "",
                className: "mb-2 text-sm",
                children: label
            }),
            state.image || !url ? state.image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex flex-col gap-4",
                children: [
                    state.image.type.includes("image") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative h-[300px] w-full overflow-hidden rounded-md",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: `${state.dataURL}`,
                            alt: "",
                            fill: true,
                            className: "rounded-md object-cover"
                        })
                    }) : state.image.type.includes("pdf") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pdf_viewer_PDFViewer__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            url: state.dataURL
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                            className: " h-[300px] w-[500px]  rounded-md object-cover",
                            controls: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                src: `${state.dataURL}`,
                                type: "video/mp4"
                            })
                        }, `${state.dataURL}`)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        onClick: removeImage,
                        htmlFor: "",
                        className: "absolute right-[0.5em] top-[0.5em] flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 text-xl dark:bg-primaryBg dark:text-white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__/* .AiOutlineClose */ .oHP, {})
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-[200px] w-full max-w-[250px] items-center justify-center rounded-s-md border border-gray-300",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: uniqueId,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex cursor-pointer flex-col items-center justify-center gap-2 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__/* .IoImageOutline */ .tpQ, {
                                            className: "text-3xl"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm",
                                            children: "choose file to upload"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: handleChange,
                                type: "file",
                                id: uniqueId,
                                className: "hidden"
                            })
                        ]
                    }),
                    state.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "text-red-400",
                        children: state.error
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    url?.match(/jpeg|png|jpg|webp/) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative h-[300px] w-full overflow-hidden rounded-md",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: `${url}`,
                            alt: "",
                            fill: true,
                            className: "rounded-md object-cover"
                        })
                    }) : url?.match(/pdf/) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            className: "text-primary bg-white border-primary",
                            type: "button",
                            onClick: ()=>window.open(`${url}`, "__blank"),
                            children: "Open PDF"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                        className: "aspect-video rounded-md object-cover",
                        controls: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                            src: `${url}`,
                            type: `video/mp4`
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: uniqueId,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex cursor-pointer items-center gap-2 hover:text-primary",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__/* .IoImageOutline */ .tpQ, {
                                            className: "text-3xl"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm",
                                            children: "choose file to upload"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: handleChange,
                                type: "file",
                                id: uniqueId,
                                className: "hidden"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 29102:
/***/ (() => {



/***/ })

};
;