import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { DequeueComponent } from 'app/dequeue/dequeue.component';

@Injectable()
export class SettingsService {

    constructor(
        private injector: Injector,
        private api: ApiService
    ) {}

    loadSettings(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const router = this.injector.get(Router);
                this.api.showDequeue()
                    .subscribe(
                        response => {

                            router.config.push({
                                path: '**',
                                redirectTo: 'dequeue',
                                data: [ response ]
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
