import { Component, OnInit} from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { Crudo } from './CRUDO';

import { DataTableModule, SharedModule, DialogModule } from 'primeng/primeng';

@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

    public categories: Category[];
    public category = new Category;  
    public selectedCategory: Category;

    public saveMode: Number;
    public displayDialog: boolean;
    

    constructor(private categoryService: CategoryService ) { }

    ngOnInit() {
        this.categoryService.getCategories().then(rCategories =>
        {
            this.categories = rCategories;
        });
    }

    update() {

        this.CloseEditDialog();
    }

    create() {

        this.CloseEditDialog();
    }

    onRowSelect(event) {
        this.category = this.clone(this.selectedCategory);
        this.OpenEditDialog(Crudo.Update);
    }

    showDialogToAdd() {
        
        this.category = new Category();
        this.OpenEditDialog(Crudo.Create);
    }

    private OpenEditDialog(mode: Number): void {
        this.displayDialog = true;
        this.saveMode = mode;
    }

    private CloseEditDialog(): void {
        this.displayDialog = false;
        this.saveMode = 0;        
    }

    findSelectedCategoryIndex(): number {
        return this.categories.indexOf(this.category);
    }

    clone(c: Category): Category {
        let category = new Category();
        for (let prop in c) {
            category[prop] = c[prop];
        }
        return category;
    }
}