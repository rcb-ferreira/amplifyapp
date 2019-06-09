import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MuseumComponent } from '../museum/museum.component';
import { BetsComponent } from 'app/bets/bets.component';
import { ErrorComponent } from 'app/error/error.component';

@Injectable()
export class SettingsService {

    currentSettings: any;
    lang: string;
    systemLang: any;
    constructor(
        private injector: Injector,
        private api: ApiService
    ) {
        this.systemLang = JSON.parse(localStorage.getItem('lang')) || null;
    }

    loadSettings(): Promise<any> {
        let keys = [];
        let buildRoutes = [];
        const key = 'results';
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const router = this.injector.get(Router);
                console.log(router);
                this.api.getSettings()
                    .subscribe(
                        response => {

                            if (!!this.systemLang && +this.systemLang.orders > 1) {
                                buildRoutes = [
                                    {
                                        path: 'home2',
                                        component: HomeComponent
                                    },
                                    {
                                        path: 'about2',
                                        component: AboutComponent
                                    },
                                    {
                                        path: 'bets2',
                                        component: BetsComponent
                                    },
                                    {
                                        path: 'museum2',
                                        component: MuseumComponent
                                    },
                                    {
                                        path: 'dashboard2',
                                        component: DashboardComponent
                                    }
                                ];
                            } else {
                                buildRoutes = [
                                    {
                                        path: 'home',
                                        component: HomeComponent
                                    },
                                    {
                                        path: 'about',
                                        component: AboutComponent
                                    },
                                    {
                                        path: 'bets',
                                        component: BetsComponent
                                    },
                                    {
                                        path: 'museum',
                                        component: MuseumComponent
                                    },
                                    {
                                        path: 'dashboard',
                                        component: DashboardComponent
                                    }
                                ];
                            }

                            router.config = buildRoutes;

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

                            router.config.push({
                                path: '**',
                                component: ErrorComponent
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
