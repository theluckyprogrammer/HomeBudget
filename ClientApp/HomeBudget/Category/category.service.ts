import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { CategoryConverter } from './category.converter';

import { Category } from './category.model';

@Injectable()
export class CategoryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private categoryUrl = 'api/category';  // URL to web api

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
      console.log(this.categoryUrl);
      return this.http.get(this.categoryUrl)
               .toPromise()
        .then(response => {
                             
         return  CategoryConverter.ToArray(response.json())

        })
               .catch(this.handleError);
  }


  getCategory(id: number): Promise<Category> {
      const url = `${this.categoryUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
        .then(response => CategoryConverter.Single(response.json()))
      .catch(this.handleError);
  }    

  create(name: string): Promise<Category> {
    return this.http
        .post(this.categoryUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
        .then(res => CategoryConverter.Single(res.json()))
      .catch(this.handleError);
  }

  update(category: Category): Promise<Category> {
      const url = `${this.categoryUrl}`;
    return this.http
        .put(url, JSON.stringify(category), {headers: this.headers})
      .toPromise()
        .then(() => category)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

