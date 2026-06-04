---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# Deep Q-Network (DQN): Architecture & Core Concepts

DQN represents the fusion of **Q-Learning** with **Deep Neural Networks**, effectively overcoming the instability of function approximation in non-linear settings through two main mechanisms: **Experience Replay** and **Target Networks**.

## 1. Core Architecture
The DQN agent uses a neural network (the **Policy Network**) to approximate the action-value function $Q(s, a; \theta)$.

*   **Input**: State representation $s$ (e.g., raw pixels or feature vectors).
*   **Output**: A vector of Q-values $Q(s, a_i)$ for every possible action $a_i \in \mathcal{A}$. 
    *   *Advantage*: A single forward pass computes values for all actions, enabling efficient greedy action selection: $a^* = \arg\max_a Q(s, a)$.

## 2. Stability Mechanisms

### Experience Replay (ER)
To break the correlation between consecutive samples and satisfy the IID (Independent and Identically Distributed) assumption of stochastic gradient descent:
*   Transitions $(s, a, r, s')$ are stored in a circular **Replay Buffer** $\mathcal{B}$.
*   Training is performed on **mini-batches** sampled uniformly at random from $\mathcal{B}$.
*   *Benefit*: Improves data efficiency by reusing samples and prevents the policy from oscillating or diverging due to temporal correlations.

### Target Network
To address the "moving target" problem where the target value depends on the same parameters being updated:
*   Two networks are maintained: the **Online Network** $\theta$ and the **Target Network** $\theta^-$.
*   The TD Target is computed using the old parameters $\theta^-$:
    $$Y^{DQN} = r + \gamma \max_{a'} Q(s', a'; \theta^-)$$
*   **Update**: $\theta^-$ is kept frozen and synchronized with $\theta$ only every $C$ steps (hard update) or via Polyak averaging (soft update).

## 3. Loss Function
The network is optimized by minimizing the Mean Squared Error (MSE) of the Bellman residual:
$$\mathcal{L}(\theta) = \mathbb{E}_{(s, a, r, s') \sim \mathcal{B}} \left[ \left( Y^{DQN} - Q(s, a; \theta) \right)^2 \right]$$

## 4. Key Improvements (Extensions)

### Double DQN (DDQN)
Reduces the **overestimation bias** inherent in standard Q-learning.
*   The Online Network selects the action, while the Target Network evaluates it:
    $$Y^{DDQN} = r + \gamma Q(s', \arg\max_{a'} Q(s', a'; \theta); \theta^-)$$

### Prioritized Experience Replay (PER)
Instead of uniform sampling, transitions are sampled with probability proportional to their **TD error** $|\delta|$, focusing learning on "surprising" transitions.

### Dueling DQN
Splits the network into two streams:
1.  **Value Stream** $V(s)$: State value.
2.  **Advantage Stream** $A(s, a)$: Relative advantage of each action.
*   Combined as: $Q(s, a) = V(s) + (A(s, a) - \frac{1}{|\mathcal{A}|} \sum_{a'} A(s, a'))$.
*   *Benefit*: Better generalization across actions in states where action choice is irrelevant.

## 5. Algorithmic Flow
1.  Initialize Buffer $\mathcal{B}$, Online Net $\theta$, Target Net $\theta^- = \theta$.
2.  **Act**: Select $a$ via $\epsilon$-greedy using $Q(s, \cdot; \theta)$.
3.  **Store**: Push $(s, a, r, s')$ to $\mathcal{B}$.
4.  **Learn**:
    *   Sample mini-batch.
    *   Compute $Y$ using $\theta^-$.
    *   Gradient descent on $\mathcal{L}(\theta)$.
5.  **Sync**: Periodically update $\theta^- \leftarrow \theta$.
