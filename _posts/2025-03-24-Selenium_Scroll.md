---
layout: single
title: "Selenium 스크롤 조작"
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

# 👑 동적페이지 스크롤 조작

## 💥 라이브러리 임포트

```python
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

# 크롬 옵션 설정
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)  # 브라우저 창 유지
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

# ChromeDriver 실행
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# 네이버 스토어
driver.get("https://shopping.naver.com/ns/home")
```

## 💥 스크롤 다운

### 🍔 return document.body.scrollHeight

```python
# 현재 스크롤 위치 확인
driver.execute_script("return document.body.scrollHeight")
```

### 🍔 scrollTo

```python
# 맨 위에서 정해놓은 위치로 스크롤
driver.execute_script("window.scrollTo(0, 2000)")
```

### 🍔 scrollBy

```python
# 현재 위치에서 입력한 위치만큼 스크룰
driver.execute_script("window.scrollBy(0, 2000)")
```

### 🍔 마지막까지 스크롤

```python
# 스크롤 전 높이
last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    # 스크롤 끝까지 내리기
    driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
    time.sleep(1)

    # 스크롤 후 높이
    new_height = driver.execute_script("return document.body.scrollHeight")
    # 비교 (if, break)
    if new_height == last_height:
        break
    # 스크롤 전 높이 업데이트
    last_height = new_height
```
