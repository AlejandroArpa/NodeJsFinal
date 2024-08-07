import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne } from "sequelize-typescript";
import { Permissions } from "./";


@Table({
	tableName: 'entities',
	timestamps: false
})

export class Entities extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{
			type:DataType.STRING(200),
			allowNull:false
		}
	)
	name!: string;

	@HasOne(()=>Permissions)
	entityId!: Permissions;

}