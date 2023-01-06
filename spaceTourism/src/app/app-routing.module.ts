import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './componentes/content/content.component';
import { CommanderComponent } from './componentes/crew/commander/commander.component';
import { EngineerComponent } from './componentes/crew/engineer/engineer.component';
import { PilotComponent } from './componentes/crew/pilot/pilot.component';
import { SpecialistComponent } from './componentes/crew/specialist/specialist.component';
import { DestinationComponent } from './componentes/destination/destination.component';
import { EuropaComponent } from './componentes/destination/europa/europa.component';
import { MarsComponent } from './componentes/destination/mars/mars.component';
import { MoonComponent } from './componentes/destination/moon/moon.component';
import { TitanComponent } from './componentes/destination/titan/titan.component';
import { CapsuleComponent } from './componentes/technology/capsule/capsule.component';
import { SpaceportComponent } from './componentes/technology/spaceport/spaceport.component';
import { VehicleComponent } from './componentes/technology/vehicle/vehicle.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'},
  {
    path: 'destination',
    component: DestinationComponent},
  {
    path: 'content',
    component: ContentComponent},
  {
    path: 'moon',
    component: MoonComponent},
  {
    path: 'mars',
    component: MarsComponent},
  {
    path: 'europa',
    component: EuropaComponent},
  {
    path: 'titan',
    component: TitanComponent},
  {
    path: 'commander',
    component: CommanderComponent},
  {
    path: 'specialist',
    component: SpecialistComponent},
  {
    path: 'engineer',
    component: EngineerComponent},
  {
    path: 'pilot',
    component: PilotComponent},
  {
    path: 'vehicle',
    component: VehicleComponent},
  {
    path: 'spaceport',
    component: SpaceportComponent},
  {
    path: 'capsule',
    component: CapsuleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
