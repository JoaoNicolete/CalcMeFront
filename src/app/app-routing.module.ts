import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path: '', redirectTo: 'cadastrar', pathMatch: 'full'},
  {path: 'cadastrar', component: CadastroComponent},
  {path: 'listar', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
