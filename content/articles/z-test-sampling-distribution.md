---
title: 표집분포를 이용한 Z검증
description: Z검증 방법 중 표집분포를 이용한 Z검증 방법에 대해 알아보자.
slug: z-test-sampling-distribution
course: '사회통계론'
---

## 표본, 표집 짚고 넘어가기

- 앞서 살펴보았듯, 표본은 현실적 한계를 이유로 모집단에서 표집 행위를 통해 뽑아낸 샘플이다.

- 표본은 모집단과 100% 일치하지 않으며, 이는 필연적으로 조사 결과에서 오류를 야기한다.
- 오류를 줄이는 방법은 크게 세가지다.
  1. 표본 크기가 커야 한다.
  2. 무작위로 뽑아야 한다.
  3. 뽑은 이들로부터 설문에 성공해야 한다.
- 방법2의 미충족은 선택편향, 방법3의 미충족은 비응답편향이라는 이름으로 연구에 부정적 영향을 끼친다.

## 표집분포

- 표집분포는 표본 평균들의 분포이다.
- 표집분포를 구성하는 가장 기본적 토대는 중심극한정리다.
  - 중심극한정리: 모집단의 분포가 정규분포를 따르지 않더라도, 모집단의 표집분포는 어느 정도만 크면(보통 N=30 이상을 기준으로 한다) 정규분포를 따르게 된다.
- 표집분포를 사용하는 이유는 내가 표집한 표본이 모집단과 얼마나 차이가 있는지를 알기 위함이다.
- 이 차이는 표본 개별 값이 아닌 표본의 평균을 통해 추정되며, 이에 따라 우리는 모집단을 무한대로 표집한 표본들의 평균을 모아놓은 표집분포를 그 비교대상으로 삼는 것이다.
- 이때 표집분포가 무한대로 표집된 표본들의 평균 집합이라는 점에 주목해보자. 이는 다음과 같은 결과를 낳는다.
  - 극단값의 출현 가능성을 줄인다.
  - 표본의 크기(N)가 클 수록 뾰족해진다. 즉, 표준오차가 작아진다.
    - 표준오차란 표집분포의 표준편차이다.
- 표집분포를 구성하는 기본 가상 행위인 무한표집은 모집단을 identity가 없는 개인들(즉 중복의 개념이 없음)이라 가정한다.

## 표집분포를 이용한 Z검증

### 그전에

- Z값에 대한 정의를 다시 할 필요가 있겠다.

  - Z화는 평균이나 표준편차가 다른 두가지 분포를 비교하기 위해 정해진 기준에 맞춰 변화시키는 표준화 행위다.
  - 이 표준화를 거친 값이 Z값이다.
  - 일반적인 Z값 공식은 다음과 같다.

  $$
  Z=\frac{X-\mu}{\sigma}
  $$

  - 우리는 이를 통해 Z값은 결국 각 범주값(X)이 평균에서부터 몇 표준편차 떨어져 있는지에 대한 값임을 알 수 있다.
  - 즉 Z값의 절댓값이 작을 수록 범주값(X)이 평균에서 가깝다.
  - 또한 Z값이 작으면 작을 수록 범주값(X) 역시 작고 Z값이 크면 클 수록 범주값(X) 역시 크다.
  - Z값은 음양을 모두 표기하고 모든 범주값(X)에 대응하여 존재하기에 모든 Z값의 합은 항상 0이다.

- [가설 검증의 기초](https://www.socio.penielcho.com/hypothesis-testing)에서 다룬 개념도 한번 다시 짚어보자.

  - 결국 가설 검증의 기초는 P값에 따른 절단값으로 주어지는 범위에 범주값이 포함되느냐로 귀결된다.
  - 이때 P값은 영가설이 맞다고 가정할 때 극단적 데이터가 나타날 확률이다.
  - 즉 A라는 영가설이 옳다고 가정할 때 P값이 0.05라면 5% 확률로 극단적 데이터가 나타난다는 뜻이고, 해당 확률로 범주값이 극단적 데이터에 포함될 경우 영가설은 기각된다. 영가설이 옳다고 여겨지는 95% 확률에 포함되지 않기 때문이다.

- 이때 표준화한 범주값, 즉 Z값을 사용한 것이 Z값 가설 검증이다.

- 그러나 Z값 가설 검증과 Z검증은 다르다.

- 이때의 다름은 원료와 복잡도 등에 기인하며, P값에 따른 절단값을 정해 Z값의 포함 유무로 가설을 검증한다는 기본 매커니즘은 같다.

### 표집분포를 이용한 Z검증

- 기본 논리를 살펴보자.

  - 표집분포와 표본의 비교는 표본의 평균이 무한대로 뽑은 표본들의 평균 집합, 즉 표집분포 가운데 어느 정도에 위치하는지를 살펴보는 형태로 이뤄진다.
  - 이는 두가지의 목적으로 쓰일 수 있다.
    1. 가설 검증의 목적
    2. 표본의 모집단 대표성에 대한 검증 목적
  - 표집분포를 이용한 Z검증은 1번, 가설 검증의 목적으로 사용된다 볼 수 있다.
  - 이는 표본의 평균값을 Z값 검증에서의 범주값(X)으로 취급하여 P값에 따른 표집분포의 절단값 범위에 표본이 포함되는지의 여부를 따지는 방식으로 이뤄진다.
  - 즉 표본 자체가 하나의 증명해야 할 특징을 가진 덩어리로 기능한다.

- 좀 더 수리적인 부분을 살펴보자.

  - 결국 우리는 표본의 평균값이 표집분포에서 몇 표준오차 떨어져 있는지를 나타내는지를 나타내는 Z값을 구해,

  - 해당 Z값이 P에 따른 절단값 범위에 포함되는지 여부에 따라 표본이 지닌 특성과 그들이 보이는 경향성의 관계가 통계적으로 유의미한지를 검증하는 것이다.

  - 이때 표본의 평균값은 대문자 M으로 표기하며, 표본의 수는 N으로 표기한다.

  - 아래는 차례대로 표집분포의 평균값, 표준오차와 그를 구하는 공식이다. 이때 표집분포의 평균은 모집단의 평균과 같다.
    <br/>$$
    \mu_m=\mu, \; \sigma_m=\frac{\sigma}{\sqrt{N}}
    $$

  - 아래는 표집분포 내 범주값인 표본 평균값의 표준화값, 즉 Z값을 구하는 공식이다.
    <br/>$$
    Z=\frac{M-\mu_m}{\sigma_m}
    $$

  - 여기까지가 [가설 검증의 기초](https://www.socio.penielcho.com/hypothesis-testing)에서 다룬 Z값 검증과 다른 부분이다. P값을 정하고 그에 따른 절단값을 찾아 범위 내 Z값 포함 여부로 영가설 기각 여부를 결정하는 나머지 방식은 동일하다.

- 예제를 통해 표집분포를 통한 Z검증을 해보자.

  - 예제1: 50대 이상 남성들은 다른 사람들에 비해 고양이를 더 싫어하는가? p=0.01, 양측검증으로 검증하라.
    <br/>$$
    conditions: \mu=16.4, \; \sigma=6.0, \; M=15.7, \; N=400
    $$

    - 풀이:
      <br/>$$
      \sigma_m=\frac{6}{20}=0.3, \; Z=\frac{-0.7}{0.3}=-\frac{7}{3}=-2.33
      $$
      p값 0.01에 따른 양측검증 절단값은 -2.58 and 2.58이다. 즉 Z값이 -2.58 이하이거나 2.58 이상이어야 영가설 기각이 가능하다. 그러나 표집분포의 범주값 표본 평균의 Z값은 -2.33으로 조건에 만족하지 않는다. 따라서 영가설은 유지되고, 연구가설은 체택(지지)되지 않는다.

  - 예제2: 부모님이 보수적인 집안의 청소년들은 그렇지 않은 집안의 청소년들과 상이한 정치젹 이념 성향을 나타낼까? p=0.01, 양측검증으로 검증하라.
    <br/>$$
    conditions: \mu=4.0, \; \sigma=0.8, \; M=3.6, \; N=64
    $$

    - 풀이:
      <br/>$$
      \sigma_m=\frac{0.8}{8}=0.1, \; Z=\frac{-0.4}{0.1}=-4
      $$
      p값 0.01에 따른 양측검증 절단값은 -2.58 and 2.58이다. 즉 Z값이 -2.58 이하이거나 2.58 이상이어야 영가설 기각이 가능하다. 위 표집분포의 범주값 표본 평균의 Z값은 -4로 조건을 충족하여 영가설은 기각되고 연구가설은 지지된다.

  - 예제 2를 기준으로 풀이에 사용할 만한 좀 더 논리적인 설명을 써보자면,

    - 위 문제에서의 연구가설은 부모님이 보수적인 집안의 청소년들은 그렇지 않은 집안의 청소년들과 상이한 정치적 이념 성향을 갖는다이고, 영가설은 부모님이 보수적인 집안의 청소년들과 그렇지 않은 집안의 청소년들의 정치적 이념 성향은 상이하지 않다이다.
    - 영가설이 기각되기 위해서는 표집분포의 상위 0.5%, 하위 0.5% 확률의 극단값 범위에 표본 평균이 포함되어야 한다.
    - 우리는 이를 Z값이 상하위 0.5% 절단값 범위에 포함되는지의 여부를 통해 알 수 있다.
    - 나머지는 계산식!

