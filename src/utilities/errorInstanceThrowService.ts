export const errorInstanceThrowService = (error: any) => {
	if (error instanceof Error) {
		throw new Error('Service Error: ' + error.message);
	} else {
		throw new Error('Service Error: An unknown error occurred');
	}
}