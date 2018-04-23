import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AddSprayDetailsComponent } from './spray-details/add-spray-details/add-spray-details.component';
import { SearchSprayDetailsComponent } from './spray-details/search-spray-details/search-spray-details.component';
import { AddSprayTotalsComponent } from './spray-totals/add-spray-totals/add-spray-totals.component';
import { SearchSprayTotalsComponent } from './spray-totals/search-spray-totals/search-spray-totals.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    TableModule,
    CalendarModule,
    InputMaskModule,
    CurrencyMaskModule,
    RouterModule
  ],
  declarations: [
    AddSprayDetailsComponent,
    SearchSprayDetailsComponent,
    AddSprayTotalsComponent,
    SearchSprayTotalsComponent
  ],
  exports: [
    AddSprayDetailsComponent,
    SearchSprayDetailsComponent,
    AddSprayTotalsComponent,
    SearchSprayTotalsComponent
  ]
})
export class SprayModule { }
