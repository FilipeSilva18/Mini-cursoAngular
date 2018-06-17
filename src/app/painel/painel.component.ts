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

  public contador:number;
  public cont:number;
  

  constructor() {
    this.aluno = new Aluno("", "", "", "");
    this.alunos = new Array();
    this.contador = 0
    this.cont = 0;
  }

  ngOnInit() {
  }

  atualizaProgresso(event: Event): void {
    if ((<HTMLInputElement>event.target).id == "nome") {
     
      if(this.cont==0)this.cont=25;
    } else if ((<HTMLInputElement>event.target).id == "email") {
      
      if(this.cont==25)this.cont=50;
    } else if ((<HTMLInputElement>event.target).id == "senha") {
     
      if(this.cont==50)this.cont=75;
    }else if((<HTMLInputElement>event.target).id == "rb1"){
     
      if(this.cont==75)this.cont=100;
    }else if((<HTMLInputElement>event.target).id == "rb2"){
     
      if(this.cont==75)this.cont=100;
    }
    
  }

  salvarAluno(Formulario: NgForm):void{
    console.log(Formulario.form.controls)  
    console.log(Formulario.form.controls.nome.value);

    this.aluno.nome = Formulario.form.controls.nome.value;
    this.aluno.email = Formulario.form.controls.email.value;
    this.aluno.senha = Formulario.form.controls.senha.value;

    this.aluno.curso = Formulario.form.controls.rb.value;
    let curso:string = Formulario.form.controls.rb.value;
    
    this.alunos[this.contador] = new Aluno(this.aluno.nome, this.aluno.email, this.aluno.senha, curso);
    console.log(this.alunos);
    this.contador = this.contador+1;


  }

}
