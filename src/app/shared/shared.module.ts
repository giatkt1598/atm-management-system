import { NgModule } from '@angular/core';
import { ThirdPartyModule } from './third-party.module';
import { RouterModule } from '@angular/router';
import { AppButtonComponent } from './components/app-button.component';
import { FooterComponent, HeaderComponent, MainLayoutComponent } from './layouts';
import { AtmService } from './services/atm.service';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog.component';
import { CommonModule } from '@angular/common';

const layoutComponents = [HeaderComponent, FooterComponent, MainLayoutComponent];

const definedComponents = [AppButtonComponent, ConfirmDialogComponent];

const pipes: never[] = [];

const directives: never[] = [];

@NgModule({
  declarations: [...layoutComponents, ...definedComponents, ...pipes, ...directives],
  imports: [RouterModule, ThirdPartyModule, FormsModule, CommonModule],
  exports: [
    ThirdPartyModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ...layoutComponents,
    ...definedComponents,
    ...pipes,
    ...directives,
  ],
  providers: [AtmService],
})
export class SharedModule {}
