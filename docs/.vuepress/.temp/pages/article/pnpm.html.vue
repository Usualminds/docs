<template><h1 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> pnpm</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<h2 id="pnpm-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#pnpm-解决了什么问题" aria-hidden="true">#</a> pnpm 解决了什么问题</h2>
<h2 id="pnpm-使用方法" tabindex="-1"><a class="header-anchor" href="#pnpm-使用方法" aria-hidden="true">#</a> pnpm 使用方法</h2>
<h4 id="ci-持续集成" tabindex="-1"><a class="header-anchor" href="#ci-持续集成" aria-hidden="true">#</a> ci 持续集成</h4>
<p>在 GitHub Actions 上，您可以像这样使用 pnpm 安装和缓存您的依赖项 .github/workflows/NAME.yml）</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> pnpm Example Workflow
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">20.04</span>
    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2.0.1
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">version</span><span class="token punctuation">:</span> 6.20.3
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">'pnpm'</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
      <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="只允许-pnpm" tabindex="-1"><a class="header-anchor" href="#只允许-pnpm" aria-hidden="true">#</a> 只允许 pnpm</h4>
<p>当您在项目中使用 pnpm 时，您不希望被其他人意外运行 npm install 或 yarn。 为了防止开发人员使用其他的包管理器，您可以将下面的这个 preinstall 脚本添加到您的 package.json：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"preinstall"</span><span class="token operator">:</span> <span class="token string">"npx only-allow pnpm"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="pnpm-的原理" tabindex="-1"><a class="header-anchor" href="#pnpm-的原理" aria-hidden="true">#</a> pnpm 的原理</h2>
<h2 id="pnpm、npm-yarn-工具链效果对比" tabindex="-1"><a class="header-anchor" href="#pnpm、npm-yarn-工具链效果对比" aria-hidden="true">#</a> pnpm、npm yarn 工具链效果对比</h2>
<h3 id="时间" tabindex="-1"><a class="header-anchor" href="#时间" aria-hidden="true">#</a> 时间</h3>
<p>https://pnpm.io/zh/benchmarks</p>
<h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3>
<p>https://pnpm.io/zh/feature-comparison</p>
<h2 id="pnpm-的局限" tabindex="-1"><a class="header-anchor" href="#pnpm-的局限" aria-hidden="true">#</a> pnpm 的局限</h2>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<p>https://pnpm.io/zh/community
https://pnpm.io/zh/blog</p>
</template>
