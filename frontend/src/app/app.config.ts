import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    
    // 2. Adiciona o provedor HttpClient para toda a aplicação
    provideHttpClient(), 
    
    // 3. Mantém o roteamento
    provideRouter(routes)
  ]
};