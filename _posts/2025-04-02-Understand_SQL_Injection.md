---
layout: single
title: "[웹 보안 기초] SQL Injection 이해와 방어 기법"
categories:
  - docs
  - Security
  - Security
tag: [Web Security, SQL Injection, OWASP, Database Security]
author_profile: false
sidebar:
  nav: "counts"
use_math: true
---

# 🏆 <font color='tomato'>SQL Injection</font> 이해와 방어 기법

## 🔒 <font color='tomato'>SQL Injection</font>: 취약점의 이해

### 📌 <font color='tomato'>SQL Injection</font>이란?

- <span><font color='tomato'>SQL Injection</font>은 공격자가 웹 애플리케이션의 입력 필드를 통해 악의적인 SQL 쿼리를 삽입하여 데이터베이스를 조작하는 공격 기법이다</span>
- 사용자가 입력한 데이터가 적절히 검증되지 않을 경우, 공격자는 데이터베이스의 데이터를 조회, 수정, 삭제하거나 시스템에 접근할 수 있다

- 사용자가 로그인 폼에 다음과 같은 입력을 삽입한다고 가정

  ```plaintext
  Username: admin' --
  Password: (아무 값)
  ```

- 이 입력은 다음과 같은 SQL 쿼리로 변환될 수 있다

  ```sql
  SELECT * FROM users WHERE username = 'admin' --' AND password = '입력값';
  ```

- 여기서 `--`는 SQL에서 주석을 의미하므로, 비밀번호 검증 부분이 무시되고 `admin` 계정으로 로그인할 수 있게 된다

- <span><font color='tomato'>SQL Injection</font> 의 위험성</span>
  - <font color='lightgreen'>데이터 유출</font>: 사용자 정보, 비밀번호 등 민감한 데이터 노출.
  - <font color='lightgreen'>데이터 손상</font>: 데이터베이스 내용 삭제 또는 수정.
  - <font color='lightgreen'>시스템 접근</font>: 데이터베이스 권한을 통해 서버에 접근.

### 📌 OWASP Top 10과 <font color='tomato'>SQL Injection</font>

- OWASP Top 10은 웹 애플리케이션의 주요 취약점을 정리한 리스트로, <font color='tomato'>SQL Injection</font>은 "Injection" 카테고리에 포함된다
- 2021년 OWASP Top 10 기준으로 Injection은 여전히 상위권에 위치하며, <font color='tomato'>SQL Injection</font> 외에도 Command Injection, LDAP Injection 등이 포함된다

- Injection의 주요 유형
  - <font color='lightgreen'><font color='tomato'>SQL Injection</font></font>: 데이터베이스 쿼리 조작.
  - <font color='lightgreen'>Command Injection</font>: 운영체제 명령어 실행.
  - <font color='lightgreen'>Code Injection</font>: 애플리케이션 코드 실행.

## 🔒 <font color='tomato'>SQL Injection</font> 방어 기법

### 🛡️ 1. Prepared Statement (매개변수화된 쿼리) 사용

- Prepared Statement는 입력 데이터를 쿼리와 분리하여 <font color='tomato'>SQL Injection</font>을 방지한다.
- 입력값이 쿼리 구조에 영향을 미치지 않도록 미리 정의된 쿼리 템플릿을 사용

- Python과 SQLite를 사용한 예시

  ```python
  import sqlite3

  # 데이터베이스 연결
  conn = sqlite3.connect("example.db")
  cursor = conn.cursor()

  # 테이블 생성
  cursor.execute("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)")
  cursor.execute("INSERT INTO users (username, password) VALUES ('admin', 'password123')")
  conn.commit()

  # 취약한 코드 (직접 문자열 결합)
  username = "admin' --"
  query = f"SELECT * FROM users WHERE username = '{username}'"
  cursor.execute(query)  # 위험! <font color='tomato'>SQL Injection</font> 가능

  # 안전한 코드 (Prepared Statement)
  username = "admin' --"
  query = "SELECT * FROM users WHERE username = ?"
  cursor.execute(query, (username,))
  result = cursor.fetchone()
  print("Prepared Statement 결과:", result)

  conn.close()
  ```

  `?`를 사용해 입력값을 매개변수로 처리하며, 입력값이 쿼리 구조에 영향을 미치지 않습니다.

### 🛡️ 2. 입력 검증 및 Sanitization

- 입력 검증 예시

  ```python
  def validate_username(username):
      # 사용자 이름은 알파벳과 숫자만 허용
      return username.isalnum()

  username = "admin123"
  if validate_username(username):
      print("유효한 사용자 이름이다")
  else:
      print("유효하지 않은 사용자 이름이다")
  ```

- 특수 문자(예: `'`, `--`)가 포함된 입력을 거부하여 공격을 방지

### 🛡️ 3. 최소 권한 원칙 적용

- 권한 설정 예시
  - 웹 애플리케이션이 사용하는 DB 계정은 `SELECT`, `INSERT`, `UPDATE` 권한만 부여.
  - `DROP`, `DELETE`, `ALTER`와 같은 위험한 권한은 제한.
  ```sql
  GRANT SELECT, INSERT, UPDATE ON mydatabase.* TO 'webuser'@'localhost' IDENTIFIED BY 'password';
  ```

### 🛡️ 4. ORM(Object-Relational Mapping) 사용

- ORM 라이브러리는 SQL 쿼리를 직접 작성하지 않고 객체 지향적으로 데이터베이스를 조작할 수 있도록 도와준다.
- ORM은 내부적으로 Prepared Statement를 사용하므로 <font color='tomato'>SQL Injection</font> 방어에 효과적이다

- Python의 SQLAlchemy 예시

  ```python
  from sqlalchemy import create_engine, Column, String
  from sqlalchemy.ext.declarative import declarative_base
  from sqlalchemy.orm import sessionmaker

  # 데이터베이스 설정
  engine = create_engine('sqlite:///example.db')
  Base = declarative_base()

  # 테이블 정의
  class User(Base):
      __tablename__ = 'users'
      username = Column(String, primary_key=True)
      password = Column(String)

  Base.metadata.create_all(engine)

  # 세션 생성
  Session = sessionmaker(bind=engine)
  session = Session()

  # 데이터 조회
  username = "admin' --"
  user = session.query(User).filter_by(username=username).first()
  print("SQLAlchemy 결과:", user.username if user else "사용자 없음")
  ```

- SQLAlchemy는 자동으로 매개변수화된 쿼리를 사용하므로 안전

## 🔒 실습: 간단한 로그인 시스템 보안 점검

### 📝 Flask 애플리케이션 설정

```python
from flask import Flask, request, render_template_string
import sqlite3

app = Flask(__name__)

# 데이터베이스 초기화
conn = sqlite3.connect("users.db")
conn.execute("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)")
conn.execute("INSERT OR IGNORE INTO users (username, password) VALUES ('admin', 'password123')")
conn.commit()
conn.close()

# 로그인 페이지
@app.route('/')
def index():
    return render_template_string('''
        <h2>로그인</h2>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username"><br>
            <input type="password" name="password" placeholder="Password"><br>
            <input type="submit" value="Login">
        </form>
    ''')

# 로그인 처리
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # 안전한 쿼리 (Prepared Statement)
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    query = "SELECT * FROM users WHERE username = ? AND password = ?"
    cursor.execute(query, (username, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        return f"로그인 성공! 환영합니다, {username}!"
    else:
        return "로그인 실패. 사용자 이름 또는 비밀번호를 확인하세요."
```

### 📝 실행 및 테스트

1. Flask 애플리케이션을 실행:
   ```sh
   flask run
   ```
2. 브라우저에서 `http://127.0.0.1:5000`에 접속하여 로그인 폼을 테스트
3. <span><font color='tomato'>SQL Injection</font> 시도</span>
   - `admin' --`와 같은 입력을 넣어보고, 방어가 잘 되는지 확인
   - 정상 입력(`admin`, `password123`)으로 로그인 성공 여부 확인.

### 📝 실행 예시

- 정상 로그인

  ```
  Username: admin
  Password: password123
  -> 로그인 성공! 환영합니다, admin!
  ```

- <span><font color='tomato'>SQL Injection</font> 시도</span>
  ```
  Username: admin' --
  Password: (아무 값)
  -> 로그인 실패. 사용자 이름 또는 비밀번호를 확인하세요.
  ```
- Prepared Statement를 사용했기 때문에 <font color='tomato'>SQL Injection</font>이 방어된다

## 🔒 추가 팁: 고급 방어 기법과 모니터링

### 🛡️ WAF(Web Application Firewall) 사용

- WAF는 웹 애플리케이션 앞단에서 악의적인 요청을 차단 <font color='tomato'>SQL Injection</font> 패턴을 탐지하고 차단하는 규칙을 설정할 수 있다

- 예시: AWS WAF, Cloudflare WAF 등을 활용.

### 🛡️ 로깅과 모니터링

- 의심스러운 요청을 로깅하고 모니터링하여 <font color='tomato'>SQL Injection</font> 시도를 탐지

- 로깅 예시

  ```python
  import logging

  logging.basicConfig(filename='app.log', level=logging.WARNING)
  logging.warning(f"의심스러운 입력 감지: username={username}")
  ```

### 🛡️ 정기적인 보안 점검

- 코드 리뷰와 정기적인 보안 점검을 통해 취약점을 사전에 발견.
- OWASP ZAP, Burp Suite 같은 도구를 활용해 <font color='tomato'>SQL Injection</font> 테스트
