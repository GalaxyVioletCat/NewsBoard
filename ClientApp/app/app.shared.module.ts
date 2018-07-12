import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/shared/header/header.component';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },            
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
