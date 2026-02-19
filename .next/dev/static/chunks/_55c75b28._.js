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
"[project]/src/components/shared/StatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const statusColors = {
    // Ideas
    draft: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    approved: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    rejected: "bg-red-500/20 text-red-400 border-red-500/30",
    implemented: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    // Specs
    review: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    changes_requested: "bg-red-500/20 text-red-400 border-red-500/30",
    // Tasks
    backlog: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    in_progress: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    testing: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    done: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    deployed: "bg-purple-500/20 text-purple-400 border-purple-500/30"
};
const statusLabels = {
    draft: "Draft",
    approved: "Approved",
    rejected: "Rejected",
    implemented: "Implemented",
    review: "Review",
    changes_requested: "Changes Requested",
    backlog: "Backlog",
    in_progress: "In Progress",
    testing: "Testing",
    done: "Done",
    deployed: "Deployed"
};
function StatusBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "58d421889979b70ba755bf11725218798c03581dbfa23412af201ed51f03b9ab") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "58d421889979b70ba755bf11725218798c03581dbfa23412af201ed51f03b9ab";
    }
    const { status } = t0;
    const colors = statusColors[status] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
    const label = statusLabels[status] || status;
    const t1 = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors}`;
    let t2;
    if ($[1] !== label || $[2] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/shared/StatusBadge.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/PriorityIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PriorityIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const priorityConfig = {
    low: {
        color: "bg-gray-500",
        label: "Low"
    },
    medium: {
        color: "bg-blue-500",
        label: "Medium"
    },
    high: {
        color: "bg-orange-500",
        label: "High"
    },
    urgent: {
        color: "bg-red-500",
        label: "Urgent"
    }
};
function PriorityIndicator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "0f1fecbcc70c4d3344a4a8f912fd2100781407a10e1c413b07fe25edd32635f0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f1fecbcc70c4d3344a4a8f912fd2100781407a10e1c413b07fe25edd32635f0";
    }
    const { priority, showLabel: t1 } = t0;
    const showLabel = t1 === undefined ? true : t1;
    const config = priorityConfig[priority] || priorityConfig.low;
    const t2 = `w-2 h-2 rounded-full ${config.color}`;
    let t3;
    if ($[1] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PriorityIndicator.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== config.label || $[4] !== showLabel) {
        t4 = showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-400",
            children: config.label
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PriorityIndicator.tsx",
            lineNumber: 50,
            columnNumber: 23
        }, this);
        $[3] = config.label;
        $[4] = showLabel;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-1.5",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/PriorityIndicator.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_c = PriorityIndicator;
var _c;
__turbopack_context__.k.register(_c, "PriorityIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ideas/IdeaCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdeaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PriorityIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PriorityIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/AssigneeAvatar.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function IdeaCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "84b52a16d708eb2dbea862067e25668fe2153b34c8cc3a6d4afc6d7bdd0ca975") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "84b52a16d708eb2dbea862067e25668fe2153b34c8cc3a6d4afc6d7bdd0ca975";
    }
    const { idea, onClick } = t0;
    let t1;
    if ($[1] !== idea.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-gray-100 line-clamp-1 flex-1",
            children: idea.title
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = idea.title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== idea.createdBy) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: idea.createdBy,
            size: "sm"
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[3] = idea.createdBy;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-2",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== idea.description) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 line-clamp-2 mb-3",
            children: idea.description
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = idea.description;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== idea.status) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            status: idea.status
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[10] = idea.status;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== idea.priority) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PriorityIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            priority: idea.priority,
            showLabel: false
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[12] = idea.priority;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t5 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ideas/IdeaCard.tsx",
                lineNumber: 81,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== idea.tags) {
        t8 = idea.tags && idea.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-1 mt-2",
            children: idea.tags.map(_IdeaCardIdeaTagsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 90,
            columnNumber: 47
        }, this);
        $[17] = idea.tags;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== onClick || $[20] !== t3 || $[21] !== t4 || $[22] !== t7 || $[23] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClick,
            className: "bg-gray-900 border border-gray-800 rounded-xl p-4 cursor-pointer hover:border-gray-700 hover:scale-[1.02] transition-all duration-200",
            children: [
                t3,
                t4,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaCard.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[19] = onClick;
        $[20] = t3;
        $[21] = t4;
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    return t9;
}
_c = IdeaCard;
function _IdeaCardIdeaTagsMap(tag) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-full",
        children: tag
    }, tag, false, {
        fileName: "[project]/src/components/ideas/IdeaCard.tsx",
        lineNumber: 111,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "IdeaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ideas/IdeaForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdeaForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useActiveUser.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function IdeaForm({ idea, onClose }) {
    _s();
    const [activeUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveUser"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(idea?.title ?? "");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(idea?.description ?? "");
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(idea?.priority ?? "medium");
    const [tagsInput, setTagsInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(idea?.tags?.join(", ") ?? "");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const createIdea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].ideas.create);
    const updateIdea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].ideas.update);
    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        const tags = tagsInput.split(",").map((t)=>t.trim()).filter(Boolean);
        try {
            if (idea) {
                await updateIdea({
                    id: idea._id,
                    title,
                    description,
                    priority,
                    tags,
                    actor: activeUser
                });
            } else {
                await createIdea({
                    title,
                    description,
                    priority,
                    createdBy: activeUser,
                    tags
                });
            }
            onClose();
        } catch (err) {
            console.error(err);
        } finally{
            setSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-300 mb-1",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: title,
                        onChange: (e_0)=>setTitle(e_0.target.value),
                        required: true,
                        className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500 transition-colors",
                        placeholder: "What's the idea?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-300 mb-1",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: description,
                        onChange: (e_1)=>setDescription(e_1.target.value),
                        required: true,
                        rows: 4,
                        className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500 transition-colors resize-none",
                        placeholder: "Describe the idea in detail..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-300 mb-1",
                        children: "Priority"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: priority,
                        onChange: (e_2)=>setPriority(e_2.target.value),
                        className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "low",
                                children: "Low"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "medium",
                                children: "Medium"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "high",
                                children: "High"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "urgent",
                                children: "Urgent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-300 mb-1",
                        children: "Tags"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: tagsInput,
                        onChange: (e_3)=>setTagsInput(e_3.target.value),
                        className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500 transition-colors",
                        placeholder: "frontend, backend, design (comma separated)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-3 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition-colors",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: submitting,
                        className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors",
                        children: submitting ? "Saving..." : idea ? "Update" : "Create Idea"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ideas/IdeaForm.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ideas/IdeaForm.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_s(IdeaForm, "oRTG6JkiMOZQNDeyGd6VNrubL3Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = IdeaForm;
var _c;
__turbopack_context__.k.register(_c, "IdeaForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/ActivityFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/AssigneeAvatar.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function timeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}
const actionIcons = {
    created: "✨",
    updated: "✏️",
    status_changed: "🔄",
    deleted: "🗑️",
    assigned: "👤"
};
function ActivityFeed(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "ff7f62aff498a7a514805bb6ffb717984965b745a582e21fba055e6d8afa85f8") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ff7f62aff498a7a514805bb6ffb717984965b745a582e21fba055e6d8afa85f8";
    }
    const { activities } = t0;
    if (activities.length === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 py-4 text-center",
                children: "No activity yet"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/ActivityFeed.tsx",
                lineNumber: 45,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== activities) {
        t1 = activities.map(_ActivityFeedActivitiesMap);
        $[2] = activities;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/shared/ActivityFeed.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = ActivityFeed;
function _ActivityFeedActivitiesMap(entry) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: entry.actor,
                size: "sm"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/ActivityFeed.tsx",
                lineNumber: 71,
                columnNumber: 66
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: actionIcons[entry.action] || "\uD83D\uDCCC"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/ActivityFeed.tsx",
                                lineNumber: 71,
                                columnNumber: 186
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-300 font-medium",
                                children: entry.actor
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/ActivityFeed.tsx",
                                lineNumber: 71,
                                columnNumber: 264
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: timeAgo(entry.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/ActivityFeed.tsx",
                                lineNumber: 71,
                                columnNumber: 336
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/ActivityFeed.tsx",
                        lineNumber: 71,
                        columnNumber: 145
                    }, this),
                    entry.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-0.5 truncate",
                        children: entry.details
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/ActivityFeed.tsx",
                        lineNumber: 71,
                        columnNumber: 433
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/ActivityFeed.tsx",
                lineNumber: 71,
                columnNumber: 113
            }, this)
        ]
    }, entry._id, true, {
        fileName: "[project]/src/components/shared/ActivityFeed.tsx",
        lineNumber: 71,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ActivityFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/FileUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FileUpload({ entityType, entityId, uploadedBy, onUploaded }) {
    _s();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const generateUploadUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].files.generateUploadUrl);
    const saveFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].files.saveFile);
    async function handleUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        try {
            const uploadUrl = await generateUploadUrl();
            const result = await fetch(uploadUrl, {
                method: "POST",
                headers: {
                    "Content-Type": file.type
                },
                body: file
            });
            const { storageId } = await result.json();
            await saveFile({
                entityType,
                entityId,
                name: file.name,
                storageId,
                contentType: file.type,
                size: file.size,
                uploadedBy
            });
            onUploaded?.();
        } catch (err) {
            console.error("Upload failed:", err);
        } finally{
            setUploading(false);
            if (fileRef.current) fileRef.current.value = "";
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileRef,
                type: "file",
                onChange: handleUpload,
                className: "hidden",
                id: `file-upload-${entityId}`
            }, void 0, false, {
                fileName: "[project]/src/components/shared/FileUpload.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: `file-upload-${entityId}`,
                className: `inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600 cursor-pointer transition-colors ${uploading ? "opacity-50 cursor-wait" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 4v16m8-8H4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/FileUpload.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/FileUpload.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    uploading ? "Uploading..." : "Attach File"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/FileUpload.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/FileUpload.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
_s(FileUpload, "LyXrzzT+VKYEgl6XJcwBkktYrCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = FileUpload;
var _c;
__turbopack_context__.k.register(_c, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/FileList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function FileItem(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "28eb245f50f8a415579fc58a5a8ab453be14069f4781bbaba4a5212fc03bba77") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "28eb245f50f8a415579fc58a5a8ab453be14069f4781bbaba4a5212fc03bba77";
    }
    const { file } = t0;
    let t1;
    if ($[1] !== file.storageId) {
        t1 = {
            storageId: file.storageId
        };
        $[1] = file.storageId;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].files.getUrl, t1);
    const removeFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].files.remove);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-xs text-gray-400",
            children: "📄"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== file.name || $[5] !== url) {
        t3 = url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-blue-400 hover:text-blue-300 truncate block",
            children: file.name
        }, void 0, false, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 53,
            columnNumber: 16
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-300 truncate block",
            children: file.name
        }, void 0, false, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 53,
            columnNumber: 159
        }, this);
        $[4] = file.name;
        $[5] = url;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== file.size) {
        t4 = formatSize(file.size);
        $[7] = file.size;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t3 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 min-w-0",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== file._id || $[15] !== removeFile) {
        t7 = ({
            "FileItem[<button>.onClick]": ()=>removeFile({
                    id: file._id
                })
        })["FileItem[<button>.onClick]"];
        $[14] = file._id;
        $[15] = removeFile;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/FileList.tsx",
                lineNumber: 100,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t7,
            className: "opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all p-1",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[18] = t7;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t6 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 p-2 rounded-lg bg-gray-800/50 group",
            children: [
                t2,
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[20] = t6;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    return t10;
}
_s(FileItem, "sjvLtigqAsZn2eywFqlU3cB+3WM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = FileItem;
function FileList(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "28eb245f50f8a415579fc58a5a8ab453be14069f4781bbaba4a5212fc03bba77") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "28eb245f50f8a415579fc58a5a8ab453be14069f4781bbaba4a5212fc03bba77";
    }
    const { entityType, entityId } = t0;
    let t1;
    if ($[1] !== entityId || $[2] !== entityType) {
        t1 = {
            entityType,
            entityId
        };
        $[1] = entityId;
        $[2] = entityType;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const files = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].files.listByEntity, t1);
    if (!files || files.length === 0) {
        return null;
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xs font-medium text-gray-500 uppercase tracking-wider",
            children: "Files"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 154,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== files) {
        t3 = files.map(_FileListFilesMap);
        $[5] = files;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/FileList.tsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_s1(FileList, "OM1PhrsOJCmR/iQuWYTt3gBZq10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c1 = FileList;
function _FileListFilesMap(file) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileItem, {
        file: file
    }, file._id, false, {
        fileName: "[project]/src/components/shared/FileList.tsx",
        lineNumber: 178,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FileItem");
__turbopack_context__.k.register(_c1, "FileList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ideas/IdeaDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdeaDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PriorityIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PriorityIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/AssigneeAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ActivityFeed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/FileUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FileList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/FileList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useActiveUser.ts [app-client] (ecmascript)");
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
;
;
const IDEA_STATUSES = [
    "draft",
    "approved",
    "rejected",
    "implemented"
];
function IdeaDetail(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "0b212aa9c5c9a9e53370dea12a3f15a53498e097ab5c357c213068f246f493f5") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b212aa9c5c9a9e53370dea12a3f15a53498e097ab5c357c213068f246f493f5";
    }
    const { ideaId, onClose, onEdit } = t0;
    let t1;
    if ($[1] !== ideaId) {
        t1 = {
            id: ideaId
        };
        $[1] = ideaId;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const idea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].ideas.getById, t1);
    let t2;
    if ($[3] !== ideaId) {
        t2 = {
            ideaId
        };
        $[3] = ideaId;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const specs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].specs.listByIdea, t2);
    let t3;
    if ($[5] !== ideaId) {
        t3 = {
            entityType: "idea",
            entityId: ideaId
        };
        $[5] = ideaId;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].activity.listByEntity, t3);
    const updateStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].ideas.updateStatus);
    const removeIdea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].ideas.remove);
    const [activeUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveUser"])();
    if (!idea) {
        return null;
    }
    let t4;
    if ($[7] !== idea.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold text-gray-100",
            children: idea.title
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = idea.title;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== onEdit) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onEdit,
            className: "px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors",
            children: "Edit"
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[9] = onEdit;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== activeUser || $[12] !== ideaId || $[13] !== onClose || $[14] !== removeIdea) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "IdeaDetail[<button>.onClick]": async ()=>{
                    await removeIdea({
                        id: ideaId,
                        actor: activeUser
                    });
                    onClose();
                }
            }["IdeaDetail[<button>.onClick]"],
            className: "px-3 py-1.5 text-xs font-medium text-red-400 hover:text-red-300 border border-red-900/50 hover:border-red-800 rounded-lg transition-colors",
            children: "Delete"
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[11] = activeUser;
        $[12] = ideaId;
        $[13] = onClose;
        $[14] = removeIdea;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t5 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t4 || $[20] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[19] = t4;
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== idea.status) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            status: idea.status
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[22] = idea.status;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== idea.priority) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PriorityIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            priority: idea.priority
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[24] = idea.priority;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    let t12;
    if ($[26] !== idea.createdBy) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$AssigneeAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: idea.createdBy,
            size: "sm"
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500",
            children: [
                "by ",
                idea.createdBy
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[26] = idea.createdBy;
        $[27] = t11;
        $[28] = t12;
    } else {
        t11 = $[27];
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t10 || $[30] !== t11 || $[31] !== t12 || $[32] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mt-2",
            children: [
                t9,
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[29] = t10;
        $[30] = t11;
        $[31] = t12;
        $[32] = t9;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] !== t13 || $[35] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[34] = t13;
        $[35] = t8;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    let t15;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-2",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    let t16;
    if ($[38] !== idea.description) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-300 whitespace-pre-wrap",
                    children: idea.description
                }, void 0, false, {
                    fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                    lineNumber: 178,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[38] = idea.description;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== idea.tags) {
        t17 = idea.tags && idea.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-2",
                    children: "Tags"
                }, void 0, false, {
                    fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                    lineNumber: 186,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-1",
                    children: idea.tags.map(_IdeaDetailIdeaTagsMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                    lineNumber: 186,
                    columnNumber: 142
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 186,
            columnNumber: 48
        }, this);
        $[40] = idea.tags;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-2",
            children: "Change Status"
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== activeUser || $[44] !== idea.status || $[45] !== ideaId || $[46] !== updateStatus) {
        let t20;
        if ($[48] !== idea.status) {
            t20 = ({
                "IdeaDetail[IDEA_STATUSES.filter()]": (s)=>s !== idea.status
            })["IdeaDetail[IDEA_STATUSES.filter()]"];
            $[48] = idea.status;
            $[49] = t20;
        } else {
            t20 = $[49];
        }
        let t21;
        if ($[50] !== activeUser || $[51] !== ideaId || $[52] !== updateStatus) {
            t21 = ({
                "IdeaDetail[(anonymous)()]": (status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "IdeaDetail[(anonymous)() > <button>.onClick]": ()=>updateStatus({
                                    id: ideaId,
                                    status,
                                    actor: activeUser
                                })
                        }["IdeaDetail[(anonymous)() > <button>.onClick]"],
                        className: "px-3 py-1.5 text-xs font-medium border border-gray-700 hover:border-gray-600 rounded-lg text-gray-400 hover:text-gray-200 transition-colors capitalize",
                        children: status.replace("_", " ")
                    }, status, false, {
                        fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                        lineNumber: 214,
                        columnNumber: 48
                    }, this)
            })["IdeaDetail[(anonymous)()]"];
            $[50] = activeUser;
            $[51] = ideaId;
            $[52] = updateStatus;
            $[53] = t21;
        } else {
            t21 = $[53];
        }
        t19 = IDEA_STATUSES.filter(t20).map(t21);
        $[43] = activeUser;
        $[44] = idea.status;
        $[45] = ideaId;
        $[46] = updateStatus;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[54] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                    lineNumber: 240,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[54] = t19;
        $[55] = t20;
    } else {
        t20 = $[55];
    }
    let t21;
    if ($[56] !== specs) {
        t21 = specs && specs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-2",
                    children: "Linked Specs"
                }, void 0, false, {
                    fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                    lineNumber: 248,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: specs.map(_IdeaDetailSpecsMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                    lineNumber: 248,
                    columnNumber: 142
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 248,
            columnNumber: 40
        }, this);
        $[56] = specs;
        $[57] = t21;
    } else {
        t21 = $[57];
    }
    let t22;
    if ($[58] !== ideaId) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FileList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            entityType: "idea",
            entityId: ideaId
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[58] = ideaId;
        $[59] = t22;
    } else {
        t22 = $[59];
    }
    let t23;
    if ($[60] !== activeUser || $[61] !== ideaId) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            entityType: "idea",
            entityId: ideaId,
            uploadedBy: activeUser
        }, void 0, false, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[60] = activeUser;
        $[61] = ideaId;
        $[62] = t23;
    } else {
        t23 = $[62];
    }
    let t24;
    if ($[63] !== activity) {
        t24 = activity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-2",
                    children: "Activity"
                }, void 0, false, {
                    fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                    lineNumber: 273,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ActivityFeed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activities: activity
                }, void 0, false, {
                    fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                    lineNumber: 273,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 273,
            columnNumber: 23
        }, this);
        $[63] = activity;
        $[64] = t24;
    } else {
        t24 = $[64];
    }
    let t25;
    if ($[65] !== t14 || $[66] !== t16 || $[67] !== t17 || $[68] !== t20 || $[69] !== t21 || $[70] !== t22 || $[71] !== t23 || $[72] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t14,
                t16,
                t17,
                t20,
                t21,
                t22,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[65] = t14;
        $[66] = t16;
        $[67] = t17;
        $[68] = t20;
        $[69] = t21;
        $[70] = t22;
        $[71] = t23;
        $[72] = t24;
        $[73] = t25;
    } else {
        t25 = $[73];
    }
    return t25;
}
_s(IdeaDetail, "s/o/Ubridkc5l1hjFjwR3TXKjY4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useActiveUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveUser"]
    ];
});
_c = IdeaDetail;
function _IdeaDetailSpecsMap(spec) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-300",
                children: spec.title
            }, void 0, false, {
                fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                lineNumber: 297,
                columnNumber: 96
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                status: spec.status
            }, void 0, false, {
                fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                lineNumber: 297,
                columnNumber: 155
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-500",
                children: [
                    "v",
                    spec.version
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
                lineNumber: 297,
                columnNumber: 191
            }, this)
        ]
    }, spec._id, true, {
        fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
        lineNumber: 297,
        columnNumber: 10
    }, this);
}
function _IdeaDetailIdeaTagsMap(tag) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full",
        children: tag
    }, tag, false, {
        fileName: "[project]/src/components/ideas/IdeaDetail.tsx",
        lineNumber: 300,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "IdeaDetail");
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
"[project]/src/app/ideas/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdeasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ideas$2f$IdeaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ideas/IdeaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ideas$2f$IdeaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ideas/IdeaForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ideas$2f$IdeaDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ideas/IdeaDetail.tsx [app-client] (ecmascript)");
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
;
function IdeasPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "21616ce09bc07dd6f4a8b63841fd7599e7019d7ffa539b361f20b9bbc4e1d243") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21616ce09bc07dd6f4a8b63841fd7599e7019d7ffa539b361f20b9bbc4e1d243";
    }
    const ideas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].ideas.list);
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let selectedIdea;
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] !== editingId || $[2] !== filter || $[3] !== ideas) {
        const filteredIdeas = ideas?.filter({
            "IdeasPage[(anonymous)()]": (i)=>filter === "all" ? true : i.status === filter
        }["IdeasPage[(anonymous)()]"]) ?? [];
        let t4;
        if ($[9] !== editingId || $[10] !== ideas) {
            t4 = ideas?.find({
                "IdeasPage[(anonymous)()]": (i_0)=>i_0._id === editingId
            }["IdeasPage[(anonymous)()]"]);
            $[9] = editingId;
            $[10] = ideas;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        selectedIdea = t4;
        t0 = "p-6 lg:p-8 max-w-7xl mx-auto space-y-6";
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-100",
                                children: "💡 Ideas"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ideas/page.tsx",
                                lineNumber: 51,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: "Capture and manage your ideas"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ideas/page.tsx",
                                lineNumber: 51,
                                columnNumber: 130
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ideas/page.tsx",
                        lineNumber: 51,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "IdeasPage[<button>.onClick]": ()=>setShowCreate(true)
                        }["IdeasPage[<button>.onClick]"],
                        className: "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors",
                        children: "+ New Idea"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ideas/page.tsx",
                        lineNumber: 51,
                        columnNumber: 211
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ideas/page.tsx",
                lineNumber: 51,
                columnNumber: 12
            }, this);
            $[12] = t1;
        } else {
            t1 = $[12];
        }
        let t5;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = [
                "all",
                "draft",
                "approved",
                "rejected",
                "implemented"
            ];
            $[13] = t5;
        } else {
            t5 = $[13];
        }
        if ($[14] !== filter) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: t5.map({
                    "IdeasPage[(anonymous)()]": (status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "IdeasPage[(anonymous)() > <button>.onClick]": ()=>setFilter(status)
                            }["IdeasPage[(anonymous)() > <button>.onClick]"],
                            className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${filter === status ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" : "text-gray-400 hover:text-gray-200 border border-gray-800 hover:border-gray-700"}`,
                            children: status
                        }, status, false, {
                            fileName: "[project]/src/app/ideas/page.tsx",
                            lineNumber: 67,
                            columnNumber: 49
                        }, this)
                }["IdeasPage[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/app/ideas/page.tsx",
                lineNumber: 66,
                columnNumber: 12
            }, this);
            $[14] = filter;
            $[15] = t2;
        } else {
            t2 = $[15];
        }
        t3 = !ideas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: [
                ...Array(6)
            ].map(_IdeasPageAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 76,
            columnNumber: 19
        }, this) : filteredIdeas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-5xl",
                children: "💡"
            }, void 0, false, {
                fileName: "[project]/src/app/ideas/page.tsx",
                lineNumber: 76,
                columnNumber: 185
            }, void 0),
            title: "No ideas yet",
            description: "Start capturing your ideas to fuel the pipeline",
            actionLabel: "Create First Idea",
            onAction: {
                "IdeasPage[<EmptyState>.onAction]": ()=>setShowCreate(true)
            }["IdeasPage[<EmptyState>.onAction]"]
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 76,
            columnNumber: 167
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: filteredIdeas.map({
                "IdeasPage[filteredIdeas.map()]": (idea)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ideas$2f$IdeaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        idea: idea,
                        onClick: {
                            "IdeasPage[filteredIdeas.map() > <IdeaCard>.onClick]": ()=>setSelectedId(idea._id)
                        }["IdeasPage[filteredIdeas.map() > <IdeaCard>.onClick]"]
                    }, idea._id, false, {
                        fileName: "[project]/src/app/ideas/page.tsx",
                        lineNumber: 79,
                        columnNumber: 51
                    }, this)
            }["IdeasPage[filteredIdeas.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 78,
            columnNumber: 49
        }, this);
        $[1] = editingId;
        $[2] = filter;
        $[3] = ideas;
        $[4] = selectedIdea;
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        selectedIdea = $[4];
        t0 = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
    }
    let t4;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "IdeasPage[<Modal>.onClose]": ()=>setShowCreate(false)
        })["IdeasPage[<Modal>.onClose]"];
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    let t5;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ideas$2f$IdeaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: {
                "IdeasPage[<IdeaForm>.onClose]": ()=>setShowCreate(false)
            }["IdeasPage[<IdeaForm>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== showCreate) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: showCreate,
            onClose: t4,
            title: "New Idea",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[18] = showCreate;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    const t7 = selectedId !== null;
    let t8;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "IdeasPage[<Modal>.onClose]": ()=>setSelectedId(null)
        })["IdeasPage[<Modal>.onClose]"];
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== selectedId) {
        t9 = selectedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ideas$2f$IdeaDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ideaId: selectedId,
            onClose: {
                "IdeasPage[<IdeaDetail>.onClose]": ()=>setSelectedId(null)
            }["IdeasPage[<IdeaDetail>.onClose]"],
            onEdit: {
                "IdeasPage[<IdeaDetail>.onEdit]": ()=>{
                    setEditingId(selectedId);
                    setSelectedId(null);
                }
            }["IdeasPage[<IdeaDetail>.onEdit]"]
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 136,
            columnNumber: 24
        }, this);
        $[21] = selectedId;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t7 || $[24] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: t7,
            onClose: t8,
            title: "Idea Details",
            size: "lg",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[23] = t7;
        $[24] = t9;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    const t11 = editingId !== null;
    let t12;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "IdeasPage[<Modal>.onClose]": ()=>setEditingId(null)
        })["IdeasPage[<Modal>.onClose]"];
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== editingId || $[28] !== selectedIdea) {
        t13 = editingId && selectedIdea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ideas$2f$IdeaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            idea: selectedIdea,
            onClose: {
                "IdeasPage[<IdeaForm>.onClose]": ()=>setEditingId(null)
            }["IdeasPage[<IdeaForm>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 170,
            columnNumber: 40
        }, this);
        $[27] = editingId;
        $[28] = selectedIdea;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t11 || $[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: t11,
            onClose: t12,
            title: "Edit Idea",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[30] = t11;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t0 || $[34] !== t1 || $[35] !== t10 || $[36] !== t14 || $[37] !== t2 || $[38] !== t3 || $[39] !== t6) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: [
                t1,
                t2,
                t3,
                t6,
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ideas/page.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[33] = t0;
        $[34] = t1;
        $[35] = t10;
        $[36] = t14;
        $[37] = t2;
        $[38] = t3;
        $[39] = t6;
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    return t15;
}
_s(IdeasPage, "7CBxyw+UkMbvv+9aNcW+Zxtckcw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = IdeasPage;
function _IdeasPageAnonymous(_, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-36 bg-gray-900/50 rounded-xl animate-pulse"
    }, i_1, false, {
        fileName: "[project]/src/app/ideas/page.tsx",
        lineNumber: 205,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "IdeasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_55c75b28._.js.map