(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/shared/MarkdownRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function parseLine(line) {
    // Headers
    if (line.startsWith("### ")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: "text-base font-semibold text-gray-200 mt-3 mb-1",
        children: parseInline(line.slice(4))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
        lineNumber: 6,
        columnNumber: 39
    }, this);
    if (line.startsWith("## ")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: "text-lg font-semibold text-gray-100 mt-4 mb-1",
        children: parseInline(line.slice(3))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
        lineNumber: 9,
        columnNumber: 38
    }, this);
    if (line.startsWith("# ")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: "text-xl font-bold text-gray-100 mt-4 mb-2",
        children: parseInline(line.slice(2))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
        lineNumber: 12,
        columnNumber: 37
    }, this);
    // Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-sm text-gray-300 ml-4 list-disc",
        children: parseInline(line.slice(2))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
        lineNumber: 17,
        columnNumber: 62
    }, this);
    // Empty line
    if (line.trim() === "") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
        fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
        lineNumber: 22,
        columnNumber: 34
    }, this);
    // Paragraph
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-gray-300 leading-relaxed",
        children: parseInline(line)
    }, void 0, false, {
        fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
function parseInline(text) {
    const parts = [];
    let remaining = text;
    let keyIndex = 0;
    while(remaining.length > 0){
        // Bold
        const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
        // Code
        const codeMatch = remaining.match(/`(.+?)`/);
        const matches = [
            boldMatch ? {
                index: boldMatch.index,
                match: boldMatch,
                type: "bold"
            } : null,
            codeMatch ? {
                index: codeMatch.index,
                match: codeMatch,
                type: "code"
            } : null
        ].filter(Boolean).sort((a, b)=>a.index - b.index);
        if (matches.length === 0) {
            parts.push(remaining);
            break;
        }
        const first = matches[0];
        if (first.index > 0) {
            parts.push(remaining.slice(0, first.index));
        }
        if (first.type === "bold") {
            parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "font-semibold text-gray-200",
                children: first.match[1]
            }, keyIndex++, false, {
                fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
                lineNumber: 54,
                columnNumber: 18
            }, this));
        } else {
            parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "px-1.5 py-0.5 bg-gray-800 rounded text-xs text-emerald-400 font-mono",
                children: first.match[1]
            }, keyIndex++, false, {
                fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
                lineNumber: 58,
                columnNumber: 18
            }, this));
        }
        remaining = remaining.slice(first.index + first.match[0].length);
    }
    return parts;
}
function MarkdownRenderer(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "0ce438c2d73771441435bb6871f26edbfe3153753a8aa587fba189bc753645b4") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ce438c2d73771441435bb6871f26edbfe3153753a8aa587fba189bc753645b4";
    }
    const { content } = t0;
    let t1;
    let t2;
    if ($[1] !== content) {
        const lines = content.split("\n");
        t1 = "space-y-1";
        t2 = lines.map(_MarkdownRendererLinesMap);
        $[1] = content;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t1 || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = MarkdownRenderer;
function _MarkdownRendererLinesMap(line, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: parseLine(line)
    }, i, false, {
        fileName: "[project]/src/components/shared/MarkdownRenderer.tsx",
        lineNumber: 102,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Modal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "8e7cd1cc3523e73d685d603fd099e9d94c738353e1c70fa1655f96c638f4a1b9") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8e7cd1cc3523e73d685d603fd099e9d94c738353e1c70fa1655f96c638f4a1b9";
    }
    const { isOpen, onClose, title, children, size: t1 } = t0;
    const size = t1 === undefined ? "md" : t1;
    let t2;
    if ($[1] !== onClose) {
        t2 = ({
            "Modal[handleKeyDown]": (e)=>{
                if (e.key === "Escape") {
                    onClose();
                }
            }
        })["Modal[handleKeyDown]"];
        $[1] = onClose;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleKeyDown = t2;
    let t3;
    let t4;
    if ($[3] !== handleKeyDown || $[4] !== isOpen) {
        t3 = ({
            "Modal[useEffect()]": ()=>{
                if (isOpen) {
                    document.addEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = "hidden";
                }
                return ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = "";
                };
            }
        })["Modal[useEffect()]"];
        t4 = [
            isOpen,
            handleKeyDown
        ];
        $[3] = handleKeyDown;
        $[4] = isOpen;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    if (!isOpen) {
        return null;
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            sm: "max-w-md",
            md: "max-w-lg",
            lg: "max-w-2xl",
            xl: "max-w-4xl"
        };
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const sizeClasses = t5;
    let t6;
    if ($[8] !== onClose) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Modal.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[8] = onClose;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const t7 = `relative ${sizeClasses[size]} w-full mx-4 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl max-h-[85vh] flex flex-col`;
    let t8;
    if ($[10] !== title) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-gray-100",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Modal.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[10] = title;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/Modal.tsx",
                lineNumber: 96,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Modal.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== onClose) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "text-gray-400 hover:text-gray-200 transition-colors p-1",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Modal.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[13] = onClose;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t10 || $[16] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-6 py-4 border-b border-gray-800",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Modal.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t8;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== children) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 overflow-y-auto",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/shared/Modal.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[18] = children;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t11 || $[21] !== t12 || $[22] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Modal.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
        $[22] = t7;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t13 || $[25] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center",
            children: [
                t6,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Modal.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t6;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    return t14;
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function EmptyState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "fc242e32f6b84fbb5132137d66d3389030462dfdb3556d8accdbbff74b86e8e4") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fc242e32f6b84fbb5132137d66d3389030462dfdb3556d8accdbbff74b86e8e4";
    }
    const { icon, title, description, actionLabel, onAction } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-600 mb-4",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/components/shared/EmptyState.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-medium text-gray-300 mb-1",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/shared/EmptyState.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== description) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mb-6 text-center max-w-sm",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/shared/EmptyState.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[5] = description;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== actionLabel || $[8] !== onAction) {
        t4 = actionLabel && onAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onAction,
            className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors",
            children: actionLabel
        }, void 0, false, {
            fileName: "[project]/src/components/shared/EmptyState.tsx",
            lineNumber: 45,
            columnNumber: 37
        }, this);
        $[7] = actionLabel;
        $[8] = onAction;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t1 || $[11] !== t2 || $[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-16 px-4",
            children: [
                t1,
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/EmptyState.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/memories/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/MarkdownRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/EmptyState.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const typeConfig = {
    core: {
        emoji: "🧠",
        color: "border-purple-500/50 bg-purple-500/5",
        badge: "bg-purple-500/20 text-purple-400",
        label: "Core"
    },
    daily: {
        emoji: "📝",
        color: "border-blue-500/30 bg-blue-500/5",
        badge: "bg-blue-500/20 text-blue-400",
        label: "Daily"
    },
    config: {
        emoji: "⚙️",
        color: "border-amber-500/30 bg-amber-500/5",
        badge: "bg-amber-500/20 text-amber-400",
        label: "Config"
    }
};
function highlightMatches(text, query) {
    if (!query.trim()) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp(`(${escaped})`, "gi"), "**$1**");
}
function getSearchSnippet(content, query, contextChars = 120) {
    if (!query.trim()) return [];
    const lower = content.toLowerCase();
    const q = query.toLowerCase();
    const snippets = [];
    let searchFrom = 0;
    while(snippets.length < 3){
        const idx = lower.indexOf(q, searchFrom);
        if (idx === -1) break;
        const start = Math.max(0, idx - contextChars);
        const end = Math.min(content.length, idx + query.length + contextChars);
        let snippet = content.slice(start, end).replace(/\n/g, " ");
        if (start > 0) snippet = "..." + snippet;
        if (end < content.length) snippet = snippet + "...";
        snippets.push(snippet);
        searchFrom = idx + query.length;
    }
    return snippets;
}
function formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(1)} KB`;
}
function timeAgo(ms) {
    const diff = Date.now() - ms;
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}
function MemoriesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(86);
    if ($[0] !== "0d12ac371d069d7739c3f9af1ca345f3a8916a2ed3e728f67e1678b87adf1426") {
        for(let $i = 0; $i < 86; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0d12ac371d069d7739c3f9af1ca345f3a8916a2ed3e728f67e1678b87adf1426";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDoc, setSelectedDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "MemoriesPage[useEffect()]": ()=>{
                fetch("/api/memories").then(_MemoriesPageUseEffectAnonymous).then({
                    "MemoriesPage[useEffect() > (anonymous)()]": (data)=>{
                        setDocuments(data.documents ?? []);
                        setLoading(false);
                    }
                }["MemoriesPage[useEffect() > (anonymous)()]"]).catch({
                    "MemoriesPage[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["MemoriesPage[useEffect() > (anonymous)()]"]);
            }
        })["MemoriesPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let docs;
    if ($[4] !== documents || $[5] !== search || $[6] !== typeFilter) {
        docs = documents;
        if (typeFilter !== "all") {
            let t3;
            if ($[8] !== typeFilter) {
                t3 = ({
                    "MemoriesPage[docs.filter()]": (d)=>d.type === typeFilter
                })["MemoriesPage[docs.filter()]"];
                $[8] = typeFilter;
                $[9] = t3;
            } else {
                t3 = $[9];
            }
            docs = docs.filter(t3);
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            docs = docs.filter({
                "MemoriesPage[docs.filter()]": (d_0)=>d_0.title.toLowerCase().includes(q) || d_0.content.toLowerCase().includes(q)
            }["MemoriesPage[docs.filter()]"]);
        }
        $[4] = documents;
        $[5] = search;
        $[6] = typeFilter;
        $[7] = docs;
    } else {
        docs = $[7];
    }
    const filtered = docs;
    let t3;
    bb0: {
        if (!search.trim()) {
            let t4;
            if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = new Map();
                $[10] = t4;
            } else {
                t4 = $[10];
            }
            t3 = t4;
            break bb0;
        }
        let map;
        if ($[11] !== filtered || $[12] !== search) {
            map = new Map();
            for (const doc of filtered){
                const snippets = getSearchSnippet(doc.content, search);
                if (snippets.length > 0) {
                    map.set(doc.id, snippets);
                }
            }
            $[11] = filtered;
            $[12] = search;
            $[13] = map;
        } else {
            map = $[13];
        }
        t3 = map;
    }
    const searchResults = t3;
    const t4 = documents.length;
    let stats;
    let t10;
    let t11;
    let t12;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[14] !== documents || $[15] !== loading) {
        t12 = Symbol.for("react.early_return_sentinel");
        bb1: {
            stats = {
                total: t4,
                core: documents.filter(_MemoriesPageDocumentsFilter).length,
                daily: documents.filter(_MemoriesPageDocumentsFilter2).length,
                config: documents.filter(_MemoriesPageDocumentsFilter3).length,
                totalSize: documents.reduce(_MemoriesPageDocumentsReduce, 0)
            };
            if (loading) {
                let t13;
                if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
                    t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto flex items-center justify-center h-64",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 animate-pulse",
                            children: "Loading memories..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/memories/page.tsx",
                            lineNumber: 202,
                            columnNumber: 90
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/memories/page.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, this);
                    $[25] = t13;
                } else {
                    t13 = $[25];
                }
                t12 = t13;
                break bb1;
            }
            t11 = "max-w-6xl mx-auto space-y-6";
            t10 = "flex items-center justify-between";
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: "🧠 Memories"
                }, void 0, false, {
                    fileName: "[project]/src/app/memories/page.tsx",
                    lineNumber: 213,
                    columnNumber: 14
                }, this);
                $[26] = t9;
            } else {
                t9 = $[26];
            }
            t5 = "text-sm text-gray-500 mt-1";
            t6 = stats.total;
            t7 = " documents \xB7 ";
            t8 = formatSize(stats.totalSize);
        }
        $[14] = documents;
        $[15] = loading;
        $[16] = stats;
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
        $[20] = t5;
        $[21] = t6;
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
    } else {
        stats = $[16];
        t10 = $[17];
        t11 = $[18];
        t12 = $[19];
        t5 = $[20];
        t6 = $[21];
        t7 = $[22];
        t8 = $[23];
        t9 = $[24];
    }
    if (t12 !== Symbol.for("react.early_return_sentinel")) {
        return t12;
    }
    let t13;
    if ($[27] !== t5 || $[28] !== t6 || $[29] !== t7 || $[30] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t5,
            children: [
                t6,
                t7,
                t8,
                " total"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[27] = t5;
        $[28] = t6;
        $[29] = t7;
        $[30] = t8;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13 || $[33] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t9;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t10 || $[36] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[35] = t10;
        $[36] = t14;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    let t16;
    if ($[38] !== stats.total) {
        t16 = {
            label: "Total",
            value: stats.total,
            color: "border-gray-700"
        };
        $[38] = stats.total;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== stats.core) {
        t17 = {
            label: "Core",
            value: stats.core,
            color: "border-purple-500/50"
        };
        $[40] = stats.core;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== stats.daily) {
        t18 = {
            label: "Daily",
            value: stats.daily,
            color: "border-blue-500/50"
        };
        $[42] = stats.daily;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== stats.config) {
        t19 = {
            label: "Config",
            value: stats.config,
            color: "border-amber-500/50"
        };
        $[44] = stats.config;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t16 || $[47] !== t17 || $[48] !== t18 || $[49] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-3",
            children: [
                t16,
                t17,
                t18,
                t19
            ].map(_MemoriesPageAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[46] = t16;
        $[47] = t17;
        $[48] = t18;
        $[49] = t19;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }, void 0, false, {
                fileName: "[project]/src/app/memories/page.tsx",
                lineNumber: 338,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    let t22;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "MemoriesPage[<input>.onChange]": (e)=>setSearch(e.target.value)
        })["MemoriesPage[<input>.onChange]"];
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    let t24;
    if ($[53] !== search) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: search,
            onChange: t22,
            placeholder: "Search across all memories... (titles, content, anything)",
            className: "w-full pl-12 pr-4 py-3.5 bg-gray-900 border border-gray-800 rounded-xl text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-gray-600"
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        t24 = search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "MemoriesPage[<button>.onClick]": ()=>setSearch("")
            }["MemoriesPage[<button>.onClick]"],
            className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300",
            children: "✕"
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 356,
            columnNumber: 21
        }, this);
        $[53] = search;
        $[54] = t23;
        $[55] = t24;
    } else {
        t23 = $[54];
        t24 = $[55];
    }
    let t25;
    if ($[56] !== t23 || $[57] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t21,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[56] = t23;
        $[57] = t24;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] !== filtered.length || $[60] !== search) {
        t26 = search.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-500",
            children: [
                "Found ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-400 font-medium",
                    children: filtered.length
                }, void 0, false, {
                    fileName: "[project]/src/app/memories/page.tsx",
                    lineNumber: 377,
                    columnNumber: 73
                }, this),
                " document",
                filtered.length !== 1 ? "s" : "",
                " matching “",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300",
                    children: search
                }, void 0, false, {
                    fileName: "[project]/src/app/memories/page.tsx",
                    lineNumber: 377,
                    columnNumber: 195
                }, this),
                "”"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 377,
            columnNumber: 28
        }, this);
        $[59] = filtered.length;
        $[60] = search;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    let t27;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = [
            "all",
            "core",
            "daily",
            "config"
        ];
        $[62] = t27;
    } else {
        t27 = $[62];
    }
    let t28;
    if ($[63] !== stats || $[64] !== typeFilter) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: t27.map({
                "MemoriesPage[(anonymous)()]": (t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "MemoriesPage[(anonymous)() > <button>.onClick]": ()=>setTypeFilter(t)
                        }["MemoriesPage[(anonymous)() > <button>.onClick]"],
                        className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${typeFilter === t ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                        children: [
                            t !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: typeConfig[t].emoji
                            }, void 0, false, {
                                fileName: "[project]/src/app/memories/page.tsx",
                                lineNumber: 396,
                                columnNumber: 274
                            }, this),
                            t === "all" ? `All (${stats.total})` : `${typeConfig[t].label} (${stats[t]})`
                        ]
                    }, t, true, {
                        fileName: "[project]/src/app/memories/page.tsx",
                        lineNumber: 394,
                        columnNumber: 45
                    }, this)
            }["MemoriesPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[63] = stats;
        $[64] = typeFilter;
        $[65] = t28;
    } else {
        t28 = $[65];
    }
    let t29;
    if ($[66] !== filtered || $[67] !== search || $[68] !== searchResults) {
        t29 = filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl",
                children: "🧠"
            }, void 0, false, {
                fileName: "[project]/src/app/memories/page.tsx",
                lineNumber: 406,
                columnNumber: 53
            }, void 0),
            title: search ? "No matches found" : "No memories yet",
            description: search ? "Try a different search term" : "Memories will appear here as they're created"
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 406,
            columnNumber: 35
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: filtered.map({
                "MemoriesPage[filtered.map()]": (doc_0)=>{
                    const config = typeConfig[doc_0.type];
                    const snippets_0 = searchResults.get(doc_0.id);
                    const preview = doc_0.content.split("\n").filter(_MemoriesPageFilteredMapAnonymous).slice(0, 3).join(" ").slice(0, 200);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "MemoriesPage[filtered.map() > <div>.onClick]": ()=>setSelectedDoc(doc_0)
                        }["MemoriesPage[filtered.map() > <div>.onClick]"],
                        className: `bg-gray-900 border ${config.color} rounded-xl p-5 cursor-pointer hover:scale-[1.01] transition-all group`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: config.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/memories/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 277
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-0.5 text-[10px] font-medium rounded-full ${config.badge}`,
                                                children: config.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/memories/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 324
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/memories/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 236
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-600",
                                        children: formatSize(doc_0.size)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/memories/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 436
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/memories/page.tsx",
                                lineNumber: 413,
                                columnNumber: 181
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors",
                                children: doc_0.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/memories/page.tsx",
                                lineNumber: 413,
                                columnNumber: 517
                            }, this),
                            snippets_0 && snippets_0.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 mb-3",
                                children: snippets_0.slice(0, 2).map(_MemoriesPageFilteredMapAnonymous2)
                            }, void 0, false, {
                                fileName: "[project]/src/app/memories/page.tsx",
                                lineNumber: 413,
                                columnNumber: 667
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 line-clamp-3 mb-3",
                                children: preview
                            }, void 0, false, {
                                fileName: "[project]/src/app/memories/page.tsx",
                                lineNumber: 413,
                                columnNumber: 774
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-3 border-t border-gray-800/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-600 font-mono",
                                        children: doc_0.filename
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/memories/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 927
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-600",
                                        children: timeAgo(doc_0.lastModified)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/memories/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 1004
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/memories/page.tsx",
                                lineNumber: 413,
                                columnNumber: 843
                            }, this)
                        ]
                    }, doc_0.id, true, {
                        fileName: "[project]/src/app/memories/page.tsx",
                        lineNumber: 411,
                        columnNumber: 18
                    }, this);
                }
            }["MemoriesPage[filtered.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 406,
            columnNumber: 254
        }, this);
        $[66] = filtered;
        $[67] = search;
        $[68] = searchResults;
        $[69] = t29;
    } else {
        t29 = $[69];
    }
    const t30 = !!selectedDoc;
    let t31;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "MemoriesPage[<Modal>.onClose]": ()=>setSelectedDoc(null)
        })["MemoriesPage[<Modal>.onClose]"];
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    const t32 = selectedDoc?.title ?? "";
    let t33;
    if ($[71] !== selectedDoc) {
        t33 = selectedDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-4 pb-4 border-b border-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg",
                            children: typeConfig[selectedDoc.type].emoji
                        }, void 0, false, {
                            fileName: "[project]/src/app/memories/page.tsx",
                            lineNumber: 436,
                            columnNumber: 107
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-2 py-0.5 text-xs font-medium rounded-full ${typeConfig[selectedDoc.type].badge}`,
                            children: typeConfig[selectedDoc.type].label
                        }, void 0, false, {
                            fileName: "[project]/src/app/memories/page.tsx",
                            lineNumber: 436,
                            columnNumber: 176
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500 font-mono",
                            children: selectedDoc.filename
                        }, void 0, false, {
                            fileName: "[project]/src/app/memories/page.tsx",
                            lineNumber: 436,
                            columnNumber: 322
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-600",
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/src/app/memories/page.tsx",
                            lineNumber: 436,
                            columnNumber: 401
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500",
                            children: formatSize(selectedDoc.size)
                        }, void 0, false, {
                            fileName: "[project]/src/app/memories/page.tsx",
                            lineNumber: 436,
                            columnNumber: 449
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-600",
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/src/app/memories/page.tsx",
                            lineNumber: 436,
                            columnNumber: 526
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500",
                            children: [
                                "Modified ",
                                timeAgo(selectedDoc.lastModified)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/memories/page.tsx",
                            lineNumber: 436,
                            columnNumber: 574
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/memories/page.tsx",
                    lineNumber: 436,
                    columnNumber: 31
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-invert max-w-none prose-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        content: selectedDoc.content
                    }, void 0, false, {
                        fileName: "[project]/src/app/memories/page.tsx",
                        lineNumber: 436,
                        columnNumber: 727
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/memories/page.tsx",
                    lineNumber: 436,
                    columnNumber: 671
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 436,
            columnNumber: 26
        }, this);
        $[71] = selectedDoc;
        $[72] = t33;
    } else {
        t33 = $[72];
    }
    let t34;
    if ($[73] !== t30 || $[74] !== t32 || $[75] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: t30,
            onClose: t31,
            title: t32,
            size: "xl",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[73] = t30;
        $[74] = t32;
        $[75] = t33;
        $[76] = t34;
    } else {
        t34 = $[76];
    }
    let t35;
    if ($[77] !== t11 || $[78] !== t15 || $[79] !== t20 || $[80] !== t25 || $[81] !== t26 || $[82] !== t28 || $[83] !== t29 || $[84] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t15,
                t20,
                t25,
                t26,
                t28,
                t29,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/memories/page.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[77] = t11;
        $[78] = t15;
        $[79] = t20;
        $[80] = t25;
        $[81] = t26;
        $[82] = t28;
        $[83] = t29;
        $[84] = t34;
        $[85] = t35;
    } else {
        t35 = $[85];
    }
    return t35;
}
_s(MemoriesPage, "xT2I/bpoHDt/yCVpvZ+CBBZlB50=");
_c = MemoriesPage;
function _MemoriesPageFilteredMapAnonymous2(snippet, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-xs text-gray-400 bg-gray-800/50 px-2 py-1.5 rounded border-l-2 border-blue-500/50",
        children: snippet
    }, i, false, {
        fileName: "[project]/src/app/memories/page.tsx",
        lineNumber: 470,
        columnNumber: 10
    }, this);
}
function _MemoriesPageFilteredMapAnonymous(l) {
    return l.trim() && !l.startsWith("#");
}
function _MemoriesPageAnonymous(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-gray-900 border ${s.color} rounded-xl p-4`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl font-bold",
                children: s.value
            }, void 0, false, {
                fileName: "[project]/src/app/memories/page.tsx",
                lineNumber: 476,
                columnNumber: 88
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500",
                children: s.label
            }, void 0, false, {
                fileName: "[project]/src/app/memories/page.tsx",
                lineNumber: 476,
                columnNumber: 135
            }, this)
        ]
    }, s.label, true, {
        fileName: "[project]/src/app/memories/page.tsx",
        lineNumber: 476,
        columnNumber: 10
    }, this);
}
function _MemoriesPageDocumentsReduce(sum, d_4) {
    return sum + d_4.size;
}
function _MemoriesPageDocumentsFilter3(d_3) {
    return d_3.type === "config";
}
function _MemoriesPageDocumentsFilter2(d_2) {
    return d_2.type === "daily";
}
function _MemoriesPageDocumentsFilter(d_1) {
    return d_1.type === "core";
}
function _MemoriesPageUseEffectAnonymous(r) {
    return r.json();
}
var _c;
__turbopack_context__.k.register(_c, "MemoriesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_626379b0._.js.map