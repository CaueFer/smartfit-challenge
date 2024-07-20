# SmartfitFront

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.0.1.

Ver projeto
 👉 [https://smartfit-challenge-one.vercel.app/reabertura](https://smartfit-desafio.vercel.app/reabertura)

# Preview

![preview](preview.png)

## Desafio

Link: [SmarFit-Challenge](https://github.com/bioritmo/front-end-code-challenge-smartsite)

Desafio front-end Smart Fit

### Proposta de Teste

A Smart Fit, por atuar no segmento de fitness, passou por várias mudanças na pandemia. Foi necessário desenvolver uma página para buscar unidades fechadas ou abertas para consulta e reserva.

Optamos por não disponibilizar a API de buscas de unidades abertas/fechadas original para esse teste.

Nesse teste, você implementará as funcionalidades descritas abaixo. Tenha atenção com as regras de negócios definidas mais adiante.

Lembre-se de seguir o layout proposto em _material.

Caso não consiga concluir todas as funcionalidades, lembre-se que o mais importante é termos noção da qualidade do código e de suas habilidades para projeto de sistemas. Nesse caso, complemente sua solução com comentários e documentação sobre como terminaria o teste.

### Funcionalidades

- Carrega unidades através do arquivo JSON [locations.json](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) com método GET
- Busca todas as unidades
- Busca unidades com filtros
- Mostra previsão de resultados encontrados
- Mostra unidades ao buscar

### Regras de Negócio

- Filtrar unidades abertas ou fechadas
- Filtrar unidades por período de funcionamento
- Caso não encontre unidades, mostrar uma mensagem ao usuário: "Nenhuma unidade encontrada"
- Validar para mostrar ícones corretos de acordo com o status

### Componentes Macro

- Formulário de busca com filtros
- Legenda
- Lista de unidades

## Servidor de Desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos fonte.

## Scaffolding de Código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de build serão armazenados no diretório `dist/`.

## Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando Testes End-to-End

Execute `ng e2e` para executar os testes end-to-end via uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste end-to-end.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).
