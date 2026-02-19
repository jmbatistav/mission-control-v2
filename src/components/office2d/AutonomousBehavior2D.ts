/* ─────────────────────────────────────────────
   AutonomousBehavior2D.ts — Idle agent roaming
   This is handled by OfficeStateManager.ts.
   This file re-exports constants for documentation.
   ─────────────────────────────────────────────*/

/** Max agents that can be doing autonomous actions simultaneously */
export const MAX_AUTONOMOUS_AGENTS = 2;

/** Duration an agent stays at the break area (ms) */
export const BREAK_DURATION_MS = 10_000;

/** Duration an agent visits another agent (ms) */
export const VISIT_DURATION_MS = 5_000;

/** Minimum idle time before agent considers autonomous action (ms) */
export const MIN_IDLE_BEFORE_ACTION = 30_000;

/** Maximum idle time before agent considers autonomous action (ms) */
export const MAX_IDLE_BEFORE_ACTION = 60_000;

/** How often the autonomous behavior system checks (ms) */
export const CHECK_INTERVAL_MS = 3_000;
