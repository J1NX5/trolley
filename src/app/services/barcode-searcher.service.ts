import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarcodeSearcherService {

  constructor(private http: HttpClient) { }

  callAPI(barcode: string){
    this.http.get('https://www.buycott.com/upc/' + this.removeNullinString(barcode))
      .subscribe(data => {
        console.log('Data: ',data)
      })
  }

  removeNullinString(raw_barcode: string){
    return raw_barcode.replace(/^0*/, '')
  }

}
