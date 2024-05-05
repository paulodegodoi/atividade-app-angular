import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Atividade } from '../../models/atividade';

@Component({
  selector: 'app-atividade-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './atividade-form.component.html',
  styleUrl: './atividade-form.component.css',
})
export class AtividadeFormComponent {
  @Output() onSubit = new EventEmitter<Atividade>();

  atividadeForm!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.atividadeForm = new FormGroup({
      atividadeId: new FormControl(0),
      name: new FormControl(''),
      prioridade: new FormControl(0),
      status: new FormControl(0),
      userIdentity: new FormControl(''),
    });
  }

  handleForm() {
    const data: Atividade = this.atividadeForm.value;
    console.log(data);

    data.prioridade = Number(data.prioridade);

    this.onSubit.emit(data);
  }
}
