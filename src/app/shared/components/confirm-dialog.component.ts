import { Component, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: 'confirm-dialog.component.html',
  standalone: false,
})
export class ConfirmDialogComponent {
  title = 'Confirm';
  message = 'Are you sure?';

  constructor(public activeModal: NgbActiveModal) {}
}
