import { Component } from '@angular/core';
import { AtividadeFormComponent } from '../../components/atividade-form/atividade-form.component';
import { Atividade } from '../../models/atividade';
import { AtividadesService } from '../../services/atividades.service';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  imports: [AtividadeFormComponent],
})
export class CreateComponent {
  constructor(private atividadesServices: AtividadesService) {}
  createAtividade(atividade: Atividade) {
    console.log(atividade);
    this.atividadesServices
      .CreateAtividade(atividade)
      .subscribe((data) => console.log(data));
  }
}
