import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRout: ActivatedRoute,
    private navegador: Router
    ) {
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
    //da um intervalo de 5s e redireciona para a pagina home
    setInterval(()=>{
      this.navegador.navigate(['/'])
    }, 5000)
  }

}
