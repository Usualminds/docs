import{r as c,o as l,c as u,a as n,b as a,w as e,F as r,e as o,d as s}from"./app.5f2253b3.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const k={},b=o(`<h2 id="stylus-loader" tabindex="-1"><a class="header-anchor" href="#stylus-loader" aria-hidden="true">#</a> Stylus loader</h2><p>\u4E00\u4E2A webpack \u7684 Stylus loader\u3002\u5C06 Stylus \u6587\u4EF6\u7F16\u8BD1\u4E3A CSS\u3002</p><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5B89\u88C5 <code>stylus</code> \u548C <code>stylus-loader</code>\uFF1A</p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>$ npm install stylus stylus-loader --save-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5C06\u8BE5 loader \u6DFB\u52A0\u5230 <code>webpack</code> \u914D\u7F6E\u4E2D\u3002\u4F8B\u5982\uFF1A</p><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06 Stylus \u6587\u4EF6\u7F16\u8BD1\u4E3A CSS</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u63A5\u7740\u6309\u7167\u4F60\u4E60\u60EF\u7684\u65B9\u5F0F\u8FD0\u884C <code>webpack</code>\u3002</p><h2 id="\u53EF\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u9879" aria-hidden="true">#</a> \u53EF\u9009\u9879</h2><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;"><strong><a href="#stylusoptions"><code>stylusOptions</code></a></strong></td><td style="text-align:center;"><code>{Object|Function}</code></td><td style="text-align:center;"><code>{}</code></td><td style="text-align:left;">Stylus \u7684\u53EF\u9009\u9879\u3002</td></tr><tr><td style="text-align:center;"><strong><a href="#sourcemap"><code>sourceMap</code></a></strong></td><td style="text-align:center;"><code>{Boolean}</code></td><td style="text-align:center;"><code>compiler.devtool</code></td><td style="text-align:left;">\u542F\u7528/\u7981\u7528\u751F\u6210 SourceMap\u3002</td></tr><tr><td style="text-align:center;"><strong><a href="#webpackimporter"><code>webpackImporter</code></a></strong></td><td style="text-align:center;"><code>{Boolean}</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u542F\u7528/\u7981\u7528\u9ED8\u8BA4\u7684 webpack importer\u3002</td></tr><tr><td style="text-align:center;"><strong><a href="#additionaldata"><code>additionalData</code></a></strong></td><td style="text-align:center;"><code>{String|Function}</code></td><td style="text-align:center;"><code>undefined</code></td><td style="text-align:left;">\u5728\u5165\u53E3\u6587\u4EF6\u8D77\u59CB\u6216\u672B\u5C3E\u6DFB\u52A0 <code>Stylus</code> \u4EE3\u7801\u3002</td></tr><tr><td style="text-align:center;"><strong><a href="#implementation"><code>implementation</code></a></strong></td><td style="text-align:center;"><code>{String|Function}</code></td><td style="text-align:center;"><code>stylus</code></td><td style="text-align:left;">\u914D\u7F6E Stylus \u4F7F\u7528\u7684\u5B9E\u73B0\u5E93\u3002</td></tr></tbody></table><h3 id="stylusoptions" tabindex="-1"><a class="header-anchor" href="#stylusoptions" aria-hidden="true">#</a> <code>stylusOptions</code></h3><p>\u7C7B\u578B\uFF1A<code>Object|Function</code> \u9ED8\u8BA4\u503C\uFF1A<code>{}</code></p>`,13),d=s("\u901A\u8FC7 "),m=n("code",null,"stylusOptions",-1),g=s(" \u5C5E\u6027\uFF0C\u4F60\u53EF\u4EE5\u7ED9 "),h=n("code",null,"stylus-loader",-1),y=s(" \u914D\u7F6E "),x=s("loader options"),_=s(" \u4E2D\u4EFB\u610F\u7279\u5B9A\u7684\u9009\u9879\u503C\u3002 \u6240\u6709\u53EF\u7528\u9009\u9879\u53EF\u4EE5\u67E5\u770B "),v={href:"https://stylus-lang.com/docs/js.html",target:"_blank",rel:"noopener noreferrer"},q=s("Stylus \u6587\u6863"),f=s("\u3002 \u8FD9\u4E9B\u914D\u7F6E\u9879\u9700\u8981\u5C06\u7834\u6298\u53F7\uFF08dash-case\uFF09\u8F6C\u6362\u4E3A\u9A7C\u5CF0\u503C\uFF08camelCase\uFF09\u540E\u8FDB\u884C\u8BBE\u7F6E\u3002"),w=o(`<h4 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> <code>Object</code></h4><p>\u4F7F\u7528\u5BF9\u8C61\uFF08Object\uFF09\u7684\u5F62\u5F0F\u4F20\u9012 options \u7ED9 Stylus\u3002</p><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              stylusOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token doc-comment comment">/**
                 * \u6307\u5B9A\u8981\u4F7F\u7528\u7684 Stylus \u63D2\u4EF6\u3002\u5C06\u63D2\u4EF6\u4F5C\u4E3A
                 * \u5B57\u7B26\u4E32\u8FDB\u884C\u4F20\u9012\uFF0C\u800C\u4E0D\u662F\u4ECE Webpack \u914D\u7F6E\u4E2D\u5BFC\u5165\u3002
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>Function<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> []
                 */</span>
                use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nib&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * \u6307\u5B9A path \u7684\u67E5\u627E\u8DEF\u5F84\u3002
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> []
                 */</span>
                include<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/styl/config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * \u5BFC\u5165\u6307\u5B9A\u7684 Stylus \u6587\u4EF6\u6216\u8005\u8DEF\u5F84
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> []
                 */</span>
                <span class="token keyword">import</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nib&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/styl/mixins&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * \u5B9A\u4E49 Stylus \u53D8\u91CF\u6216\u8005\u51FD\u6570\u3002
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token operator">|</span>Object<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                 */</span>
                <span class="token comment">// \u5B9A\u4E49\u6570\u7EC4\u8BED\u6CD5\u7684\u63A8\u8350\u683C\u5F0F\uFF1A[key, value, raw]</span>
                define<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">[</span><span class="token string">&quot;$development&quot;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token string">&quot;rawVar&quot;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// Object \u8BED\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF08\u4E0D\u53EF\u6307\u5B9A &quot;raw&#39; \u9009\u9879\uFF09</span>
                <span class="token comment">// define: {</span>
                <span class="token comment">//   $development: p<wbr>rocess.env.NODE_ENV === &#39;development&#39;,</span>
                <span class="token comment">//   rawVar: 42,</span>
                <span class="token comment">// },</span>

                <span class="token doc-comment comment">/**
                 * \u662F\u5426\u5305\u542B\u901A\u8FC7 @import \u5BFC\u5165\u7684\u5E38\u89C4 CSS\u3002
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> false
                 */</span>
                includeCSS<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * \u89E3\u6790\u5BFC\u5165\u6587\u4EF6\u4E2D\u7684\u76F8\u5BF9 url()\u3002
                 *
                 * <span class="token keyword">@see</span> https://stylus-lang.com/docs/js.html#stylusresolveroptions
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token operator">|</span>Object<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> <span class="token class-name"><span class="token punctuation">{</span> nocheck<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
                 */</span>
                resolveURL<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token comment">// resolveURL: { nocheck: true },</span>

                <span class="token doc-comment comment">/**
                 * \u751F\u6210 CSS \u540E \u6CE8\u5165\u6CE8\u91CA\u5E76\u6307\u5B9A\u5176\u6240\u5728 Stylus \u6587\u4EF6\u884C\u3002
                 *
                 * <span class="token keyword">@see</span> https://stylus-lang.com/docs/executable.html
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> false
                 */</span>
                lineNumbers<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * \u5C06 @import \u548C @charset \u79FB\u81F3\u6587\u4EF6\u9876\u90E8\u3002
                 *
                 * <span class="token keyword">@see</span> https://stylus-lang.com/docs/executable.html
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> false
                 */</span>
                hoistAtrules<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * \u538B\u7F29\u8F93\u51FA\u7684 CSS\u3002
                 * \u751F\u4EA7\u73AF\u5883\u9ED8\u8BA4\u503C\u4E3A \`true\`
                 *
                 * <span class="token keyword">@see</span> https://stylus-lang.com/docs/executable.html
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> false
                 */</span>
                compress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br></div></div><h4 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> <code>Function</code></h4><p>\u5141\u8BB8\u6839\u636E loader \u7684 context \u6765\u8BBE\u7F6E options\uFF0C\u518D\u4F20\u9012\u7ED9 Stylus\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token function-variable function">stylusOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">loaderContext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u66F4\u591A\u53EF\u7528\u7684\u5C5E\u6027\u53C2\u89C1 https://webpack.js.org/api/loaders/</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span> resourcePath<span class="token punctuation">,</span> rootContext <span class="token punctuation">}</span> <span class="token operator">=</span> loaderContext<span class="token punctuation">;</span>
                <span class="token keyword">const</span> relativePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>rootContext<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>relativePath <span class="token operator">===</span> <span class="token string">&quot;styles/foo.styl&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    paths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;absolute/path/c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;absolute/path/d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                  paths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;absolute/path/a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;absolute/path/b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> <code>sourceMap</code></h3><p>\u7C7B\u578B\uFF1A<code>Boolean</code></p><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              sourceMap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              sourceMap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="webpackimporter" tabindex="-1"><a class="header-anchor" href="#webpackimporter" aria-hidden="true">#</a> <code>webpackImporter</code></h3><p>\u7C7B\u578B\uFF1A<code>Boolean</code> \u9ED8\u8BA4\u503C\uFF1A<code>true</code></p><p>\u542F\u7528/\u7981\u7528 webpack \u9ED8\u8BA4\u7684 importer\u3002</p><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u6837\u505A\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002 \u4F46\u662F\u8BF7\u614E\u7528\uFF0C\u56E0\u4E3A\u53EF\u80FD\u4F1A\u4F7F\u5F97 aliases \u548C\u4EE5 <code>~</code> \u5F00\u5934\u7684 <code>@import</code> \u89C4\u5219\u5931\u6548\u3002</p><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              webpackImporter<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="additionaldata" tabindex="-1"><a class="header-anchor" href="#additionaldata" aria-hidden="true">#</a> <code>additionalData</code></h3><p>\u7C7B\u578B\uFF1A<code>String|Function</code> \u9ED8\u8BA4\u503C\uFF1A<code>undefined</code></p><p>\u5728\u5B9E\u9645\u5165\u53E3\u6587\u4EF6\u7684\u8D77\u59CB\u4F4D\u7F6E\u6DFB\u52A0 <code>Stylus</code> \u4EE3\u7801\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>stylus-loader</code> \u53EA\u4F1A<strong>\u8FFD\u52A0</strong>\u5E76\u4E0D\u4F1A\u8986\u76D6\u6587\u4EF6\u5185\u5BB9\u3002</p><p>\u5F53\u4F60\u7684 Stylus \u53D8\u91CF\u4F9D\u8D56\u73AF\u5883\u53D8\u91CF\u65F6\u8FD9\u4E2A\u5C5E\u6027\u5C06\u975E\u5E38\u6709\u7528\uFF1A</p><blockquote><p>\u2139 \u7531\u4E8E\u4F60\u6CE8\u5165\u4E86\u4EE3\u7801\uFF0C\u56E0\u6B64\u5B83\u5C06\u7834\u574F\u5165\u53E3\u6587\u4EF6\u7684\u6E90\u6620\u5C04\u5173\u7CFB\u3002\u901A\u5E38\u6709\u6BD4\u8FD9\u66F4\u7B80\u5355\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4F8B\u5982\u591A\u4E2A Stylus \u5165\u53E3\u6587\u4EF6\u3002</p></blockquote><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> <code>String</code></h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@env: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="function-1" tabindex="-1"><a class="header-anchor" href="#function-1" aria-hidden="true">#</a> <code>Function</code></h4><h5 id="sync" tabindex="-1"><a class="header-anchor" href="#sync" aria-hidden="true">#</a> Sync</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token function-variable function">additionalData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> loaderContext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u66F4\u591A\u53EF\u7528\u7684\u5C5E\u6027\u53C2\u89C1 https://webpack.js.org/api/loaders/</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span> resourcePath<span class="token punctuation">,</span> rootContext <span class="token punctuation">}</span> <span class="token operator">=</span> loaderContext<span class="token punctuation">;</span>
                <span class="token keyword">const</span> relativePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>rootContext<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>relativePath <span class="token operator">===</span> <span class="token string">&quot;styles/foo.styl&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token string">&quot;value = 100px&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> <span class="token string">&quot;value 200px&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h5 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> Async</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token function-variable function">additionalData</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> loaderContext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u66F4\u591A\u53EF\u7528\u7684\u5C5E\u6027\u53C2\u89C1 https://webpack.js.org/api/loaders/</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span> resourcePath<span class="token punctuation">,</span> rootContext <span class="token punctuation">}</span> <span class="token operator">=</span> loaderContext<span class="token punctuation">;</span>
                <span class="token keyword">const</span> relativePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>rootContext<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>relativePath <span class="token operator">===</span> <span class="token string">&quot;styles/foo.styl&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token string">&quot;value = 100px&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> <span class="token string">&quot;value 200px&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> <code>implementation</code></h3><p>\u7C7B\u578B\uFF1A<code>Function | String</code></p><p>\u7279\u6B8A\u7684 <code>implementation</code> \u9009\u9879\u51B3\u5B9A\u4F7F\u7528 Stylus \u7684\u54EA\u4E2A\u5B9E\u73B0\u3002\u5C06\u4F1A\u8986\u76D6\u672C\u5730\u5B89\u88C5\u7684 <code>stylus</code> \u7684 <code>peerDependency</code> \u7248\u672C\u3002</p><h4 id="function-2" tabindex="-1"><a class="header-anchor" href="#function-2" aria-hidden="true">#</a> Function</h4><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              implementation<span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;stylus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="string-1" tabindex="-1"><a class="header-anchor" href="#string-1" aria-hidden="true">#</a> String</h4><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              implementation<span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;stylus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><h3 id="\u5E38\u89C4\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4\u7528\u6CD5" aria-hidden="true">#</a> \u5E38\u89C4\u7528\u6CD5</h3>`,40),j=s("\u5C06 "),S=n("code",null,"stylus-loader",-1),C=s("\u3001"),O=n("code",null,"css-loader",-1),N=s(" \u548C "),P=n("code",null,"style-loader",-1),E=s(" \u4E32\u8054\u8D77\u6765\u4F7F\u7528\u53EF\u7ACB\u5373\u5C06\u6240\u6709\u6837\u5F0F\u66F4\u65B0\u5230 DOM\u3002"),F=o(`<p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4ECE JS \u4E2D\u521B\u5EFA\u6837\u5F0F\u8282\u70B9</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06 CSS \u8F6C\u4E3A CommonJS</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06 Stylus \u7F16\u8BD1\u4E3A CSS</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="source-maps" tabindex="-1"><a class="header-anchor" href="#source-maps" aria-hidden="true">#</a> Source maps</h3><p>\u4E3A\u4E86\u751F\u6210 CSS \u7684 source map, \u4F60\u9700\u8981\u5728 loader \u7684\u53EF\u9009\u9879\u4E2D\u8BBE\u7F6E <code>sourceMap</code> \u5C5E\u6027\u3002\u5982\u679C\u6CA1\u8BBE\u7F6E\u7684\u8BDD loader \u5C06\u4F1A\u7EE7\u627F\u4F60 webpack \u4E2D\u4E3A\u751F\u6210 source map \u8BBE\u7F6E\u7684\u5C5E\u6027\u503C <code>devtool</code>\u3002</p><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  devtool<span class="token operator">:</span> <span class="token string">&quot;source-map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4EFB\u4F55\u7C7B\u4F3C\u4E8E &quot;source-map&quot; \u7684 devtool \u503C\u90FD\u53EF\u4EE5</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              sourceMap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              sourceMap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="stylus-\u4E2D\u4F7F\u7528-nib" tabindex="-1"><a class="header-anchor" href="#stylus-\u4E2D\u4F7F\u7528-nib" aria-hidden="true">#</a> stylus \u4E2D\u4F7F\u7528 nib</h3><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4ECE JS \u4E2D\u521B\u5EFA\u6837\u5F0F\u8282\u70B9</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06 CSS \u8F6C\u4E3A CommonJS</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06 Stylus \u7F16\u8BD1\u4E3A CSS</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              stylusOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
                use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;nib&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token keyword">import</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nib&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u5BFC\u5165-json-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165-json-\u6587\u4EF6" aria-hidden="true">#</a> \u5BFC\u5165 JSON \u6587\u4EF6</h3><p>Stylus \u5728 <code>json</code> \u51FD\u6570\u4E2D\u65E0\u6548\u3002 \u56E0\u6B64 webpack \u89E3\u6790\u5668\u4E0D\u9002\u7528\u4E8E <code>.json</code> \u6587\u4EF6\u3002 \u53EF\u4F7F\u7528 <a href="#stylus-resolver"><code>stylus resolver</code></a>\u3002</p><p><strong>index.styl</strong></p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token comment">// \u5047\u8BBE\u6587\u4EF6\u4F4D\u7F6E\u5728\u8FD9\u91CC \`node_modules/vars/vars.json\`</span>
<span class="token func"><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">&#39;vars.json&#39;</span><span class="token punctuation">)</span></span>

<span class="token atrule-declaration"><span class="token atrule">@media</span> queries-small</span>
  <span class="token selector">body</span>
    <span class="token property-declaration"><span class="token property">display</span> nope</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              stylusOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u6307\u5B9A\u6587\u4EF6\u67E5\u627E\u8DEF\u5F84\u3002</span>
                paths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules/vars&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="\u751F\u4EA7\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883" aria-hidden="true">#</a> \u751F\u4EA7\u73AF\u5883</h3>`,16),D=s("\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u63A8\u8350\u4F7F\u7528 "),M=s("MiniCssExtractPlugin"),I=s(" \u6765\u63D0\u53D6\u6837\u5F0F\u8868\u5230\u4E13\u95E8\u7684\u6587\u4EF6\u4E2D\uFF0C\u8FD9\u6837\u4F60\u7684\u6837\u5F0F\u5C31\u4E0D\u9700\u8981\u4F9D\u8D56 JavaScript\u3002"),$=n("h3",{id:"webpack-\u89E3\u6790\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack-\u89E3\u6790\u5668","aria-hidden":"true"},"#"),s(" webpack \u89E3\u6790\u5668")],-1),B=n("code",null,"webpack",-1),V=s(" \u63D0\u4F9B\u4E86\u4E00\u79CD "),L=s("\u89E3\u6790\u6587\u4EF6\u7684\u9AD8\u7EA7\u673A\u5236"),J=s("\u3002 "),T=n("code",null,"stylus-loader",-1),R=s(" \u5C06\u6240\u6709\u7684\u67E5\u8BE2\u7ED3\u679C\u4F20\u9012\u7ED9\u4E86 webpack \u89E3\u6790\u5668\u3002 \u56E0\u6B64\u4F60\u53EF\u4EE5\u4ECE "),U=n("code",null,"node_modules",-1),A=s(" \u4E2D\u5BFC\u5165 Stylus \u6A21\u5757\u3002"),G=o(`<div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&#39;bootstrap-styl/bootstrap/index.styl&#39;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,1),W=n("code",null,"~",-1),z=s(" \u7528\u6CD5\u5DF2\u88AB\u5E9F\u5F03\uFF0C\u53EF\u4EE5\u4ECE\u4EE3\u7801\u4E2D\u5220\u9664\uFF08"),H=n("strong",null,"\u6211\u4EEC\u5EFA\u8BAE\u8FD9\u4E48\u505A",-1),K=s("\uFF09\uFF0C\u4F46\u662F\u6211\u4EEC\u4F1A\u56E0\u4E3A\u4E00\u4E9B\u5386\u53F2\u539F\u56E0\u4E00\u76F4\u652F\u6301\u8FD9\u79CD\u5199\u6CD5\u3002 \u4E3A\u4EC0\u4E48\u4F60\u53EF\u4EE5\u79FB\u9664\u5B83\u5462\uFF1Floader \u9996\u5148\u4F1A\u5C1D\u8BD5\u4EE5\u76F8\u5BF9\u8DEF\u5F84\u89E3\u6790 "),Q=n("code",null,"@import",-1),X=s("\uFF0C\u5982\u679C\u5B83\u4E0D\u80FD\u88AB\u89E3\u6790\uFF0Cloader \u5C06\u4F1A\u5C1D\u8BD5\u5728 "),Y=n("code",null,"node_modules",-1),Z=s(" \u4E2D\u89E3\u6790 "),nn=n("code",null,"@import",-1),sn=s("\u3002 \u53EA\u8981\u5728\u5305\u540D\u524D\u52A0\u4E0A "),an=n("code",null,"~",-1),pn=s("\uFF0C\u544A\u8BC9 webpack \u5728 "),en=n("code",null,"modules",-1),tn=s(" \u4E2D\u8FDB\u884C\u67E5\u627E\u3002"),on=o(`<div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;~bootstrap-styl/bootstrap/index.styl&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u91CD\u8981\u7684\u662F\u53EA\u5728\u5B83\u7684\u524D\u9762\u52A0\u4E0A <code>~</code>\uFF0C\u56E0\u4E3A <code>~/</code> \u4F1A\u88AB\u89E3\u6790\u5230\u6839\u76EE\u5F55\u3002 <code>webpack</code> \u9700\u8981\u533A\u5206 <code>bootstrap</code> \u548C <code>~bootstrap</code>\uFF0C\u56E0\u4E3A CSS \u548C Stylus \u6587\u4EF6\u6CA1\u6709\u7279\u6B8A\u7684\u8BED\u6CD5\u53EF\u4EE5\u5BFC\u5165\u76F8\u5BF9\u8DEF\u5F84\u7684\u6587\u4EF6\u3002 <code>@import &quot;file&quot;</code> \u548C <code>@import &quot;./file&quot;;</code> \u5199\u6CD5\u662F\u7B49\u4EF7\u7684\u3002</p><h3 id="stylus-resolver" tabindex="-1"><a class="header-anchor" href="#stylus-resolver" aria-hidden="true">#</a> Stylus resolver</h3><p>\u5982\u679C\u6307\u5B9A <code>paths</code> \u9009\u9879\uFF0C\u5C06\u4ECE\u6307\u5B9A\u7684 <code>paths</code> \u4E2D\u641C\u7D22\u6A21\u5757\u3002 \u8FD9\u662F Stylus \u7684\u9ED8\u8BA4\u884C\u4E3A\u3002</p><p><strong>webpack.config.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              stylusOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
                paths<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u63D0\u53D6\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u63D0\u53D6\u6837\u5F0F" aria-hidden="true">#</a> \u63D0\u53D6\u6837\u5F0F</h3>`,7),cn=s("\u901A\u8FC7 webpack \u6253\u5305 CSS \u6709\u5F88\u591A\u597D\u5904\uFF0C\u6BD4\u5982\u7ED9\u5F15\u7528\u56FE\u7247\u548C\u5B57\u4F53\u6587\u4EF6\u8DEF\u5F84\u6DFB\u52A0 hash, \u5728\u5F00\u53D1\u73AF\u5883\u53EF\u4EE5"),ln=s("\u6A21\u5757\u70ED\u66F4\u65B0"),un=s("\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\uFF0C\u6839\u636E JS \u6765\u63A7\u5236\u5E94\u7528\u6837\u5F0F\u8868\u4E0D\u662F\u4E00\u4E2A\u597D\u7684\u65B9\u5F0F\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u751A\u81F3\u53EF\u80FD\u4F1A\u51FA\u73B0"),rn={href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content",target:"_blank",rel:"noopener noreferrer"},kn=s("\u95EA\u70C1\u73B0\u8C61"),bn=s("\u3002\u56E0\u6B64\uFF0C\u5728\u4F60\u6700\u7EC8\u7684\u751F\u4EA7\u73AF\u5883\u4E2D\u5C06\u5B83\u4EEC\u62C6\u5206\u6210\u5355\u72EC\u7684\u6587\u4EF6\u6765\u5B58\u653E\u901A\u5E38\u662F\u6BD4\u8F83\u597D\u7684\u9009\u62E9\u3002"),dn=n("p",null,"\u6709\u4E24\u79CD\u4ECE bundle \u4E2D\u63D0\u53D6\u6837\u5F0F\u8868\u7684\u65B9\u5F0F\uFF1A",-1),mn={href:"https://github.com/peerigon/extract-loader",target:"_blank",rel:"noopener noreferrer"},gn=n("code",null,"extract-loader",-1),hn=s(" \uFF08\u7B80\u5355\uFF0C\u4F46\u5F97\u4E13\u95E8\u6307\u5B9A "),yn=n("code",null,"css-loader",-1),xn=s(" \u7684 output\uFF09"),_n=s("MiniCssExtractPlugin"),vn=s(" \uFF08\u8F83\u590D\u6742\uFF0C\u4F46\u9002\u7528\u4E8E\u6240\u6709\u7684\u573A\u666F\uFF09"),qn=n("h2",{id:"\u8D21\u732E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8D21\u732E","aria-hidden":"true"},"#"),s(" \u8D21\u732E")],-1),fn=n("p",null,"\u5982\u679C\u4F60\u8FD8\u6CA1\u6709\u770B\u8FC7\u6211\u4EEC\u7684\u8D21\u732E\u8005\u6307\u5357\u8BF7\u5148\u82B1\u70B9\u65F6\u95F4\u770B\u4E00\u4E0B\u3002",-1),wn={href:"https://github.com/webpack-contrib/stylus-loader/blob/master/.github/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},jn=s("CONTRIBUTING"),Sn=n("h2",{id:"\u8BB8\u53EF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BB8\u53EF","aria-hidden":"true"},"#"),s(" \u8BB8\u53EF")],-1),Cn={href:"https://github.com/webpack-contrib/stylus-loader/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"},On=s("MIT");function Nn(Pn,En){const p=c("RouterLink"),t=c("ExternalLinkIcon");return l(),u(r,null,[b,n("p",null,[d,m,g,h,y,a(p,{to:"/configuration/module/#ruleoptions--rulequery"},{default:e(()=>[x]),_:1}),_,n("a",v,[q,a(t)]),f]),w,n("p",null,[j,S,C,a(p,{to:"/loaders/css-loader/"},{default:e(()=>[O]),_:1}),N,a(p,{to:"/loaders/style-loader/"},{default:e(()=>[P]),_:1}),E]),F,n("p",null,[D,a(p,{to:"/plugins/mini-css-extract-plugin/"},{default:e(()=>[M]),_:1}),I]),$,n("p",null,[B,V,a(p,{to:"/configuration/resolve/"},{default:e(()=>[L]),_:1}),J,T,R,U,A]),G,n("p",null,[W,z,H,K,Q,X,a(p,{to:"/configuration/resolve/#resolvemodules"},{default:e(()=>[Y]),_:1}),Z,nn,sn,an,pn,a(p,{to:"/configuration/resolve/#resolvemodules"},{default:e(()=>[en]),_:1}),tn]),on,n("p",null,[cn,a(p,{to:"/concepts/hot-module-replacement/"},{default:e(()=>[ln]),_:1}),un,n("a",rn,[kn,a(t)]),bn]),dn,n("ul",null,[n("li",null,[n("a",mn,[gn,a(t)]),hn,yn,xn]),n("li",null,[a(p,{to:"/plugins/mini-css-extract-plugin/"},{default:e(()=>[_n]),_:1}),vn])]),qn,fn,n("p",null,[n("a",wn,[jn,a(t)])]),Sn,n("p",null,[n("a",Cn,[On,a(t)])])],64)}var Mn=i(k,[["render",Nn]]);export{Mn as default};
