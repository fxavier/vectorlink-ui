import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-spray-totals',
  templateUrl: './add-spray-totals.component.html',
  styleUrls: ['./add-spray-totals.component.css']
})
export class AddSprayTotalsComponent implements OnInit {

  distritos = [
    {label: 'Mocuba', value: 1},
    {label: 'Mopeia', value: 2},
    {label: 'Morrumbala', value: 3},
    {label: 'Derre', value: 4},
    {label: 'Maganja da Costa', value: 5},
    {label: 'Milange', value: 6},
    {label: 'Molumbo', value: 7}
  ];

  bases = [
    {label: 'Mocuba-Sede', value: 1},
    {label: 'Corromane', value: 2}
  ];

  localidades = [
    {label: 'Mocuba-Sede', value : 1},
    {label: 'Mugeba', value : 2},
    {label: 'Munhiba', value : 3},
    {label: 'Alto Benfica', value : 4},
    {label: 'Muaquiua', value : 5}
  ];

  bairros = [
    {label: 'Bairro-Sede', value : 1},
    {label: 'Bairro 2', value : 2},
    {label: 'Bairro 3', value : 3},
    {label: 'Bairro 4', value : 4},
    {label: 'Bairro 5', value : 5}
  ];

  roceadores = [
    {label: 'Macuacua Junior', value: {id: 1, name: 'Macuacua Junior'}},
    {label: 'Jose Estevao', value: {id: 2, name: 'Jose Estevao'}}
  ];

  teamLeader = [
    {label: 'Costancio Muravel', value : 1},
    {label: 'Manuel Hipolito', value : 2},
    {label: 'Betthe Domingos', value : 3},
    {label: 'Fernando Baloi', value : 4},
    {label: 'Fernando Sitole', value : 5}
  ];
  ngOnInit() {

  }
}
