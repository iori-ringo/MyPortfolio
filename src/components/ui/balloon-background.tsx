"use client";

import { useEffect, useRef } from "react";

// 風船のカラーセット
const colors = [
  { base: "#0d9488", light: "#5eead4", dark: "#115e59" }, // ティール
  { base: "#06b6d4", light: "#67e8f9", dark: "#0e7490" }, // シアン
  { base: "#14b8a6", light: "#99f6e4", dark: "#0f766e" }, // ティール2
  { base: "#22d3ee", light: "#a5f3fc", dark: "#0891b2" }, // シアン2
  { base: "#2dd4bf", light: "#5eead4", dark: "#0d9488" }, // ティール3
];

export const BalloonBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Particle = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      gravity: number;
      opacity: number;
      color: string;
      update: () => void;
      draw: () => void;
    };

    type Balloon = {
      x: number;
      y: number;
      r: number;
      speed: number;
      angle: number;
      wobbleSpeed: number;
      popped: boolean;
      colorSet: (typeof colors)[0];
      tailMidY: number;
      tailEndY: number;
      tailVelMid: number;
      tailVelEnd: number;
      prevX: number;
      init: (firstLoad: boolean) => void;
      pop: () => void;
      update: () => void;
      draw: () => void;
    };

    let balloons: Balloon[] = [];
    let particles: Particle[] = [];
    const mouse = { x: -2000, y: -2000 };
    const balloonCount = 20;
    let animationFrameId: number;

    // パーティクル作成関数
    const createParticle = (x: number, y: number, color: string): Particle => {
      const particle: Particle = {
        x,
        y,
        color,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 12,
        speedY: (Math.random() - 0.5) * 12,
        gravity: 0.2,
        opacity: 1,
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.speedY += this.gravity;
          this.opacity -= 0.025;
        },
        draw() {
          ctx.save();
          ctx.globalAlpha = Math.max(0, this.opacity);
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        },
      };
      return particle;
    };

    // 風船作成関数
    const createBalloon = (firstLoad: boolean): Balloon => {
      const balloon: Balloon = {
        x: 0,
        y: 0,
        r: 0,
        speed: 0,
        angle: 0,
        wobbleSpeed: 0,
        popped: false,
        colorSet: colors[0],
        tailMidY: 0,
        tailEndY: 0,
        tailVelMid: 0,
        tailVelEnd: 0,
        prevX: 0,

        init(first: boolean) {
          this.r = Math.random() * 15 + 25;
          this.x = Math.random() * canvas.width;
          this.y = first
            ? Math.random() * canvas.height
            : canvas.height + this.r + 200;

          this.colorSet = colors[Math.floor(Math.random() * colors.length)];
          this.speed = Math.random() * 0.8 + 0.3;
          this.wobbleSpeed = Math.random() * 0.02 + 0.01;
          this.angle = Math.random() * Math.PI * 2;
          this.popped = false;

          this.prevX = this.x;
          this.tailMidY = this.r + 40;
          this.tailEndY = this.r + 120;
          this.tailVelMid = 0;
          this.tailVelEnd = 0;
        },

        pop() {
          if (this.popped) return;
          this.popped = true;

          for (let i = 0; i < 15; i++) {
            particles.push(createParticle(this.x, this.y, this.colorSet.base));
          }

          setTimeout(() => this.init(false), 1000 + Math.random() * 1000);
        },

        update() {
          if (this.popped) return;

          this.y -= this.speed;
          this.angle += this.wobbleSpeed;
          this.x += Math.sin(this.angle * 0.6) * 0.6;

          const dx = this.x - mouse.x;
          const dy = this.y - this.r * 0.2 - mouse.y;
          if (Math.sqrt(dx * dx + dy * dy) < this.r + 10) {
            this.pop();
          }

          if (this.y < -this.r - 200) this.init(false);

          this.draw();
        },

        draw() {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(Math.sin(this.angle) * 0.06);

          // 紐を描画
          const dx = this.x - this.prevX;
          this.prevX = this.x;

          const stiffness = 0.08;
          const damping = 0.85;
          const gravity = 0.35;

          const midTarget = this.r + 40 + Math.abs(dx) * 8;
          this.tailVelMid += (midTarget - this.tailMidY) * stiffness;
          this.tailVelMid *= damping;
          this.tailMidY += this.tailVelMid;

          const endTarget = this.r + 120 + Math.abs(dx) * 14;
          this.tailVelEnd += (endTarget - this.tailEndY) * stiffness;
          this.tailVelEnd *= damping;
          this.tailVelEnd += gravity;
          this.tailEndY += this.tailVelEnd;

          const sway = Math.sin(this.angle * 1.8) * 6 + dx * 4;

          ctx.beginPath();
          ctx.moveTo(0, this.r + 5);
          ctx.bezierCurveTo(
            sway,
            this.tailMidY * 0.5,
            -sway,
            this.tailMidY,
            sway * 0.6,
            this.tailEndY,
          );
          ctx.strokeStyle = "rgba(13, 148, 136, 0.25)";
          ctx.lineWidth = 1.3;
          ctx.stroke();

          // 風船本体を描画
          ctx.beginPath();
          ctx.moveTo(0, this.r);
          ctx.bezierCurveTo(
            -this.r * 1.2,
            this.r * 0.8,
            -this.r * 1.3,
            -this.r * 1.2,
            0,
            -this.r * 1.2,
          );
          ctx.bezierCurveTo(
            this.r * 1.3,
            -this.r * 1.2,
            this.r * 1.2,
            this.r * 0.8,
            0,
            this.r,
          );
          ctx.closePath();

          const grad = ctx.createRadialGradient(
            -this.r * 0.3,
            -this.r * 0.5,
            this.r * 0.1,
            0,
            0,
            this.r * 1.5,
          );
          grad.addColorStop(0, this.colorSet.light);
          grad.addColorStop(0.4, this.colorSet.base);
          grad.addColorStop(1, this.colorSet.dark);
          ctx.fillStyle = grad;
          ctx.globalAlpha = 0.85;
          ctx.fill();

          ctx.restore();
        },
      };

      balloon.init(firstLoad);
      return balloon;
    };

    // リサイズ処理
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      balloons = [];
      for (let i = 0; i < balloonCount; i++) {
        balloons.push(createBalloon(true));
      }
    };

    // アニメーションループ
    const animate = () => {
      // 視差効果軽減設定のチェック
      const isReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (isReduced) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter((p) => p.opacity > 0);
      for (const p of particles) {
        p.update();
        p.draw();
      }

      for (const b of balloons) {
        b.update();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
