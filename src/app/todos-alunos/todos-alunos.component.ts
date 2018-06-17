import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../shared/aluno.model';


@Component({
  selector: 'app-todos-alunos',
  templateUrl: './todos-alunos.component.html',
  styleUrls: ['./todos-alunos.component.css']
})
export class TodosAlunosComponent implements OnInit {

  @Input() alunos:Aluno[];
  constructor() { }

  ngOnInit() {
    
  }
  

}
