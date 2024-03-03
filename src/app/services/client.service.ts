import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { tap } from 'rxjs/operators'; 
import { Cliente } from '../../models/clients.model'; 

@Injectable({
  providedIn: 'root' 
})
export class ClientService {
  private clientesUrl = "http://localhost:3000/clientes"; 

  constructor(private http: HttpClient) { } // Construtor do serviço e injeta o HttpClient

  getClientes(): Observable<Cliente[]> { // Pegar os cliente na API
    return this.http.get<Cliente[]>(this.clientesUrl) 
      .pipe( // Ver mais sobre
        tap((clientes) => this.log("ok")) // Ver mais sobre
      );
  }

  getClienteById(id: number): Observable<Cliente> { // Método para obter um cliente pelo ID
    const url = `${this.clientesUrl}/${id}`; // Peeggar por id
    return this.http.get<Cliente>(url) // Faz uma requisição GET para a URL do cliente específico
      .pipe( 
        tap(() => this.log(`Cliente recuperado com ID ${id}`)) 
      );
  }

  addCliente(cliente: Cliente): Observable<Cliente> { // Método para adicionar um novo cliente
    return this.http.post<Cliente>(this.clientesUrl, cliente) // Faz uma requisição POST para adicionar o cliente
      .pipe( 
        tap((novoCliente) => this.log(`Cliente adicionado com ID ${novoCliente.id}`)) 
      );
  }

  private log(message: string): void { // Ver mais sobre isso
    console.log(message);
  }
}
