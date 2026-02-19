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
"[project]/src/app/team/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamPage
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
const functionConfig = {
    leadership: {
        label: "Leadership",
        emoji: "👑",
        color: "border-cyan-500/50 bg-cyan-500/5",
        desc: "Architecture & coordination"
    },
    engineering: {
        label: "Engineering",
        emoji: "⚡",
        color: "border-blue-500/50 bg-blue-500/5",
        desc: "Build & implement"
    },
    design: {
        label: "Design",
        emoji: "🎨",
        color: "border-pink-500/50 bg-pink-500/5",
        desc: "Design & experience"
    },
    product: {
        label: "Product",
        emoji: "📋",
        color: "border-violet-500/50 bg-violet-500/5",
        desc: "Plan & document"
    },
    operations: {
        label: "Operations",
        emoji: "🛠️",
        color: "border-orange-500/50 bg-orange-500/5",
        desc: "Test & deploy"
    }
};
const statusConfig = {
    active: {
        dot: "bg-emerald-500",
        label: "Active",
        bg: "bg-emerald-500/20 text-emerald-400"
    },
    idle: {
        dot: "bg-amber-500",
        label: "Idle",
        bg: "bg-amber-500/20 text-amber-400"
    },
    offline: {
        dot: "bg-gray-500",
        label: "Offline",
        bg: "bg-gray-500/20 text-gray-400"
    }
};
const colorMap = {
    cyan: "from-cyan-600 to-cyan-800",
    blue: "from-blue-600 to-blue-800",
    indigo: "from-indigo-600 to-indigo-800",
    amber: "from-amber-600 to-amber-800",
    orange: "from-orange-600 to-orange-800",
    emerald: "from-emerald-600 to-emerald-800",
    pink: "from-pink-600 to-pink-800",
    violet: "from-violet-600 to-violet-800",
    teal: "from-teal-600 to-teal-800"
};
const functionOrder = [
    "leadership",
    "engineering",
    "design",
    "product",
    "operations"
];
function TeamPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "83be44cd9cab212a76542ee0f3d0f74b78b4cd646d92fb088cfe83521a9777da") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "83be44cd9cab212a76542ee0f3d0f74b78b4cd646d92fb088cfe83521a9777da";
    }
    const members = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].team.list) ?? [];
    const seedTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].team.seed);
    const updateMember = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].team.update);
    const removeMember = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].team.remove);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingTask, setEditingTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("org");
    const [funcFilter, setFuncFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const selectedMember = selectedId ? members.find({
        "TeamPage[members.find()]": (m)=>m._id === selectedId
    }["TeamPage[members.find()]"]) : null;
    const grouped = functionOrder.map({
        "TeamPage[functionOrder.map()]": (func)=>({
                ...functionConfig[func],
                key: func,
                members: members.filter({
                    "TeamPage[functionOrder.map() > members.filter()]": (m_0)=>m_0.function === func
                }["TeamPage[functionOrder.map() > members.filter()]"])
            })
    }["TeamPage[functionOrder.map()]"]).filter(_TeamPageAnonymous);
    const filteredMembers = funcFilter === "all" ? members : members.filter({
        "TeamPage[members.filter()]": (m_1)=>m_1.function === funcFilter
    }["TeamPage[members.filter()]"]);
    const activeCount = members.filter(_TeamPageMembersFilter).length;
    let t0;
    if ($[1] !== updateMember) {
        t0 = ({
            "TeamPage[handleStatusToggle]": (id, current)=>{
                const next = current === "active" ? "idle" : current === "idle" ? "offline" : "active";
                updateMember({
                    id,
                    status: next
                });
            }
        })["TeamPage[handleStatusToggle]"];
        $[1] = updateMember;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleStatusToggle = t0;
    let t1;
    if ($[3] !== editingTask || $[4] !== updateMember) {
        t1 = ({
            "TeamPage[saveTask]": ()=>{
                if (!editingTask) {
                    return;
                }
                updateMember({
                    id: editingTask.id,
                    currentTask: editingTask.task || undefined
                });
                setEditingTask(null);
            }
        })["TeamPage[saveTask]"];
        $[3] = editingTask;
        $[4] = updateMember;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const saveTask = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold",
            children: "👥 Team Structure"
        }, void 0, false, {
            fileName: "[project]/src/app/team/page.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            "org",
            "grid"
        ];
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== viewMode) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1",
            children: t3.map({
                "TeamPage[(anonymous)()]": (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "TeamPage[(anonymous)() > <button>.onClick]": ()=>setViewMode(v)
                        }["TeamPage[(anonymous)() > <button>.onClick]"],
                        className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${viewMode === v ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                        children: v === "org" ? "\uD83C\uDFDB\uFE0F Org Chart" : "\uD83D\uDCCA Grid"
                    }, v, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 168,
                        columnNumber: 41
                    }, this)
            }["TeamPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/team/page.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[8] = viewMode;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = members.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: {
            "TeamPage[<button>.onClick]": ()=>seedTeam({})
        }["TeamPage[<button>.onClick]"],
        className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors",
        children: "🚀 Initialize Team"
    }, void 0, false, {
        fileName: "[project]/src/app/team/page.tsx",
        lineNumber: 177,
        columnNumber: 38
    }, this);
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/team/page.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const t7 = !!selectedMember;
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "TeamPage[<Modal>.onClose]": ()=>setSelectedId(null)
        })["TeamPage[<Modal>.onClose]"];
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = selectedMember ? `${selectedMember.avatar} ${selectedMember.name}` : "";
    const t10 = "lg";
    const t11 = selectedMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${colorMap[selectedMember.color] || "from-gray-600 to-gray-800"} flex items-center justify-center text-3xl shadow-lg`,
                        children: selectedMember.avatar
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-100",
                                children: selectedMember.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 202,
                                columnNumber: 311
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400",
                                children: selectedMember.role
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 202,
                                columnNumber: 385
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-2 h-2 rounded-full ${statusConfig[selectedMember.status].dot}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 493
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs px-2 py-0.5 rounded-full ${statusConfig[selectedMember.status].bg}`,
                                        children: statusConfig[selectedMember.status].label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 579
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-600",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 724
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            functionConfig[selectedMember.function]?.emoji,
                                            " ",
                                            functionConfig[selectedMember.function]?.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 772
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 202,
                                columnNumber: 447
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 306
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 202,
                columnNumber: 60
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800/50 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs text-gray-500 uppercase tracking-wider mb-2",
                        children: "Specialty"
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 981
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-300",
                        children: selectedMember.specialty
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 1063
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 202,
                columnNumber: 934
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs text-gray-500 uppercase tracking-wider mb-2",
                        children: "Responsibilities"
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 1141
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: selectedMember.responsibilities.map(_TeamPageSelectedMemberResponsibilitiesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 1230
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 202,
                columnNumber: 1136
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800/50 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs text-gray-500 uppercase tracking-wider mb-2",
                        children: "Current Task"
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 1408
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-300",
                        children: selectedMember.currentTask || "No active task assigned"
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 1493
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 202,
                columnNumber: 1361
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 pt-2 border-t border-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Owner"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 202,
                                columnNumber: 1672
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-300",
                                children: selectedMember.owner
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 202,
                                columnNumber: 1718
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 1667
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "AI Model"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 202,
                                columnNumber: 1792
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-300 font-mono",
                                children: selectedMember.model || "\u2014"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 202,
                                columnNumber: 1841
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 202,
                        columnNumber: 1787
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 202,
                columnNumber: 1597
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/team/page.tsx",
        lineNumber: 202,
        columnNumber: 33
    }, this);
    let t12;
    if ($[14] !== T0 || $[15] !== t11 || $[16] !== t7 || $[17] !== t8 || $[18] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            isOpen: t7,
            onClose: t8,
            title: t9,
            size: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/team/page.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[14] = T0;
        $[15] = t11;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t2,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: [
                                    members.length,
                                    " agents · ",
                                    activeCount,
                                    " active"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 215,
                                columnNumber: 115
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 215,
                        columnNumber: 106
                    }, this),
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 215,
                columnNumber: 55
            }, this),
            members.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-6xl mb-4",
                        children: "👥"
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 215,
                        columnNumber: 312
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium text-gray-300 mb-2",
                        children: "No team members yet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 215,
                        columnNumber: 353
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-6",
                        children: "Click “Initialize Team” to create the full agent roster"
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 215,
                        columnNumber: 432
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "TeamPage[<button>.onClick]": ()=>seedTeam({})
                        }["TeamPage[<button>.onClick]"],
                        className: "px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors",
                        children: "🚀 Initialize Team"
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 215,
                        columnNumber: 533
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 215,
                columnNumber: 247
            }, this) : viewMode === "org" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: [
                    grouped.map({
                        "TeamPage[grouped.map()]": (group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `border ${group.color} rounded-xl p-4 mb-4`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl",
                                                    children: group.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/team/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 168
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-semibold text-gray-200",
                                                            children: group.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 219
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: [
                                                                group.desc,
                                                                " · ",
                                                                group.members.length,
                                                                " agent",
                                                                group.members.length !== 1 ? "s" : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 289
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/team/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 214
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/team/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 127
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 66
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6",
                                        children: group.members.map({
                                            "TeamPage[grouped.map() > group.members.map()]": (member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: {
                                                        "TeamPage[grouped.map() > group.members.map() > <div>.onClick]": ()=>setSelectedId(member._id)
                                                    }["TeamPage[grouped.map() > group.members.map() > <div>.onClick]"],
                                                    className: "bg-gray-900 border border-gray-800 rounded-xl p-5 cursor-pointer hover:border-gray-700 hover:scale-[1.01] transition-all group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[member.color] || "from-gray-600 to-gray-800"} flex items-center justify-center text-2xl shadow-lg`,
                                                                            children: member.avatar
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/team/page.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 318
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "font-semibold text-gray-200",
                                                                                    children: member.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                                    lineNumber: 221,
                                                                                    columnNumber: 511
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-gray-500",
                                                                                    children: member.role
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                                    lineNumber: 221,
                                                                                    columnNumber: 573
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/team/page.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 506
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 277
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: {
                                                                        "TeamPage[grouped.map() > group.members.map() > <button>.onClick]": (e)=>{
                                                                            e.stopPropagation();
                                                                            handleStatusToggle(member._id, member.status);
                                                                        }
                                                                    }["TeamPage[grouped.map() > group.members.map() > <button>.onClick]"],
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `w-2 h-2 rounded-full ${statusConfig[member.status].dot} animate-pulse`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/team/page.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 128
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-[10px] font-medium px-1.5 py-0.5 rounded-full ${statusConfig[member.status].bg}`,
                                                                            children: statusConfig[member.status].label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/team/page.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 220
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 639
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 222
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400 mb-3",
                                                            children: member.specialty
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 382
                                                        }, this),
                                                        member.currentTask ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-gray-500 uppercase tracking-wider mb-0.5",
                                                                    children: "Current Task"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 552
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-300",
                                                                    children: member.currentTask
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 641
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 468
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gray-800/30 border border-dashed border-gray-700/50 rounded-lg px-3 py-2 mb-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-600 italic",
                                                                children: "No active task"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 809
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 711
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between pt-2 border-t border-gray-800/50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-gray-600",
                                                                    children: [
                                                                        "Owned by ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-400",
                                                                            children: member.owner
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/team/page.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 1015
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 962
                                                                }, this),
                                                                member.model && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-gray-600 font-mono",
                                                                    children: member.model
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 1092
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 878
                                                        }, this)
                                                    ]
                                                }, member._id, true, {
                                                    fileName: "[project]/src/app/team/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 74
                                                }, this)
                                        }["TeamPage[grouped.map() > group.members.map()]"])
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 430
                                    }, this)
                                ]
                            }, group.key, true, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 218,
                                columnNumber: 45
                            }, this)
                    }["TeamPage[grouped.map()]"]),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900 border border-gray-800 rounded-xl p-6 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider",
                                children: "Reporting Structure"
                            }, void 0, false, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 228,
                                columnNumber: 109
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-cyan-900/50 to-cyan-800/30 border border-cyan-500/30 rounded-xl px-6 py-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg mr-2",
                                                children: "🐙"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 377
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-cyan-300",
                                                children: "Joma"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 417
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-cyan-500 ml-2",
                                                children: "CTO"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 474
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 259
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-6 bg-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 535
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-8 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 624
                                            }, this),
                                            functionOrder.filter(_TeamPageFunctionOrderFilter).map({
                                                "TeamPage[(anonymous)()]": (func_0)=>{
                                                    const config = functionConfig[func_0];
                                                    const count = members.filter({
                                                        "TeamPage[(anonymous)() > members.filter()]": (m_3)=>m_3.function === func_0
                                                    }["TeamPage[(anonymous)() > members.filter()]"]).length;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-px h-4 bg-gray-700"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 81
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `border ${config.color} rounded-lg px-4 py-2 text-center`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: config.emoji
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/team/page.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 196
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-medium text-gray-300",
                                                                        children: config.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/team/page.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 243
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] text-gray-500",
                                                                        children: [
                                                                            count,
                                                                            " agent",
                                                                            count !== 1 ? "s" : ""
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/team/page.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 310
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/team/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 121
                                                            }, this)
                                                        ]
                                                    }, func_0, true, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 24
                                                    }, this);
                                                }
                                            }["TeamPage[(anonymous)()]"])
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 575
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/team/page.tsx",
                                lineNumber: 228,
                                columnNumber: 215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 228,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 217,
                columnNumber: 201
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-4",
                        children: [
                            "all",
                            ...functionOrder
                        ].map({
                            "TeamPage[(anonymous)()]": (f_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "TeamPage[(anonymous)() > <button>.onClick]": ()=>setFuncFilter(f_0)
                                    }["TeamPage[(anonymous)() > <button>.onClick]"],
                                    className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${funcFilter === f_0 ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                                    children: f_0 === "all" ? "All" : functionConfig[f_0].emoji + " " + functionConfig[f_0].label
                                }, f_0, false, {
                                    fileName: "[project]/src/app/team/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 45
                                }, this)
                        }["TeamPage[(anonymous)()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 236,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900 border border-gray-800 rounded-xl overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3",
                                                children: "Agent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 198
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3",
                                                children: "Role"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 303
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3",
                                                children: "Department"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 407
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 517
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3",
                                                children: "Current Task"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 623
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3",
                                                children: "Owner"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 735
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 840
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/team/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 157
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/team/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-800/50",
                                    children: filteredMembers.map({
                                        "TeamPage[filteredMembers.map()]": (member_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-800/30 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-8 h-8 rounded-lg bg-gradient-to-br ${colorMap[member_0.color] || "from-gray-600 to-gray-800"} flex items-center justify-center text-base`,
                                                                    children: member_0.avatar
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 203
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium text-gray-200",
                                                                    children: member_0.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 384
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 162
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 136
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3 text-sm text-gray-400",
                                                        children: member_0.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 469
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500",
                                                            children: [
                                                                functionConfig[member_0.function]?.emoji,
                                                                " ",
                                                                functionConfig[member_0.function]?.label
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 563
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 537
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: {
                                                                "TeamPage[filteredMembers.map() > <button>.onClick]": ()=>handleStatusToggle(member_0._id, member_0.status)
                                                            }["TeamPage[filteredMembers.map() > <button>.onClick]"],
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `w-2 h-2 rounded-full ${statusConfig[member_0.status].dot}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 114
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs px-2 py-0.5 rounded-full ${statusConfig[member_0.status].bg}`,
                                                                    children: statusConfig[member_0.status].label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 194
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 726
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 700
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3",
                                                        children: editingTask?.id === member_0._id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: editingTask.task,
                                                                    onChange: {
                                                                        "TeamPage[filteredMembers.map() > <input>.onChange]": (e_0)=>setEditingTask({
                                                                                ...editingTask,
                                                                                task: e_0.target.value
                                                                            })
                                                                    }["TeamPage[filteredMembers.map() > <input>.onChange]"],
                                                                    onKeyDown: {
                                                                        "TeamPage[filteredMembers.map() > <input>.onKeyDown]": (e_1)=>e_1.key === "Enter" && saveTask()
                                                                    }["TeamPage[filteredMembers.map() > <input>.onKeyDown]"],
                                                                    className: "px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-200 w-full focus:outline-none focus:border-blue-500",
                                                                    autoFocus: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 431
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: saveTask,
                                                                    className: "text-xs text-blue-400 hover:text-blue-300",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 233
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 403
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            onClick: {
                                                                "TeamPage[filteredMembers.map() > <span>.onClick]": ()=>setEditingTask({
                                                                        id: member_0._id,
                                                                        task: member_0.currentTask ?? ""
                                                                    })
                                                            }["TeamPage[filteredMembers.map() > <span>.onClick]"],
                                                            className: "text-xs text-gray-500 cursor-pointer hover:text-gray-300",
                                                            children: member_0.currentTask || "\u2014"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 333
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 341
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3 text-xs text-gray-500",
                                                        children: member_0.owner
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 190
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-3 text-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1 justify-end",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: {
                                                                        "TeamPage[filteredMembers.map() > <button>.onClick]": ()=>setSelectedId(member_0._id)
                                                                    }["TeamPage[filteredMembers.map() > <button>.onClick]"],
                                                                    className: "p-1 text-gray-500 hover:text-gray-300 text-xs",
                                                                    children: "👁️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 336
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: {
                                                                        "TeamPage[filteredMembers.map() > <button>.onClick]": ()=>removeMember({
                                                                                id: member_0._id
                                                                            })
                                                                    }["TeamPage[filteredMembers.map() > <button>.onClick]"],
                                                                    className: "p-1 text-gray-500 hover:text-red-400 text-xs",
                                                                    children: "🗑️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/team/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 148
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/team/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 296
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/team/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 259
                                                    }, this)
                                                ]
                                            }, member_0._id, true, {
                                                fileName: "[project]/src/app/team/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 62
                                            }, this)
                                    }["TeamPage[filteredMembers.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/team/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 961
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/team/page.tsx",
                            lineNumber: 240,
                            columnNumber: 124
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/team/page.tsx",
                        lineNumber: 240,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/team/page.tsx",
                lineNumber: 236,
                columnNumber: 70
            }, this),
            t12
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/team/page.tsx",
        lineNumber: 215,
        columnNumber: 10
    }, this);
}
_s(TeamPage, "fR0SXGoSVR7Zh9SOszX4Ftjb9CM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = TeamPage;
function _TeamPageSelectedMemberResponsibilitiesMap(r) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-lg border border-gray-700",
        children: r
    }, r, false, {
        fileName: "[project]/src/app/team/page.tsx",
        lineNumber: 265,
        columnNumber: 10
    }, this);
}
function _TeamPageFunctionOrderFilter(f) {
    return f !== "leadership";
}
function _TeamPageMembersFilter(m_2) {
    return m_2.status === "active";
}
function _TeamPageAnonymous(g) {
    return g.members.length > 0;
}
var _c;
__turbopack_context__.k.register(_c, "TeamPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3df5f731._.js.map