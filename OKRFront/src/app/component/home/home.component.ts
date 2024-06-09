import { Component ,OnInit } from '@angular/core';
import { ObjectifService } from 'src/app/services/objectif.service';
import { ResultatService } from 'src/app/services/resultat.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
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
    private ObjectifService:ObjectifService,
    private ResultatService:ResultatService
  ){}
  ngOnInit(): void {
    this.getNbObjectif();
    this.getNbResult();
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
}
