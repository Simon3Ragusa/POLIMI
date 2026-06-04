# Stochastic Dynamic Processes: Course Notes (Module 2 - Part I)

This document synthesizes the core mathematical foundations of stochastic processes, probability, and statistics required for studying dynamic systems, particularly Poisson and Markov processes.

## 1. Introduction to Stochastic Processes
A **stochastic process** is a sequence of random variables $(X_t)$ dependent on time, where $t$ belongs to a parameter set $T$.
*   **Index Set $T$:** Can be finite, countably infinite (discrete time), or non-enumerable (continuous time, e.g., $T = \mathbb{R}_+$).
*   **Applications:** Finance (asset price variations), biology, and physics.
*   **Key Focus:** Long-term statistical behavior and expected values ("valori attesi").

## 2. Probability and Statistics Review

### 2.1 Set Theory Foundations
Probability uses the language of sets to define events.
*   **Notations:** $\mathbb{N}$ (Natural), $\mathbb{Z}$ (Integers), $\mathbb{R}$ (Reals).
*   **Operations:** Union ($\cup$), Intersection ($\cap$), and Complementation ($A^c$).
*   **Partition:** A collection of disjoint sets whose union is the universal set $S$.
*   **Cardinality ($|A|$):** The size of the set. For finite sets, $|A \cup B| = |A| + |B| - |A \cap B|$.

### 2.2 Random Experiments
*   **Sample Space ($S$):** The set of all possible outcomes (elementary events).
*   **Combinatorics:**
    *   **Permutations:** Ordered extractions of $r$ objects from $n$. $P_n^r = \frac{n!}{(n-r)!}$.
    *   **Combinations:** Unordered extractions. $C_n^r = \binom{n}{r} = \frac{n!}{r!(n-r)!}$.
*   **Events:** Any subset of $S$. An event "occurs" if the experiment's outcome is contained within it.

### 2.3 Axiomatic Probability (Kolmogorov)
A probability function $P$ on a $\sigma$-algebra $\mathcal{B}$ must satisfy:
1.  $P(A) \ge 0$ for every $A \in \mathcal{B}$.
2.  $P(S) = 1$.
3.  For disjoint events, $P(\cup A_i) = \sum P(A_i)$.

### 2.4 Conditional Probability and Bayes' Theorem
*   **Conditional Probability:** $P(A|B) = \frac{P(A \cap B)}{P(B)}$, provided $P(B) > 0$. It represents the update of a priori probability based on new information.
*   **Product Rule:** $P(A \cap B) = P(A|B)P(B)$.
*   **Law of Total Probability:** For a partition $\{A_i\}$, $P(B) = \sum P(B|A_i)P(A_i)$.
*   **Bayes' Theorem:** $P(A_i|B) = \frac{P(B|A_i)P(A_i)}{\sum P(B|A_j)P(A_j)}$.

## 3. Random Variables (R.V.)

### 3.1 Discrete Random Variables
An R.V. is discrete if its range $R_X$ is countable.
*   **Probability Mass Function (PMF):** $P_X(x_k) = P(X = x_k)$.
*   **Cumulative Distribution Function (CDF):** $F_X(x) = P(X \le x)$. It is non-decreasing and right-continuous.
*   **Expected Value (Mean):** $E(X) = \sum x_k P_X(x_k)$.
*   **Variance:** $Var(X) = E[(X - \mu)^2] = E(X^2) - [E(X)]^2$.

#### Relevant Discrete Distributions
*   **Bernoulli ($p$):** Two outcomes (success/failure). $E(X)=p, Var(X)=p(1-p)$.
*   **Binomial ($n, p$):** Number of successes in $n$ independent Bernoulli trials. $P(k) = \binom{n}{k} p^k (1-p)^{n-k}$.
*   **Geometric ($p$):** Number of failures before the first success. $P(x) = p(1-p)^x$.
*   **Poisson ($\lambda$):** Counts events occurring in a fixed interval. $P(k) = \frac{e^{-\lambda} \lambda^k}{k!}$. Note: $E(X) = Var(X) = \lambda$.

### 3.2 Continuous Random Variables
An R.V. is continuous if its CDF is continuous.
*   **Probability Density Function (PDF):** $f(x) = \frac{d}{dx} F(x)$. Probability of an interval: $P(a \le X \le b) = \int_a^b f(x)dx$.
*   **Expected Value:** $E(X) = \int_{-\infty}^{+\infty} x f(x)dx$.

#### Relevant Continuous Distributions
*   **Uniform ($a, b$):** Constant density $1/(b-a)$ over $[a, b]$.
*   **Normal (Gaussian) ($ \mu, \sigma^2 $):** Defined by the bell curve. Standard Normal $Z \sim N(0, 1)$ is used for calculations via $Z = \frac{X-\mu}{\sigma}$.
*   **Exponential ($\lambda$):** Used for inter-arrival times in Poisson processes. $f(x) = \lambda e^{-\lambda x}$.
    *   **Memoryless Property:** $P(X > s+t | X > t) = P(X > s)$. The probability of the next event does not depend on time already elapsed.

## 4. Analysis of Stochastic Processes

### 4.1 Basic Definitions
*   **Realization (Sample Path):** A specific observed function $X(t)$ from one experiment.
*   **Mean Function:** $\mu_X(t) = E[X(t)]$, describes how the process evolves on average over time.

### 4.2 Stationarity
*   **Strict-Sense Stationarity:** Statistical properties are invariant under time shifts. The joint CDF of $(X_{t_1}, ..., X_{t_r})$ is the same as $(X_{t_1+\Delta}, ..., X_{t_r+\Delta})$.
*   **Weak-Sense Stationarity (WSS):**
    1.  The mean function $\mu_X(t)$ is constant.
    2.  The autocorrelation function $R_X(t_1, t_2) = E[X(t_1)X(t_2)]$ depends only on the time difference $\tau = t_1 - t_2$.

### 4.3 Poisson Process Properties
*   **Aggregations:** The sum of independent Poisson processes with rates $\lambda_i$ is a Poisson process with rate $\lambda = \sum \lambda_i$.
*   **Disaggregations:** If events in a Poisson process ($\lambda$) are randomly typed with probability $p_i$, the sub-processes are independent Poisson processes with rates $\lambda_i = \lambda p_i$.
