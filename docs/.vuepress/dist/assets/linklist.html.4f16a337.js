import{r as a,o as r,c as u,a as e,w as p,b as n,F as i,d as t,e as s}from"./app.8eeab1a8.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const k={},d=t('<h1 id="\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a> \u94FE\u8868</h1><p>\u94FE\u8868</p><h2 id="\u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9" aria-hidden="true">#</a> \u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u5934\u7ED3\u70B9\u4E3A head \u7684\u975E\u7A7A\u5355\u94FE\u8868\uFF0C\u8FD4\u56DE\u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9\u3002</p><p>\u5982\u679C\u6709\u4E24\u4E2A\u4E2D\u95F4\u7ED3\u70B9\uFF0C\u5219\u8FD4\u56DE\u7B2C\u4E8C\u4E2A\u4E2D\u95F4\u7ED3\u70B9\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u793A\u4F8B 1\uFF1A</li></ul><p>\u8F93\u5165\uFF1A[1, 2, 3, 4, 5] \u8F93\u51FA\uFF1A\u6B64\u5217\u8868\u4E2D\u7684\u7ED3\u70B9 3(\u5E8F\u5217\u5316\u5F62\u5F0F\uFF1A[3, 4, 5]) \u8FD4\u56DE\u7684\u7ED3\u70B9\u503C\u4E3A 3 \u3002 (\u6D4B\u8BC4\u7CFB\u7EDF\u5BF9\u8BE5\u7ED3\u70B9\u5E8F\u5217\u5316\u8868\u8FF0\u662F[3, 4, 5]) \u3002 \u6CE8\u610F\uFF0C\u6211\u4EEC\u8FD4\u56DE\u4E86\u4E00\u4E2A ListNode \u7C7B\u578B\u7684\u5BF9\u8C61 ans\uFF0C\u8FD9\u6837\uFF1A ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, \u4EE5\u53CA ans.next.next.next = NULL.</p><ul><li>\u793A\u4F8B\xA02\uFF1A</li></ul><p>\u8F93\u5165\uFF1A[1, 2, 3, 4, 5, 6] \u8F93\u51FA\uFF1A\u6B64\u5217\u8868\u4E2D\u7684\u7ED3\u70B9 4(\u5E8F\u5217\u5316\u5F62\u5F0F\uFF1A[4, 5, 6]) \u7531\u4E8E\u8BE5\u5217\u8868\u6709\u4E24\u4E2A\u4E2D\u95F4\u7ED3\u70B9\uFF0C\u503C\u5206\u522B\u4E3A 3 \u548C 4\uFF0C\u6211\u4EEC\u8FD4\u56DE\u7B2C\u4E8C\u4E2A\u7ED3\u70B9\u3002</p></div>',6),m=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for singly-linked list.
 * class ListNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"middleNode"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token operator"},":"),s(" ListNode "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" ListNode "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" slow "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},","),s(" fast "),n("span",{class:"token operator"},"="),s(` head

    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("fast "),n("span",{class:"token operator"},"&&"),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        slow `),n("span",{class:"token operator"},"="),s(" slow"),n("span",{class:"token punctuation"},"."),s(`next
        fast `),n("span",{class:"token operator"},"="),s(" fast"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(` slow
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br")])],-1),h=n("h2",{id:"\u5220\u9664\u94FE\u8868\u7684\u8282\u70B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5220\u9664\u94FE\u8868\u7684\u8282\u70B9","aria-hidden":"true"},"#"),s(" \u5220\u9664\u94FE\u8868\u7684\u8282\u70B9")],-1),x={href:"https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},f=s("Leetcode"),v=t(`<p>\u7ED9\u5B9A\u5355\u5411\u94FE\u8868\u7684\u5934\u6307\u9488\u548C\u4E00\u4E2A\u8981\u5220\u9664\u7684\u8282\u70B9\u7684\u503C\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u5220\u9664\u8BE5\u8282\u70B9\u3002</p><p>\u8FD4\u56DE\u5220\u9664\u540E\u7684\u94FE\u8868\u7684\u5934\u8282\u70B9\u3002</p><p>\u6CE8\u610F\uFF1A\u6B64\u9898\u5BF9\u6BD4\u539F\u9898\u6709\u6539\u52A8</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u793A\u4F8B 1: <ul><li>\u8F93\u5165: head = [4,5,1,9], val = 5</li><li>\u8F93\u51FA: [4,1,9]</li><li>\u89E3\u91CA: \u7ED9\u5B9A\u4F60\u94FE\u8868\u4E2D\u503C\u4E3A\xA05\xA0\u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u5728\u8C03\u7528\u4E86\u4F60\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BE5\u94FE\u8868\u5E94\u53D8\u4E3A 4 -&gt; 1 -&gt; 9.</li></ul></li><li>\u793A\u4F8B 2: <ul><li>\u8F93\u5165: head = [4,5,1,9], val = 1</li><li>\u8F93\u51FA: [4,5,9]</li><li>\u89E3\u91CA: \u7ED9\u5B9A\u4F60\u94FE\u8868\u4E2D\u503C\u4E3A\xA01\xA0\u7684\u7B2C\u4E09\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u5728\u8C03\u7528\u4E86\u4F60\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BE5\u94FE\u8868\u5E94\u53D8\u4E3A 4 -&gt; 5 -&gt; 9.</li></ul></li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u94FE\u8868\u4E2D\u5012\u6570\u7B2C-k-\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u4E2D\u5012\u6570\u7B2C-k-\u4E2A\u8282\u70B9" aria-hidden="true">#</a> \u94FE\u8868\u4E2D\u5012\u6570\u7B2C k \u4E2A\u8282\u70B9</h2><p>\u8F93\u5165\u4E00\u4E2A\u94FE\u8868\uFF0C\u8F93\u51FA\u8BE5\u94FE\u8868\u4E2D\u5012\u6570\u7B2C k \u4E2A\u8282\u70B9\u3002\u4E3A\u4E86\u7B26\u5408\u5927\u591A\u6570\u4EBA\u7684\u4E60\u60EF\uFF0C\u672C\u9898\u4ECE 1 \u5F00\u59CB\u8BA1\u6570\uFF0C\u5373\u94FE\u8868\u7684\u5C3E\u8282\u70B9\u662F\u5012\u6570\u7B2C 1 \u4E2A\u8282\u70B9\u3002</p><p>\u4F8B\u5982\uFF0C\u4E00\u4E2A\u94FE\u8868\u6709 6 \u4E2A\u8282\u70B9\uFF0C\u4ECE\u5934\u8282\u70B9\u5F00\u59CB\uFF0C\u5B83\u4EEC\u7684\u503C\u4F9D\u6B21\u662F 1\u30012\u30013\u30014\u30015\u30016\u3002\u8FD9\u4E2A\u94FE\u8868\u7684\u5012\u6570\u7B2C 3 \u4E2A\u8282\u70B9\u662F\u503C\u4E3A 4 \u7684\u8282\u70B9\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u793A\u4F8B\uFF1A <ul><li>\u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868: 1-&gt;2-&gt;3-&gt;4-&gt;5, \u548C k = 2.</li><li>\u8FD4\u56DE\u94FE\u8868 4-&gt;5.</li></ul></li></ul></div><h3 id="\u4E00\u822C\u6027\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u822C\u6027\u89E3\u6CD5" aria-hidden="true">#</a> \u4E00\u822C\u6027\u89E3\u6CD5</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
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

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
        k<span class="token operator">--</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> slow
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,13);function w(y,g){const l=a("CodeGroupItem"),o=a("CodeGroup"),c=a("ExternalLinkIcon");return r(),u(i,null,[d,e(o,null,{default:p(()=>[e(l,{title:"TS",active:""},{default:p(()=>[m]),_:1})]),_:1}),h,n("p",null,[n("a",x,[f,e(c)])]),v],64)}var L=b(k,[["render",w]]);export{L as default};
