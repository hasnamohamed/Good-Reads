import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

function validatePassword(): ValidatorFn {
  return (control: AbstractControl) => {
    let isValid = false;
    if (control && control instanceof FormGroup) {
      let group = control as FormGroup;
      if (group.controls['userPass'] && group.controls['userPassConfiorm']) {
        isValid = group.controls['userPass'].value == group.controls['userPassConfiorm'].value;
      }
    }
    if (isValid) {
      return null;
    } else {
      return { 'passwordCheck': 'failed' }
    }
  }
}

@Directive({
  selector: '[passwordMatchChecker]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CheckPasswordDirective, multi: true }]
})
export class CheckPasswordDirective implements Validator {
  private valFn;

  constructor() {
    this.valFn = validatePassword();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.valFn(c);
  }

}