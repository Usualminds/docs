import{r as t,o as u,c as r,a as n,b as a,w as e,F as i,d as s,e as c}from"./app.5f2253b3.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const b={},d=n("h1",{id:"\u4E8C\u53C9\u6811",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E8C\u53C9\u6811","aria-hidden":"true"},"#"),s(" \u4E8C\u53C9\u6811")],-1),m=n("p",null,"\u987E\u540D\u601D\u4E49\uFF0C\u6BCF\u4E2A\u8282\u70B9\u6700\u591A\u6709\u4E24\u4E2A\u201C\u53C9\u201D\uFF0C\u4E5F\u5C31\u662F\u4E24\u4E2A\u5B50\u8282\u70B9\uFF0C\u5206\u522B\u662F\u5DE6\u5B50\u8282\u70B9\u548C\u53F3\u5B50\u8282\u70B9\u3002\u4E0D\u8FC7\uFF0C\u4E8C\u53C9\u6811\u5E76\u4E0D\u8981\u6C42\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E24\u4E2A\u5B50\u8282\u70B9\uFF0C\u6709\u7684\u8282\u70B9\u53EA\u6709\u5DE6\u5B50\u8282\u70B9\uFF0C\u6709\u7684\u8282\u70B9\u53EA\u6709\u53F3\u5B50\u8282\u70B9",-1),h=n("h2",{id:"\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811-i","aria-hidden":"true"},"#"),s(" \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811 I")],-1),f=s("\u{1F449} "),_={href:"https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},v=s("Leetcode \u94FE\u63A5"),g=c(`<p>\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u51FA\u4E8C\u53C9\u6811\u7684\u6BCF\u4E2A\u8282\u70B9\uFF0C\u540C\u4E00\u5C42\u7684\u8282\u70B9\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u6253\u5370\u3002</p><p>\u4F8B\u5982: \u7ED9\u5B9A\u4E8C\u53C9\u6811: <code>[3,9,20,null,null,15,7]</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token number">3</span>
   <span class="token operator">/</span> \\
  <span class="token number">9</span>  <span class="token number">20</span>
    <span class="token operator">/</span>  \\
   <span class="token number">15</span>   <span class="token number">7</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD4\u56DE\u5176\u5C42\u6B21\u904D\u5386\u7ED3\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u4E8C\u53C9\u6811\u7684 \u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\uFF08BFS\uFF09\u3002</li><li>BFS \u901A\u5E38\u501F\u52A9 \u961F\u5217 \u7684\u5148\u5165\u5148\u51FA\u7279\u6027\u6765\u5B9E\u73B0\u3002</li></ul></div>`,6),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},":"),s(" TreeNode "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"let"),s(" treeNode"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" results"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("treeNode"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" currentNode "),n("span",{class:"token operator"},"="),s(" treeNode"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

        results`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("currentNode"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`

        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("currentNode"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
            treeNode`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("currentNode"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("currentNode"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
            treeNode`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("currentNode"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(` results
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br")])],-1),w=n("h2",{id:"\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811-ii","aria-hidden":"true"},"#"),s(" \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811 II")],-1),N=s("\u{1F449} "),x={href:"https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/",target:"_blank",rel:"noopener noreferrer"},T=s("Leetcode \u94FE\u63A5"),j=c(`<p>\u4ECE\u4E0A\u5230\u4E0B\u6309\u5C42\u6253\u5370\u4E8C\u53C9\u6811\uFF0C\u540C\u4E00\u5C42\u7684\u8282\u70B9\u6309\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u6253\u5370\uFF0C\u6BCF\u4E00\u5C42\u6253\u5370\u5230\u4E00\u884C\u3002</p><p>\u4F8B\u5982: \u7ED9\u5B9A\u4E8C\u53C9\u6811:\xA0<code>[3,9,20,null,null,15,7]</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token number">3</span>
   <span class="token operator">/</span> \\
  <span class="token number">9</span>  <span class="token number">20</span>
    <span class="token operator">/</span>  \\
   <span class="token number">15</span>   <span class="token number">7</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD4\u56DE\u5176\u5C42\u6B21\u904D\u5386\u7ED3\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li><p>\u6309\u5C42\u6253\u5370\uFF1A \u9898\u76EE\u8981\u6C42\u7684\u4E8C\u53C9\u6811\u7684 \u4ECE\u4E0A\u81F3\u4E0B \u6253\u5370\uFF08\u5373\u6309\u5C42\u6253\u5370\uFF09\uFF0C\u53C8\u79F0\u4E3A\u4E8C\u53C9\u6811\u7684 \u5E7F\u5EA6\u4F18\u5148\u641C\u7D22\uFF08BFS\uFF09\u3002BFS \u901A\u5E38\u501F\u52A9 \u961F\u5217 \u7684\u5148\u5165\u5148\u51FA\u7279\u6027\u6765\u5B9E\u73B0\u3002</p></li><li><p>\u6BCF\u5C42\u6253\u5370\u5230\u4E00\u884C\uFF1A \u5C06\u672C\u5C42\u5168\u90E8\u8282\u70B9\u6253\u5370\u5230\u4E00\u884C\uFF0C\u5E76\u5C06\u4E0B\u4E00\u5C42\u5168\u90E8\u8282\u70B9\u52A0\u5165\u961F\u5217\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u5373\u53EF\u5206\u4E3A\u591A\u884C\u6253\u5370</p></li></ul></div>`,6),I=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Definition for a binary tree node.
 * class TreeNode `),n("span",{class:"token punctuation"},"{"),s(`
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) `),n("span",{class:"token punctuation"},"{"),s(`
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     `),n("span",{class:"token punctuation"},"}"),s(`
 * `),n("span",{class:"token punctuation"},"}"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"levelOrder"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},":"),s(" TreeNode "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" results"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" quene"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(` results

    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("quene"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(" quene"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" quene"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
            temp`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(" quene"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(" quene"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        results`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(` results
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br")])],-1),q=n("h2",{id:"\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811-iii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811-iii","aria-hidden":"true"},"#"),s(" \u4ECE\u4E0A\u5230\u4E0B\u6253\u5370\u4E8C\u53C9\u6811 III")],-1);function B(S,C){const o=t("ExternalLinkIcon"),p=t("CodeGroupItem"),l=t("CodeGroup");return u(),r(i,null,[d,m,h,n("blockquote",null,[n("p",null,[f,n("a",_,[v,a(o)])])]),g,a(l,null,{default:e(()=>[a(p,{title:"TS",active:""},{default:e(()=>[y]),_:1})]),_:1}),w,n("blockquote",null,[n("p",null,[N,n("a",x,[T,a(o)])])]),j,a(l,null,{default:e(()=>[a(p,{title:"TS",active:""},{default:e(()=>[I]),_:1})]),_:1}),q],64)}var L=k(b,[["render",B]]);export{L as default};