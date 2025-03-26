---
layout: single
title: "[웹 크롤링] Selenium 입력 컨트롤"
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

# 👑 Selenium 입력 컨트롤

[더 많은 컨트롤 알아보기](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.keys.html){: .btn .btn--danger} ☜☜☜ 클릭!!!

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

driver.get("https://www.naver.com")
```

💥 주의!!! <span style="color: red;">맥OS 기준</span>입니다. Window는 **Keys.COMMAND** 대신 <span style="color: red;">**Keys.CONTROL**</span> 💥
{: .text-center}
{: .notice--danger}

```python
# 태그 찾기
search = driver.find_element(By.CSS_SELECTOR, "#query")

# 문자 입력
search.send_keys('맥북')
```

```python
# 전체 선택
search.send_keys(Keys.COMMAND, 'a')
```

```python
# 선택한 텍스트 복사
search.send_keys(Keys.COMMAND, 'c')
```

```python
# 복사한 텍스트 붙여넣기
search.send_keys(Keys.COMMAND, 'v')
```

```python
# 입력 삭제
search.clear()
```

```python
# 텍스트 입력 후 엔터 클릭
search.send_keys('맥북', Keys.ENTER)
```

```python
# 텍스트 입력 후 텝키 클릭 및 두 번째 텍스트 입력
search.send_keys('검색어', Keys.TAB, '검색어2')
```
