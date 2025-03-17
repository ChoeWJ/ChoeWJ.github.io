---
layout: single
title: "사이킷런의 내장데이터"
categories: machine_learning
tag: [python, ML, Data]
author_profile: false
# sidebar:
#   nav: "docs"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 👑 사이킷런 내장데이터

```python
# 사이킷런 datasets 라이브러리에서 붓꽃(iris) 데이터 불러오기
from sklearn.datasets import load_iris

iris_df = load_iris()  # 붓꽃(iris)데이터 로드

print(type(iris_df))  # 붓꽃(iris) 데이터 타입 출력
print()  # 한 칸 띄우기
print(f"붓꽃(iris)데이터 셋의 키:\n{iris_df.keys()}")  # 붓꽃(iris) 데이터 키값들 출력

"""출력 결과"""
<class 'sklearn.utils._bunch.Bunch'>

붓꽃(iris)데이터 셋의 키:
dict_keys(['data', 'target', 'frame', 'target_names', 'DESCR', 'feature_names', 'filename', 'data_module'])
```

## 🍑 결과 분석

- ### <class 'sklearn.utils.\_bunch.Bunch'>
  - Bunch는 **파이썬의 딕셔너리와 유사한 데이터 구조**
  - 사이킷런 데이터셋을 담는 특수한 딕셔너리 형태의 객체
  - 딕셔너리처럼 ["키"]로 접근가능하고 속성(.)접근도 가능함
- ### 키값들

  - `data`
    - 입력 데이터(feature)
    - 출력 type: <class 'numpy.ndarray'>
  - `target`
    - 타겟 데이터(target)
    - 출력 type: <class 'numpy.ndarray'>
  - `frame`
    - Pandas DataFrame 형태의 데이터 셋
    - 출력 type: NoneType
  - `target_names`
    - 타겟 클래스 이름
    - 출력 type: <class 'numpy.ndarray'>
    - 출력 예시: ['setosa', 'versicolor', 'virginica']
  - `DESCR`
    - 데이터 셋에 대한 상세 설명
    - print(iris_df.DESCR) 출력 결과값

  ![004]({{site.url}}/images/2025-03-18-built_in_data_type/004-2248500.png)
  ![005]({{site.url}}/images/2025-03-18-built_in_data_type/005-2248503.png)
  ![006]({{site.url}}/images/2025-03-18-built_in_data_type/006-2248507.png)

  - `feature_names`
    - 각 특성(feature)이름들
    - 출력 type: <class 'list'>
    - 출력 예시: ['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']
  - `filename`
    - 데이터 파일 경로
    - 출력 예시: iris.csv
  - `data_module`
    - 데이터셋이 속한 모듈
    - 출력 예시: sklearn.datasets.data

## 🍑 주요 데이터셋 목록

| `카테고리`                          | `데이터셋 이름`        | `설명`                                           |
| ----------------------------------- | ---------------------- | ------------------------------------------------ |
| 분류 (Classification)               | load_iris()            | 붓꽃(아이리스) 데이터셋                          |
|                                     | load_digits()          | 손글씨 숫자(0~9) 데이터 셋                       |
|                                     | load_wine()            | 와인 품질 분류 데이터 셋                         |
|                                     | load_breast_cancer()   | 유방암(Breast Cancer) 진단 데이터셋              |
| 회귀(Regression)                    | load_diabetes()        | 당뇨병(당뇨 예측) 데이터셋                       |
| 군집화(Clustering)                  | make_blobs()           | 가상의 클러스터형 데이터 생성                    |
|                                     | make_moons()           | 반달(Moon) 형태의 데이터 셋                      |
|                                     | make_circles()         | 원형 데이터 셋                                   |
| 차원 축소(Dimensionality Reduction) | make_swiss_roll()      | 3D 스위스 롤 형태 데이터                         |
|                                     | make_s_curve()         | S-곡선 형태의 데이터                             |
| 외부 데이터셋(Fetch API)            | fetch_olivetti_faces() | 얼굴 이미지 데이터(Olivetti Faces)               |
|                                     | fetch_lfw_people()     | 유명 인물 얼굴 데이터(Labeled Faces in the Wild) |
|                                     | fetch_covtype()        | 숲의 토양 유형 데이터                            |
|                                     | fetch_rcv1()           | 뉴스 기사 데이터 (Reuters RCV1)                  |

> ※ 보스턴 데이터 셋은 인종차별 논란으로 최근 사이킷런 데이터셋에서는 삭제됨
