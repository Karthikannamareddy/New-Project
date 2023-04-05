import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";



interface JobPostAttributes {
    id: number,
    company_name: string,
    title: string,
    role: string,
    skills: string,
    experience: number,
    
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}

export interface PostInput extends Optional<JobPostAttributes, "id"> { }

export interface PostOutput extends Required<JobPostAttributes> { }

class jobPost
    extends Model<JobPostAttributes, PostInput>
    implements JobPostAttributes {
   


    public id!: number;
    public company_name!: string;
    public title!: string;
    public role!: string;
    public skills!: string;
    public experience!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public readonly deleted_at!: Date;
    
}
jobPost .init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
    
      company_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        experience: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },

    {
        timestamps: true,
        sequelize: sequelizeConnection,
        paranoid: true,
    })

export default jobPost