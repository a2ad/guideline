# Styleguide

Guia de estilos da equipe de front-end da A2ad, onde definimos como escrevemos nosso querido código.

## 1. Background

Este documento define a formatação e regras de estilo para HTML e CSS. Seu objetivo é melhorar a colaboração, qualidade de código, manutenção e transparência no processo de desenvolvimento.

## 2. Geral

### 2.1. Regras gerais de estilo 

### 2.1.1. Protocolo

Usar sempre que possível o protocolo HTTPS para recursos incorporados.
Sempre usar o protocolo HTTPS (```https:```) para imagens e outros arquivos de mídia, folhas de estilo, fontes externas, apis e scripts, a menos que os respectivos arquivos não estejam disponíveis em HTTPS.

```html
<!-- Não recomendado: omitir o protocolo -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<!-- Não recomendado: usar o protocolo HTTP -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```

```html
<!-- Recomendado -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```

```css
/* Não recomendado: omitir o protocolo */
@import '//fonts.googleapis.com/css?family=Open+Sans';

/* Não recomendado: usar o protocolo HTTP */
@import 'http://fonts.googleapis.com/css?family=Open+Sans';
```

```css
<!-- Recomendado -->
@import 'https://fonts.googleapis.com/css?family=Open+Sans';
```

### 2.2. Regras gerais de formatação

### 2.2.1. Indentação

Indentar utilizando tab uma única vez. 

Não usar espaços ou outros tipos de espaçamentos para indentação.

```html
<ul>
    <li>Notícias</li>
    <li>Artigos</li>
</ul>
```

```css
.example {
    color: #000;
}
```

### 2.2.2. Capitalização

Usar apenas lowercase. 

Todo o código tem que ser em lowercase. Isto se aplica para nome de elementos HTML, atributos, valores de atributos, seletores CSS, propriedades e valores de propriedades (com exceção de strings)

```html
<!-- Não recomendado -->
<A HREF="/">Home</A>
```

```html
<!-- Recomendado -->
<img src="a2ad.png" alt="A2ad">
```

```css
<!-- Não recomendado -->
color: #E5E5E5;
```

```css
<!-- Recomendado -->
color: #e5e5e5;
```

### 2.2.3. Espaço em branco à direita

Remover espaços em branco à direita.

Espaços em branco à direita são desnecessários e podem complicar diffs.

```html
<!-- Não recomendado -->
<p>What?</p>_
```

```html
<!-- Recomendado -->
<p>Okay!</p>
```

### 2.3. Regras gerais de Meta Dados

### 2.3.1. Encoding

