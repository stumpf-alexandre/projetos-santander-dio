import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  nome: string = 'Alexandre'
  constructor() { }

  ngOnInit(): void {
    console.log("Ola eu sou o nascimento do meu titulo component");
    this.nome = `Ola ${this.nome}`;
  }

}
