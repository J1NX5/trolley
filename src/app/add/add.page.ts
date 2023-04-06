import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  article: string = "";
  price: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
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
