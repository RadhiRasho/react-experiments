import { useIsomorphicLayoutEffect } from "usehooks-ts";

export default function IsomorphicLayoutEffect() {
	useIsomorphicLayoutEffect(() => {
		console.log("In the browser, I'm an `useLayoutEffect`, but in SSR, I'm an `useEffect`.");
	}, []);

	return <p>Hello, world</p>;
}