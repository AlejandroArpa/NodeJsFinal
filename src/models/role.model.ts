import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { Users } from "./";

@Table({
	tableName: 'roles',
	timestamps: true,
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
}