import { Request, Response, NextFunction } from 'express';
import { jwtDecode } from 'jwt-decode'

interface IPermissions {

		id: number;
		canCreate: boolean;
		canRead: boolean;
		canUpdate: boolean;
		canDelete: boolean;
		roleId: number;
		entityId: number;
	}

	interface IToken {
		id: number;
		permissions: IPermissions[];
	}
	type TBoolPermissionArray = [boolean, boolean, boolean, boolean];

	type TActionForbiden = 'canCreate' | 'canRead' | 'canUpdate' | 'canDelete';

const authorize = (entityId: number, action: TActionForbiden) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization;
		if (!bearerToken) {
			return res.status(401).json({ message: 'User not authenticated' });
		}	
		const token = bearerToken.split(' ')[0];
		const decoded:IToken = jwtDecode(token);
		// console.log(decoded);
		const { permissions } = decoded;
		console.log(permissions);
		permissions.forEach((per: IPermissions) => {
			if(per.entityId === entityId) {
				if(per[action] === false) {
					return res.status(403).json({ message: 'User does not have permission' });
				}
			}
		});
		
		
		// if(!permissions[actionForbiden] && permissions.entityId === entityId) {
		// 	return res.status(403).json({ message: 'User does not have permission' });
		// }

    next();
  };
};

export default authorize;
