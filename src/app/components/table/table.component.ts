import { Component, OnInit } from '@angular/core'; 
import { Cliente } from '../../../models/clients.model'; 
import { ClientService } from '../../services/client.service'; 

@Component({
  selector: 'app-table', 
  templateUrl: './table.component.html', 
  styleUrls: ['./table.component.scss'] 
})
export class TableComponent implements OnInit { 
  clientes: Cliente[] = []; 
  filteredClientes: Cliente[] = []; 
  selectedCliente: Cliente | null = null; 

  constructor(private clienteService: ClientService) { } // Construtor do componente e injetanndo o ClientService

  ngOnInit(): void { 
    this.getClientes(); // Chama o método para obter os clientes ao inicializar o componente
  }

  getClientes(): void { 
    this.clienteService.getClientes().subscribe((clientes) => { // Obter os clientes do serviço ClientService
      this.clientes = clientes.sort((a, b) => b.id - a.id); // Ordena os clientes pelo ID de forma decrescente. Encontrado na internet
      this.filteredClientes = this.clientes; // Define os clientes filtrados como todos os clientes
    });
  }

  filterClients(searchTerm: string): void { // Filtrar os clientes com base em um termo de busca
    this.filteredClientes = this.clientes.filter((cliente) => // Filtra os clientes com base no nome
      cliente.name.toLowerCase().includes(searchTerm.toLowerCase()) // Verifica se o nome do cliente contém o termo de busca, ignorando maiúsculas e minúsculas
    );
  }

  fetchClienteById(id: number): void { // Método para buscar um cliente pelo ID
    this.clienteService.getClienteById(id).subscribe((cliente) => { // Chama o método para obter um cliente pelo ID do serviço ClientService
      this.selectedCliente = cliente; // Define o cliente selecionado como o cliente retornado
    });
  }

  closeClienteDetail(): void { // Método para fechar os detalhes do cliente
    this.selectedCliente = null; // Define o cliente selecionado como nulo
  }

  formatarCPF(cpf: string): string {
      return cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11);
  }
}
