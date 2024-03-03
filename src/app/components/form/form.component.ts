import { Component, OnInit, EventEmitter, Output } from '@angular/core'; 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'; 
import { ClientService } from '../../services/client.service'; 

@Component({
  selector: 'app-form', 
  templateUrl: './form.component.html', 
  styleUrls: ['./form.component.scss'], 
})
export class FormComponent implements OnInit { // Defininada a classe do componente e implementa OnInit. OnInit é uma interface no Angular que define um método ngOnInit(), que é chamado logo após a criação de um componente.
  clientForm!: FormGroup; // Variável paraa o FormGroup

  @Output() fecharFormularioEvent = new EventEmitter<void>(); // Declara um EventEmitter para emitir eventos quando o formulário é fechado. Ver mais sobre o que se trata


  constructor(private formBuilder: FormBuilder, private clientService: ClientService) { } // Define o construtor do componente e injeta FormBuilder e ClientService
    //é usado principalmente para injetar dependências, fundamental no Angular para fornecer serviços ou dependências aos componentes de maneira eficiente e coesa.

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(11)]),
      date: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      registrationDate: ['']
    });
  }

  get name(){
    return this.clientForm.get('name')!;
  }
  get cpf(){
    return this.clientForm.get('cpf')!;
  }
  get date(){
    return this.clientForm.get('date')!;
  }
  get phone(){
    return this.clientForm.get('phone')!;
  }
  get email(){
    return this.clientForm.get('email')!;
  }

  submit(): void { // Função para enviar o formulário
    if (this.clientForm.invalid) { // Verifica se o formulário é inválido
      return; // Retorna se o formulário for inválido
    }

    const currentDate = new Date(); // Obtém a data atual
    const formattedDate = currentDate.toISOString().slice(0, 10); // Formata a data para 'YYYY-MM-DD'

    this.clientForm.patchValue({ // Atualiza o valor do campo 'registrationDate' com a data formatada
      registrationDate: formattedDate
    });

    const novoCliente = this.clientForm.value; // Obtém os valores do formulário
    this.clientService.addCliente(novoCliente).subscribe(() => { // Chama o método addCliente do serviço ClientService para adicionar um novo cliente
      this.clientForm.reset(); // Reseta o formulário após a adição do cliente
      console.log('Cliente adicionado com sucesso!'); // Loga mensagem de sucesso no console
      window.location.reload(); // Atualiza a página, mas é melhor atualizar o component. 
    });
  }



  fecharFormulario(): void { // Fechar o formulário clicando na flecha
    this.fecharFormularioEvent.emit(); // Emite o evento de fechar formulário
  }
}
