"use client";

import { useEffect, useRef } from "react";

export default function Draw() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let t = 0;
		const w = canvas.width;
		const h = canvas.height;
		let usePink = true;
		let frameCount = 0;

		const mag = (k: number, e: number) => Math.sqrt(k * k + e * e);

		const a = (
			x: number,
			y: number,
			d = mag(x / 8 - 25, y / 8 - 25) ** 2 / 99,
		) => {
			const k = x / 8 - 25;
			const e = y / 8 - 25;
			const q = x / 3 + ((k * 0.5) / Math.cos(y * 5)) * Math.sin(d * d - t);
			const c = d / 2 - t / 8;
			return [
				q * Math.sin(c) + e * Math.sin(d + k - t) + w / 2,
				(q + y / 8 + d * 9) * Math.cos(c) + h / 2,
			];
		};

		const draw = () => {
			ctx.fillStyle = "rgba(6, 6, 6, 0.1)";
			ctx.fillRect(0, 0, w, h);
			ctx.strokeStyle = usePink
				? "rgba(255, 105, 180, 0.3)"
				: "rgba(255, 255, 0, 0.3)"; // Pink or Yellow
			frameCount += 1;

			for (let y = 99; y < 300; y += 5) {
				for (let x = 99; x < 300; x++) {
					const [px, py] = a(x, y);
					ctx.beginPath();
					ctx.arc(px, py, 0.5, 0, 2 * Math.PI);
					ctx.stroke();
				}
			}

			if (frameCount % 60 === 0) usePink = !usePink; // Toggle the color

			t += Math.PI / 60;
			requestAnimationFrame(draw);
		};

		draw();

		return () => {
			// Cleanup if necessary
		};
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen min-w-screen bg-gray-900">
			<canvas
				ref={canvasRef}
				height={1000}
				width={1000}
				className="border border-gray-700 rounded-lg shadow-lg"
			/>
		</div>
	);
}
