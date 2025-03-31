---
layout: single
title: "[데이터 과학 기초] Python과 Jupyter Notebook으로 시작하는 데이터 분석 환경 구축"
categories:
  - docs
  - Data_Science
  - Python
tag: [Python, Jupyter Notebook, Anaconda, Data Analysis]
author_profile: false
sidebar:
  nav: "counts"
use_math: true
---

# 🏆 Python과 Jupyter Notebook으로 데이터 분석 시작하기

## 🍑 데이터 분석 환경 구축: Anaconda와 Python

### 🍔 Anaconda란 무엇인가?

Anaconda는 데이터 과학 및 머신러닝 작업을 위한 Python 배포판으로, Python과 함께 다양한 필수 라이브러리(NumPy, pandas, matplotlib 등)를 포함하고 있습니다. 또한, 패키지 관리와 가상 환경 설정을 쉽게 할 수 있는 <font color="tomato">Conda</font>라는 패키지 매니저를 제공합니다. Anaconda를 설치하면 복잡한 의존성 문제를 해결할 필요 없이 바로 데이터 분석 환경을 구축할 수 있습니다.

- 주요 특징:
  - Python과 필수 데이터 과학 라이브러리가 사전 설치됨.
  - Conda를 통해 가상 환경을 생성하여 프로젝트별로 독립적인 환경을 구성 가능.
  - Windows, macOS, Linux 모두 지원.

### 🍔 Anaconda 설치 방법

1. Anaconda 다운로드:

   - Anaconda 공식 웹사이트에서 운영체제에 맞는 설치 파일을 다운로드합니다.
   - Python 3.x 버전을 선택하는 것이 좋습니다(2025년 기준, Python 3.9 이상 권장).

2. 설치:

   - 다운로드한 설치 파일을 실행하고, 기본 설정을 유지하며 설치를 진행합니다.
   - Windows 사용자는 "Add Anaconda to my PATH environment variable" 옵션을 체크하지 않는 것이 좋습니다. 대신 Anaconda Prompt를 사용하세요.

3. 설치 확인:
   - Anaconda Prompt(Windows) 또는 터미널(macOS/Linux)을 열고 다음 명령어를 입력합니다:
     ```bash
     conda --version
     ```
   - 설치가 완료되었다면 Conda 버전이 출력됩니다.

### 🍔 가상 환경 생성 및 관리

Anaconda를 사용하면 프로젝트별로 독립적인 환경을 만들어 라이브러리 충돌을 방지할 수 있습니다.

- 가상 환경 생성:

  ```bash
  conda create -n myenv python=3.9
  ```

  여기서 `myenv`는 가상 환경 이름이며, `python=3.9`는 사용할 Python 버전을 지정합니다.

- 가상 환경 활성화:

  ```bash
  conda activate myenv
  ```

- 필요한 라이브러리 설치:
  ```bash
  conda install numpy pandas matplotlib jupyter
  ```
  이 명령어는 NumPy(수치 계산), pandas(데이터 처리), matplotlib(시각화), 그리고 Jupyter Notebook을 설치합니다.

## 🍑 Jupyter Notebook: 데이터 분석의 강력한 도구

### 🍔 Jupyter Notebook이란?

Jupyter Notebook은 코드를 작성하고 실행 결과를 바로 확인할 수 있는 웹 기반 인터랙티브 환경입니다. Python 코드를 셀 단위로 실행하며, Markdown을 사용해 문서화도 가능합니다. 데이터 분석가와 과학자들 사이에서 널리 사용되며, 코드, 시각화, 설명을 한 곳에서 관리할 수 있다는 점에서 강력합니다.

- 주요 특징:
  - 셀 단위로 코드를 실행하여 결과를 즉시 확인 가능.
  - Markdown을 지원하여 코드와 함께 문서 작성 가능.
  - 다양한 출력 형식(그래프, 표, 이미지 등)을 지원.

### 🍔 Jupyter Notebook 실행하기

1. 가상 환경에서 실행:
   가상 환경이 활성화된 상태에서 다음 명령어를 입력합니다:

   ```bash
   jupyter notebook
   ```

   이 명령어는 브라우저에서 Jupyter Notebook 인터페이스를 엽니다.

2. 새로운 노트북 생성:
   - Jupyter Notebook 인터페이스에서 "New" 버튼을 클릭하고, Python 3 커널을 선택하여 새로운 노트북을 생성합니다.
   - 생성된 노트북은 `.ipynb` 확장자로 저장되며, Python 코드와 Markdown을 함께 작성할 수 있습니다.

### 🍔 Jupyter Notebook의 기본 구조

- 셀(Cell):

  - Jupyter Notebook은 셀로 구성됩니다. 셀은 코드 셀(Python 코드를 작성)과 Markdown 셀(문서 작성)로 나뉩니다.
  - 코드 셀은 실행 시 결과를 바로 아래에 출력합니다.

- 커널(Kernel):

  - 커널은 노트북에서 실행되는 Python 환경입니다. 커널을 재시작하면 모든 변수와 상태가 초기화됩니다.

- 단축키:
  - <font color="tomato">Shift + Enter</font>: 현재 셀 실행 후 다음 셀로 이동.
  - <font color="tomato">Ctrl + Enter</font>: 현재 셀 실행.
  - <font color="tomato">A</font>: 현재 셀 위에 새 셀 추가.
  - <font color="tomato">B</font>: 현재 셀 아래에 새 셀 추가.
  - <font color="tomato">M</font>: 셀을 Markdown 모드로 전환.
  - <font color="tomato">Y</font>: 셀을 코드 모드로 전환.

## 🍑 Python 데이터 분석의 기본: 데이터 타입과 구조

Python에서 데이터를 다루기 위해서는 기본적인 데이터 타입과 구조를 이해하는 것이 중요합니다. Jupyter Notebook에서 이를 실습하며 익혀보겠습니다.

### 🍔 기본 데이터 타입

- 수치형(numeric):

  - `int`: 정수형 (예: 42)
  - `float`: 실수형 (예: 3.14)

  ```python
  # Jupyter Notebook에서 실행
  a = 42
  b = 3.14
  print(type(a))  # <class 'int'>
  print(type(b))  # <class 'float'>
  ```

- 문자열(str):

  - 텍스트 데이터를 다룰 때 사용.

  ```python
  text = "Hello, Data Science!"
  print(type(text))  # <class 'str'>
  print(text.upper())  # HELLO, DATA SCIENCE!
  ```

- 리스트(list):
  - 순서가 있는 데이터의 집합. 다양한 데이터 타입을 포함 가능.
  ```python
  data = [1, 2, "three", 4.0]
  print(data)  # [1, 2, 'three', 4.0]
  data.append(5)  # 리스트 끝에 5 추가
  print(data)  # [1, 2, 'three', 4.0, 5]
  ```

### 🍔 데이터 분석을 위한 라이브러리 활용

Jupyter Notebook에서 데이터 분석을 시작하려면 몇 가지 필수 라이브러리를 이해해야 합니다.

- NumPy:

  - 수치 계산을 위한 라이브러리로, 다차원 배열(`ndarray`)을 지원합니다.

  ```python
  import numpy as np
  array = np.array([1, 2, 3, 4])
  print(array)  # [1 2 3 4]
  print(array.mean())  # 2.5
  ```

- pandas:

  - 테이블 형태의 데이터를 다루기 위한 라이브러리. `DataFrame`과 `Series` 객체를 제공합니다.

  ```python
  import pandas as pd
  data = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}
  df = pd.DataFrame(data)
  print(df)
  #     Name  Age
  # 0  Alice   25
  # 1    Bob   30
  ```

- matplotlib:
  - 데이터 시각화를 위한 라이브러리.
  ```python
  import matplotlib.pyplot as plt
  x = [1, 2, 3, 4]
  y = [10, 20, 25, 30]
  plt.plot(x, y)
  plt.title("Simple Line Plot")
  plt.show()
  ```

## 🍑 Jupyter Notebook에서 Markdown 활용

Jupyter Notebook의 강력한 기능 중 하나는 Markdown을 사용해 문서를 작성할 수 있다는 점입니다. Markdown을 활용하면 코드와 함께 설명을 깔끔하게 정리할 수 있습니다.

- 헤더:

  ```markdown
  # 제목 1

  ## 제목 2

  ### 제목 3
  ```

- 리스트:

  ```markdown
  - 항목 1
  - 항목 2
    - 하위 항목
  ```

- 수식:

  - LaTeX를 사용해 수식을 작성할 수 있습니다.

  ```markdown
  $$ E = mc^2 $$
  ```

- 코드 블록:

  ````markdown
  ```python
  print("Hello, World!")
  ```
  ````
