---
layout: single
title: "Selenium Select Box 컨트롤"
categories: web_crawling
tag: [python, automation, web_crawling]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

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

```python
# 네이버 증권 리서치 사이트
driver.get("https://finance.naver.com/research/company_list.naver")
```

- 사이트 맨 아래에 있는 Select_Box

![스크린샷 2025-03-24 15.36.48](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-24-Select_box/스크린샷 2025-03-24 15.36.48.png)

```python
# 셀렉트박스 css선택자 가져온 뒤 select_box 변수에 저장
select_box = driver.find_element(By.CSS_SELECTOR, "#contentarea_left > form > fieldset > ul > li:nth-child(2) > select")
```

```python
from selenium.webdriver.support.select import Select

# 인덱스로 선택
Select(select_box).select_by_index(1)
```

- 선택 다음 부터 인덱스는 숫자 1부터 시작

  ![스크린샷 2025-03-24 15.29.07](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-24-Select_box/스크린샷 2025-03-24 15.29.07.png)

  ![스크린샷 2025-03-24 15.34.18](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-24-Select_box/스크린샷 2025-03-24 15.34.18.png)

```python
# value 값으로 선택
Select(select_box).select_by_value("38")
```

- <option> 태그에 붙어있는 value 값을 선택

  ![스크린샷 2025-03-24 15.33.09](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-24-Select_box/스크린샷 2025-03-24 15.33.09.png)

  ![스크린샷 2025-03-24 15.34.21](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-24-Select_box/스크린샷 2025-03-24 15.34.21.png)

```python
# 텍스트로 선택
Select(select_box).select_by_visible_text("키움증권")
```

- 텍스트를 그대로 입력 후 선택

  ![스크린샷 2025-03-24 15.33.30](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-24-Select_box/스크린샷 2025-03-24 15.33.30.png)

  ![스크린샷 2025-03-24 15.34.46](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-24-Select_box/스크린샷 2025-03-24 15.34.46.png)
