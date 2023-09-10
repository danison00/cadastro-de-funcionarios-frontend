import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { BotaoComponent } from '../botao/botao-dialog.component';
@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss'],
})
export class DialogWindowComponent {
  constructor(public dialogRef: MatDialogRef<DialogWindowComponent>) {}

  confirm: boolean = false;

  close(): void {
    this.dialogRef.close();
  }

  public excluir() {

    this.confirm = true;
    this.close();
  }
}
