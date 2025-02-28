import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './components/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export abstract class AppBaseComponent {
  protected readonly activeRoute: ActivatedRoute = inject(ActivatedRoute);
  protected readonly modalService: NgbModal = inject(NgbModal);
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  protected getParam(param: string): string | null {
    return this.activeRoute.snapshot.paramMap.get(param);
  }

  protected getQueryParam(param: string): string | undefined {
    return this.activeRoute.snapshot.queryParamMap.get(param) ?? undefined;
  }

  async openConfirmDialog(input?: { title?: string; message?: string }): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.title = input?.title;
    modalRef.componentInstance.message = input?.message;
    return await modalRef.result;
  }

  showMessage(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'center', // 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
}
