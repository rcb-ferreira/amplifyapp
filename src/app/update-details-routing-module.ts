import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: HomeComponent },
            { path: '', component: AboutComponent },
            { path: '', component: DashboardComponent }
        ])
    ],
    exports: [RouterModule]
})
export class UpdateDetailsRoutingModule {}