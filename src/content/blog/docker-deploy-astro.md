---
title: "Deploy de um site Astro com Docker e Nginx"
description: "Guia prático para containerizar um site Astro com Docker multi-stage build e servir com Nginx em uma VPS."
pubDate: 2026-03-27
tags: ["docker", "deploy", "devops", "astro"]
---

Neste artigo, mostro como configurei o deploy deste site usando **Docker** com build multi-stage e **Nginx** como servidor.

Se você quer entender por que escolhi Astro, leia o artigo [Por que escolhi Astro para meu site pessoal](/blog/astro-framework-conteudo).

## Dockerfile multi-stage

A ideia é simples: um estágio para build com Node.js e outro para servir os arquivos estáticos com Nginx.

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

O resultado é uma imagem de **~30MB** — muito menor do que rodar Node.js em produção.

## Configuração do Nginx

O `nginx.conf` precisa lidar com as rotas do Astro e cache de assets:

```nginx
server {
  listen 80;
  root /usr/share/nginx/html;

  location / {
    try_files $uri $uri/index.html =404;
  }

  location ~* \.(js|css|png|jpg|svg|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

## Gzip

Habilitar gzip reduz significativamente o tamanho das respostas. A documentação do Nginx sobre [gzip](https://nginx.org/en/docs/http/ngx_http_gzip_module.html) é uma boa referência.

## Deploy no EasyPanel

Com o Dockerfile pronto, o deploy no [EasyPanel](https://easypanel.io/) é direto:

1. Crie um novo serviço apontando para o repositório Git
2. Selecione build type **Dockerfile**
3. Configure a porta **80**
4. Adicione seu domínio

## Conclusão

Docker simplifica muito o deploy e garante que o ambiente é idêntico em dev e produção. Para mais dicas de desenvolvimento, confira meu [primeiro post](/blog/meu-primeiro-post) e o artigo sobre [Astro](/blog/astro-framework-conteudo).
