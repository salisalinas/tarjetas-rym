import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { RickAndMortyService } from './rick-and-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TarjetaComponent,
    HttpClientModule, 
    CommonModule, 
    DropdownModule, 
    InputTextModule, 
    ButtonModule,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent implements OnInit {
  personajes: any[] = [];
  personajesFiltrados: any[] = [];
  opcionesFiltro: any[] = ['Name','Species','Status']; 
  filtroSelecionado: any;
  textoBusqueda: string = '';
  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe(data => {
      this.personajes = data.results;
      this.personajesFiltrados = this.personajes;
      console.log(this.personajes);
    });
  }
  
  filtrar() {
       this.personajesFiltrados = this.personajes.filter(personaje => {
      if (!this.filtroSelecionado || this.textoBusqueda === '') return true;
      const value = personaje[this.filtroSelecionado.toLowerCase()];
      return value && value.toLowerCase().includes(this.textoBusqueda.toLowerCase());
    });
  }

  deshacerFiltros() {
    this.filtroSelecionado = null;
    this.textoBusqueda = '';
    this.personajesFiltrados = this.personajes;
  }
}
