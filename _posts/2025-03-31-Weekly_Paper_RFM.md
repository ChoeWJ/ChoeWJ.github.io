---
layout: single
title: "[위클리 페이퍼] RFM 분석"
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

# RFM 분석 (Recency, Frequency, Monetary Value)

- RFM 분석은 고객의 구매 이력을 바탕으로 고객을 평가하고 세분화하는 대표적인 고객 가치 분석 방법
- 각각의 요소는 고객의 최근성(Recency), 빈도(Frequency), 금액(Monetary)을 의미하며, 이 세 가지 요소를 기반으로 데이터 기반의 마케팅 전략 수립이 가능하다.

## 각 요소 설명

- <span style="color: tomato;">Recency (최근 구매 시점)</span>: 고객이 마지막으로 구매한 시점이 얼마나 가까운가? → 최근일수록 높은 점수
- <span style="color: tomato;">Frequency (구매 빈도)</span>: 고객이 일정 기간 동안 얼마나 자주 구매했는가? → 자주일수록 높음
- <span style="color: tomato;">Monetary (구매 금액)</span>: 고객이 전체 기간 동안 얼마를 지출했는가? → 많이 쓸수록 높음

- RFM 점수는 일반적으로 1~5점 척도로 분류하며, 각 요소를 기준으로 고객을 5등급으로 나누어 종합 점수 또는 조합별로 고객을 세분화합니다.

## RFM 점수 분류 예시

| 고객 ID | Recency | Frequency | Monetary | RFM 등급       |
| ------- | ------- | --------- | -------- | -------------- |
| C001    | 5       | 5         | 5        | 최우수 (VIP)   |
| C078    | 1       | 2         | 2        | 이탈 위험군    |
| C109    | 4       | 1         | 3        | 재활성화 대상  |
| C210    | 3       | 4         | 2        | 관심 유지 대상 |

## 활용 전략 예시

- VIP 고객: 우선 리워드/혜택 제공, 고관여 커뮤니케이션
- 이탈 위험군: 타겟 쿠폰 발송, 리마인드 메시지, 휴면 해제 캠페인
- 재활성화 필요군: 잊지 않도록 이벤트 안내, 파손/만족도 조사 등

## 시각화 예: RFM 세그먼트 히트맵 (Python 활용)

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# 샘플 고객 데이터
data = {
    'CustomerID': ['C001', 'C002', 'C003', 'C004', 'C005'],
    'Recency': [10, 200, 45, 5, 90],  # 일 기준
    'Frequency': [50, 5, 10, 80, 20],
    'Monetary': [1000, 200, 300, 1200, 450]
}
df = pd.DataFrame(data)

# RFM 점수 부여
df['R_Score'] = pd.qcut(df['Recency'], q=5, labels=[5, 4, 3, 2, 1])
f_labels = m_labels = [1, 2, 3, 4, 5]
df['F_Score'] = pd.qcut(df['Frequency'].rank(method="first"), q=5, labels=f_labels)
df['M_Score'] = pd.qcut(df['Monetary'].rank(method="first"), q=5, labels=m_labels)

# RFM 조합 및 점수 계산
df['RFM_Segment'] = df['R_Score'].astype(str) + df['F_Score'].astype(str) + df['M_Score'].astype(str)
df['RFM_Score'] = df[['R_Score', 'F_Score', 'M_Score']].astype(int).sum(axis=1)

# 히트맵 시각화를 위한 피벗 테이블 생성
rfm_pivot = df.pivot_table(index='R_Score', columns='F_Score', values='RFM_Score', aggfunc='mean')

# 시각화
plt.figure(figsize=(6, 4))
sns.heatmap(rfm_pivot, annot=True, fmt=".0f", cmap="YlGnBu")
plt.title("RFM Heatmap")
plt.tight_layout()
plt.show()
```

![RFM]({{ site.url }}/images/graphs/RFM.png)

### 분석 결과 활용법

- RFM_Score ≥ 13 이상: 최우수 고객 → 리텐션 마케팅 대상
- RFM_Score ≤ 6 이하: 관심도 낮은 잠재 이탈자 → 재유입 전략 필요

## 실무 적용 분야

- 이커머스: 고객 세그먼트별 리타겟팅 광고 집행
- 리워드 시스템: 우수 고객 자동 포인트 지급
- CRM 자동화: 마케팅 자동화 조건 필터링 기준으로 활용
