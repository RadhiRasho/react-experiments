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
import IsClient from "@/components/hooks/IsClient";
import IsMounted from "@/components/hooks/IsMounted";
import IsomorphicLayoutEffect from "@/components/hooks/IsomorphicLayoutEffect";
import LocalStorage from "@/components/hooks/LocalStorage";
import MapHook from "@/components/hooks/MapHook";
import MediaQuery from "@/components/hooks/MediaQuery";
import OnClickOutside from "@/components/hooks/OnClickOutside";
import ReadLocalStorage from "@/components/hooks/ReadLocalStorage";
import ResizeObserver, { WithDebounce } from "@/components/hooks/ResizeObserver";
import Screen from "@/components/hooks/Screen";
import Script from "@/components/hooks/Script";
import { ScrollLock, ScrollLockModal } from "@/components/hooks/ScrollLock";
import SessionStorage from "@/components/hooks/SessionStorage";
import SetInterval from "@/components/hooks/SetInterval";
import Step from "@/components/hooks/Step";
import TernaryDarkMode from "@/components/hooks/TerneryDarkMode";
import Timeout from "@/components/hooks/Timeout";
import Toggle from "@/components/hooks/Toggle";
import Unmount from "@/components/hooks/Unmount";
import WindowSize from "@/components/hooks/WindowResize";

export default function Home() {
	return (
		<main className="min-h-screen items-center justify-evenly p-4">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:auto-cols-auto grid-rows-auto gap-3 px-6 pb-4 *:flex *:justify-center *:items-center *:border *:dark:border-gray-50 *:border-gray-800 *:rounded-md *:p-4">
				<div>
					<BooleanHook />
				</div>
				<div>
					<ClickAnywhere />
				</div>
				<div>
					<CopyToClipboard />
				</div>
				<div>
					<CountDown />
				</div>
				<div>
					<Counter />
				</div>
				<div>
					<DarkMode />
				</div>
				<div>
					<DebounceCallback />
				</div>
				<div>
					<DebounceValue />
				</div>
				<div>
					<DocumentTitle />
				</div>
				<div>
					<EventCallback />
				</div>
				<div>
					<Hover />
				</div>
				<div>
					<IntersectionObserver />
				</div>
				<div>
					<SetInterval />
				</div>
				<div>
					<IsClient />
				</div>
				<div>
					<IsMounted />
				</div>
				<div>
					<IsomorphicLayoutEffect />
				</div>
				<div>
					<LocalStorage />
				</div>
				<div>
					<MapHook />
				</div>
				<div>
					<MediaQuery />
				</div>
				<div>
					<OnClickOutside />
				</div>
				<div>
					<ReadLocalStorage />
				</div>
				<div>
					<ResizeObserver />
				</div>
				<div>
					<WithDebounce />
				</div>
				<div>
					<Screen />
				</div>
				<div>
					<Script />
				</div>
				<div>
					<ScrollLock />
				</div>
				{/* <div>
					<ScrollLockModal />
				</div> */}
				<div>
					<SessionStorage />
				</div>
				<div>
					<Step />
				</div>
				<div>
					<TernaryDarkMode />
				</div>
				<div>
					<Timeout />
				</div>
				<div>
					<Toggle />
				</div>
				<div>
					<Unmount />
				</div>
				<div>
					<WindowSize />
				</div>
				{/* Not a bit fan of this, but could be useful in the future */}
				{/* <div className="border rounded-md p-4">
					<EventListener />
				</div> */}
			</div>
		</main>
	);
}
