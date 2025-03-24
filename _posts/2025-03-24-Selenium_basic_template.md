---
layout: single
title: "Selenium 기본 사용 템플릿"
categories:
  - docs
  - Web_Crawling
  - Selenium
tag: [python, automation, web_crawling]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 👑 기본 설정

## 🎖️ 라이브러리 불러오기

```python
# 시간 관련 기능을 제공하는 표준 라이브러리 (대기 시간 설정 등에 사용)
import time

# HTTP 요청을 보내는 라이브러리 (웹페이지의 HTML 데이터를 가져올 때 사용)
import requests

# HTML을 파싱(분석)하는 라이브러리 (BeautifulSoup 객체를 사용하여 HTML 데이터를 다룰 수 있음)
from bs4 import BeautifulSoup

# Selenium 웹드라이버를 사용하기 위한 기본 모듈 (웹 브라우저를 자동화하는 데 사용)
from selenium import webdriver

# Selenium에서 ChromeDriver 실행을 위한 서비스 모듈
from selenium.webdriver.chrome.service import Service

# Chrome 브라우저 실행 옵션을 설정하는 모듈
from selenium.webdriver.chrome.options import Options

# ChromeDriver를 자동으로 설치하고 관리하는 모듈 (웹드라이버의 버전을 자동으로 맞춰줌)
from webdriver_manager.chrome import ChromeDriverManager

# Selenium에서 HTML 요소를 찾을 때 사용하는 모듈 (예: 태그, 클래스, ID 등으로 요소 찾기)
from selenium.webdriver.common.by import By

# Selenium에서 키보드 입력을 조작하는 모듈 (예: 엔터키 입력, 텍스트 입력 등)
from selenium.webdriver.common.keys import Keys
```

## 🎖️ 네이버에서 활용하는 방법

```python
# 크롬 옵션 설정
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)  # 브라우저 창 유지
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

# ChromeDriver 실행
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# 구글 접속
driver.get("https://www.naver.com")

# 검색창 요소 찾기
search_box = driver.find_element(By.CSS_SELECTOR, "#query")

# 검색어 입력 후 엔터 키 입력
search_box.send_keys("Python Selenium")
search_box.send_keys(Keys.ENTER)

# 페이지가 로딩될 시간을 기다림
time.sleep(2)

# 검색 결과의 첫 줄 가져오기
search_results = driver.find_elements(By.CSS_SELECTOR, "div.title_area > a")

# 결과 출력
for result in search_results[:5]:  # 상위 5개만 출력
    print(result.text)

# 브라우저 종료
driver.quit()
```

⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩<출력결과>⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
{: .text-center}
💢주의! 2025-03-24 기준으로 출력 결과가 다를 수 있음💢
{: .text-center}
{: .notice--danger}

```sh
[python] Selenium - implicitly wait 과 explicitly wait 이해<br>
[자동화/Selenium] Python Selenium 설치 가이드<br>
[파이썬 코딩 독학] Python Selenium(셀레니움) 네이버 자동 로그인하기<br>
[크롤링] 인스타그램 좋아요 누른 사람 목록 추출하기 (Python, Selenium)<br>
python Selenium으로 구현 가능한 기능인지 궁금합니다.
```
