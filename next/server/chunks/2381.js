"use strict";
exports.id = 2381;
exports.ids = [2381];
exports.modules = {

/***/ 92381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Questions)
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
// EXTERNAL MODULE: ./services/question/QuestionService.ts
var QuestionService = __webpack_require__(60224);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(53167);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(23803);
var qs_lib_default = /*#__PURE__*/__webpack_require__.n(qs_lib);
;// CONCATENATED MODULE: ./app/dashboard/questions/useQuestions.ts






function useQuestions(token, customQuery) {
    const queryClient = (0,lib.useQueryClient)();
    const [search, setSearch] = (0,react_.useState)("");
    const query = (0,useDebounce/* default */.Z)(search, 500);
    const [page, setPage] = (0,react_.useState)(1);
    const questionsQuery = qs_lib_default().stringify({
        sort: [
            "createdAt:desc"
        ],
        pagination: {
            page: page,
            pageSize: 10
        },
        filters: {
            $or: [
                {
                    id: {
                        $eq: query
                    }
                },
                {
                    question_text: {
                        $containsi: query
                    }
                },
                {
                    question_type: {
                        $containsi: query
                    }
                },
                {
                    quiz: {
                        title: {
                            $containsi: query
                        }
                    }
                }
            ],
            $and: [
                customQuery && {
                    quiz: {
                        id: {
                            $eq: customQuery
                        }
                    }
                }
            ]
        },
        fields: [
            "question_text",
            "question_type"
        ],
        populate: {
            quiz: {
                fields: [
                    "title"
                ]
            }
        }
    }, {
        encodeValuesOnly: true
    });
    const { data: questions, isLoading } = (0,lib.useQuery)([
        "questions",
        query,
        page
    ], ()=>QuestionService/* default */.Z.getQuestions(token, questionsQuery), {
        onError: ()=>dist/* default */.ZP.error("something went wrong please try again after refreshing")
    });
    async function deleteQuestion(id) {
        await QuestionService/* default */.Z.deleteQuestion(token, id);
        await queryClient.invalidateQueries("questions");
    }
    return {
        deleteQuestion,
        search,
        setSearch,
        page,
        setPage,
        questions,
        isLoading
    };
}

;// CONCATENATED MODULE: ./app/dashboard/questions/Questions.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function Questions({ token, customQuery }) {
    const { deleteQuestion, search, setSearch, page, setPage, questions, isLoading } = useQuestions(token, customQuery);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full p-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-2xl font-bold",
                        children: "Questions"
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
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/questions/create",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components/* Button */.zx, {
                                    className: "flex w-fit items-center gap-2 text-white",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsPlusLg */.B8K, {
                                                className: "text-xl"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Add question"
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
                            className: "w-full min-w-[750px]  rounded-md border bg-white p-4 shadow-lg dark:border-gray-600 dark:bg-primaryBg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    className: "border-b dark:border-gray-600 ",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Question text"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Type"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-4 font-bold",
                                                children: "Quiz name"
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
                                    }) : questions?.data && questions?.data.length > 0 ? (questions?.data.map(({ id, attributes })=>{
                                        const { question_text, question_type, createdAt, quiz } = attributes;
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            className: "w-full hover:bg-gray-100 dark:hover:bg-transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: id
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: question_text
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: question_type
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "p-4 text-left",
                                                    children: quiz.data?.attributes.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                    className: "flex items-center justify-end gap-2 p-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/dashboard/questions/${id}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdOutlineModeEdit */.yMw, {
                                                                className: "cursor-pointer text-2xl text-gray-500"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(DeleteTableItem/* default */.Z, {
                                                            fn: deleteQuestion,
                                                            title: `${question_text}`,
                                                            label: "question",
                                                            id: id.toString(),
                                                            keys: [
                                                                "questions"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, id);
                                    })) : /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        colSpan: 6,
                                        className: "p-4 text-center",
                                        children: "No questions found"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PaginatedCount/* default */.Z, {
                        page: page,
                        pageCount: questions?.meta.pagination.pageCount || 1,
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