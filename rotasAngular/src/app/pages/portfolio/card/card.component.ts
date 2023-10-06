import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private activeRout: ActivatedRoute) {
    //http://localhost:4200/portfolio/1
    this.activeRout.params.subscribe(
      res => console.log(res)
    )

    //http://localhost:4200/portfolio/1?name=alexandre&token=123
    this.activeRout.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
  }

}
