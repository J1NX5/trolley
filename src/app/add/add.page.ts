import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BarcodeSearcherService } from '../services/barcode-searcher.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss']
})

export class AddPage implements OnInit {
  
  article: string = ""; // @Input() wurde entfernt, da es nicht benötigt wird
  price: string = "";
  suggestions: string[] = []; // Die Variable wurde hier deklariert

  constructor(private route: ActivatedRoute, private bs: BarcodeSearcherService, private router: Router, private ref: ChangeDetectorRef) { 
    console.log(this.article)
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.bs.callAPI(params['barcode']).subscribe(data => {
        const obj = JSON.parse(JSON.stringify(data))
        this.article = obj.name
        this.ref.detectChanges()
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

  onSearch() {
    // Hier können wir die Vorschläge generieren und in der `suggestions`-Variable speichern
    this.suggestions = ['Vorschlag 1', 'Vorschlag 2', 'Vorschlag 3'];
  }

  selectSuggestion(suggestion: string) {
    // Diese Funktion wurde hinzugefügt, um den ausgewählten Vorschlag in das `article`-Feld zu setzen
    this.article = suggestion;
  }
}
