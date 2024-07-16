import { useScreen } from "usehooks-ts";

export default function Screen() {
	const screen = useScreen({ initializeWithValue: false });

	return (
		<div>
			The current window dimensions are:
			<br />
			<ul className="grid grid-cols-2 gap-2 justify-center items-center">
				<li>Width: {screen?.width}</li>
				<li>Height: {screen?.height}</li>
				<li>Availwidth: {screen?.availWidth}</li>
				<li>Availheight: {screen?.availHeight}</li>
				<li>Colordepth: {screen?.colorDepth}</li>
				<li>Orientation: {JSON.stringify(screen?.orientation, null, 2)}</li>
				<li>Pixeldepth: {screen?.pixelDepth}</li>
			</ul>
		</div>
	);
}