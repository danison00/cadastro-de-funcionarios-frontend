import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-excluir',
  templateUrl: './botao-excluir.component.html',
  styleUrls: ['./botao-excluir.component.scss'],
})
export class BotaoExcluirComponent {
  @Input() id: number;

  @Output() editarEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() deletarEvent: EventEmitter<number> = new EventEmitter<number>();

  public editar(): void {
    this.editarEvent.emit(this.id);
  }

  public onConfirmDelete(id: number): void {
    this.deletarEvent.emit(this.id);
  }
}
