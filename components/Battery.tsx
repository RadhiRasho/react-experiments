type BatteryProps = {
	level: number | null;
	charging: boolean | null;
	chargingTime: number | null;
	dischargingTime: number | null;
	supported: boolean | null;
};

export default function Battery({
	level,
	charging,
	chargingTime,
	dischargingTime,
	supported,
}: BatteryProps) {
	return (
		<div>
			<h2>Level: {level}%</h2>
			<h2>Charging: {charging ? "Yes" : "No"}</h2>
			<h2>Charging time: {chargingTime?.toLocaleString()} seconds</h2>
			<h2>Discharging time: {dischargingTime?.toLocaleString()} seconds</h2>
			<h2>Supported: {supported ? "Yes" : "No"}</h2>
		</div>
	);
}
