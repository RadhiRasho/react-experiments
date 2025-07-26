import { useDocumentTitle } from "usehooks-ts";

export default function DocumentTitle() {
	useDocumentTitle("foo bar");
	return <div className="flex grow-0 flex-col items-center justify-center gap-2">Nothing To See Here, See Title</div>;
}
