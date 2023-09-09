import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDepartamentoComponent } from './components/departamento/listar-departamento/listar-departamento.component';
import { CadastrarDepartamentoComponent } from './components/departamento/cadastrar-departamento/cadastrar-departamento.component';
import { CadastrarCargoComponent } from './components/cargo/cadastrar-cargo/cadastrar-cargo.component';
import { ListarCargoComponent } from './components/cargo/listar-cargo/listar-cargo.component';
import { ListarFuncionarioComponent } from './components/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from './components/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  // {path : '', redirectTo: 'home'},
  { path: 'funcionarios', component: ListarFuncionarioComponent },
  { path: 'funcionarios/cadastro', component: CadastrarFuncionarioComponent },
  { path: 'cargos', component:  ListarCargoComponent},
  { path: 'cargos/cadastro', component: CadastrarCargoComponent },
  { path: 'departamentos', component: ListarDepartamentoComponent },
  { path: 'departamentos/cadastro', component: CadastrarDepartamentoComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
