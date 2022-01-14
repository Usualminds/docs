<template><h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>动态规划（Dynamic programming，简称 DP）是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。</p>
<p>简单来讲，动态规划是一种算法思想，其核心是把问题分解为子问题，通过求解子问题进而解决当前问题。实际中，并非所有问题都可以通过动态规划来求解，通过动态规划解决对问题，对问题和其分解对子问题都有一定要求，也就是说一个问题可不可以通过动态规划解决，动态规划适用于有<strong>重叠子问题</strong>和<strong>最优子结构</strong>性质的问题，动态规划方法所耗时间往往远少于朴素解法</p>
<p><img src="@source/article/dp.png" alt=""></p>
<blockquote>
<p><a href="https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92" target="_blank" rel="noopener noreferrer">动态规划 Wiki<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="动态规划题解思路" tabindex="-1"><a class="header-anchor" href="#动态规划题解思路" aria-hidden="true">#</a> 动态规划题解思路</h2>
<p>动态规划问题常见解题思路，最核心的是<strong>转移方程</strong></p>
<ul>
<li>状态定义</li>
<li>转移方程</li>
<li>初始值</li>
<li>返回值</li>
</ul>
<h2 id="常见题目" tabindex="-1"><a class="header-anchor" href="#常见题目" aria-hidden="true">#</a> 常见题目</h2>
<p>动态规划常见的几种类型题目，⭐代表题目难度</p>
<h3 id="股票的最大利润-⭐" tabindex="-1"><a class="header-anchor" href="#股票的最大利润-⭐" aria-hidden="true">#</a> 股票的最大利润 ⭐</h3>
<p>假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>
<p>示例 1:</p>
<ul>
<li>输入: [7,1,5,3,6,4]</li>
<li>输出: 5</li>
<li>解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。</li>
</ul>
</li>
<li>
<p>示例 2:</p>
<ul>
<li>输入: [7,6,4,3,1]</li>
<li>输出: 0</li>
<li>解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。</li>
</ul>
</li>
</ul>
</div>
<h4 id="暴力法" tabindex="-1"><a class="header-anchor" href="#暴力法" aria-hidden="true">#</a> 暴力法</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">prices</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
        <span class="token keyword">let</span> maxprofit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> profit <span class="token operator">=</span> prices<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>profit <span class="token operator">></span> maxprofit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    maxprofit <span class="token operator">=</span> profit<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> maxprofit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="dp" tabindex="-1"><a class="header-anchor" href="#dp" aria-hidden="true">#</a> DP</h4>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span>prices<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> min<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="最长上升子序列-⭐⭐" tabindex="-1"><a class="header-anchor" href="#最长上升子序列-⭐⭐" aria-hidden="true">#</a> 最长上升子序列 ⭐⭐</h3>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/longest-increasing-subsequence/" target="_blank" rel="noopener noreferrer">题目链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。</p>
<p>子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。</p>
<div class="custom-container tip"><p class="custom-container-title">示例</p>
<ul>
<li>输入：nums = [10,9,2,5,3,7,101,18]</li>
<li>输出：4</li>
<li>解释：最长递增子序列是 [2,3,7,101]，因此长度为 4</li>
</ul>
</div>
<p>转移公式 <code>dp[i] = max(dp[i], dp[j] + 1), j&lt;i</code></p>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="最长递增子序列的个数-⭐⭐⭐" tabindex="-1"><a class="header-anchor" href="#最长递增子序列的个数-⭐⭐⭐" aria-hidden="true">#</a> 最长递增子序列的个数 ⭐⭐⭐</h3>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/" target="_blank" rel="noopener noreferrer">题目链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给定一个未排序的整数数组，找到最长递增子序列的个数。</p>
<div class="custom-container tip"><p class="custom-container-title">示例</p>
<ul>
<li>输入：[1,3,5,4,7]</li>
<li>输出：2</li>
<li>解释：有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。</li>
</ul>
</div>
<p>转移公式：<code>dp[i] = max(dp[i], dp[j] + 1), 0≤j&lt;i &amp;&amp; num[j]&lt;num[i]</code></p>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2>
</template>
