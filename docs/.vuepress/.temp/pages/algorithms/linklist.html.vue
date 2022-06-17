<template><h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1>
<h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    val<span class="token operator">:</span> <span class="token builtin">number</span>
    next<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> next<span class="token operator">?</span><span class="token operator">:</span> ListNode <span class="token operator">|</span><span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="移除链表元素" tabindex="-1"><a class="header-anchor" href="#移除链表元素" aria-hidden="true">#</a> 移除链表元素</h2>
<p><a href="https://leetcode.cn/problems/remove-linked-list-elements/" target="_blank" rel="noopener noreferrer">👉 Leetcode 链接-203<ExternalLinkIcon/></a></p>
<p>给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。</p>
<h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head

    head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> val<span class="token punctuation">)</span>

    <span class="token keyword">return</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> val <span class="token operator">?</span> head<span class="token punctuation">.</span>next <span class="token operator">:</span> head
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h2 id="设计一个链表" tabindex="-1"><a class="header-anchor" href="#设计一个链表" aria-hidden="true">#</a> 设计一个链表</h2>
<p><a href="https://leetcode.cn/problems/design-linked-list/" target="_blank" rel="noopener noreferrer">👉 Leetcode 链接-707<ExternalLinkIcon/></a></p>
<p>设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。</p>
<p>在链表类中实现这些功能：</p>
<p>get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    val<span class="token operator">:</span> <span class="token builtin">number</span>
    next<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> next<span class="token operator">?</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span>
    size<span class="token operator">:</span> <span class="token builtin">number</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token function">get</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

        <span class="token keyword">let</span> node<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> node<span class="token punctuation">.</span>val
    <span class="token punctuation">}</span>

    <span class="token function">getNode</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token keyword">let</span> node<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> node
    <span class="token punctuation">}</span>

    <span class="token function">addAtHead</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> oldHead<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> oldHead<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token function">addAtTail</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> prevNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">addAtIndex</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addAtHead</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> prevNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNode</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

        <span class="token keyword">const</span> node<span class="token operator">:</span> ListNode <span class="token operator">=</span> prevNode<span class="token punctuation">.</span>next
        prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> node<span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
            <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> prevNode<span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNode</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next

        <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h2 id="链表的中间结点" tabindex="-1"><a class="header-anchor" href="#链表的中间结点" aria-hidden="true">#</a> 链表的中间结点</h2>
<p>给定一个头结点为 head 的非空单链表，返回链表的中间结点。</p>
<p>如果有两个中间结点，则返回第二个中间结点。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例 1：</li>
</ul>
<p>输入：[1, 2, 3, 4, 5]
输出：此列表中的结点 3(序列化形式：[3, 4, 5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是[3, 4, 5]) 。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.</p>
<ul>
<li>示例 2：</li>
</ul>
<p>输入：[1, 2, 3, 4, 5, 6]
输出：此列表中的结点 4(序列化形式：[4, 5, 6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。</p>
</div>
<CodeGroup>
  <CodeGroupItem title="TS" active>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">middleNode</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span> fast <span class="token operator">=</span> head

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> slow
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="删除链表的节点" tabindex="-1"><a class="header-anchor" href="#删除链表的节点" aria-hidden="true">#</a> 删除链表的节点</h2>
<p><a href="https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/" target="_blank" rel="noopener noreferrer">Leetcode<ExternalLinkIcon/></a></p>
<p>给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。</p>
<p>返回删除后的链表的头节点。</p>
<p>注意：此题对比原题有改动</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例 1:
<ul>
<li>输入: head = [4,5,1,9], val = 5</li>
<li>输出: [4,1,9]</li>
<li>解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 1 -&gt; 9.</li>
</ul>
</li>
<li>示例 2:
<ul>
<li>输入: head = [4,5,1,9], val = 1</li>
<li>输出: [4,5,9]</li>
<li>解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -&gt; 5 -&gt; 9.</li>
</ul>
</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">.</span>next

    <span class="token keyword">let</span> current <span class="token operator">=</span> head

    <span class="token keyword">while</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> head
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="链表中倒数第-k-个节点" tabindex="-1"><a class="header-anchor" href="#链表中倒数第-k-个节点" aria-hidden="true">#</a> 链表中倒数第 k 个节点</h2>
<p>输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。</p>
<p>例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>示例：
<ul>
<li>给定一个链表: 1-&gt;2-&gt;3-&gt;4-&gt;5, 和 k = 2.</li>
<li>返回链表 4-&gt;5.</li>
</ul>
</li>
</ul>
</div>
<h3 id="一般性解法" tabindex="-1"><a class="header-anchor" href="#一般性解法" aria-hidden="true">#</a> 一般性解法</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">getKthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> node <span class="token operator">=</span> head

    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    node <span class="token operator">=</span> head

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count <span class="token operator">-</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> node
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) <span class="token punctuation">{</span>
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">getKthFromEnd</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">,</span> slow <span class="token operator">=</span> head

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> k <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
        k<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> slow
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></template>
