import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { RealizationConverter } from './realization.converter';
import { RealizationItem } from './realizationItem.model';


@Injectable()
export class RealizationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private realizationUrl = 'api/realization';  // URL to web api

  constructor(private http: Http) { }

  getRealizationItems(): Promise<RealizationItem[]> {
      console.log(this.realizationUrl);
      return this.http.get(this.realizationUrl)
               .toPromise()
        .then(response => {
                             
            return  RealizationConverter.ToArray(response.json())

        })
               .catch(this.handleError);
  }


  getRealizationItem(id: number): Promise<RealizationItem> {
      const url = `${this.realizationUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
        .then(response => {
            return RealizationConverter.Single(response.json());
        })
      .catch(this.handleError);
  }    

  create(): Promise<RealizationItem> {
    return this.http
        .post(this.realizationUrl, {headers: this.headers})
      .toPromise()
        .then(res => RealizationConverter.Single(res.json()))
      .catch(this.handleError);
  }

  update(realizationItem: RealizationItem): Promise<RealizationItem> {
      const url = `${this.realizationUrl}`;
    return this.http
        .put(url, JSON.stringify(realizationItem), {headers: this.headers})
      .toPromise()
        .then(response => RealizationConverter.Single(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

