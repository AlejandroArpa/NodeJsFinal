import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne, HasMany } from "sequelize-typescript";
import { Carts, Orders, Roles } from "./";

@Table({
	tableName: 'users',
	timestamps: true,
})

export class Users extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{type: DataType.STRING, allowNull: false}
	)
	name!: string;

	@Column(
		{
			type: DataType.STRING(200),
			allowNull: false,
		}
	)
	email!: string;

    @Column(
		{
			type: DataType.STRING(50)
		}
	)
	password!: string;
	
	@HasOne(()=>Carts)
	cart!: Carts;

	@ForeignKey(()=>Roles)
	@Column(
		{
			type:DataType.INTEGER,
			allowNull:false
		}
	)
	rolId!:number;

	@HasMany(()=>Orders)
	orders!:Orders[];
}