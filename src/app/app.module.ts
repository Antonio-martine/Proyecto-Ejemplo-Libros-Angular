import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { LibroService } from './service/libro.service';
import { LibrosComponent } from './pages/libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    LibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
