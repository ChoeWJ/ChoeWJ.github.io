---
layout: single
title: "정규 표현식"
categories:
  - docs
  - Python
  - Regular_Expression
tag: [Python, Regular_Expression]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 👑 정규표현식

![정규표현식]({{site.url}}/images/2025-03-25-Regular_Expressions/regular_expression.png)

## 🍑 정규 표현식의 개요 및 활용 사례

- 정규 표현식(Regular Expression, regex)은 특정한 패턴을 정의하여 문자열을 탐색, 검증, 추출 또는 변경할 때 사용되는 매우 강력한 도구
- 정규 표현식은 Python뿐만 아니라 Java, PHP, C#, Groovy, Swift, Ruby, JavaScript 등 다양한 프로그래밍 언어에서 호환됨

## 🍑 정규 표현식의 필요성 및 활용 사례

정규 표현식은 아래와 같은 다양한 분야에서 활용됩니다:

- **로그 분석**: 로그 파일에서 날짜, 시간, 오류 메시지 등 특정 정보를 추출
- **데이터 검증**: 이메일 주소, 전화번호 등 입력 데이터의 유효성 검사
- **문자열 대체 및 정제**: 텍스트 데이터에서 특정 문자열을 찾아 대체하거나 제거
- **웹 스크래핑**: 웹 페이지에서 이메일 주소, 전화번호 등 특정 데이터를 자동으로 추출

## 🍑 정규 표현식의 기본 문법과 예시

### 🍄 기본 특수 문자 및 기호

| 기호    | 설명            | 예시                              |
| ------- | --------------- | --------------------------------- | ---- | -------------------------- |
| `.`     | 임의의 한 문자  | `a.c` (abc, axc 등과 매칭)        |
| `^`     | 문자열의 시작   | `^hello` (hello world와 매칭)     |
| `$`     | 문자열의 끝     | `world$` (hello world와 매칭)     |
| `[]`    | 문자 집합       | `[a-z]` (소문자 a부터 z까지 매칭) |
| `[^]`   | 부정 문자 집합  | `[^0-9]` (숫자가 아닌 문자 매칭)  |
| `*`     | 0회 이상 반복   | `ab*` (a, ab, abb 등과 매칭)      |
| `+`     | 1회 이상 반복   | `ab+` (ab, abb 등과 매칭)         |
| `?`     | 0 또는 1회 반복 | `ab?` (a 또는 ab와 매칭)          |
| `{n}`   | 정확히 n회 반복 | `a{3}` (aaa와 매칭)               |
| `{n,m}` | n에서 m회 반복  | `a{2,4}` (aa, aaa, aaaa와 매칭)   |
| `       | `               | OR 연산자                         | `cat | dog` (cat 또는 dog와 매칭) |
| `()`    | 그룹화          | `(abc)+` (abc, abcabc와 매칭)     |

### 🍄 자주 사용하는 패턴

| 패턴 | 설명                        | 예시                 |
| ---- | --------------------------- | -------------------- |
| `\d` | 숫자 (0-9)                  | `\d{3}` → 3자리 숫자 |
| `\D` | 숫자 아님                   | `[a-zA-Z]`, `\D+`    |
| `\w` | 단어 문자 (문자+숫자+\_)    | `\w+`                |
| `\W` | 단어 문자가 아님            | 공백, 특수문자 등    |
| `\s` | 공백 문자 (스페이스, 탭 등) | `\s+`                |
| `\S` | 공백이 아닌 문자            | `\S+`                |

## 🍑 정규 표현식을 활용한 문자열 조작 방법

### 🍄 Python의 re 모듈

```python
import re
```

### 🍄 문자열 검색과 추출

- `re.findall()` 메서드: 문자열에서 패턴과 일치하는 모든 항목을 리스트로 반환
- `re.finditer()` 메서드: 문자열에서 패턴과 일치하는 항목들의 위치(시작, 끝 인덱스)를 반환

```python
text = "문의: contact@example.com 또는 help@domain.co.kr"
emails = re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)
```

```python
print(emails)
```

    ['contact@example.com', 'help@domain.co.kr']

### 🍄 문자열 대체:

- `re.sub()` 메서드를 활용하여 특정 패턴을 원하는 문자열로 대체

```python
text = "이름: John Doe, 전화: 010-1234-5678"
masked = re.sub(r"\d{3,4}-\d{4}", "****-****", text)
```

```python
print(masked)
```

    이름: John Doe, 전화: ****-****-5678

### 🍄 백슬래시(\) 처리 및 Raw 문자열 활용법

- 정규 표현식에서 \는 특수 문자로 사용되기 때문에 일반 문자열과 다르게 처리되는데, 이를 해결하려면 Python에서는 Raw 문자열(r'')을 사용

```python
# 일반 문자열
pattern = "\\d{3}"  # 실제로는 "\d{3}"로 처리됨

# Raw 문자열 사용
pattern = r"\d{3}"
```

### 🍄 화이트스페이스(공백 문자) 처리 방법

- 정규 표현식은 다양한 공백 문자 처리에 유용
- 줄바꿈(\n), 탭(\t), 공백( ), 캐리지 리턴(\r) 등

```python
text = "Hello\tWorld\nPython Regex"
clean_text = re.sub(r"\s+", " ", text)  # 모든 공백 문자를 공백 한 칸으로 대체
```

```python
print(clean_text)
```

    Hello World Python Regex

### 🍄 숫자 매칭 및 범위 지정 방법

- 숫자 매칭은 \d(숫자)와 \D(숫자 아님)을 활용
  - \d{5} → 정확히 5자리 숫자
  - \d{5,7} → 5자리에서 7자리 숫자 매칭

```python
zipcode = re.findall(r"\d{5}", "주소: 서울시 강남구 12345")

print(zipcode)
```

    ['12345']

### 🍄 전화번호 형식 검증 예시

- 전화번호는 일반적으로 3자리-3자리-4자리 형태

- 정확한 패턴:
  [
  \d{3}-\d{3}-\d{4}
  ]

```python
phone = "010-123-4567"
if re.match(r"\d{3}-\d{3}-\d{4}", phone):
    print("유효한 전화번호입니다.")
else:
    print("잘못된 전화번호 형식입니다.")
```

    유효한 전화번호입니다.

### 🍄 웹 스크래핑에서의 활용 예시

```python
# 이메일 주소 출력
emails = re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", webpage_content)
```

```python
# 전화번호 추출
phones = re.findall(r"01[016789]-\d{3,4}-\d{4}", webpage_content)
```
