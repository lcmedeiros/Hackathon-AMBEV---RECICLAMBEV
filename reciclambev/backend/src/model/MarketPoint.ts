import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('marketPoint')
export default class MarketPoint{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;
    
    @Column()
    opening_hours: string;
    
    @Column()
    open_on_weekends: boolean;
}