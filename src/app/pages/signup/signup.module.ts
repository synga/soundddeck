import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignupRoutingModule,
  ],
})
export class SignupModule {}
