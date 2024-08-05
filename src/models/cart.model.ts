import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne, HasMany } from "sequelize-typescript";
import { ProductsCarts, Users } from "./";

@Table({
	tableName: 'carts',
	timestamps: true,
})

export class Carts extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@HasMany(()=>ProductsCarts)
	productsCartsId!: ProductsCarts[];

	@ForeignKey(()=>Users)
	@Column(
		{
			type:DataType.INTEGER,
			allowNull:false
		}
	)
	userId!: Users
	
	@BelongsTo(()=>Users)
	user!: Users
}