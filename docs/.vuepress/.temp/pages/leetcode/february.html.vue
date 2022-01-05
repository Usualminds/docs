<template><h1 id="二月" tabindex="-1"><a class="header-anchor" href="#二月" aria-hidden="true">#</a> 二月</h1>
<h2 id="_2022-2-1" tabindex="-1"><a class="header-anchor" href="#_2022-2-1" aria-hidden="true">#</a> 2022.2.1</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例 1：</li>
</ul>
<p>输入：original = [1,2,3,4], m = 2, n = 2
输出：[[1,2],[3,4]]</p>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">construct2DArray</span><span class="token punctuation">(</span>original<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> m<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> original<span class="token punctuation">.</span>length<span class="token punctuation">,</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">*</span> n <span class="token operator">!==</span> len<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>original<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>length <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
      temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> results
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>  </CodeGroupItem>
</CodeGroup></template>
