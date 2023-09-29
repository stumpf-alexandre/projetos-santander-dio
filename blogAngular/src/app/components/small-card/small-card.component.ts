import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  smallPhoto: string = 'https://media.seudinheiro.com/uploads/2023/02/Guardians-of-the-Galaxy-Vol.-3-715x402.jpg'

  @Input()
  smallDescription: string ='Saiu a nova versão do angular'

  constructor() { }

  ngOnInit(): void {
  }

}
