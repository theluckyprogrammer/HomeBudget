import { Category } from '../Category/category.model';

export class RealizationItem {
    id: number;
    name: string;
    categoryId: number;
    objectiveId: number;
    description: string;
    ishistorical: boolean;
    amount: number;
}
