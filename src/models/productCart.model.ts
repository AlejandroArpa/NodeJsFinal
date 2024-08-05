import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne } from "sequelize-typescript";
import { Products, Carts } from "./";

@Table({
	tableName: 'productsCarts',
	timestamps: true,
})

export class ProductsCarts extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{type: DataType.INTEGER, allowNull: false}
	)
	quantity!: number;

	@ForeignKey(()=>Products)
	@Column(
		{type:DataType.INTEGER, allowNull:false}
	)
	productId!: number;

	@BelongsTo(()=> Products)
	product!: Products;

	@ForeignKey(()=>Carts)
	@Column(
		{type:DataType.INTEGER, allowNull:false}
	)
	cartId!: number

	@BelongsTo(()=> Carts)
	cart!: Carts

	
}