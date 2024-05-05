import { Component, OnInit } from '@angular/core';
import { AtividadesService } from '../../services/atividades.service';
import { Atividade } from '../../models/atividade';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  atividades: Atividade[] = [];
  atividadesGeral: Atividade[] = [];
  constructor(private atividadesService: AtividadesService) {}

  ngOnInit(): void {
    try {
      this.atividadesService.GetAtividades().subscribe((data) => {
        console.log(data);
        this.atividades = data;
        this.atividadesGeral = data;
      });
    } catch (error) {
      console.log('Ocorreu um erro ao obter as atividades. Erro: ' + error);
    }
  }

  handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.atividades = this.atividadesGeral.filter((f) => {
      return f.name.toLocaleLowerCase().includes(value);
    });
  }
}
