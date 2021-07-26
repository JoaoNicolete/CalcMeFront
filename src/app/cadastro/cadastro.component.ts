import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: Usuario = new Usuario()

  constructor(
    private service: UsuarioService,
    private Route: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  cadastrar(){
    this.service.post(this.user).subscribe((resp: Usuario) =>{
      this.user = resp
      this.Route.navigate(['/listar'])
    })
  }



}
