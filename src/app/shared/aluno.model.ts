export class Aluno{
    public nome:string;
    public email:string;
    public senha:string;
    public curso:string;

    constructor(nome:string, email:string, senha:string, curso:string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.curso = curso;
    }
}