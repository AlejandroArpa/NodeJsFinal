import { Permissions } from '../models';
import { injectable } from "tsyringe";

@injectable()
export class PermissionsRepository {

	// Read
	async getPermissionsByRole(role: number): Promise<Permissions[] | null> {
		const permissions= await Permissions.findAll({ where: { roleId: role }} );
		if(permissions){
			const plainPermissions = permissions.map(permission => permission.get({ plain: true }));
			return plainPermissions;
		}
		else{
			throw new Error('Role not found');
		}
	}
	
}
