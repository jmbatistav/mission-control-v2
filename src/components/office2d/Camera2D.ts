/* ─────────────────────────────────────────────
   Camera2D.ts — Pan/zoom/follow agent camera system
   ─────────────────────────────────────────────*/

import { Container } from "pixi.js";

export class Camera2D {
  private container: Container;
  private viewWidth: number;
  private viewHeight: number;

  // Camera state
  private offsetX: number = 0;
  private offsetY: number = 0;
  private zoom: number = 1.0;
  private readonly minZoom = 0.5;
  private readonly maxZoom = 3.0;

  // Follow target
  private followTargetX: number | null = null;
  private followTargetY: number | null = null;
  private followSpeed: number = 3; // lerp speed

  // Drag state
  private dragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private dragOffsetStartX = 0;
  private dragOffsetStartY = 0;

  constructor(container: Container, viewWidth: number, viewHeight: number) {
    this.container = container;
    this.viewWidth = viewWidth;
    this.viewHeight = viewHeight;

    // Center the camera initially
    this.offsetX = viewWidth / 2 - 480;
    this.offsetY = viewHeight / 2 - 384;
  }

  resize(width: number, height: number) {
    this.viewWidth = width;
    this.viewHeight = height;
  }

  /** Start following a pixel position smoothly */
  followPosition(pixelX: number, pixelY: number) {
    this.followTargetX = pixelX;
    this.followTargetY = pixelY;
  }

  /** Stop following */
  stopFollow() {
    this.followTargetX = null;
    this.followTargetY = null;
  }

  /** Handle mouse/touch drag start */
  onDragStart(screenX: number, screenY: number) {
    this.dragging = true;
    this.dragStartX = screenX;
    this.dragStartY = screenY;
    this.dragOffsetStartX = this.offsetX;
    this.dragOffsetStartY = this.offsetY;
    this.followTargetX = null;
    this.followTargetY = null;
  }

  /** Handle mouse/touch drag move */
  onDragMove(screenX: number, screenY: number) {
    if (!this.dragging) return;
    this.offsetX = this.dragOffsetStartX + (screenX - this.dragStartX);
    this.offsetY = this.dragOffsetStartY + (screenY - this.dragStartY);
  }

  /** Handle mouse/touch drag end */
  onDragEnd() {
    this.dragging = false;
  }

  /** Handle zoom (scroll wheel) */
  onZoom(delta: number, centerX: number, centerY: number) {
    const oldZoom = this.zoom;
    this.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoom - delta * 0.001));
    
    // Zoom toward cursor position
    const zoomRatio = this.zoom / oldZoom;
    this.offsetX = centerX - (centerX - this.offsetX) * zoomRatio;
    this.offsetY = centerY - (centerY - this.offsetY) * zoomRatio;
  }

  /** Handle keyboard pan */
  onKeyPan(dx: number, dy: number) {
    const panSpeed = 10;
    this.offsetX += dx * panSpeed;
    this.offsetY += dy * panSpeed;
    this.followTargetX = null;
    this.followTargetY = null;
  }

  /** Update camera each frame */
  update(deltaMs: number) {
    // Smooth follow
    if (this.followTargetX !== null && this.followTargetY !== null) {
      const targetOffsetX = this.viewWidth / 2 - this.followTargetX * this.zoom;
      const targetOffsetY = this.viewHeight / 2 - this.followTargetY * this.zoom;

      const t = Math.min(1, this.followSpeed * deltaMs / 1000);
      this.offsetX += (targetOffsetX - this.offsetX) * t;
      this.offsetY += (targetOffsetY - this.offsetY) * t;
    }

    // Apply to container
    this.container.x = this.offsetX;
    this.container.y = this.offsetY;
    this.container.scale.set(this.zoom);
  }

  /** Convert screen coordinates to world coordinates */
  screenToWorld(screenX: number, screenY: number): { x: number; y: number } {
    return {
      x: (screenX - this.offsetX) / this.zoom,
      y: (screenY - this.offsetY) / this.zoom,
    };
  }
}
