import { Component } from '@angular/core';
import { DepartamentoService } from 'src/app/service/departamento.service';
import { Departamento } from 'src/app/shared/model/Departamento.model';

@Component({
  selector: 'app-cadastrar-departamento',
  templateUrl: './cadastrar-departamento.component.html',
  styleUrls: ['./cadastrar-departamento.component.scss'],
})
export class CadastrarDepartamentoComponent {
  constructor(private departamentoService: DepartamentoService) {}
  protected departamento: Departamento = new Departamento();

  public mostrarAlert: boolean = false;
  public fail: boolean = false;
  public message: string;
  public nome: string;
  timeoutId: any;

  public salvar(): void {
    this.departamento.nome = this.nome;

    this.departamentoService.salvar(this.departamento).subscribe({
      next: () => {
        this.showMessageAlert('Departamento Cadastrado!', false);
      },
      error: (responseError) => {
        this.showMessageAlert(responseError.error.message, true);
      },
    });
  }

  public closeAlert(): void {
    this.mostrarAlert = false;
  }
  public showMessageAlert(message: string, fail: boolean): void {

    this.mostrarAlert = false;
    setTimeout(()=>{
      this.mostrarAlert = true;
      this.fail = fail;
      this.message = message;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {this.mostrarAlert = false;}, 3800);

    }, 1)

  }
}
