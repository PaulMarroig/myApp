import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommentariesPage } from '../commentaries/commentaries';

import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrcodes: any;
  constructor(public navCtrl: NavController) {

    this.list();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentariesPage');
    
  }

  list() {
    const db = firebase.firestore();
    this.qrcodes = [];
    return db.collection("qrcode").get().then((collection) => {
      for(let artCollec of collection.docs) {
        let qrcode = artCollec.data();
        qrcode.firebaseId = qrcode.id;
        this.qrcodes.push(qrcode);
        console.log(qrcode.id, artCollec.data());
      }
    }).catch( (error) => {
      console.error(error);
    });
  }

  count(item) {
     item.valeur++;
   }

   DisplayComs(){
     this.navCtrl.push(CommentariesPage)
   }

}
