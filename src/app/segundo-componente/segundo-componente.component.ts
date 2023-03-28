import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Marcelo";
  dataNascimento = "1989-11-15";
  urlImagem = "/assets/teste.png";

  mostrarDataNascimento(){
    alert(`A data de nascimento do Marcelo é: ${this.dataNascimento}`)
  }
}
