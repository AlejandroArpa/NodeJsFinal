
type ErrorType = 'Validation error' | 'Database Error' | 'Service Error'| 'notNull Violation' | 'Cannot add or update a child row' | 'Product not found' | 'Cart not found' | 'Not stock available for that quantity' | 'Rol not found';

const errorMapping: Record<ErrorType, {statusCode: number; message: string }>  = {
	'Validation error' : { statusCode: 400, message: 'Invalid input data' },
	'Database Error': { statusCode: 500, message: 'Internal server error' },
	'Service Error': { statusCode: 500, message: 'Service error' },
	'notNull Violation': { statusCode: 400, message: 'Invalid input data' },
	'Cannot add or update a child row' : { statusCode: 400, message: 'Invalid input data' }, 
	'Product not found': {statusCode: 404, message: 'Product not exist' },
	'Cart not found': {statusCode: 404, message: 'Cart not exist' },
	'Not stock available for that quantity': {statusCode:404, message: 'Not stock available for that quantity'},
	'Rol not found': {statusCode:404, message: 'Rol not found'},
};

function mapErrorToResponse(error: Error) {
	console.log(error.message);
	
	const errorKey = error.message.split(': ')[1] as ErrorType;
	const table = error.message.split(': ')[2]?.split('.')[0];
	const field = error.message.split(': ')[2]?.split('.')[1];
	let mappedError = {statusCode: 500, message: ''};
	mappedError = {...errorMapping[errorKey]};
	if(table && field ){
		mappedError.message = `${mappedError.message} on ${table} table, ${field}`;
	}
	if(mappedError.statusCode){
		mappedError.message = `${mappedError.message}`;
		return mappedError 
	}
	else {
		return {statusCode: 500, message: 'Error without handler'};
	}
}

export { mapErrorToResponse };