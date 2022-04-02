import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPromedioComponent } from './modal-promedio/modal-promedio.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // modelo dinamico del formulario
  form = this.fb.group({
    materias: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private readonly modal: NgbModal,) {

  }

  get materias() {
    return this.form.controls["materias"] as FormArray;
  }

  ngOnInit() {

  }


  adicionarMateria() {
    // conjunto de controles que representa una materia
    const materia = this.fb.group({
      materia: ['', Validators.required],
      nota: ['', Validators.required],
      creditos: ['', Validators.required],
    });

    (this.form.get('materias') as FormArray).push(materia);
  }

  eliminarMateria(materiaIndex: number) {
    (this.form.get('materias') as FormArray).removeAt(materiaIndex);
  }



  obtenerPromedio(){
    const notas = this.form.get('materias')?.value;
    const totalNotas = notas.length;

    let sumaNotas = 0;

    for(var i=0; i< notas.length; i++){

      sumaNotas = sumaNotas + notas[i].nota*notas[i].creditos
    }
   
    const modalRef = this.modal.open(ModalPromedioComponent, { backdrop: 'static', size: 'lg' });
    modalRef.componentInstance.Promedio = sumaNotas/100;
  }


}
