import { useState } from "react";

import { useClickAnyWhere } from "usehooks-ts";

export default function ClickAnywhere() {
	const [count, setCount] = useState(0);

	useClickAnyWhere(() => setCount((prev) => prev + 1));

	return <div>Click count: {count}</div>;
}