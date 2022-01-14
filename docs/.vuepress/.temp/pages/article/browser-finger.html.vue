<template><h1 id="浏览器指纹及其应用" tabindex="-1"><a class="header-anchor" href="#浏览器指纹及其应用" aria-hidden="true">#</a> 浏览器指纹及其应用</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p>伴随互联网的快速发展，Web 服务已呈现出极速增长的趋势， 人们在使用 Web 服务的同时，也面临着网络安全风险。根据中国信息通信研究院发布的<a href="http://www.caict.ac.cn/kxyj/qwfb/bps/202009/P020200916482039993423.pdf" target="_blank" rel="noopener noreferrer">《中国网络安全产业白皮书》<ExternalLinkIcon/></a>报告：我国网络安全产业呈现高速增长态势，2020 年产业规模预计为 1702 亿元。</p>
<p><img src="https://files.mdnice.com/user/8106/0ed3dd69-93b3-4fe3-a49e-64061bd522c5.jpg" alt=""></p>
<p>其中，Web 安全也占有一定比重，Web 站点俨然已经成为网络攻防的重要战场。</p>
<p><img src="https://files.mdnice.com/user/8106/46ef3043-cba3-499b-a1fb-1143930bf3d7.jpg" alt=""></p>
<p>而浏览器指纹在 Web 安全<strong>主动防御</strong>领域扮演着越来越重要的角色。本文主要从浏览器指纹概述、指纹识别原理、应用场景三个方面来介绍浏览器指纹。</p>
<h2 id="浏览器指纹概述" tabindex="-1"><a class="header-anchor" href="#浏览器指纹概述" aria-hidden="true">#</a> 浏览器指纹概述</h2>
<p>浏览器指纹是由<a href="https://www.eff.org/" target="_blank" rel="noopener noreferrer">电子前哨基金会（EFF）<ExternalLinkIcon/></a>首席科学家 <a href="https://www.xprize.org/about/people/peter-eckersley" target="_blank" rel="noopener noreferrer">Peter Eckersley<ExternalLinkIcon/></a> 在 2012 年提出，它利用浏览器自由传输的一些属性来生成和人类指纹一样具有标识作用的字符串。那么常见的浏览器指纹有哪些呢？可以参考如下表格数据，其中：</p>
<ul>
<li>指纹因子：指浏览器对外的公开属性，如 <code>userAgent</code> 可以通过 <code>navigator.userAgent</code> 获取; <code>colorDepth</code> 可以通过 <code>screen.colorDepth</code> 获取。</li>
</ul>
<p><img src="https://files.mdnice.com/user/8106/e33aabdd-dfe4-4d70-8a44-0242be356e72.jpg" alt=""></p>
<ul>
<li>稳定性：指刷新浏览器而指纹因子对应的取值不会发生改变。如 <code>colorDepth</code> 它表示屏幕的颜色深度，在谷歌浏览器中其取值为 24，刷新浏览器后其取值依然是 24。那么它就是<strong>稳定的</strong>指纹因子。</li>
<li>独立性：指同一设备上使用不同浏览器，指纹因子的取值不会发生改变。如 <code>devicePixelRatio</code> 它表示当前显示设备的物理像素分辨率与 CSS 像素分辨率之比，其取值在同一设备上的谷歌浏览器、火狐浏览器、Edge 浏览器、IE 浏览器、Opera 浏览器和 Safari 浏览器均为同一个值。因此，<code>devicePixelRatio</code> 是<strong>独立的</strong>指纹因子。</li>
</ul>
<table>
<thead>
<tr><th>指纹因子</th><th>稳定性</th><th>独立性</th></tr>
</thead>
<tr><td>userAgent</td><td>稳定</td><td>否</td></tr>
<tr><td>language</td><td>稳定</td><td>是（大多数时候）</td></tr>
<tr><td>colorDepth</td><td>稳定</td><td>是</td></tr>
<tr><td>deviceMemory</td><td>稳定</td><td>是</td></tr>
<tr><td>pixelRatio</td><td>稳定</td><td>是</td></tr>
<tr><td>hardwareConcurrency</td><td>稳定（但是 IE 浏览器不支持）</td><td>是（但是 IE 浏览器不支持）</td></tr>
<tr><td>screenResolution</td><td>稳定</td><td>是</td></tr>
<tr><td>availableScreenResolution</td><td>稳定</td><td>是</td></tr>
<tr><td>timezoneOffset</td><td>稳定</td><td>是</td></tr>
<tr><td>timezone</td><td>稳定</td><td>是</td></tr>
<tr><td>sessionStorage</td><td>稳定</td><td>否</td></tr>
<tr><td>localStorage</td><td>稳定</td><td>否</td></tr>
<tr><td>indexedDb</td><td>稳定</td><td>否</td></tr>
<tr><td>addBehavior</td><td>稳定</td><td>否</td></tr>
<tr><td>openDatabase</td><td>稳定</td><td>否</td></tr>
<tr><td>cpuClass</td><td>稳定</td><td>是</td></tr>
<tr><td>platform</td><td>稳定</td><td>是（大多数时候）</td></tr>
<tr><td>doNotTrack</td><td>稳定</td><td>否</td></tr>
<tr><td>plugins</td><td>待定</td><td>否</td></tr>
<tr><td>canvas</td><td>稳定（大多数时候）</td><td>否（已经过实际验证）</td></tr>
<tr><td>webgl</td><td>稳定（大多数时候）</td><td>否（已经过实际验证）</td></tr>
<tr><td>adBlock</td><td>稳定（取决于使用时间）</td><td>否</td></tr>
<tr><td>hasLiedLanguages</td><td>稳定</td><td>是</td></tr>
<tr><td>hasLiedResolution</td><td>稳定</td><td>是</td></tr>
<tr><td>hasLiedOs</td><td>稳定</td><td>是</td></tr>
<tr><td>hasLiedBrowser</td><td>稳定</td><td>是</td></tr>
<tr><td>touchSupport</td><td>稳定</td><td>是</td></tr>
<tr><td>fonts</td><td>稳定（大多数时候）</td><td>否（大多数时候）</td></tr>
<tr><td>audio</td><td>未知</td><td>否</td></tr>
</table>
<blockquote>
<p>表格指纹因子数据源：<a href="https://github.com/fingerprintjs/fingerprintjs/blob/v2/wiki/browser_independent_components.md" target="_blank" rel="noopener noreferrer">Browser independent components
<ExternalLinkIcon/></a> &amp; <a href="https://github.com/fingerprintjs/fingerprintjs/blob/v2/wiki/stable_components.md" target="_blank" rel="noopener noreferrer">Stable components<ExternalLinkIcon/></a></p>
</blockquote>
<p>以上的这些指纹因子我们都可以通过 JavaScript 代码获取其对应取值，通过稳定且独立的指纹因子组合成的浏览器指纹，使得设备识别变得有可能。即通过浏览器指纹我们获取该指纹所在的硬件设备，如个人浏览器或 PC。</p>
<p>你可能会好奇，这些指纹因子可以用来干什么呢？它是如何实现与设备关联的呢？接下来让我们了解一下浏览器指纹识别的背后的原理。</p>
<h2 id="识别原理" tabindex="-1"><a class="header-anchor" href="#识别原理" aria-hidden="true">#</a> 识别原理</h2>
<h3 id="信息熵" tabindex="-1"><a class="header-anchor" href="#信息熵" aria-hidden="true">#</a> 信息熵</h3>
<p>上面我们介绍了浏览器常见的指纹因子，但是如何度量浏览器中这些可以自由传输的指纹因子呢？了解过信息论的同学应该知道，我们可以通过信息熵来度量信息量，信息熵越高，则能传输越多的信息，熵越低，传输的信息越少。因此，可以将信息熵作为浏览器指纹标识程度的判据，举例来看，对于一个离散型随机变量 X，它的熵 H(X) 为：</p>
<p>$$H(X) = -\sum_x{p(x)}\log_2{p(x)}$$</p>
<h3 id="单个指纹因子熵值" tabindex="-1"><a class="header-anchor" href="#单个指纹因子熵值" aria-hidden="true">#</a> 单个指纹因子熵值</h3>
<p>上述公式中，使用了以 2 为底的对数函数，其单位为比特。简单来讲，一个指纹因子的信息量可以通过它来量化。举个例子🌰：我们以指纹因子 <code>doNotTrack</code> 为例，它的取值结果有两种：</p>
<ul>
<li>开启设置可标记为 1，关闭设置可标记为 0</li>
<li>假设用户访问网站的统计结果中，设置了 <code>doNotTrack</code> 的概览为 10%, 未设置的概览为 90%。那么 <code>doNotTrack</code> 这一指纹因子对应的熵为：
$$H(X) = -{\frac{1}{10}}<em>\log_2^{\frac{1}{10}}-{\frac{9}{10}}</em>\log_2^{\frac{9}{10}}=0.469bit$$</li>
</ul>
<blockquote>
<p>Note：点击<a href="http://home.ustc.edu.cn/~yang96/Elements_of_Information_Theory-second_edition.pdf" target="_blank" rel="noopener noreferrer">信息论基础<ExternalLinkIcon/></a>进行穿越复习。</p>
</blockquote>
<h3 id="多个指纹因子概率" tabindex="-1"><a class="header-anchor" href="#多个指纹因子概率" aria-hidden="true">#</a> 多个指纹因子概率</h3>
<p>知道了如何计算单个指纹因子的信息熵，我们就可以进一步对浏览器的多个指纹因子进行信息熵的合并计算。根据 <a href="https://www.xprize.org/about/people/peter-eckersley" target="_blank" rel="noopener noreferrer">Peter Eckersley<ExternalLinkIcon/></a> 发布的论文 <a href="https://coveryourtracks.eff.org/static/browser-uniqueness.pdf" target="_blank" rel="noopener noreferrer">How Unique Is Your Web Browser<ExternalLinkIcon/></a> 结果表明：通过 <code>userAgent</code>、<code>fonts</code>、<code>screenResolution</code> 和 <code>plugins</code> 等八个指纹因子来生成浏览器指纹:</p>
<p><img src="https://files.mdnice.com/user/8106/58bf4ac5-1973-4cba-9a52-89276d9dd5d9.jpg" alt=""></p>
<p>其统计结果显示这 8 个指纹因子至少包含 18.1 bit 的信息熵，通过自信息计算公式：</p>
<p>$$I(e) = -\log_2{p(x)}$$</p>
<p>我们可以推导出，其出现同一个指纹所需要的概率：</p>
<p>$$p(x) = 2^{-I(e)}$$</p>
<p>通过计算可以得出：随机挑选一个浏览器，在 286777 个浏览器中才会出现与其相同的一个浏览器指纹。从而说明<strong>浏览器指纹具有非常高的标识性</strong>，而且伴随着指纹因子维度的增加，出现同一个浏览器指纹的概率会越来越低，其识别准确率也会越来越高。</p>
<h3 id="指纹重复问题" tabindex="-1"><a class="header-anchor" href="#指纹重复问题" aria-hidden="true">#</a> 指纹重复问题</h3>
<p>目前，云服务器和虚拟主机已相对普及了，随时可以克隆出多个一模一样的虚拟系统和设备，类似 <a href="https://baike.baidu.com/item/ghost%E7%B3%BB%E7%BB%9F/8452726" target="_blank" rel="noopener noreferrer">ghost 系统<ExternalLinkIcon/></a>，它们在初始化状态下指纹大概率是相同的，这时我们怎么去识别这些”出厂设置“相同的设备呢？</p>
<p>上述我们提出的指纹识别是基于静态规则的识别，即只识别一次，但是真实的情况是一个设备的指纹是会随着时间发生变化的，它完全和使用者的习惯相关联，举例来说：如果今天你给自己的浏览器安装了一个插件，这时浏览器的指纹就会发生变化。因此，基于静态规则和动态追踪的关联机制可以实现对设备指纹指纹演变的长期追踪。有兴趣的童鞋可以参考 <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&amp;arnumber=8418634" target="_blank" rel="noopener noreferrer">FP-STALKER: Tracking Browser Fingerprint Evolutions<ExternalLinkIcon/></a> 的研究结果：，一个浏览器可以被追踪的平均时间已经超过 <strong>54.48</strong> 天。在追踪过程中，对指纹数据集进行再分类，可以有效的规避这类问题。</p>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<p>综上，我们可以通过计算出浏览器指纹因子对应的熵值，再结合自信息计算其出现概率，从而根据指纹取值和其概率推断出所在设备，了解了浏览器指纹生成原理。那么你也应该想了解它的应用场景有哪些吧，我们接着看。</p>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<p>浏览器指纹常见的应用场景包含：</p>
<h4 id="恶意爬虫的主动防御" tabindex="-1"><a class="header-anchor" href="#恶意爬虫的主动防御" aria-hidden="true">#</a> 恶意爬虫的主动防御</h4>
<p>目前针对 Web 站点，网络上有各种自动化爬虫，进行数据采集，常见如刷票、点评、爬取隐私数据等，现阶段主要防御措施有：被动检测与防御、 IP 地址检测与封锁、浏览器指纹&amp;主动防御等。</p>
<h4 id="扫描器识别与拦截" tabindex="-1"><a class="header-anchor" href="#扫描器识别与拦截" aria-hidden="true">#</a> 扫描器识别与拦截</h4>
<p>除了网络上等爬虫工具，还会有各种专业的 Web 漏洞扫描工具，如：<a href="https://www.acunetix.com/" target="_blank" rel="noopener noreferrer">AWVS<ExternalLinkIcon/></a>、<a href="https://www.hcltechsw.com/products/appscan" target="_blank" rel="noopener noreferrer">APPScan<ExternalLinkIcon/></a>、<a href="https://xray.cool/" target="_blank" rel="noopener noreferrer">Xray<ExternalLinkIcon/></a> 等，扫描器在主动识别 Web 漏洞的同时，也会给线上 Web 服务带来潜在安全问题。针对扫描器的拦截，可以根据其浏览器指纹的特异性，在其扫描指定站点时，进行识别与拦截。</p>
<h4 id="web-攻击的追踪与溯源" tabindex="-1"><a class="header-anchor" href="#web-攻击的追踪与溯源" aria-hidden="true">#</a> Web 攻击的追踪与溯源</h4>
<p>在我们的浏览器上运行着各种各样的脚本，利用浏览器脚本对 Web 攻击进行溯源有绝对优势，可以通过浏览器指纹特征信息提取和关联，对攻击者进行追踪与溯源。</p>
<h4 id="个性化广告推送" tabindex="-1"><a class="header-anchor" href="#个性化广告推送" aria-hidden="true">#</a> 个性化广告推送</h4>
<p>当你在网上浏览或者查找相关商品时，是不是经常会出现与之相关的广告页面？这时你很有可能正在被跟踪，因为你的屏幕分辨率、时区和表情符号集这些信息都暴露在了网上。甚至可以在你使用无痕浏览模式时跟踪你，有兴趣可以查看<a href="https://www.nothingprivate.ml/" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>。</p>
<p>以上是目前浏览器指纹涉及的部分应用场景，从中我们可以看出：浏览器指纹既可以是广告方推送的利器，也可以是防御方识别的判据。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本篇文章主要从浏览器指纹概述、指纹识别原理和应用场景三个方面带领大家认识了浏览器指纹。针对常见的浏览器指纹进行了介绍，对浏览器指纹和设备的关联性进行了原理解析，最后简要介绍了目前浏览器指纹的一些使用场景。下一篇文章中，我们将设计一个简单的指纹追踪模型，通过实战，了解浏览器指纹的用途。敬请期待。</p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>
<ul>
<li><a href="https://www.xprize.org/about/mission" target="_blank" rel="noopener noreferrer">xprize<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/fingerprintjs/fingerprintjs" target="_blank" rel="noopener noreferrer">fingerprintjs<ExternalLinkIcon/></a></li>
<li><a href="http://home.ustc.edu.cn/~yang96/Elements_of_Information_Theory-second_edition.pdf" target="_blank" rel="noopener noreferrer">信息论基础<ExternalLinkIcon/></a></li>
<li><a href="https://coveryourtracks.eff.org/learn" target="_blank" rel="noopener noreferrer">How do trackers work?<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/xitu/gold-miner/blob/master/article/2021/we-collected-500-000-browser-fingerprints-here-is-what-we-found.md" target="_blank" rel="noopener noreferrer">基于 50 万个浏览器指纹的新发现<ExternalLinkIcon/></a></li>
<li><a href="https://coveryourtracks.eff.org/static/browser-uniqueness.pdf" target="_blank" rel="noopener noreferrer">How Unique Is Your Web Browser?<ExternalLinkIcon/></a></li>
<li><a href="https://amiunique.org/" target="_blank" rel="noopener noreferrer">Learn how identifiable you are on the Internet<ExternalLinkIcon/></a></li>
<li><a href="https://hal.inria.fr/hal-01285470/file/beauty-sp16.pdf" target="_blank" rel="noopener noreferrer">Beauty and the Beast: Diverting modern web browsers
to build unique browser fingerprints<ExternalLinkIcon/></a></li>
</ul>
</template>
