import {Component, Input} from '@angular/core';
import {AbstractControlDirective, AbstractControl} from '@angular/forms';

@Component({


  selector: 'show-errors',
  template: `
   <ul *ngIf="shouldShowErrors()" class="alert alert-danger">
     {{getError()}}
   </ul>
 `,
})


export class ShowErrorsComponent {


  private static readonly errorMessages = {


    'required': (params) => '##FIELD## é obrigatório!',


    'minlength': (params) => '##FIELD## deve ser no mínimo ' + params.requiredLength + ' caracteres!',


    'maxlength': (params) => '##FIELD## não pode ser maior do que ' + params.requiredLength + ' caracteres!',


    'pattern': (params) => 'deve ser válido!',


    'email': (params) => "digite um email válido!",


  };


  @Input()
  private control: AbstractControlDirective | AbstractControl;


  shouldShowErrors (): boolean {


    return this.control &&


      this.control.errors &&


      (this.control.dirty || this.control.touched);


  }


  listOfErrors (): string[] {

    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field], this.control));

  }


  getError (): string {


    //    console.log("show",this.control.error    
    //    console.log(Object.keys(this.control.er));
    
    //    console.log(this.getMessage('required', this.control.errors['required'], thistrol));
    
    //    console.log(['required'].map(field => this.getMessage(field, this.control.errors[field], tcontrol)));
    
    var errors = Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field], this.control));

    return errors[0];


  }


  private getMessage (type: string, params: any, control: any) {


    var fname = this.getControlName(control);


    fname = fname.replace("_", " ").replace(" id", "").toLowerCase();


    fname = fname.replace(/\b\w/g, l => l.toUpperCase())


    var msg = ShowErrorsComponent.errorMessages[type](params);


    //    console.log    (msg.replace("##FIELD##", fname));
    
    return msg.replace("##FIELD##", fname);


  }


  getControlName (c: AbstractControl): string | null {


    const formGroup = c.parent.controls;


    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;


  }


}