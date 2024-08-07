import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne } from "sequelize-typescript";
import { Entities, Roles } from "./";

@Table({
	tableName: 'permissions',
	timestamps: false,
})

export class Permissions extends Model{
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

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

    @ForeignKey(() => Roles)
    @Column(DataType.INTEGER)
    roleId!: number;

    @BelongsTo(() => Roles)
    role!: Roles;

    @ForeignKey(()=>Entities)
    @Column(DataType.INTEGER)
    entityId!: number;

    @BelongsTo(()=>Entities)
    entity!: Entities;
}