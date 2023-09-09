import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cargo',
  templateUrl: './listar-cargo.component.html',
  styleUrls: ['./listar-cargo.component.scss']
})
export class ListarCargoComponent implements OnInit {

  dataSource: any[]=[];

  ngOnInit(): void {
   this.dataSource =[
    { "id": 2, "nome": "limpeza", "departamento": "servicos gerais" },
    { "id": 3, "nome": "atendimento ao cliente", "departamento": "atendimento" },
    { "id": 4, "nome": "marketing", "departamento": "vendas" },
    { "id": 5, "nome": "desenvolvimento de software", "departamento": "TI" },
    { "id": 6, "nome": "contabilidade", "departamento": "financeiro" },
    { "id": 7, "nome": "recursos humanos", "departamento": "RH" },
    { "id": 8, "nome": "engenharia", "departamento": "engenharia" },
    { "id": 9, "nome": "logística", "departamento": "operações" },
    { "id": 10, "nome": "design gráfico", "departamento": "criativo" },
    { "id": 11, "nome": "jurídico", "departamento": "legal" }
   ];
  }


}
