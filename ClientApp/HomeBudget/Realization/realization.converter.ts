import { Injectable } from '@angular/core';

import { RealizationItem } from './realizationItem.model';

export class RealizationConverter {

    static ToArray(json: String): RealizationItem[] {
              
        let realizationItems: RealizationItem[] = new Array<RealizationItem>();
        Object.assign(realizationItems, json);    
        return realizationItems;
    }

    static Single(json: String): RealizationItem {

        let realizationItem: RealizationItem = new RealizationItem();
        Object.assign(realizationItem, json);
        return realizationItem;
    }
}