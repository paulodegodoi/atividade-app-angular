import { Component, OnInit } from '@angular/core';
import { AtividadesService } from '../../services/atividades.service';
import { Atividade } from '../../models/atividade';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  atividades: Atividade[] = [];
  atividadesGeral: Atividade[] = [];
  constructor(private atividadesService: AtividadesService) {}

  ngOnInit(): void {
    this.atividadesService.getAtividades().subscribe((data) => {
      // this.atividades = data;
      this.atividades = data;
      this.atividadesGeral = data;
    });
  }
}
