---
title: "Por que escolhi Astro para meu site pessoal"
description: "Uma análise prática do Astro como framework para sites de conteúdo, comparando com Next.js e outras alternativas."
pubDate: 2026-03-25
tags: ["astro", "framework", "web"]
---

Quando decidi criar este site, avaliei várias opções: Next.js, Hugo, Gatsby e Astro. Neste artigo, explico por que o **Astro** foi a escolha certa para um site focado em conteúdo.

## O problema com SPAs para blogs

Frameworks como React e Next.js são incríveis para aplicações interativas, mas para um blog eles enviam JavaScript desnecessário ao cliente. O [Astro](https://astro.build/) resolve isso com sua arquitetura de **zero JS por padrão**.

## Islands Architecture

O conceito de [Islands Architecture](https://docs.astro.build/en/concepts/islands/) permite que apenas os componentes interativos carreguem JavaScript. O restante da página é HTML puro.

```astro
---
// Este componente NÃO envia JS ao cliente
const titulo = "Conteúdo estático";
---
<h1>{titulo}</h1>
```

## Content Collections

Uma das funcionalidades que mais gosto é o [Content Collections](https://docs.astro.build/en/guides/content-collections/). Ele valida o frontmatter dos seus arquivos Markdown com schemas tipados:

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});
```

## Performance

O resultado é impressionante. Este site atinge score acima de 95 no Lighthouse sem nenhuma otimização manual.

## Próximos passos

No próximo artigo, vou falar sobre [como configurei o Docker para deploy](/blog/docker-deploy-astro). Se você ainda não leu, confira também meu [primeiro post](/blog/meu-primeiro-post) onde explico a motivação por trás deste blog.
