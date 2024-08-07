export const handleSequelizeError = (error: any) => {
	if (error instanceof Error) {
		throw new Error('Repository Error: ' + error.message);
} else {
		throw new Error('Repository Error: An unknown error occurred');
}
}