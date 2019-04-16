import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { DataService } from './cadastro-clientes.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro: FormGroup;
  conversaoJson: string;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.dataService.get_usuarios().subscribe((res: any[]) => {
      console.log(res);
    });
  }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      nome: [''],
      cpf: [],
      email: [],
      telefone: [],
      endereco: []
    });
  }

  cadastro() {
    this.conversaoJson = JSON.stringify(this.formCadastro.value);
    console.log(this.conversaoJson);
    this.dataService.post_usuarios(this.conversaoJson).subscribe((res: any[]) => {
      console.log(res);
    });
  }

}
