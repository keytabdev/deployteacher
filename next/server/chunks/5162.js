"use strict";
exports.id = 5162;
exports.ids = [5162];
exports.modules = {

/***/ 85162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CreateAnswer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/index.ts + 3 modules
var components = __webpack_require__(57091);
// EXTERNAL MODULE: ./context/useCreateAnswerContext.tsx
var useCreateAnswerContext = __webpack_require__(60721);
// EXTERNAL MODULE: ./services/answer/AnswerService.ts
var AnswerService = __webpack_require__(40562);
// EXTERNAL MODULE: ./services/question/QuestionService.ts
var QuestionService = __webpack_require__(60224);
// EXTERNAL MODULE: ./validations/answer/CreateAnswerSchema.ts
var CreateAnswerSchema = __webpack_require__(1635);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(6135);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var react_hot_toast_dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(53167);
;// CONCATENATED MODULE: ./app/dashboard/answers/create/useCreateAnswer.ts








function useCreateAnswer(token) {
    const queryClient = (0,lib.useQueryClient)();
    const createAnswerModalContext = (0,react_.useContext)(useCreateAnswerContext/* CreateAnswerModelContext */.f);
    const [questionOptions, setQuestionOptions] = (0,react_.useState)([]);
    const [question, setQuestion] = (0,react_.useState)({
        value: "",
        label: ""
    });
    const { handleChange, handleSubmit, values, errors } = (0,dist.useFormik)({
        initialValues: {
            answerText: "",
            isCorrect: false
        },
        validationSchema: CreateAnswerSchema/* CreateAnswerSchema */.Q,
        async onSubmit (values) {
            await createAnswer(values);
        }
    });
    const { data: questions } = (0,lib.useQuery)([
        "select-questions"
    ], ()=>QuestionService/* default */.Z.getQuestions(token, "?fields[0]=question_text"), {
        staleTime: Infinity,
        onError: ()=>react_hot_toast_dist/* default */.ZP.error("something went wrong, please try again")
    });
    const { mutateAsync: createAnswerMutation, isLoading: loading } = (0,lib.useMutation)((data)=>AnswerService/* default */.Z.createAnswer(token, data), {
        onSuccess: async ()=>{
            await queryClient.invalidateQueries([
                "answers"
            ]);
            createAnswerModalContext?.onClose();
            react_hot_toast_dist/* default */.ZP.success("Answer created successfully");
        }
    });
    async function createAnswer(value) {
        if (!question.value) {
            react_hot_toast_dist/* default */.ZP.error("please select question");
            return;
        }
        try {
            const data = {
                data: {
                    question: question.value,
                    answer_text: value.answerText,
                    is_correct: values.isCorrect
                }
            };
            await createAnswerMutation(data);
        } catch (e) {
            react_hot_toast_dist/* default */.ZP.error(e.response.data.error.message || "something went wrong, please try again!");
        }
    }
    (0,react_.useEffect)(()=>{
        if (!questions) return;
        setQuestionOptions(questions?.data.map((question)=>({
                value: question.id.toString(),
                label: question.attributes.question_text
            })));
    }, [
        questions
    ]);
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        questionOptions,
        question,
        setQuestion,
        loading
    };
}

// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js + 50 modules
var react_select_esm = __webpack_require__(50147);
;// CONCATENATED MODULE: ./app/dashboard/answers/create/CreateAnswer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function CreateAnswer({ token }) {
    const { handleChange, handleSubmit, values, errors, questionOptions, question, setQuestion, loading } = useCreateAnswer(token);
    const createAnswerModalContext = (0,react_.useContext)(useCreateAnswerContext/* CreateAnswerModelContext */.f);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-xl font-bold",
                        children: "Create a new answer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Add the information about the answer"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "rounded-md p-3 shadow-md",
                action: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components/* Input */.II, {
                            name: "answerText",
                            value: values.answerText,
                            onChange: handleChange,
                            error: errors.answerText,
                            label: "Answer text",
                            variant: "filled"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-12 flex items-center gap-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components/* Toggle */.ZD, {
                            name: "isCorrect",
                            title: "Is correct answers",
                            onChange: handleChange,
                            value: values.isCorrect
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "",
                                    className: "mb-2 text-sm",
                                    children: "Choose a question"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_select_esm/* default */.ZP, {
                                    value: question,
                                    onChange: (e)=>setQuestion({
                                            value: e?.value.toString(),
                                            label: e?.label
                                        }),
                                    options: questionOptions
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-end gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components/* Button */.zx, {
                                loading: loading,
                                type: "submit",
                                className: "w-fit text-white",
                                children: "Create answer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components/* Button */.zx, {
                                onClick: createAnswerModalContext?.onClose,
                                className: "w-fit bg-transparent text-primary",
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;