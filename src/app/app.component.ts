import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPromedioComponent } from './modal-promedio/modal-promedio.component';

const minimoCreditos: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
  // se toma los creditos por materia
  const creditosPorMateria = (form.value as any[]).map(materia => +materia.creditos);
  // se hace la sumatoria de los creditos
  const totalCreditos = creditosPorMateria.reduce(((accumulator, curr) => accumulator + curr), 0);

  return totalCreditos > 0 && totalCreditos < 8 ? { minimoCreditos: true } : null;
}

const maximoCreditos: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
  // se toma los creditos por materia
  const creditosPorMateria = (form.value as any[]).map(materia => +materia.creditos);
  // se hace la sumatoria de los creditos
  const totalCreditos = creditosPorMateria.reduce(((accumulator, curr) => accumulator + curr), 0);

  return totalCreditos > 24 ? { maximoCreditos: true } : null;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // modelo dinamico del formulario
  form = this.fb.group({
    materias: this.fb.array([], [minimoCreditos, maximoCreditos])
  });

  // Posibles creditos.
  itemsCredito = [0, 1, 2, 3, 4, 5];

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



  obtenerPromedio() {
    const notas = this.form.get('materias')?.value;
    let sumaNotas = 0;
    let totalCreditos = 0;
    for (var i = 0; i < notas.length; i++) {
      sumaNotas = sumaNotas + notas[i].nota * notas[i].creditos;
      totalCreditos = totalCreditos + notas[i].creditos;
    }
    const modalRef = this.modal.open(ModalPromedioComponent, { backdrop: 'static', size: 'lg' });
    modalRef.componentInstance.Promedio = (sumaNotas / totalCreditos).toFixed(1);
  }


  get invalidRegistro() {
    for (let i = 0; i < this.materias.length; i++) {
      if ((this.form.get('materias') as FormArray).at(i).invalid) {

        return true
      }
    }
    return false;
  }


}
