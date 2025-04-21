---
layout: single
title: "[SQL] 정규 표현식"
categories:
  - docs
  - SQL
  - Advanced
tag: [DB, SQL, Advanced]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

### 1. MySQL에서 사용하는 정규표현식

MySQL은 `REGEXP` (또는 `RLIKE`) 연산자를 사용해 정규표현식을 지원합니다. MySQL 8.0.4 이후로는 ICU(International Components for Unicode) 라이브러리를 기반으로 작동하며, 이전 버전에서는 Henry Spencer의 POSIX 기반 정규표현식을 사용했습니다. 여기서는 최신 버전 기준으로 설명합니다.

#### 주요 특징

- `REGEXP`는 문자열 내에서 패턴이 일치하는지 확인하며, 전체 문자열이 아닌 부분 문자열에도 적용됩니다.
- 기본적으로 대소문자를 구분하지 않습니다. 대소문자 구분을 위해 `BINARY` 키워드를 사용할 수 있습니다.
- 주요 연산자: `REGEXP`, `NOT REGEXP`, `REGEXP_LIKE()`, `REGEXP_REPLACE()`, `REGEXP_SUBSTR()` 등.

#### 문법

```sql
column_name REGEXP 'pattern'
```

#### 예시

1. **특정 패턴 찾기**

   ```sql
   SELECT * FROM users WHERE email REGEXP '^[a-z]+@[a-z]+\.[a-z]+$';
   ```

   - 설명: 이메일 형식을 검사합니다. `^`는 문자열 시작, `[a-z]+`는 소문자 1개 이상, `@`와 `.`은 리터럴 문자, `$`는 문자열 끝을 의미합니다.
   - 결과: `test@example.com`과 같은 이메일이 매칭됩니다.

2. **숫자 포함 여부 확인**

   ```sql
   SELECT * FROM products WHERE name REGEXP '[0-9]';
   ```

   - 설명: 제품 이름에 숫자가 포함된 경우를 찾습니다. `[0-9]`는 0~9 사이의 숫자 하나를 의미합니다.
   - 결과: `Phone123`은 매칭되지만 `Phone`은 매칭되지 않습니다.

3. **문자열 치환**
   ```sql
   SELECT REGEXP_REPLACE(phone, '[^0-9]', '') AS clean_phone FROM contacts;
   ```
   - 설명: 전화번호에서 숫자가 아닌 모든 문자를 제거합니다. `[^0-9]`는 숫자가 아닌 문자를 의미하고, 빈 문자열 `''`로 대체합니다.
   - 결과: `(123) 456-7890` → `1234567890`

#### 주요 메타문자

- `.`: 모든 단일 문자
- `*`: 0개 이상 반복
- `+`: 1개 이상 반복
- `|`: OR 연산
- `[]`: 문자 클래스 (예: `[a-z]`)
- `^`: 문자열 시작
- `$`: 문자열 끝

---

### 2. PostgreSQL에서 사용하는 정규표현식

PostgreSQL은 POSIX 스타일의 정규표현식을 지원하며, `~` (대소문자 구분 매칭), `~*` (대소문자 무시 매칭), `!~`, `!~*` 연산자와 함께 `REGEXP_MATCHES()`, `REGEXP_REPLACE()` 등의 함수를 제공합니다. Tcl의 ARE(Advanced Regular Expressions)를 기반으로 강력한 기능을 제공합니다.

#### 주요 특징

- `~`는 문자열 내에서 패턴이 일치하는지 확인하며, 기본적으로 대소문자를 구분합니다.
- `~*`는 대소문자를 무시합니다.
- 함수를 통해 매칭된 부분을 추출하거나 치환할 수 있습니다.
- POSIX 문법을 따르며, Python이나 Perl과 유사한 점이 많습니다.

#### 문법

```sql
column_name ~ 'pattern'  -- 대소문자 구분 매칭
column_name ~* 'pattern' -- 대소문자 무시 매칭
```

#### 예시

1. **특정 패턴 찾기**

   ```sql
   SELECT * FROM users WHERE email ~ '^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$';
   ```

   - 설명: 이메일 형식을 검사합니다. `[a-zA-Z]+`는 대소문자 알파벳 1개 이상을 의미합니다.
   - 결과: `Test@Example.com`과 같은 이메일이 매칭됩니다.

2. **숫자 포함 여부 확인**

   ```sql
   SELECT * FROM products WHERE name ~ '\d';
   ```

   - 설명: `\d`는 숫자를 의미하며, 이름에 숫자가 포함된 경우를 찾습니다.
   - 결과: `Phone123`은 매칭되지만 `Phone`은 매칭되지 않습니다.

3. **패턴 추출**

   ```sql
   SELECT REGEXP_MATCHES(description, '#(\w+)', 'g') AS hashtags FROM posts;
   ```

   - 설명: 게시글에서 해시태그를 추출합니다. `#(\w+)`는 `#` 뒤에 단어 문자(`\w`)가 1개 이상 오는 패턴을 캡처하고, `'g'` 플래그로 모든 매칭을 반환합니다.
   - 결과: `Learning #PostgreSQL #Regex` → `"PostgreSQL", "Regex"`

4. **문자열 치환**
   ```sql
   SELECT REGEXP_REPLACE(phone, '[^0-9]', '', 'g') AS clean_phone FROM contacts;
   ```
   - 설명: 전화번호에서 숫자가 아닌 모든 문자를 제거합니다. `'g'` 플래그로 모든 매칭을 대상으로 합니다.
   - 결과: `(123) 456-7890` → `1234567890`

#### 주요 메타문자

- `.`: 모든 단일 문자
- `*`: 0개 이상 반복
- `+`: 1개 이상 반복
- `|`: OR 연산
- `\w`: 단어 문자 (알파벳, 숫자, `_`)
- `\d`: 숫자
- `[]`: 문자 클래스
- `^`: 문자열 시작
- `$`: 문자열 끝

---

### 3. Python 정규표현식과의 차이점

Python은 `re` 모듈을 통해 정규표현식을 지원하며, Perl 스타일(PCRE)을 기반으로 합니다. MySQL과 PostgreSQL의 정규표현식과 비교했을 때 몇 가지 차이점이 있습니다.

#### 공통점

- 기본 메타문자(`.`, `*`, `+`, `|`, `[]`, `^`, `$`)는 세 환경 모두에서 유사하게 동작합니다.
- 문자열 내 패턴 매칭을 지원합니다.

#### 차이점

1. **문법과 표현력**

   - **MySQL**: POSIX ERE(Extended Regular Expression)를 기반으로 하지만, 기능이 제한적입니다. 예를 들어, 후방 참조(backreference)나 복잡한 캡처 그룹은 지원하지 않습니다.
   - **PostgreSQL**: POSIX ARE를 기반으로 하며, Python과 유사한 `\d`, `\w` 같은 이스케이프 시퀀스를 지원합니다. 후방 참조와 캡처 그룹도 가능합니다.
   - **Python**: PCRE를 기반으로 하여 가장 풍부한 기능을 제공합니다. 후방 참조(`\1`), 전방 탐색(lookahead), 후방 탐색(lookbehind) 등 고급 기능이 포함됩니다.

2. **대소문자 처리**

   - **MySQL**: 기본적으로 대소문자 무시. `BINARY`로 구분 가능.
   - **PostgreSQL**: `~`는 대소문자 구분, `~*`는 무시. 명시적으로 선택 가능.
   - **Python**: `re.IGNORECASE` 플래그로 대소문자 무시를 설정. 기본은 구분.

3. **함수와 연산자**

   - **MySQL**: `REGEXP`, `REGEXP_REPLACE()` 등 제한된 함수 제공.
   - **PostgreSQL**: `~`, `REGEXP_MATCHES()`, `REGEXP_REPLACE()` 등 다양한 연산자와 함수 제공.
   - **Python**: `re.match()`, `re.search()`, `re.sub()`, `re.findall()` 등 풍부한 메서드 지원.

4. **예시 비교**

   - **MySQL**:
     ```sql
     SELECT * FROM users WHERE name REGEXP '^J.*n$';
     ```
     - `John`, `Json` 매칭.
   - **PostgreSQL**:
     ```sql
     SELECT * FROM users WHERE name ~ '^J.*n$';
     ```
     - 동일한 결과.
   - **Python**:
     ```python
     import re
     names = ["John", "Json", "Jane"]
     matches = [name for name in names if re.match(r'^J.*n$', name)]
     print(matches)  # ['John', 'Json']
     ```
     - `re.match()`는 문자열 시작부터 매칭, `re.search()`는 부분 매칭.

5. **성능 및 사용 목적**
   - **MySQL/PostgreSQL**: 데이터베이스 쿼리 내에서 패턴 매칭에 최적화.
   - **Python**: 프로그래밍 환경에서 텍스트 처리와 복잡한 패턴 분석에 적합.

---

### 결론

- **MySQL**은 간단한 패턴 매칭에 적합하며, 기능이 비교적 제한적입니다.
- **PostgreSQL**은 더 강력하고 유연한 정규표현식을 제공하며, 데이터 추출과 치환에 유용합니다.
- **Python**은 가장 풍부한 기능과 유연성을 제공하며, 데이터베이스 외부에서 복잡한 텍스트 처리를 할 때 이상적입니다.
