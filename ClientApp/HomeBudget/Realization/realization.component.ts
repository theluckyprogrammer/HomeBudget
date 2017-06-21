import { Component, OnInit} from '@angular/core';

import { DataTableModule, SharedModule, DialogModule, DropdownModule, SelectItem } from 'primeng/primeng';

import { Objective } from '../Plan/objective.model';
import { PlanService } from '../Plan/plan.service';

import { Category } from '../Category/category.model';
import { CategoryService } from '../Category/category.service';

import { RealizationItem } from '../Realization/realizationItem.model';
import { RealizationService } from '../Realization/realization.service';

@Component({
    selector: 'realization',
    templateUrl: './realization.component.html',
    styleUrls: ['./realization.component.css']
})
export class RealizationComponent implements OnInit {

    public objectives: Objective[];
    public realizationItems: RealizationItem[];

    public saveMode: Number;
    public displayDialog: boolean;
    private addRowLocked: boolean;
    public dropdownObjectives: SelectItem[]
    
   

    constructor(private realizationService: RealizationService, private planService: PlanService, private categoryService: CategoryService ) { }

    ngOnInit() {

        this.dropdownObjectives = [];
     
        this.planService.getObjectives().then(rObjectives => {

            rObjectives.forEach(objective => {
                this.dropdownObjectives.push({ label: objective.name, value: objective.id });

            });

          
        });

        this.realizationService.getRealizationItems().then(rRealizationItems => {
            this.realizationItems = rRealizationItems;

            if (this.realizationItems.length != 0)
                return;

            this.realizationService.create().then(rRealizationItem => this.realizationItems.push(rRealizationItem));
        });       
        
    }   

    onEdit(event) {

        if (this.addRowLocked)
            return
       
        if (this.realizationItems.find(o => o.id > event.data.id) != undefined)
            return;

        this.addRowLocked = true;

        this.realizationService.create().then(rRealizationItem => {
            this.realizationItems.push(rRealizationItem)
            this.addRowLocked = false;
        });
    } 

    onEditComplete(event) {
       var realizationItem = this.realizationItems.find(o => o.id == event.data.id);
       this.realizationService.update(realizationItem).then(rRealizationItem => this.realizationItems[this.realizationItems.indexOf(realizationItem)] = rRealizationItem);
    } 

    onChange(event, rowData) {
        var selectedRealizationItem = this.realizationItems.find(o => o.id == rowData.id);           
        
        this.realizationService.update(selectedRealizationItem).then(rRealizationItem => this.realizationItems[this.realizationItems.indexOf(selectedRealizationItem)] = rRealizationItem);
    }
}