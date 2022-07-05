import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() issueNo: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  // set issueNo property to null because it will also control whether the modal dialog is opened or not.
  agree() {
    this.confirm.emit(true);
    this.issueNo = null;
  }

  disagree() {
    this.confirm.emit(false);
    this.issueNo = null;
  }

  constructor() {}

  ngOnInit(): void {}
}
