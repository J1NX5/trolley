import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { addIcons } from 'ionicons';
import { BarcodeSearcherService } from '../services/barcode-searcher.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  items: Article[] = [];
  shopping_cart: number = 0;

  constructor(private toastController: ToastController, private route: ActivatedRoute, private bs: BarcodeSearcherService) {
  }

  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.addItem(params['article'], params['price'])
    });
  }

  addItem(name: string, price: string){
    this.items.push(new Article(name,price))
  }


  delItem(del_num_index: number){
    this.items.splice(del_num_index, 1)
    //this.calCart()
  }

  /*calCart(){
    let tmp_sc: number = 0
    for(var i = 0; i < this.items.length; i++){
      tmp_sc += this.items[i]
    }
    this.shopping_cart = tmp_sc
  }*/
}

class Article {
  name: string;
  price: string;

  constructor(g_name: string, g_price: string) {
    this.name = g_name;
    this.price = g_price;
  }

}
