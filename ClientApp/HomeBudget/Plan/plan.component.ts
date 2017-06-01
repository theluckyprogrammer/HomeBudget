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
    private categories: Category[];
   

    constructor(private planService: PlanService, private categoryService: CategoryService ) { }

    ngOnInit() {

        this.dropdownCategories = [];
        this.categories = [];
        this.categoryService.getCategories().then(rCategories => {

            rCategories.forEach(category => {
                this.dropdownCategories.push({ label: category.name, value: category.name });

            });

            this.categories = rCategories;
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
        var selectedCategory = this.findCategory(event.value);

        if (selectedCategory == null)
            return;

        selectedObjective.category = selectedCategory;
        this.planService.update(selectedObjective).then(rObjective => this.objectives[this.objectives.indexOf(selectedObjective)] = rObjective);
    }

    findCategory(name: String): Category {
        return this.categories.find(cat => cat.name == name);        
    }

    onBlur(event, rowData, test) {

        if (event.srcElement.value == "")
            return;

        var selectedCategory = this.findCategory(event.srcElement.value);
        var selectedObjective = this.objectives.find(o => o.id == rowData.id); 

        if (selectedCategory != null)
            return;

        selectedObjective.category = new Category();
        selectedObjective.category.name = event.srcElement.value;

        this.planService.update(selectedObjective).then(rObjective => {
        this.objectives[this.objectives.indexOf(selectedObjective)] = rObjective
        this.categories.push(rObjective.category);
        });

        this.dropdownCategories.push({ label: event.srcElement.value, value: event.srcElement.value });
    }

}