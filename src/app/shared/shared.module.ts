import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';

import { AddPaisesComponent } from './add-paises/add-paises.component';
import { SearchPaisesComponent } from './search-paises/search-paises.component';
import { AddDistritosComponent } from './add-distritos/add-distritos.component';
import { SearchDistritosComponent } from './search-distritos/search-distritos.component';
import { AddOpSitesComponent } from './add-op-sites/add-op-sites.component';
import { SearchOpSitesComponent } from './search-op-sites/search-op-sites.component';
import { AddLocalityComponent } from './add-locality/add-locality.component';
import { SearchLocalityComponent } from './search-locality/search-locality.component';
import { SearchVillageComponent } from './search-village/search-village.component';
import { AddVillageComponent } from './add-village/add-village.component';
import { AddSopComponent } from './add-sop/add-sop.component';
import { SearchSopComponent } from './search-sop/search-sop.component';
import { SearchTeamLeaderComponent } from './search-team-leader/search-team-leader.component';
import { AddTeamLeaderComponent } from './add-team-leader/add-team-leader.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { MessageComponent } from './message/message.component';
import { DataTableModule } from 'primeng/datatable';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    FormsModule,
    DataTableModule,
    RouterModule
  ],
  declarations: [
    AddPaisesComponent,
    SearchPaisesComponent,
    AddDistritosComponent,
    SearchDistritosComponent,
    AddOpSitesComponent,
    SearchOpSitesComponent,
    AddLocalityComponent,
    SearchLocalityComponent,
    SearchVillageComponent,
    AddVillageComponent,
    AddSopComponent,
    SearchSopComponent,
    SearchTeamLeaderComponent,
    AddTeamLeaderComponent,
    AddUsersComponent,
    SearchUsersComponent,
    MessageComponent
  ],
  exports: [
    AddPaisesComponent,
    SearchPaisesComponent,
    AddDistritosComponent,
    SearchDistritosComponent,
    AddOpSitesComponent,
    SearchOpSitesComponent,
    AddLocalityComponent,
    SearchLocalityComponent,
    SearchVillageComponent,
    AddVillageComponent,
    AddSopComponent,
    SearchSopComponent,
    SearchTeamLeaderComponent,
    AddTeamLeaderComponent,
    AddUsersComponent,
    SearchUsersComponent
  ]
})
export class SharedModule { }
