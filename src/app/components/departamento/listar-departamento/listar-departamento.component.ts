import { Observable } from 'rxjs';
import { Departamento } from './../../../shared/model/Departamento.model';
import { DepartamentoService } from './../../../service/departamento.service';
import { Component, OnInit } from '@angular/core';
import { BotaoComponent } from '../../../service/dialog-excluir/excluir/botao/botao-dialog.component';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.scss'],
})
export class ListarDepartamentoComponent implements OnInit {
  constructor(public service: DepartamentoService) {}

  departamentos: Departamento[];

  ngOnInit(): void {
    this.listarDepartamentos();
  }

  public listarDepartamentos(): void {
    console.log('busacandoo');

    this.service.listarDepartamento().subscribe(
      (departamentos: Departamento[]) => {
        this.departamentos = departamentos;
      },
      (response) => {
        console.log(response.message);
      }
    );
  }

  public onEditar(id: number): void {
    alert('eu sou o alert editar' + id);
  }
  public onDeletar(id: number): void {

    this.service.apagarDepartamento(id).subscribe(
      () => {
        alert('excluido!');
        this.listarDepartamentos();
      },
      (error) => {
        alert(error);
      }
    );
  }
}
