---
title: 표준정규분포에 대해서
description: 분포의 유형과 정규화, 표준화를 통해 만들어지는 표준정규분포까지 알아보자.
slug: standard-normal-distribution
datetime: 2021. 10. 01.
course: 사회통계론
---

## 분포의 유형

1. 일봉분포 vs 다봉분포

   ![일봉분포 및 다봉분포 사진](/standard-normal-distribution/modals.png)

   - 일봉분포: 최빈값이 1개
   - 다봉분포: 최빈값이 2개 이상

2. 대칭분포 vs 비대칭분포

3. 정규분포 vs 꼬리분포

   ![왼쪽꼬리, 정규, 오른쪽꼬리분포 사진](/standard-normal-distribution/skewed-normal.png)

   - 정규분포
   - 꼬리분포
     - 두꺼운 vs 얇은
     - 오른쪽 vs 왼쪽

## 정규화 vs 표준화

![정규화 사진, Z화-표준화 사진](/standard-normal-distribution/normal-standard.png)

- 정규화: 오른쪽 혹은 왼쪽 꼬리 분포를 로그, 제곱을 통해 정규분포로 바꿔준다. X의 개수가 30 이상이면 정규화를 통해 정규분포로 만들어줄 수 있다.
- 표준화(Z화): 다양한 X값의 정규분포를 Z값으로 바꿔 표준정규분포로 만들어준다. Z화는 X값에서 평균을 뺀 후 표준분포로 나누는 과정을 의미한다.

## 표준정규분포

![표준정규분포사진](/standard-normal-distribution/standard-normal.png)

- 정규분포는 Z값 표준화를 통해 표준정규분포(Z분포)로 만들 수 있다.
- 정규분포를 표준정규분포로 만드는 이유는 확률을 알 수 있기 때문이다.
- 일봉대칭분포이고, 평균값=최빈값=중앙값=0이며, 표준편차=1이면 표준정규분포라 할 수 있다.



## 용어 정리

- 히스토그램: histogram. 막대가 서로 붙어있다. 연속적 값을 드러내는데 쓰인다.
- 막대그래프: bar graph. 막대가 서로 떨어져 있다. 명목변수의 비연속적 값을 드러내는데 쓰인다.
- 중위값: median. 물리적으로 가운데 위치한 값이다. 
- 최빈값: mode. 가장 빈도가 높은 수의 값이다.
- 평균값: mean. X값을 모두 더한 후 N으로 나눈 값이다.
- 표준편차: standard deviation. 정규분포에서 보이는 편차의 단위다.


  $$
  \sigma=\sqrt{\frac{\sum(X-\mu)^2}{n}}
  $$
- 분산: variance. 표준편차의 제곱값이다. 퍼져있는 정도를 나타낸다.


  $$
  \sigma^2=\frac{\sum(X-\mu)^2}{n}
  $$
- 모집단: population. 연구 대상이 되는 전체 집단을 의미한다.
- 표본: sample. 모집단 전체를 대상으로 연구를 진행하는 데에 한계가 있기에 그 중 일부를 표집한 것이다.
- 표집: sampling. 모집단에서 표본을 추출하는 과정을 의미한다.
- Z화: X값을 Z값으로 바꿔주기 위해서는 아래 공식을 사용한다.


  $$
  Z=\frac{X-\mu}{\sigma}
  $$


  $$ 
  X=Z*\sigma + \mu
  $$
