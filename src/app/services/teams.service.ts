import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Team } from '../model/team';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import "rxjs/Rx";

@Injectable()
export class TeamsService {

  apiUrl: string;

  constructor( @Inject('BASE_URL') baseUrl: string, private http: Http) {
    this.apiUrl = baseUrl + "teams";
  }

  getAllTeams(): Observable<Team[]> {
    return this.http
        .get(this.apiUrl + "/all")
        .map((response: Response) => {
            return <Team[]>response.json();
        })
  }

  getTeamById(id: number): Observable<Team> {
    return this.http
        .get(this.apiUrl + "/" + id)
        .map((response: Response) => {
            return <Team>response.json();
        })
  }

}
