import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Atividade } from '../../models/atividade';

@Component({
  selector: 'app-atividade-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './atividade-form.component.html',
  styleUrl: './atividade-form.component.css',
})
export class AtividadeFormComponent {
  @Output() onSubit = new EventEmitter<Atividade>();

  atividadeForm!: FormGroup;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.resetForm();
  }

  handleForm() {
    const data: Atividade = this.atividadeForm.value;
    console.log(data);

    data.prioridade = Number(data.prioridade);

    this.onSubit.emit(data);

    this.resetForm();
    this.router.navigate(['/']);
  }

  resetForm() {
    this.atividadeForm = new FormGroup({
      atividadeId: new FormControl(0),
      name: new FormControl(''),
      prioridade: new FormControl(0),
      status: new FormControl(0),
      userIdentity: new FormControl(''),
    });
  }
}
