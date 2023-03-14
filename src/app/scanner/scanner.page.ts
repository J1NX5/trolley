import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  constructor() {
    this.startScan().then(()=>{
      console.log("gescannt")
    })
  }
  /*checkPermission = async () => {
      const status = await BarcodeScanner.checkPermission();
      if (status.denied) {
        const c = confirm('If you want to grant permission for using your camera, enable it in the app settings.');
        if (c) {
          BarcodeScanner.openAppSettings();
        }
      }
  }*/
  startScan = async () => {
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.EAN_13] });
    if (result.hasContent) {
      console.log(result.content);
    }
  }

  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  ngOnInit() {
  }

}
