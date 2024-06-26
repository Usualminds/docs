<template><div><h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h1>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gyi52opgo2j31bi0hcmzl.jpg" alt=""></p>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>动态规划 (Dynamic programming，简称 DP) 是美国数学家 <a href="https://zh.wikipedia.org/wiki/%E7%90%86%E6%9F%A5%E5%BE%B7%C2%B7%E8%B2%9D%E7%88%BE%E6%9B%BC" target="_blank" rel="nofollow noopener noreferrer">Richard Bellman<ExternalLinkIcon/></a> 在研究<strong>决策过程和控制系统理论</strong>时创建的新方法。它在数学上属于运筹学的一个分支，在数学、管理科学、计算机科学、经济学和生物信息学中均有应用，核心是<strong>通过把原问题分解为相对简单的子问题的方式</strong>来求解复杂问题，主要应用是求解决策过程最优的数学方法。</p>
<p>简单来讲，动态规划是一种算法思想，其核心是把问题分解为子问题，通过求解子问题进而解决当前问题。实际中，并非所有问题都可以通过动态规划来求解，通过动态规划解决的问题，对问题和其分解对子问题都有一定场景要求的，动态规划适用于有<strong>重叠子问题</strong>和<strong>最优子结构</strong>性质的问题，这类问题使用动态规划所耗时间往往比朴素解法更少。</p>
<p>如下图，我们对动态规划问题从<strong>应用场景</strong>、<strong>题解思路</strong>和<strong>常见示例题目</strong>三个方面来展开。</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gyhru3tasoj31he0tsad7.jpg" alt=""></p>
<blockquote>
<p><a href="https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92" target="_blank" rel="nofollow noopener noreferrer">动态规划 Wiki<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<h3 id="重叠子问题" tabindex="-1"><a class="header-anchor" href="#重叠子问题" aria-hidden="true">#</a> 重叠子问题</h3>
<p>重叠子问题关注的是一个问题被分解为多个子问题时，<strong>子问题和子问题之间的关联</strong>。子问题会被重复计算，特别是我们使用递归自上向下对问题进行求解时，那动态规划是如何处理和优化这些子问题呢？我们以最简单的<a href="https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/" target="_blank" rel="nofollow noopener noreferrer">斐波那契数列<ExternalLinkIcon/></a>为例来说明。</p>
<div class="custom-container tip"><p class="custom-container-title">斐波那契数列</p>
<p>写一个函数，输入 n，求斐波那契 (Fibonacci) 数列的第 n 项 (即 F(N))。斐波那契数列的定义如下：
<br><strong>F(0) = 0,F(1) = 1</strong>
<br><strong>F(N) = F(N - 1) + F(N - 2)，其中 N &gt; 1。</strong></p>
<ul>
<li>
<p>示例 1：</p>
<ul>
<li>输入：n = 2</li>
<li>输出：1</li>
</ul>
</li>
<li>
<p>示例 2：</p>
<ul>
<li>输入：n = 5</li>
<li>输出：5</li>
</ul>
</li>
</ul>
</div>
<h4 id="自上而下" tabindex="-1"><a class="header-anchor" href="#自上而下" aria-hidden="true">#</a> 自上而下</h4>
<p>通过我们可以通过自上而下的递归方法来处理该问题，代码如下</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token comment">// n = 0, f(n) = 0;</span>
    <span class="token comment">// n = 1, f(n) = 1;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n

    <span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样通过递归来解决，代码看起来很简洁，但是仔细分析下，当 n 取值较大时，这其中的重复计算可就太多了，如下，可以简单分解下</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gyhru4mpmxj31aa0sa75k.jpg" alt=""></p>
<p>可以看到，<strong>f(n-2)</strong>、<strong>f(n-3)</strong> 等均进行了重复计算，可想而知，当数据量较大时，重复计算会更多，所以，递归实现代码很简单，计算却尤为耗费性能，可以尝试计算 n 取值为 100，看下计算时间。
那么，使用动态规划可以怎么求解这个问题呢</p>
<h4 id="自下而上" tabindex="-1"><a class="header-anchor" href="#自下而上" aria-hidden="true">#</a> 自下而上</h4>
<p>我们可以从最简单的、规模最小的 <strong>f(0)</strong>、<strong>f(1)</strong> 开始计算，直到求解 <strong>f(n)</strong>，所以动态规划一般是不采用递归的方式，而是经由循环来完成计算的，看下代码</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment">// n = 0, f(n) = 0;</span>
    <span class="token comment">// n = 1, f(n) = 1;</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，这种自下而上的解决方法，每次计算时都会用到上次的计算结果，从而可以规避大量的子问题重复计算</p>
<div class="custom-container warning"><p class="custom-container-title">数组最大索引越界</p>
<p>针对本题，可能会超过数组的索引边界，所以需要额外处理下</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mod <span class="token operator">=</span> <span class="token number">1000000007</span>

    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">%</span> mod <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">%</span> mod
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">%</span> mod
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="最优子结构" tabindex="-1"><a class="header-anchor" href="#最优子结构" aria-hidden="true">#</a> 最优子结构</h3>
<p>最优子结构关注的是当一个问题被分解为多个子问题时，<strong>子问题和原问题之间的关联</strong>。即问题的最优解所包含的子问题的解也是最优的，也就是说我们可以通过求解每个子问题的最优解来最后决定该问题的最优解</p>
<h3 id="无后效性" tabindex="-1"><a class="header-anchor" href="#无后效性" aria-hidden="true">#</a> 无后效性</h3>
<p>子问题的解一旦确定，就不受其后问题的影响。具体来讲，就是子问题的解一旦确定，就不再改变</p>
<h2 id="题解思路" tabindex="-1"><a class="header-anchor" href="#题解思路" aria-hidden="true">#</a> 题解思路</h2>
<p>动态规划问题的数学表达式可以简单的抽象为如下：<code v-pre>dp[y] = f(dp[x]),x&lt;y</code>，一般常见解题思路，主要包含以下四步，其中最核心的是确定<strong>转移方程</strong></p>
<ul>
<li>状态定义：定义动态规划过程中涉及的变量状态</li>
<li>转移方程：归纳和抽象出子问题对应的数学方程</li>
<li>初始值：初始化时变量的取值</li>
<li>返回值：返回求解后所需要的值</li>
</ul>
<p>我们以如下题目为入手来了解动态规划的常见解题思路</p>
<h2 id="常见题目" tabindex="-1"><a class="header-anchor" href="#常见题目" aria-hidden="true">#</a> 常见题目</h2>
<p>动态规划常见的几种类型题目，⭐ 代表题目难度</p>
<h3 id="最大子序和" tabindex="-1"><a class="header-anchor" href="#最大子序和" aria-hidden="true">#</a> 最大子序和</h3>
<blockquote>
<p>：point_right：
<a href="https://leetcode-cn.com/problems/maximum-subarray/" target="_blank" rel="nofollow noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给你一个整数数组 nums，请你找出一个具有最大和的连续子数组 (子数组最少包含一个元素)，返回其最大和。</p>
<p>子数组是数组中的一个连续部分。</p>
<div class="custom-container tip"><p class="custom-container-title">用例</p>
<ul>
<li>
<p>示例 1：</p>
<ul>
<li>输入：nums = [-2,1,-3,4,-1,2,1,-5,4]</li>
<li>输出：6</li>
<li>解释：连续子数组 [4,-1,2,1] 的和最大，为 6。</li>
</ul>
</li>
<li>
<p>示例 2：</p>
<ul>
<li>输入：nums = [1]</li>
<li>输出：1</li>
</ul>
</li>
</ul>
</div>
<h4 id="思路分析" tabindex="-1"><a class="header-anchor" href="#思路分析" aria-hidden="true">#</a> 思路分析</h4>
<ul>
<li>状态定义，本题核心是分析什么是<strong>最大和的连续子数组</strong>，这里我们可以用 <code v-pre>f(n)</code> 表示第 n 个数结尾的最大和的连续子数组</li>
<li>转移方程分析，显而易见，我们的问题就是求 <code v-pre>[0, n]</code> 这个区间里面 <code v-pre>f(n)</code> 的最大值，应用动态规划的划分子问题的方法，对 <code v-pre>f(n)</code> 来讲，其最大值可以通过比较 <code v-pre>nums[n]</code> 和 <code v-pre>nums[n] + f(n-1)</code>，取两者中较大值即可，从而，我们可以得出其转移方程为：
<code v-pre>f(n) = max{(f(n-1) + nums[n], nums[n])}</code></li>
<li>初始值分析，我们可以使用数组中第一个数来暂时表示最大值 <code v-pre>max</code>，随后，通过循环数组中所有项，代入转移方程，不断更新 <code v-pre>max</code> 取值即可</li>
<li>返回值即为 <code v-pre>max</code></li>
</ul>
<h4 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h4>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
        max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="股票的最大利润-⭐" tabindex="-1"><a class="header-anchor" href="#股票的最大利润-⭐" aria-hidden="true">#</a> 股票的最大利润 ⭐</h3>
<p><a href="https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/" target="_blank" rel="nofollow noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
<p>假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>
<p>示例 1：</p>
<ul>
<li>输入：[7,1,5,3,6,4]</li>
<li>输出：5</li>
<li>解释：在第 2 天 (股票价格 = 1) 的时候买入，在第 5 天 (股票价格 = 6) 的时候卖出，最大利润 = 6-1 = 5。
注意利润不能是 7-1 = 6，因为卖出价格需要大于买入价格。</li>
</ul>
</li>
<li>
<p>示例 2：</p>
<ul>
<li>输入：[7,6,4,3,1]</li>
<li>输出：0</li>
<li>解释：在这种情况下，没有交易完成，所以最大利润为 0。</li>
</ul>
</li>
</ul>
</div>
<h4 id="思路分析-1" tabindex="-1"><a class="header-anchor" href="#思路分析-1" aria-hidden="true">#</a> 思路分析</h4>
<p>和上题类似，我们首先思考 🤔，如何获取<strong>最大利润</strong>？按照常规思路，自然是<strong>最低点买入，最高点卖出</strong></p>
<ul>
<li>状态定义，我们可以用 <code v-pre>f(n)</code> 表示前 n 天的最大利润，<code v-pre>min</code> 表示前 n 天的最低价格</li>
<li>转移方程分析，可以预见的是，在 <code v-pre>[0, n]</code> 这个区间里面，<code v-pre>f(n)</code> 的最大值就是第 n-1 天的利润，第 n 天价格和前 n 天的最低价格 min 的较大值，即 <code v-pre>f(n-1)</code> 和 <code v-pre>prices[n] - min</code> 两者中的较大值，从而，我们可以得出其转移方程为：
<code v-pre>f(n) = max{(f(n-1), prices[n] - min)}</code></li>
<li>初始值分析，最小值 min 直接使用第一天的股票价格即可，max 赋值为 0，通过循环更新</li>
<li>返回值分析，返回值为 max</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span>prices<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> prices<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
        max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> prices<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">-</span> min<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，本题也可以通过朴素循环求解，这里就不分析了，贴下代码</p>
<h4 id="暴力法" tabindex="-1"><a class="header-anchor" href="#暴力法" aria-hidden="true">#</a> 暴力法</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">prices</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
        <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> profit <span class="token operator">=</span> prices<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>profit <span class="token operator">></span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    max <span class="token operator">=</span> profit<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最长上升子序列-⭐⭐" tabindex="-1"><a class="header-anchor" href="#最长上升子序列-⭐⭐" aria-hidden="true">#</a> 最长上升子序列 ⭐⭐</h3>
<blockquote>
<p>：point_right：
<a href="https://leetcode-cn.com/problems/longest-increasing-subsequence/" target="_blank" rel="nofollow noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给你一个整数数组 nums，找到其中最长严格递增子序列的长度。</p>
<p>子序列是由数组派生而来的序列，删除 (或不删除) 数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。</p>
<div class="custom-container tip"><p class="custom-container-title">示例</p>
<ul>
<li>输入：nums = [10,9,2,5,3,7,101,18]</li>
<li>输出：4</li>
<li>解释：最长递增子序列是 [2,3,7,101]，因此长度为 4</li>
</ul>
</div>
<h4 id="思路分析-2" tabindex="-1"><a class="header-anchor" href="#思路分析-2" aria-hidden="true">#</a> 思路分析</h4>
<p>做了两道题目之后，你对动态规划有没有些感觉了呢 😜，我们接着来看这道经典的动态规划题，如何获取<strong>最长严格递增子序列</strong>？常规思路分析就是<strong>数组中后一个数比前面每一个都要大</strong>，一旦出现小的，连续性就不存在了</p>
<ul>
<li>状态定义，我们可以用 <code v-pre>f(n)</code> 表示前 n 个上升子序列</li>
<li>转移方程分析，什么情况下我们可以确定数组中后一个数比前面每一个都要大？这里可以预见的是，使用双重循环，<code v-pre>[0, n]</code> 这个区间为外层循环，<code v-pre>[0, m]</code> 这个区间为内层循环，且 m&lt; n，如果第 n 个数为上升子序列，则前 n 个数势必比任何一个 <code v-pre>[f(0), f(m)]</code> 的取值要大，所以其转移方程为：
<code v-pre>f(n) = max{(f(n), f(m)+1)}, m&lt;n</code></li>
<li>初始值分析，最大值 max 赋值为 0，通过循环更新，dp 为长度为数组长度的新数组，其初始值均为 1</li>
<li>返回值分析，返回值为 max</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">lengthOfLIS</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">,</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这道题时间复杂度已经是 O(n^2) 了，思考下，有没有其他更优的解法呢？</p>
</blockquote>
<h3 id="最长递增子序列的个数-⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#最长递增子序列的个数-⭐⭐⭐" aria-hidden="true">#</a> 最长递增子序列的个数 ⭐⭐⭐</h3>
<blockquote>
<p>：point_right：
<a href="https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/" target="_blank" rel="nofollow noopener noreferrer">题目链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给定一个未排序的整数数组，找到最长递增子序列的个数。</p>
<div class="custom-container tip"><p class="custom-container-title">示例</p>
<ul>
<li>输入：[1,3,5,4,7]</li>
<li>输出：2</li>
<li>解释：有两个最长递增子序列，分别是 [1，3，4，7] 和 [1，3，5，7]。</li>
</ul>
</div>
<h4 id="思路分析-3" tabindex="-1"><a class="header-anchor" href="#思路分析-3" aria-hidden="true">#</a> 思路分析</h4>
<p>这道题目是上一题的变形，上一题求解了<strong>最长递增子序列</strong>，那<strong>最长递增子序列</strong>是否只有一个呢？当然不是了，有几个，正是本题的求解目的</p>
<p>首先考虑下，这道题和上道题不同的地方在哪里，就是要在<strong>求解最长递增子序列的同时，记录其个数</strong>，那要怎么记录这个<strong>个数</strong>，就是本题的关键了，对于上个题目，我们给出的转移方程是
<code v-pre>f(n) = max{(f(n), f(m)+1)}, m&lt;n</code>，
那对于有多少个这样的最长子序列，我们只需要将符合
<code v-pre>f(n)=f(m) + 1</code>
的组合挑选出来即可，所以给予之前的做法，我们只需要在对应条件内，再进行判断即可</p>
<ul>
<li>状态定义，我们可以用 <code v-pre>f(n)</code> 表示前 n 个上升子序列</li>
<li>转移方程分析，什么情况下我们可以确定数组中后一个数比前面每一个都要大？这里可以预见的是，使用双重循环，<code v-pre>[0, n]</code> 这个区间为外层循环，<code v-pre>[0, m]</code> 这个区间为内层循环，且 m&lt; n，如果第 n 个数为上升子序列，则前 n 个数势必比任何一个 <code v-pre>[f(0), f(m)]</code> 的取值要大，所以其转移方程为：
<code v-pre>f(n) = max{(f(n), f(m)+1)}, m&lt;n</code>，判断条件 <code v-pre>f(n)=f(m) + 1</code></li>
<li>初始值分析，最大值 max 赋值为 0，通过循环更新，dp 为长度为数组长度的新数组，其初始值均为 1，count 为长度为数组长度的新数组，其初始值均为 1</li>
<li>返回值分析，返回值为 count</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findNumberOfLIS</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span>
                    count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> count<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            max <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            res <span class="token operator">=</span> count<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>max <span class="token operator">===</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> count<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本期动态规划通过四个常见题目，简要介绍了动态规划问题的常见解题思路，从状态定义、转移方程、初始值和返回值四方面进行了分析，其中<strong>转移方程</strong>是最核心的，而转移方程的确立来自对问题和子问题的梳理和分解，当你有了一个正确的转移方程，就已经成功了一大半，再考虑好相关边界取值，基本就大功告成了。</p>
<p>当然，动态规划可不止这些问题，比如：矩阵运算、前缀和、背包和路径压缩等问题，下一期我们将介绍进阶版本的动态规划，敬请期待。</p>
<h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2>
</div></template>


