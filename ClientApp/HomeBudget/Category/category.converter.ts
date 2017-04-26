import { Injectable } from '@angular/core';

import { Category } from './category.model';

export class CategoryConverter {

    static ToArray(json: String): Category[] {
              
        let categories: Category[] = new Array<Category>();
        Object.assign(categories, json);    
        return categories;
    }

    static Single(json: String): Category {

        let category: Category = new Category();
        Object.assign(category, json);
        return category;
    }
}