import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ObjectifService } from '../../../services/objectif.service';

@Component({
  selector: 'app-obj-add-edit',
  templateUrl: './obj-add-edit.component.html',
  styleUrls: ['./obj-add-edit.component.css'],
})
export class ObjAddEditComponent implements OnInit {
  objectifForm!: FormGroup;
  niveau: string[] = ['individuel', 'entreprise', 'département'];
  etat_avancement: string[] = ['Non commencé', 'En cours', 'Terminé'];

  constructor(
    private formBuilder: FormBuilder,
    private objectifService: ObjectifService,
    private dialogRef: MatDialogRef<ObjAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.objectifForm = this.formBuilder.group({
      description: this.data?.description || '',
      date_limite: this.data?.date_limite || '',
      etat_avancement: this.data?.etat_avancement || 'Non commencé',
      niveau: this.data?.niveau || 'individuel',
    });
  }

  onFormSubmit(): void {
    if (this.objectifForm.valid) {
      const formData = this.objectifForm.value;
      const operation = this.data ? this.objectifService.updateObjectif(this.data._id, formData) : this.objectifService.addObjectif(formData);
      operation.subscribe({
        next: () => this.dialogRef.close(true),
        error: (err: any) => console.error(err),
      });
    }
  }
    //actualiser
    refresh(): void {
      window.location.reload();
  }
}
