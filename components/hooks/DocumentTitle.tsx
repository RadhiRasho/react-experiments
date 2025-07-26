import { useDocumentTitle } from "usehooks-ts";

export default function DocumentTitle() {
	useDocumentTitle("foo bar");
	return (
		<div className="flex flex-col gap-2 grow-0 justify-center items-center">Nothing To See Here, See Title</div>
	);
}
