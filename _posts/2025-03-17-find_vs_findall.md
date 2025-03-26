---
layout: single
title: "[웹 크롤링] find() vs find_all()"
categories:
  - docs
  - Web_Crawling
  - BeautifulSoup
tag: [python, automation, web_crawling]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 👑 find() vs find_all()

```python
find(tag, attrs, recursive, text, **kwargs)
find_all(tag, attrs, recursive, text, `limit`, **kwargs)
```

### 🌟 매개변수

- `tag`
  - 태그 이름인 **문자열**, **리스트**, **딕셔너리**를 넘긴다
  - 사용 예시
    ```python
    # <h1> ~ <h6> 태그를 모두 탐색
    soup.find_all({'h1', 'h2', 'h3', 'h4', 'h5', 'h6'})
    ```
- `attrs`
  - 속성으로 이루어진 파이썬 **딕셔너리**를 받고, 그중 하나에 일치하는 태그를 탐색
  - 사용 예시
    ```python
    # class가 green 또는 red인 모든 span 태그를 반환
    soup.find_all('span', {class: {'green', 'red'}})
    ```
- `recursive`

  - 문서에 얼마나 깊이 찾아 들어가고 싶은지 지정하는 boolean (True / False)
  - defalut=True, 매개변수에 일치하는 태그를 찾아 자식, 자식의 자식을 탐색
  - False일 경우 문서의 최상위 태그만 탐색
  - 사용 예시

    ```python
    # 페이지 crawling이라는 단어를 모두 탐색
    name = soup.find_all(text="crawling", recursive=True)

    # crawling이라는 단어가 몇 번 등장 했는지 출력
    print(len(name))
    ```

- `limit`
  - 처음 몇 개의 항목만을 순서대로 찾아 나가려고 할 때 사용
  - find*all에서만 사용되는 매개변수 *(find는 limit을 1로 지정한 것과 동일)\_
- `**kwargs`
  - 이름이 지정된 값을 추가로 전달될 때 사용
  - 사용 예시
    ```python
    # class="text"이고, id="title"인 태그를 탐색
    name = soup.find_all(id="title", class_="text")
    ```
    {: .notice--danger}
  - <div class="notice--danger"> 
    <h4 style="color: red;">**kwargs 사용시 주의사항</h4>
    <ul>
        <li>class속성으로 요소를 검색할 때 간혹 오류를 일으키는데</li>
        <li>class는 파이썬의 예약 언어 이므로 변수나 매개변수로 사용할 수 없다.</li>
        <li>따라서 class가 아닌 _(언더바)를 붙여서 class_로 사용해 해결한다.</li>
    </ul>
    </div>
