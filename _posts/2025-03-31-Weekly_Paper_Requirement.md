---
layout: single
title: "[위클리 페이퍼] 획득 지표"
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

# 👑 우버(Uber)모빌리티 플랫폼의 주요 획득 지표

## 🍓 우버(Uber)란?

- Uber는 실시간 차량 호출과 위치 기반 서비스를 중심으로 한 모빌리티 플랫폼으로, 고객이 앱을 설치한 이후 처음으로 차량 호출을 완료하는 순간이 핵심 Activation 지점이며, 이 경험이 향후 재사용 여부와 유료 이용 확률에 직접적인 영향을 주게 되고, 특히 Uber는 초기 이용자의 승차 경험 품질을 강화해 전환율을 높이는 전략을 사용한다.

## 🍓 우버 비즈니스 모델 예시

![Uber1]({{ site.url }}/images/graphs/Uber1.png)
![Uber1]({{ site.url }}/images/graphs/Uber2.png)

[출처 - FourWeekMBA](https://fourweekmba.com/uber-business-model/)
{: .text-left}

## 🍓 핵심 지표 정의 및 분석

| 주요 지표                     | 설명                                                  |
| ----------------------------- | ----------------------------------------------------- |
| App Install to First Ride     | 앱 설치 후 첫 호출 완료까지 걸린 시간                 |
| First Ride Completion Rate    | 첫 호출 성공률 및 만족도                              |
| Ride Request Abandonment Rate | 호출 시작 후 취소한 비율                              |
| Driver Arrival Time           | 기사 도착까지 걸린 평균 시간 (대기 시간)              |
| Time to First Value (TTFV)    | 유저가 첫 '이동' 가치를 경험하기까지 걸린 시간        |
| Activation Event Rate         | 첫 호출, 첫 리뷰 남기기 등 주요 초기 이벤트 발생 비율 |

### 🍑 분석 예시 (가상의 수치 기반)

| 단계                 | 사용자 수 | 전환율 |
| -------------------- | --------- | ------ |
| 앱 설치              | 50,000명  | -      |
| 호출 시도            | 30,000명  | 60%    |
| 첫 호출 성공         | 20,000명  | 66.7%  |
| 반복 호출 (2회 이상) | 12,000명  | 60%    |

## 🍓 인사이트 요약

- TTFV(Time to First Value)가 짧을수록 초기 유지율과 전환율이 높아짐
- 기사 도착 시간, 첫 호출의 만족도는 반복 사용 가능성에 큰 영향
- 호출 실패나 대기 시간 증가 시 이탈률 급증 가능

## 🍓 시각화 예시 (퍼널 구조)

```python
import plotly.graph_objects as go

# 단계별 이름
stages = ["앱 설치", "첫 호출 시도", "첫 호출 성공", "반복 호출 고객"]

# 단계별 유저 수 (가상의 예시, 비율로부터 계산)
values = [1000, 600, 400, 240]  # 예: 1000명 설치 → 60% 진행 → 66.7% → 60%

fig = go.Figure(go.Funnel(
    y = stages,
    x = values,
    textinfo = "value+percent initial"
))

fig.update_layout(title="고객 퍼널 시각화", width=700, height=400)
fig.show()
```

![Funnel]({{ site.url }}/images/graphs/Funnel.png)

## 🍓 개선 전략 제안

- 첫 사용자에게 프로모션 크레딧 제공
- 실시간 기사 위치 시각화로 대기 스트레스 감소
- 호출 취소율이 높은 지역에 가용 기사 수 증대
- 첫 경험 이후 푸시 알림 또는 할인 쿠폰 제공을 통한 반복 사용 유도

## 🍓 Uber에 있어 왜 이 획득 지표가 중요한가?

- Uber와 같은 온디맨드 기반 플랫폼에서 첫 호출 경험(First Ride)은 단순한 사용의 시작이 아니라, 전체 고객 여정의 결정적 분기점이 된다.

### 1. 제품 가치 실현의 즉시성 (Time to Value 단축)

- 첫 호출을 얼마나 빨리, 원활하게 완료했는지가 곧 Uber의 핵심 가치인 "빠르고 안전한 이동"의 체험으로 연결
- 빠른 TTFV는 Retention과 LTV를 높이는 결정적 요인

### 2. 초기 이탈 방지

- 호출 실패, 대기 시간 지연 등은 첫인상에 큰 타격을 주며, 고객은 타 서비스로 쉽게 이탈할 수 있다.
- 앱 설치 후 호출 시도 없이 이탈한 사용자는 CAC만 유발하고 수익 기여가 없음

### 3. 플랫폼 이중 네트워크 구조 강화

- 승객 유입 → 기사 수요 증가 → 기사 공급 활성화 → 서비스 품질 향상 → 다시 승객 유입이라는 선순환 구조 형성
- 따라서 최초 사용자 확보와 성공적 Activation은 기사 측 생태계에도 긍정적인 영향을 줌

### 4. CAC 회수의 출발점

- Uber는 사용자를 유입시키기 위해 다양한 채널에 마케팅 비용을 지출
- 이 획득 지표를 통해 얼마나 빠르게 CAC를 회수할 수 있는지 파악 가능

### 5. 프로덕트 개선에 대한 정량 피드백 지표

- 호출 요청까지의 경로, 취소율, 기사 도착 시간 등의 데이터를 분석하여 UI/UX, 기사 배정 로직, 가격 정책 등을 지속적으로 개선 가능

### 결론

- Uber에서의 "앱 설치 → 첫 호출 성공"까지의 퍼널은 단순한 퍼널이 아니라, 전체 서비스 구조와 수익 모델을 견인하는 핵심 성능지표(Key Behavioral KPI)로 작동
