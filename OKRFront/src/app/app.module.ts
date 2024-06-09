import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
//confirmation
import { NgxAwesomePopupModule ,ConfirmBoxConfigModule} from '@costlydeveloper/ngx-awesome-popup';
//angular material
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
//Calendar 
import { FullCalendarModule } from '@fullcalendar/angular';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//components
import { ObjectifComponent } from 'src/app/component/Manager/objectif/objectif.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ObjAddEditComponent } from './component/Manager/obj-add-edit/obj-add-edit.component';
import { EmployeComponent } from './component/Admin/employe/employe.component';
import { EmployeAddComponent } from 'src/app/component/Admin/employe-add/employe-add.component';
import { ManagerAddComponent } from './component/Admin/manager-add/manager-add.component';
import { ManagerComponent } from './component/Admin/manager/manager.component';
import { FooterComponent } from './component/footer/footer.component';
import { ChangePassComponent } from './component/change-pass/change-pass.component';
import { DashboardComponent } from './component/Admin/dashboard/dashboard.component';
import { ResultatComponent } from './component/Manager/resultat/resultat.component';
import { AddResultatComponent } from './component/Employe/add-resultat/add-resultat.component';
import { LogoutComponent } from './component/logout/logout.component';
import { CalenderComponent } from './component/Employe/calender/calender.component';



@NgModule({
  declarations: [
    AppComponent,
    ObjectifComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    ProfilComponent,
    ObjAddEditComponent,
    EmployeComponent,
    EmployeAddComponent,
    ManagerAddComponent,
    ManagerComponent,
    FooterComponent,
    ChangePassComponent,
    DashboardComponent,
    ResultatComponent,
    AddResultatComponent,
    LogoutComponent,
    CalenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    FullCalendarModule,
    MatCardModule,
    NgxAwesomePopupModule.forRoot(), 

    ConfirmBoxConfigModule.forRoot(),
    

    


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
