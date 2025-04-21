---
layout: single
title: "[데이터 분석을 위한 통계학] 자유도(Degrees of Freedom)"
categories:
  - docs
  - Statistics
  - For_Data
tag: [python, Statistics, Selenium]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# <font color='skyblue'>자유도</font>란?

- 통계학에서 <font color='skyblue'>자유도</font>(Degrees of Freedom, DoF)는 데이터 분석이나 통계적 추정에서 <font color='tomato'>변수가 자유롭게 변할 수 있는 독립적인 값의 수</font>를 의미합니다.
- 쉽게 말해, 어떤 제약 조건을 만족하면서도 자유롭게 선택할 수 있는 값의 개수라고 생각할 수 있습니다.
- <font color='skyblue'>자유도</font>는 주로 분산, 표준편차, t-검정, 카이제곱 검정 등 통계량을 계산하거나 분포를 정의할 때 중요한 역할을 합니다.

- <font color='skyblue'>자유도</font>는 "제약 없이 자유롭게 변할 수 있는 값의 수"로, 통계 계산에서 데이터의 독립성을 반영합니다. 예를 들어, 표본 분산에서 $n-1$을 사용하는 것은 평균이라는 제약을 고려한 결과입니다. 이 개념은 통계 모델의 정확성과 신뢰성을 보장하는 데 핵심적인 역할을 합니다.

## 예시 1: 표본 분산에서의 <font color='skyblue'>자유도</font>

- 데이터가 $n$개 있다고 가정
- 표본 평균 $\bar{x} = \frac{x_1 + x_2 + dots + x_n}{n}$을 계산합니다.
- 평균을 알면, $n-1$개의 값만 자유롭게 선택할 수 있고, 마지막 값은 평균을 만족시키기 위해 고정됩니다.
- 따라서 <font color='skyblue'>자유도</font>는 $n-1$이 됩니다. 이 때문에 표본 분산 공식에서 분모가 $n-1$로 사용됩니다:
- $s^2 = \frac{1}{n-1}{\sum_{i=1}^{n} (x_i - \bar{x})^2}$

## 예시 2: 간단한 수학적 이해

- 숫자 3개의 합이 15가 되어야 한다고 가정
- $x_1$과 $x_2$를 자유롭게 선택할 수 있습니다
- 그러면 $x_3 = 15 - 4 - 6 = 5$로 고정됩니다.
- 여기서 <font color='skyblue'>자유도</font>는 $2((3-1))$입니다.

## 통계학에서의 주요 사례

1. 표본 분산과 표준편차:

   - <font color='skyblue'>자유도</font> = $n-1$: 평균을 계산하면서 1개의 <font color='skyblue'>자유도</font>가 제약으로 소실됩니다.
   - 모집단 분산에서는 <font color='skyblue'>자유도</font>가 $N$인데, 이는 표본이 아닌 전체 데이터를 다루기 때문입니다.

2. t-분포 (t-검정):

   - <font color='skyblue'>자유도</font>는 표본 크기에서 1을 뺀 값 $n-1$으로, 표본 평균의 분산을 추정할 때 사용됩니다.
   - 예: 단일 표본 t-검정에서 $df = n-1$.

3. 카이제곱 분포 (Chi-Square):

   - <font color='skyblue'>자유도</font>는 독립적인 변수의 수에 따라 달라집니다.
   - 예: $k$개의 범주가 있는 적합도 검정에서는 $df = k-1$.

4. 회귀 분석:
   - 선형 회귀에서 <font color='skyblue'>자유도</font>는 데이터 포인트 수$n$에서 추정된 파라미터 수$(p$)를 뺀 값입니다.
   - 잔차 <font color='skyblue'>자유도</font>: $df = n - p$.

## 왜 <font color='skyblue'>자유도</font>가 중요한가?

- 불편 추정량: <font color='skyblue'>자유도</font>를 $n-1$로 설정하면 표본 분산이 모집단 분산의 불편 추정량이 됩니다. $n$으로 나누면 분산이 과소 추정됩니다.
- 분포 정의: t-분포, F-분포, 카이제곱 분포 등은 <font color='skyblue'>자유도</font>에 따라 모양이 달라지며, 이는 통계적 검정에서 정확한 임계값을 찾는 데 필요합니다.
