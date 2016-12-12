import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class TeamsPage {

  constructor(public navCtrl: NavController, private navParams: NavParams, private eliteApi: EliteApi) {}

  teams = [];

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

  ngOnInit() {
    let selectedTourney = this.navParams.data;

    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    });
  }
}
