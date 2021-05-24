# Waller front
## _Projeto_

Waller é um sistema de teste para realização de transferências financeiras. Nele é possível realizar retirada, pagamentos, depósito, ver seus rendimentos totais e acompanhar por meio de gráfico as entradas (com rendimento) e saídas de sua conta. O logo foi gerado pelo site www.namelix.com

O sistema é bastante simples, sendo apenas demonstrativo. Além diss, suas ações não deixam de ser lúdicas, representando operações financeiras. O intuito maior dessas ações é testar a aplicação, suas requisições, a arquitetura e legibilidade escolhida para o código, sua componentização, reutilização de código e utilização de tecnologias acopladas.

## Tech

Waller lança mão de algumas tecnologias, aqui sendo as principais delas no front-end:

- **Parcel bundler** - Rápido de configurar, excelente performance e prático para pequenos projetos;
- **React hooks** - Utilzação padrão da lib e das suas principais API's useEffect e useState. Além delas, useContext para um estado global entre componentes;
- **Typescript** - Diminui a quantidade de bugs ao escrever e testar o código, além de torná-lo mais organizado e legível;
- **Tailwind css** - Framework de css que acelera a produção da criação de componentes, já que não se faz necessário escrever o css tendo as classes prontas pré-setadas;
- **GraphQL** - Método para requisição dos dados escolhido pois deixa o código mais legível, diminui a quantidade de dados retornados no request e você recebe exatamente o que é solicitado; nada a mais, nada a menos;
- **Eslint, Prettier, Husky, Github Actions** - Tecnologias usadas para melhorar a entrega do código e evitar possíveis bugs commitados na branch principal. 

Além dessas, outras tecnologias para desenvolvimento foram utilizadas, não sendo necessário citá-las aqui.

## Instalação e teste

Para rodar o projeto, faz-se necessário ter o node v12 ou superior instalado em sua máquina. Após isso, execute os comandos a seguir conforme necessário: 

Instalando os módulos...
```sh
yarn intall
```

Para gerar uma build para produção...

```sh
yarn build
```
E testes...

```sh
yarn test
```

Comandos usuais para não gerar confusão :)
É necessário também estar com o projeto waller-back sendo executado para que as requisições sejam efetuadas corretamente.

## O que falta nesse projeto?

Dentre as diversas limitações, algumas podem ser levantadas para serem posteriormente adicionadas/melhoradas:
- Testes end-to-end. Uma boa opção para isso são testes realizados com o Cypress;
- Autenticação e autorização em uma tela de login. Por questão de segurança, isso é super importante. Atualmente todas as requisições são feitas de forma direta, sem authorization/authentication, apenas para testar as suas funcionalidades;
- Com um crescimento do projeto, um design system com os principais componentes utilizados;
- Mais detalhes das transações. Como excemplo, seria interessante abrir um modal com todas as transações efetuadas e detalhes delas;
- Usar um modelo de ssr com o crescimento da plataforma, ja que a pagina atualmente é um spa, o que pode atrasar um pouco o tempo de carregamento da mesmo, além de que o parcel não é tão interessante para projetos maiores;
- Continuous delivery para complementar com o CI já feito
