"use strict";
exports.id = 2466;
exports.ids = [2466];
exports.modules = {

/***/ 92466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Quizzes)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/index.ts + 3 modules
var components = __webpack_require__(57091);
// EXTERNAL MODULE: ./components/delete_table_item/DeleteTableItem.tsx
var DeleteTableItem = __webpack_require__(54698);
// EXTERNAL MODULE: ./components/loader/Loader.tsx
var Loader = __webpack_require__(51361);
// EXTERNAL MODULE: ./components/paginated_count/PaginatedCount.tsx
var PaginatedCount = __webpack_require__(84824);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(75484);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(64348);
// EXTERNAL MODULE: ./hooks/useDebounce.ts
var useDebounce = __webpack_require__(15890);
// EXTERNAL MODULE: ./services/quiz/QuizService.ts
var QuizService = __webpack_require__(97010);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(53167);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(23803);
var qs_lib_default = /*#__PURE__*/__webpack_require__.n(qs_lib);
;// CONCATENATED MODULE: ./app/dashboard/quizzes/useQuizzes.ts






function useQuizzes(token, customQuery) {
    const queryClient = (0,lib.useQueryClient)();
    const [query, setQuery] = (0,react_.useState)("");
    const [page, setPage] = (0,react_.useState)(1);
    const debounceQuery = (0,useDebounce/* default */.Z)(query, 500);
    const quizzesQuery = qs_lib_default().stringify({
        sort: [
            "createdAt:desc"
        ],
        pagination: {
            page: page,
            pageSize: 10
        },
        fields: [
            "title",
            "passing_score"
        ],
        populate: {
            lesson: {
                fields: [
                    "title"
                ]
            }
        },
        filters: {
            $or: [
                {
                    id: {
                        $eq: debounceQuery
                    }
                },
                {
                    title: {
                        $containsi: debounceQuery
                    }
                },
                {
                    lesson: {
                        title: {
                            $containsi: debounceQuery
                        }
                    }
                }
            ],
            $and: [
                customQuery && {
                    lesson: {
                        id: {
                            $eq: customQuery
                        }
                    }
                }
            ]
        }
    }, {
        encodeValuesOnly: true
    });
    const { data: quizzes, isLoading } = (0,lib.useQuery)([
        "quizzes",
        debounceQuery,
        page
    ], ()=>QuizService/* default */.Z.getQuizzes(token, quizzesQuery), {
        onError: ()=>dist/* default */.ZP.error("something went wrong please try again after refreshing")
    });
    async function deleteQuiz(id) {
        await QuizService/* default */.Z.deleteByID(token, id);
        await queryClient.invalidateQueries("quizzes");
    }
    return {
        deleteQuiz,
        quizzes,
        isLoading,
        page,
        setPage,
        setQuery,
        query
    };
}

;// CONCATENATED MODULE: ./app/dashboard/quizzes/Quizzes.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function Quizzes({ token, customQuery }) {
    const { deleteQuiz, quizzes, isLoading, page, setPage, setQuery, query } = useQuizzes(token, customQuery);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-2xl font-bold",
                        children: "Quizzes"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ml-auto flex w-full items-center justify-end gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-3 rounded-md border bg-gray-100 px-3 py-3",
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
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/quizzes/create",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components/* Button */.zx, {
                                    className: "flex w-fit items-center gap-2 text-white",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsPlusLg */.B8K, {
                                                className: "text-xl"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Add quiz"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-8 rounded-md shadow-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                            className: "w-full min-w-[750px]  rounded-md bg-white p-4 shadow-lg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    className: "border-b",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Quiz name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Lesson name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Passing score"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 text-right font-bold"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        colSpan: 5,
                                        className: "p-4 text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {})
                                    }) : quizzes?.data && quizzes.data.length > 0 ? (quizzes?.data.map(({ id, attributes })=>{
                                        const { title, lesson, passing_score } = attributes;
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            className: "w-full hover:bg-gray-100",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: id
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: lesson.data?.attributes.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: passing_score
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                    className: "flex items-center justify-end gap-2 p-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/dashboard/quizzes/${id}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdOutlineModeEdit */.yMw, {
                                                                className: "cursor-pointer text-2xl text-gray-500"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(DeleteTableItem/* default */.Z, {
                                                            fn: deleteQuiz,
                                                            title: `${title}`,
                                                            label: "quiz",
                                                            id: id.toString()
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, id);
                                    })) : /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        colSpan: 4,
                                        className: "p-4 text-center",
                                        children: "No quizzes found"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PaginatedCount/* default */.Z, {
                        page: page,
                        pageCount: quizzes?.meta.pagination.pageCount || 1,
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