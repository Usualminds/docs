<template><h1 id="一月" tabindex="-1"><a class="header-anchor" href="#一月" aria-hidden="true">#</a> 一月</h1>
<h2 id="_2022-1-1" tabindex="-1"><a class="header-anchor" href="#_2022-1-1" aria-hidden="true">#</a> 2022.1.1</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给你一个下标从 0 开始的一维整数数组 original 和两个整数 m 和  n 。你需要使用 original 中 所有 元素创建一个 m 行 n 列的二维数组。</p>
<p>original 中下标从 0 到 n - 1 （都 包含 ）的元素构成二维数组的第一行，下标从 n 到 2 * n - 1 （都 包含 ）的元素构成二维数组的第二行，依此类推。</p>
<p>请你根据上述过程返回一个 m x n 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例 1：</li>
</ul>
<p>输入：original = [1,2,3,4], m = 2, n = 2
输出：[[1,2],[3,4]]</p>
<ul>
<li>示例 2：</li>
</ul>
<p>输入：original = [1,2], m = 1, n = 1
输出：[]</p>
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
</CodeGroup>
<h2 id="_2022-1-2" tabindex="-1"><a class="header-anchor" href="#_2022-1-2" aria-hidden="true">#</a> 2022.1.2</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/elimination-game/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>列表 arr 由在范围 [1, n] 中的所有整数组成，并按严格递增排序。请你对 arr 应用下述算法：</p>
<p>从左到右，删除第一个数字，然后每隔一个数字删除一个，直到到达列表末尾。
重复上面的步骤，但这次是从右到左。也就是，删除最右侧的数字，然后剩下的数字每隔一个删除一个。
不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
给你整数 n ，返回 arr 最后剩下的数字。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例 1：</li>
</ul>
<p>输入：n = 9
输出：6
解释：
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr = [2, 4, 6, 8]
arr = [2, 6]
arr = [6]</p>
<ul>
<li>示例 2：</li>
</ul>
<p>输入：n = 1
输出：1</p>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">lastRemaining</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">count</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> flag<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token operator">*</span><span class="token function">count</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">!</span>flag<span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token operator">*</span><span class="token function">count</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">!</span>flag<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token number">2</span><span class="token operator">*</span><span class="token function">count</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="_2022-1-3" tabindex="-1"><a class="header-anchor" href="#_2022-1-3" aria-hidden="true">#</a> 2022.1.3</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/day-of-the-week/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。</p>
<p>输入为三个整数：day、month 和 year，分别表示日、月、年。</p>
<p>您返回的结果必须是这几个值中的一个 {&quot;Sunday&quot;, &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, &quot;Saturday&quot;}。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例 1：</li>
</ul>
<p>输入：day = 31, month = 8, year = 2019
输出：&quot;Saturday&quot;</p>
<ul>
<li>示例 2：</li>
</ul>
<p>输入：day = 18, month = 7, year = 1999
输出：&quot;Sunday&quot;</p>
<ul>
<li>示例 3：</li>
</ul>
<p>输入：day = 15, month = 8, year = 1993
输出：&quot;Sunday&quot;</p>
</div>
<CodeGroup>
  <CodeGroupItem title="解法一" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">dayOfTheWeek</span><span class="token punctuation">(</span>day<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> month<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> weeks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Monday"</span><span class="token punctuation">,</span> <span class="token string">"Tuesday"</span><span class="token punctuation">,</span> <span class="token string">"Wednesday"</span><span class="token punctuation">,</span> <span class="token string">"Thursday"</span><span class="token punctuation">,</span> <span class="token string">"Friday"</span><span class="token punctuation">,</span> <span class="token string">"Saturday"</span><span class="token punctuation">,</span> <span class="token string">"Sunday"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> today <span class="token operator">=</span> <span class="token function">getDay</span><span class="token punctuation">(</span>day<span class="token punctuation">,</span> month<span class="token punctuation">,</span> year<span class="token punctuation">)</span>

    <span class="token keyword">return</span> weeks<span class="token punctuation">[</span><span class="token punctuation">(</span>today <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">7</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getDay</span><span class="token punctuation">(</span>day<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> month<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        months <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>

    count <span class="token operator">=</span> <span class="token punctuation">(</span>year <span class="token operator">-</span> <span class="token number">1971</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">365</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>year <span class="token operator">-</span> <span class="token number">1969</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>year <span class="token operator">%</span> <span class="token number">400</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token punctuation">(</span>year <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> year <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> month <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        count<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>month<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        count <span class="token operator">+=</span> months<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> count <span class="token operator">+</span> day
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>  </CodeGroupItem>
 <CodeGroupItem title="解法二" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// API 调用方法</span>
<span class="token keyword">function</span> <span class="token function">dayOfTheWeek</span><span class="token punctuation">(</span>day<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> month<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> weeks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Sunday'</span><span class="token punctuation">,</span><span class="token string">'Monday'</span><span class="token punctuation">,</span><span class="token string">'Tuesday'</span><span class="token punctuation">,</span><span class="token string">'Wednesday'</span><span class="token punctuation">,</span><span class="token string">'Thursday'</span><span class="token punctuation">,</span><span class="token string">'Friday'</span><span class="token punctuation">,</span><span class="token string">'Saturday'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span> month<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> day<span class="token punctuation">)</span>

    <span class="token keyword">return</span> weeks<span class="token punctuation">[</span>now<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>  </CodeGroupItem>
 <CodeGroupItem title="解法三" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">dayOfTheWeek</span><span class="token punctuation">(</span>day<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> month<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 蔡勒公式释义： https://zh.wikipedia.org/wiki/%E8%94%A1%E5%8B%92%E5%85%AC%E5%BC%8F</span>
    <span class="token comment">// w：星期（计算所得的数值对应的星期：0-星期日；1-星期一；2-星期二；3-星期三；4-星期四；5-星期五；6-星期六）</span>
    <span class="token keyword">let</span> weeks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Sunday'</span><span class="token punctuation">,</span> <span class="token string">'Monday'</span><span class="token punctuation">,</span> <span class="token string">'Tuesday'</span><span class="token punctuation">,</span> <span class="token string">'Wednesday'</span><span class="token punctuation">,</span> <span class="token string">'Thursday'</span><span class="token punctuation">,</span> <span class="token string">'Friday'</span><span class="token punctuation">,</span> <span class="token string">'Saturday'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>month <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        month <span class="token operator">+=</span> <span class="token number">12</span>
        year<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// c：年份前两位数 </span>
    <span class="token comment">// y：年份后两位数</span>
    <span class="token comment">// m：月（m的取值范围为3至14，即在蔡勒公式中，某年的1、2月要看作上一年的13、14月来计算，比如2003年1月1日要看作2002年的13月1日来计算)</span>
    <span class="token comment">// d：日</span>
    <span class="token keyword">let</span> c <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>year <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y <span class="token operator">=</span> year <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">,</span> m <span class="token operator">=</span> month<span class="token punctuation">,</span> d <span class="token operator">=</span> day

    <span class="token comment">// 公式</span>
    <span class="token keyword">let</span> w <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>y <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>c <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">*</span> c <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> m <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span> d <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> 

    <span class="token comment">// 防止负数溢出</span>
    w <span class="token operator">=</span> <span class="token punctuation">(</span>w<span class="token operator">%</span><span class="token number">7</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">7</span>

    <span class="token keyword">return</span> weeks<span class="token punctuation">[</span>w<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="_2022-1-4" tabindex="-1"><a class="header-anchor" href="#_2022-1-4" aria-hidden="true">#</a> 2022.1.4</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/cat-and-mouse/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>猫和老鼠</p>
<p>两位玩家分别扮演猫和老鼠，在一张 无向 图上进行游戏，两人轮流行动。</p>
<p>图的形式是：graph[a] 是一个列表，由满足 ab 是图中的一条边的所有节点 b 组成。</p>
<p>老鼠从节点 1 开始，第一个出发；猫从节点 2 开始，第二个出发。在节点 0 处有一个洞。</p>
<p>在每个玩家的行动中，他们 必须 沿着图中与所在当前位置连通的一条边移动。例如，如果老鼠在节点 1 ，那么它必须移动到 graph[1] 中的任一节点。</p>
<p>此外，猫无法移动到洞中（节点 0）。</p>
<p>然后，游戏在出现以下三种情形之一时结束：</p>
<p>如果猫和老鼠出现在同一个节点，猫获胜。
如果老鼠到达洞中，老鼠获胜。
如果某一位置重复出现（即，玩家的位置和移动顺序都与上一次行动相同），游戏平局。
给你一张图 graph ，并假设两位玩家都都以最佳状态参与游戏：</p>
<p>如果老鼠获胜，则返回 1；
如果猫获胜，则返回 2；
如果平局，则返回 0 。</p>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// TODO: 复杂动态规划及图论相关，待研究</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="_2022-1-5" tabindex="-1"><a class="header-anchor" href="#_2022-1-5" aria-hidden="true">#</a> 2022.1.5</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。</p>
<p>注意：你 不能 修改非 '?' 字符。</p>
<p>题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。</p>
<p>在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例 1：</li>
</ul>
<p>输入：s = &quot;?zs&quot;
输出：&quot;azs&quot;
解释：该示例共有 25 种解决方案，从 &quot;azs&quot; 到 &quot;yzs&quot; 都是符合题目要求的。只有 &quot;z&quot; 是无效的修改，因为字符串 &quot;zzs&quot; 中有连续重复的两个 'z' 。</p>
<ul>
<li>示例 2：</li>
</ul>
<p>输入：s = &quot;ubv?w&quot;
输出：&quot;ubvaw&quot;
解释：该示例共有 24 种解决方案，只有替换成 &quot;v&quot; 和 &quot;w&quot; 不符合题目要求。因为 &quot;ubvvw&quot; 和 &quot;ubvww&quot; 都包含连续重复的字符。</p>
<ul>
<li>示例 3：</li>
</ul>
<p>输入：s = &quot;j?qg??b&quot;
输出：&quot;jaqgacb&quot;</p>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">modifyString</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">,</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>s<span class="token punctuation">]</span><span class="token punctuation">,</span> signal <span class="token operator">=</span> <span class="token string">'?'</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> signal<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>i<span class="token operator">></span><span class="token number">0</span>  <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token operator">||</span> <span class="token punctuation">(</span>i<span class="token operator">&lt;</span>len<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">continue</span>
                <span class="token punctuation">}</span>

                arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span>j<span class="token punctuation">)</span>

                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="_2022-1-6" tabindex="-1"><a class="header-anchor" href="#_2022-1-6" aria-hidden="true">#</a> 2022.1.6</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/simplify-path/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。</p>
<p>在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。</p>
<p>请注意，返回的 规范路径 必须遵循下述格式：</p>
<p>始终以斜杠 '/' 开头。
两个目录名之间必须只有一个斜杠 '/' 。
最后一个目录名（如果存在）不能 以 '/' 结尾。
此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
返回简化后得到的 规范路径 。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例 1：</li>
</ul>
<p>输入：path = &quot;/home/&quot;
输出：&quot;/home&quot;
解释：注意，最后一个目录名后面没有斜杠。</p>
<ul>
<li>示例 2：</li>
</ul>
<p>输入：path = &quot;/../&quot;
输出：&quot;/&quot;
解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。</p>
<ul>
<li>示例 3：</li>
</ul>
<p>输入：path = &quot;/home//foo/&quot;
输出：&quot;/home/foo&quot;
解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。</p>
<ul>
<li>示例 4：</li>
</ul>
<p>输入：path = &quot;/a/./b/../../c/&quot;
输出：&quot;/c&quot;</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h3>
<p>通过 <code>/</code> 进行字符串分割，通过栈维护两种情况即可</p>
<ul>
<li>正常字母类目录 <code>/a</code>，入栈</li>
<li>返回上一层目录 <code>..</code>，出栈</li>
</ul>
<p>其他情况排除</p>
<ul>
<li><code>.</code> 当前目录，不做任何操作</li>
<li><code>///</code> 无意义类</li>
</ul>
<p>最后需要注意，始终以斜杠 <code>/</code> 开头</p>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">simplifyPath</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pathArray <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> pathArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">'..'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> item <span class="token operator">!==</span> <span class="token string">'.'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token string">'/'</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>  </CodeGroupItem>
</CodeGroup></template>
