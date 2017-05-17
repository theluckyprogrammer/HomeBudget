import { Component, OnInit} from '@angular/core';

import { DataTableModule, SharedModule, DialogModule } from 'primeng/primeng';

import { Objective } from './objective.model';
import { PlanService } from './plan.service';

@Component({
    selector: 'plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

    public objectives: Objective[];
    public selectedObjective: Objective;

    public saveMode: Number;
    public displayDialog: boolean;
    

    constructor(private planService: PlanService ) { }

    ngOnInit() {
        this.planService.getObjectives().then(rObjectives => {
            this.objectives = rObjectives;
        });

        if (this.objectives != undefined)
            return;

        this.planService.create().then(rObjective => this.objectives[this.objectives.indexOf(this.selectedObjective)] = rObjective);
    }   

    onEdit(event) {
        if (this.objectives.indexOf(this.selectedObjective) != this.objectives.length - 1)
            return;

        this.planService.create().then(rObjective => this.objectives.push(rObjective));
    } 

    onEditComplete(event) {
        
        this.planService.update(this.selectedObjective).then(rObjective => this.objectives.push(rObjective));
    } 
}