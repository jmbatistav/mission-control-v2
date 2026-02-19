(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/convex/_generated/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "components",
    ()=>components,
    "internal",
    ()=>internal
]);
/* eslint-disable */ /**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/server/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/server/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/server/components/index.js [app-client] (ecmascript) <locals>");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyApi"];
const internal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyApi"];
const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["componentsGeneric"])();
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
"[project]/src/app/calendar/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useActiveUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/AssigneeAvatar.tsx [app-client] (ecmascript)");
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
;
;
;
const typeConfig = {
    cron: {
        color: "text-purple-400",
        bg: "bg-purple-500/20 border-purple-500/30",
        emoji: "⏰"
    },
    scheduled: {
        color: "text-blue-400",
        bg: "bg-blue-500/20 border-blue-500/30",
        emoji: "📅"
    },
    deadline: {
        color: "text-red-400",
        bg: "bg-red-500/20 border-red-500/30",
        emoji: "🔴"
    },
    milestone: {
        color: "text-emerald-400",
        bg: "bg-emerald-500/20 border-emerald-500/30",
        emoji: "🏁"
    }
};
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year, month) {
    return new Date(year, month, 1).getDay();
}
function CalendarPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(150);
    if ($[0] !== "992f628a5f55303d4d890ba160f36e67bd774da23af87c735082a15baaf66c30") {
        for(let $i = 0; $i < 150; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "992f628a5f55303d4d890ba160f36e67bd774da23af87c735082a15baaf66c30";
    }
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].calendarEvents.list) ?? [];
    const [activeUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveUser"])();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("month");
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const now = new Date();
    const [currentMonth, setCurrentMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(now.getMonth());
    const [currentYear, setCurrentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(now.getFullYear());
    const createEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].calendarEvents.create);
    const updateEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].calendarEvents.update);
    const removeEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].calendarEvents.remove);
    const t0 = activeUser;
    let t1;
    if ($[1] !== t0) {
        t1 = {
            title: "",
            description: "",
            type: "scheduled",
            schedule: "",
            date: "",
            time: "09:00",
            endDate: "",
            endTime: "",
            recurring: false,
            recurrenceRule: "",
            assignee: t0
        };
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] !== events || $[4] !== typeFilter) {
        t2 = typeFilter === "all" ? events : events.filter({
            "CalendarPage[events.filter()]": (e)=>e.type === typeFilter
        }["CalendarPage[events.filter()]"]);
        $[3] = events;
        $[4] = typeFilter;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const filteredEvents = t2;
    let map;
    if ($[6] !== filteredEvents) {
        map = new Map();
        for (const event of filteredEvents){
            const dateKey = new Date(event.startTime).toISOString().split("T")[0];
            if (!map.has(dateKey)) {
                map.set(dateKey, []);
            }
            map.get(dateKey).push(event);
        }
        $[6] = filteredEvents;
        $[7] = map;
    } else {
        map = $[7];
    }
    const eventsByDate = map;
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfWeek(currentYear, currentMonth);
    let t3;
    if ($[8] !== currentMonth || $[9] !== currentYear) {
        t3 = new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric"
        });
        $[8] = currentMonth;
        $[9] = currentYear;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const monthName = t3;
    let t4;
    if ($[11] !== currentMonth || $[12] !== currentYear) {
        t4 = ({
            "CalendarPage[prevMonth]": ()=>{
                if (currentMonth === 0) {
                    setCurrentMonth(11);
                    setCurrentYear(currentYear - 1);
                } else {
                    setCurrentMonth(currentMonth - 1);
                }
            }
        })["CalendarPage[prevMonth]"];
        $[11] = currentMonth;
        $[12] = currentYear;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    const prevMonth = t4;
    let t5;
    if ($[14] !== currentMonth || $[15] !== currentYear) {
        t5 = ({
            "CalendarPage[nextMonth]": ()=>{
                if (currentMonth === 11) {
                    setCurrentMonth(0);
                    setCurrentYear(currentYear + 1);
                } else {
                    setCurrentMonth(currentMonth + 1);
                }
            }
        })["CalendarPage[nextMonth]"];
        $[14] = currentMonth;
        $[15] = currentYear;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const nextMonth = t5;
    let handleSubmit;
    let resetForm;
    if ($[17] !== activeUser || $[18] !== createEvent || $[19] !== editingId || $[20] !== form.assignee || $[21] !== form.date || $[22] !== form.description || $[23] !== form.endDate || $[24] !== form.endTime || $[25] !== form.recurrenceRule || $[26] !== form.recurring || $[27] !== form.schedule || $[28] !== form.time || $[29] !== form.title || $[30] !== form.type || $[31] !== setForm || $[32] !== updateEvent) {
        handleSubmit = ({
            "CalendarPage[handleSubmit]": async ()=>{
                if (!form.title.trim() || !form.date) {
                    return;
                }
                const startTime = new Date(`${form.date}T${form.time || "09:00"}`).getTime();
                const endTime = form.endDate ? new Date(`${form.endDate}T${form.endTime || form.time || "09:00"}`).getTime() : undefined;
                if (editingId) {
                    await updateEvent({
                        id: editingId,
                        title: form.title,
                        description: form.description || undefined,
                        type: form.type,
                        schedule: form.schedule || undefined,
                        startTime,
                        endTime,
                        recurring: form.recurring,
                        recurrenceRule: form.recurrenceRule || undefined,
                        assignee: form.assignee
                    });
                } else {
                    await createEvent({
                        title: form.title,
                        description: form.description || undefined,
                        type: form.type,
                        schedule: form.schedule || undefined,
                        startTime,
                        endTime,
                        recurring: form.recurring,
                        recurrenceRule: form.recurrenceRule || undefined,
                        assignee: form.assignee
                    });
                }
                resetForm();
            }
        })["CalendarPage[handleSubmit]"];
        resetForm = ({
            "CalendarPage[resetForm]": ()=>{
                setForm({
                    title: "",
                    description: "",
                    type: "scheduled",
                    schedule: "",
                    date: "",
                    time: "09:00",
                    endDate: "",
                    endTime: "",
                    recurring: false,
                    recurrenceRule: "",
                    assignee: activeUser
                });
                setEditingId(null);
                setShowForm(false);
            }
        })["CalendarPage[resetForm]"];
        $[17] = activeUser;
        $[18] = createEvent;
        $[19] = editingId;
        $[20] = form.assignee;
        $[21] = form.date;
        $[22] = form.description;
        $[23] = form.endDate;
        $[24] = form.endTime;
        $[25] = form.recurrenceRule;
        $[26] = form.recurring;
        $[27] = form.schedule;
        $[28] = form.time;
        $[29] = form.title;
        $[30] = form.type;
        $[31] = setForm;
        $[32] = updateEvent;
        $[33] = handleSubmit;
        $[34] = resetForm;
    } else {
        handleSubmit = $[33];
        resetForm = $[34];
    }
    let t6;
    if ($[35] !== setForm) {
        t6 = ({
            "CalendarPage[startEdit]": (event_0)=>{
                const start = new Date(event_0.startTime);
                const end = event_0.endTime ? new Date(event_0.endTime) : null;
                setForm({
                    title: event_0.title,
                    description: event_0.description ?? "",
                    type: event_0.type,
                    schedule: event_0.schedule ?? "",
                    date: start.toISOString().split("T")[0],
                    time: start.toTimeString().slice(0, 5),
                    endDate: end?.toISOString().split("T")[0] ?? "",
                    endTime: end?.toTimeString().slice(0, 5) ?? "",
                    recurring: event_0.recurring,
                    recurrenceRule: event_0.recurrenceRule ?? "",
                    assignee: event_0.assignee
                });
                setEditingId(event_0._id);
                setShowForm(true);
            }
        })["CalendarPage[startEdit]"];
        $[35] = setForm;
        $[36] = t6;
    } else {
        t6 = $[36];
    }
    const startEdit = t6;
    let t7;
    if ($[37] !== activeUser || $[38] !== form || $[39] !== setForm) {
        t7 = ({
            "CalendarPage[openNewOnDate]": (dateStr)=>{
                setForm({
                    ...form,
                    date: dateStr,
                    assignee: activeUser
                });
                setEditingId(null);
                setShowForm(true);
            }
        })["CalendarPage[openNewOnDate]"];
        $[37] = activeUser;
        $[38] = form;
        $[39] = setForm;
        $[40] = t7;
    } else {
        t7 = $[40];
    }
    const openNewOnDate = t7;
    const todayStr = now.toISOString().split("T")[0];
    const selectedDateEvents = selectedDate ? eventsByDate.get(selectedDate) ?? [] : [];
    const upcoming = [
        ...filteredEvents
    ].filter(_CalendarPageAnonymous).sort(_CalendarPageAnonymous2);
    const t8 = "max-w-6xl mx-auto space-y-6";
    let t9;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: "📅 Calendar"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 305,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-1",
                    children: "Scheduled tasks, cron jobs & deadlines"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 305,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        $[41] = t9;
    } else {
        t9 = $[41];
    }
    let t10;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            "month",
            "list"
        ];
        $[42] = t10;
    } else {
        t10 = $[42];
    }
    let t11;
    if ($[43] !== viewMode) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: t10.map({
                "CalendarPage[(anonymous)()]": (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "CalendarPage[(anonymous)() > <button>.onClick]": ()=>setViewMode(v)
                        }["CalendarPage[(anonymous)() > <button>.onClick]"],
                        className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${viewMode === v ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                        children: v === "month" ? "\uD83D\uDCC6 Month" : "\uD83D\uDCCB List"
                    }, v, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 320,
                        columnNumber: 45
                    }, this)
            }["CalendarPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[43] = viewMode;
        $[44] = t11;
    } else {
        t11 = $[44];
    }
    let t12;
    if ($[45] !== resetForm) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "CalendarPage[<button>.onClick]": ()=>{
                    resetForm();
                    setShowForm(true);
                }
            }["CalendarPage[<button>.onClick]"],
            className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors",
            children: "+ New Event"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[45] = resetForm;
        $[46] = t12;
    } else {
        t12 = $[46];
    }
    let t13;
    if ($[47] !== t11 || $[48] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        t11,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 344,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[47] = t11;
        $[48] = t12;
        $[49] = t13;
    } else {
        t13 = $[49];
    }
    let t14;
    if ($[50] !== typeFilter) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                "all",
                "cron",
                "scheduled",
                "deadline",
                "milestone"
            ].map({
                "CalendarPage[(anonymous)()]": (t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "CalendarPage[(anonymous)() > <button>.onClick]": ()=>setTypeFilter(t)
                        }["CalendarPage[(anonymous)() > <button>.onClick]"],
                        className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 ${typeFilter === t ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                        children: [
                            t !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: typeConfig[t].emoji
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 356,
                                columnNumber: 272
                            }, this),
                            t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)
                        ]
                    }, t, true, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 354,
                        columnNumber: 45
                    }, this)
            }["CalendarPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[50] = typeFilter;
        $[51] = t14;
    } else {
        t14 = $[51];
    }
    const t15 = viewMode === "month" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-3 bg-gray-900 border border-gray-800 rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevMonth,
                                className: "p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 363,
                                columnNumber: 230
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: monthName
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 363,
                                columnNumber: 347
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextMonth,
                                className: "p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/app/calendar/page.tsx",
                                lineNumber: 363,
                                columnNumber: 401
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 363,
                        columnNumber: 174
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-px",
                        children: [
                            [
                                "Sun",
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat"
                            ].map(_CalendarPageAnonymous3),
                            Array.from({
                                length: firstDay
                            }).map(_CalendarPageAnonymous4),
                            Array.from({
                                length: daysInMonth
                            }).map({
                                "CalendarPage[(anonymous)()]": (__0, i_0)=>{
                                    const day = i_0 + 1;
                                    const dateStr_0 = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                                    const dayEvents = eventsByDate.get(dateStr_0) ?? [];
                                    const isToday = dateStr_0 === todayStr;
                                    const isSelected = dateStr_0 === selectedDate;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: {
                                            "CalendarPage[(anonymous)() > <div>.onClick]": ()=>setSelectedDate(dateStr_0)
                                        }["CalendarPage[(anonymous)() > <div>.onClick]"],
                                        onDoubleClick: {
                                            "CalendarPage[(anonymous)() > <div>.onDoubleClick]": ()=>openNewOnDate(dateStr_0)
                                        }["CalendarPage[(anonymous)() > <div>.onDoubleClick]"],
                                        className: `min-h-[80px] p-1.5 rounded cursor-pointer transition-colors border ${isSelected ? "border-blue-500 bg-blue-500/10" : isToday ? "border-blue-500/30 bg-gray-900" : "border-transparent bg-gray-950/30 hover:bg-gray-900/50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-medium ${isToday ? "text-blue-400" : "text-gray-400"}`,
                                                children: day
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/calendar/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 303
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 space-y-0.5",
                                                children: [
                                                    dayEvents.slice(0, 3).map(_CalendarPageAnonymousAnonymous),
                                                    dayEvents.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-gray-500",
                                                        children: [
                                                            "+",
                                                            dayEvents.length - 3,
                                                            " more"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/calendar/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 521
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/calendar/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 402
                                            }, this)
                                        ]
                                    }, day, true, {
                                        fileName: "[project]/src/app/calendar/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 20
                                    }, this);
                                }
                            }["CalendarPage[(anonymous)()]"])
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 363,
                        columnNumber: 524
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 363,
                columnNumber: 93
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900 border border-gray-800 rounded-xl p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-gray-300 mb-4",
                        children: selectedDate ? new Date(selectedDate + "T12:00").toLocaleDateString("default", {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        }) : "Select a day"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 380,
                        columnNumber: 122
                    }, this),
                    selectedDate && selectedDateEvents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mb-3",
                        children: "No events"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 384,
                        columnNumber: 86
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: selectedDateEvents.map({
                            "CalendarPage[selectedDateEvents.map()]": (ev_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3 rounded-lg border ${typeConfig[ev_0.type].bg} group`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: typeConfig[ev_0.type].emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/calendar/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 206
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-gray-200",
                                                            children: ev_0.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/calendar/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 268
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mt-0.5",
                                                            children: [
                                                                new Date(ev_0.startTime).toLocaleTimeString([], {
                                                                    hour: "2-digit",
                                                                    minute: "2-digit"
                                                                }),
                                                                ev_0.recurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-1",
                                                                    children: [
                                                                        "🔄 ",
                                                                        ev_0.recurrenceRule
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/calendar/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 335
                                                        }, this),
                                                        ev_0.schedule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-mono mt-1",
                                                            children: ev_0.schedule
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/calendar/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 118
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 201
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: ev_0.assignee,
                                                    size: "sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 196
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 151
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "CalendarPage[selectedDateEvents.map() > <button>.onClick]": ()=>startEdit(ev_0)
                                                    }["CalendarPage[selectedDateEvents.map() > <button>.onClick]"],
                                                    className: "text-xs text-gray-500 hover:text-gray-300",
                                                    children: "✏️ Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 337
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "CalendarPage[selectedDateEvents.map() > <button>.onClick]": ()=>removeEvent({
                                                                id: ev_0._id
                                                            })
                                                    }["CalendarPage[selectedDateEvents.map() > <button>.onClick]"],
                                                    className: "text-xs text-gray-500 hover:text-red-400",
                                                    children: "🗑️ Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 149
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 251
                                        }, this)
                                    ]
                                }, ev_0._id, true, {
                                    fileName: "[project]/src/app/calendar/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 61
                                }, this)
                        }["CalendarPage[selectedDateEvents.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 384,
                        columnNumber: 142
                    }, this),
                    selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "CalendarPage[<button>.onClick]": ()=>openNewOnDate(selectedDate)
                        }["CalendarPage[<button>.onClick]"],
                        className: "mt-3 w-full px-3 py-2 text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-lg transition-colors",
                        children: "+ Add event on this day"
                    }, void 0, false, {
                        fileName: "[project]/src/app/calendar/page.tsx",
                        lineNumber: 395,
                        columnNumber: 77
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 380,
                columnNumber: 55
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/calendar/page.tsx",
        lineNumber: 363,
        columnNumber: 38
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: upcoming.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl",
                children: "📅"
            }, void 0, false, {
                fileName: "[project]/src/app/calendar/page.tsx",
                lineNumber: 397,
                columnNumber: 277
            }, void 0),
            title: "No upcoming events",
            description: "Schedule your first event",
            actionLabel: "Create Event",
            onAction: {
                "CalendarPage[<EmptyState>.onAction]": ()=>{
                    resetForm();
                    setShowForm(true);
                }
            }["CalendarPage[<EmptyState>.onAction]"]
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 397,
            columnNumber: 259
        }, this) : upcoming.map({
            "CalendarPage[upcoming.map()]": (ev_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-gray-900 border rounded-xl p-4 flex items-center justify-between group ${typeConfig[ev_1.type].bg}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center min-w-[50px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-gray-200",
                                            children: new Date(ev_1.startTime).getDate()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 266
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: new Date(ev_1.startTime).toLocaleString("default", {
                                                month: "short"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 353
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/calendar/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 224
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: typeConfig[ev_1.type].emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 74
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium text-gray-200",
                                                    children: ev_1.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 116
                                                }, this),
                                                ev_1.recurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full",
                                                    children: [
                                                        "🔄 ",
                                                        ev_1.recurrenceRule
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 194
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: [
                                                new Date(ev_1.startTime).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                }),
                                                ev_1.schedule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 font-mono text-gray-600",
                                                    children: ev_1.schedule
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/calendar/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 316
                                        }, this),
                                        ev_1.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: ev_1.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 131
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/calendar/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 403,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: ev_1.assignee,
                                    size: "sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calendar/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 249
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "CalendarPage[upcoming.map() > <button>.onClick]": ()=>startEdit(ev_1)
                                            }["CalendarPage[upcoming.map() > <button>.onClick]"],
                                            className: "p-1.5 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded-lg text-xs",
                                            children: "✏️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 379
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "CalendarPage[upcoming.map() > <button>.onClick]": ()=>removeEvent({
                                                        id: ev_1._id
                                                    })
                                            }["CalendarPage[upcoming.map() > <button>.onClick]"],
                                            className: "p-1.5 text-gray-500 hover:text-red-400 hover:bg-gray-800 rounded-lg text-xs",
                                            children: "🗑️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calendar/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 167
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/calendar/page.tsx",
                                    lineNumber: 408,
                                    columnNumber: 298
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/calendar/page.tsx",
                            lineNumber: 408,
                            columnNumber: 208
                        }, this)
                    ]
                }, ev_1._id, true, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 403,
                    columnNumber: 47
                }, this)
        }["CalendarPage[upcoming.map()]"])
    }, void 0, false, {
        fileName: "[project]/src/app/calendar/page.tsx",
        lineNumber: 397,
        columnNumber: 207
    }, this);
    const t16 = editingId ? "Edit Event" : "New Calendar Event";
    let t17;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-300 mb-1",
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[52] = t17;
    } else {
        t17 = $[52];
    }
    let t18;
    if ($[53] !== form || $[54] !== setForm) {
        t18 = ({
            "CalendarPage[<input>.onChange]": (e_1)=>setForm({
                    ...form,
                    title: e_1.target.value
                })
        })["CalendarPage[<input>.onChange]"];
        $[53] = form;
        $[54] = setForm;
        $[55] = t18;
    } else {
        t18 = $[55];
    }
    let t19;
    if ($[56] !== form.title || $[57] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: form.title,
                    onChange: t18,
                    className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-blue-500",
                    placeholder: "Event title"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 440,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[56] = form.title;
        $[57] = t18;
        $[58] = t19;
    } else {
        t19 = $[58];
    }
    let t20;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-300 mb-1",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[59] = t20;
    } else {
        t20 = $[59];
    }
    let t21;
    if ($[60] !== form || $[61] !== setForm) {
        t21 = ({
            "CalendarPage[<textarea>.onChange]": (e_2)=>setForm({
                    ...form,
                    description: e_2.target.value
                })
        })["CalendarPage[<textarea>.onChange]"];
        $[60] = form;
        $[61] = setForm;
        $[62] = t21;
    } else {
        t21 = $[62];
    }
    let t22;
    if ($[63] !== form.description || $[64] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: form.description,
                    onChange: t21,
                    rows: 2,
                    className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-blue-500 resize-none",
                    placeholder: "Optional description"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 470,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 470,
            columnNumber: 11
        }, this);
        $[63] = form.description;
        $[64] = t21;
        $[65] = t22;
    } else {
        t22 = $[65];
    }
    let t23;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-300 mb-1",
            children: "Type"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[66] = t23;
    } else {
        t23 = $[66];
    }
    let t24;
    if ($[67] !== form || $[68] !== setForm) {
        t24 = ({
            "CalendarPage[<select>.onChange]": (e_3)=>setForm({
                    ...form,
                    type: e_3.target.value
                })
        })["CalendarPage[<select>.onChange]"];
        $[67] = form;
        $[68] = setForm;
        $[69] = t24;
    } else {
        t24 = $[69];
    }
    let t25;
    let t26;
    let t27;
    let t28;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "scheduled",
            children: "📅 Scheduled"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "cron",
            children: "⏰ Cron Job"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "deadline",
            children: "🔴 Deadline"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 505,
            columnNumber: 11
        }, this);
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "milestone",
            children: "🏁 Milestone"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[70] = t25;
        $[71] = t26;
        $[72] = t27;
        $[73] = t28;
    } else {
        t25 = $[70];
        t26 = $[71];
        t27 = $[72];
        t28 = $[73];
    }
    let t29;
    if ($[74] !== form.type || $[75] !== t24) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: form.type,
                    onChange: t24,
                    className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm",
                    children: [
                        t25,
                        t26,
                        t27,
                        t28
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 519,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 519,
            columnNumber: 11
        }, this);
        $[74] = form.type;
        $[75] = t24;
        $[76] = t29;
    } else {
        t29 = $[76];
    }
    let t30;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-300 mb-1",
            children: "Assignee"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 528,
            columnNumber: 11
        }, this);
        $[77] = t30;
    } else {
        t30 = $[77];
    }
    let t31;
    if ($[78] !== form || $[79] !== setForm) {
        t31 = ({
            "CalendarPage[<select>.onChange]": (e_4)=>setForm({
                    ...form,
                    assignee: e_4.target.value
                })
        })["CalendarPage[<select>.onChange]"];
        $[78] = form;
        $[79] = setForm;
        $[80] = t31;
    } else {
        t31 = $[80];
    }
    let t32;
    let t33;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Kar",
            children: "Kar"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 550,
            columnNumber: 11
        }, this);
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Joma",
            children: "Joma"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[81] = t32;
        $[82] = t33;
    } else {
        t32 = $[81];
        t33 = $[82];
    }
    let t34;
    if ($[83] !== form.assignee || $[84] !== t31) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: form.assignee,
                    onChange: t31,
                    className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm",
                    children: [
                        t32,
                        t33
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 560,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[83] = form.assignee;
        $[84] = t31;
        $[85] = t34;
    } else {
        t34 = $[85];
    }
    let t35;
    if ($[86] !== t29 || $[87] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t29,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 569,
            columnNumber: 11
        }, this);
        $[86] = t29;
        $[87] = t34;
        $[88] = t35;
    } else {
        t35 = $[88];
    }
    let t36;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-300 mb-1",
            children: "Start Date"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 578,
            columnNumber: 11
        }, this);
        $[89] = t36;
    } else {
        t36 = $[89];
    }
    let t37;
    if ($[90] !== form || $[91] !== setForm) {
        t37 = ({
            "CalendarPage[<input>.onChange]": (e_5)=>setForm({
                    ...form,
                    date: e_5.target.value
                })
        })["CalendarPage[<input>.onChange]"];
        $[90] = form;
        $[91] = setForm;
        $[92] = t37;
    } else {
        t37 = $[92];
    }
    let t38;
    if ($[93] !== form.date || $[94] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    value: form.date,
                    onChange: t37,
                    className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 599,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[93] = form.date;
        $[94] = t37;
        $[95] = t38;
    } else {
        t38 = $[95];
    }
    let t39;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm font-medium text-gray-300 mb-1",
            children: "Start Time"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[96] = t39;
    } else {
        t39 = $[96];
    }
    let t40;
    if ($[97] !== form || $[98] !== setForm) {
        t40 = ({
            "CalendarPage[<input>.onChange]": (e_6)=>setForm({
                    ...form,
                    time: e_6.target.value
                })
        })["CalendarPage[<input>.onChange]"];
        $[97] = form;
        $[98] = setForm;
        $[99] = t40;
    } else {
        t40 = $[99];
    }
    let t41;
    if ($[100] !== form.time || $[101] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    value: form.time,
                    onChange: t40,
                    className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 629,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[100] = form.time;
        $[101] = t40;
        $[102] = t41;
    } else {
        t41 = $[102];
    }
    let t42;
    if ($[103] !== t38 || $[104] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t38,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 638,
            columnNumber: 11
        }, this);
        $[103] = t38;
        $[104] = t41;
        $[105] = t42;
    } else {
        t42 = $[105];
    }
    let t43;
    if ($[106] !== form || $[107] !== setForm) {
        t43 = form.type === "cron" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm font-medium text-gray-300 mb-1",
                    children: "Cron Schedule / Description"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 647,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: form.schedule,
                    onChange: {
                        "CalendarPage[<input>.onChange]": (e_7)=>setForm({
                                ...form,
                                schedule: e_7.target.value
                            })
                    }["CalendarPage[<input>.onChange]"],
                    className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm font-mono focus:outline-none focus:border-blue-500",
                    placeholder: "0 9 * * * (every day at 9am)"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 647,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 647,
            columnNumber: 35
        }, this);
        $[106] = form;
        $[107] = setForm;
        $[108] = t43;
    } else {
        t43 = $[108];
    }
    let t44;
    if ($[109] !== form || $[110] !== setForm) {
        t44 = ({
            "CalendarPage[<input>.onChange]": (e_8)=>setForm({
                    ...form,
                    recurring: e_8.target.checked
                })
        })["CalendarPage[<input>.onChange]"];
        $[109] = form;
        $[110] = setForm;
        $[111] = t44;
    } else {
        t44 = $[111];
    }
    let t45;
    if ($[112] !== form.recurring || $[113] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: form.recurring,
            onChange: t44,
            className: "rounded bg-gray-800 border-gray-700"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 675,
            columnNumber: 11
        }, this);
        $[112] = form.recurring;
        $[113] = t44;
        $[114] = t45;
    } else {
        t45 = $[114];
    }
    let t46;
    if ($[115] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-300",
            children: "Recurring"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 684,
            columnNumber: 11
        }, this);
        $[115] = t46;
    } else {
        t46 = $[115];
    }
    let t47;
    if ($[116] !== t45) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-2 cursor-pointer",
            children: [
                t45,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 691,
            columnNumber: 11
        }, this);
        $[116] = t45;
        $[117] = t47;
    } else {
        t47 = $[117];
    }
    let t48;
    if ($[118] !== form || $[119] !== setForm) {
        t48 = form.recurring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: form.recurrenceRule,
            onChange: {
                "CalendarPage[<select>.onChange]": (e_9)=>setForm({
                        ...form,
                        recurrenceRule: e_9.target.value
                    })
            }["CalendarPage[<select>.onChange]"],
            className: "px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "Select..."
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 704,
                    columnNumber: 135
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "daily",
                    children: "Daily"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 704,
                    columnNumber: 170
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "weekly",
                    children: "Weekly"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 704,
                    columnNumber: 206
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "monthly",
                    children: "Monthly"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 704,
                    columnNumber: 244
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "weekdays",
                    children: "Weekdays"
                }, void 0, false, {
                    fileName: "[project]/src/app/calendar/page.tsx",
                    lineNumber: 704,
                    columnNumber: 284
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 699,
            columnNumber: 29
        }, this);
        $[118] = form;
        $[119] = setForm;
        $[120] = t48;
    } else {
        t48 = $[120];
    }
    let t49;
    if ($[121] !== t47 || $[122] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 713,
            columnNumber: 11
        }, this);
        $[121] = t47;
        $[122] = t48;
        $[123] = t49;
    } else {
        t49 = $[123];
    }
    let t50;
    if ($[124] !== resetForm) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: resetForm,
            className: "px-4 py-2 text-sm text-gray-400 hover:text-gray-200",
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 722,
            columnNumber: 11
        }, this);
        $[124] = resetForm;
        $[125] = t50;
    } else {
        t50 = $[125];
    }
    const t51 = editingId ? "Update" : "Create";
    let t52;
    if ($[126] !== handleSubmit || $[127] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSubmit,
            className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg",
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 731,
            columnNumber: 11
        }, this);
        $[126] = handleSubmit;
        $[127] = t51;
        $[128] = t52;
    } else {
        t52 = $[128];
    }
    let t53;
    if ($[129] !== t50 || $[130] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-3 pt-2",
            children: [
                t50,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 740,
            columnNumber: 11
        }, this);
        $[129] = t50;
        $[130] = t52;
        $[131] = t53;
    } else {
        t53 = $[131];
    }
    let t54;
    if ($[132] !== t19 || $[133] !== t22 || $[134] !== t35 || $[135] !== t42 || $[136] !== t43 || $[137] !== t49 || $[138] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t19,
                t22,
                t35,
                t42,
                t43,
                t49,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 749,
            columnNumber: 11
        }, this);
        $[132] = t19;
        $[133] = t22;
        $[134] = t35;
        $[135] = t42;
        $[136] = t43;
        $[137] = t49;
        $[138] = t53;
        $[139] = t54;
    } else {
        t54 = $[139];
    }
    let t55;
    if ($[140] !== resetForm || $[141] !== showForm || $[142] !== t16 || $[143] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: showForm,
            onClose: resetForm,
            title: t16,
            size: "lg",
            children: t54
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 763,
            columnNumber: 11
        }, this);
        $[140] = resetForm;
        $[141] = showForm;
        $[142] = t16;
        $[143] = t54;
        $[144] = t55;
    } else {
        t55 = $[144];
    }
    let t56;
    if ($[145] !== t13 || $[146] !== t14 || $[147] !== t15 || $[148] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t13,
                t14,
                t15,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 774,
            columnNumber: 11
        }, this);
        $[145] = t13;
        $[146] = t14;
        $[147] = t15;
        $[148] = t55;
        $[149] = t56;
    } else {
        t56 = $[149];
    }
    return t56;
}
_s(CalendarPage, "R2BpluJb2mY0RPJvpqMPiwXHp/0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = CalendarPage;
function _CalendarPageAnonymousAnonymous(ev) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `text-[10px] px-1 py-0.5 rounded truncate border ${typeConfig[ev.type].bg}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: typeConfig[ev.type].color,
            children: ev.title
        }, void 0, false, {
            fileName: "[project]/src/app/calendar/page.tsx",
            lineNumber: 786,
            columnNumber: 116
        }, this)
    }, ev._id, false, {
        fileName: "[project]/src/app/calendar/page.tsx",
        lineNumber: 786,
        columnNumber: 10
    }, this);
}
function _CalendarPageAnonymous4(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[80px] bg-gray-950/50 rounded"
    }, `empty-${i}`, false, {
        fileName: "[project]/src/app/calendar/page.tsx",
        lineNumber: 789,
        columnNumber: 10
    }, this);
}
function _CalendarPageAnonymous3(d) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center text-xs font-medium text-gray-500 py-2",
        children: d
    }, d, false, {
        fileName: "[project]/src/app/calendar/page.tsx",
        lineNumber: 792,
        columnNumber: 10
    }, this);
}
function _CalendarPageAnonymous2(a, b) {
    return a.startTime - b.startTime;
}
function _CalendarPageAnonymous(e_0) {
    return e_0.startTime >= Date.now();
}
var _c;
__turbopack_context__.k.register(_c, "CalendarPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_64a91167._.js.map