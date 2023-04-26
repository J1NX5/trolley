import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { BarcodeSearcherService } from '../services/barcode-searcher.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  article: string = "";
  price: string = "";

  constructor(private router: Router, private route: ActivatedRoute, private bs: BarcodeSearcherService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bs.callAPI(params['barcode'])
    });
  }

  addNum(num_string: string){
    this.price += num_string
  }

  addNumToList(){
    const newItemValue = parseFloat(this.price);
    if (!isNaN(newItemValue)) {

    } else {

    }

  }
  
  delNum(){
    this.price = ""
  }

  sendItemToList(){
    if(this.article != "" && this.price != ""){
      this.router.navigate(['/home'], { queryParams: { article: this.article, price: this.price } })
    }
  }

}
