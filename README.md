# Exemplo de Configuração do Commitizen com Customização

Este projeto é um exemplo de como usar o [Commitizen](https://commitizen.github.io/cz-cli/) com a biblioteca [cz-customizable](https://github.com/leonardoanalista/cz-customizable) para personalizar mensagens de commit de acordo com as suas necessidades.

## O que é o Commitizen?

O Commitizen é uma ferramenta que ajuda a padronizar mensagens de commit. Ele fornece uma interface interativa para garantir que suas mensagens sigam um padrão consistente, facilitando o entendimento do histórico do projeto.

## O que é o cz-customizable?

O cz-customizable permite que você customize a interface do Commitizen, ajustando os tipos de commits, escopos e mensagens que aparecem quando você cria um commit. Isso ajuda a tornar as mensagens mais claras e relevantes para o seu projeto.

## Como funciona?

1. **Estrutura do Projeto**: Este repositório contém um arquivo `cz-config.js` na raiz do projeto, que define os tipos de commits, escopos e mensagens personalizadas.

2. **Tipos de Commit**: Os tipos de commit são categorizados para facilitar a identificação do propósito de cada commit. Exemplos incluem `feat` para novas funcionalidades, `fix` para correções de bugs, e assim por diante.

3. **Escopos**: Os escopos são opcionais e permitem especificar uma área do projeto que está sendo modificada, como `frontend`, `backend`, `api`, entre outros.

4. **Execução do Commit**: Para realizar um commit, utilize o comando:

```bash
   npm run commit
```

Isso abrirá uma interface interativa onde você poderá selecionar o tipo de commit, escopo (se necessário), e preencher a descrição do commit.

## Contribuições

Sinta-se à vontade para fazer melhorias ou sugestões para este projeto. Pull requests são bem-vindos!
