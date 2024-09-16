import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,       // Import AppModule for shared components, services, etc.
    ServerModule,    // Import ServerModule for server-side rendering
  ],
  bootstrap: [AppComponent],  // Bootstrap the root application component
})
export class AppServerModule {}
