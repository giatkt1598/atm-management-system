import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { AtmModel } from 'src/app/shared/models';
import { AtmService } from 'src/app/shared/services/atm.service';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  templateUrl: 'atm-create-edit.component.html',
  imports: [SharedModule, FormsModule],
})
export class AtmCreateEditComponent extends AppBaseComponent implements OnInit {
  @ViewChild('formEdit') formEdit?: NgForm;

  constructor(
    private _atmService: AtmService,
    private _router: Router
  ) {
    super();
  }
  ngOnInit(): void {
    if (this.id) {
      this._atmService.getById(this.id).subscribe({
        next: rs => {
          this.model = rs;
        },
        error: () => {
          this._router.navigate(['/page-not-found'], { replaceUrl: true });
        },
      });
    } else {
      this.model = {};
    }
  }

  model?: AtmModel;

  get id() {
    return this.getParam('id');
  }

  cancel() {
    history.back();
  }

  save() {
    if (!this.formEdit?.valid) {
      this.showMessage('Please input required field!');
      return;
    }
    if (this.id) {
      this._atmService.update(this.model!).subscribe({
        next: () => {
          this.showMessage('Update ATM is success!');
        },
        error: err => {
          console.log(err);
          this.showMessage('Update ATM is error');
        },
      });
    } else {
      this._atmService.create(this.model!).subscribe({
        next: () => {
          this.showMessage('Add new ATM is success!');
          this.model = {}; // api cùi ko có trả về id nên ko chuyển về trang update đc
          this.formEdit?.reset();
        },
        error: err => {
          console.log(err);
          this.showMessage('Add new ATM is error');
        },
      });
    }
  }
}
