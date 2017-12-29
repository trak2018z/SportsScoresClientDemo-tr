import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { TeamsService } from './services/teams.service';
import { TeamsComponent } from './components/teams/teams.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'teams', pathMatch: 'full' },
      { path: '**', redirectTo: 'teams' },
      { path: 'teams', component: TeamsComponent },
  ])
  ],
  providers: [
    TeamsService,
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return "http://localhost:55547/api/";
}