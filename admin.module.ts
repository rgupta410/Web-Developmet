import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from "@angular/router";
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

let routing=RouterModule.forChild([
    {path:"auth",component:AuthComponent},
    {path:"main",component:AdminComponent},
    {path:"**",redirectTo:"auth"}
]);
@NgModule({
    imports: [CommonModule,FormsModule,routing],
    declarations:[AuthComponent,AdminComponent]
})
export class AdminModule{}