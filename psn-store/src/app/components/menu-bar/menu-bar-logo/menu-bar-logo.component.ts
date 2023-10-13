import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar-logo',
  templateUrl: './menu-bar-logo.component.html',
  styleUrls: ['./menu-bar-logo.component.css']
})
export class MenuBarLogoComponent implements OnInit {
  @Input()
  gameLogo: string = "../../../assets/ps-logo.png"

  constructor() { }

  ngOnInit(): void {
  }

}
