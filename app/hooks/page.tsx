"use client";

import BooleanHook from "@/app/hooks/components/BooleanHook";
import ClickAnywhere from "@/app/hooks/components/ClickAnywhere";
import CopyToClipboard from "@/app/hooks/components/CopyToClipboard";
import CountDown from "@/app/hooks/components/CountDown";
import Counter from "@/app/hooks/components/Counter";
import DarkMode from "@/app/hooks/components/DarkMode";
import DebounceCallback from "@/app/hooks/components/DebounceCallback";
import DebounceValue from "@/app/hooks/components/DebounceValue";
import DocumentTitle from "@/app/hooks/components/DocumentTitle";
import EventCallback from "@/app/hooks/components/EventCallback";
import Hover from "@/app/hooks/components/Hover";
import IntersectionObserver from "@/app/hooks/components/IntersectionObserver";
import IsClient from "@/app/hooks/components/IsClient";
import IsMounted from "@/app/hooks/components/IsMounted";
import IsomorphicLayoutEffect from "@/app/hooks/components/IsomorphicLayoutEffect";
import LocalStorage from "@/app/hooks/components/LocalStorage";
import MapHook from "@/app/hooks/components/MapHook";
import MediaQuery from "@/app/hooks/components/MediaQuery";
import OnClickOutside from "@/app/hooks/components/OnClickOutside";
import ReadLocalStorage from "@/app/hooks/components/ReadLocalStorage";
import ResizeObserver, { WithDebounce } from "@/app/hooks/components/ResizeObserver";
import Screen from "@/app/hooks/components/Screen";
import Script from "@/app/hooks/components/Script";
import { ScrollLock } from "@/app/hooks/components/ScrollLock";
import SessionStorage from "@/app/hooks/components/SessionStorage";
import SetInterval from "@/app/hooks/components/SetInterval";
import Step from "@/app/hooks/components/Step";
import TernaryDarkMode from "@/app/hooks/components/TerneryDarkMode";
import Timeout from "@/app/hooks/components/Timeout";
import Toggle from "@/app/hooks/components/Toggle";
import Unmount from "@/app/hooks/components/Unmount";
import WindowSize from "@/app/hooks/components/WindowResize";

export default function Home() {
	return (
		<main className="min-h-screen items-center justify-evenly p-4">
			<div className="grid xs:auto-cols-auto grid-rows-auto gap-3 px-6 pb-4 *:flex *:items-center *:justify-center *:rounded-md *:border *:border-gray-800 *:p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:*:border-gray-50">
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
				{/* Not a big fan of this, but could be useful in the future */}
				{/* <div className="border rounded-md p-4">
					<EventListener />
				</div> */}
			</div>
		</main>
	);
}
