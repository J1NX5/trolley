import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  article: string = "";

  constructor() { }

  ngOnInit() {
  }

  addNum(num_string: string){
    this.article += num_string
  }

  addNumToList(){
    const newItemValue = parseFloat(this.article);
    if (!isNaN(newItemValue)) {

    } else {

    }

  }
  
  delNum(){
    this.article = ""
  }

}
