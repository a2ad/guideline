# Guideline

[![Release](https://img.shields.io/badge/release-v1.0.0-blue.svg?style=flat-square)]()
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg?style=flat-square)]()
[![Made with love](https://img.shields.io/badge/made%20with-%E2%99%A5-red.svg?style=flat-square)]()
[![A2ad](https://img.shields.io/badge/A2-ad-orange.svg?style=flat-square)](a2ad.com.br)

⚡️ Guia de orientação de estilo de escrita de código da equipe de front-end da A2ad.

## 1. Motivação

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

Usar nomes significativos para classes e IDs.

Usar sempre nomes que refletem a finalidade do elemento em questão, ou que sejam genéricos.

Nomes que são específicos e que refletem a finalidade do elemento devem ser preferidos, pois estes são mais compreensíveis e menos propensos a mudar.

Nomes genéricos são simplesmente um fallback para elementos que não têm nenhum significado particular. Eles são geralmente necessários como "ajudantes".

O uso de nomes funcionais ou genéricos reduz a probabilidade de documentos desnecessários e mudanças de templates.

```css
/* Não recomendado: sem significado */
#yee-1901 {}

/* Não recomendado: apresentação */
.button-green {}
.clear {}
```

```css
/* Recomendado: específico */
#gallery {}
#login {}
.video {}

/* Recomendado: genérico */
.aux {}
.alt {}
```

### 4.1.3. Estilo de nome de classes e IDs

Usar nomes para classes e id's que sejam o mais curtos possível e tão longos quanto necessário.

Tentar transmitir o que é a classe ou id, sendo tão breve quanto possível.

O uso de classes e id's dessa forma contribui para níveis aceitáveis de compreensão e eficiência de código.

```css
/* Não recomendado */
#navigation {}
.atr {}
```

```css
/* Recomendado */
#nav {}
.author {}
```

### 4.1.4. Seletores de tipo (*Type Selectors*)

Evitar qualificar id's e classes com seletores de tipos.

A menos que seja necessário (por exemplo, com classes helpers), não usar nomes de elementos em conjunto com id's e classes.

Evitar seletores antecessores desnecessários é útil por [motivos de desempenho](http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/).

```css
/* Não recomendado */
ul#example {}
div.error {}
```

```css
/* Recomendado */
#example {}
.error {}
```

### 4.1.5. Propriedades shorthand

Evitar usar propriedades *shorthand*.

O CSS oferece uma variedade de propriedades *shorthand* (como ```font```) que podem ser usados. Porém, evitá-los é útil para aumentar a compreensão de todas as partes do código.

```css
/* Não recomendado */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

```css
/* Recomendado */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

### 4.1.6. 0 e unidades

Omitir especificação de unidade após valores "0", a menos que seja requerido.

Não usar unidades após valores ```0``` a menos que seja obrigatório.

```css
flex: 0px; /* This flex-basis component requires a unit. */
flex: 1 1 0px; /* Not ambiguous without the unit, but needed in IE11. */
margin: 0;
padding: 0;
```

### 4.1.8. Notação Hexadecimal

Usar 3 caracteres da notação hexadecimais onde possível. 

Para valores de cores que permitem isso, 3 caracteres é curto e mais suscinto.

```css
/* Não recomendado */
color: #eebbcc;
```

```css
/* Recomendado */
color: #ebc;
```

### 4.1.9. Delimitadores de nomes de classes e id's

Separar palavras por um hífen em nome de ID's ou classes.

```css
/* Não recomendado: não separa as palavas “demo” e “image” */
.demoimage {}

/* Não recomendado: usa underline no lugar de hífen*/
.error_status {}
```

```css
/* Recomendado */
#video-id {}
.news-itens{}
```

### 4.1.10. *Hacks*

Evite o uso de meios de detecção do agente do usuário, bem como a utilização de *Hacks* CSS - tente uma abordagem diferente antes.

Ambas as abordagens devem ser consideradas em último recurso para alcançar e manter uma base de código eficiente e gerenciável. Usar detecção e hacks, é uma poderá prejudicar projetos a longo prazo

### 4.2. Regras de formatação CSS

### 4.2.1. Ordem de declaração

Declarações em orderm alfabética.

Colocar as declarações em ordem alfabética para conseguir um código consistente e de forma fácil de lembrar e manter.

Ignorar os prefixos específicos para fins de ordenação. Porém, vários prefix para uma determinada propriedade CSS devem ser mantidos ordenadamente na order alfabética (exemplo: -moz vem antes de -webkit).

```css
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

### 4.2.2. Indentação de conteúdos de bloco

Indentar todos os conteúdos de bloco, isto é, regras dentro das regras, bem como declarações, para refletir a hierarquia e melhorar a compreensão.

```css
@media screen {

  html {
    background: #fff;
    color: #444;
  }

}
```

### 4.2.3. Fim de declarações

Usar ponto e vírgula após cada declaração.

Terminar cada declaração com um ponto e vírgula por motivos de consistência e extensibilidade.

```css
* Não recomendado */
.test {
  display: block;
  height: 100px
}
```

```css
/* Recomendado */
.test {
  display: block;
  height: 100px;
}
```

### 4.2.4. Fim de nome de propriedades

Usar um espaço após os dois pontos que procede o nome de uma propriedade.

Sempre usar um única espaço entre a própriedade e seu valor (mas não espaço entre a propriedade e os dois pontos) por motivos de consistência.

```css
/* Não recomendado */
h3 {
  font-weight:bold;
}
```

```css
/* Recomendado */
h3 {
  font-weight: bold;
}
```

### 4.2.5. Separação do bloco de declaração

Usar um espaço entre os último seletor e o bloco de declaração.

Sempre usar um único espaço entre o último seletor e a chave de abertura do bloco de declaração.

```css
/* Não recomendado: espaço faltando */
.video{
  margin-top: 1em;
}

/* Não recomendado: Quebra de linha desnecessária */
.video
{
  margin-top: 1em;
}
``` 

```css
/* Recomendado */
.video {
  margin-top: 1em;
}
```

### 4.2.6. Seletor e separação da declaração

Separar seletores e declarações por uma nova linha.

Sempre começar uma nova linha para seletores e declarações.

```css
/* Não recomendado */
a:focus, a:active {
  position: relative; top: 1px;
}
```

```css
/* Recomendado */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

### 4.2.7. Separação de regras

Separar regras de declaração por uma nova linha.

Sempre colocar uma linha em branco (duas quebras de linhas) entre regras de declaração.

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

### 4.2.8. Uso de aspas no CSS

Usar aspas simples para seletores de atributos e valor de propriedades.

Usar aspas simples (```''```) em vez de aspas duplas (```""```) para seletores de atributos e valor de propriedades. Não usar aspas em valores de urls ( ```url()``` ).

```css
/* Não recomendado */
@import url("https://www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}
```

```css
/* Recomendado */
@import url(https://www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}
```

### 4.3. Regras de meta dados do CSS

### 4.3.1. Comentários da seção

Agrupar seções por um comentário de seção.

```css
/* Header */

#adw-header {}

/* Footer */

#adw-footer {}

/* Gallery */

.adw-gallery {}
```

## Palavras finais

Seja consistente.

Se você estiver editando algum código, tire alguns minutos para observar o código ao seu redor e determinar o estilo do que você irá escrever de acordo com o que já está definido.

O ponto de manter um guia de estilo é ter um vocabulário comum de codificação para que as pessoas possam se concentar no que você está dizendo e não em como você está dizendo. Se o código que você está escrevendo parece diferente do que já está implementado, reavalie a forma como você está conduzindo o desenvolvimento e apoisse em um padrão. Ao mesmo tempo, seja curioso para tentar entender porque certa decisão foi tomada e se há formas de otimizá-la.

