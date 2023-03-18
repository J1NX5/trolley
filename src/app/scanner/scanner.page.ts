import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss']
})
export class ScannerPage implements OnInit {

  ngOnInit() {
  }

  data: any;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {
    this.scan()
    
  }

  onResume(){
    this.router.navigate(['/home'], { queryParams: { barcode: this.data } })
  }

  scan(){
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = JSON.stringify(barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }



}
