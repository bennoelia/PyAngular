import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from '../empresa';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.scss']
  styleUrls: ['./css/app.css']
})
export class LoginComponent implements OnInit {
  formularioCreado:FormGroup;
  empresa: Empresa; 
  nombre:String;
  constructor(private formBuilder:FormBuilder, private empresaService:EmpresasService) { } 

  ngOnInit(): void {
    this.crearFormulario();
    this.empresaService.getEmpresa().subscribe(
      e=>this.empresa=e);
      this.nombre=this.empresa.CUIT;
  }

  crearFormulario()
  {
    this.formularioCreado=this.formBuilder.group({
      usuario:['x',Validators.required],
      pass:['',Validators.compose([
        Validators.required,Validators.minLength(8)
      ])
    ]
    })
  }

}
