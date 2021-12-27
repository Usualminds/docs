<template><h4 id="webpack-翻译相关" tabindex="-1"><a class="header-anchor" href="#webpack-翻译相关" aria-hidden="true">#</a> Webpack 翻译相关</h4>
<ul>
<li><a href="https://webpack.docschina.org/api/stats/" target="_blank" rel="noopener noreferrer">1.Stats Data<ExternalLinkIcon/></a></li>
</ul>
<h4 id="_1-stats-data" tabindex="-1"><a class="header-anchor" href="#_1-stats-data" aria-hidden="true">#</a> 1.Stats Data</h4>
<p>使用 <code>webpack</code> 编译源码时，用户可以生成一个包含模块统计信息的 <code>JSON</code> 文件。这些统计信息可以用来分析应用中的依赖关系图，从而优化 <code>webpack</code> 的编译速度。该文件通常由以下 <code>CLI</code> 命令生成：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx webpack --profile --json<span class="token operator">=</span>compilation-stats.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>--json=compilation-stats.json</code> 标志告诉 <code>webpack</code> 生成一个包含依赖关系图和其他各种构建信息的 <code>compilation-stats.json</code> 文件。通常情况下，<code>--profile</code> 标志也会被添加，这样的话每个 <a href="#module-objects"><code>module</code> objects</a> 都会增加一个 <code>profile</code> 部分，它包含了特定模块的统计信息。</p>
<h2 id="配置结构-structure" tabindex="-1"><a class="header-anchor" href="#配置结构-structure" aria-hidden="true">#</a> 配置结构（Structure)</h2>
<p>输出 JSON 文件的顶层结构相当简单，但是也包含部分嵌套的数据结构。为了让文档更易于使用，每个嵌套的数据结构都有对应的一小节来讲，注意，你可以点击如下的链接，跳转到相关章节查看文档：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">'version'</span><span class="token operator">:</span> <span class="token string">'5.9.0'</span><span class="token punctuation">,</span> <span class="token comment">// 用来编译的 webpack 版本</span>
  <span class="token string">'hash'</span><span class="token operator">:</span> <span class="token string">'11593e3b3ac85436984a'</span><span class="token punctuation">,</span> <span class="token comment">// 编译的特定哈希值</span>
  <span class="token string">'time'</span><span class="token operator">:</span> <span class="token number">2469</span><span class="token punctuation">,</span> <span class="token comment">// 编译时间（毫秒）</span>
  <span class="token string">'publicPath'</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
  <span class="token string">'outputPath'</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token comment">// webpack 的输出目录路径</span>
  <span class="token string">'assetsByChunkName'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 输出资源对应的 Chunk 名称</span>
    <span class="token string">'main'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'web.js?h=11593e3b3ac85436984a'</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'named-chunk'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'named-chunk.web.js'</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'other-chunk'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'other-chunk.js'</span><span class="token punctuation">,</span>
      <span class="token string">'other-chunk.css'</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">'assets'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// [asset objects](#asset-objects) 列表</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">'chunks'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// [chunk objects](#chunk-objects) 列表</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">'modules'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// [module objects](#module-objects) 列表</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">'entryPoints'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// [entry objects](#entry-objects) 列表</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">'errors'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// [error objects](#errors-and-warnings) 列表</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">'errorsCount'</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 错误个数</span>
  <span class="token string">'warnings'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// [warning objects](#errors-and-warnings) 列表</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">'warningsCount'</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 告警个数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="asset-对象" tabindex="-1"><a class="header-anchor" href="#asset-对象" aria-hidden="true">#</a> Asset 对象</h3>
<p>每个 <code>assets</code> 对象表示编译过程中生成的 <code>output</code> 文件。它们都遵循类似的结构：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"chunkNames"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 该资源文件包含的 chunks</span>
  <span class="token property">"chunks"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 该资源文件包含的 chunk ID</span>
  <span class="token property">"comparedForEmit"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 指定是否对该资源文件和输出文件系统上相同文件进行比较</span>
  <span class="token property">"emitted"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 指定资源文件是否要生成到 `output` 目录中</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"10.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// `output` 文件名</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">1058</span><span class="token punctuation">,</span> <span class="token comment">// 文件大小（字节为单位）</span>
  <span class="token property">"info"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"immutable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 指定 asset 是否可以长期缓存的标志位（包括哈希值）</span>
    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">1058</span><span class="token punctuation">,</span> <span class="token comment">// 单位大小为字节，只有在资源文件生成之后才可以使用</span>
    <span class="token property">"development"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 指定 asset 是否只用于 development 环境，而不面向用户的标志位</span>
    <span class="token property">"hotModuleReplacement"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 指定 asset 是否加载用于更新现有应用程序 (HMR) 的数据标志位</span>
    <span class="token property">"sourceFilename"</span><span class="token operator">:</span> <span class="token string">"originalfile.js"</span><span class="token punctuation">,</span> <span class="token comment">// 从源文件创建资产时（可能转换）sourceFilename</span>
    <span class="token property">"javascriptModule"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 当 asset 是 javascript 和 ESM 时为 true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>T&gt; 从 webpack v4.40.0 版本开始，Asset 的 <code>info</code> 属性可用</p>
<h3 id="chunk-对象" tabindex="-1"><a class="header-anchor" href="#chunk-对象" aria-hidden="true">#</a> Chunk 对象</h3>
<p>每个 <code>chunks</code> 对象代表一组名为 <RouterLink to="/glossary/#c">chunk</RouterLink> 的模块。每个对象都遵循如下结构：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"entry"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 指定 webpack 运行时是否包含 chunk</span>
  <span class="token string">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 包含 chunk 的文件名字符数组</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"filteredModules"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 查看关于 [top-level structure](#structure) 描述</span>
  <span class="token string">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// chunk 对应的 ID</span>
  <span class="token string">"initial"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 指定 chunk 是在页面初始化时加载还是[按需加载](/guides/lazy-loading)</span>
  <span class="token string">"modules"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// [module objects](#module-objects) 列表</span>
    <span class="token string">"web.js?h=11593e3b3ac85436984a"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"names"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 包含当前 chunk 的 chunk 名称列表</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"origins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 查看后面的描述...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"parents"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 父级 chunk ID</span>
  <span class="token string">"rendered"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 指定 chunk 是否经过代码生成</span>
  <span class="token string">"size"</span><span class="token operator">:</span> <span class="token number">188057</span> <span class="token comment">// chunk 大小，单位字节</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><code>chunks</code> 对象还包含一个 <code>origins</code> 列表，它描述来给定的 chunk 每个 <code>origins</code> 对象都遵循以下模式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"loc"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 生成当前 chunk 的代码行</span>
  <span class="token string">"module"</span><span class="token operator">:</span> <span class="token string">"(webpack)\\test\\browsertest\\lib\\index.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// module的路径</span>
  <span class="token string">"moduleId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// module 对应的 ID</span>
  <span class="token string">"moduleIdentifier"</span><span class="token operator">:</span> <span class="token string">"(webpack)\\test\\browsertest\\lib\\index.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// module 对应的路径</span>
  <span class="token string">"moduleName"</span><span class="token operator">:</span> <span class="token string">"./lib/index.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// module对应的相对路径</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"main"</span><span class="token punctuation">,</span> <span class="token comment">// chunk 名称</span>
  <span class="token string">"reasons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 在 [module objects](#module-objects) 中找到相同的 `reason` 列表</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="module-对象" tabindex="-1"><a class="header-anchor" href="#module-对象" aria-hidden="true">#</a> Module 对象</h3>
<p>假如不描述编译后的应用程序的实际模块，这些统计的数据有什么作用？其依赖关系图中的每个模块用如下结构表示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"assets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// [asset objects](#asset-objects) 列表</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"built"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 指定该模块经过 [Loaders](/concepts/loaders)、解析和代码生成</span>
  <span class="token string">"cacheable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否可以缓存</span>
  <span class="token string">"chunks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 当前模块包含的 chunk ID</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"errors"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 解析或处理模块时的错误个数</span>
  <span class="token string">"failed"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 当前模块编译是否失败</span>
  <span class="token string">"id"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 模块 ID (类似于 [`module.id`](/api/module-variables/#moduleid-commonjs))</span>
  <span class="token string">"identifier"</span><span class="token operator">:</span> <span class="token string">"(webpack)\\test\\browsertest\\lib\\index.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// 内部使用的唯一 ID</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"./lib/index.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// 实际文件的路径</span>
  <span class="token string">"optional"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 对当前模块的所有请求都带上 `try... catch` blocks (与 ESM 无关)</span>
  <span class="token string">"prefetched"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 指定模块是否被 [prefetched](/plugins/prefetch-plugin)</span>
  <span class="token string">"profile"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对应于 [`--profile` 标志位](/api/cli/#profiling) 的模块特定编译统计（以毫秒为单位）</span>
    <span class="token string">"building"</span><span class="token operator">:</span> <span class="token number">73</span><span class="token punctuation">,</span> <span class="token comment">// 加载和解析</span>
    <span class="token string">"dependencies"</span><span class="token operator">:</span> <span class="token number">242</span><span class="token punctuation">,</span> <span class="token comment">// 构建依赖</span>
    <span class="token string">"factory"</span><span class="token operator">:</span> <span class="token number">11</span> <span class="token comment">// 解析依赖关系</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"reasons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 查看下面的描述...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"size"</span><span class="token operator">:</span> <span class="token number">3593</span><span class="token punctuation">,</span> <span class="token comment">// 预估模块大小，单位为字节</span>
  <span class="token string">"source"</span><span class="token operator">:</span> <span class="token string">"// 不要改变它...\r\nif(typeof..."</span><span class="token punctuation">,</span> <span class="token comment">// 字符串的原始源头</span>
  <span class="token string">"warnings"</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 解析或处理模块时的警告数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>每个模块还包含了一个 <code>reasons</code> 列表，它描述了为什么该模块会被包含在依赖关系图中。每个 <code>reason</code> 都类似于上面的 <a href="#chunk-objects">chunk objects</a> 章节的 <code>origins</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">"loc"</span><span class="token operator">:</span> <span class="token string">"33:24-93"</span><span class="token punctuation">,</span> <span class="token comment">// 当前模块包含的代码行数</span>
  <span class="token string">"module"</span><span class="token operator">:</span> <span class="token string">"./lib/index.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// 基于 [context](/configuration/entry-context/#context) 的模块相对路径</span>
  <span class="token string">"moduleId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 模块对应的 ID</span>
  <span class="token string">"moduleIdentifier"</span><span class="token operator">:</span> <span class="token string">"(webpack)\\test\\browsertest\\lib\\index.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// 模块对应路径</span>
  <span class="token string">"moduleName"</span><span class="token operator">:</span> <span class="token string">"./lib/index.web.js"</span><span class="token punctuation">,</span> <span class="token comment">// 可读性更高的模块名称</span>
  <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"require.context"</span><span class="token punctuation">,</span> <span class="token comment">// 使用的 [请求类型](/api/module-methods)</span>
  <span class="token string">"userRequest"</span><span class="token operator">:</span> <span class="token string">"../../cases"</span> <span class="token comment">// 用于 `import` 或者 `require` 请求的原始字符串</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="entry-对象" tabindex="-1"><a class="header-anchor" href="#entry-对象" aria-hidden="true">#</a> Entry 对象</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"main"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"main"</span><span class="token punctuation">,</span>
  <span class="token property">"chunks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">179</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"assets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"main.js"</span><span class="token punctuation">,</span>
      <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">22</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"filteredAssets"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"assetsSize"</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
  <span class="token property">"auxiliaryAssets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"filteredAuxiliaryAssets"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"auxiliaryAssetsSize"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"childAssets"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"isOverSizeLimit"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="错误和告警信息" tabindex="-1"><a class="header-anchor" href="#错误和告警信息" aria-hidden="true">#</a> 错误和告警信息</h3>
<p>包含 <code>errors</code> and <code>warnings</code> 属性的一个对象列表。每个对象包含一条消息，一个堆栈跟踪信息和其他各种属性：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"moduleIdentifier"</span><span class="token operator">:</span> <span class="token string">"C:\\Repos\\webpack\\test\\cases\\context\\issue-5750\\index.js"</span><span class="token punctuation">,</span>
  <span class="token property">"moduleName"</span><span class="token operator">:</span> <span class="token string">"(webpack)/test/cases/context/issue-5750/index.js"</span><span class="token punctuation">,</span>
  <span class="token property">"loc"</span><span class="token operator">:</span> <span class="token string">"3:8-47"</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Critical dependency: Contexts can't use RegExps with the 'g' or 'y' flags."</span><span class="token punctuation">,</span>
  <span class="token property">"moduleId"</span><span class="token operator">:</span> <span class="token number">29595</span><span class="token punctuation">,</span>
  <span class="token property">"moduleTrace"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"originIdentifier"</span><span class="token operator">:</span> <span class="token string">"C:\\Repos\\webpack\\test\\cases|sync|/^\\.\\/[^/]+\\/[^/]+\\/index\\.js$/"</span><span class="token punctuation">,</span>
      <span class="token property">"originName"</span><span class="token operator">:</span> <span class="token string">"(webpack)/test/cases sync ^\\.\\/[^/]+\\/[^/]+\\/index\\.js$"</span><span class="token punctuation">,</span>
      <span class="token property">"moduleIdentifier"</span><span class="token operator">:</span> <span class="token string">"C:\\Repos\\webpack\\test\\cases\\context\\issue-5750\\index.js"</span><span class="token punctuation">,</span>
      <span class="token property">"moduleName"</span><span class="token operator">:</span> <span class="token string">"(webpack)/test/cases/context/issue-5750/index.js"</span><span class="token punctuation">,</span>
      <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"loc"</span><span class="token operator">:</span> <span class="token string">"./context/issue-5750/index.js"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"originId"</span><span class="token operator">:</span> <span class="token number">32582</span><span class="token punctuation">,</span>
      <span class="token property">"moduleId"</span><span class="token operator">:</span> <span class="token number">29595</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"originIdentifier"</span><span class="token operator">:</span> <span class="token string">"C:\\Repos\\webpack\\testCases.js"</span><span class="token punctuation">,</span>
      <span class="token property">"originName"</span><span class="token operator">:</span> <span class="token string">"(webpack)/testCases.js"</span><span class="token punctuation">,</span>
      <span class="token property">"moduleIdentifier"</span><span class="token operator">:</span> <span class="token string">"C:\\Repos\\webpack\\test\\cases|sync|/^\\.\\/[^/]+\\/[^/]+\\/index\\.js$/"</span><span class="token punctuation">,</span>
      <span class="token property">"moduleName"</span><span class="token operator">:</span> <span class="token string">"(webpack)/test/cases sync ^\\.\\/[^/]+\\/[^/]+\\/index\\.js$"</span><span class="token punctuation">,</span>
      <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"loc"</span><span class="token operator">:</span> <span class="token string">"1:0-70"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"originId"</span><span class="token operator">:</span> <span class="token number">8198</span><span class="token punctuation">,</span>
      <span class="token property">"moduleId"</span><span class="token operator">:</span> <span class="token number">32582</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"details"</span><span class="token operator">:</span> <span class="token string">"at RequireContextDependency.getWarnings (C:\\Repos\\webpack\\lib\\dependencies\\ContextDependency.js:79:5)\n    at Compilation.reportDependencyErrorsAndWarnings (C:\\Repos\\webpack\\lib\\Compilation.js:1727:24)\n    at C:\\Repos\\webpack\\lib\\Compilation.js:1467:10\n    at _next2 (&lt;anonymous>:16:1)\n    at eval (&lt;anonymous>:42:1)\n    at C:\\Repos\\webpack\\node_modules\\neo-async\\async.js:2830:7\n    at Object.each (C:\\Repos\\webpack\\node_modules\\neo-async\\async.js:2850:39)\n    at C:\\Repos\\webpack\\lib\\FlagDependencyExportsPlugin.js:219:18\n    at C:\\Repos\\webpack\\node_modules\\neo-async\\async.js:2830:7\n    at Object.each (C:\\Repos\\webpack\\node_modules\\neo-async\\async.js:2850:39)\n    at C:\\Repos\\webpack\\lib\\FlagDependencyExportsPlugin.js:40:16\n    at Hook.eval [as callAsync] (&lt;anonymous>:38:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\Repos\\tapable\\lib\\Hook.js:18:14)\n    at Compilation.finish (C:\\Repos\\webpack\\lib\\Compilation.js:1462:28)\n    at C:\\Repos\\webpack\\lib\\Compiler.js:909:18\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)\n"</span><span class="token punctuation">,</span>
  <span class="token property">"stack"</span><span class="token operator">:</span> <span class="token string">"ModuleDependencyWarning: Critical dependency: Contexts can't use RegExps with the 'g' or 'y' flags.\n    at Compilation.reportDependencyErrorsAndWarnings (C:\\Repos\\webpack\\lib\\Compilation.js:1732:23)\n    at C:\\Repos\\webpack\\lib\\Compilation.js:1467:10\n    at _next2 (&lt;anonymous>:16:1)\n    at eval (&lt;anonymous>:42:1)\n    at C:\\Repos\\webpack\\node_modules\\neo-async\\async.js:2830:7\n    at Object.each (C:\\Repos\\webpack\\node_modules\\neo-async\\async.js:2850:39)\n    at C:\\Repos\\webpack\\lib\\FlagDependencyExportsPlugin.js:219:18\n    at C:\\Repos\\webpack\\node_modules\\neo-async\\async.js:2830:7\n    at Object.each (C:\\Repos\\webpack\\node_modules\\neo-async\\async.js:2850:39)\n    at C:\\Repos\\webpack\\lib\\FlagDependencyExportsPlugin.js:40:16\n    at Hook.eval [as callAsync] (&lt;anonymous>:38:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\Repos\\tapable\\lib\\Hook.js:18:14)\n    at Compilation.finish (C:\\Repos\\webpack\\lib\\Compilation.js:1462:28)\n    at C:\\Repos\\webpack\\lib\\Compiler.js:909:18\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)\n"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>W&gt; 注意，当 <code>errorStack: false</code> 传递给 <code>toJson</code> 方法时，堆栈跟踪信息会被删除。<code>errorStack</code> 选项默认设置为 <code>true</code>。</p>
</template>
