---
layout: single
title: "[Learning_SQL] 🔐 Chapter_07"
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

# <font color='skyblue' size='7' face='BMJUAOTF'>Chapter 7 데이터 생성, 조작, 변환</font>

```sql
-- chapter 7에서 사용할 테이블 생성
create table string_tbl (
    char_fld char(30),
    vchar_fld varchar(30),
    text_fld text
);
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>7.1 문자열 데이터 처리</font>

### <font color='white' size='5' face='BMJUAOTF'>7.1.1 문자열 생성</font>

<font color='white' size='4' face='BMJUAOTF'>문자열 데이터를 테이블에 삽입할 때, 해당 열의 최대 크기를 초과하면 서버에서 예외가 발생한다</font>

```sql
insert into string_tbl (char_fld, vchar_fld, text_fld)
    value (
        'This is char data',
        'This is varchar data',
        'This is text data'
    );
```

### <font color='white' size='5' face='BMJUAOTF'>7.1.2 숫자를 반환하는 문자열 함수</font>

```sql
-- length()
select
    length(char_fld) char_length,
    length(vchar_fld) varchar_length,
    length(text_fld) text_length
from string_tbl;

-- position()
-- 문자의 시작 위치를 찾음, 없을 시 0을 반환
select position('varchar' in vchar_fld)
from string_tbl;

-- locate()
-- 특정 위치의 문자부터 검색
select locate('is', vchar_fld, 4)
from string_tbl;

-- strcmp()
-- 두 개의 문자열을 인수로 받고 대소문자 구분 없이
-- 첫 번째 문자열이 두 번째 문자열보다 앞에 오면 -1, 동일한 위치면 0, 뒤에 오면 1 을 반환한다.
```

![strcmp]({{ site.url }}/images/sql/strcmp.jpg)

```sql
-- select절에서 like 연산자 활용
-- 이름이 y로 끝나면 1, 아니면 0을 반환
select name, name like '%y' ends_in_y
from category;

-- select절에서 regexp 연산자 활용
-- 이름이 y로 끝나면 1, 아니면 0을 반환
select name, name regexp 'y$' ends_in y
from category;
```

```sql
-- insert()
-- '원래 문자열', 시작위치, 대체할 문자 개수, '대체 문자열'
select insert('goodbye world', 9, 0, 'cruel ') sting;

-- substring()
-- 문자열에서 부분 문자열을 추출
select substring('goodbye cruel wordl', 9, 5);
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>7.2 숫자 데이터 처리</font>

### <font color='white' size='5' face='BMJUAOTF'>7.2.1 산술 함수</font>

```sql
-- mod()
select mod(10, 4);

-- pow()
select pow(2, 8);
```

### <font color='white' size='5' face='BMJUAOTF'>7.2.2 숫자 자릿수 관리</font>

```sql
-- ceil(), floor(), round()
select ceil(72.445), floor(72.445), round(72.445, 2);

-- truncate()
select truncate(72.0909, 1), truncate(72.0909, 2), truncate(72.0909, 3) ;
```

### <font color='white' size='5' face='BMJUAOTF'>7.2.3 Signed 데이터 처리</font>

```sql
select account_id, sign(balance), abs(balance)
from account;
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>7.3 시간 데이터 처리</font>

### <font color='white' size='5' face='BMJUAOTF'>7.3.1 시간대 처리</font>

```sql
-- 글로벌 시간대, 세션 시간대
select @@global.time_zone, @@session.time_zone;
```

### <font color='white' size='5' face='BMJUAOTF'>7.3.2 시간대 데이터 생성</font>

```sql
-- 날짜 수정
update rental
set return_date = '2019-09-17 15:30:00'
where rental_id = '9999';

-- 문자열을 날짜로 변환
select cast('2019-09-17 15:30:00' as datetime);
select cast('2019-09-17' as date) date_field,
    cast('108:17:57' as time) time_field;

-- 날짜 생성
update rental
set return_date = str_to_date('September 17, 2019', '%M %d %Y')
where rental_id = 99999;

-- 현재 날짜, 시간 생성
select current_date(), current_time(), current_timestamp();
```

### <font color='white' size='5' face='BMJUAOTF'>7.3.3 시간 데이터 조작</font>

```sql
-- 날짜를 반환하는 시간 함수
-- 다른 날짜를 생성
select date_add(current_date(), interval 5 day);

-- 해당 월의 마지막 날 찾기
select last_day('2025-02-04');

-- 문자열을 반환하는 시간 함수
-- 해당 날짜의 요일 반환
select dayname('2025-04-04');

-- 해당 연도 부분만 추출
select extract(year from '2025-04-04 12:00:00');

-- 숫자를 반환하는 시간 함수
-- 두 날짜 사이의 전체 일 수를 반환 (시간 무시)
select datediff('2019-09-03', '2019-06-21');
```

## <font color='lightgreen' size='6' face='BMJUAOTF'>7.4 실습</font>

### <font color='white' size='5' face='BMJUAOTF'>7.4.1 실습1</font>

```sql
select substring('Please find the substring in this string', 17, 9);
```

### <font color='white' size='5' face='BMJUAOTF'>7.4.2 실습2</font>

```sql
select abs(-25.76823), sign(-25.76823), round(-25.76823, 2);
```

### <font color='white' size='5' face='BMJUAOTF'>7.4.3 실습3</font>

```sql
select extract(month from current_date());
```
