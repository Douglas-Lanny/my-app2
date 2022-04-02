import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-promedio',
  templateUrl: './modal-promedio.component.html',
  styleUrls: ['./modal-promedio.component.css']
})
export class ModalPromedioComponent implements OnInit {

  Promedio = 0;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
