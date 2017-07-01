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