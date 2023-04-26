import { HostListener, Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss']
})
export class ScannerPage implements OnInit {
  
  ngOnInit() {
    /*App.addListener('resume', () => {
      this.onResume()
    })*/
  }

  data: any;

  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {
    this.scan()
    
  }

  onResume(): void {
    fromEvent(document, 'resume')
      .subscribe(() => {
        this.router.navigate(['/add'], { queryParams: { barcode: this.data.text } })
      })
  }

  scan(){
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      this.data = barcodeData;
      this.onResume()
    }).catch(err => {
      console.log('Error', err);
    });
  }



}
