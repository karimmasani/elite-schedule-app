import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
  tournaments: any;

  constructor(public navCtrl: NavController, private eliteApi: EliteApi) {}

  itemTapped($event, tourney) {
    this.navCtrl.push(TeamsPage, tourney);
  }

  ionViewLoaded() {
    this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }

}
