import { Category } from '../Category/category.model';

export class Objective {
    id: number;
    name: string;
    category: Category;
    description: string;
    ishistorical: boolean;
}
