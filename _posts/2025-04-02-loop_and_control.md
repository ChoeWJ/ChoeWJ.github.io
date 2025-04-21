---
layout: single
title: "[데이터 과학 기초] Python 제어문과 반복문"
categories:
  - docs
  - Data
  - Python
tag: [Python, Data Analysis]
author_profile: false
sidebar:
  nav: "counts"
use_math: true
---

# 🏆 Python으로 시작하는 제어문과 반복문

## 🛠️ Python 제어문: 프로그램 흐름 제어하기

### 📌 제어문이란?

- 제어문은 프로그램의 실행 흐름을 조건에 따라 제어하는 구문이다
- Python에서는 <font color="tomato">if, elif, else</font>를 사용해 조건에 따라 다른 코드를 실행할 수 있다

- 기본 `if` 문법

  ```python
  x = 10
  if x > 0:
      print("x는 양수이다")
  ```

  - 조건(`x > 0`)이 참일 경우 들여쓰기된 블록이 실행

- `if-else` 문법:

  ```python
  x = -5
  if x > 0:
      print("x는 양수이다")
  else:
      print("x는 0 또는 음수이다")
  ```

  - 조건이 거짓일 경우 `else` 블록이 실행

- `if-elif-else` 문법
  ```python
  x = 0
  if x > 0:
      print("x는 양수이다")
  elif x == 0:
      print("x는 0이다")
  else:
      print("x는 음수이다")
  ```
  - `elif`를 사용해 여러 조건을 순차적으로 검사할 수 있다

### 📌 중첩 제어문

- 중첩 `if` 예시

  ```python
  age = 25
  has_id = True

  if age >= 19:
      if has_id:
          print("입장 가능합니다.")
      else:
          print("신분증을 제시해주세요.")
  else:
      print("19세 미만은 입장 불가합니다.")
  ```

## 🛠️ Python 반복문: 반복 작업 처리하기

### 🔄 `for` 반복문

- 기본 `for` 문법:

  ```python
  fruits = ["사과", "바나나", "오렌지"]
  for fruit in fruits:
      print(f"나는 {fruit}를 좋아합니다.")
  ```

  출력:

  ```
  나는 사과를 좋아합니다.
  나는 바나나를 좋아합니다.
  나는 오렌지를 좋아합니다.
  ```

- `range()`와 함께 사용:
  ```python
  for i in range(5):
      print(f"반복 {i+1}회")
  ```
- `range(5)`는 0부터 4까지의 숫자를 생성하며, 출력은 다음과 같다
  ```
  반복 1회
  반복 2회
  반복 3회
  반복 4회
  반복 5회
  ```

### 🔄 `while` 반복문

- 기본 `while` 문법:

  ```python
  count = 0
  while count < 5:
      print(f"카운트: {count}")
      count += 1
  ```

  출력:

  ```
  카운트: 0
  카운트: 1
  카운트: 2
  카운트: 3
  카운트: 4
  ```

- 무한 루프와 `break`:

  ```python
  while True:
      user_input = input("종료하려면 'exit'를 입력하세요: ")
      if user_input == "exit":
          break
      print(f"입력값: {user_input}")
  ```

  - `break`는 반복문을 즉시 종료합니다.

- `continue` 사용:
  ```python
  for i in range(10):
      if i % 2 == 0:
          continue  # 짝수는 건너뜀
      print(f"홀수: {i}")
  ```
  - `continue`는 현재 반복을 건너뛰고 다음 반복으로 넘어갑니다. 출력:
  ```
  홀수: 1
  홀수: 3
  홀수: 5
  홀수: 7
  홀수: 9
  ```

## 🛠️ 실습: 간단한 리스트 관리 프로그램 만들기

### 📝 프로그램 코드

```python
# 리스트 초기화
items = []

while True:
    print("\n=== 리스트 관리 프로그램 ===")
    print("1. 항목 추가")
    print("2. 항목 삭제")
    print("3. 리스트 보기")
    print("4. 종료")

    choice = input("선택 (1-4): ")

    # 항목 추가
    if choice == "1":
        item = input("추가할 항목: ")
        items.append(item)
        print(f"'{item}'이(가) 추가되었습니다.")

    # 항목 삭제
    elif choice == "2":
        if len(items) == 0:
            print("리스트가 비어 있다")
        else:
            print("현재 리스트:", items)
            item = input("삭제할 항목: ")
            if item in items:
                items.remove(item)
                print(f"'{item}'이(가) 삭제되었습니다.")
            else:
                print("해당 항목이 리스트에 없습니다.")

    # 리스트 보기
    elif choice == "3":
        if len(items) == 0:
            print("리스트가 비어 있다")
        else:
            print("현재 리스트:")
            for i, item in enumerate(items, 1):
                print(f"{i}. {item}")

    # 종료
    elif choice == "4":
        print("프로그램을 종료합니다.")
        break

    else:
        print("잘못된 입력이다 1-4 사이의 숫자를 입력하세요.")
```

### 📝 실행 및 테스트

1. 위 코드를 `list_manager.py` 파일로 저장합니다.
2. 터미널에서 실행:
   ```bash
   python list_manager.py
   ```
3. 프로그램을 실행하여 다음 작업을 테스트합니다:
   - 항목 추가: "사과", "바나나" 추가.
   - 리스트 보기: 추가된 항목 확인.
   - 항목 삭제: "사과" 삭제.
   - 종료: 프로그램 종료.

### 📝 실행 예시

```
=== 리스트 관리 프로그램 ===
1. 항목 추가
2. 항목 삭제
3. 리스트 보기
4. 종료
선택 (1-4): 1
추가할 항목: 사과
'사과'이(가) 추가되었습니다.

=== 리스트 관리 프로그램 ===
1. 항목 추가
2. 항목 삭제
3. 리스트 보기
4. 종료
선택 (1-4): 1
추가할 항목: 바나나
'바나나'이(가) 추가되었습니다.

=== 리스트 관리 프로그램 ===
1. 항목 추가
2. 항목 삭제
3. 리스트 보기
4. 종료
선택 (1-4): 3
현재 리스트:
1. 사과
2. 바나나

=== 리스트 관리 프로그램 ===
1. 항목 추가
2. 항목 삭제
3. 리스트 보기
4. 종료
선택 (1-4): 2
현재 리스트: ['사과', '바나나']
삭제할 항목: 사과
'사과'이(가) 삭제되었습니다.

=== 리스트 관리 프로그램 ===
1. 항목 추가
2. 항목 삭제
3. 리스트 보기
4. 종료
선택 (1-4): 4
프로그램을 종료합니다.
```

## 🛠️ 리스트 컴프리헨션과 조건문 활용

- 리스트 컴프리헨션(List Comprehension)을 통해 반복문과 조건문을 간결하게 작성할 수 있다

- 리스트 컴프리헨션 예시:

  ```python
  # 1부터 10까지 짝수만 포함하는 리스트 생성
  even_numbers = [x for x in range(1, 11) if x % 2 == 0]
  print(even_numbers)  # [2, 4, 6, 8, 10]
  ```

- 중첩 리스트 컴프리헨션:
  ```python
  # 2x3 행렬 생성
  matrix = [[i * j for j in range(1, 4)] for i in range(1, 3)]
  print(matrix)  # [[1, 2, 3], [2, 4, 6]]
  ```
