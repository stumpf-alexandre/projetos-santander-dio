import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo: string = "disable"
  corFundo: string = "blue"
  corFonte: string = "yellow"
  item: string = ""
  lista: string[] = []

  constructor() { }

  addLista() {
    this.lista.push(this.item)
    this.item = ""
  }

  ngOnInit(): void {
  }

  trocar() {
    if (this.estilo === "disable") {
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }

}
