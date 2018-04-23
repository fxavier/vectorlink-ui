import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SprayModule } from './spray/spray.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AddPaisesComponent } from './shared/add-paises/add-paises.component';
import { SearchPaisesComponent } from './shared/search-paises/search-paises.component';
import { SearchSprayDetailsComponent } from './spray/spray-details/search-spray-details/search-spray-details.component';
import { AddSprayDetailsComponent } from './spray/spray-details/add-spray-details/add-spray-details.component';
import { AddSprayTotalsComponent } from './spray/spray-totals/add-spray-totals/add-spray-totals.component';
import { SearchSprayTotalsComponent } from './spray/spray-totals/search-spray-totals/search-spray-totals.component';
import { PaisService } from './shared/pais.service';


const routes: Routes = [
   { path: 'paises', component: SearchPaisesComponent },
   { path: 'paises/novo', component: AddPaisesComponent },
   { path: 'spray-details', component: SearchSprayDetailsComponent },
   { path: 'spray-details/novo', component: AddSprayDetailsComponent },
   { path: 'spray-totals', component: SearchSprayTotalsComponent },
   { path: 'spray-totals/novo', component: AddSprayTotalsComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SprayModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
