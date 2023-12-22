import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from 'src/common/sidebar/sidebar.component';
import { CreateAdvertismentComponent } from 'src/pages/create-advertisment/create-advertisment.component';
import { FormsModule } from '@angular/forms';
import { ListAdvertismentComponent } from 'src/pages/list-advertisment/list-advertisment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PreivewPdfComponent } from 'src/pages/preivew-pdf/preivew-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CreateAdvertismentComponent,
    ListAdvertismentComponent,
    PreivewPdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
