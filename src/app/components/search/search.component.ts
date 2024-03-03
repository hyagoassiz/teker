import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search', 
  templateUrl: './search.component.html', 
  styleUrls: ['./search.component.scss'] 
})
export class SearchComponent { 
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>(); // Ver mais sobre isso

  onSearchChange(event: Event): void { // Método para lidar com a mudança na busca
    const value = (event.target as HTMLInputElement)?.value || ''; // Obtém o valor digitado na busca, tratando possíveis valores nulos
    this.searchChange.emit(value); // Emite o evento de mudança na busca com o valor obtido
  }
}
