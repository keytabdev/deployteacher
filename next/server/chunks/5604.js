"use strict";
exports.id = 5604;
exports.ids = [5604];
exports.modules = {

/***/ 25604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Enrollments)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/delete_table_item/DeleteTableItem.tsx
var DeleteTableItem = __webpack_require__(54698);
// EXTERNAL MODULE: ./components/loader/Loader.tsx
var Loader = __webpack_require__(51361);
// EXTERNAL MODULE: ./components/paginated_count/PaginatedCount.tsx
var PaginatedCount = __webpack_require__(84824);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(17370);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(75484);
// EXTERNAL MODULE: ./hooks/useDebounce.ts
var useDebounce = __webpack_require__(15890);
// EXTERNAL MODULE: ./config/axios.ts
var axios = __webpack_require__(21830);
;// CONCATENATED MODULE: ./services/enrollment/EnrollmentService.ts

class EnrollmentService {
    static async getEnrollments(token, query) {
        const res = await axios/* default */.Z.get(`/enrollments?${query ? query : ""}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async getByID(token, id) {
        const res = await axios/* default */.Z.get(`/enrollments/${id}?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
    static async deleteByID(token, id) {
        const res = await axios/* default */.Z.delete(`/enrollments/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    }
}
/* harmony default export */ const enrollment_EnrollmentService = (EnrollmentService);

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(53167);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(23803);
var qs_lib_default = /*#__PURE__*/__webpack_require__.n(qs_lib);
;// CONCATENATED MODULE: ./app/dashboard/enrollments/useEnrollments.ts






function useEnrollments(token, customQuery) {
    const [query, setQuery] = (0,react_.useState)("");
    const [page, setPage] = (0,react_.useState)(1);
    const debounceQuery = (0,useDebounce/* default */.Z)(query, 500);
    const enrollmentQuery = qs_lib_default().stringify({
        sort: [
            "createdAt:desc"
        ],
        pagination: {
            page: page,
            pageSize: 10
        },
        populate: {
            user_id: {
                fields: [
                    "username"
                ]
            },
            course: {
                fields: [
                    "title"
                ]
            }
        },
        fields: [
            "enrollment_date"
        ],
        filters: {
            $or: [
                {
                    id: {
                        $eq: debounceQuery
                    }
                },
                {
                    course: {
                        title: {
                            $containsi: debounceQuery
                        }
                    }
                },
                {
                    user_id: {
                        username: {
                            $containsi: debounceQuery
                        }
                    }
                }
            ],
            course: {
                id: {
                    $eq: customQuery || ""
                }
            }
        }
    }, {
        encodeValuesOnly: true
    });
    const { data: enrollments, isLoading } = (0,lib.useQuery)([
        "enrollments",
        debounceQuery,
        page
    ], ()=>enrollment_EnrollmentService.getEnrollments(token, enrollmentQuery), {
        onError: ()=>dist/* default */.ZP.error("something went wrong please try again after refreshing")
    });
    async function deleteEnrollment(id) {
        return enrollment_EnrollmentService.deleteByID(token, id);
    }
    return {
        deleteEnrollment,
        enrollments,
        isLoading,
        query,
        setQuery,
        page,
        setPage
    };
}

;// CONCATENATED MODULE: ./app/dashboard/enrollments/Enrollments.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Enrollments({ token, customQuery }) {
    const { deleteEnrollment, enrollments, isLoading, query, setQuery, page, setPage } = useEnrollments(token, customQuery);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full p-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ml-auto flex w-full items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-2xl font-bold",
                        children: "Enrollments"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center gap-3 rounded-md border bg-gray-100 px-3 py-3 dark:border-gray-600 dark:bg-primaryBg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsSearch */.dVI, {
                                    className: "text-xl"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "bg-transparent outline-none",
                                    placeholder: "search",
                                    onChange: (e)=>setQuery(e.target.value),
                                    value: query
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-8 rounded-md shadow-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                            className: "w-full min-w-[750px] overflow-x-scroll rounded-md border bg-white p-4 shadow-lg dark:border-none dark:bg-primaryBg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    className: "border dark:border-gray-600",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Username"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Course Name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Enrollment At"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 text-right font-bold"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                    className: "border dark:border-gray-600",
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        colSpan: 5,
                                        className: "p-4 text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {})
                                    }) : enrollments?.data && enrollments.data.length > 0 ? (enrollments?.data.map(({ id, attributes })=>{
                                        const { enrollment_date, course, user_id } = attributes;
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            className: "dark:hover:bg-tra  w-full hover:bg-gray-100 dark:hover:bg-transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: id
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: user_id.data.attributes.username
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: course.data.attributes.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: moment_default()(enrollment_date).format("DD-MMMM-YYYY")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "flex items-center justify-end gap-2 p-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DeleteTableItem/* default */.Z, {
                                                        fn: deleteEnrollment,
                                                        title: `${id}`,
                                                        label: "enrollment",
                                                        id: id.toString(),
                                                        keys: [
                                                            "enrollments"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, id);
                                    })) : /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        colSpan: 5,
                                        className: "p-4 text-center",
                                        children: "No enrollments found"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PaginatedCount/* default */.Z, {
                        page: page,
                        pageCount: enrollments?.meta.pagination.pageCount || 1,
                        setPage: setPage
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;