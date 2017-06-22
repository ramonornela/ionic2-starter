# Contributing

## Estilo de código

Segue o padrão do [ionic2](https://www.npmjs.com/package/tslint-ionic-rules) e [angular-style](https://www.npmjs.com/package/codelyzer), veja o arquivo  com as regras especificadas para o projeto
[TSLint](/tslint.json).

## Formato das mensagens de commit

Nós temos regras muito precisas sobre a forma como são nossas mensagens de commit no git, pode ser formatado. Isto leva a mensagens mais legíveis que são fáceis de seguir quando se olha através do histórico do projeto.
`tipo(escopo): motivo`

`tipo(scope): motivo`

#### Tipo
Devem ser:

* **fix**: Correção de BUG
* **feat**: Novo recurso
* **docs**: Somente mudança na documentação
* **style**: Mudanças que não afetam o código (formatação, faltando ponto e vírgula, espaço em branco, etc)
* **refactor**: Melhorias de código
* **perf**: Alteração que melhora desempenho
* **test**: Adição de testes
* **chore**: Mudanças no processo de build, atualização de bibliotecas ...

#### Escopo
Lugar(componente, classe ...) onde a mudança é realizada. Por exemplo `jspdf`, `saldo`, etc...

#### Motivo
O motivo deve ser claro e sucinto

* não capitalizar a letra
* não adicionar ponto final
