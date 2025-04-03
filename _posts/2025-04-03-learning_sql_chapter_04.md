---
layout: single
title: "[Learning_SQL] 🔐 Chapter_04"
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

# <font size='7' color='skyblue' face='BMJUAOTF'>필터링</font>

## <font size='6' face='BMJUAOTF' color='lightgreen'>4.1 조건 작성</font>

- <font size='4' color='white' face='BMJUAOTF'>조건은 하나 이상의 <font color='tomato'>연산자</font>와 결합된 하나 이상의 <font color='tomato'>표현식</font>으로 구성된다.
- <font size='4' color='white' face='BMJUAOTF'>연산자</font>
  - <font size='4' color='white' face='BMJUAOTF'>=, !=, <, >, like, in, between</font>
  - <font size='4' color='white' face='BMJUAOTF'>산술 연산자</font>
- <font size='4' color='white' face='BMJUAOTF'>표현식의 구성</font>
  - <font size='4' color='white' face='BMJUAOTF'>숫자</font>
  - <font size='4' color='white' face='BMJUAOTF'>테이블 또는 뷰의 열</font>
  - <font size='4' color='white' face='BMJUAOTF'>문자열</font>
  - <font size='4' color='white' face='BMJUAOTF'>내장함수</font>
  - <font size='4' color='white' face='BMJUAOTF'>서브쿼리</font>
  - <font size='4' color='white' face='BMJUAOTF'>표현식 목록</font>

## <font size='6' color='lightgreen' face='BMJUAOTF'>4.2 조건 유형</font>

### <font size='5' color='white' face='BMJUAOTF'>4.2.1 동등 조건 <sup>equality conditions</sup></font>

```sql
-- 2005년 6월 14일에 영화를 대여한 모든 고객의 이메일 주소
select c.email
from customer c
    inner join rental r on c.customer_id = r.customer_id
where date(r.rental_date) = '2005-06-14';
```

### <font size='5' color='white' face='BMJUAOTF'>4.2.1 부등 조건 <sup>inequality conditions</sup></font>

```sql
-- 2005년 6월 14일에 영화를 대여하지 않음 모든 고객의 이메일 주소
select c.email
from customer c
    inner join rental r on c.customer_id = r.customer_id
where date(r.rental_date) <> '2005-06-14';  -- <> 대신 != 도 사용가능
```

### <font size='5' color='white' face='BMJUAOTF'>4.2.2 동등 조건을 사용한 데이터 변경</font>

```sql
-- 동등조건
-- 대여 날짜가 2004년인 행을 제거
delete from rental
where year(rental_date) = 2004;

-- 부등조건
-- 2005년이거나 2006년이 아닌 행을 제거
delete from rental
where year(rental_date) <> 2005 and year(rental_date) <> 2006;
```

### <font size='5' color='white' face='BMJUAOTF'>4.2.3 범위 조건</font>

```sql
-- 2005년 5월 25일 이전의 모든 영화 대여 정보
select customer_id, rental_date
from rental
where rental_date < '2005-05-25';

-- 2005년 6월 14일 부터 2005년 6월 16일 사이의 모든 영화 대여정보
select customer_id, rental_date
from rental
where rental_date <= '2005-06-16'
    and rental_date >= '2005-06-14';

-- between 연산자
select customer_id, rental_date
from rental
where rental_date between '2005-06-14' and '2005-06-16';
```

### <font size='5' color='white' face='BMJUAOTF'>4.2.4 멤버십조건</font>

```sql
-- 등급이 'G' or 'PG'인 모든 영화
select title, rating
from film
where rating = 'G' or rating = 'PG';

-- in 연산자
select title, rating
from film
where rating in ('G', 'PG');

-- 서브쿼리 사용
-- 'PET'이라는 문자열이 포함된 모든 영화
select title rating
from film
where rating in
    (
        select rating
        from film
        where title like '%PET%'
    );

-- not in 연산자
-- 'PG-13', 'R', 'NC-17'등급이 아닌 모든 영화
select title, rating
from film
where rating not in ('PG-13', 'R', 'NC-17');
```

### <font size='5' color='white' face='BMJUAOTF'>4.2.5 일치 조건</font>

```sql
-- 성이 Q로 시작하는 모든 고객
select last_name, first_name
from customer
where left(last_name, 1) = 'Q';
```

### <font size='5' color='white' face='BMJUAOTF'>4.2.6 일치 조건 와일드 카드</font>

<pre>
<font size='5' color='white' face='BMJUAOTF'>
• <font size='5' color='skyblue' face='BMJUAOTF'>특정 문자로 시작∙종료</font>하는 문자열
• <font size='5' color='skyblue' face='BMJUAOTF'>부분 문자열<sup>substring</sup>로 시작∙종료</font>하는 문자열
• <font size='5' color='skyblue' face='BMJUAOTF'>문자열 내에 특정 문자를 포함</font>하는 문자열
• <font size='5' color='skyblue' face='BMJUAOTF'>문자열 내에 부분 문자열을 포함</font>하는 문자열
• <font size='5' color='skyblue' face='BMJUAOTF'>개별 문자에 관계없이 특정 형식</font>의 문자열
• 와일드 카드<sup>wildcard</sup> 문자
    <table>
        <tr>
            <th>와일드카드 문자</th>
            <th>일치</th>
        </tr>
        <tr>
            <td>_</td>
            <td>정확히 한 문자</td>
        </tr>
        <tr>
            <td>%</td>
            <td>개수에 상관없이 모든 문자(0포함)</td>
        </tr>
    </table>
</font>
</pre>

```sql
-- 두 번째 위치에 A를 포함하고, 네 번째 위치에 T를 포함하며 마지막에 S로 끝나는 문자열
select last_name, first_name
from customer
where last_name like '_A_T%S';
```

<font size='5' color='white' face='BMJUAOTF'>
• 검색 표현식 사례
    <table>
        <tr>
            <th>검색 표현식</th>
            <th>해석</th>
        </tr>
        <tr>
            <td>F%</td>
            <td>F로 시작하는 문자열</td>
        </tr>
        <tr>
            <td>%t</td>
            <td>t로 끝나는 문자열</td>
        </tr>
        <tr>
            <td>%bas</td>
            <td>문자열 'bas'를 포함하는 문자열</td>
        </tr>
        <tr>
            <td>__t_</td>
            <td>세 번째 위치에 t가 있는 4글자 문자열</td>
        </tr>
        <tr>
            <td>___-__-____</td>
            <td>네 번쨰와 일곱 번째 위치에 - 가 있는 11자리 문자열</td>
        </tr>
    </table>

</font>

```sql
-- 성이 Q 또는 Y로 시작하는 모든 고객
select last_name, first_name
from customer
where last_name like 'Q%' or last_name like 'Y%';
```

### <font size='5' color='white' face='BMJUAOTF'>4.2.7 정규 표현식</font>

```sql
-- 성이 Q 또는 Y로 시작하는 모든 고객 (정규 표현식)
select last_name, first_name
from customer
where last_name REGEXP '^[QY]';
```

## <font size='6' color='lightgreen' face='BMJUAOTF'>4.3 NULL</font>

```sql
-- null값 확인
-- 아직 반환되지 않은 모든 영화 대여 정보
select rental_id, customer_id
from rental
where return_date is null;

-- 반환된 모든 영화 대여 정보
select rental_id, customer_id, return_date
from rental
where return_date is not null;

-- 5월과 8월 사이에 반납되지 않은 모든 대여 정보
select rental_id, customer_id, return_date
from rental
where return_date is null
    or return_date not between '2005-05-01' and '2005-09-01';
```

## <font size='6' color='lightgreen' face='BMJUAOTF'>4.4 실습</font>

### <font size='5' color='white' face='BMJUAOTF'>4.4.1 실습1</font>

```sql
select payment_id
from payment
where customer_id <> 5
    and (amount > 8 or date(payment_date) = '2005-08-23');
```

### <font size='5' color='white' face='BMJUAOTF'>4.4.2 실습2</font>

```sql
select payment_id
from payment
where customer_id = 5
    and not (amount > 6 or date(payment_date) = '2005-06-19');
```

### <font size='5' color='white' face='BMJUAOTF'>4.4.3 실습3</font>

```sql
-- 금액이 1.98, 7.98 또는 9.98인 모든 행
select *
from payment
where amount in (1.98, 7.98, 9.98);
```

### <font size='5' color='white' face='BMJUAOTF'>4.4.4 실습4</font>

```sql
-- 두 번째 성이 A이고 다음에 W가 있는 모든 고객
select customer_id, first_name, last_name
from customer
where last_name like '_A%W%';
```
