import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  numerosInicial : number[] = [1,2,3,4,5,6,7,8,9,10,
                        11,12];

  numeros : number[] = [];
  cartaInicial : number = 0;
  cartaAComparar : number = 0;
  puntaje : number = 0;
  inicio : boolean;

  constructor(public toast : ToastrService) 
  {
    this.inicio = false;
  }

  ngOnInit(): void {
  }

  inicializarCarta()
  {
    let random : number = Math.floor(Math.random() * this.numerosInicial.length);

    this.cartaInicial = this.numerosInicial[random];

    this.numeros = this.numerosInicial.filter((numero : number) => numero != this.cartaInicial);

    this.inicio = true;
  }

  generarCarta()
  {
    let random : number = Math.floor(Math.random() * (12 - 1));

    this.cartaAComparar = this.numeros[random];
  }

  reemplzarCarta()
  {
    this.numeros = this.numerosInicial.filter((numero : number) => numero != this.cartaAComparar);
    setTimeout(() => {
      this.cartaInicial = this.cartaAComparar;
      this.cartaAComparar = 0;
      
    }, 1000);

  }

  juegoPerdido(mensaje : string)
  {
    this.toast.error(mensaje,"Has perdido");
  }

  comparar(condicion : number)
  {
    this.generarCarta();
    console.log(this.cartaAComparar);

    switch(condicion)
    {
      case 1:
        if(this.cartaAComparar > this.cartaInicial)
        {
          this.puntaje++;
          this.reemplzarCarta();
        }
        else
        {
          this.juegoPerdido("Era menor, su puntaje ha sido de " + this.puntaje + " puntos");
          setTimeout(() => {
            this.cartaInicial = 0;
            this.cartaAComparar = 0;
            this.puntaje = 0;
            this.inicio = false;  
          }, 3500);
          
        }
        break;

        case 2:
          if(this.cartaAComparar < this.cartaInicial)
          {
            this.puntaje++;
            this.reemplzarCarta();
          }
          else
          {
            this.juegoPerdido("Era mayor, su puntaje ha sido de " + this.puntaje + " puntos");
            setTimeout(() => {
              this.cartaInicial = 0;
              this.cartaAComparar = 0;
              this.puntaje = 0;
              this.inicio = false; 
            }, 3000);  
          }
          break;
    }
  }
}
