---
layout: single
title: "GROUP BY vs HAVING"
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

# 👑 GROUP BY와 HAVING의 차이점

## 🌟 GROUP BY

GROUP BY는 데이터를 지정된 열을 기준으로 그룹화하는 SQL 절

- 동일한 값을 가진 행들을 하나의 그룹으로 묶음
- 집계 함수(COUNT, SUM, AVG 등)와 함께 사용

```sql
SELECT department, COUNT(*) as employee_count
FROM employees
GROUP BY department;

```

## 🌟 HAVING

HAVING은 그룹화된 데이터에 대한 조건을 지정하는 SQL 절ㅁㄴㅇㄹ

- GROUP BY로 생성된 그룹에 대한 필터링을 수행
- 집계 함수의 결과를 기준으로 조건을 설정

```sql
SELECT department, COUNT(*) as employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;

```

## 🌟 주요 차이점

| 특성      | GROUP BY                   | HAVING        |
| --------- | -------------------------- | ------------- |
| 실행 순서 | WHERE 절 이후, HAVING 이전 | GROUP BY 이후 |
| 적용 대상 | 개별 행                    | 그룹화된 결과 |
| 집계 함수 | 사용 불가                  | 사용 가능     |

## 🌟 실제 사용 예시

```sql
SELECT department, AVG(salary) as avg_salary
FROM employees
WHERE status = 'active'
GROUP BY department
HAVING AVG(salary) > 50000
ORDER BY avg_salary DESC;

```

위 예시에서:

- WHERE: 개별 행 필터링 (active 직원만 선택)
- GROUP BY: department별로 그룹화
- HAVING: 평균 급여가 50000 이상인 부서만 선택

## 🌟 성능 고려사항

WHERE 절을 사용하여 먼저 데이터를 필터링하는 것이 HAVING을 사용하여 그룹화된 후 필터링하는 것보다 일반적으로 더 효율적
