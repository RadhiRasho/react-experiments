import Link from "next/link";
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
				<div>
					<Link href={"./todos"}>Todos</Link>
				</div>
				<div className="flex justify-between gap-2">
					<ModeToggle />
					<GlobalIndicator />
				</div>
			</div>
			{children}
		</div>
	);
}
