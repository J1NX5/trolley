import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: number[] = [];
  article: string = "";
  shopping_cart: number = 0;

  constructor(private toastController: ToastController) {}
  addNum(num_string: string){
    this.article += num_string
  }

  addNumToList(){
    const newItemValue = parseFloat(this.article);
    if (!isNaN(newItemValue)) {
      this.items.push(parseFloat(this.article))  
      this.delNum()
      this.calCart()
    } else {
      this.toastController.create({
        message: 'Bang. Mach das nicht noch einmal!',
        duration: 2000,
      }).then(toast => toast.present());
    }

  }

  delNum(){
    this.article = ""
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
