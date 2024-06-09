import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service'; 
import { EmployeService } from '../../../services/employe.service';
import { ObjectifService } from 'src/app/services/objectif.service';
import { ResultatService } from 'src/app/services/resultat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbrM: number = 0;  
  nbrE: number = 0;
  objectiveCounts: { [key: string]: number } = {
    'Non commencé': 0,
    'En cours': 0,
    'Terminé': 0
  };
  resultatCounts: { [key: string]: number } = {
    'Non commencé': 0,
    'En cours': 0,
    'Terminé': 0
    };

  constructor(
    private ManagerService:ManagerService ,
     private EmployeService : EmployeService,
    private ObjectifService:ObjectifService,
    private ResultatService:ResultatService
  ) {}

   ngOnInit(): void {
     this.getNbEmploye();
     this.getNbManager();
     this.getNbObjectif();
     this.getNbResult();
   }
     getNbManager() {
      this.ManagerService.getCount().subscribe(
        (data) => {
          this.nbrM = data.count; 
          console.log("Nombre des managers: " + this.nbrM);
        },
        (error) => {
          console.error("Erreur lors de la récupération du nombre de managers:", error);
        }
      );
    }
  getNbEmploye(){
    this.EmployeService.getEmployeCount().subscribe((data)=>{
        this.nbrE = data.count; 
        console.log("Nombre des employes: " + this.nbrE);
      },
      (error) => {
        console.error("Erreur lors de la récupération du nombre de employes:", error);
      }
    );
  }
  getNbObjectif() {
    this.ObjectifService.countObjectstatus().subscribe({
      next: (data) => {
        this.objectiveCounts = data;
      },
      error: (error) => {
        console.error("Erreur lors de la récupération du nombre d'objectifs", error);
      }
    });
  }
  getNbResult() {
    this.ResultatService.countResultstatus().subscribe({
      next: (data) => {
        this.resultatCounts = data;
      },
      error: (error) => {
        console.error("Erreur lors de la récupération du nombre d'objectifs", error);
      }
    });
  }

  isAdmin(): boolean {
    const role = localStorage.getItem('role'); // Retrieve the role from localStorage
    return role === 'Admin';
  }
}
