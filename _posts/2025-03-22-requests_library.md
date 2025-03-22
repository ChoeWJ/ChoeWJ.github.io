# requests 라이브러리

## 1. 설치
```sh
pip install requests
```



## 2. 라이브러리 임포트


```python
import requests
```



## 2. GET 요청 (데이터 가져오기)


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



## 3. POST 요청 (데이터 전송)


```python
url = "https://jsonplaceholder.typicode.com/posts"  # 데이터 전송할 API 엔드포인트 설정
data = {"title": "Hello", "body": "World", "userId": 1}  # 전송할 데이터 정의

response = requests.post(url, json=data)  # POST 요청을 보내면서 JSON 데이터를 함께 전송

print(f"상태 코드: {response.status_code}\n")  # 응답 상태 코드 출력 (201이면 데이터 생성 성공)
print(response.json())  # 응답 데이터를 JSON 형태로 변환하여 출력
```

    상태 코드: 201
    
    {'title': 'Hello', 'body': 'World', 'userId': 1, 'id': 101}



## 4. headers 추가

- HTTP 요청에서 헤더(headers)는 클라이언트(브라우저, 앱 등)와 서버 간의 추가 정보를 전달하는 역할
- 웹사이트나 API는 요청을 보낸 기기의 정보(브라우저, 운영체제)를 확인하는데 일부 웹사이트는 특정 브라우저에서만 동작하거나, 봇 요청을 차단하기도 함
- 따라서 현재 내가 사용중인 추가 정보를 전달해서 차단을 방지하는 역할을 함
- 헤더정보는 다음과 같이 찾으면 됨

![스크린샷 2025-03-22 17.43.45]({{site.url}}/images/2025-03-22-requests_library/스크린샷 2025-03-22 17.43.45.png)

![스크린샷 2025-03-22 17.44.18]({{site.url}}/images/2025-03-22-requests_library/스크린샷 2025-03-22 17.44.18.png)


```python
headers = {
    "User-Agent": "Mozilla/5.0",  # 웹 브라우저 정보를 서버에 전달
    "Referer": "https://finance.naver.com/marketindex/"  # API 토큰을 사용한 인증
}
response = requests.get("https://finance.naver.com/marketindex/?tabSel=gold#tab_section", headers=headers)  # GET 요청과 함께 헤더 추가
print(response.status_code)  # 응답을 JSON 형식으로 출력
```

    200



## 5. 파라미터 추가 (쿼리 스트링)

- 파라미터 정보가 너무 복잡할 때 쿼리스트링의 정보만 따로 파라미터 정보로 보내서 크롤링

![스크린샷 2025-03-22 17.59.33]({{site.url}}/ChoeWJ.github.io/images/2025-03-22-requests_library/스크린샷 2025-03-22 17.59.33.png)


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


## 6. 타임아웃 설정


```python
response = requests.get("https://httpbin.org/delay/5", timeout=3)  # 3초 안에 응답이 없으면 예외 발생
```


    ---------------------------------------------------------------------------
    
    TimeoutError                              Traceback (most recent call last)
    
    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/connectionpool.py:534, in HTTPConnectionPool._make_request(self, conn, method, url, body, headers, retries, timeout, chunked, response_conn, preload_content, decode_content, enforce_content_length)
        533 try:
    --> 534     response = conn.getresponse()
        535 except (BaseSSLError, OSError) as e:


    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/connection.py:516, in HTTPConnection.getresponse(self)
        515 # Get the response from http.client.HTTPConnection
    --> 516 httplib_response = super().getresponse()
        518 try:


    File /Library/Frameworks/Python.framework/Versions/3.12/lib/python3.12/http/client.py:1428, in HTTPConnection.getresponse(self)
       1427 try:
    -> 1428     response.begin()
       1429 except ConnectionError:


    File /Library/Frameworks/Python.framework/Versions/3.12/lib/python3.12/http/client.py:331, in HTTPResponse.begin(self)
        330 while True:
    --> 331     version, status, reason = self._read_status()
        332     if status != CONTINUE:


    File /Library/Frameworks/Python.framework/Versions/3.12/lib/python3.12/http/client.py:292, in HTTPResponse._read_status(self)
        291 def _read_status(self):
    --> 292     line = str(self.fp.readline(_MAXLINE + 1), "iso-8859-1")
        293     if len(line) > _MAXLINE:


    File /Library/Frameworks/Python.framework/Versions/3.12/lib/python3.12/socket.py:720, in SocketIO.readinto(self, b)
        719 try:
    --> 720     return self._sock.recv_into(b)
        721 except timeout:


    File /Library/Frameworks/Python.framework/Versions/3.12/lib/python3.12/ssl.py:1251, in SSLSocket.recv_into(self, buffer, nbytes, flags)
       1248         raise ValueError(
       1249           "non-zero flags not allowed in calls to recv_into() on %s" %
       1250           self.__class__)
    -> 1251     return self.read(nbytes, buffer)
       1252 else:


    File /Library/Frameworks/Python.framework/Versions/3.12/lib/python3.12/ssl.py:1103, in SSLSocket.read(self, len, buffer)
       1102 if buffer is not None:
    -> 1103     return self._sslobj.read(len, buffer)
       1104 else:


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


    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/connectionpool.py:841, in HTTPConnectionPool.urlopen(self, method, url, body, headers, retries, redirect, assert_same_host, timeout, pool_timeout, release_conn, chunked, body_pos, preload_content, decode_content, **response_kw)
        839     new_e = ProtocolError("Connection aborted.", new_e)
    --> 841 retries = retries.increment(
        842     method, url, error=new_e, _pool=self, _stacktrace=sys.exc_info()[2]
        843 )
        844 retries.sleep()


    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/util/retry.py:474, in Retry.increment(self, method, url, response, error, _pool, _stacktrace)
        473 if read is False or method is None or not self._is_method_retryable(method):
    --> 474     raise reraise(type(error), error, _stacktrace)
        475 elif read is not None:


    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/util/util.py:39, in reraise(tp, value, tb)
         38         raise value.with_traceback(tb)
    ---> 39     raise value
         40 finally:


    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/connectionpool.py:787, in HTTPConnectionPool.urlopen(self, method, url, body, headers, retries, redirect, assert_same_host, timeout, pool_timeout, release_conn, chunked, body_pos, preload_content, decode_content, **response_kw)
        786 # Make the request on the HTTPConnection object
    --> 787 response = self._make_request(
        788     conn,
        789     method,
        790     url,
        791     timeout=timeout_obj,
        792     body=body,
        793     headers=headers,
        794     chunked=chunked,
        795     retries=retries,
        796     response_conn=response_conn,
        797     preload_content=preload_content,
        798     decode_content=decode_content,
        799     **response_kw,
        800 )
        802 # Everything went great!


    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/connectionpool.py:536, in HTTPConnectionPool._make_request(self, conn, method, url, body, headers, retries, timeout, chunked, response_conn, preload_content, decode_content, enforce_content_length)
        535 except (BaseSSLError, OSError) as e:
    --> 536     self._raise_timeout(err=e, url=url, timeout_value=read_timeout)
        537     raise


    File ~/Desktop/personal/lib/python3.12/site-packages/urllib3/connectionpool.py:367, in HTTPConnectionPool._raise_timeout(self, err, url, timeout_value)
        366 if isinstance(err, SocketTimeout):
    --> 367     raise ReadTimeoutError(
        368         self, url, f"Read timed out. (read timeout={timeout_value})"
        369     ) from err
        371 # See the above comment about EAGAIN in Python 3.


    ReadTimeoutError: HTTPSConnectionPool(host='httpbin.org', port=443): Read timed out. (read timeout=3)


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


    File ~/Desktop/personal/lib/python3.12/site-packages/requests/api.py:59, in request(method, url, **kwargs)
         55 # By using the 'with' statement we are sure the session is closed, thus we
         56 # avoid leaving sockets open which can trigger a ResourceWarning in some
         57 # cases, and look like a memory leak in others.
         58 with sessions.Session() as session:
    ---> 59     return session.request(method=method, url=url, **kwargs)


    File ~/Desktop/personal/lib/python3.12/site-packages/requests/sessions.py:589, in Session.request(self, method, url, params, data, headers, cookies, files, auth, timeout, allow_redirects, proxies, hooks, stream, verify, cert, json)
        584 send_kwargs = {
        585     "timeout": timeout,
        586     "allow_redirects": allow_redirects,
        587 }
        588 send_kwargs.update(settings)
    --> 589 resp = self.send(prep, **send_kwargs)
        591 return resp


    File ~/Desktop/personal/lib/python3.12/site-packages/requests/sessions.py:703, in Session.send(self, request, **kwargs)
        700 start = preferred_clock()
        702 # Send the request
    --> 703 r = adapter.send(request, **kwargs)
        705 # Total elapsed time of the request (approximately)
        706 elapsed = preferred_clock() - start


    File ~/Desktop/personal/lib/python3.12/site-packages/requests/adapters.py:713, in HTTPAdapter.send(self, request, stream, timeout, verify, cert, proxies)
        711     raise SSLError(e, request=request)
        712 elif isinstance(e, ReadTimeoutError):
    --> 713     raise ReadTimeout(e, request=request)
        714 elif isinstance(e, _InvalidHeader):
        715     raise InvalidHeader(e, request=request)


    ReadTimeout: HTTPSConnectionPool(host='httpbin.org', port=443): Read timed out. (read timeout=3)



```python
try:
    response = requests.get("https://jsonplaceholder.typicode.com/posts/1", timeout=5)  # 5초 안에 응답이 없으면 예외 발생
    response.raise_for_status()  # HTTP 오류(400, 500 등)가 발생하면 예외를 발생시킴
    print(response.json())  # 정상 응답일 경우 데이터를 출력
except requests.exceptions.RequestException as e:  # 모든 예외를 처리
    print(f"Error: {e}")  # 오류 메시지 출력
```

    {'userId': 1, 'id': 1, 'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'}


## 7. 세션 유지


```python
session = requests.Session()  # 세션 객체 생성 (쿠키 및 상태 유지)
session.get("https://httpbin.org/cookies/set/sessioncookie/123456")  # 쿠키 설정 요청 보내기
response = session.get("https://httpbin.org/cookies")  # 쿠키가 유지되는지 확인하는 요청 보내기
print(response.json())  # 응답 데이터 출력 (세션 쿠키 값 확인 가능)
```

    {'cookies': {'sessioncookie': '123456'}}



```python

```
