import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  user: Usuario = new Usuario();
  listUser: Usuario[]

  constructor(
    private service: UsuarioService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.findAll()
  }

  findAll(){
    this.service.getAll().subscribe((resp: Usuario[]) =>{
     this.listUser = resp
    })
  }

}
