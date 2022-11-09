import { DataPoint } from "./datapoint";

export interface Group {
    id:number;
    categoryName: string;
    details: DataPoint[];
    
}