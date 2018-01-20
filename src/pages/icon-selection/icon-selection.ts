import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, NavParams } from 'ionic-angular';

export const ID_IconSelection = 'icon-selection';
@IonicPage({
    name: 'icon-selection',
    segment: 'icon-selection'
})
@Component({
  selector: 'page-icon-selection',
  templateUrl: 'icon-selection.html',
})
export class IconSelectionPage {
    public icons: string[] = [
        'game-controller-b',
        'game-controller-a',
        'film',
        'laptop',
        'headset',
        'help',
        'images',
        'jet',
        'mic',
        'notifications',
        'notifications-off',
        'phone-landscape',
        'phone-portrait',
        'tablet-landscape',
        'tablet-portrait',
        'pint',
        'call',
        'school',
        'football',
        'happy',
        'heart',
    ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
    ) { }

  ionViewDidLoad() {
      // let id: string | number = this.navParams.get('id');
  }

  iconSelected(iconName: string) {
      console.log('icon selected:', iconName);
      this.viewCtrl.dismiss(iconName);
  }

}
