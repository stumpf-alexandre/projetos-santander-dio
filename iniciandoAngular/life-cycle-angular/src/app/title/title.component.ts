import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  //inputando o valor de nome
  @Input() nome: string = ''

  constructor() {
    console.log(`Constructor ${this.nome}`);
   }
   
  ngOnChanges(): void {
    console.log(`OnChange ${this.nome}`);
  }

  ngOnInit(): void {
    console.log(`OnInit ${this.nome}`);
  }

}
