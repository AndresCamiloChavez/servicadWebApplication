import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { InputFieldComponent } from './components/molecules/input-field/input-field.component';
import { SelectFieldComponent } from './components/molecules/select-field/select-field.component';
import { LoginFormComponent } from './components/organisms/login-form/login-form.component';
import { RecoveryPassFormComponent } from './components/organisms/recovery-pass-form/recovery-pass-form.component';
import { VerificationCodeFormComponent } from './components/organisms/verification-code-form/verification-code-form.component';
import { ChangePassFormComponent } from './components/organisms/change-pass-form/change-pass-form.component';
import { NewPassFormComponent } from './components/organisms/new-pass-form/new-pass-form.component';
import { EmailDirective } from './directives/email.directive';
import { PasswordDirective } from './directives/password.directive';
import { DatePipe } from './pipes/date.pipe';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    LogoComponent,
    InputFieldComponent,
    SelectFieldComponent,
    LoginFormComponent,
    RecoveryPassFormComponent,
    VerificationCodeFormComponent,
    ChangePassFormComponent,
    NewPassFormComponent,
    EmailDirective,
    PasswordDirective,
    DatePipe


  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LoginFormComponent
  ]
})
export class UiModule { }
