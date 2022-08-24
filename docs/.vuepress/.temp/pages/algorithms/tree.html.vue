<template><div><h1 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h1>
<p>顾名思义，每个节点最多有两个“叉”，也就是两个子节点，分别是左子节点和右子节点。不过，二叉树并不要求每个节点都有两个子节点，有的节点只有左子节点，有的节点只有右子节点</p>
<h2 id="从上到下打印二叉树-i" tabindex="-1"><a class="header-anchor" href="#从上到下打印二叉树-i" aria-hidden="true">#</a> 从上到下打印二叉树 I</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。</p>
<p>例如:
给定二叉树: <code v-pre>[3,9,20,null,null,15,7]</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token number">3</span>
   <span class="token operator">/</span> \
  <span class="token number">9</span>  <span class="token number">20</span>
    <span class="token operator">/</span>  \
   <span class="token number">15</span>   <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回其层次遍历结果：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>二叉树的 广度优先搜索（BFS）。</li>
<li>BFS 通常借助 队列 的先入先出特性来实现。</li>
</ul>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * class TreeNode <span class="token punctuation">{</span>
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">let</span> treeNode<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">let</span> results<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> currentNode <span class="token operator">=</span> treeNode<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">{</span>
            treeNode<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            treeNode<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> results
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="从上到下打印二叉树-ii" tabindex="-1"><a class="header-anchor" href="#从上到下打印二叉树-ii" aria-hidden="true">#</a> 从上到下打印二叉树 II</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。</p>
<p>例如:
给定二叉树: <code v-pre>[3,9,20,null,null,15,7]</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token number">3</span>
   <span class="token operator">/</span> \
  <span class="token number">9</span>  <span class="token number">20</span>
    <span class="token operator">/</span>  \
   <span class="token number">15</span>   <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回其层次遍历结果：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>
<p>按层打印： 题目要求的二叉树的 从上至下 打印（即按层打印），又称为二叉树的 广度优先搜索（BFS）。BFS 通常借助 队列 的先入先出特性来实现。</p>
</li>
<li>
<p>每层打印到一行： 将本层全部节点打印到一行，并将下一层全部节点加入队列，以此类推，即可分为多行打印</p>
</li>
</ul>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * class TreeNode <span class="token punctuation">{</span>
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">levelOrder</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> results<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> quene<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> results

    <span class="token keyword">while</span> <span class="token punctuation">(</span>quene<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> quene<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> quene<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> quene<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> quene<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> results
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="从上到下打印二叉树-iii" tabindex="-1"><a class="header-anchor" href="#从上到下打印二叉树-iii" aria-hidden="true">#</a> 从上到下打印二叉树 III</h2>
<h2 id="树的子结构" tabindex="-1"><a class="header-anchor" href="#树的子结构" aria-hidden="true">#</a> 树的子结构</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>输入两棵二叉树 A 和 B，判断 B 是不是 A 的子结构。(约定空树不是任意一个树的子结构)</p>
<p>B 是 A 的子结构， 即 A 中有出现和 B 相同的结构和节点值。</p>
<p>给定的树 A:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>     <span class="token number">3</span>
    <span class="token operator">/</span> \
   <span class="token number">4</span>   <span class="token number">5</span>
  <span class="token operator">/</span> \
 <span class="token number">1</span>   <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>树 B</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token number">4</span> 
  <span class="token operator">/</span>
 <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>
<p>示例 1：</p>
<ul>
<li>输入：A = [1,2,3], B = [3,1]</li>
<li>输出：false</li>
</ul>
</li>
<li>
<p>示例 2：</p>
<ul>
<li>输入：A = [3,4,5,1,2], B = [4,1]</li>
<li>输出：true</li>
</ul>
</li>
</ul>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * class TreeNode <span class="token punctuation">{</span>
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">B</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token function">walkTree</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">walkTree</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">B</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token constant">A</span><span class="token punctuation">.</span>val <span class="token operator">!==</span> <span class="token constant">B</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token keyword">return</span> <span class="token function">walkTree</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">walkTree</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="二叉树的镜像" tabindex="-1"><a class="header-anchor" href="#二叉树的镜像" aria-hidden="true">#</a> 二叉树的镜像</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>请完成一个函数，输入一个二叉树，该函数输出它的镜像。</p>
<p>例如输入：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>     <span class="token number">4</span>
   <span class="token operator">/</span>   \
  <span class="token number">2</span>     <span class="token number">7</span>
 <span class="token operator">/</span> \   <span class="token operator">/</span> \
<span class="token number">1</span>   <span class="token number">3</span> <span class="token number">6</span>   <span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>镜像输出：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>     <span class="token number">4</span>
   <span class="token operator">/</span>   \
  <span class="token number">7</span>     <span class="token number">2</span>
 <span class="token operator">/</span> \   <span class="token operator">/</span> \
<span class="token number">9</span>   <span class="token number">6</span> <span class="token number">3</span>   <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">用例</p>
<ul>
<li>示例 1：
<ul>
<li>输入：root = [4,2,7,1,3,6,9]</li>
<li>输出：[4,7,2,9,6,3,1]</li>
</ul>
</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">题目分析</p>
<p>镜像情况</p>
<ul>
<li>左子树和右子树节点交换</li>
</ul>
<p>返回条件</p>
<ul>
<li>子树到达叶子节点，root 为空时</li>
</ul>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * class TreeNode <span class="token punctuation">{</span>
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

    root<span class="token punctuation">.</span>left <span class="token operator">=</span> right
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> left

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="对称二叉树" tabindex="-1"><a class="header-anchor" href="#对称二叉树" aria-hidden="true">#</a> 对称二叉树</h2>
<blockquote>
<p>👉
<a href="https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/" target="_blank" rel="noopener noreferrer">Leetcode 链接<ExternalLinkIcon/></a></p>
</blockquote>
<p>请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。</p>
<p>例如，二叉树 [1,2,2,3,4,4,3] 是对称的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token number">1</span>
   <span class="token operator">/</span> \
  <span class="token number">2</span>   <span class="token number">2</span>
 <span class="token operator">/</span> \ <span class="token operator">/</span> \
<span class="token number">3</span>  <span class="token number">4</span> <span class="token number">4</span>  <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token number">1</span>
   <span class="token operator">/</span> \
  <span class="token number">2</span>   <span class="token number">2</span>
   \   \
   <span class="token number">3</span>    <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">用例</p>
<ul>
<li>
<p>示例 1：</p>
<ul>
<li>输入：root = [1,2,2,3,4,4,3]</li>
<li>输出：true</li>
</ul>
</li>
<li>
<p>示例 2：</p>
<ul>
<li>输入：root = [1,2,2,null,3,null,3]</li>
<li>输出：false</li>
</ul>
</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">题目分析</p>
<p>对称树情况</p>
<ul>
<li>左子树的左节点 = 右子树的右节点， 左子树的右节点 = 右子树的左节点</li>
</ul>
<p>返回条件</p>
<ul>
<li>左右子树都同时到达叶子节点，返回 true</li>
<li>其中一个为空另一个不为空或节点取值不相等，返回 false</li>
</ul>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * class TreeNode <span class="token punctuation">{</span>
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">isSymmetric</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

    <span class="token keyword">let</span> left <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> right <span class="token operator">=</span> root<span class="token punctuation">.</span>right

    <span class="token keyword">return</span> <span class="token function">swap</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span>left<span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> right<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> right <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> left<span class="token punctuation">.</span>val <span class="token operator">!==</span> right<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token keyword">return</span> <span class="token function">swap</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>left<span class="token punctuation">,</span> right<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">swap</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>right<span class="token punctuation">,</span> right<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
</div></template>


