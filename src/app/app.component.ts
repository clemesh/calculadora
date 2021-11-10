import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora';
  operador: number = 0;
  operador2 : number = 0;
  resultado : number = 0;

  sumar():void{
    this.resultado = this.operador + this.operador2;
  }
}
