/* ─────────────────────────────────────────────
   GridSystem.ts — Grid constants, cell positions, zone definitions
   ─────────────────────────────────────────────*/

export const CELL_SIZE = 48; // pixels per grid cell (3x upscale of 16px sprites)
export const OFFICE_COLS = 20;
export const OFFICE_ROWS = 16;
export const WORLD_WIDTH = OFFICE_COLS * CELL_SIZE;
export const WORLD_HEIGHT = OFFICE_ROWS * CELL_SIZE;

/* ─── Zone definitions (grid coordinates) ─── */

export interface Zone {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}

export const ZONES: Record<string, Zone> = {
  manager:     { x: 1, y: 1, w: 3, h: 3, label: "Leadership" },
  engineering: { x: 5, y: 1, w: 9, h: 3, label: "Engineering" },
  design:      { x: 1, y: 5, w: 3, h: 3, label: "Design" },
  product:     { x: 5, y: 5, w: 6, h: 3, label: "Product" },
  operations:  { x: 1, y: 9, w: 6, h: 3, label: "Operations" },
  meetingRoom: { x: 14, y: 1, w: 5, h: 4, label: "Meeting Room" },
  breakArea:   { x: 14, y: 8, w: 5, h: 4, label: "Break Area" },
};

/* ─── Cubicle positions within zones ─── */

export interface CubiclePos {
  gridX: number;
  gridY: number;
  zone: string;
}

// Each cubicle is 3x3 cells: desk at row 0, chair at row 1, open front at row 2
// Agent sits at chair position (row 1, col 1 of the cubicle)
function cubiclesForZone(zone: Zone, zoneName: string, count: number): CubiclePos[] {
  const cubicles: CubiclePos[] = [];
  for (let i = 0; i < count; i++) {
    cubicles.push({
      gridX: zone.x + i * 3,
      gridY: zone.y,
      zone: zoneName,
    });
  }
  return cubicles;
}

export const CUBICLE_POSITIONS: Record<string, CubiclePos[]> = {
  leadership:  cubiclesForZone(ZONES.manager, "leadership", 1),
  engineering: cubiclesForZone(ZONES.engineering, "engineering", 3),
  design:      cubiclesForZone(ZONES.design, "design", 1),
  product:     cubiclesForZone(ZONES.product, "product", 2),
  operations:  cubiclesForZone(ZONES.operations, "operations", 2),
};

/** Get the grid cell where an agent sits (chair position inside cubicle) */
export function getAgentSeatPosition(dept: string, indexInDept: number): { x: number; y: number } {
  const cubicles = CUBICLE_POSITIONS[dept];
  if (!cubicles || cubicles.length === 0) return { x: 1, y: 1 };
  const cubicle = cubicles[indexInDept % cubicles.length];
  // Agent sits at middle of cubicle: +1x, +1y from cubicle origin
  return { x: cubicle.gridX + 1, y: cubicle.gridY + 1 };
}

/* ─── Meeting room seat positions ─── */

const MEETING_CENTER = { x: ZONES.meetingRoom.x + 2, y: ZONES.meetingRoom.y + 2 };

export function getMeetingSeat(seatIndex: number): { x: number; y: number } {
  // 6 seats around the meeting table
  const seats = [
    { x: MEETING_CENTER.x - 1, y: MEETING_CENTER.y - 1 },
    { x: MEETING_CENTER.x + 1, y: MEETING_CENTER.y - 1 },
    { x: MEETING_CENTER.x - 1, y: MEETING_CENTER.y + 1 },
    { x: MEETING_CENTER.x + 1, y: MEETING_CENTER.y + 1 },
    { x: MEETING_CENTER.x,     y: MEETING_CENTER.y - 1 },
    { x: MEETING_CENTER.x,     y: MEETING_CENTER.y + 1 },
  ];
  return seats[seatIndex % seats.length];
}

/* ─── Break area positions ─── */

export function getBreakAreaPosition(): { x: number; y: number } {
  const zone = ZONES.breakArea;
  return {
    x: zone.x + 1 + Math.floor(Math.random() * 3),
    y: zone.y + 1 + Math.floor(Math.random() * 2),
  };
}

/** Get a visit position near a target cubicle (stands in front) */
export function getVisitPosition(targetSeat: { x: number; y: number }): { x: number; y: number } {
  return { x: targetSeat.x, y: targetSeat.y + 1 };
}

/* ─── Pathfinding ─── */

// The office grid with blocked cells for pathfinding
// 0 = walkable, 1 = blocked
export function buildBlockedGrid(): boolean[][] {
  const grid: boolean[][] = [];
  for (let y = 0; y < OFFICE_ROWS; y++) {
    grid[y] = [];
    for (let x = 0; x < OFFICE_COLS; x++) {
      grid[y][x] = false; // walkable by default
    }
  }

  // Block cubicle desk cells (row 0 of each cubicle)
  for (const dept of Object.values(CUBICLE_POSITIONS)) {
    for (const cub of dept) {
      // Desk row (top row of cubicle): block all 3 cells
      for (let dx = 0; dx < 3; dx++) {
        const bx = cub.gridX + dx;
        const by = cub.gridY;
        if (bx < OFFICE_COLS && by < OFFICE_ROWS) {
          grid[by][bx] = true;
        }
      }
    }
  }

  // Block meeting table center
  grid[MEETING_CENTER.y][MEETING_CENTER.x] = true;

  // Block edges (walls)
  for (let x = 0; x < OFFICE_COLS; x++) {
    grid[0][x] = true;
    grid[OFFICE_ROWS - 1][x] = true;
  }
  for (let y = 0; y < OFFICE_ROWS; y++) {
    grid[y][0] = true;
    grid[y][OFFICE_COLS - 1] = true;
  }

  return grid;
}

/** Simple BFS pathfinding on grid */
export function findPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  blocked: boolean[][]
): { x: number; y: number }[] {
  // BFS
  const visited = new Set<string>();
  const queue: { x: number; y: number; path: { x: number; y: number }[] }[] = [];
  const key = (x: number, y: number) => `${x},${y}`;

  queue.push({ x: from.x, y: from.y, path: [{ x: from.x, y: from.y }] });
  visited.add(key(from.x, from.y));

  const dirs = [
    { dx: 0, dy: -1 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
  ];

  while (queue.length > 0) {
    const current = queue.shift()!;

    if (current.x === to.x && current.y === to.y) {
      return current.path;
    }

    for (const dir of dirs) {
      const nx = current.x + dir.dx;
      const ny = current.y + dir.dy;
      const k = key(nx, ny);

      if (
        nx >= 0 && nx < OFFICE_COLS &&
        ny >= 0 && ny < OFFICE_ROWS &&
        !visited.has(k) &&
        (!blocked[ny][nx] || (nx === to.x && ny === to.y))
      ) {
        visited.add(k);
        queue.push({
          x: nx,
          y: ny,
          path: [...current.path, { x: nx, y: ny }],
        });
      }
    }
  }

  // If no path found, return direct (fallback)
  return [from, to];
}

/* ─── Color map ─── */

export const COLOR_MAP: Record<string, number> = {
  cyan: 0x06b6d4,
  blue: 0x3b82f6,
  amber: 0xf59e0b,
  emerald: 0x10b981,
  pink: 0xec4899,
  violet: 0x8b5cf6,
  orange: 0xf97316,
  indigo: 0x6366f1,
  teal: 0x14b8a6,
  red: 0xef4444,
  lime: 0x84cc16,
  rose: 0xf43f5e,
  sky: 0x0ea5e9,
  fuchsia: 0xd946ef,
  yellow: 0xeab308,
};

export function getColorHex(colorName: string): number {
  return COLOR_MAP[colorName] ?? 0x06b6d4;
}

export function hexToRGB(hex: number): { r: number; g: number; b: number } {
  return {
    r: (hex >> 16) & 0xff,
    g: (hex >> 8) & 0xff,
    b: hex & 0xff,
  };
}
