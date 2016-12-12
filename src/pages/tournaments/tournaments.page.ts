import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
  tournaments: any;

  constructor(
    private navCtrl: NavController, 
    private eliteApi: EliteApi,
    private loadingController: LoadingController) {}

  itemTapped($event, tourney) {
    this.navCtrl.push(TeamsPage, tourney);
  }

  ngOnInit() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...',
      spinner: 'dots'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
    
  }

}
