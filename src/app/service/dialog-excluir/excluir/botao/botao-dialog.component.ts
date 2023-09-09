import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-botao-dialog',
  templateUrl: './botao-dialog.component.html',
  styleUrls: ['./botao-dialog.component.scss'],
})
export class BotaoComponent {
  constructor(public dialog: MatDialog) {}

  @Input() id: number;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  public openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    //alert(this.id);

   const ref = this.dialog.open(DialogWindowComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    ref.afterClosed().subscribe(()=>{

      if(ref.componentInstance.confirm){
        this.onDelete();
      }

    });
  }

  public onDelete() {
    alert('vou excluir '+this.id);
    this.deleteEvent.emit(this.id);
  }
}
