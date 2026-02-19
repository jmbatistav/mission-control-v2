/* ─────────────────────────────────────────────
   AgentAnimationController.ts — Animation state machine
   ─────────────────────────────────────────────*/

export type AnimState =
  | "typing"
  | "walking"
  | "sitting"
  | "idle"
  | "thinking"
  | "meeting"
  | "offline";

export type Direction = "up" | "down" | "left" | "right";

interface AnimConfig {
  frameCount: number;
  frameDuration: number; // ms per frame
}

const ANIM_CONFIG: Record<AnimState, AnimConfig> = {
  typing:   { frameCount: 2, frameDuration: 400 },
  walking:  { frameCount: 4, frameDuration: 200 },
  sitting:  { frameCount: 1, frameDuration: 1000 },
  idle:     { frameCount: 2, frameDuration: 800 },
  thinking: { frameCount: 2, frameDuration: 600 },
  meeting:  { frameCount: 2, frameDuration: 500 },
  offline:  { frameCount: 1, frameDuration: 1000 },
};

export class AgentAnimController {
  state: AnimState = "idle";
  direction: Direction = "down";
  frameIndex: number = 0;
  private elapsed: number = 0;

  setState(newState: AnimState) {
    if (this.state !== newState) {
      this.state = newState;
      this.frameIndex = 0;
      this.elapsed = 0;
    }
  }

  setDirection(dir: Direction) {
    this.direction = dir;
  }

  update(deltaMs: number) {
    const config = ANIM_CONFIG[this.state];
    this.elapsed += deltaMs;
    if (this.elapsed >= config.frameDuration) {
      this.elapsed -= config.frameDuration;
      this.frameIndex = (this.frameIndex + 1) % config.frameCount;
    }
  }
}
