import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent {
  formlogin: FormGroup;

  constructor(){
    //Expresion regular de como validar Validators.pattern(correoregex)
    //let correoregex: string= '^[a-z]+@[a-z]+\\.[a-z]{2-3}$';
    let controles: any = {
      correo:new FormControl('',[Validators.email,Validators.required,]),
      pass:new FormControl('',[Validators.minLength(10), Validators.required]),
      recordar:new FormControl(true)
    }
    this.formlogin = new FormGroup(controles)
  }

  login(){
    console.log(this.formlogin);
  }
}
