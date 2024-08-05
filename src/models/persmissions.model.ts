import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne } from "sequelize-typescript";
// import { Studios, Directors } from "./";

@Table({
	tableName: 'permissions',
	timestamps: true,
})

export class Permissions extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(
		{type: DataType.STRING, allowNull: false}
	)
	name!: string;

    @Column(
        {type: DataType.BOOLEAN, allowNull:false}
    )
    canCreate!: boolean;

    @Column(
        {type: DataType.BOOLEAN, allowNull:false}
    )
    canUpdate!: boolean;

    @Column(
        {type: DataType.BOOLEAN, allowNull:false}
    )
    canDelete!: boolean;

    @Column(
        {type: DataType.BOOLEAN, allowNull:false}
    )
    canGet!: boolean;
}