import type { ReactNode } from "react";
import GlobalIndicator from "./GlobalIndicator";
import { ModeToggle } from "./Theme";

type NavMenuProps = {
	children: ReactNode;
};

export function NavMenu({ children }: NavMenuProps) {
	return (
		<div className="pt-2">
			<div className="flex min-w-fit max-w-full justify-between px-4">
				<ModeToggle />
				<GlobalIndicator />
			</div>
			{children}
		</div>
	);
}
