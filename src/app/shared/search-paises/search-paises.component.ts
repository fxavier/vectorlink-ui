import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-search-paises',
  templateUrl: './search-paises.component.html',
  styleUrls: ['./search-paises.component.css']
})
export class SearchPaisesComponent implements OnInit {

  paises = [];
  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.pesquisar();
  }
      pesquisar() {
        this.paisService.pesquisar()
        .then(() => null);
      }

}
