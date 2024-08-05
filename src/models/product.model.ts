import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { ProductsCarts } from "./";

@Table({
	tableName: 'products',
	timestamps: true,
})

export class Products extends Model{
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
			type: DataType.DECIMAL(10,2),
			allowNull: false,
		}
	)
	price!: string;

    @Column(
		{
			type: DataType.TEXT
		}
	)
	description!: string;
    
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    stock!:number;
	
	@HasMany(()=>ProductsCarts)
	productsCartsId!: ProductsCarts[];
}