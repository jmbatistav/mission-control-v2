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
"[project]/src/app/office/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OfficePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const statusInfo = {
    active: {
        dot: "bg-emerald-500",
        label: "Working",
        glow: "shadow-emerald-500/30 shadow-lg",
        deskLight: "bg-emerald-500/20"
    },
    idle: {
        dot: "bg-amber-500",
        label: "Idle",
        glow: "shadow-amber-500/20 shadow-md",
        deskLight: "bg-amber-500/10"
    },
    offline: {
        dot: "bg-gray-600",
        label: "Offline",
        glow: "",
        deskLight: "bg-gray-800/50"
    }
};
const colorGradients = {
    cyan: {
        chair: "from-cyan-700 to-cyan-900",
        monitor: "border-cyan-500/40",
        accent: "bg-cyan-500"
    },
    blue: {
        chair: "from-blue-700 to-blue-900",
        monitor: "border-blue-500/40",
        accent: "bg-blue-500"
    },
    indigo: {
        chair: "from-indigo-700 to-indigo-900",
        monitor: "border-indigo-500/40",
        accent: "bg-indigo-500"
    },
    amber: {
        chair: "from-amber-700 to-amber-900",
        monitor: "border-amber-500/40",
        accent: "bg-amber-500"
    },
    orange: {
        chair: "from-orange-700 to-orange-900",
        monitor: "border-orange-500/40",
        accent: "bg-orange-500"
    },
    emerald: {
        chair: "from-emerald-700 to-emerald-900",
        monitor: "border-emerald-500/40",
        accent: "bg-emerald-500"
    },
    pink: {
        chair: "from-pink-700 to-pink-900",
        monitor: "border-pink-500/40",
        accent: "bg-pink-500"
    },
    violet: {
        chair: "from-violet-700 to-violet-900",
        monitor: "border-violet-500/40",
        accent: "bg-violet-500"
    },
    teal: {
        chair: "from-teal-700 to-teal-900",
        monitor: "border-teal-500/40",
        accent: "bg-teal-500"
    }
};
const funcLabels = {
    leadership: "👑 Leadership",
    engineering: "⚡ Engineering",
    design: "🎨 Design",
    product: "📋 Product",
    operations: "🛠️ Operations"
};
/* ─── Desk / Workstation Component ─── */ function Workstation(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(65);
    if ($[0] !== "e5a6192415beca090cef11a3218a6c7bfaaba9376770ff23fa40d8e79435031f") {
        for(let $i = 0; $i < 65; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5a6192415beca090cef11a3218a6c7bfaaba9376770ff23fa40d8e79435031f";
    }
    const { member, onClick } = t0;
    const si = statusInfo[member.status];
    const colors = colorGradients[member.color] || colorGradients.blue;
    const isWorking = member.status === "active";
    const t1 = `relative group focus:outline-none transition-transform hover:scale-105 ${member.status === "offline" ? "opacity-50" : ""}`;
    let t2;
    if ($[1] !== isWorking || $[2] !== member.color) {
        t2 = isWorking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -inset-2 bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl animate-pulse opacity-30",
            style: {
                background: `radial-gradient(ellipse at center bottom, ${member.color === "cyan" ? "#06b6d4" : member.color === "blue" ? "#3b82f6" : member.color === "amber" ? "#f59e0b" : member.color === "emerald" ? "#10b981" : member.color === "pink" ? "#ec4899" : member.color === "violet" ? "#8b5cf6" : member.color === "orange" ? "#f97316" : member.color === "indigo" ? "#6366f1" : member.color === "teal" ? "#14b8a6" : "#6b7280"}20, transparent 70%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 114,
            columnNumber: 23
        }, this);
        $[1] = isWorking;
        $[2] = member.color;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-3 left-3 w-2 h-3 bg-gray-600 rounded-b"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-3 right-3 w-2 h-3 bg-gray-600 rounded-b"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-2 left-3 w-6 h-4 bg-gray-600/50 rounded-sm",
            title: "Keyboard"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-3 right-3 w-3 h-3 bg-gray-600/30 rounded-full",
            title: "Mouse"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] !== isWorking || $[9] !== member.status) {
        t7 = member.status !== "offline" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1 right-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-3 h-4 bg-gray-500/40 rounded-b-sm rounded-t-lg border border-gray-500/30"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 144,
                    columnNumber: 82
                }, this),
                isWorking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-2 left-0.5 text-[6px] opacity-60 animate-bounce",
                    children: "☕"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 144,
                    columnNumber: 190
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 144,
            columnNumber: 41
        }, this);
        $[8] = isWorking;
        $[9] = member.status;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-2 right-2 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg border border-gray-600/50 shadow-md",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const t9 = `absolute bottom-16 left-1/2 -translate-x-1/2 w-28 h-20 bg-gray-900 rounded-lg border-2 ${colors.monitor} ${si.glow} overflow-hidden`;
    let t10;
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-4 bg-gray-700"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-gray-700 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t11;
    } else {
        t10 = $[13];
        t11 = $[14];
    }
    let t12;
    if ($[15] !== colors.accent || $[16] !== isWorking || $[17] !== member.status) {
        t12 = member.status === "offline" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-gray-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 bg-gray-700 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 173,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 173,
            columnNumber: 41
        }, this) : isWorking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full p-1.5 bg-gray-950",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1 animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-1 ${colors.accent} opacity-40 rounded w-[70%]`
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 173,
                            columnNumber: 280
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 bg-gray-600 opacity-30 rounded w-[90%]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 173,
                            columnNumber: 349
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-1 ${colors.accent} opacity-30 rounded w-[50%]`
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 173,
                            columnNumber: 411
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 bg-gray-600 opacity-30 rounded w-[80%]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 173,
                            columnNumber: 480
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-1 ${colors.accent} opacity-40 rounded w-[60%]`
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 173,
                            columnNumber: 542
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 bg-gray-600 opacity-20 rounded w-[45%]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 173,
                            columnNumber: 611
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-1 ${colors.accent} opacity-30 rounded w-[75%]`
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 173,
                            columnNumber: 673
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 173,
                    columnNumber: 239
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 flex items-center gap-0.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-1 h-2 ${colors.accent} opacity-80 animate-[pulse_1s_ease-in-out_infinite]`
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 173,
                        columnNumber: 796
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 173,
                    columnNumber: 748
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 173,
            columnNumber: 190
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full p-1.5 bg-gray-950 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-4 h-4 ${colors.accent} opacity-20 rounded-full animate-ping`
            }, void 0, false, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 173,
                columnNumber: 990
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 173,
            columnNumber: 908
        }, this);
        $[15] = colors.accent;
        $[16] = isWorking;
        $[17] = member.status;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const t13 = `absolute bottom-0.5 right-1 w-1 h-1 rounded-full ${si.dot} ${isWorking ? "animate-pulse" : ""}`;
    let t14;
    if ($[19] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[19] = t13;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t12 || $[22] !== t14 || $[23] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t11,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t14;
        $[23] = t9;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    const t16 = `absolute bottom-20 left-1/2 -translate-x-1/2 w-14 h-8 bg-gradient-to-b ${colors.chair} rounded-t-xl rounded-b-lg border border-gray-600/30 shadow-inner`;
    let t17;
    if ($[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t16
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    const t18 = `absolute bottom-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${colors.chair} flex items-center justify-center text-xl border-2 border-gray-600/50 ${isWorking ? "animate-[bounce_3s_ease-in-out_infinite]" : ""} z-10`;
    let t19;
    if ($[27] !== member.avatar || $[28] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t18,
            children: member.avatar
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[27] = member.avatar;
        $[28] = t18;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    const t20 = `w-2.5 h-2.5 rounded-full ${si.dot} ${isWorking ? "animate-pulse" : ""} ring-2 ring-gray-950`;
    let t21;
    if ($[30] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-[152px] left-1/2 -translate-x-1/2 flex flex-col items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t20
            }, void 0, false, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 222,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[30] = t20;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== member.name) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-1 left-1/2 -translate-x-1/2 bg-gray-800/90 px-2 py-0.5 rounded text-[10px] font-medium text-gray-300 border border-gray-700/50 whitespace-nowrap z-20",
            children: member.name
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[32] = member.name;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    let t23;
    if ($[34] !== t15 || $[35] !== t17 || $[36] !== t19 || $[37] !== t2 || $[38] !== t21 || $[39] !== t22 || $[40] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-48 h-56 relative",
            children: [
                t2,
                t8,
                t15,
                t17,
                t19,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t17;
        $[36] = t19;
        $[37] = t2;
        $[38] = t21;
        $[39] = t22;
        $[40] = t8;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] !== member.name) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold text-gray-200",
            children: member.name
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[42] = member.name;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] !== member.role) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-gray-400",
            children: member.role
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[44] = member.role;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== member.currentTask) {
        t26 = member.currentTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-blue-400 mt-1 max-w-[180px] truncate",
            children: [
                "📌 ",
                member.currentTask
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 268,
            columnNumber: 33
        }, this);
        $[46] = member.currentTask;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    const t27 = `w-1.5 h-1.5 rounded-full ${si.dot}`;
    let t28;
    if ($[48] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t27
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[48] = t27;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] !== si.label) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] text-gray-500",
            children: si.label
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[50] = si.label;
        $[51] = t29;
    } else {
        t29 = $[51];
    }
    let t30;
    if ($[52] !== t28 || $[53] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 mt-1",
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[52] = t28;
        $[53] = t29;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[55] !== t24 || $[56] !== t25 || $[57] !== t26 || $[58] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap",
                children: [
                    t24,
                    t25,
                    t26,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 302,
                columnNumber: 148
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[55] = t24;
        $[56] = t25;
        $[57] = t26;
        $[58] = t30;
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    let t32;
    if ($[60] !== onClick || $[61] !== t1 || $[62] !== t23 || $[63] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: t1,
            children: [
                t23,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[60] = onClick;
        $[61] = t1;
        $[62] = t23;
        $[63] = t31;
        $[64] = t32;
    } else {
        t32 = $[64];
    }
    return t32;
}
_c = Workstation;
/* ─── Status Bar Component ─── */ function StatusBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "e5a6192415beca090cef11a3218a6c7bfaaba9376770ff23fa40d8e79435031f") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5a6192415beca090cef11a3218a6c7bfaaba9376770ff23fa40d8e79435031f";
    }
    const { members } = t0;
    let t1;
    if ($[1] !== members) {
        t1 = members.filter(_StatusBarMembersFilter);
        $[1] = members;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const active = t1.length;
    let t2;
    if ($[3] !== members) {
        t2 = members.filter(_StatusBarMembersFilter2);
        $[3] = members;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const idle = t2.length;
    let t3;
    if ($[5] !== members) {
        t3 = members.filter(_StatusBarMembersFilter3);
        $[5] = members;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const offline = t3.length;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 366,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== active) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-emerald-400",
                            children: active
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 373,
                            columnNumber: 95
                        }, this),
                        " Working"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 373,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 373,
            columnNumber: 10
        }, this);
        $[8] = active;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-4 bg-gray-700"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 381,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-2.5 h-2.5 rounded-full bg-amber-500"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 388,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== idle) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-amber-400",
                            children: idle
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 395,
                            columnNumber: 95
                        }, this),
                        " Idle"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 395,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 395,
            columnNumber: 10
        }, this);
        $[12] = idle;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-4 bg-gray-700"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 403,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-2.5 h-2.5 rounded-full bg-gray-600"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== offline) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-gray-400",
                            children: offline
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 417,
                            columnNumber: 97
                        }, this),
                        " Offline"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 417,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[16] = offline;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 432,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-500",
                    children: "Office Live"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 432,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== t11 || $[21] !== t5 || $[22] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl px-6 py-3",
            children: [
                t5,
                t6,
                t8,
                t9,
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t5;
        $[22] = t8;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    return t14;
}
_c1 = StatusBar;
/* ─── Office Floor ─── */ function _StatusBarMembersFilter3(m_1) {
    return m_1.status === "offline";
}
function _StatusBarMembersFilter2(m_0) {
    return m_0.status === "idle";
}
function _StatusBarMembersFilter(m) {
    return m.status === "active";
}
function OfficeZone(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "e5a6192415beca090cef11a3218a6c7bfaaba9376770ff23fa40d8e79435031f") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5a6192415beca090cef11a3218a6c7bfaaba9376770ff23fa40d8e79435031f";
    }
    const { title, emoji, borderColor, children } = t0;
    const t1 = `border ${borderColor} rounded-2xl p-6 bg-gray-900/30 backdrop-blur-sm`;
    const t2 = `px-3 py-1 rounded-lg bg-gray-800/80 border ${borderColor}`;
    let t3;
    if ($[1] !== emoji) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm",
            children: emoji
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 478,
            columnNumber: 10
        }, this);
        $[1] = emoji;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-semibold text-gray-300 ml-2",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 486,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t2 || $[6] !== t3 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 494,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== borderColor) {
        t6 = borderColor.replace("border-", "bg-").replace("/30", "/20");
        $[9] = borderColor;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const t7 = `flex-1 h-px ${t6}`;
    let t8;
    if ($[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 513,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t5 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-6",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 521,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== children) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-6 justify-center",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[16] = children;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t1 || $[19] !== t10 || $[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 538,
            columnNumber: 11
        }, this);
        $[18] = t1;
        $[19] = t10;
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    return t11;
}
_c2 = OfficeZone;
function OfficePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "e5a6192415beca090cef11a3218a6c7bfaaba9376770ff23fa40d8e79435031f") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5a6192415beca090cef11a3218a6c7bfaaba9376770ff23fa40d8e79435031f";
    }
    const members = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].team.list) ?? [];
    const seedTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].team.seed);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedMember = selectedId ? members.find({
        "OfficePage[members.find()]": (m)=>m._id === selectedId
    }["OfficePage[members.find()]"]) : null;
    const leadership = members.filter(_OfficePageMembersFilter);
    const engineering = members.filter(_OfficePageMembersFilter2);
    const design = members.filter(_OfficePageMembersFilter3);
    const product = members.filter(_OfficePageMembersFilter4);
    const operations = members.filter(_OfficePageMembersFilter5);
    if (members.length === 0) {
        let t0;
        let t1;
        let t2;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-8xl mb-6 animate-bounce",
                children: "🏢"
            }, void 0, false, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 574,
                columnNumber: 12
            }, this);
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold text-gray-200 mb-2",
                children: "The office is empty"
            }, void 0, false, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 575,
                columnNumber: 12
            }, this);
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 mb-6",
                children: "Initialize the team to populate the office"
            }, void 0, false, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 576,
                columnNumber: 12
            }, this);
            $[1] = t0;
            $[2] = t1;
            $[3] = t2;
        } else {
            t0 = $[1];
            t1 = $[2];
            t2 = $[3];
        }
        let t3;
        if ($[4] !== seedTeam) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto flex flex-col items-center justify-center h-[70vh]",
                children: [
                    t0,
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "OfficePage[<button>.onClick]": ()=>seedTeam({})
                        }["OfficePage[<button>.onClick]"],
                        className: "px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors",
                        children: "🚀 Open the Office"
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 587,
                        columnNumber: 110
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 587,
                columnNumber: 12
            }, this);
            $[4] = seedTeam;
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        return t3;
    }
    let t0;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "🏢 Digital Office"
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 599,
                        columnNumber: 66
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: "Real-time view of your team at work"
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 599,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 599,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 599,
            columnNumber: 10
        }, this);
        $[6] = t0;
    } else {
        t0 = $[6];
    }
    let t1;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-[0.03]",
            style: {
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 606,
            columnNumber: 10
        }, this);
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative text-center mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-600 tracking-[0.3em] uppercase",
                children: "Cleverwave HQ — Floor 1"
            }, void 0, false, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 616,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 616,
            columnNumber: 10
        }, this);
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const t3 = leadership.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OfficeZone, {
        title: "CTO Office",
        emoji: "\uD83D\uDC51",
        borderColor: "border-cyan-500/30",
        children: leadership.map({
            "OfficePage[leadership.map()]": (m_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Workstation, {
                    member: m_5,
                    onClick: {
                        "OfficePage[leadership.map() > <Workstation>.onClick]": ()=>setSelectedId(m_5._id)
                    }["OfficePage[leadership.map() > <Workstation>.onClick]"]
                }, m_5._id, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 622,
                    columnNumber: 46
                }, this)
        }["OfficePage[leadership.map()]"])
    }, void 0, false, {
        fileName: "[project]/src/app/office/page.tsx",
        lineNumber: 621,
        columnNumber: 39
    }, this);
    const t4 = engineering.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OfficeZone, {
        title: "Engineering Bay",
        emoji: "\u26A1",
        borderColor: "border-blue-500/30",
        children: engineering.map({
            "OfficePage[engineering.map()]": (m_6)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Workstation, {
                    member: m_6,
                    onClick: {
                        "OfficePage[engineering.map() > <Workstation>.onClick]": ()=>setSelectedId(m_6._id)
                    }["OfficePage[engineering.map() > <Workstation>.onClick]"]
                }, m_6._id, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 627,
                    columnNumber: 47
                }, this)
        }["OfficePage[engineering.map()]"])
    }, void 0, false, {
        fileName: "[project]/src/app/office/page.tsx",
        lineNumber: 626,
        columnNumber: 40
    }, this);
    const t5 = design.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OfficeZone, {
        title: "Design Studio",
        emoji: "\uD83C\uDFA8",
        borderColor: "border-pink-500/30",
        children: design.map({
            "OfficePage[design.map()]": (m_7)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Workstation, {
                    member: m_7,
                    onClick: {
                        "OfficePage[design.map() > <Workstation>.onClick]": ()=>setSelectedId(m_7._id)
                    }["OfficePage[design.map() > <Workstation>.onClick]"]
                }, m_7._id, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 632,
                    columnNumber: 42
                }, this)
        }["OfficePage[design.map()]"])
    }, void 0, false, {
        fileName: "[project]/src/app/office/page.tsx",
        lineNumber: 631,
        columnNumber: 35
    }, this);
    const t6 = product.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OfficeZone, {
        title: "Product Lab",
        emoji: "\uD83D\uDCCB",
        borderColor: "border-violet-500/30",
        children: product.map({
            "OfficePage[product.map()]": (m_8)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Workstation, {
                    member: m_8,
                    onClick: {
                        "OfficePage[product.map() > <Workstation>.onClick]": ()=>setSelectedId(m_8._id)
                    }["OfficePage[product.map() > <Workstation>.onClick]"]
                }, m_8._id, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 637,
                    columnNumber: 43
                }, this)
        }["OfficePage[product.map()]"])
    }, void 0, false, {
        fileName: "[project]/src/app/office/page.tsx",
        lineNumber: 636,
        columnNumber: 36
    }, this);
    const t7 = operations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OfficeZone, {
        title: "Ops Center",
        emoji: "\uD83D\uDEE0\uFE0F",
        borderColor: "border-orange-500/30",
        children: operations.map({
            "OfficePage[operations.map()]": (m_9)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Workstation, {
                    member: m_9,
                    onClick: {
                        "OfficePage[operations.map() > <Workstation>.onClick]": ()=>setSelectedId(m_9._id)
                    }["OfficePage[operations.map() > <Workstation>.onClick]"]
                }, m_9._id, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 642,
                    columnNumber: 46
                }, this)
        }["OfficePage[operations.map()]"])
    }, void 0, false, {
        fileName: "[project]/src/app/office/page.tsx",
        lineNumber: 641,
        columnNumber: 39
    }, this);
    let t8;
    if ($[9] !== t5 || $[10] !== t6 || $[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative grid grid-cols-1 md:grid-cols-3 gap-6",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 648,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center opacity-40",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl",
                    children: "🚰"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 658,
                    columnNumber: 50
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[9px] text-gray-600 mt-1",
                    children: "Water Cooler"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 658,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 658,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center opacity-40",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl",
                    children: "🪴"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 665,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[9px] text-gray-600 mt-1",
                    children: "Plant"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 665,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center opacity-40",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl",
                    children: "☕"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 672,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[9px] text-gray-600 mt-1",
                    children: "Coffee Bar"
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 672,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex justify-center gap-8 py-4",
            children: [
                t9,
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center opacity-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl",
                            children: "🪴"
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 679,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] text-gray-600 mt-1",
                            children: "Plant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/office/page.tsx",
                            lineNumber: 679,
                            columnNumber: 158
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 679,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== t3 || $[18] !== t4 || $[19] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 rounded-2xl border border-gray-800 p-8 space-y-8 overflow-hidden",
            children: [
                t1,
                t2,
                t3,
                t4,
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 686,
            columnNumber: 11
        }, this);
        $[17] = t3;
        $[18] = t4;
        $[19] = t8;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xs text-gray-500 uppercase tracking-wider mb-3",
            children: "Quick Status"
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 696,
            columnNumber: 11
        }, this);
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== members) {
        let t16;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = ({
                "OfficePage[members.map()]": (m_10)=>{
                    const si = statusInfo[m_10.status];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "OfficePage[members.map() > <button>.onClick]": ()=>setSelectedId(m_10._id)
                        }["OfficePage[members.map() > <button>.onClick]"],
                        className: "flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-gray-800/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: m_10.avatar
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/office/page.tsx",
                                        lineNumber: 710,
                                        columnNumber: 189
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${si.dot} ring-2 ring-gray-900 ${m_10.status === "active" ? "animate-pulse" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/office/page.tsx",
                                        lineNumber: 710,
                                        columnNumber: 236
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/office/page.tsx",
                                lineNumber: 710,
                                columnNumber: 163
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400 font-medium",
                                children: m_10.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/office/page.tsx",
                                lineNumber: 710,
                                columnNumber: 399
                            }, this),
                            m_10.currentTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] text-blue-400 max-w-[80px] truncate",
                                children: [
                                    "📌 ",
                                    m_10.currentTask
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/office/page.tsx",
                                lineNumber: 710,
                                columnNumber: 494
                            }, this)
                        ]
                    }, m_10._id, true, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 708,
                        columnNumber: 18
                    }, this);
                }
            })["OfficePage[members.map()]"];
            $[24] = t16;
        } else {
            t16 = $[24];
        }
        t15 = members.map(t16);
        $[22] = members;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[25] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 border border-gray-800 rounded-xl p-4",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/app/office/page.tsx",
                    lineNumber: 725,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 725,
            columnNumber: 11
        }, this);
        $[25] = t15;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const t17 = !!selectedMember;
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "OfficePage[<Modal>.onClose]": ()=>setSelectedId(null)
        })["OfficePage[<Modal>.onClose]"];
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    const t19 = "";
    const t20 = "md";
    const t21 = selectedMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${colorGradients[selectedMember.color]?.chair || "from-gray-600 to-gray-800"} flex items-center justify-center text-3xl shadow-lg`,
                        children: selectedMember.avatar
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-100",
                                children: selectedMember.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/office/page.tsx",
                                lineNumber: 744,
                                columnNumber: 324
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400",
                                children: selectedMember.role
                            }, void 0, false, {
                                fileName: "[project]/src/app/office/page.tsx",
                                lineNumber: 744,
                                columnNumber: 398
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-2 h-2 rounded-full ${statusInfo[selectedMember.status].dot} ${selectedMember.status === "active" ? "animate-pulse" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/office/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 506
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: statusInfo[selectedMember.status].label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/office/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 651
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-600",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/office/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 739
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: funcLabels[selectedMember.function]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/office/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 787
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/office/page.tsx",
                                lineNumber: 744,
                                columnNumber: 460
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 319
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 744,
                columnNumber: 60
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800/50 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 uppercase tracking-wider mb-1",
                        children: "Specialty"
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 936
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-300",
                        children: selectedMember.specialty
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 1016
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 744,
                columnNumber: 889
            }, this),
            selectedMember.currentTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-500/10 border border-blue-500/20 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blue-400 uppercase tracking-wider mb-1",
                        children: "Current Task"
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 1193
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-200",
                        children: selectedMember.currentTask
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 1276
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 744,
                columnNumber: 1120
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 uppercase tracking-wider mb-2",
                        children: "Responsibilities"
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 1357
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: selectedMember.responsibilities.map(_OfficePageSelectedMemberResponsibilitiesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 1444
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 744,
                columnNumber: 1352
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-3 border-t border-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500",
                        children: [
                            "Owned by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: selectedMember.owner
                            }, void 0, false, {
                                fileName: "[project]/src/app/office/page.tsx",
                                lineNumber: 744,
                                columnNumber: 1709
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 1660
                    }, this),
                    selectedMember.model && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-600 font-mono",
                        children: selectedMember.model
                    }, void 0, false, {
                        fileName: "[project]/src/app/office/page.tsx",
                        lineNumber: 744,
                        columnNumber: 1802
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 744,
                columnNumber: 1579
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/office/page.tsx",
        lineNumber: 744,
        columnNumber: 33
    }, this);
    let t22;
    if ($[28] !== T0 || $[29] !== t17 || $[30] !== t18 || $[31] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            isOpen: t17,
            onClose: t18,
            title: t19,
            size: t20,
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/app/office/page.tsx",
            lineNumber: 747,
            columnNumber: 11
        }, this);
        $[28] = T0;
        $[29] = t17;
        $[30] = t18;
        $[31] = t21;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto space-y-6",
        children: [
            t0,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBar, {
                members: members
            }, void 0, false, {
                fileName: "[project]/src/app/office/page.tsx",
                lineNumber: 756,
                columnNumber: 59
            }, this),
            t13,
            t16,
            t22
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/office/page.tsx",
        lineNumber: 756,
        columnNumber: 10
    }, this);
}
_s(OfficePage, "1wxGxCswcqc0paMVlIjl1vuQYVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c3 = OfficePage;
function _OfficePageSelectedMemberResponsibilitiesMap(r) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg",
        children: r
    }, r, false, {
        fileName: "[project]/src/app/office/page.tsx",
        lineNumber: 759,
        columnNumber: 10
    }, this);
}
function _OfficePageMembersFilter5(m_4) {
    return m_4.function === "operations";
}
function _OfficePageMembersFilter4(m_3) {
    return m_3.function === "product";
}
function _OfficePageMembersFilter3(m_2) {
    return m_2.function === "design";
}
function _OfficePageMembersFilter2(m_1) {
    return m_1.function === "engineering";
}
function _OfficePageMembersFilter(m_0) {
    return m_0.function === "leadership";
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Workstation");
__turbopack_context__.k.register(_c1, "StatusBar");
__turbopack_context__.k.register(_c2, "OfficeZone");
__turbopack_context__.k.register(_c3, "OfficePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0f16cbde._.js.map