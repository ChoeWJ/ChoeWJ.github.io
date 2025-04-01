---
layout: single
title: "[데이터 분석을 위한 통계학] 변이(valiablity) 추정"
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

# - /coding/first-posting

use_math: true
---

# 변이(valiablity) 추정

- 변이는 데이터 값이 얼마나 밀집해 있는지 혹은 퍼져 있는지를 나타내는 산포토(dispersion)를 나타낸다.
- 이를 측정하고, 줄이고, 랜덤과 구분하고 다양한 요인들을 알아보고, 변이가 있는 상황에서 결정을 내리는 등 통계의 핵심 속에는 변이가 있다.

## 변이 측정

- 측정하는 한 가지 방법은 편차들의 대표값을 추정하는 것
- 편차 자체의 평균을 구하는 것은 바람직하지 않지만 간단하게 해결하는 방법으로는 <font color='skyblue'>평균절대 편차</font>를 구하는 것이다.
- <font color='skyblue'>평균절대 편차</font>

  $$\text{MAD} = \frac{1}{n} \sum_{i=1}^{n} |x_i - \bar{x}|$$

  - Python
    ```python
    def mean_absolute_deviation(data):
        n = len(data)
        mean = sum(data) / n  # 평균 계산
        mad = sum(abs(x - mean) for x in data) / n  # 평균절대편차 계산
        return mad
    ```
  - Numpy

    ```python
    import numpy as np

    def mean_absolute_deviation_numpy(data):
        return np.mean(np.abs(data - np.mean(data)))
    ```

- 가장 유명한 변이 추정 방법은 <font color='skyblue'>분산</font>과 <font color='skyblue'>표준편차</font>를 이용하는 것이다.
- <font color='skyblue'>표본 분산</font>

  $$s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$$

  - python
    ```python
    def variance(data):
        n = len(data)
        if n < 2:
            return 0  # 표본 분산은 n-1로 나누므로 n이 1 이하면 0 반환
        mean = sum(data) / n
        variance = sum((x - mean)  2 for x in data) / (n - 1)
        return variance
    ```
  - Numpy

    ```python
    import numpy as np

    data = np.array([1, 2, 3, 4, 5])
    var = np.var(data, ddof=1)  # ddof=1로 표본 분산 계산
    print(f"Variance: {var}")
    ```

- <font color='skyblue'>표본 표준편차</font>

  $$s = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2}$$

  - python
    ```python
    def standard_deviation(data):
        n = len(data)
        if n < 2:
            return 0
        mean = sum(data) / n
        variance = sum((x - mean)  2 for x in data) / (n - 1)
        std_dev = variance  0.5  # 제곱근
        return std_dev
    ```
  - Numpy

    ```python
    import numpy as np

    data = np.array([1, 2, 3, 4, 5])
    std = np.std(data, ddof=1)  # ddof=1로 표본 표준편차 계산
    print(f"Standard Deviation: {std}")
    ```

분모가 $n$이 아니라 $n-1$인 이유?
=> [자유도 개념 알아보러 가기](){: .btn .btn--primary}
{: .text-center}

## 사분위범위 (IQR)

- 변이를 측정하는 가장 대표적인 방법

### <font color='plum'>사분위수</font>란?

- <font color='plum'>사분위수</font>(Quartiles)는 데이터 집합을 크기순으로 정렬했을 때, 이를 4등분하는 값들을 의미한다.
- 통계에서 데이터의 분포와 퍼짐 정도를 이해하는 데 유용하며, 특히 이상치 탐지나 상자 그림(Box Plot)을 그릴 때 자주 사용된다.

  - Q1 (제1<font color='plum'>사분위수</font>): 데이터의 하위 25%에 해당하는 값.
  - Q2 (제2<font color='plum'>사분위수</font>): 데이터의 중간값(50%), 즉 중앙값(Median).
  - Q3 (제3<font color='plum'>사분위수</font>): 데이터의 상위 25%에 해당하는 값(상위 75% 아래).

### <font color='plum'>사분위수</font> 범위(IQR)

- IQR (Interquartile Range): $ Q3 - Q1 $, 데이터의 중간 50% 범위를 나타내며, 분산 정도를 측정하는 데 사용됩니다.

#### 계산 방법

1. 데이터를 오름차순으로 정렬합니다.
2. 데이터 개수 $n$을 기준으로 위치를 계산:
   - $ Q1 $: $ (n+1) \times 0.25 $ 번째 값
   - $ Q2 $: $ (n+1) \times 0.5 $ 번째 값
   - $ Q3 $: $ (n+1) \times 0.75 $ 번째 값
3. 위치가 정수가 아니면 보간(Interpolation)을 사용해 값을 추정합니다.

#### Python

```python
def quartiles(data):
    sorted_data = sorted(data)
    n = len(sorted_data)

    # Q2 (중앙값)
    q2_index = (n - 1) / 2
    if q2_index.is_integer():
        q2 = sorted_data[int(q2_index)]
    else:
        lower = sorted_data[int(q2_index)]
        upper = sorted_data[int(q2_index) + 1]
        q2 = (lower + upper) / 2

    # 하위 및 상위 데이터 분리
    lower_half = sorted_data[:int(n / 2) + (n % 2)]
    upper_half = sorted_data[int(n / 2) + (n % 2):] if n % 2 else sorted_data[int(n / 2):]

    # Q1
    q1_index = (len(lower_half) - 1) / 2
    if q1_index.is_integer():
        q1 = lower_half[int(q1_index)]
    else:
        lower = lower_half[int(q1_index)]
        upper = lower_half[int(q1_index) + 1]
        q1 = (lower + upper) / 2

    # Q3
    q3_index = (len(upper_half) - 1) / 2
    if q3_index.is_integer():
        q3 = upper_half[int(q3_index)]
    else:
        lower = upper_half[int(q3_index)]
        upper = upper_half[int(q3_index) + 1]
        q3 = (lower + upper) / 2

    return q1, q2, q3
```

#### Numpy

NumPy의 `percentile` 함수를 사용하면 더 간단히 계산할 수 있다.

```python
import numpy as np

data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
q1 = np.percentile(data, 25)  # 25번째 백분위수
q2 = np.percentile(data, 50)  # 50번째 백분위수 (중앙값)
q3 = np.percentile(data, 75)  # 75번째 백분위수

print(f"Q1: {q1}, Q2: {q2}, Q3: {q3}")
print(f"IQR: {q3 - q1}")
```

```plaintext
출력:
Q1: 2.5, Q2: 5.0, Q3: 7.5
IQR: 5.0
```

### `stats.mad`

- `stats.mad`는 SciPy 라이브러리의 `scipy.stats` 모듈에 있는 함수로, 평균절대편차(MAD, Mean Absolute Deviation)를 계산한다.

#### SciPy

```python
from scipy import stats
import numpy as np

data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])

# <font color='plum'>사분위수</font> 계산
q1 = np.percentile(data, 25)
q2 = np.percentile(data, 50)
q3 = np.percentile(data, 75)

# 평균절대편차(MAD) 계산
mad = stats.mad(data)

print(f"Q1: {q1}, Q2: {q2}, Q3: {q3}")
print(f"IQR: {q3 - q1}")
print(f"MAD: {mad}")
```

#### 실행 결과

- `stats.mad`는 기본적으로 중앙값을 기준으로 절대 편차를 계산하며, 정규화(normalization) 옵션을 통해 상수를 곱할 수 있습니다(기본값은 $c=1$).
- 데이터 `[1, 2, 3, 4, 5, 6, 7, 8, 9]`:
  - 중앙값 = 5
  - MAD = $ \frac{1}{9} \sum |x_i - 5| = \frac{4+3+2+1+0+1+2+3+4}{9} = \frac{20}{9} \approx 2.222 $

```plaintext
출력:

Q1: 2.5, Q2: 5.0, Q3: 7.5
IQR: 5.0
MAD: 2.222222222222222
```

### 심화

- <font color='plum'>사분위수</font>와 MAD의 차이: <font color='plum'>사분위수</font>는 데이터의 분포를 4등분한 위치값이고, MAD는 중앙값(또는 평균)과의 절대 편차 평균이다.
- IQR과 MAD는 둘 다 분산을 측정하지만, 접근 방식이 다른데 `stats.mad` 옵션은 `center` (기본값은 중앙값), `c` (정규화 상수) 등을 조정할 수 있다.
- 예: `stats.mad(data, c=0.6745)`는 정규 분포에서 표준편차와 유사
