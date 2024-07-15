import { useIsClient } from "usehooks-ts";

export default function IsClient() {
	const isClient = useIsClient();

	return <div>{isClient ? "Client" : "server"}</div>;
}