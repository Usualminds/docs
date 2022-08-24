<template><div><h1 id="周赛笔记" tabindex="-1"><a class="header-anchor" href="#周赛笔记" aria-hidden="true">#</a> 周赛笔记</h1>
<h2 id="_275-周赛复盘" tabindex="-1"><a class="header-anchor" href="#_275-周赛复盘" aria-hidden="true">#</a> 275 周赛复盘</h2>
<h3 id="矩阵是否唯一" tabindex="-1"><a class="header-anchor" href="#矩阵是否唯一" aria-hidden="true">#</a> 矩阵是否唯一</h3>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/check-if-every-row-and-column-contains-all-numbers/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">checkValid</span><span class="token punctuation">(</span>matrix<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">checkRow</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">checkCol</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">checkRow</span><span class="token punctuation">(</span>mat<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> row<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> size <span class="token operator">=</span> mat<span class="token punctuation">.</span>length
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">[</span>mat<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkCol</span><span class="token punctuation">(</span>mat<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> col<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> size <span class="token operator">=</span> mat<span class="token punctuation">.</span>length

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp<span class="token punctuation">[</span>mat<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
   <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">checkValid</span><span class="token punctuation">(</span>mat<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> n <span class="token operator">=</span> mat<span class="token punctuation">.</span>length
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> rows <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cols <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rows<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            cols<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mat<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>rows<span class="token punctuation">.</span>size <span class="token operator">&lt;</span> n <span class="token operator">||</span> cols<span class="token punctuation">.</span>size <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="_276-场周赛" tabindex="-1"><a class="header-anchor" href="#_276-场周赛" aria-hidden="true">#</a> 276 场周赛</h2>
<blockquote>
<p>👉 <a href="https://leetcode-cn.com/contest/weekly-contest-276/ranking/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="将字符串拆分为若干长度为-k-的组" tabindex="-1"><a class="header-anchor" href="#将字符串拆分为若干长度为-k-的组" aria-hidden="true">#</a> 将字符串拆分为若干长度为 k 的组</h3>
<blockquote>
<p>👉 <a href="https://leetcode-cn.com/problems/divide-a-string-into-groups-of-size-k/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>字符串 s 可以按下述步骤划分为若干长度为 k 的组：</p>
<p>第一组由字符串中的前 k 个字符组成，第二组由接下来的 k 个字符串组成，依此类推。每个字符都能够成为 某一个 组的一部分。
对于最后一组，如果字符串剩下的字符 不足 k 个，需使用字符 fill 来补全这一组字符。
注意，在去除最后一个组的填充字符 fill（如果存在的话）并按顺序连接所有的组后，所得到的字符串应该是 s 。</p>
<p>给你一个字符串 s ，以及每组的长度 k 和一个用于填充的字符 fill ，按上述步骤处理之后，返回一个字符串数组，该数组表示 s 分组后 每个组的组成情况 。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>输入：s = &quot;abcdefghij&quot;, k = 3, fill = &quot;x&quot;</li>
<li>输出：[&quot;abc&quot;,&quot;def&quot;,&quot;ghi&quot;,&quot;jxx&quot;]</li>
<li>解释：
与前一个例子类似，形成前三组 &quot;abc&quot;、&quot;def&quot; 和 &quot;ghi&quot; 。
对于最后一组，字符串中仅剩下字符 'j' 可以用。为了补全这一组，使用填充字符 'x' 两次。
因此，形成 4 组，分别是 &quot;abc&quot;、&quot;def&quot;、&quot;ghi&quot; 和 &quot;jxx&quot; 。</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">divideString</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> fill<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">=</span> i <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> char <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token operator">+</span>k<span class="token punctuation">)</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>char<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            char <span class="token operator">+=</span> fill
        <span class="token punctuation">}</span>

        ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>
  
    <span class="token keyword">return</span> ans
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="得到目标值的最少行动次数" tabindex="-1"><a class="header-anchor" href="#得到目标值的最少行动次数" aria-hidden="true">#</a> 得到目标值的最少行动次数</h3>
<blockquote>
<p>👉 <a href="https://leetcode-cn.com/problems/minimum-moves-to-reach-target-score/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>你正在玩一个整数游戏。从整数 1 开始，期望得到整数 target 。</p>
<p>在一次行动中，你可以做下述两种操作之一：</p>
<p>递增，将当前整数的值加 1（即， x = x + 1）。
加倍，使当前整数的值翻倍（即，x = 2 * x）。
在整个游戏过程中，你可以使用 递增 操作 任意 次数。但是只能使用 加倍 操作 至多 maxDoubles 次。</p>
<p>给你两个整数 target 和 maxDoubles ，返回从 1 开始得到 target 需要的最少行动次数。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>输入：target = 19, maxDoubles = 2</li>
<li>输出：7</li>
<li>解释：最初，x = 1 。
递增 3 次，x = 4 。
加倍 1 次，x = 8 。
递增 1 次，x = 9 。
加倍 1 次，x = 18 。
递增 1 次，x = 19 。</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">minMoves</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> maxDoubles<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>maxDoubles <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> target <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>target <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> maxDoubles<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            target<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            target <span class="token operator">=</span> target <span class="token operator">/</span> <span class="token number">2</span>
            count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        max<span class="token operator">++</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>target <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> count <span class="token operator">>=</span> maxDoubles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        max<span class="token operator">++</span>
        target<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决智力问题-待复盘-⭐⭐" tabindex="-1"><a class="header-anchor" href="#解决智力问题-待复盘-⭐⭐" aria-hidden="true">#</a> 解决智力问题（待复盘）⭐⭐</h3>
<blockquote>
<p>👉 <a href="https://leetcode-cn.com/problems/solving-questions-with-brainpower/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>给你一个下标从 0 开始的二维整数数组 questions ，其中 questions[i] = [pointsi, brainpoweri] 。</p>
<p>这个数组表示一场考试里的一系列题目，你需要 按顺序 （也就是从问题 0 开始依次解决），针对每个问题选择 解决 或者 跳过 操作。解决问题 i 将让你 获得  pointsi 的分数，但是你将 无法 解决接下来的 brainpoweri 个问题（即只能跳过接下来的 brainpoweri 个问题）。如果你跳过问题 i ，你可以对下一个问题决定使用哪种操作。</p>
<p>比方说，给你 questions = [[3, 2], [4, 3], [4, 4], [2, 5]] ：
如果问题 0 被解决了， 那么你可以获得 3 分，但你不能解决问题 1 和 2 。
如果你跳过问题 0 ，且解决问题 1 ，你将获得 4 分但是不能解决问题 2 和 3 。
请你返回这场考试里你能获得的 最高 分数</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>输入：questions = [[3,2],[4,3],[4,4],[2,5]]</li>
<li>输出：5</li>
<li>解释：解决问题 0 和 3 得到最高分。
<ul>
<li>解决问题 0 ：获得 3 分，但接下来 2 个问题都不能解决。</li>
<li>不能解决问题 1 和 2</li>
<li>解决问题 3 ：获得 2 分
总得分为：3 + 2 = 5 。没有别的办法获得 5 分或者多于 5 分。</li>
</ul>
</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mostPoints</span><span class="token punctuation">(</span>questions<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同时运行-n-台电脑的最长时间-待复盘-⭐⭐" tabindex="-1"><a class="header-anchor" href="#同时运行-n-台电脑的最长时间-待复盘-⭐⭐" aria-hidden="true">#</a> 同时运行 N 台电脑的最长时间 （待复盘）⭐⭐</h3>
<blockquote>
<p>👉 <a href="https://leetcode-cn.com/problems/maximum-running-time-of-n-computers/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>你有 n 台电脑。给你整数 n 和一个下标从 0 开始的整数数组 batteries ，其中第 i 个电池可以让一台电脑 运行 batteries[i] 分钟。你想使用这些电池让 全部 n 台电脑 同时 运行。</p>
<p>一开始，你可以给每台电脑连接 至多一个电池 。然后在任意整数时刻，你都可以将一台电脑与它的电池断开连接，并连接另一个电池，你可以进行这个操作 任意次 。新连接的电池可以是一个全新的电池，也可以是别的电脑用过的电池。断开连接和连接新的电池不会花费任何时间。</p>
<p>注意，你不能给电池充电。</p>
<p>请你返回你可以让 n 台电脑同时运行的 最长 分钟数。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">maxRunTime</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> batteries<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
<span class="token comment">//</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


