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
		<div className="flex flex-col gap-2 justify-start items-center max-w-full w-full">
			<div id="scrollable" className="max-h-[25vh] overflow-y-auto w-full">
				<div className={"bg-black h-[10vh] w-full"} />
				<div className={"bg-red-500 h-[10vh] w-full"} />
				<div className={"bg-yellow-500 h-[10vh] w-full"} />
			</div>

			<div className="flex flex-col gap-1 justify-center  items-baseline *:w-[8rem]">
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={lock}
					disabled={isLocked}
				>
					Lock
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md"
					onClick={unlock}
					disabled={!isLocked}
				>
					Unlock
				</button>
			</div>
		</div>
	);
}
