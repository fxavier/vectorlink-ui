import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';





import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { DataTableGroupDemoComponent } from './data-table-group-demo/data-table-group-demo.component';
import { SearchSprayDetailsComponent } from './spray/spray-details/search-spray-details/search-spray-details.component';
import { AddSprayDetailsComponent } from './spray/spray-details/add-spray-details/add-spray-details.component';
import { AddSprayTotalsComponent } from './spray/spray-totals/add-spray-totals/add-spray-totals.component';
import { SearchSprayTotalsComponent } from './spray/spray-totals/search-spray-totals/search-spray-totals.component';
import { AddMobTotalsComponent } from './mobilization/mob-totals/add-mob-totals/add-mob-totals.component';
import { SearchMobTotalsComponent } from './mobilization/mob-totals/search-mob-totals/search-mob-totals.component';
import { SearchMobDetailsComponent } from './mobilization/mob-details/search-mob-details/search-mob-details.component';
import { AddMobDetailsComponent } from './mobilization/mob-details/add-mob-details/add-mob-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataTableGroupDemoComponent,
    SearchSprayDetailsComponent,
    AddSprayDetailsComponent,
    AddSprayTotalsComponent,
    SearchSprayTotalsComponent,
    AddMobTotalsComponent,
    SearchMobTotalsComponent,
    SearchMobDetailsComponent,
    AddMobDetailsComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    TabViewModule,
    TableModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
