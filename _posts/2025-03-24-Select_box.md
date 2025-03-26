---
layout: single
title: "[웹 크롤링] Selenium Select Box 컨트롤"
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

# 👑 Select Box 컨트롤

[공식문서 바로가기](https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.select.html){: .btn .btn--danger}

## 🏆 Select 클래스 주요 기능

| &#xBA85;&#xB839;                 | &#xC124;&#xBA85;                                                                                                                          |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `select_by_visible_text(text)`   | &#xC635;&#xC158;&#xC758; &#xD14D;&#xC2A4;&#xD2B8;&#xB85C; &#xC120;&#xD0DD;                                                                |
| `select_by_value(value)`         | `value` &#xC18D;&#xC131;&#xAC12;&#xC73C;&#xB85C; &#xC120;&#xD0DD;                                                                         |
| `select_by_index(index)`         | &#xC778;&#xB371;&#xC2A4;(0&#xBD80;&#xD130; &#xC2DC;&#xC791;)&#xB85C; &#xC120;&#xD0DD;                                                     |
| `deselect_all()`                 | &#xBAA8;&#xB4E0; &#xC120;&#xD0DD; &#xD574;&#xC81C; (&#xBA40;&#xD2F0; &#xC120;&#xD0DD; &#xAC00;&#xB2A5;&#xD560; &#xB54C; &#xC0AC;&#xC6A9;) |
| `deselect_by_index(index)`       | &#xD2B9;&#xC815; &#xC778;&#xB371;&#xC2A4;&#xC758; &#xC635;&#xC158; &#xC120;&#xD0DD; &#xD574;&#xC81C;                                      |
| `deselect_by_value(value)`       | &#xD2B9;&#xC815; `value`&#xC758; &#xC635;&#xC158; &#xC120;&#xD0DD; &#xD574;&#xC81C;                                                       |
| `deselect_by_visible_text(text)` | &#xD2B9;&#xC815; &#xD14D;&#xC2A4;&#xD2B8;&#xC758; &#xC635;&#xC158; &#xC120;&#xD0DD; &#xD574;&#xC81C;                                      |
| `options`                        | &#xBAA8;&#xB4E0; &#xC635;&#xC158; &#xBAA9;&#xB85D;&#xC744; &#xBC18;&#xD658; (`list`)                                                      |
| `all_selected_options`           | &#xD604;&#xC7AC; &#xC120;&#xD0DD;&#xB41C; &#xC635;&#xC158; &#xBC18;&#xD658; (`list`)                                                      |
| `first_selected_option`          | &#xCCAB; &#xBC88;&#xC9F8; &#xC120;&#xD0DD;&#xB41C; &#xC635;&#xC158; &#xBC18;&#xD658;                                                      |

## 🏆 주요 기능 활용

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

![스크린샷 2025-03-24 15.36.48]({{site.url}}/images/2025-03-24-Select_box/007.png)

```python
# 셀렉트박스 css선택자 가져온 뒤 select_box 변수에 저장
select_box = driver.find_element(By.CSS_SELECTOR, "#contentarea_left > form > fieldset > ul > li:nth-child(2) > select")
```

### 🍒 select_by_index(index)

```python
from selenium.webdriver.support.select import Select

# 인덱스로 선택
Select(select_box).select_by_index(1)
```

- 선택 다음 부터 인덱스는 숫자 1부터 시작

  ![스크린샷 2025-03-24 15.29.07]({{site.url}}/images/2025-03-24-Select_box/001.png)

  ![스크린샷 2025-03-24 15.34.18]({{site.url}}/images/2025-03-24-Select_box/004.png)

### 🍒 select_by_value(value)

```python
# value 값으로 선택
Select(select_box).select_by_value("38")
```

- <option> 태그에 붙어있는 value 값을 선택

  ![스크린샷 2025-03-24 15.33.09]({{site.url}}/images/2025-03-24-Select_box/002.png)

  ![스크린샷 2025-03-24 15.34.21]({{site.url}}/images/2025-03-24-Select_box/005.png)

### 🍒 select_by_visible_text(text)

```python
# 텍스트로 선택
Select(select_box).select_by_visible_text("키움증권")
```

- 텍스트를 그대로 입력 후 선택

  ![스크린샷 2025-03-24 15.33.30]({{site.url}}/images/2025-03-24-Select_box/003.png)

  ![스크린샷 2025-03-24 15.34.46]({{site.url}}/images/2025-03-24-Select_box/006.png)
