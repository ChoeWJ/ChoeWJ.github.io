---
layout: single
title: "[Learning_SQL] 🔐 Chapter_06"
categories:
  - docs
  - SQL
  - Learning_SQL
tag: [SQL, Learning_SQL]
author_profile: false
sidebar:
  nav: "counts"
protect: true
contact_info: choewj117@gmail.com
use_math: true
---

# <font color='skyblue' size='7' face='BMJUAOTF'>Chapter 6 집합 연산자</font>

![set_diagram]({{ site.url }}/images/sql/set_diagram.png)

```sql
select 1 num, 'abc' str
union
select 9 num, 'xyz' str;
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>6.1 집합 연산자</font>

### <font color='white' size='5' face='BMJUAOTF'>6.1.1 union 연산자</font>

```sql
-- union all
-- 최종 데이터셋의 행 수는 항상 결합되는 집합의 행 수의 총합과 같음 (중복 허용)
select c.first_name, c.last_name
from customer c
where c.first_name like 'J%' and c.last_name like 'D%'
union all
select a.first_name, a.last_name
from actor a
where a.first_name like 'J%' and a.last_name like 'D%';
```

```sql
-- union
-- 중복 행을 제거
select c.first_name, c.last_name
from customer c
where c.first_name like 'J%' and c.last_name like 'D%'
union
select a.first_name, a.last_name
from actor a
where a.first_name like 'J%' and a.last_name like 'D%';
```

### <font color='white' size='5' face='BMJUAOTF'>6.1.2 intersect 연산자</font>

<font color='white' size='4' face='BMJUAOTF'>※ Oracle 또는 SQL server에서만 사용가능 (MySQL 지원 X) ※</font>

```sql
select c.first_name, c.last_name
from customer c
where c.first_name like 'J%' and c.last_name like 'D%'
intersect
select a.first_name, a.last_name
from actor a
where a.first_name like 'J%' and a.last_name like 'D%';
```

### <font color='white' size='5' face='BMJUAOTF'>6.1.3 except 연산자</font>

<font color='white' size='4' face='BMJUAOTF'>※ Oracle 또는 SQL server에서만 사용가능 (MySQL 지원 X) ※</font>

```sql
select a.first_name, a.last_name
from actor a
where a.first_name like 'J%' and a.last_name like 'D%'
except
select c.first_name, c.last_name
from customer c
where c.first_name like 'J%' and c.last_name like 'D%';
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>6.2 집합 연산 규칙</font>

### <font color='white' size='5' face='BMJUAOTF'>6.2.1 복합 쿼리의 결과 정렬</font>

```sql
select c.first_name fname, c.last_name lname
from customer c
where c.first_name like 'J%' and c.last_name like 'D%'
union all
select a.first_name, a.last_name
from actor a
where a.first_name like 'J%' and a.last_name like 'D%'
order by lname, fname;
```

### <font color='white' size='5' face='BMJUAOTF'>6.2.2 집합 연산 순서</font>

<font size='4' color='white' face='BMJUAOTF'>서로 다른 집합 연산자를 사용하는 두 개 이상의 쿼리를 포함할 경우 복합 쿼리문의 쿼리 배치 순서를 고려해야 한다.</font>

```sql
select a.first_name, a.last_name
from actor a
where a.first_name like 'J%' and a.last_name like 'D%'
union all
select a.first_name, a.last_name
from actor a
where a.first_name like 'M%' and a.last_name like 'T%'
union
select c.first_name, c.last_name
from customer c
where c.first_name like 'J%' and c.last_name like 'D%';

-- 위 쿼리를 반대로 했을 경우 분명한 차이를 보인다
select a.first_name, a.last_name
from actor a
where a.first_name like 'J%' and a.last_name like 'D%'
union
select a.first_name, a.last_name
from actor a
where a.first_name like 'M%' and a.last_name like 'T%'
union all
select c.first_name, c.last_name
from customer c
where c.first_name like 'J%' and c.last_name like 'D%';
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>6.3 실습</font>

### <font color='white' size='5' face='BMJUAOTF'>6.3.1 실습1</font>

<pre>
<font size='4' color='white' face='BMJUAOTF'>
A = {L, M, N, O, P}
B = {P, Q, R, S, T}

A union B = {L, M, N, O, P, Q, R, S, T}
A union all B = {L, M, N, O, P, P, Q, R, S, T}
A intersect B = {P}
A except B = {L, M, N, O}
</font>
</pre>

### <font color='white' size='5' face='BMJUAOTF'>6.3.2 실습2</font>

```sql
-- 성이 L로 시작하는 모든 배우와 고객의 이름과 성을 찾는 복합 쿼리
select a.first_name, a.last_name
from actor a
where a.last_name like 'L%'
union all
select c.first_name, c.last_name
from customer c
where c.last_name like 'L%';
```

### <font color='white' size='5' face='BMJUAOTF'>6.3.3 실습3</font>

```sql
-- last_name 열을 기준으로 실습2를 정렬
select a.first_name fname, a.last_name lname
from actor a
where a.last_name like 'L%'
union all
select c.first_name, c.last_name
from customer c
where c.last_name like 'L%'
order by lname;
```
