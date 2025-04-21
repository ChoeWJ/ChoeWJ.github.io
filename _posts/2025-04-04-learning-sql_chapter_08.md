---
layout: single
title: "[Learning_SQL] 🔐 Chapter_08"
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

# <font color='skyblue' size='7' face='BMJUAOTF'>Chapter 8 그룹화와 집계</font>

## <font color='lightgreen' size='6' face='BMJUAOTF'>8.1 그룹화 개념</font>

```sql
-- 기본 템플릿
select customer_id
from customer
group by customer_id;

-- 집계 함수 사용
select customer_id, count(*)
from rental
group by customer_id;

-- 정렬
select customer_id, count(*)
from rental
group by customer_id
order by count(*) desc;

-- 필터링
select customer_id, count(*)
from rental
group by customer_id
having count(*) >= 40
order by count(*) desc;
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>8.2 집계 함수</font>

```sql
-- 종류
select
    max(amount) max_amt,
    min(amount) min_amt,
    avg(amount) avg_amt,
    sum(amount) total_amt,
    count(*) num_payments
from payment;
```

### <font color='white' size='5' face='BMJUAOTF'>8.2.1 명시적 그룹과 암시적 그룹</font>

```sql
-- group by 절이 없으면 암시적 그룹
-- 명시적 지정
select
    customer_id,
    max(amount) max_amt,
    min(amount) min_amt,
    avg(amount) avg_amt,
    sum(amount) total_amt,
    count(*) num_payments
from payment
group by customer_id;
```

### <font color='white' size='5' face='BMJUAOTF'>8.2.2 고유값 계산</font>

```sql
select
    count(customer_id) num_rows,
    count(distinct customer_id) num_customers
from payment;
```

### <font color='white' size='5' face='BMJUAOTF'>8.2.3 표현식 사용</font>

```sql
-- 영화를 대여한 후 반환까지 걸린 최대 일수
select max(datediff(return_date, rental_date))
from rental;
```

### <font color='white' size='5' face='BMJUAOTF'>8.2.4 Null값 처리</font>

```sql
create table number_tbl
    (val smallint);

insert into number_tbl values(1);
insert into number_tbl values(3);
insert into number_tbl values(5);
insert into number_tbl values(Null);

select
    count(*) num_rows,
    count(val) num_vals,
    sum(val) total,
    max(val) max_val,
    avg(val) avg_val
from number_tbl;
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>8.3 그룹 생성</font>

### <font color='white' size='5' face='BMJUAOTF'>8.3.1 단일 열 그룹화</font>

```sql
select actor_id, count(*)
from film_actor
group by actor_id;
```

### <font color='white' size='5' face='BMJUAOTF'>8.3.2 다중 열 그룹화</font>

```sql
select fa.actor_id, f.rating, count(*)
from film_actor fa
    inner join film f on fa.film_id = f.film_id
group by fa.actor_id, f.rating
order by fa.actor_id, f.rating;
```

### <font color='white' size='5' face='BMJUAOTF'>8.3.3 그룹화와 표현식</font>

```sql
select
    extract(year from rental_date) year,
    count(*) how_many
from rental
group by extract(year from rental_date);
```

### <font color='white' size='5' face='BMJUAOTF'>8.3.4 롤업 생성</font>

```sql
-- group by 결과로 출력된 항목들의 합계를 나타내는 방법
select fa.actor_id, f.rating, count(*)
from film_actor fa
    inner join film f on fa.film_id = f.film_id
group by fa.actor_id, f.rating
with rollup
order by fa.actor_id, f.rating;
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>8.4 그룹 필터조건</font>

```sql
select fa.actor_id, f.rating, count(*)
from film_actor fa
    inner join film f on fa.film_id = f.film_id
where f.rating in ('G', 'PG')
group by fa.actor_id, f.rating
having count(*) > 9
order by fa.actor_id, f.rating;
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>8.5 실습</font>

### <font color='white' size='5' face='BMJUAOTF'>8.5.1 실습1</font>

```sql
-- payment 테이블의 행 수를 계산
select count(*)
from payment;
```

### <font color='white' size='5' face='BMJUAOTF'>8.5.2 실습2</font>

```sql
-- 각 고객의 지불 횟수
select
    customer_id,
    count(*),
    sum(amount) total_amt
from payment
group by customer_id;
```

### <font color='white' size='5' face='BMJUAOTF'>8.5.3 실습3</font>

```sql
select
    customer_id,
    count(*),
    sum(amount) total_amt
from payment
group by customer_id
having count(*) >= 40
order by count(*) desc;
```
