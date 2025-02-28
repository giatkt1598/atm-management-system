import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { AtmGetRequestInputModel, AtmModel } from 'src/app/shared/models';
import { AtmService } from 'src/app/shared/services/atm.service';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  imports: [SharedModule, FormsModule],
})
export class HomeComponent extends AppBaseComponent implements OnInit {
  atmList: AtmModel[] = [];
  totalCount = 0;
  displayedColumns: (keyof AtmModel | (string & {}))[] = [
    'name',
    'manufacturer',
    'type',
    'serial',
    'image',
    '_action',
  ];
  input: AtmGetRequestInputModel = {
    skipCount: this.getQueryParam('skipCount') ? +this.getQueryParam('skipCount')! : 0,
    maxResultCount: this.getQueryParam('maxResultCount')
      ? +this.getQueryParam('maxResultCount')!
      : 10,
    name: this.getQueryParam('name'),
    manufacturer: this.getQueryParam('manufacturer'),
    serial: this.getQueryParam('serial'),
    type: this.getQueryParam('type'),
  };
  constructor(
    private _atmService: AtmService,
    private _router: Router
  ) {
    super();
  }
  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    console.log(this.input);
    this._atmService.getList(this.input).subscribe(rs => {
      console.log(rs);
      this.atmList = rs.items;
      this.totalCount = rs.totalCount;

      this._router.navigate([], { queryParams: this.input, replaceUrl: true });
    });
  }

  handlePageChanged(e: PageEvent) {
    this.input.skipCount = e.pageIndex * e.pageSize;
    this.input.maxResultCount = e.pageSize;

    this.refreshData();
  }

  handleSearch() {
    this.input.skipCount = 0;
    this.refreshData();
  }

  handleReset() {
    this.input = {};
    this.handleSearch();
  }

  handleDelete(atmId: string) {
    this.openConfirmDialog({ title: 'Delete?', message: 'Are you sure to delete?' }).then(rs => {
      if (rs) {
        this._atmService.delete(atmId).subscribe({
          next: () => {
            this.showMessage('Delete success!');
            if (this.atmList.length == 1) {
              if ((this.input.skipCount ?? 0) > 0) {
                this.input.skipCount! -= this.input.maxResultCount ?? 10;
              }
            }
            this.refreshData();
          },
          error: () => {
            this.showMessage('Delete error!');
          },
        });
      }
    });
  }

  handleExportData() {
    alert('This feature is coming soon!');
  }
}
