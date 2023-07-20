<template><div><h1 id="数学" tabindex="-1"><a class="header-anchor" href="#数学" aria-hidden="true">#</a> 数学</h1>
<h2 id="消失的两个数字" tabindex="-1"><a class="header-anchor" href="#消失的两个数字" aria-hidden="true">#</a> 消失的两个数字</h2>
<p><a href="https://leetcode.cn/problems/missing-two-lcci/" target="_blank" rel="nofollow noopener noreferrer">👉 Leetcode 链接-17<ExternalLinkIcon/></a></p>
<p>给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？</p>
<p>以任意顺序返回这两个数字均可。</p>
<ul>
<li>
<p>示例 1:</p>
<ul>
<li>输入: [1]</li>
<li>输出: [2,3]</li>
</ul>
</li>
<li>
<p>示例 2:</p>
<ul>
<li>输入: [2,3]</li>
<li>输出: [1,4]</li>
</ul>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">missingTwo</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">*</span> <span class="token punctuation">(</span>len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> cur <span class="token operator">-=</span>  num

    <span class="token keyword">let</span> sum <span class="token operator">=</span> cur<span class="token punctuation">,</span> t <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>cur<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span> 

    cur <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>t<span class="token operator">*</span><span class="token punctuation">(</span>t<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num<span class="token operator">&lt;=</span>t<span class="token punctuation">)</span> cur <span class="token operator">-=</span> num
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span>cur<span class="token punctuation">,</span> sum <span class="token operator">-</span> cur<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最大公约数" tabindex="-1"><a class="header-anchor" href="#最大公约数" aria-hidden="true">#</a> 最大公约数</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getMax</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a
    <span class="token keyword">let</span> r <span class="token operator">=</span> a <span class="token operator">%</span> b
    <span class="token keyword">return</span> <span class="token function">getMax</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pow-x-n" tabindex="-1"><a class="header-anchor" href="#pow-x-n" aria-hidden="true">#</a> Pow(x，n)</h2>
<p><a href="https://leetcode.cn/problems/powx-n/" target="_blank" rel="nofollow noopener noreferrer">leetcode-50<ExternalLinkIcon/></a></p>
<p>实现 pow(x，n)，即计算 x 的 n 次幂函数 (即，xn)</p>
<h3 id="快速幂-递归" tabindex="-1"><a class="header-anchor" href="#快速幂-递归" aria-hidden="true">#</a> 快速幂+递归</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">myPow</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>n<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token function">getQuick</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token operator">-</span>n<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token function">getQuick</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getQuick</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> n<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
    
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">getQuick</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> res <span class="token operator">*</span> res <span class="token operator">:</span> res <span class="token operator">*</span> res <span class="token operator">*</span> x 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快速幂-迭代" tabindex="-1"><a class="header-anchor" href="#快速幂-迭代" aria-hidden="true">#</a> 快速幂+迭代</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">myPow</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>n<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token function">getQuick</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token operator">-</span>n<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token function">getQuick</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getQuick</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> n<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> xc <span class="token operator">=</span> x

    <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           res <span class="token operator">*=</span> xc
       <span class="token punctuation">}</span> 

       xc <span class="token operator">*=</span> xc

       n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归乘法" tabindex="-1"><a class="header-anchor" href="#递归乘法" aria-hidden="true">#</a> 递归乘法</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> A
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> B
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token constant">B</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">B</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">A</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">B</span>

    <span class="token keyword">return</span> <span class="token constant">A</span> <span class="token operator">+</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="x-的平方根" tabindex="-1"><a class="header-anchor" href="#x-的平方根" aria-hidden="true">#</a> x 的平方根</h2>
<p><a href="https://leetcode.cn/problems/sqrtx/" target="_blank" rel="nofollow noopener noreferrer">leetcode-69<ExternalLinkIcon/></a></p>
<p>给你一个非负整数 x，计算并返回 x 的算术平方根
由于返回类型是整数，结果只保留整数部分，小数部分将被舍去</p>
<ul>
<li>二分法</li>
<li>牛顿迭代</li>
<li>x=x^1/2=(e^lnx)^1/2=e^(0.5lnx)</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mySqrt</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> x<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right<span class="token operator">-</span>left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">&lt;=</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res <span class="token operator">=</span> mid
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


