import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-spray-totals',
  templateUrl: './search-spray-totals.component.html',
  styleUrls: ['./search-spray-totals.component.css']
})
export class SearchSprayTotalsComponent implements OnInit {

  sprayTotals : any[];

  ngOnInit() {

    this.sprayTotals = [
      {
       sprayDate: '2018-03-03',
       sprayedStructures: '10',
       sprayedMan: '10',
       sprayedWomen: '15',
       sprayedPregnantWomen: '5',
       sprayedChildren: '3',
       notSprayedStructures: '5',
       notSprayedMen: '5',
       notSprayedWomen: '7',
       notSprayedPregnantWomen: '1',
       notSprayedChildren: '1',
       roomsFound: '10',
       roomsSprayed: '7',
       insecticideIssued: '30',
       insecticideFullReturned: '10',
       insecticideEmptyReturned: '20'
      },
     {
      sprayDate: '2018-03-03',
      sprayedStructures: '10',
      sprayedMan: '10',
      sprayedWomen: '15',
      sprayedPregnantWomen: '5',
      sprayedChildren: '3',
      notSprayedStructures: '5',
      notSprayedMen: '5',
      notSprayedWomen: '7',
      notSprayedPregnantWomen: '1',
      notSprayedChildren: '1',
      roomsFound: '10',
      roomsSprayed: '7',
      insecticideIssued: '30',
      insecticideFullReturned: '10',
      insecticideEmptyReturned: '20'
     },
     {
      sprayDate: '2018-03-03',
      sprayedStructures: '10',
      sprayedMan: '10',
      sprayedWomen: '15',
      sprayedPregnantWomen: '5',
      sprayedChildren: '3',
      notSprayedStructures: '5',
      notSprayedMen: '5',
      notSprayedWomen: '7',
      notSprayedPregnantWomen: '1',
      notSprayedChildren: '1',
      roomsFound: '10',
      roomsSprayed: '7',
      insecticideIssued: '30',
      insecticideFullReturned: '10',
      insecticideEmptyReturned: '20'
     }
    ]
  }
}


