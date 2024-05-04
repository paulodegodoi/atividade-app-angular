import { Component } from '@angular/core';
import { AtividadeFormComponent } from '../../components/atividade-form/atividade-form.component';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  imports: [AtividadeFormComponent],
})
export class CreateComponent {}
