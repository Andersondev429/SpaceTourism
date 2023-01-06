import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ContentComponent } from './componentes/content/content.component';
import { DestinationComponent } from './componentes/destination/destination.component';
import { MoonComponent } from './componentes/destination/moon/moon.component';
import { MarsComponent } from './componentes/destination/mars/mars.component';
import { EuropaComponent } from './componentes/destination/europa/europa.component';
import { TitanComponent } from './componentes/destination/titan/titan.component';
import { CrewComponent } from './componentes/crew/crew.component';
import { CommanderComponent } from './componentes/crew/commander/commander.component';
import { SpecialistComponent } from './componentes/crew/specialist/specialist.component';
import { EngineerComponent } from './componentes/crew/engineer/engineer.component';
import { PilotComponent } from './componentes/crew/pilot/pilot.component';
import { TechnologyComponent } from './componentes/technology/technology.component';
import { VehicleComponent } from './componentes/technology/vehicle/vehicle.component';
import { SpaceportComponent } from './componentes/technology/spaceport/spaceport.component';
import { CapsuleComponent } from './componentes/technology/capsule/capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContentComponent,
    DestinationComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent,
    CrewComponent,
    CommanderComponent,
    SpecialistComponent,
    EngineerComponent,
    PilotComponent,
    TechnologyComponent,
    VehicleComponent,
    SpaceportComponent,
    CapsuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
