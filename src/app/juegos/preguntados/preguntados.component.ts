import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/clases/Pregunta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  preguntas = [
    {
      pregunta: "¿En que fecha se realizó la primer elección presidencial con el voto secreto en Argentina?",
      opciones: ["1910","1920","1916","1914"],
      correcta: "1916"
    },
    {
      pregunta: "¿Cuál de estas no es una marivilla del mundo moderno?",
      opciones: ["La Gran Muralla China","Las Cataratas del Iguazú","El Taj Mahal","Petra"],
      correcta: "Las Cataratas del Iguazú"
    },
    {
      pregunta: "¿Qué es la acromatopsia?",
      opciones: ["La incapacidad de reconocer la tabla cromatica","Percibir objetos con coloracion inexistente","Percibir todos los colores con un tono amarillento","No poder diferenciar entre ciertos colores"],
      correcta: "La incapacidad de reconocer la tabla cromatica"
    },
    {
      pregunta: "¿Qué país tiene mas participaciones en la copa mundial de fútbol?",
      opciones: ["Uruguay","Portugal","Paises Bajos","Inglaterra"],
      correcta: "Inglaterra"
    },
    {
      pregunta: "¿Qué película tiene mas premios Oscars?",
      opciones: ["La lista de Schindler","El Señor de los Anillos: el retorno del Rey","La La Land","Gladiator"],
      correcta: "El Señor de los Anillos: el retorno del Rey"
    },
    {
      pregunta: "¿Cuál es el resultado de la siguiente ecuación: 2x/3 + 16/3 = -(4x/2)?",
      opciones: ["6","-3","3","-2"],
      correcta: "-2"
    }
  ]

  preguntasRestantes : Pregunta[] = [];
  preguntaAnterior : any = "";
  preguntaActual : any = "";
  correcta : boolean = false;
  incorrecta : boolean = false;
  
  constructor(private toast : ToastrService) { 
    this.InicializarPregunta();
   }

   InicializarPregunta()
   {
      let random : number = Math.floor(Math.random() * this.preguntas.length);
      this.preguntaActual = this.preguntas[random];
    }
    
    generarOtraPregunta()
    {
      this.preguntasRestantes = this.preguntas.filter((pregunta : Pregunta) => pregunta != this.preguntaActual && pregunta != this.preguntaAnterior);
      let random : number = Math.floor(Math.random() * this.preguntasRestantes.length);
      this.preguntaActual = this.preguntasRestantes[random];
    }

   validarRespuesta(opcion : string)
   {
      if(opcion == this.preguntaActual.correcta)
      {
        this.toast.success("Acertaste la respuesta","Correcto");
        this.correcta = true;
        this.reiniciar();
      }
      else
      {
        this.toast.error("No acertaste la respuesta","Incorrecto");
        this.incorrecta = true;
        this.correcta = true;
        this.reiniciar();
      }
   }

   reiniciar()
   {
     setTimeout(() => {
       this.correcta = false;
       this.incorrecta = false;
       this.generarOtraPregunta();
     }, 2000);
   }
  ngOnInit(): void {
  }

}
