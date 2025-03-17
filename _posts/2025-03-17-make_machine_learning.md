---
layout: single
title: "첫 머신러닝 모델"
typora-root-url: ../
---

# 👑 사이킷런(Scikit-learn)이란?

- **_파이썬 기반의 머신러닝 라이브러리_**
- 다양한 머신러닝 알고리즘과 데이터 전처리, 모델 평가 기능을 제공하는 오픈소스 라이브러리
- 간단한 API, 높은 확장성, 강력한 성능으로 데이터 분석과 머신러닝 모델 구축에 주로 사용

## 💥 특징

### 🍒 다양한 머신러닝 알고리즘

- 지도 학습(Supervised Learning): 회귀(Regression),분류(Classification) 모델
- 비지도 학습(Unsupervised Learning): 군집화(Clustering), 차원 축소(Dimensionality Reduction)

### 🍒 데이터 전처리 및 변환

- 결측값 처리, 스케일링(StandardScaler, MinMaxScaler), 인코딩(LabelEncoding, OneHotEncoder)
- 특징 선택(Feature Selection), 차원축소(PCA, LDA) 지원

### 🍒 모델 평가 및 선택

- 교차 검증(Cross Validation)
- 성능 평가 지표(Precision, Recall, F1-Score, ROC-AUC)
- 하이퍼 파라미터 튜닝(GridSearchCV, RandomizedSearchCV)

## 💥 설치

```python
# 설치
pip install scikit-learn

# 버전 확인
import sklearn
print(sklearn.__version__)
```

## 💥 주요 기능 및 사용법

### 🥑 데이터 로드 (사이킷런 내장 데이터: 붓꽃(iris)데이터 셋)

```python
import pandas as pd

# 사이킷런 내장 datasets 라이브러리에서 붓꽃(iris) 데이터셋 불러오기
from sklearn.datasets import load_iris


iris = load_iris()  # 붓꽃(iris) 데이터 셋 로딩

iris_data = iris.data  # iris.data는 붓꽃(iris)데이터 셋에서 특징(feature)만으로 된 데이터를 numpy로 가지고 있음
iris_target = iris.target  # iris.target은 붓꽃(iris)데이터 셋에서 타겟(target) 데이터를 numpy로 가지고 있음

print(f"target 값: {iris_target}")  # label 값 출력
print(f"target 명: {iris.target_names}")  # label 명 출력
```

- 출력 결과

  ![001](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-17-make_machine_learning/001.png)

```python
iris_df = pd.DataFrame(data=iris_data, columns=iris.feature_names)  # DataFrame으로 변환
iris_df['target'] = iris.target  # 타겟 데이터를 DataFrame 마지막에 추가

print(iris_df.head())  # 붓꽃(iris) 데이터 확인
```

- 출력 결과

  ![002](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-17-make_machine_learning/002.png)

### 🥑 학습 데이터와 테스트 데이터 셋으로 분리

```python
# 훈련 데이터와 학습 데이터를 분리할 train_test_split 메서드 불러오기
from sklearn.model_selection import train_test_split

X = iris_data
y = iris_target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=11)
```

- `X`: 특징(feature) 데이터 (입력 데이터)
- `y`: 타겟(target) 데이터 (정답 레이블)
- `test_size=0.2`: 데이터의 20%를 테스트 세트로 사용 (나머지 80%는 훈련 세트)
- `random_state=11`: 랜덤 시드를 고정하여 재실행하여도 같은 결과를 출력하도록 설정

### 🥑 모델 학습 및 예측 수행

```python
model = DecisionTreeClassifier(random_state=11)  # model 인스턴스 생성
model.fit(X_train, y_train)  # 모델 학습 수행
pred = model.predict(X_test)  # 학습이 완료된 model 인스턴스의 데이터 예측 수행
```

### 🥑 예측 정확도 평가

```python
from sklearn.metrics import accuracy_score  # 정확도 평가 메서드 불러오기

print(f"예측 정확도: {accuracy_score(y_test, pred)}")  # 예측 정확도 측정
```

- 출력 결과

  ![003](/Users/woojinchoe/Desktop/review/ChoeWJ.github.io/images/2025-03-17-make_machine_learning/003.png)
