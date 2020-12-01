import { Routes } from '@angular/router';
import { OriginationComponent } from './origination/origination.component';
/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/', data: {
        breadcrumb: null
        }
    },
    { path: 'origination',  component: OriginationComponent, data: {
        breadcrumb: 'Origination',
        subMenu : [
            { name: 'FHA Pricing', url: '#' },
            { name: 'Pricing Authorization', url: '#' },
            { name: 'HMDA Cerification', url: '#' },
            { name: 'Loan Auhtorization', url: '#' },
            { name: 'Rate Lock Auhtorization', url: '#' },
            { name: 'Standard Deviation Memo', url: '#' }
        ]
      }
    }
];
