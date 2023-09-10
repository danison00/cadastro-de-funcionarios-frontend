import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss'],
})
export class AlertMessageComponent implements OnInit {
  constructor() {}

  @Input() message: string;
  @Output() closeAlert: EventEmitter<void> = new EventEmitter<void>();
  classAlertContent: string;
  classAlertText: string;
  @Input() fail: boolean;

  ngOnInit(): void {
    if (this.fail) {
      this.classAlertContent = 'alert-fail';
      this.classAlertText = 'alert-text-fail';
    }
  }

  public disposeAlert(): void {
    this.closeAlert.emit();
    this.classAlertContent = '';
    this.classAlertText = '';
  }
}
