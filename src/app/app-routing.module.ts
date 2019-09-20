import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonExamplesComponent } from './button-examples/button-examples.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'button',
        component: ButtonExamplesComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
