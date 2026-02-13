import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

interface ConfettiProps {
	/** Запуск конфетти при переключении на true */
	fire: boolean;
}

export function Confetti({ fire }: ConfettiProps) {
	const hasFired = useRef(false);

	useEffect(() => {
		if (!fire || hasFired.current) return;
		hasFired.current = true;

		const duration = 4000;
		const end = Date.now() + duration;

		const colors = ["#ffffff", "#1a1a1a", "#d4d4d4", "#333333"];

		const frame = () => {
			confetti({
				particleCount: 3,
				angle: 60,
				spread: 65,
				origin: { x: 0, y: 0.6 },
				colors,
				ticks: 200,
				gravity: 0.8,
				scalar: 1.1,
				drift: 0.2,
			});
			confetti({
				particleCount: 3,
				angle: 120,
				spread: 65,
				origin: { x: 1, y: 0.6 },
				colors,
				ticks: 200,
				gravity: 0.8,
				scalar: 1.1,
				drift: -0.2,
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		};

		// Небольшая задержка, чтобы контент успел появиться
		const timer = setTimeout(() => {
			frame();

			// Финальный залп по центру
			setTimeout(() => {
				confetti({
					particleCount: 80,
					spread: 100,
					origin: { x: 0.5, y: 0.4 },
					colors,
					ticks: 250,
					gravity: 0.6,
					scalar: 1.2,
				});
			}, duration - 500);
		}, 300);

		return () => clearTimeout(timer);
	}, [fire]);

	return null;
}
