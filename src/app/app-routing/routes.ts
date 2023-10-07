import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { MedArticlesComponent } from '../med-articles/med-articles.component';
import { MedServicesComponent } from '../med-services/med-services.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { ArticleComponent } from '../article/article.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    //{path: 'doctors', component: DoctorsComponent},
    //{path: 'articles', component: MedArticlesComponent},
    //{path: 'services', component: MedServicesComponent},
    //{path: 'contact', component: ContactusComponent},
    {path: 'article/:id', component: ArticleComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];