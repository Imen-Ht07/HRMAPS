export class Objectif {
    _id!: any; 
    description!: string;
    date_limite!: string;
    etat_avancement!: 'Non commencé'|  'En cours'|  'Terminé';
    niveau!: 'entreprise' | 'département' | 'individuel'; 
    }
    