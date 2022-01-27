<template><h1 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> pnpm</h1>
<p><img src="@source/article/assets/pnpm/pnpm.svg" alt=""></p>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p>如果你从从事过前端方面的工作和开发，相信你对 <code>npm</code> 和 <code>yarn</code> 这样的工具并不陌生。作为包管理工具，<code>npm</code> 已经有了长足的<a href="https://github.com/npm/cli/blob/latest/changelogs/CHANGELOG-1.md" target="_blank" rel="noopener noreferrer">历史<ExternalLinkIcon/></a>。一个项目初始化过程都需要通过 <code>npm install</code> 命令安装相关相关的依赖到 <code>node_modules</code> 目录下,对于较大型的前端项目，<code>node_modules</code> 的大小很多时候是超乎我们想象的。而 <code>npm</code> 在版本更新迭代的过程中，也一直在优化这个问题，从 <code>npm3</code> 开始，通过平铺 <code>node_modules</code> 依赖，一定程度上缓解了重复包的复用问题。</p>
<h2 id="npm-发展" tabindex="-1"><a class="header-anchor" href="#npm-发展" aria-hidden="true">#</a> npm 发展</h2>
<h3 id="npm2" tabindex="-1"><a class="header-anchor" href="#npm2" aria-hidden="true">#</a> npm2</h3>
<p>在 <code>npm2</code> 发展阶段，安装依赖是相对比较直接的，它会直接按照配置文件 <code>package.json</code> 中的依赖项去下载相关依赖包，而依赖包的组织形式则是按照树形结构去排列的。由于不同的包的依赖关系在版本上差异较大，依赖关系相对复杂，所以 <code>npm2</code> 直接按照配置去下载并组织依赖的方式，是简单明晰的做法，保证了各个依赖的独立性，在依赖变更时，相互并不影响，其关系可以通过下图来描述：</p>
<p><img src="@source/article/assets/pnpm/node_modules_npm2.png" alt=""></p>
<p>从上图中，我们可以看到</p>
<ol>
<li><code>A</code>、<code>B</code>、<code>C</code> 包相互独立</li>
<li><code>A</code>、<code>B</code>、<code>C</code> 包可能会依赖相同的包，比如 <strong><code>D@1.0</code></strong></li>
<li><code>A</code>、<code>B</code>、<code>C</code> 包可能会存在较深的依赖层级，比如 <strong><code>C package</code></strong></li>
</ol>
<p>其中 <code>2</code> 和 <code>3</code> 的负面影响会随着项目复杂度上升，可能会导致的几个问题</p>
<ul>
<li>较大的冗余。多次下载的相同的依赖包 <strong><code>D@1.0</code></strong>，无法实现共享</li>
<li>较深层级的依赖树。
<ul>
<li><code>node_modules</code> 依赖包路径过长，超出操作系统最长路径限制（ <code>windows</code>：<code>260</code> 字符，<code>macos</code>：<code>1024</code> 字符），参见：
<ul>
<li><a href="https://github.com/npm/npm/issues/3697" target="_blank" rel="noopener noreferrer">Too many dependencies break the Windows file system<ExternalLinkIcon/></a></li>
<li><a href="https://docs.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=cmd" target="_blank" rel="noopener noreferrer">Maximum Path Length Limitation<ExternalLinkIcon/></a></li>
<li><a href="https://stackoverflow.com/questions/1880321/why-does-the-260-character-path-length-limit-exist-in-windows" target="_blank" rel="noopener noreferrer">Why does the 260 character path length limit exist in Windows?<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>太深的层级导致文件查找复杂度上升，严重影响性能，增加耗时</li>
</ul>
</li>
</ul>
<blockquote>
<p>Note: 通过 <code>npm ls --depth=n</code> 查看项目相关依赖层级</p>
</blockquote>
<h3 id="npm3" tabindex="-1"><a class="header-anchor" href="#npm3" aria-hidden="true">#</a> npm3</h3>
<p>为解决 <code>npm2</code> 中存在的冗余和依赖树问题，<code>npm3</code> 对依赖项进行了<a href="https://github.com/npm/cli/blob/latest/changelogs/CHANGELOG-3.md" target="_blank" rel="noopener noreferrer">依赖扁平化讨论和处理<ExternalLinkIcon/></a></p>
<p><img src="@source/article/assets/pnpm/npm3-flat.jpg" alt=""></p>
<p>扁平化具体来讲就是依赖不在按照树型进行安装，而是安装将依赖安装在同级目录下，<code>npm install</code> 安装依赖时，会按照配置文件 <code>package.json</code> 里的依赖顺序进行解析，遇到新包就把它放在第一层级的目录，后面如果遇到第一级目录已有的包，会先进行依赖版本判断，如果版本一样则忽略，否则会按照 <code>npm2</code> 的方式依次挂在依赖包目录下,这样处理的原理遵循了<a href="https://nodejs.org/api/modules.html#all-together" target="_blank" rel="noopener noreferrer"><code>Nodejs</code>的依赖解析规则<ExternalLinkIcon/></a>：<strong>当前目录下没有找到<code>node_modules</code>，它将递归解析父目录下的<code>node_modules</code></strong>。</p>
<p>使用 <code>npm3</code> 安装依赖后如下图：</p>
<p><img src="@source/article/assets/pnpm/node_modules_npm3.png" alt=""></p>
<p>这种扁平化处理方式一定程度上缓解了冗余和依赖树问题，同时 <code>npm3</code> 还支持动态安装更新包，如果依赖有更新，可以通过 <code>npm dedupe</code> 命令对依赖树进行优化。</p>
<p>但是 <code>npm3</code> 也存在部分问题，比如：</p>
<ul>
<li><a href="https://rushjs.io/pages/advanced/phantom_deps/" target="_blank" rel="noopener noreferrer">phantom_deps(幻影依赖)<ExternalLinkIcon/></a>。<strong><code>npm3</code>不会以确定的方式安装依赖项</strong>。举例来说：我们在 <code>NodeJS</code> 中 <code>require()</code> 的函数，不需要考虑配置文件 <code>package.json</code>。这可能会导致依赖版本不兼容，并且开发者不容易发现；另外，由于<a href="https://nodejs.org/api/modules.html#all-together" target="_blank" rel="noopener noreferrer"><code>Nodejs</code>的依赖解析规则<ExternalLinkIcon/></a>，这还会导致幻影 <code>node_modules</code> ，即依赖向上查找，可能会越过代码目录自身的 <code>node_modules</code> 。如下：</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>- my-monorepo/
  - package.json
  - node_modules/
    - semver/
    - ...
  - my-monorepo/my-library/
    - package.json
    - lib/
      - index.js
    - node_modules/
      - brace-expansion
      - minimatch
      - ...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>my-monorepo/my-library/lib/index.js</code> 可能使用的是<code>my-monorepo/node_modules</code> 中的依赖，而非自身目录 <code>my-monorepo/my-library/node_modules</code></p>
<ul>
<li><a href="https://rushjs.io/pages/advanced/npm_doppelgangers/" target="_blank" rel="noopener noreferrer">npm doppelgangers(npm 分身)<ExternalLinkIcon/></a>。简单来讲，npm 分身是指同一个依赖的不同版本会出现在 <code>node_modules</code> 中，比如项目中同时依赖了 <code>A@1.0.0</code> 和 <code>A@2.0.0</code>，无论是扁平化处理<code>A@1.0.0</code> 或 <code>A@2.0.0</code>，另一个依赖还是会被重复，如果这样的分身较多，就会导致一些潜在问题，比如扩展包大小变大、相关类型校验交叉等</li>
</ul>
<h3 id="npm5" tabindex="-1"><a class="header-anchor" href="#npm5" aria-hidden="true">#</a> npm5</h3>
<p>npm5 通过添加 <code>lock</code> 文件来记录依赖树信息，进行依赖锁定,从而唯一确定 <code>node_modules</code> 的结构,这样处理可以保证团队成员使用同一份<code>node_modules</code>依赖结构。但是，我们前文提到的平铺式的算法的复杂性、幻影依赖和分身问题仍然没有解决。</p>
<h2 id="pnpm-简介" tabindex="-1"><a class="header-anchor" href="#pnpm-简介" aria-hidden="true">#</a> pnpm 简介</h2>
<p>前文我们大致梳理了 <code>npm</code> 的发展和遗留问题。而 <code>pnpm</code> 比较巧妙地解决了它们，并且极大地提升了依赖包管理的效率。</p>
<p><code>pnpm</code> 指 <code>performant npm</code>（高性能的 npm），如 <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm 官网<ExternalLinkIcon/></a>所言，它是<strong>快速的，节省磁盘空间的包管理工具</strong>，同时，它也较好地支持了 <code>workspace</code> 和 <code>monorepos</code>。</p>
<p><img src="@source/article/assets/pnpm/pnpm-front.jpeg" alt=""></p>
<p>举例来说，如果项目中，你使用了某个依赖项的多个版本，那么 <code>pnpm</code> 只会将有差异的文件添加到仓库。如果某个依赖包有 100 个文件，而它的新版本只改变了其中 1 个文件。那么 <code>pnpm update</code> 时只会添加 1 个新文件，而不会复制整个新版本的所有包。此外。所有文件都会存储在硬盘上的某一位置。 当软件包被被安装时，其中的文件会硬链接到这一位置，而不会占用额外的磁盘空间。同时，项目中允许共享同一版本的依赖。接下来我们先了解下 <code>pnpm</code> 的使用效果</p>
<h2 id="pnpm-效果" tabindex="-1"><a class="header-anchor" href="#pnpm-效果" aria-hidden="true">#</a> pnpm 效果</h2>
<blockquote>
<p>与 npm、yarn、yarn pnp 工具链效果对比，来自 <a href="https://pnpm.io/zh/benchmarks" target="_blank" rel="noopener noreferrer">pnpm benchmarks<ExternalLinkIcon/></a></p>
</blockquote>
<table><thead>
<tr><th>action</th><th>cache</th><th>lockfile</th><th>node_modules</th><th>npm</th><th>pnpm</th><th>Yarn</th><th>Yarn PnP</th></tr></thead><tbody><tr><td>install</td><td></td><td></td><td></td><td>1m 9.5s</td><td>15.3s</td><td>16.6s</td><td>23.6s</td></tr><tr><td>install</td><td>✔</td><td>✔</td><td>✔</td><td>2.4s</td><td>1.3s</td><td>2.3s</td><td>n/a</td></tr><tr><td>install</td><td>✔</td><td>✔</td><td></td><td>14.8s</td><td>4s</td><td>6.8s</td><td>1.5s</td></tr><tr><td>install</td><td>✔</td><td></td><td></td><td>21.8s</td><td>8.9s</td><td>11.2s</td><td>6.2s</td></tr><tr><td>install</td><td></td><td>✔</td><td></td><td>35.4s</td><td>13.4s</td><td>12s</td><td>17.9s</td></tr><tr><td>install</td><td>✔</td><td></td><td>✔</td><td>3.1s</td><td>1.9s</td><td>7s</td><td>n/a</td></tr><tr><td>install</td><td></td><td>✔</td><td>✔</td><td>2.4s</td><td>1.3s</td><td>7.6s</td><td>n/a</td></tr><tr><td>install</td><td></td><td></td><td>✔</td><td>3s</td><td>6.1s</td><td>11.8s</td><td>n/a</td></tr><tr><td>update</td><td>n/a</td><td>n/a</td><td>n/a</td><td>2.3s</td><td>11.8s</td><td>15.5s</td><td>28.3s</td></tr>
</tbody></table>
<p>从上表数据我们可以看出，<code>pnpm</code> 的各项性能均比其它包管理工具有优势，那你可能会想，为什么 <code>pnpm</code> 有如此优越的表现🤔，接下来我们聊聊 <code>pnpm</code> 的主要原理</p>
<h2 id="pnpm-的原理" tabindex="-1"><a class="header-anchor" href="#pnpm-的原理" aria-hidden="true">#</a> pnpm 的原理</h2>
<p><code>pnpm</code> 主要有两个不同与其包管理工具的特性：</p>
<h3 id="基于硬链接的-node-modules" tabindex="-1"><a class="header-anchor" href="#基于硬链接的-node-modules" aria-hidden="true">#</a> 基于硬链接的 <code>node_modules</code></h3>
<p><code>pnpm</code> 创建从全局存储到项目中 <code>node_modules</code> 文件夹的<a href="https://zh.wikipedia.org/wiki/%E7%A1%AC%E9%93%BE%E6%8E%A5" target="_blank" rel="noopener noreferrer">硬链接<ExternalLinkIcon/></a>，而硬链接指向磁盘上原始文件所在的同一位置，具体来说就是 <code>node_modules</code> 中每个包的每个文件都是来自<a href="https://en.wikipedia.org/wiki/Content-addressable_storage" target="_blank" rel="noopener noreferrer">内容可寻址存储<ExternalLinkIcon/></a>的硬链接，简言之，就是每个包全局只有一份。举例来看：</p>
<div class="language-file ext-file line-numbers-mode"><pre v-pre class="language-file"><code>node_modules
└── .pnpm
    ├── bar@1.0.0
    │   └── node_modules
    │       └── bar -&gt; &lt;store&gt;/bar
    │           ├── index.js
    │           └── package.json
    └── foo@1.0.0
        └── node_modules
            └── foo -&gt; &lt;store&gt;/foo
                ├── index.js
                └── package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>node_modules</code> 下面的唯一文件夹叫做 <code>.pnpm</code>, <code>.pnpm</code> 下面是一个 <code>&lt;PACKAGE_NAME＠VERSION&gt;</code> 文件夹，而在其下面 <code>&lt;PACKAGE_NAME&gt;</code> 的文件夹是一个基于内容可寻址存储的硬链接。</p>
<h3 id="基于依赖解析的软链接-symlinks" tabindex="-1"><a class="header-anchor" href="#基于依赖解析的软链接-symlinks" aria-hidden="true">#</a> 基于依赖解析的软链接(symlinks)</h3>
<p>观察以下依赖结构</p>
<div class="language-file ext-file line-numbers-mode"><pre v-pre class="language-file"><code>node_modules
├── foo -&gt; ./.pnpm/foo@1.0.0/node_modules/foo
└── .pnpm
    ├── bar@1.0.0
    │   └── node_modules
    │       └── bar -&gt; &lt;store&gt;/bar
    └── foo@1.0.0
        └── node_modules
            ├── foo -&gt; &lt;store&gt;/foo
            └── bar -&gt; ../../bar@1.0.0/node_modules/bar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>我们可以看到在 <code>foo@1.0.0/node_modules/bar</code> 内引用了 <code>bar</code> 的软链接 <code>../../bar@1.0.0/node_modules/bar</code>，而在项目里引用 <code>foo</code> 的软链接 <code>./.pnpm/foo@1.0.0/node_modules/foo</code>，如果项目内新增一个依赖包 <code>qar@2.0.0</code>，则其引用结构如下：</p>
<div class="language-file ext-file line-numbers-mode"><pre v-pre class="language-file"><code>node_modules
├── foo -&gt; ./.pnpm/foo@1.0.0/node_modules/foo
└── .pnpm
    ├── bar@1.0.0
    │   └── node_modules
    │       ├── bar -&gt; &lt;store&gt;/bar
    │       └── qar -&gt; ../../qar@2.0.0/node_modules/qar
    ├── foo@1.0.0
    │   └── node_modules
    │       ├── foo -&gt; &lt;store&gt;/foo
    │       ├── bar -&gt; ../../bar@1.0.0/node_modules/bar
    │       └── qar -&gt; ../../qar@2.0.0/node_modules/qar
    └── qar@2.0.0
        └── node_modules
            └── qar -&gt; &lt;store&gt;/qar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>根据前文我们介绍到的<a href="https://nodejs.org/api/modules.html#all-together" target="_blank" rel="noopener noreferrer"><code>Nodejs</code>的依赖解析规则<ExternalLinkIcon/></a>，<code>foo@1.0.0/node_modules/foo/index.js</code> 中所需的依赖包 <code>bar</code>，实际上使用的是<code>bar@1.0.0/node_modules/bar</code>中的内容，因此，只有<strong>真正在依赖项中的包才能被访问到</strong>。而对于不同的 <code>peer dependencies</code> 的依赖解析原理，可以参考这里 <a href="https://pnpm.io/zh/how-peers-are-resolved" target="_blank" rel="noopener noreferrer">How peers are resolved<ExternalLinkIcon/></a></p>
<p>通过<strong>基于硬链接的<code>node_modules</code><strong>和</strong>基于依赖解析的软链接</strong>原理，我们了解到，当我们在相同操作系统下第二次安装同一个依赖包时，我们需要做的仅仅是创建一个该依赖包对应的硬链接，对于同一个依赖包的不同版本，也只有不同的部分会被重新保存起来，而具体有没有 <code>pnpm</code> 是在哪里判断的呢？全局的 <code>pnpm</code> 索引文件在 <code>～/.pnpm-store/v3/files</code>。基于此，使用硬链接让依赖包的安装速度非常快，同时也去除了冗余，节省较大磁盘空间。</p>
<blockquote>
<p><a href="https://zh.wikipedia.org/wiki/%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5" target="_blank" rel="noopener noreferrer">symlinks 符号连接<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="pnpm-使用方法" tabindex="-1"><a class="header-anchor" href="#pnpm-使用方法" aria-hidden="true">#</a> pnpm 使用方法</h2>
<p>https://divriots.com/blog/switching-to-pnpm</p>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="时间" tabindex="-1"><a class="header-anchor" href="#时间" aria-hidden="true">#</a> 时间</h3>
<p>https://pnpm.io/zh/benchmarks</p>
<h4 id="官方" tabindex="-1"><a class="header-anchor" href="#官方" aria-hidden="true">#</a> 官方</h4>
<h4 id="ci-提速" tabindex="-1"><a class="header-anchor" href="#ci-提速" aria-hidden="true">#</a> ci 提速</h4>
<p><a href="https://divriots.com/blog/switching-to-pnpm" target="_blank" rel="noopener noreferrer">我们如何迁移到 pnpm 的故事<ExternalLinkIcon/></a></p>
<h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3>
<p>https://pnpm.io/zh/feature-comparison</p>
<h2 id="pnpm-的局限" tabindex="-1"><a class="header-anchor" href="#pnpm-的局限" aria-hidden="true">#</a> pnpm 的局限</h2>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<ul>
<li><a href="https://int64ago.org/2016/10/15/npm2-npm3-yarn-%E7%9A%84%E6%95%85%E4%BA%8B/" target="_blank" rel="noopener noreferrer">npm2 npm3 yarn 的故事<ExternalLinkIcon/></a>
https://pnpm.io/zh/community
https://pnpm.io/zh/blog</li>
</ul>
</template>
