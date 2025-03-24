---
layout: single
title: "자동 입력 방지 우회하기"
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

# 👑 자동 입력 방지 사이트 우회하기 (네이버)

## 🌞 라이브러리 임포트

```python
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# 크롬 옵션 설정
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)  # 브라우저 창 유지
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

# ChromeDriver 실행
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# 네이버 로그인 창
driver.get("https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/")
```

## 🌞 pyperclip 설치

터미널에서...

```sh
pip install pypyerclip
```

## 🌞 pyperclip 사용하기

```python
# 텍스트 데이터를 복사하거나 가져오는 라이브러리 불러오기
import pyperclip
```

```python
user_id = "NAVER_ID"  # 네이버 아이디
user_pw = "NAVER_PASSWORD"  # 네이버 비밀번호
```

```python
# ID 입력 필드 찾기
id = driver.find_element(By.CSS_SELECTOR, "#id")

# 클립보드에 사용자 ID 복사
pyperclip.copy(user_id)

# ID 입력 필드에 붙여넣기 (Mac: COMMAND + V / Windows: CONTROL + V)
id.send_keys(Keys.COMMAND, 'v')

# 2초 대기 (입력이 정상적으로 이루어지도록 딜레이)
time.sleep(2)

# 비밀번호 입력 필드 찾기
pw = driver.find_element(By.CSS_SELECTOR, "#pw")

# 클립보드에 사용자 비밀번호 복사
pyperclip.copy(user_pw)

# 비밀번호 입력 필드에 붙여넣기 (Mac: COMMAND + V / Windows: CONTROL + V)
pw.send_keys(Keys.COMMAND, 'v')

# 2초 대기 (입력이 정상적으로 이루어지도록 딜레이)
time.sleep(2)

# 로그인 버튼 클릭
driver.find_element(By.CSS_SELECTOR, "#log\\.login").click()
```
