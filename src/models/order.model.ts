import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne } from "sequelize-typescript";
import { Users } from "./";

@Table({
	tableName: 'orders',
	timestamps: true,
})

export class Orders extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{type: DataType.DECIMAL(10,2), allowNull: false}
	)
	total!: number;
	
	@ForeignKey(()=>Users)
	@Column(
		{type:DataType.INTEGER, allowNull:false}
	)
	userId!: number;
	
	@BelongsTo(()=>Users)
	user!:Users;
}