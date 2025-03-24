---
layout: single
title: "Selenium으로 브라우저 조작하기"
categories:
  - docs
  - Web_Crawling
  - Selenium
tag: [python, automation, web_crawling, Selenium]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 👑 브라우저 조작하기

## 🍄 라이브러리 불러오기

```python
# Selenium 라이브러리에서 웹드라이버 관련 모듈 불러오기
from selenium import webdriver

# ChromeDriver 실행을 관리하는 Service 클래스 불러오기
from selenium.webdriver.chrome.service import Service

# Chrome 실행 옵션을 설정하기 위한 Options 클래스 불러오기
from selenium.webdriver.chrome.options import Options

# ChromeDriver를 자동으로 다운로드 및 설치하는 라이브러리
from webdriver_manager.chrome import ChromeDriverManager
```

## 🍄 크롬 설정

```python
# Chrome 옵션 객체 생성
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)  # 브라우저가 자동으로 닫히지 않도록 설정
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])  # 불필요한 로그 제거

# ChromeDriver 실행 (자동 다운로드 및 설정)
service = Service(ChromeDriverManager().install())  # ChromeDriver 자동 설치 및 실행
driver = webdriver.Chrome(service=service, options=chrome_options)  # 웹드라이버 실행
```

### 🍋 크롬 웹드라이버 실행하는 경우 (webdriver.Chrome(...))

- 개념:

  - 크롬 웹드라이버는 Selenium이 크롬 브라우저를 자동으로 제어할 수 있도록 도와주는 프로그램입니다.
  - 즉, webdriver.Chrome()을 실행하면 브라우저를 직접 띄우고 자동으로 조작할 수 있는 환경이 생성됩니다.

- 실행하면 할 수 있는 것:
  - 웹사이트 자동화 (로그인, 클릭, 폼 입력 등)
  - 특정 페이지의 HTML 데이터 가져오기 (driver.page_source)
  - 동적 페이지(자바스크립트 기반)에서 데이터를 크롤링
  - 브라우저 조작 (스크롤, 마우스 이동, 키보드 입력 등)

### 🍋 크롬 웹드라이버 실행하지 않는 경우 (Selenium 없이)

- 개념:

  - 웹드라이버를 실행하지 않으면 브라우저를 직접 자동 조작할 수 없음.
  - 일반적으로 requests나 BeautifulSoup 같은 라이브러리로 정적인 HTML만 가져올 수 있습니다.

- 실행하지 않으면 할 수 없는 것:

  - 자바스크립트 실행이 필요한 데이터 크롤링 불가능
  - 예: AJAX 로딩되는 페이지, 무한 스크롤, 로그인 등이 포함된 웹사이트
  - 자동화 작업 불가능
  - 예: 버튼 클릭, 입력 필드 작성, 파일 업로드 등

- 대신 할 수 있는 것 (정적 웹페이지 대상):
  - requests와 BeautifulSoup으로 HTML 파싱하여 데이터 추출

## 🍄 원하는 페이지로 이동

```python
driver.get("https://www.google.com/")  # 구글 사이트로 이동
```

## 🍄 조작 하기

```python
# 원하는 페이지로 이동
driver.get("https://www.google.com/")
```

```python
# 뒤로 가기
driver.back()
```

```python
# 앞으로 가기
driver.forward()
```

```python
# 새로고침
driver.refresh()
```

```python
# 현재 URL
driver.current_url
```

'https://www.google.com/'

```python
# 페이지 제목
driver.title
```

'Google'

```python
# 최대화
driver.maximize_window()
```

```python
# 최소화
driver.minimize_window()
```

```python
# 현재 창 닫기
driver.close()
```

```python
# 모든 창을 닫고 웹드라이버 세션 종료
driver.quit()
```

```python
# 현재 열려있는 창(탭) 확인
driver.window_handles
```

```python
# 새 창으로 전환
driver.switch_to.window(driver.window_handles[2])
```

⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩<출력결과>⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
{: .text-center}

```plaintext
['3EA4EB5EE5BFAAE23054422AB1E344A5',
 'D61C6B48456D41E679F6F0C556E526E0',
 'A22E3AD1A46E2EA49548C6F2154CC3AC']
```

```python
# 프레임 전환
iframe = driver.find_element(By.CSS_SELECTOR, "CSS_SELECTOR")
driver.switch_to.frame(iframe)
```

```python
# 프레임 다시 전환
driver.switch_to.default_content()
```
