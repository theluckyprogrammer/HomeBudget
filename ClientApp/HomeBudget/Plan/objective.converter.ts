import { Injectable } from '@angular/core';

import { Objective } from './objective.model';

export class ObjectiveConverter {

    static ToArray(json: String): Objective[] {
              
        let categories: Objective[] = new Array<Objective>();
        Object.assign(categories, json);    
        return categories;
    }

    static Single(json: String): Objective {

        let category: Objective = new Objective();
        Object.assign(category, json);
        return category;
    }
}