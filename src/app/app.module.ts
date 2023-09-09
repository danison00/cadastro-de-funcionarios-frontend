import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { ListarDepartamentoComponent } from './components/departamento/listar-departamento/listar-departamento.component';
import { CadastrarDepartamentoComponent } from './components/departamento/cadastrar-departamento/cadastrar-departamento.component';
import { CadastrarCargoComponent } from './components/cargo/cadastrar-cargo/cadastrar-cargo.component';
import { ListarCargoComponent } from './components/cargo/listar-cargo/listar-cargo.component';
import { ListarFuncionarioComponent } from './components/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from './components/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { BotaoExcluirComponent } from './components/botao-acoes/botao-excluir.component';
import { BotaoComponent } from './service/dialog-excluir/excluir/botao/botao-dialog.component';
import { DialogWindowComponent } from './service/dialog-excluir/excluir/dialog-window/dialog-window.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    ListarDepartamentoComponent,
    CadastrarDepartamentoComponent,
    CadastrarCargoComponent,
    ListarCargoComponent,
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    BotaoExcluirComponent,
    BotaoComponent,
    DialogWindowComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
