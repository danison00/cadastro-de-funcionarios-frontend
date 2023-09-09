import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent implements OnInit{

  dataSource: any[]=[];

  ngOnInit(): void {
   this.dataSource =[
    { "id": 2, "nome": "danison", "cargo": "gamer", "salario": 99959, "endereco": "blá blá" },
    { "id": 2, "nome": "danison", "cargo": "gamer", "salario": 99959, "endereco": "blá blá" },
    { "id": 2, "nome": "danison", "cargo": "gamer", "salario": 99959, "endereco": "blá blá" },
    { "id": 2, "nome": "danison", "cargo": "gamer", "salario": 99959, "endereco": "blá blá" },
    { "id": 2, "nome": "danison", "cargo": "gamer", "salario": 99959, "endereco": "blá blá" },
    { "id": 2, "nome": "danison", "cargo": "gamer", "salario": 99959, "endereco": "blá blá" },
    { "id": 2, "nome": "danison", "cargo": "gamer", "salario": 99959, "endereco": "blá blá" },

   ];
  }

}
