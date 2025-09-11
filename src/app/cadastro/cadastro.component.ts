import { Component } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'
import { MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
;

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, 
    MatCardModule, 
    FormsModule,
    MatInputModule, 
    MatFormFieldModule,
    MatButtonModule,
  MatIconModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {



  cliente: Cliente = Cliente.newCliente();

  constructor (private service: ClienteService){

  }

  salvar(){
    this.service.salvar(this.cliente);
  }

}
