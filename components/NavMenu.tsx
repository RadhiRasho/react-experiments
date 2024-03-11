import type { ReactNode } from "react";
import GlobalIndicator from "./GlobalIndicator";
import { ModeToggle } from "./Theme";

type NavMenuProps = {
	children: ReactNode;
};

export function NavMenu({ children }: NavMenuProps) {
	return (
		<>
			<div className="flex justify-between px-4">
				<ModeToggle />
				<GlobalIndicator />
			</div>
			{children}
		</>
	);
}
