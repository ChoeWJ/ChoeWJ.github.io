---
layout: single
title: "[웹 보안 기초] OWASP Top 10과 주요 취약점 이해하기"
categories:
  - docs
  - FSDE
  - Hack
tag: [Web Security, OWASP, SQL Injection, XSS]
author_profile: false
sidebar:
  nav: "counts"
use_math: true
---

# 🏆 OWASP Top 10과 웹 보안 취약점 이해하기

## 🔒 <font color="tomato">OWASP Top 10</font>이란?

### 🛡️ <font color="tomato">OWASP Top 10</font>의 정의와 목적

<font color="tomato">OWASP Top 10</font>은 웹 애플리케이션에서 가장 흔히 발생하는 보안 취약점 10가지를 정리한 리스트입니다. OWASP는 2003년부터 이 리스트를 발표하기 시작했으며, 주기적으로 업데이트를 통해 최신 보안 위협을 반영합니다. 2025년 기준으로 최신 리스트는 2021년에 발표된 버전을 기반으로 하며, 이는 웹 개발자와 보안 전문가들이 애플리케이션의 취약점을 점검하고 개선하는 데 유용한 가이드라인으로 사용됩니다.

- 주요 목적:
  - 웹 애플리케이션의 주요 보안 위협에 대한 인식 제고.
  - 개발자와 조직이 보안 취약점을 사전에 방지할 수 있도록 지원.
  - 보안 테스트와 교육 자료로 활용.

### 🛡️ <font color="tomato">OWASP Top 10</font>의 주요 항목

2021년 <font color="tomato">OWASP Top 10</font> 리스트는 다음과 같은 항목으로 구성되어 있습니다:

1. <font color="skyblue">Broken Access Control (접근 제어 실패)</font>: 권한이 없는 사용자가 리소스에 접근할 수 있는 문제.
2. <font color="skyblue">Cryptographic Failures (암호화 실패)</font>: 민감한 데이터 보호 실패.
3. <font color="skyblue">Injection (인젝션)</font>: <font color="lightsalmon">SQL Injection</font>, Command Injection 등.
4. <font color="skyblue">Insecure Design (불안전한 설계)</font>: 설계 단계에서의 보안 결함.
5. <font color="skyblue">Security Misconfiguration (보안 설정 오류)</font>: 잘못된 설정으로 인한 취약점.
6. <font color="skyblue">Vulnerable and Outdated Components (취약하거나 오래된 구성 요소)</font>: 업데이트되지 않은 라이브러리 사용.
7. <font color="skyblue">Identification and Authentication Failures (식별 및 인증 실패)</font>: 인증 시스템의 취약점.
8. <font color="skyblue">Software and Data Integrity Failures (소프트웨어 및 데이터 무결성 실패)</font>: 무결성 검증 부족.
9. <font color="skyblue">Security Logging and Monitoring Failures (보안 로깅 및 모니터링 실패)</font>: 공격 탐지 및 대응 부족.
10. <font color="skyblue">Server-Side Request Forgery (SSRF)</font>: 서버가 악의적인 요청을 처리하는 문제.

## 🔒 주요 취약점 1: <font color="lightsalmon">SQL Injection</font>

### 🛠️ <font color="lightsalmon">SQL Injection</font>이란?

<font color="lightsalmon">SQL Injection</font>은 공격자가 웹 애플리케이션의 입력 필드를 통해 악의적인 SQL 쿼리를 삽입하여 데이터베이스를 조작하는 공격 기법입니다. 사용자가 입력한 데이터가 적절히 검증되지 않을 경우, 공격자는 데이터베이스의 데이터를 조회, 수정, 삭제하거나 시스템에 접근할 수 있습니다.

- 공격 예시:
  사용자가 로그인 폼에 다음과 같은 입력을 삽입한다고 가정해봅시다:
  ```
  Username: admin' --
  Password: (아무 값)
  ```
  이 입력은 다음과 같은 SQL 쿼리로 변환될 수 있습니다:
  ```sql
  SELECT  FROM users WHERE username = 'admin' --' AND password = '입력값';
  ```
  여기서 `--`는 SQL에서 주석을 의미하므로, 비밀번호 검증 부분이 무시되고 `admin` 계정으로 로그인할 수 있게 됩니다.

### 🛠️ <font color="lightsalmon">SQL Injection</font> 방어 방법

<font color="lightsalmon">SQL Injection</font>을 방어하기 위해서는 입력 데이터를 신뢰하지 않고, 적절한 방어 기법을 적용해야 합니다.

- Prepared Statement (매개변수화된 쿼리) 사용:
  입력 데이터를 직접 쿼리에 삽입하지 않고, 매개변수로 처리합니다.

```python
# Python과 SQLite를 사용한 예시
import sqlite3

conn = sqlite3.connect("example.db")
cursor = conn.cursor()

# 취약한 코드 (직접 문자열 결합)
username = "admin' --"
query = f"SELECT  FROM users WHERE username = '{username}'"
cursor.execute(query)  # 위험!

# 안전한 코드 (Prepared Statement)
username = "admin' --"
query = "SELECT  FROM users WHERE username = ?"
cursor.execute(query, (username,))
```

- 입력 검증 및 sanitization:
  입력 데이터가 예상된 형식인지 확인합니다. 예를 들어, 이메일 필드에는 이메일 형식만 허용하도록 정규 표현식을 사용합니다.

```python
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(pattern, email) is not None

email = "test@example.com"
if validate_email(email):
    print("유효한 이메일입니다.")
else:
    print("유효하지 않은 이메일입니다.")
```

- 최소 권한 원칙 적용:
  데이터베이스 계정에 최소한의 권한만 부여하여, 공격자가 데이터베이스에 접근하더라도 피해를 최소화합니다.

## 🔒 주요 취약점 2: Cross-Site Scripting (<font color="#f5df4d">XSS</font>)

### 🛠️ <font color="#f5df4d">XSS</font>란?

Cross-Site Scripting(<font color="#f5df4d">XSS</font>)은 공격자가 웹 페이지에 악의적인 스크립트를 삽입하여 사용자의 브라우저에서 실행되도록 하는 공격입니다. 이를 통해 공격자는 사용자의 세션 쿠키를 탈취하거나, 피싱 공격을 수행하거나, 사용자를 악성 사이트로 리다이렉트할 수 있습니다.

- 공격 예시:
  사용자가 댓글 입력란에 다음과 같은 스크립트를 삽입한다고 가정해봅시다:

  ```html
  <script>
    alert("Hacked!");
  </script>
  ```

  이 댓글이 웹 페이지에 그대로 렌더링되면, 해당 페이지를 방문한 모든 사용자의 브라우저에서 경고창이 표시됩니다.

- <font color="#f5df4d">XSS</font>의 종류:
  - Reflected <font color="#f5df4d">XSS</font>: 악성 스크립트가 URL 파라미터를 통해 반영되는 경우.
  - Stored <font color="#f5df4d">XSS</font>: 악성 스크립트가 서버에 저장되어 모든 사용자에게 전파되는 경우.
  - DOM-based <font color="#f5df4d">XSS</font>: 클라이언트 측 스크립트가 DOM을 조작하며 발생하는 경우.

### 🛠️ <font color="#f5df4d">XSS</font> 방어 방법

<font color="#f5df4d">XSS</font>를 방어하기 위해서는 사용자 입력을 신뢰하지 않고, 출력 데이터를 적절히 처리해야 합니다.

- 입력 데이터 이스케이프:
  HTML, JavaScript, CSS 등에서 사용될 수 있는 특수 문자를 이스케이프 처리합니다.

  ```python
  # Python Flask를 사용한 예시
  from flask import Flask, escape

  app = Flask(__name__)

  @app.route('/comment/<comment>')
  def show_comment(comment):
      # 취약한 코드
      # return f"<p>{comment}</p>"

      # 안전한 코드
      safe_comment = escape(comment)
      return f"<p>{safe_comment}</p>"
  ```

- Content Security Policy (CSP) 설정:
  브라우저가 실행할 수 있는 스크립트를 제한합니다.

  ```html
  <meta http-equiv="Content-Security-Policy" content="script-src 'self';" />
  ```

  이 설정은 외부 스크립트 실행을 차단합니다.

- HTTPOnly 쿠키 사용:
  세션 쿠키에 `HttpOnly` 속성을 추가하여 JavaScript로 접근하지 못하도록 합니다.
  ```python
  # Flask에서 HttpOnly 쿠키 설정
  response.set_cookie('session_id', '12345', httponly=True)
  ```

## 🔒 실습: 간단한 웹 애플리케이션 보안 점검

간단한 Flask 애플리케이션을 만들어 <font color="lightsalmon">SQL Injection</font>과 <font color="#f5df4d">XSS</font> 취약점을 점검하고 방어하는 실습을 진행해봅시다.

### 🛠️ Flask 애플리케이션 설정

```python
from flask import Flask, request, escape
import sqlite3

app = Flask(__name__)

# 데이터베이스 초기화
conn = sqlite3.connect("users.db")
conn.execute("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)")
conn.commit()
conn.close()

@app.route('/')
def index():
    return '''
    <form method="POST" action="/login">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <input type="submit" value="Login">
    </form>
    '''

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # 안전한 쿼리
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    query = "SELECT  FROM users WHERE username = ? AND password = ?"
    cursor.execute(query, (username, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        return f"Welcome, {escape(username)}!"
    else:
        return "Login failed."
```

### 🛠️ 실행 및 테스트

1. Flask 애플리케이션을 실행합니다:

   ```bash
   flask run
   ```

2. 브라우저에서 `http://127.0.0.1:5000`에 접속하여 로그인 폼을 테스트합니다.
3. <font color="lightsalmon">SQL Injection</font> 시도: `admin' --`와 같은 입력을 넣어보고, 방어가 잘 되는지 확인합니다.
4. <font color="#f5df4d">XSS</font> 시도: `<script>alert('Hacked!');</script>`를 입력하여 출력이 이스케이프되는지 확인합니다.
