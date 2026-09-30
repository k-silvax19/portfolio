import { Component } from '@angular/core';

interface Projeto {
  titulo: string,
  descricao: string,
  urlImagem: string,
  urlRepositorio: string
  tecnologias: string[]
}

@Component({
  imports: [],
  selector: 'app-projetos',
  templateUrl: './projetos.html',
})
export class Projetos {
  public readonly projetos: Projeto[] = [
    {
      titulo: 'Gerador De Certificados Online (API)',
      descricao: 'Permite gerar um zip de certificados com pdf estilizados para cada aluno',
      urlImagem: '',
      urlRepositorio: 'https://github.com/PingDev-51/Gerador-de-Certificados-API',
      tecnologias: [
        'C#',
        'ASP.NET',
        'EF Core',
        'MediatR',
        'PostgreSQL',
        'QuestPDF',
        'RabbitMq',
        'SwaggerUI'
      ]
    }
  ]
}
