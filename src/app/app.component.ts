import { Component } from '@angular/core'; 

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrl: './app.component.scss' 
})
export class AppComponent { 
  title = 'techer'; 

  showAppForm = false; 

  abrirAppForm() { // Método para alternar a exibição do formulário
    this.showAppForm = true; // Define a variável showAppForm como true para exibir o formulário
  }

  fecharFormulario() { // Método para fechar o formulário
    this.showAppForm = false; // Define a variável showAppForm como false para ocultar o formulário
  }
}
