---
layout: single
title: "[프론트엔드 개발] CSS 선택자와 스타일링"
categories:
  - docs
  - FSDE
  - Front
tag: [CSS, Web Development]
author_profile: false
sidebar:
  nav: "counts"
use_math: true
---

# 🏆 CSS 선택자와 스타일링

## 📌 CSS 선택자란?

- CSS 선택자는 스타일을 적용할 HTML 요소를 지정하는 방법으로, <font color="tomato">id와 class</font>는 가장 자주 사용되는 선택자로, 특정 요소나 요소 그룹에 스타일을 적용할 때 유용하다.

- id 선택자:

  ```django
  <h1 id="main-title">메인 제목</h1>
  <style>
    #main-title {
      color: #2c3e50;
      font-size: 36px;
    }
  </style>
  ```

- #main-title은 id="main-title"인 요소에 스타일을 적용

- class 선택자:
  - 여러 요소에 동일한 스타일을 적용할 때 사용
  ```django
  <p class="highlight">첫 번째 문단</p>
  <p class="highlight">두 번째 문단</p>
  <style>
    .highlight {
      background-color: #f1c40f;
      padding: 10px;
    }
  </style>
  ```
  - .highlight는 class="highlight"인 모든 요소에 스타일을 적용

### 📌 주요 CSS 속성

CSS 속성은 선택된 요소의 스타일을 정의 여기서는 자주 사용되는 color와 margin 속성을 살펴보겠습니다.

- color 속성:

  - 텍스트 색상을 지정

  ```css
  p {
    color: #34495e; /* 16진수 색상 코드 */
  }
  ```

  색상은 16진수 코드, RGB, 색상 이름(예: red) 등으로 지정할 수 있습니다.

- margin 속성:
  - 요소 외부 여백을 지정
  ```css
  div {
    margin: 20px; /* 모든 방향에 20px 여백 */
    margin: 10px 20px; /* 상하 10px, 좌우 20px */
    margin: 10px 20px 30px 40px; /* 상 우 하 좌 */
  }
  ```

### 📌 선택자 조합과 우선순위

CSS 선택자를 조합하면 더 구체적으로 요소를 선택할 수 있습니다.

- 하위 선택자:

  ```django
  <div class="container">
    <p>이 문단에 스타일 적용</p>
  </div>
  <style>
    .container p {
      color: #e74c3c;
    }
  </style>
  ```

  - .container 안에 있는 p 태그에 스타일을 적용

- 우선순위(Specificity):
  CSS는 선택자의 구체성에 따라 우선순위를 결정
  - id > class > 태그
  ```django
  <p id="special" class="highlight">특별한 문단</p>
  <style>
    p {
      color: black;
    }
    .highlight {
      color: blue;
    }
    #special {
      color: red;
    }
  </style>
  ```
  - 위 예시에서 #special이 가장 구체적이므로 텍스트 색상은 red가 된다.

## 🎨 실습: 간단한 웹 페이지 스타일링

### 📝 HTML과 CSS 준비

```django
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>스타일링 실습</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #ecf0f1;
      }
      #header {
        text-align: center;
        margin-bottom: 20px;
      }
      .card {
        background-color: white;
        padding: 15px;
        margin: 10px 0;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .card h2 {
        color: #2c3e50;
        margin-top: 0;
      }
      .highlight-text {
        color: #e74c3c;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <header id="header">
      <h1>나의 웹 페이지</h1>
    </header>
    <div class="card">
      <h2>카드 1</h2>
      <p>
        이것은 첫 번째 카드입니다.
        <span class="highlight-text">중요한 부분</span>을 강조했습니다.
      </p>
    </div>
    <div class="card">
      <h2>카드 2</h2>
      <p>이것은 두 번째 카드입니다. 깔끔한 디자인을 적용했습니다.</p>
    </div>
  </body>
</html>
```

### 📝 실행 및 테스트

1. 위 코드를 index.html 파일로 저장
2. 브라우저에서 열어 결과를 확인
3. id와 class 선택자가 올바르게 적용되었는지, color와 margin 속성이 잘 작동하는지 확인
