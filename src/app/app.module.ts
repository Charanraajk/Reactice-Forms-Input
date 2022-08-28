import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FormsComponent } from './forms/forms.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TwoComponent } from './two/two.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import { AlphaService } from './service/alpha.service';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TwoComponent,
    DialogContentExampleDialogComponent
  ],
  // entryComponents:[dialog]
  imports: [
    BrowserModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule, 
    ScrollingModule,
    MatMenuModule,
    MatSliderModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatRadioModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [AlphaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
