import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage, TeamDetailPage, TournamentsPage, GamePage, TeamsPage, TeamHomePage, StandingsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    GamePage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    GamePage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
