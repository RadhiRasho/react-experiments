import { useScrollLock } from "usehooks-ts";

// Example 1: Auto lock the scroll of the body element when the modal mounts
export function ScrollLockModal() {
	useScrollLock();
	return <div>Modal</div>;
}

// Example 2: Manually lock and unlock the scroll for a specific target
export function ScrollLock() {
	const { lock, unlock, isLocked } = useScrollLock({
		autoLock: false,
		lockTarget: "#scrollable",
	});

	return (
		<div className="flex w-full max-w-full flex-col items-center justify-start gap-2">
			<div id="scrollable" className="max-h-[25vh] w-full overflow-y-auto">
				<div className={"h-[10vh] w-full bg-black"} />
				<div className={"h-[10vh] w-full bg-red-500"} />
				<div className={"h-[10vh] w-full bg-yellow-500"} />
			</div>

			<div className="flex flex-col items-baseline justify-center gap-1 *:w-32">
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={lock}
					disabled={isLocked}
				>
					Lock
				</button>
				<button
					type="button"
					className="rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={unlock}
					disabled={!isLocked}
				>
					Unlock
				</button>
			</div>
		</div>
	);
}
