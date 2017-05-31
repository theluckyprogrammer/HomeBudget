import { Component, OnInit} from '@angular/core';

import { DataTableModule, SharedModule, DialogModule, DropdownModule, SelectItem } from 'primeng/primeng';

import { Objective } from './objective.model';
import { PlanService } from './plan.service';

import { Category } from '../Category/category.model'
import { CategoryService } from '../Category/category.service'

@Component({
    selector: 'plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

    public objectives: Objective[];

    public saveMode: Number;
    public displayDialog: boolean;
    private addRowLocked: boolean;
    public dropdownCategories: SelectItem[]
    

    constructor(private planService: PlanService, private categoryService: CategoryService ) { }

    ngOnInit() {

        this.dropdownCategories = [];
        this.categoryService.getCategories().then(rCategories => {

            rCategories.forEach(category => {
                this.dropdownCategories.push({ label: category.name, value: category });

            });
        });

        this.planService.getObjectives().then(rObjectives => {
            this.objectives = rObjectives;

            if (this.objectives.length != 0)
                return;

            this.planService.create().then(rObjective => this.objectives.push(rObjective));
        });       
        
    }   

    onEdit(event) {

        if (this.addRowLocked)
            return
       
        if (this.objectives.find(o => o.id > event.data.id) != undefined)
            return;

        this.addRowLocked = true;

        this.planService.create().then(rObjective => {
            this.objectives.push(rObjective)
            this.addRowLocked = false;
        });
    } 

    onEditComplete(event) {
       var selectedObjective = this.objectives.find(o => o.id == event.data.id);
       this.planService.update(selectedObjective).then(rObjective => this.objectives[this.objectives.indexOf(selectedObjective)] = rObjective);
    } 

    onChange(event, rowData) {
        var selectedObjective = this.objectives.find(o => o.id == rowData.id);
        selectedObjective.category = event.value;
        this.planService.update(selectedObjective).then(rObjective => this.objectives[this.objectives.indexOf(selectedObjective)] = rObjective);
    }
}