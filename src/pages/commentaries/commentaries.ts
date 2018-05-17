import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import 'firebase/firestore';

/**
 * Generated class for the CommentariesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commentaries',
  templateUrl: 'commentaries.html',
})
export class CommentariesPage {
  qrcodes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  add(article) {
    const db = firebase.firestore();

    db.collection('articles').add(article).then((result) => {
      console.log(result);
    }).catch( (error) => {
      console.error(error);
    });
  }

  get(id) {
    //const db = firebase.firestore();

    //db.collection('articles').doc(id).collection('comments').add(...);
    //return db.collection("articles").doc(id).get();
    /*for(let article of this.articles) {
      if(article.id == id) {
        return article;
      }
    }*/
}

}
