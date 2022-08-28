import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { TwoComponent } from './two/two.component';


const routes: Routes = [
  {path:"Forms", component:FormsComponent},
  {path:"Date", component:TwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
