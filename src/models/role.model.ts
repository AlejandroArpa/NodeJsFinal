import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany, HasOne } from "sequelize-typescript";
import { Users, Permissions } from "./";

@Table({
	tableName: 'roles',
	timestamps: false,
})

export class Roles extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{type: DataType.STRING(200), allowNull: false}
	)
	name!: string;

	@HasMany(()=>Users)
	userId!: Users[];

	@HasMany(()=>Permissions)
	roleId!: Permissions;
}