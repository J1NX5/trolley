import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { BarcodeSearcherService } from '../services/barcode-searcher.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss']
})
export class AddPage implements OnInit {

  article: string = "";
  price: string = "";

  constructor(private route: ActivatedRoute, private bs: BarcodeSearcherService, private router: Router) { 
    console.log(this.article)
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.bs.callAPI(params['barcode']).subscribe(data => {
        const obj = JSON.parse(JSON.stringify(data))
        this.article = obj.name
      })
    });
  }

  addNum(num_string: string){
    this.price += num_string
  }

  addToList(){
    const newItemValue = parseFloat(this.price);
    this.router.navigate(['/home'], { queryParams: { article: this.article, price: this.price } })
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
