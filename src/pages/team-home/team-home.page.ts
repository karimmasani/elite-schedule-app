import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StandingsPage, TeamDetailPage } from '../pages';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.page.html'
})
export class TeamHomePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TeamHomePage Page');
  }

}
