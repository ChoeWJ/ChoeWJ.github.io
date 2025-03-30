---
layout: single
title: "[위클리 페이퍼] AARRR 프레임워크와 Retention 그리고 Funnel"
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

# 👑 AARRR 프레임워크와 리텐션, 퍼널 분석

- AARRR 프레임워크는 사용자의 전환 여정을 총 5단계로 나누어, 각 단계에서의 행동과 성과를 분석함으로써 **제품 성장 전략**을 수립하는 데 활용되는 대표적인 퍼널 프레임워크
- 이는 500 Startups의 Dave McClure가 제안한 것으로, <a style="color: tomato;">Acquisition</a> → <a style="color: tomato;">Activation</a> → <a style="color: tomato;">Retention</a> → <a style="color: tomato;">Revenue</a> → <a style="color: tomato;">Referral</a> 순으로 고객을 이해하고 최적화할 수 있게 해준다.

## 🍓 전체 구조 요약

| 단계                                      | 핵심 질문                                    | 주요 지표 (Metrics)                               |
| ----------------------------------------- | -------------------------------------------- | ------------------------------------------------- |
| <a style="color: tomato;">Acquisition</a> | 고객은 어떻게 우리 서비스를 알게 되었는가?   | 유입 수, CTR, CAC, 유입 경로별 전환율             |
| <a style="color: tomato;">Activation</a>  | 고객은 제품의 가치를 처음으로 경험했는가?    | 온보딩 완료율, 첫 기능 사용률, 아하 모먼트 도달률 |
| <a style="color: tomato;">Retention</a>   | 고객은 지속적으로 우리 제품을 사용하는가?    | D1/D7/D30 리텐션, 재방문률, 세션 빈도             |
| <a style="color: tomato;">Revenue</a>     | 고객은 비용을 지불하고 있는가?               | ARPU, ARPPU, 전환율, 장바구니 이탈율              |
| <a style="color: tomato;">Referral</a>    | 고객은 다른 사람에게 우리 제품을 소개하는가? | NPS, 추천 코드 사용률, Viral Coefficient          |

## 🍓 Acquisition (획득)

- 사용자가 처음 제품 또는 서비스와 접점을 형성하는 단계
- 이 과정은 **트래픽 유입 채널**과 **초기 인지**를 다루게 되는데, 유료 광고(Google Ads, Meta Ads), 오가닉 검색(SEO), 콘텐츠 마케팅, SNS, 파트너십 등 매우 다양하다.
- 이 단계의 주요 KPI는 CTR(Click Through Rate), CAC(Customer Acquisition Cost), CPA(Cost per Action), 유입 채널별 전환율 등이다.

### 🍑 주요 채널 예시

- 유료 광고(Google Ads, Meta Ads)
- 오가닉 검색(SEO)
- 콘텐츠 마케팅 및 SNS 유입
- 파트너 제휴 또는 이벤트 유입

### 🍑 핵심 지표

- CAC (Customer Acquisition Cost)
- CPA (Cost per Action)
- CTR (Click Through Rate)

### 🍑 방문당 페이지 뷰 / 체류 시간 (예시)

```python
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# 데이터 정의
data = {
    'Channel': ['Organic Search', 'Paid Ads', 'Social Media', 'Referral', 'Email'],
    'Users': [1200, 800, 650, 300, 450]
}
df = pd.DataFrame(data)

# 그래프 스타일 설정
plt.figure(figsize=(8, 5))
sns.barplot(data=df, y='Channel', x='Users', palette='pastel')
plt.title('User Acquisition by Channel')
plt.xlabel('Number of Users')
plt.ylabel('Channel')
plt.tight_layout()
plt.show()
```

![acquisition_channels]({{ site.url }}/images/graphs/acquisition_channels.png)

## 🍓 Activation (활성화)

- 사용자가 서비스를 처음 이용하고, 그 가치를 인식하는 첫 순간의 단계
- 흔히 '아하 모먼트(Aha Moment)'라고 불리는 이 시점은 제품이 유저의 문제를 해결할 수 있음을 직관적으로 느끼게 하는 지점이고, 대표적인 지표로는 첫 방문 후 특정 액션 완료율(예: 가입 후 3일 내 3개 기능 사용), NPS, Onboarding Completion Rate 등이 있다.

### 🍑 예시

- 페이스북: 가입 후 10일 이내 7명 친구 추가
- 드롭박스: 첫 파일 업로드 시점
- 슬랙: 첫 대화 생성

### 🍑 측정 지표

- 온보딩 완료율
- 제품 주요 기능 사용률
- 세션 길이 / 이벤트 수
- 아하 모먼트 도달 시간

## 🍓 Retention (유지)

- 리텐션은 고객이 지속적으로 제품을 사용하거나 서비스를 반복 이용하는 비율 일간/주간/월간 리텐션(D1, D7, D30 Retention Rate)을 통해 초기 이탈율을 확인하고, 장기 고객 확보 가능성을 평가할 수 있다.
- 리텐션은 LTV와 직결되며 제품 지속 가능성을 판단하는 핵심 지표

### 🍑 리텐션 유형

- D1 / D7 / D30 Retention Rate (일간, 주간, 월간)
- Cohort Retention (코호트별 리텐션 비교)
- Session Frequency (주당 평균 사용 세션)

### 🍑 리텐션 분석 시각화 예: 코호트별 리텐션 그래프

```python
import matplotlib.pyplot as plt
import pandas as pd

# 리텐션 데이터 정의
data = {
    'Cohort': ['Cohort 1', 'Cohort 2', 'Cohort 3', 'Cohort 4', 'Cohort 5'],
    'Day 1': [100, 85, 70, 60, 50],
    'Day 7': [90, 75, 60, 50, 40],
    'Day 14': [80, 65, 50, 40, 30],
    'Day 21': [70, 55, 45, 35, 25],
    'Day 30': [60, 50, 40, 30, 20]
}
df = pd.DataFrame(data)

# 시각화
plt.figure(figsize=(8, 5))
for day in ['Day 1', 'Day 7', 'Day 14', 'Day 21', 'Day 30']:
    plt.plot(df['Cohort'], df[day], marker='o', label=day)

plt.title('Cohort Retention Over Time')
plt.xlabel('Cohort')
plt.ylabel('Retention (%)')
plt.legend(title='Day')
plt.grid(True)
plt.tight_layout()
plt.show()
```

![cohort_retention]({{ site.url }}/images/graphs/cohort_retention.png)

## 🍓 Revenue (수익 창출)

- 이 단계는 사용자가 실제로 제품에 대해 비용을 지불하기 시작하는 시점으로 이익 중심의 단계이며, 지속적인 수익 모델이 매우 중요
- 유료 전환율, ARPU(Average Revenue Per User), ARPPU(Average Revenue Per Paying User), Conversion Rate, 장바구니 이탈율 등 수익과 직결되는 정량적 지표들이 포함된다.
- 지표로는 Viral Coefficient, Invite Conversion Rate, Net Promoter Score(NPS) 등이 있다.

### 🍑 수익 관련 지표

- ARPU: Average Revenue per User
- ARPPU: Average Revenue per Paying User
- 전환율 (Free → Paid)
- 장바구니 이탈률
- 업셀링 / 재구매율

## 🍓 Referral (추천)

- 기존 고객이 새로운 고객을 자발적으로 유치하는 단계로, 제품의 바이럴 루프 형성 여부를 확인할 수 있다.
- 지표로는 Viral Coefficient, Invite Conversion Rate, Net Promoter Score(NPS) 등이 있다.

### 🍑 추천 지표

- Viral Coefficient: 1 이상의 수치면 자연 성장 가능
- NPS: Net Promoter Score
- 초대 코드 전환율

### 🍑 추천 유도 전략

- 추천인 리워드 제공
- 공유 기능 최적화
- 자동화된 초대 메일 시스템

## 🍓 퍼널(Funnel) 분석과의 연관성

- AARRR는 퍼널 분석 그 자체이며, 단계별 전환율을 정량적으로 분석하여 병목(Bottleneck) 구간을 시각화하고 최적화 전략을 수립하는 데 유용하다. 유입 대비 구매 전환율이 낮다면 Activation 또는 Revenue 단계에 문제가 있을 수 있다.

### 🍑 예시 퍼널 흐름:

1. 방문자 10,000명
2. 가입자 3,000명 (Activation 전환율: 30%)
3. 리텐션 사용자 1,200명 (Retention 전환율: 40%)
4. 결제 사용자 300명 (Revenue 전환율: 25%)
5. 추천 활동 사용자 90명 (Referral 전환율: 30%)

이를 통해 **병목 구간(Bottleneck)**을 식별하고, 가장 전환율이 낮은 지점을 우선 개선 대상으로 설정하게 된다.
