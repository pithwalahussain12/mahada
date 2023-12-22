import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdvertismentComponent } from 'src/pages/create-advertisment/create-advertisment.component';
import { ListAdvertismentComponent } from 'src/pages/list-advertisment/list-advertisment.component';
import { PreivewPdfComponent } from 'src/pages/preivew-pdf/preivew-pdf.component';

const routes: Routes = [
  { path: '', component: ListAdvertismentComponent },
  { path: 'list', component: ListAdvertismentComponent },
  { path: 'create-ad', component: CreateAdvertismentComponent },
  { path: 'preview-pdf', component: PreivewPdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
