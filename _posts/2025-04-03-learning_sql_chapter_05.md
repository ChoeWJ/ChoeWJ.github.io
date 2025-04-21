---
layout: single
title: "[Learning_SQL] 🔐 Chapter_05"
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

# <font color='skyblue' size='7' face='BMJUAOTF'>Chapter 5 다중 테이블 쿼리</font>

## <font size='6' face='BMJUAOTF' color='lightgreen'>5.1 조인</font>

```sql
-- 테이블 정의 확인
desc customer;
desc address;
```

### <font color='white' size='5' face='BMJUAOTF'>5.1.1 데카르트 곱 <sup>cross join</sup></font>

- <font color='white' size='4' face='BMJUAOTF'>모든 순열을 생성</font>
- <font color='white' size='4' face='BMJUAOTF'>쿼리가 어떻게 두 테이블을 조인해야할지 지정하지 않았기 때문</font>

```sql
-- cross join
select concat(c.first_name, ' - ', c.last_name) customer_name, a.address
from customer c
    join address a;
```

### <font color='white' size='5' face='BMJUAOTF'>5.1.2 내부 조인 <sup>inner join</sup></font>

- <font color='white' size='4' face='BMJUAOTF'>한쪽 테이블에는 address_id 열의 값이 있지만 다른 테이블에는 없는 경우,<br> 해당 값을 포함하는 행에 대한 조인은 실패하고 해당 행이 결과에서 제외된다.</font>
  <font color='white' size='4' face='BMJUAOTF'></font>

```sql
-- inner join
select concat(c.first_name, ' - ', c.last_name) customer_name, a.address
from customer c
    join address a on c.address_id = a.address_id;

-- using
select concat(c.first_name, ' - ', c.last_name) customer_name, a.address
from customer c
    inner join address a using (address_id);
```

### <font color='white' size='5' face='BMJUAOTF'>5.1.3 ANSI 조인 문법</font>

- <font color='white' size='4' face='BMJUAOTF'>SQL92 구문 이전의 SQL 문법</font>
  <font color='white' size='4' face='BMJUAOTF'></font>

```sql
-- ANSI 조인 문법
select concat(c.first_name, ' - ', c.last_name) customer_name, a.address
from customer c, address a
where c.address_id = a.address_id;

-- SQL92 조인과의 차이점
---- ANSI
select concat(c.first_name, ' - ', c.last_name) customer_name, a.address
from customer c, address a
where c.address_id = a.address_id
    and a.postal_code = '52137';

---- SQL92
select concat(c.first_name, ' - ', c.last_name) customer_name, a.address
from customer c
    inner join address a on c.address_id = a.address_id
where a.postal_code = '52137';
```

## <font size='6' face='BMJUAOTF' color='lightgreen'>5.2 세 개 이상 테이블 조인</font>

```sql
select c.first_name, c.last_name, ct.city
from customer c
    inner join address a on c.address_id = a.address_id
    inner join city ct on a.city_id = ct.city_id;
```

<div align='center'>
<pre>
<font size='4' face='BMJUAOTF' color='white'>
<font size='6' face='BMJUAOTF' color='white'>조인의 순서?</font>

SQL은 비절차적 언어!!!
즉, 객체를 정의하는 건 나지만, 쿼리를 실행하는 건 서버
서버는 셋 중 하나의 테이블을 시작점으로 선택한 다음(드라이빙 테이블<sup>driving table</sup>)
나머지 테이블을 조인할 순서를 결정한다.

하지만 순서를 결정하는 방법이 아예 없는건 아닌데
<font size='4' face='BMJUAOTF' color='lightgreen'>MYSQL</font> 에서는 <font size='4' face='BMJUAOTF' color='skyblue'>straight_join</font> 키워드를 사용하거나,
<font size='4' face='BMJUAOTF' color='lightgreen'>SQL server</font> 에서는 <font size='4' face='BMJUAOTF' color='skyblue'>force order</font> 옵션을 활용하고
<font size='4' face='BMJUAOTF' color='lightgreen'>Oracle</font> 에서는 <font size='4' face='BMJUAOTF' color='skyblue'>ordered 또는 leading</font> 힌트를 사용한다.
</font>

</pre>
</div>

### <font color='white' size='5' face='BMJUAOTF'>5.2.1 서브쿼리 사용</font>

- <font color='white' size='4' face='BMJUAOTF'>일부 데이터 셋이 서브쿼리로 생성될 경우에는 어떻게 동작할 것인가?</font>
- <font color='white' size='4' face='BMJUAOTF'>단순하게 세 개의 테이블을 조인해서 작성할 수도 있지만, 하나 이상의 서브쿼리를 사용하여 성능 및 가독성을 높이자</font>

```sql
select c.first_name, c.last_name, addr.address, addr.city
from customer c
    inner join
        (
            select a.address_id, a.address, ct.city
            from address a
                inner join city ct on a.city_id = ct.city_id
            where a.district = 'California'
        ) addr
    on c.address_id = addr.address_id;
```

### <font color='white' size='5' face='BMJUAOTF'>5.2.2 테이블 재사용</font>

```sql
-- Cate McQueen과 Cuba Birch가 출연한 영화 제목을 모두 찾기
select f.title
from film f
    inner join film_actor fa on f.film_id = fa.film_id
    inner join actor a on a.actor_id = fa.actor_id
where ((a.first_name = 'CATE' and a.last_name = "MCQUEEN")
    or a.first_name = 'CUBA' and a.last_name = 'BIRCH');

-- Cate McQueen과 Cuba Birch가 동시에 출연한 영화 제목을 모두 찾기
select f.title
from film f
    inner join film_actor fa1 on f.film_id = fa1.film_id
    inner join actor a1 on fa1.actor_id = a1.actor_id
    inner join film_actor fa2 on f.film_id = fa2.film_id
    inner join actor a2 on fa2.actor_id = a2.actor_id
where (a1.first_name = 'CATE' and a1.last_name = 'MCQUEEN')
    and (a2.first_name = 'CUBA' and a2.last_name = 'BIRCH');
```

## <font size='6' face='BMJUAOTF' color='lightgreen'>5.3 셀프 조인 <sup>self join</sup></font>

<pre>
<font face='BMJUAOTF' size='4' color='white'>
쿼리에 동일한 테이블을 한 번 이상 포함할 수 있고 또한 자기 자신과도 조인할 수 있다.
일부 테이블에는 <font color='skyblue'>자기 참조 외래키</font> <sup>self-referencin foreign key</sup>가 포함된다
</font>
</pre>

```sql
-- 전편의 제목과 전편이 있는 모든 영화 제목을 나열
select f.title, f_pnt.title prequel
from film f
    inner join film f_pnt on f_pnt.film_id = f.film_id
where f.prequel_film_id is not null;

select *
from film f
    inner join film f_pnt on f_pnt.film_id = f.film_id;
```

## <font size='6' face='BMJUAOTF' color='lightgreen'>5.4 실습</font>

### <font color='white' size='5' face='BMJUAOTF'>5.4.1 실습 1</font>

```sql
-- <#> 부분 채우기
select
from customer c
    inner join address <#1> on c.address_id = a.address_id
    inner join city ct on a.city_id = <#2>
where a.district = 'California';
```

### <font size='5' color='orange' face='BMJUAOTF'>

<#1>: a <br>
<#2>: ct.city_id
</font>

<font color='white' size='5' face='BMJUAOTF'>5.4.2 실습 2</font>

```sql
-- JOHN이라는 이름의 배우가 출연한 모든 영화의 제목
select f.title
from film f
    inner join film_actor fa on f.film_id = fa.film_id
    inner join actor a on fa.actor_id = a.actor_id
where a.first_name = "JOHN";
```

### <font color='white' size='5' face='BMJUAOTF'>5.4.3 실습 3</font>

```sql
-- 같은 도시에 있는 모든 주소를 반환
select a1.address addr1, a2.address2 addr2, a1.city_id
from address a1
    inner join address a2
where a1.city_id = a2.city_id
    and a1.address_id <> a2.address_id;
```
