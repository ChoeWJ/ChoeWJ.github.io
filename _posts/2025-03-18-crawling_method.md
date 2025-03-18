---
layout: single
title: "자식, 자손, 형제, 부모"
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

# 👑 HTML 구조 분석

## 🌟 자식과 자손

- ### `children()`
  - 직계 자식 요소만 반환
  - 즉, find로 찾은 태그의 바로 아래의 태그만 포함

```python
import requests

from bs4 import BeautifulSoup

url = "https://choewj.github.io/machine_learning/built_in_data_type/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# page__content 클래스를 가지는 <section> 태그의 자식 요소들만 순환
for child in soup.find('section', {"class": "page__content"}).children:
    print(child.get_text().strip())  # 텍스트 출력 후 공백 제거
```

출력 결과

    목차
    👑 사이킷런 내장데이터🍑 결과 분석<class ‘sklearn.utils._bunch.Bunch’>키값들🍑 주요 데이터셋 목록

    👑 사이킷런 내장데이터

    # 사이킷런 datasets 라이브러리에서 붓꽃(iris) 데이터 불러오기
    from sklearn.datasets import load_iris

    iris_df = load_iris()  # 붓꽃(iris)데이터 로드

    print(type(iris_df))  # 붓꽃(iris) 데이터 타입 출력
    print()  # 한 칸 띄우기
    print(f"붓꽃(iris)데이터 셋의 키:\n{iris_df.keys()}")  # 붓꽃(iris) 데이터 키값들 출력

    <중략>

- ### `descendants()`
  - 모든 자손 요소를 반환
  - 하위의 모든 태그를 포함

```python
import requests

from bs4 import BeautifulSoup

url = "https://choewj.github.io/machine_learning/built_in_data_type/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# page__content 클래스를 가지는 <section> 태그의 모든 자손 요소들을 순환
for child in soup.find('section', {"class": "page__content"}).descendants:
    print(child.get_text().strip())  # 텍스트 출력 후 공백 제거
```

출력 결과

    목차

    👑 사이킷런 내장데이터🍑 결과 분석<class ‘sklearn.utils.\_bunch.Bunch’>키값들🍑 주요 데이터셋 목록

    목차
    👑 사이킷런 내장데이터🍑 결과 분석<class ‘sklearn.utils._bunch.Bunch’>키값들🍑 주요 데이터셋 목록

    목차
    목차

    목차

    👑 사이킷런 내장데이터🍑 결과 분석<class ‘sklearn.utils._bunch.Bunch’>키값들🍑 주요 데이터셋 목록
    👑 사이킷런 내장데이터🍑 결과 분석<class ‘sklearn.utils._bunch.Bunch’>키값들🍑 주요 데이터셋 목록
    👑 사이킷런 내장데이터
    👑 사이킷런 내장데이터
    🍑 결과 분석<class ‘sklearn.utils._bunch.Bunch’>키값들🍑 주요 데이터셋 목록
    🍑 결과 분석<class ‘sklearn.utils._bunch.Bunch’>키값들
    🍑 결과 분석
    🍑 결과 분석
    <class ‘sklearn.utils._bunch.Bunch’>키값들
    <class ‘sklearn.utils._bunch.Bunch’>
    <class ‘sklearn.utils._bunch.Bunch’>
    <class ‘sklearn.utils._bunch.Bunch’>
    키값들
    키값들
    키값들
    🍑 주요 데이터셋 목록
    🍑 주요 데이터셋 목록
    🍑 주요 데이터셋 목록

    <중략>

## 🌟 형제

- ### `next_siblings()`
  - 자기 자신(객채)를 제외한 그 다음에 있는 형제들을 반환

```python
import requests

from bs4 import BeautifulSoup

url = "https://choewj.github.io/machine_learning/built_in_data_type/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# page__content 클래스를 가지는 <section> 태그의 모든 다음 형제 태그들을 순환
for child in soup.find('section', {"class": "page__content"}).next_siblings:
    print(child.get_text().strip())
```

출력 결과

    태그:

    Data,
    ML,
    python



     카테고리:

    machine_learning


     업데이트: 2025-03-18

    공유하기
     Twitter
     Facebook
     LinkedIn

    이전
    다음

- ### `previous_siblings()`
  - 자기 자신(객채)를 제외한 그 전에 있는 형제들을 반환

```python
import requests

from bs4 import BeautifulSoup

url = "https://choewj.github.io/machine_learning/built_in_data_type/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# page__content 클래스를 가지는 <section> 태그의 모든 이전 형제 태그들을 순환
for child in soup.find('section', {"class": "page__content"}).previous_siblings:
    print(child.get_text().strip())
```

출력 결과

    사이킷런의 내장데이터





    2025-03-18





              1 분 소요

## 🌟 부모

### `parent`

```python
import requests

from bs4 import BeautifulSoup

url = "https://choewj.github.io/machine_learning/built_in_data_type/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# <thead> 태그의 부모 태그의 이전 형제 태그를 찾아서 텍스트로 출력
print(soup.find("thead").parent.find_previous_sibling().get_text())

```

출력 결과

    🍑 주요 데이터셋 목록

```python
import requests

from bs4 import BeautifulSoup

url = "https://choewj.github.io/machine_learning/built_in_data_type/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# <thead> 태그의 부모 태그의 다음 형제 태그를 찾아서 텍스트로 출력
print(soup.find("thead").parent.find_next_sibling().get_text())
```

출력 결과

```
※ 보스턴 데이터 셋은 인종차별 논란으로 최근 사이킷런 데이터셋에서는 삭제됨
```
