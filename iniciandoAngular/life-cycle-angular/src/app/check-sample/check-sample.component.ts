import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit,
           DoCheck,
           AfterContentChecked,
           AfterContentInit,
           AfterViewChecked,
           AfterViewInit,
           OnDestroy {

  quantidade: number = 0

  constructor() {
    console.log('constructor segunda leva')
   }

   incrementar() {
    this.quantidade += 1
   }

   decrementar() {
    this.quantidade -= 1
   }

  //é executado depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  //é executado após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  //é executado quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  //é executado após alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend")
  }

}
