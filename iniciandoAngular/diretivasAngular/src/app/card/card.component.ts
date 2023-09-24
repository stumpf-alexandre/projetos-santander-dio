import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[] = []

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push("Alexandre")
  }

  remover() {
    this.produtos.pop()
  }

  removerIndex(index: number) {
    alert(`Item ${index} removido`)
    this.produtos.splice(index, 1)
  }

}
