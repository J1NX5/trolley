import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarcodeSearcherService {

  constructor(private http: HttpClient) { }

  callAPI(barcode: string){
    this.http.get('https://europe-west3-fx-trolley.cloudfunctions.net/api/?barcode=' + this.removeNullinString(barcode))
      .subscribe(data => {
        return console.log(data)
      })
  }

  removeNullinString(raw_barcode: string){
    return raw_barcode.replace(/^0*/, '')
  }

  callGoogle(){
    this.http.get('https://google.de')
      .subscribe(data => {
         console.log(data)
      })
  }

}
