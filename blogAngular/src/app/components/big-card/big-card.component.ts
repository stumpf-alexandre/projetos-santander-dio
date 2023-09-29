import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  cardPhoto: string = ''

  @Input()
  cardTitle: string = ''

  @Input()
  cardDescription: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
