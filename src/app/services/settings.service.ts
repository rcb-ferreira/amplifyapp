import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MuseumComponent } from '../museum/museum.component';

@Injectable()
export class SettingsService {

    currentSettings: any;
    constructor(
        private injector: Injector,
        private api: ApiService
    ) { }

    loadSettings(): Promise<any> {
        let keys = [];
        const key = 'results';
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const router = this.injector.get(Router);
                console.log(router);
                this.api.getSettings()
                    .subscribe(
                        response => {
                            router.config.push(
                                    {
                                        path: 'home',
                                        component: HomeComponent
                                    },
                                    {
                                        path: 'about',
                                        component: AboutComponent
                                    },
                                    {
                                        path: 'museum',
                                        component: MuseumComponent
                                    },
                                    {
                                        path: 'dashboard',
                                        component: DashboardComponent
                                    });

                            if (response[key]) {
                                response[key].forEach((element, index) => {
                                    console.log(Object.keys(element));
                                    keys = Object.keys(element);
                                });
                            }

                            keys.forEach(element => {
                                router.config.push({
                                    path: element,
                                    component: MuseumComponent
                                });
                            });
                            resolve(true);
                        },
                        err => {
                            console.log(err);
                            reject(false);
                        }
                    );
            });
        });
    }
}
