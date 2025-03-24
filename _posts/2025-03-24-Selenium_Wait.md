---
layout: single
title: "Implicit Wait vs Explicit Wait"
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

# 👑 암시적 대기 vs 명시적 대기

## 🍑 기본 설정

[라이브러리 자세히 알아보기](https://choewj.github.io/web_crawling/Selenium_basic_template/){: .btn .btn--danger} ☜☜☜ 사용된 라이브러리가 궁금하다면!!!

```python
import time
import requests

from bs4 import BeautifulSoup
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
```

## 🍑 암시적 대기 - Implicitly_wait()

- 개념
  - 전체 웹드라이버에 대한 대기 시간을 설정
  - 웹드라이버가 요소를 찾을 때 설정한 최대 시간까지 기다린 후 요소를 찾지 못하면 NoSuchElementException을 발생시킴.
  - 한 번 설정하면 전체 코드 실행 동안 지속됨.

```python
from selenium import webdriver


driver.get("https://www.naver.com")

# 암시적 대기 설정 (최대 3초까지 요소를 기다림)
driver.implicitly_wait(3)

search = driver.find_element(By.CSS_SELECTOR, "#query")

search.send_keys("python", Keys.ENTER)

time.sleep(3)

driver.quit()
```

- 설명

  - driver.implicitly_wait(10)을 설정하면 모든 요소 탐색(find_element)에서 최대 10초까지 기다림.
  - 만약 요소가 3초 만에 나타나면 바로 실행됨 (10초를 꼭 기다리는 것이 아님).

- 장점

  - 한 번만 설정하면 모든 요소에 적용되므로 코드가 간결해짐
  - 빠르게 로드되는 경우 즉시 실행되어 불필요한 대기 시간을 줄일 수 있음

- 단점

  - 특정 요소에 대해 다른 대기 시간을 설정할 수 없음
  - AJAX와 같이 동적으로 변경되는 요소에 대해 충분히 기다리지 못할 수 있음

## 🍑 명시적 대기 - Explicit Wait

- 개념
  - 특정 요소가 특정 조건을 만족할 때까지 명시적으로 기다리는 방식.
  - WebDriverWait과 expected_conditions을 사용하여 지정된 요소가 나타날 때까지 기다림.
  - 요소마다 다른 대기 시간을 설정 가능.

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("https://www.naver.com")

# 최대 10초 동안 특정 요소가 나타날 때까지 기다림
wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "#query")))
element
```

⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩<출력결과>⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
{: .text-center}

```plaintext
<selenium.webdriver.remote.webelement.WebElement(session="f34f68bde5edde6f3546297ab95c3dba", element="f1F3E64D92559F3A430A96857E4361083.d.72928D7A11B4CABA73ED1BDBEF1CE36F.e.6")>
```

- 설명

  - WebDriverWait(driver, 10)을 사용해 최대 10초 동안 특정 요소가 나타날 때까지 기다림.
  - EC.presence_of_element_located((By.ID, "myElement")) → 요소가 존재하는지 확인.
  - 요소가 나타나면 즉시 실행되며, 10초 동안 나타나지 않으면 TimeoutException이 발생.

- 장점

  - 요소마다 개별적으로 대기 시간 설정 가능
  - 여러 가지 조건(visibility, clickable 등)에 따라 기다릴 수 있음
  - AJAX 요청으로 동적으로 변경되는 요소에도 적합

- 단점

  - 코드가 약간 길어질 수 있음
  - 모든 요소에 대해 반복적으로 설정해야 함

## 🍑 차이점 정리

| 비교      | 암시적 대기(Implicit Wait)        | 명시적 대기(Explicit Wait)                   |
| --------- | --------------------------------- | -------------------------------------------- |
| 적용 대상 | 모든 find_element 호출에 적용됨   | 특정 요소에만 적용됨                         |
| 설정 방법 | driver.implicitly_wait(`시간`)    | WebDriverWait(driver, `시간`).until(`조건`)  |
| 대기 조건 | 요소가 DOM에 나타나는 것만 기다림 | 다양한 조건 (존재, 클릭 가능, 보이기등) 가능 |
| 예외 발생 | NoSuchElementException            | TimeoutException                             |
