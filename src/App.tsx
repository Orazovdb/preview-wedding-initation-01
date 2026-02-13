import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { CouplePhoto } from "./components/CouplePhoto";
import { InvitationContent } from "./components/InvitationContent";
import { weddingData } from "./data/wedding";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}, []);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "" : "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleOpenInvitation = () => {
		setIsOpen(true);
	};

	const unlockAudio = () => {
		audioRef.current?.play().catch(() => {});
	};

	return (
		<div className="app">
			<Analytics />
			<SpeedInsights route="/" />
			<audio
				ref={audioRef}
				src={weddingData.musicUrl}
				loop
				preload="metadata"
				aria-label="Фоновая музыка приглашения"
			/>
			<AnimatePresence mode="wait">
				<CouplePhoto
					key="couple-photo"
					onOpen={handleOpenInvitation}
					onUnlockAudio={unlockAudio}
				/>
				<InvitationContent key="content" />
			</AnimatePresence>
		</div>
	);
}

export default App;
