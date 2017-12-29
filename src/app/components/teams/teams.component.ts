import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/team';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams : Team[];

  constructor(private teamsService : TeamsService) { }

  ngOnInit() {
    console.log("init")
    this.teamsService.getAllTeams().subscribe(r => this.teams = r);
  }

}
