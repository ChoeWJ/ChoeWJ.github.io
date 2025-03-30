---
layout: single
title: "[위클리 페이퍼] 고객 생애 가치 (LTV: Lifetime Value)"
categories:
  - docs
  - Weekly_Papers
  - PM
  - 지표분석
tag: [PM, PO, 지표분석]
author_profile: false
sidebar:
  nav: "counts"
# search: false
# redirect_from:
#   - /coding/first-posting
use_math: true
---

# 👑 고객 생애 가치 (LTV: Lifetime Value)

- LTV(Lifetime Value)는 개별 고객이 **평균적으로 기업에 가져다주는 총 수익**을 나타내는 핵심 지표로, 제품 또는 서비스의 **수익성 평가**, **마케팅 전략 수립**, **고객 세분화**에 필수적인 역할을 하는데, 특히 반복 구매 또는 구독 모델을 가진 비즈니스에서 중요한 의미를 가지며, **CAC(Customer Acquisition Cost)**와 함께 활용하여 ROI를 측정한다.

## 🍓 LTV 계산 방식

### 🍑 ① 기본 공식

- $LTV = ARPU × (평균 고객 유지 기간)$

- **$ARPU$**: <a style="color: red;">A</a>verage <a style="color: red;">R</a>evenue <a style="color: red;">P</a>er <a style="color: red;">U</a>ser (월 또는 연 기준)
- **$평균 고객 유지 기간$**: 고객의 평균 이탈 시점까지의 기간

### 🍑 ② 구매 기반 모델 공식

- $LTV = (평균 구매 금액) × (구매 빈도) × (유지 기간)$

- **$평균 구매 금액$**: 단건 구매 평균
- **$구매 빈도$**: 월/분기/년 기준 구매 횟수
- **$유지 기간$**: 활성 사용자로 남아있는 기간

## 🍓 계산 결과 예시

| 고객 유형 | 월 평균 구매액 | 월 구매 횟수 | 유지 기간 (개월) | LTV (₩)  |
| --------- | -------------- | ------------ | ---------------- | -------- |
| 고객 A    | ₩10,000        | 1회          | 12개월           | ₩120,000 |
| 고객 B    | ₩25,000        | 0.5회        | 8개월            | ₩100,000 |
| 고객 C    | ₩8,000         | 2회          | 6개월            | ₩96,000  |

## 🍓 LTV vs CAC (고객 획득 비용) 비교

- LTV와 CAC는 반드시 함께 고려되어야 하며, **LTV > CAC**가 유지되어야 비즈니스가 성장할 수 있다.
- 예를 들어 CAC가 ₩80,000인데 LTV가 ₩70,000이라면 고객을 데려올수록 손해를 보는 구조로 볼 수 있다.

### 🍑 이상적인 구조

- CAC = ₩50,000
- LTV = ₩150,000
- ROI = 3배 이상 → 확장 가능성 있음

## 🍓 시각화: LTV와 CAC 비교 추이

```python
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# 월 단위 시계열 생성
months = pd.date_range(start="2024-02-01", periods=12, freq='MS')

# LTV는 점진적으로 상승, CAC는 고정
ltv = np.linspace(60, 170, 12)  # 선형 증가 예시
cac = [60] * 12  # 고정된 CAC

# 그래프 생성
plt.figure(figsize=(8, 5))
plt.plot(months, ltv, marker='o', label='LTV')
plt.plot(months, cac, linestyle='--', label='CAC')
plt.title('LTV vs CAC Over Time')
plt.xlabel('Month')
plt.ylabel('USD')
plt.xticks(rotation=45)
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()
```

![ltv_vs_cac]({{ site.url }}/images/graphs/ltv_vs_cac.png)

- 위 그래프는 월별로 측정한 고객 생애 가치와 고객 획득 비용을 비교한 것으로 이 격차가 클수록 **마케팅 효율성**이 높고, 적을수록 **전환율 개선** 혹은 **유지율 개선 전략**이 필요하다는 신호이다.

## 🍓 활용 예시

- **LTV가 높은 고객군을 세그먼트화**하여 리텐션 전략 집중
- **LTV가 낮지만 유입이 많은 경로**는 별도 리마케팅 설계
- **CAC가 높은 채널**은 리타겟팅 또는 제거 대상

## 🍓 확장 분석: LTV 예측 모델링

- 회귀분석 / 머신러닝 기반으로 **고객 생애 가치 예측 모델**을 학습시켜 고가치 고객을 조기 식별
- 고객 점수 기반 프로모션 설계 또는 CRM 자동화에 적용 가능
