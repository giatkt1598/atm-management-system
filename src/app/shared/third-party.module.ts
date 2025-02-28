import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const matModules = [MatTableModule, MatPaginatorModule, MatSnackBarModule];

const antModules = [
  NzInputModule,
  NzSelectModule,
  NzRadioModule,
  NzFormModule,
  NzDatePickerModule,
  NzTimePickerModule,
  NzCheckboxModule,
  NzInputNumberModule,
  NzUploadModule,
  NzTabsModule,
  NzModalModule,
  NzPopoverModule,
  NzSwitchModule,
  NzDividerModule,
  NzAutocompleteModule,
  NzTagModule,
  NzTableModule,
  NzProgressModule,
  NzTreeViewModule,
  NzToolTipModule,
  NzColorPickerModule,
];

@NgModule({
  declarations: [],
  imports: [...matModules, ...antModules, NgbModule],
  exports: [...matModules, ...antModules, NgbModule],
})
export class ThirdPartyModule {}
