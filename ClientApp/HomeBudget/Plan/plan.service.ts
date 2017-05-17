import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ObjectiveConverter } from './objective.converter';

import { Objective } from './objective.model';

@Injectable()
export class PlanService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private objectiveUrl = 'api/plan';  // URL to web api

  constructor(private http: Http) { }

  getObjectives(): Promise<Objective[]> {
      console.log(this.objectiveUrl);
      return this.http.get(this.objectiveUrl)
               .toPromise()
        .then(response => {
                             
            return  ObjectiveConverter.ToArray(response.json())

        })
               .catch(this.handleError);
  }


  getObjective(id: number): Promise<Objective> {
      const url = `${this.objectiveUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
        .then(response => ObjectiveConverter.Single(response.json()))
      .catch(this.handleError);
  }    

  create(): Promise<Objective> {
    return this.http
        .post(this.objectiveUrl, {headers: this.headers})
      .toPromise()
        .then(res => ObjectiveConverter.Single(res.json()))
      .catch(this.handleError);
  }

  update(objective: Objective): Promise<Objective> {
      const url = `${this.objectiveUrl}`;
    return this.http
        .put(url, JSON.stringify(objective), {headers: this.headers})
      .toPromise()
        .then(() => objective)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

