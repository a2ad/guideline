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

Usar UTF-8.

Certificar-se de que o editor de texto escolhido use UTF-8 como encoding de caracteres.

Especifique o encoding nos templates HTML e documentos via ```<meta charset="utf-8">```. Não especifique o encoding de folhas de estilos, pois elas já assumem o uso de UTF-8.

Mais sobre encoding e quando e como especificar eles pode ser encontrado [aqui](https://www.w3.org/International/tutorials/tutorial-char-enc/).

### 2.3.2. Comentários

Explique o código conforme necessário e sempre que possível. 

Use comentários para explicar o código. O que ele faz? Para o que serve? Por que a respectiva solução é usada e/ou foi escolhida? 

Ser objetivo nos comentários e não pecar por falta de explicação.

### 2.3.3. Itens de ação

Marcar *todos* e itens de ação com ```TODO```.

Realçar *todos* usando a palavra reservado ```TODO```.

Acrescentar um contato (username ou e-mail) em parênteses como o formato ```TODO(contact)```.

Acrescentar itens de ação depois de dois-pontos como ```TODO: item de ação```

```js
<!--TODO: revisar necessidade de condicional-->
if(logica) {
// implementação
}
```

## 3. HTML

### 3.1. Regras de estilo HTML

### 3.1.1. Tipo de documento

Usar HTML5.

HTML5 (sintaxe HTML) é preferível para todos os documentos HTML: 
```<!DOCTYPE html>```

Embora compatível com o HTML, não fechar elementos vazios.

```html
<!--Não recomendado-->
<br/>
```

```html
<!--Recomendado-->
<br>
```

### 3.1.2. Validação de HTML

Usar HTML válidos sempre que possível.

Usar código HTML válido, a menos que isso não seja possível devido a objetivos de desempenho.

Usar ferramentas como [W3C HTML validator](https://validator.w3.org/nu/) para testes.

O uso de HTML válido é um atributo de qualidade e uma base mensurável que contribui para o aprendizado sobre a especificação do HTML e restrições técnicas que garante o seu uso correto.

```html
<!-- Não recomendado -->
<title>Teste</title>
<article>Este é apenas um teste.
```

```html
<!-- Recomendado -->
<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<title>Teste</title>
</head>
<body>
	<section>
		<article>Este é apenas um teste.</article>
	</section>
</body>
```

### 3.1.3. Semântica

Usar HTML de acordo com seu propósito.

Usar elementos/tags seguindo a especificação para a qual foram criados. Por exemplo, usar elementos de cabeçalho para cabeçalhos, ```p``` para parágrafos e ```a``` para âncoras, etc.

Usando HTML de acordo com seu propósito é importante para acessibilidade, reuso e eficiência de código.

```html
<!-- Não recomendado -->
<div onclick="goToRecommendations();">Todas as recomendações</div>
```

```html
<!-- Recomendado -->
<a href="recommendations/">Todas as recomendações</a>
```

### 3.1.4. Multimedia Fallback

Fornecer conteúdos alternativos para multimídia.

Para conteúdos multimídia, como imagens, vídeos, objetos animados com canvas, certificar-se de oferecer alternativas de acesso. Para imagens isso significa usar *alternative text* ```(alt)``` e para vídeos, transcrição de áudios e legendas, caso disponível.

Prover conteúdos alternativo é importante por questões de acessibilidade: um usuário cego possui poucas chances de saber sobre o que é uma imagem sem o atríbuto ```alt```, e outros usuários podem não ter como entender conteúdos de vídeos e áudio caso não exista um fallback.

(Para imagens cujo atributo ```alt``` possa apresentar redundância ou imagens cujo propósito seja puramente decorativo, não usar texto alternativo, como ```alt=""```)

```html
<!-- Não recomendado -->
<img src="spreadsheet.png">
```

```html
<!-- Recomendado -->
<img src="spreadsheet.png" alt="Screenshot da planilha de orçamento">
```

### 3.1.5. Separação de interesse/preocupação (*Separation of Concerns*)

Separar estrutura(HTML) da apresentação(CSS) e do comportamento(JavaScript).

Manter estritamente estrutura (marcação), apresentação (estilo) e comportamento (script) separados e buscar manter a interação entre os três o mínimo possível.

Isto é, certificar-se que documentos e templates contenham apenas HTML e HTML que sirva solenimente para propósito estrutural. Mover tudo que diz respeito a apresentação em folhas de estilos e tudo que é comportamental em scripts. 

Separar estrutura da apresentação e do comportamento é importante por questões de manutenibilidade.

```html
<!-- Não recomendado -->
<!DOCTYPE html>
<html>
<head>
	<title>HTML sucks</title>
	<link rel="stylesheet" href="base.css" media="screen">
	<link rel="stylesheet" href="grid.css" media="screen">
	<link rel="stylesheet" href="print.css" media="print">
</head>
<body>
	<h1 style="font-size: 1em;">HTML sucks</h1>
	<p>I’ve read about this on a few sites but now I’m sure:</p>
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of my website without doing everything all over again!</center>
<body>
</html>
```

```html
<!-- Recomendado -->
<!DOCTYPE html>
<html>
<head>
	<title>My first CSS-only redesign</title>
	<link rel="stylesheet" href="default.css">
</head>
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually doing it: separating concerns and avoiding anything in the HTML of my website that is presentational.</p>
<p>It’s awesome!</p>
```

### 3.1.6. Atributos *type*

Não omitir atríbutos *type* para estilos e scripts.

O HTML5 assume o uso de ```text/css``` e ```text/javascript``` como padrão, portanto, seu uso não é mais necessário. Porém, para garantir e previsar incompatibilidades com browsers antigos, sempre usar o atríbuto.

```html
<!-- Não recomendado -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css">
```

```html
<!-- Recomendado -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css" type="text/css">
```

```html
<!-- Não recomendado -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"></script>
```

```html
<!-- Not recommended -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js" type="text/javascript"></script>
```

### 3.2. Regras de formatação HTML

### 3.2.1. Regras gerais de formatação

Usar uma nova linha para cada bloco, lista ou elemento de tabela, e indentar cada elemento filho.

Independentemente do estilo do elemento (como CSS permite que elementos assumam diferentes estilos com a propriedade ```display```), colocar todos os blocos, listas e elementos de tabela em uma nova linha.

Além disso, indentar os elementos caso eles sejam filhos de um elemento de bloco, lista ou tabela.

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
```

```html
<ul>
  <li>Moe
  <li>Larry
  <li>Curly
</ul>
```

```html
<table>
  <thead>
    <tr>
      <th scope="col">Income
      <th scope="col">Taxes
  <tbody>
    <tr>
      <td>$ 5.00
      <td>$ 4.50
</table>
```

### 3.2.2. Uso de aspas no HTML

Quando adicionar citações em valores de atributos, usar aspas duplas. 

Usar aspas duplas (```""```) em vez de apas simples (```''```) em valores de atributos.

```html
<!-- Não reomendado -->
<a class='btn btn-secondary'>Sign in</a>
```

```html
<!-- Recomendado -->
<a class="btn btn-secondary">Sign in</a>
```

## 4. CSS

### 4.1. Regras de estilo CSS

### 4.1.1. Validação de CSS

Usar CSS válido sempre que possível.

A menos que esteja lidando com bugs do validador de CSS ou sintaxe proprietárias, usar código CSS válido.

Usar ferramentas como o [W3C CSS validator](https://jigsaw.w3.org/css-validator/) para testes.

O uso de CSS válido é uma mensurável de qualidade que permite detectar código CSS que não esteja sendo usado e que pode ser removido, o que garante o seu uso correto. 

### 4.1.2. Nome de classes e IDs