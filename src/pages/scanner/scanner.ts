import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {
  public buttonText : string;
  public loading: boolean;
  public result: any;

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner, private toastcontroller : ToastController) {

  }
  
  ionViewDidLoad() {
    this.buttonText = "Scan";
    this.loading =false;
  }

 scanQRC(){
   const options: BarcodeScannerOptions = {
    torchOn: false
   }
   
   this.barcodeScanner.scan(options)
    .then(res =>{ 
      this.result = res.text
      ;})
    .catch(error =>{
      this.toastcontroller.create({
        message: error.message
      })
      .present();
    })

 };

}
