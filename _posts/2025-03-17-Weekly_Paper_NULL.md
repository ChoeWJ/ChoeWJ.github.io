---
layout: single
title: "NULL"
categories: SQL
tag: [DB, SQL]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 👑 NULL 값의 개념

NULL은 데이터베이스에서 '알 수 없는' 또는 '적용할 수 없는' 값을 나타내는 특수한 표시자

- 숫자 0이나 빈 문자열('')과는 다른 개념
- NULL과 NULL을 비교하면 결과는 NULL
- 산술 연산에서 NULL이 포함되면 결과는 NULL

# 👑 NULL 값 처리 함수

## 🌟 ISNULL()

NULL 값을 다른 지정된 값으로 대체

```sql
SELECT ISNULL(column_name, '대체값') FROM table_name;
```

## 2. COALESCE()

여러 표현식 중 NULL이 아닌 첫 번째 값을 반환

```sql
SELECT COALESCE(column1, column2, column3, '대체값') FROM table_name;
```

## 🌟 NULLIF()

두 표현식이 같으면 NULL을 반환하고, 다르면 첫 번째 표현식을 반환

```sql
SELECT NULLIF(expression1, expression2);
```

## 🌟 NVL() (Oracle)

Oracle 데이터베이스에서 사용되는 함수로, NULL 값을 다른 값으로 대체

```sql
SELECT NVL(column_name, '대체값') FROM table_name;
```

## 🌟 NULL 처리 시 주의사항

- NULL 값 비교는 반드시 IS NULL 또는 IS NOT NULL을 사용
- WHERE 절에서 NULL 검사 시 등호(=)를 사용하면 원하는 결과를 얻을 수 없음
- 집계 함수(COUNT, SUM 등)는 기본적으로 NULL 값을 제외하고 계산함

이러한 NULL 처리 함수들을 적절히 활용하면 데이터베이스에서 NULL 값으로 인한 문제를 효과적으로 해결 가능
