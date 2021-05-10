type ThanksgivingDinnerSteps = {
	preheatOven: () => Promise<void>
	cookTurkey: () => Promise<void>
	cookDressing: () => Promise<void>
	serveDinner: () => Promise<void>
}

const cookThanksgivingDinner = (
	actions: ThanksgivingDinnerSteps,
): Promise<void> => {
	return actions
		.preheatOven()
		.then(() => Promise.all([actions.cookTurkey(), actions.cookDressing()]))
		.then(() => actions.serveDinner())
}

export { cookThanksgivingDinner, ThanksgivingDinnerSteps }
