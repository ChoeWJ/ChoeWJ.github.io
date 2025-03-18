---
layout: single
title: "웹 크롤링 시작하기"
categories: web_crawling
tag: [python, automation, web_crawling]
author_profile: false
# sidebar:
#   nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 🏆 웹 크롤링 시작하기

## 🍋 필수 라이브러리 설치

`vscode 환경 기준`

```sh
pip install notebook ipyekrnel requests bs4 lxml selenium webdriver-manager scrapy pandas openpyxl
```

## 🍋 BeautifulSoup

### 🌼 사용 방법

```python
soup = BeautifulSoup(markup, parser, **kwargs)
```

- `markup`: HTML/XML 문자열
- `parser`: HTML/XML을 해석하는 파서
- `**kwargs`: 추가 옵션 (ex. from_encoding)

### 🌼 주요 메서드

- #### 🐯 find

  - 태그 검색
  - `find("p")`: 첫 번째 <p> 태그 찾기
  - `find_all("p")`: 모든 <p> 태그를 리스트로 반환

- #### 🐯 select

  - CSS 선택자로 검색
  - `select("p")`: 모든 <p> 태그 찾기
  - `select(".content")`: class="content"인 요소 찾기
  - `select("#second")`: id="second"인 요소 찾기
  - `select("head > title")`: 계층 구조로 검색

- #### 🐯 text

  - 텍스트 가져오기
  - `p.text`: 첫 번쨰 <p> 태그의 텍스트 내용
  - `p.get_text()`: 위와 동일

- #### 🐯 태그 속성 값 가져오기
  - `p["class"]`: class 속성 값 가져오기
  - `find(id="second")["id"]`: id 속성 값 가져오기

### 🌼 주요 옵션

- #### .text.strip()

  - HTML태그 제거 후 텍스트만 가져오고 앞뒤 공백 제거

- #### find_all(..., limit=3)

  - 처음 3개만 가져오기

- #### find(..., recursive=False)
  - 첫 번째 자식만 검색

```python
import requests  # requests 라이브러리

from urllib.request import urlopen  # 빠른 url 요청 라이브러리
from urllib.error import HTTPError, URLError  # error 캐치 라이브러리
from bs4 import BeautifulSoup  # BeautifulSoup 라이브러리
```

## 🍋 파서의 종류

| 종류 | `html.parser `           | `lxml`                                            | `html5lib`               |
| ---- | ------------------------ | ------------------------------------------------- | ------------------------ |
| 설명 | python 기본 파서         | 빠르고 강략한 XML/HTML 파서                       | HTML5 표준을 따르는 파서 |
| 장점 | 내장 라이브러리          | 가장 빠름, HTML/XML 모두 지원, 오류처리 능력 우수 | 가장 정확                |
| 단점 | 일부 HTML 처리 능력 약함 | 추가 설치 필요                                    | 가장 느림                |

### 🌼 html.parser

```python
url = 'https://ko.wikipedia.org/wiki/%EC%9B%B9_%ED%81%AC%EB%A1%A4%EB%9F%AC'  # 위키피디아 웹 크롤러 정보 사이트
response = requests.get(url)  # 웹 페이지 요청
soup = BeautifulSoup(response.text, 'html.parser')  # 텍스트 형식으로 출력

print(soup.title.text)  # <title> 태그를 텍스트로 출력
print((soup.find("h1").text))  # 첫 번째 <h1> 태그 내용을 출력
```

출력 결과

웹 크롤러 - 위키백과, 우리 모두의 백과사전<br>
웹 크롤러

### 🌼 lxml

```python
url = 'https://ko.wikipedia.org/wiki/%EC%9B%B9_%ED%81%AC%EB%A1%A4%EB%9F%AC'  # 위키피디아 웹 크롤러 정보 사이트
response = requests.get(url)  # 웹 페이지 요청
soup = BeautifulSoup(response.text, 'lxml')  # 텍스트 형식으로 출력

print(soup.title.text)  # <title> 태그를 텍스트로 출력
print((soup.find("h1").text))  # 첫 번째 <h1> 태그 내용을 출력
```

출력 결과

웹 크롤러 - 위키백과, 우리 모두의 백과사전<br>
웹 크롤러

### 🌼 html5lib

```python
url = 'https://ko.wikipedia.org/wiki/%EC%9B%B9_%ED%81%AC%EB%A1%A4%EB%9F%AC'  # 위키피디아 웹 크롤러 정보 사이트
response = requests.get(url)  # 웹 페이지 요청
soup = BeautifulSoup(response.text, 'html5lib')  # 텍스트 형식으로 출력

print(soup.title.text)  # <title> 태그를 텍스트로 출력
print((soup.find("h1").text))  # 첫 번째 <h1> 태그 내용을 출력
```

출력 결과

웹 크롤러 - 위키백과, 우리 모두의 백과사전<br>
웹 크롤러

### 🌼 예외 처리

- #### 🐯 HTTPError
  - 페이지를 찾을 수 없거나, URL 해석에서 에러가 발생한 경우
  - 서버를 찾을 수 없는 경우

```python
try:
    html = urlopen("https://ko.wikipedia.org/wiki/%EC%9B%B9_%ED%81%AC%EB%A1%A4%EB%9F%AC123")  # 에러 발생을 위해 맨 뒤에 123을 붙임
except HTTPError as e:
    print("The server returned an HTTP error")
```

출력 결과

The server returned an HTTP error

- #### 🐯 URLError
  - 서버가 다운되었을 때
  - URL에 오타가 있을떄

```python
try:
    html = urlopen("https:/ko.wikipedia.org/wiki/%EC%9B%B9_%ED%81%AC%EB%A1%A4%EB%9F%AC")  # 에러 발생을 위해 https:// 에서 / 하나를 뺌
except URLError as e:
    print("The server could not be found!")
```

출력 결과

The server could not be found!

- #### 🐯 AttributeError
  - 존재하지 않는 태그에 접근을 시도할 때

```python
try:
    bad_content = soup.non_exist.another
except AttributeError as e:
    print("Tag was not found")
else:
    if bad_content is None:
        print("Tag was not found")
    else:
        print(bad_content)
```

출력 결과

Tag was not found

### 🌼 예외 처리 함수 생성

```python
def get_error(url):
    try:
        response = requests.get(url)  # 웹 페이지 요청
    except HTTPError as e:
        return None  # 오류 발생 시 None 반환
    except URLError as e:
        return None  # 오류 발생 시 None 반환
    try:
        soup = BeautifulSoup(response.text, 'html.parser')  # HTML 파싱
        title = soup.find("h1")  # 페이지 내 첫 번째 <h1> 태그 탐색
    except AttributeError as e:
        return None  # 오류 발생 시 None 반환
    return title


title = get_error("https://ko.wikipedia.org/wiki/%EC%9B%B9_%ED%81%AC%EB%A1%A4%EB%9F%AC")  # get_error 함수 실행
if title is None:
    print("Title could not be found")  # 제목을 찾을 수 없는 경우 에러 메세지 출력
else:
    print(title.get_text())  # 제목을 찾아서 텍스트 출력
```

출력 결과

웹 크롤러
