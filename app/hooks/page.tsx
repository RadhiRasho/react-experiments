"use client";

import BooleanHook from "@/components/hooks/BooleanHook";
import ClickAnywhere from "@/components/hooks/ClickAnywhere";
import CopyToClipboard from "@/components/hooks/CopyToClipboard";
import CountDown from "@/components/hooks/CountDown";
import Counter from "@/components/hooks/Counter";
import DarkMode from "@/components/hooks/DarkMode";
import DebounceCallback from "@/components/hooks/DebounceCallback";
import DebounceValue from "@/components/hooks/DebounceValue";
import DocumentTitle from "@/components/hooks/DocumentTitle";
import EventCallback from "@/components/hooks/EventCallback";
import Hover from "@/components/hooks/Hover";
import IntersectionObserver from "@/components/hooks/IntersectionObserver";

export default function Home() {
	return (
		<main className="min-h-screen items-center justify-evenly p-4">
			<div className="grid md:grid-cols-4 xs:auto-cols-auto grid-rows-auto gap-3 px-6 pb-4 *:flex *:justify-center *:items-center">
				<div className="border rounded-md p-4">
					<BooleanHook />
				</div>
				<div className="border rounded-md p-4">
					<ClickAnywhere />
				</div>
				<div className="border rounded-md p-4">
					<CopyToClipboard />
				</div>
				<div className="border rounded-md p-4">
					<CountDown />
				</div>
				<div className="border rounded-md p-4">
					<Counter />
				</div>
				<div className="border rounded-md p-4">
					<DarkMode />
				</div>
				<div className="border rounded-md p-4">
					<DebounceCallback />
				</div>
				<div className="border rounded-md p-4">
					<DebounceValue />
				</div>
				<div className="border rounded-md p-4">
					<DocumentTitle />
				</div>
				<div className="border rounded-md p-4">
					<EventCallback />
				</div>
				<div className="border rounded-md p-4">
					<Hover />
				</div>
				<div className="border rounded-md p-4">
					<IntersectionObserver />
				</div>
				{/* Not a bit fan of this, but could be useful in the future */}
				{/* <div className="border rounded-md p-4">
					<EventListener />
				</div> */}
			</div>
		</main>
	);
}
