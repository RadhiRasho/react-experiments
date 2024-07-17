import { useStep } from "usehooks-ts";

export default function Step() {
	const [currentStep, { canGoToPrevStep, canGoToNextStep, goToNextStep, goToPrevStep, reset, setStep }] = useStep(5);

	return (
		<div className="flex flex-col gap-8 justify-start items-center">
			<div className="flex flex-col gap-2 justify-center items-center">
				<p>Current Step: {currentStep}</p>
				<p>Can Go To Previous Step: {canGoToPrevStep ? "yes" : "no"}</p>
				<p>Can Go To Next Step: {canGoToNextStep ? "yes" : "no"}</p>
			</div>
			<div className="flex flex-col gap-1 justify-center items-baseline">
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md w-48"
					onClick={goToNextStep}
				>
					Go to next step
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md w-48"
					onClick={goToPrevStep}
				>
					Go to previous step
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md w-48"
					onClick={reset}
				>
					Reset
				</button>
				<button
					type="button"
					className="bg-primary text-primary-foreground p-1 hover:bg-primary/85 rounded-md w-48"
					onClick={() => setStep(3)}
				>
					Set to step 3
				</button>
			</div>
		</div>
	);
}
