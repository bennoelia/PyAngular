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
  // =new Empresa(); 
  nombre:String;
  constructor(private formBuilder:FormBuilder, private empresaService:EmpresasService) { } 

  ngOnInit(): void {
    this.crearFormulario();
    console.log("entro1");
    this.empresaService.getEmpresa().subscribe(
      e=>console.log(e));
      
      // this.nombre=this.empresa.CUIT;
      // console.log(this.nombre);
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
