import { Component, OnInit } from '@angular/core';
import { Aluno } from '../shared/aluno.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public aluno: Aluno;
  public alunos:Aluno[];

  public contador:number = 0;
  public cont:number;

  constructor() {
    this.aluno = new Aluno("", "", "", "");
    this.alunos = new Array();
    this.cont = 0;
  }

  ngOnInit() {
  }

  atualizaAluno(event: Event): void {
    if ((<HTMLInputElement>event.target).id == "nome") {
      this.aluno.nome = (<HTMLInputElement>event.target).value;
      if(this.cont==0)this.cont=25;
    } else if ((<HTMLInputElement>event.target).id == "email") {
      this.aluno.email = (<HTMLInputElement>event.target).value;
      if(this.cont==25)this.cont=50;
    } else if ((<HTMLInputElement>event.target).id == "senha") {
      this.aluno.senha = (<HTMLInputElement>event.target).value;
      if(this.cont==50)this.cont=75;
    }else if((<HTMLInputElement>event.target).id == "rb1"){
      this.aluno.curso = (<HTMLInputElement>event.target).value;
      if(this.cont==75)this.cont=100;
    }else if((<HTMLInputElement>event.target).id == "rb2"){
      this.aluno.curso = (<HTMLInputElement>event.target).value;
      if(this.cont==75)this.cont=100;
    }
    
  }

  salvarAluno(Formulario: NgForm):void{
  
    console.log(Formulario.getControl);
  }

}
