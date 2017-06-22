# Ionic2-Starter

Projeto starter com features comuns para os projetos.

- Login
- Home
- Termo
- Onboard

# Executando o projeto
```npm install``` ou ```yarn install```

### Iniciar Server mock
```npm run server:init```

### Iniciar server dev
```npm run ionic:serve```

# Build Cordova

| Plataforma    | Comando                     |
| ------------- |-----------------------------|
| Android       | ```npm run build:android``` |
| iOS           | ```npm run build:ios```     |
| Windows       | ```npm run build:windows``` |

Passando options do [Ionic-App-Scripts](https://github.com/driftyco/ionic-app-scripts/blob/master/README.md) para alguns dos comandos listados basta adicionar ```--``` após o comando desejado
ex: ```npm run build:android -- --prod```

# Desenvolvimento

## Criar um projeto a partir deste template

Execute o comando:

```npm run copy <pasta_desejada>```

Este copia os fontes para a pasta desejada, mas há a necessidade de modificação manual dos arquivos:

- package.json
  - alterar os campos: name, homepage, description
- README.md
 - customizar para a docs do projeto em questão

## Gerando novo release

- Passo 1 - Incrementar o package.json
- Passo 2 - Criar/Atualizar changelog(CHANGELOG.md) através dos commits ```npm run changelog```
- Passo 3 - Gerando tag no github ```npm run gh:release <access_token>```

Contributing

See [CONTRIBUTING.md](/.github/CONTRIBUTING.md)

## Enviando App's para as lojas

- [Android](/docs/README_ANDROID_LOJA.md)
- [IOS](/docs/README_IOS_LOJA.md)
- [Windows Phone](/docs/README_WP_LOJA.md)