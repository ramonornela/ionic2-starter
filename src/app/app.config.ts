// TODO link para documentação do URL resolver com docs e exemplos
export const APP_ROUTES_DEV = {
  '_defaults': {
    'host': 'http://192.168.10.72:8080/rest/',
    'variables': {
      'mock': 'http://192.168.10.72:3000'
    }
  },
  'login': {
    'url': '{mock}/auth'
  },
  'usuarios': {
    'url': '{mock}/usuarios'
  }
};

export const AppConfig = {
  authentication: {
    http: {
      url: 'login',
      paramNameIdentity: 'cpf',
      paramNameCredential: 'senha',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
  },
  urlResolver: {
    dev: APP_ROUTES_DEV
  },
  http: {
    defaultOptions: {
      timeout: 15000
    }
  }
};
