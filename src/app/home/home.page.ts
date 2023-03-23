import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: number[] = [];
  shopping_cart: number = 0;

  constructor(private toastController: ToastController, private route: ActivatedRoute) {}

  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Der Barcode ist:", params['barcode'])
    });
  }


  delItem(del_num_index: number){
    this.items.splice(del_num_index, 1)
    this.calCart()
  }

  calCart(){
    let tmp_sc: number = 0
    for(var i = 0; i < this.items.length; i++){
      tmp_sc += this.items[i]
    }
    this.shopping_cart = tmp_sc
  }
}
