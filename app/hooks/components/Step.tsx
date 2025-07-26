import { useStep } from "usehooks-ts";

export default function Step() {
	const [currentStep, { canGoToPrevStep, canGoToNextStep, goToNextStep, goToPrevStep, reset, setStep }] = useStep(5);

	return (
		<div className="flex flex-col items-center justify-start gap-8">
			<div className="flex flex-col items-center justify-center gap-2">
				<p>Current Step: {currentStep}</p>
				<p>Can Go To Previous Step: {canGoToPrevStep ? "yes" : "no"}</p>
				<p>Can Go To Next Step: {canGoToNextStep ? "yes" : "no"}</p>
			</div>
			<div className="flex flex-col items-baseline justify-center gap-1">
				<button
					type="button"
					className="w-48 rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={goToNextStep}
				>
					Go to next step
				</button>
				<button
					type="button"
					className="w-48 rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={goToPrevStep}
				>
					Go to previous step
				</button>
				<button
					type="button"
					className="w-48 rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={reset}
				>
					Reset
				</button>
				<button
					type="button"
					className="w-48 rounded-md bg-primary p-1 text-primary-foreground hover:bg-primary/85"
					onClick={() => setStep(3)}
				>
					Set to step 3
				</button>
			</div>
		</div>
	);
}
