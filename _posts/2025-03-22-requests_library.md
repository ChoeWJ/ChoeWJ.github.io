---
layout: single
title: "requests 라이브러리"
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

# 👑 requests

## 🌟 설치

```sh
pip install requests
```

## 🌟 라이브러리 임포트

```python
import requests
```

## 🌟 GET 요청 (데이터 가져오기)

```python
url = "https://jsonplaceholder.typicode.com/posts/1"  # API 엔드포인트 설정
response = requests.get(url)  # GET 요청 보내기

print(f"상태 코드: {response.status_code}\n")  # HTTP 응답 상태 코드 출력 (200이면 성공)
print(f"응답 데이터: \n{response.text}\n")  # 응답 데이터를 문자열로 출력
print(response.json())  # JSON 형식의 응답 데이터를 파이썬 딕셔너리로 변환하여 출력
```

    상태 코드: 200

    응답 데이터:
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    {'userId': 1, 'id': 1, 'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'}

## 🌟 POST 요청 (데이터 전송)

```python
url = "https://jsonplaceholder.typicode.com/posts"  # 데이터 전송할 API 엔드포인트 설정
data = {"title": "Hello", "body": "World", "userId": 1}  # 전송할 데이터 정의

response = requests.post(url, json=data)  # POST 요청을 보내면서 JSON 데이터를 함께 전송

print(f"상태 코드: {response.status_code}\n")  # 응답 상태 코드 출력 (201이면 데이터 생성 성공)
print(response.json())  # 응답 데이터를 JSON 형태로 변환하여 출력
```

    상태 코드: 201

    {'title': 'Hello', 'body': 'World', 'userId': 1, 'id': 101}

## 🌟 headers 추가

- HTTP 요청에서 헤더(headers)는 클라이언트(브라우저, 앱 등)와 서버 간의 추가 정보를 전달하는 역할
- 웹사이트나 API는 요청을 보낸 기기의 정보(브라우저, 운영체제)를 확인하는데 일부 웹사이트는 특정 브라우저에서만 동작하거나, 봇 요청을 차단하기도 함
- 따라서 현재 내가 사용중인 추가 정보를 전달해서 차단을 방지하는 역할을 함
- 헤더정보는 사이트의 개발자 도구 (Ctrl + F12 or CMD + F12)의 Network > Headers

![스크린샷 2025-03-22 17.43.45]({{site.url}}/images/2025-03-22-requests_library/001.png)

![스크린샷 2025-03-22 17.44.18]({{site.url}}/images/2025-03-22-requests_library/002.png)

```python
headers = {
    "User-Agent": "Mozilla/5.0",  # 웹 브라우저 정보를 서버에 전달
    "Referer": "https://finance.naver.com/marketindex/"  # API 토큰을 사용한 인증
}
response = requests.get("https://finance.naver.com/marketindex/?tabSel=gold#tab_section", headers=headers)  # GET 요청과 함께 헤더 추가
print(response.status_code)  # 응답을 JSON 형식으로 출력
```

    200

## 🌟 파라미터 추가 (쿼리 스트링)

- 파라미터 정보가 너무 복잡할 때 쿼리스트링의 정보만 따로 파라미터 정보로 보내서 크롤링
- 개발자 도구 (Ctrl + F12 or CMD + F12)의 Network > Payload
- 상세 페이지와 같이 사이트 내부에 쿼리로 깊숙히 들어갈 때 생성되는 것이므로 모든 사이트에 존재하는 것은 아님

![스크린샷 2025-03-22 17.59.33]({{site.url}}/images/2025-03-22-requests_library/003.png)

```python
params = {
    "colName": "all",
    "isDetailSearch": "N",
    "searchGubun": "true",
    "sflag": 1,
    "fsearchMethod": "search",
    "isFDetailSearch": "N",
    "pageNumber": 1,
    "query": "양자컴퓨터"
}

response = requests.get("https://www.riss.kr/search/Search.do", params=params)
print(response.status_code)
```

    200

## 🌟 타임아웃 설정

```python
response = requests.get("https://httpbin.org/delay/5", timeout=3)  # 3초 안에 응답이 없으면 예외 발생
```

```sh
    ---------------------------------------------------------------------------

    TimeoutError                              Traceback (most recent call last)

    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/connectionpool.py:534, in HTTPConnectionPool._make_request(self, conn, method, url, body, headers, retries, timeout, chunked, response_conn, preload_content, decode_content, enforce_content_length)
        533 try:
    --> 534     response = conn.getresponse()
        535 except (BaseSSLError, OSError) as e:

    ==============================<중략>==============================

    TimeoutError: The read operation timed out

​
 The above exception was the direct cause of the following exception:

    ReadTimeoutError                          Traceback (most recent call last)

    File ~/Desktop/personal/lib/python3.12/site-packages/requests/adapters.py:667, in HTTPAdapter.send(self, request, stream, timeout, verify, cert, proxies)
        666 try:
    --> 667     resp = conn.urlopen(
        668         method=request.method,
        669         url=url,
        670         body=request.body,
        671         headers=request.headers,
        672         redirect=False,
        673         assert_same_host=False,
        674         preload_content=False,
        675         decode_content=False,
        676         retries=self.max_retries,
        677         timeout=timeout,
        678         chunked=chunked,
        679     )
        681 except (ProtocolError, OSError) as err:


    ==============================<중략>==============================

​
 During handling of the above exception, another exception occurred:

    ReadTimeout                               Traceback (most recent call last)

    Cell In[12], line 1
    ----> 1 response = requests.get("https://httpbin.org/delay/5", timeout=3)  # 3초 안에 응답이 없으면 예외 발생


    File ~/Desktop/personal/lib/python3.12/site-packages/requests/api.py:73, in get(url, params, **kwargs)
         62 def get(url, params=None, **kwargs):
         63     r"""Sends a GET request.
         64
         65     :param url: URL for the new :class:`Request` object.
       (...)     70     :rtype: requests.Response
         71     """
    ---> 73     return request("get", url, params=params, **kwargs)


    ==============================<중략>==============================


    ReadTimeout: HTTPSConnectionPool(host='httpbin.org', port=443): Read timed out. (read timeout=3)
```

## 🌟 타임아웃 설정 (예외 처리)

```python
try:
    response = requests.get("https://jsonplaceholder.typicode.com/posts/1", timeout=5)  # 5초 안에 응답이 없으면 예외 발생
    response.raise_for_status()  # HTTP 오류(400, 500 등)가 발생하면 예외를 발생시킴
    print(response.json())  # 정상 응답일 경우 데이터를 출력
except requests.exceptions.RequestException as e:  # 모든 예외를 처리
    print(f"Error: {e}")  # 오류 메시지 출력
```

    {'userId': 1, 'id': 1, 'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'}

## 🌟 세션 유지

```python
session = requests.Session()  # 세션 객체 생성 (쿠키 및 상태 유지)
session.get("https://httpbin.org/cookies/set/sessioncookie/123456")  # 쿠키 설정 요청 보내기
response = session.get("https://httpbin.org/cookies")  # 쿠키가 유지되는지 확인하는 요청 보내기
print(response.json())  # 응답 데이터 출력 (세션 쿠키 값 확인 가능)
```

    {'cookies': {'sessioncookie': '123456'}}
