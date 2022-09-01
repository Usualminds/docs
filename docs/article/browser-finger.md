# 浏览器指纹及其应用
## 背景
伴随互联网的快速发展，Web 服务已呈现出极速增长的趋势，人们在使用 Web 服务的同时，也面临着网络安全风险。根据中国信息通信研究院发布的[《中国网络安全产业白皮书》](http://www.caict.ac.cn/kxyj/qwfb/bps/202009/P020200916482039993423.pdf)报告：我国网络安全产业呈现高速增长态势，2020 年产业规模预计为 1702 亿元。

![](https://files.mdnice.com/user/8106/0ed3dd69-93b3-4fe3-a49e-64061bd522c5.jpg)

其中，Web 安全也占有一定比重，Web 站点俨然已经成为网络攻防的重要战场。

![](https://files.mdnice.com/user/8106/46ef3043-cba3-499b-a1fb-1143930bf3d7.jpg)

而浏览器指纹在 Web 安全**主动防御**领域扮演着越来越重要的角色。本文主要从浏览器指纹概述、指纹识别原理、应用场景三个方面来介绍浏览器指纹。

## 浏览器指纹概述

浏览器指纹是由[电子前哨基金会 (EFF)](https://www.eff.org/) 首席科学家 [Peter Eckersley](https://www.xprize.org/about/people/peter-eckersley) 在 2012 年提出，它利用浏览器自由传输的一些属性来生成和人类指纹一样具有标识作用的字符串。那么常见的浏览器指纹有哪些呢？可以参考如下表格数据，其中：
- 指纹因子：指浏览器对外的公开属性，如 `userAgent` 可以通过 `navigator.userAgent` 获取；`colorDepth` 可以通过 `screen.colorDepth` 获取。

![](https://files.mdnice.com/user/8106/e33aabdd-dfe4-4d70-8a44-0242be356e72.jpg)

- 稳定性：指刷新浏览器而指纹因子对应的取值不会发生改变。如 `colorDepth` 它表示屏幕的颜色深度，在谷歌浏览器中其取值为 24，刷新浏览器后其取值依然是 24。那么它就是**稳定的**指纹因子。
- 独立性：指同一设备上使用不同浏览器，指纹因子的取值不会发生改变。如 `devicePixelRatio` 它表示当前显示设备的物理像素分辨率与 CSS 像素分辨率之比，其取值在同一设备上的谷歌浏览器、火狐浏览器、Edge 浏览器、IE 浏览器、Opera 浏览器和 Safari 浏览器均为同一个值。因此，`devicePixelRatio` 是**独立的**指纹因子。

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

>表格指纹因子数据源：[Browser independent components
](https://github.com/fingerprintjs/fingerprintjs/blob/v2/wiki/browser_independent_components.md) & [Stable components](https://github.com/fingerprintjs/fingerprintjs/blob/v2/wiki/stable_components.md)

以上的这些指纹因子我们都可以通过 JavaScript 代码获取其对应取值，通过稳定且独立的指纹因子组合成的浏览器指纹，使得设备识别变得有可能。即通过浏览器指纹我们获取该指纹所在的硬件设备，如个人浏览器或 PC。

你可能会好奇，这些指纹因子可以用来干什么呢？它是如何实现与设备关联的呢？接下来让我们了解一下浏览器指纹识别的背后的原理。

## 识别原理

### 信息熵

上面我们介绍了浏览器常见的指纹因子，但是如何度量浏览器中这些可以自由传输的指纹因子呢？了解过信息论的同学应该知道，我们可以通过信息熵来度量信息量，信息熵越高，则能传输越多的信息，熵越低，传输的信息越少。因此，可以将信息熵作为浏览器指纹标识程度的判据，举例来看，对于一个离散型随机变量 X，它的熵 H(X) 为：

$$H(X) = -\sum_x {p(x)}\log_2 {p(x)}$$

### 单个指纹因子熵值

上述公式中，使用了以 2 为底的对数函数，其单位为比特。简单来讲，一个指纹因子的信息量可以通过它来量化。举个例子 🌰：我们以指纹因子 `doNotTrack` 为例，它的取值结果有两种：
- 开启设置可标记为 1，关闭设置可标记为 0
- 假设用户访问网站的统计结果中，设置了 `doNotTrack` 的概览为 10%, 未设置的概览为 90%。那么 `doNotTrack` 这一指纹因子对应的熵为：
$$H(X) = -{\frac {1} {10}}*\log_2^{\frac {1} {10}}-{\frac {9} {10}}*\log_2^{\frac {9} {10}}=0.469bit$$

>Note：点击[信息论基础](http://home.ustc.edu.cn/~yang96/Elements_of_Information_Theory-second_edition.pdf)进行穿越复习。

### 多个指纹因子概率

知道了如何计算单个指纹因子的信息熵，我们就可以进一步对浏览器的多个指纹因子进行信息熵的合并计算。根据 [Peter Eckersley](https://www.xprize.org/about/people/peter-eckersley) 发布的论文 [How Unique Is Your Web Browser](https://coveryourtracks.eff.org/static/browser-uniqueness.pdf) 结果表明：通过 `userAgent`、`fonts`、`screenResolution` 和 `plugins` 等八个指纹因子来生成浏览器指纹：

![](https://files.mdnice.com/user/8106/58bf4ac5-1973-4cba-9a52-89276d9dd5d9.jpg)

其统计结果显示这 8 个指纹因子至少包含 18.1 bit 的信息熵，通过自信息计算公式：

$$I(e) = -\log_2 {p(x)}$$

我们可以推导出，其出现同一个指纹所需要的概率：

$$p(x) = 2^{-I(e)}$$

通过计算可以得出：随机挑选一个浏览器，在 286777 个浏览器中才会出现与其相同的一个浏览器指纹。从而说明**浏览器指纹具有非常高的标识性**，而且伴随着指纹因子维度的增加，出现同一个浏览器指纹的概率会越来越低，其识别准确率也会越来越高。

### 指纹重复问题
目前，云服务器和虚拟主机已相对普及了，随时可以克隆出多个一模一样的虚拟系统和设备，类似 [ghost 系统](https://baike.baidu.com/item/ghost%E7%B3%BB%E7%BB%9F/8452726)，它们在初始化状态下指纹大概率是相同的，这时我们怎么去识别这些”出厂设置 “相同的设备呢？

上述我们提出的指纹识别是基于静态规则的识别，即只识别一次，但是真实的情况是一个设备的指纹是会随着时间发生变化的，它完全和使用者的习惯相关联，举例来说：如果今天你给自己的浏览器安装了一个插件，这时浏览器的指纹就会发生变化。因此，基于静态规则和动态追踪的关联机制可以实现对设备指纹指纹演变的长期追踪。有兴趣的童鞋可以参考 [FP-STALKER：Tracking Browser Fingerprint Evolutions](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8418634) 的研究结果：，一个浏览器可以被追踪的平均时间已经超过 **54.48** 天。在追踪过程中，对指纹数据集进行再分类，可以有效的规避这类问题。

### 小结
综上，我们可以通过计算出浏览器指纹因子对应的熵值，再结合自信息计算其出现概率，从而根据指纹取值和其概率推断出所在设备，了解了浏览器指纹生成原理。那么你也应该想了解它的应用场景有哪些吧，我们接着看。

## 应用场景

浏览器指纹常见的应用场景包含：
#### 恶意爬虫的主动防御
目前针对 Web 站点，网络上有各种自动化爬虫，进行数据采集，常见如刷票、点评、爬取隐私数据等，现阶段主要防御措施有：被动检测与防御、IP 地址检测与封锁、浏览器指纹&主动防御等。

#### 扫描器识别与拦截
除了网络上等爬虫工具，还会有各种专业的 Web 漏洞扫描工具，如：[AWVS](https://www.acunetix.com/)、[APPScan](https://www.hcltechsw.com/products/appscan)、[Xray](https://xray.cool/) 等，扫描器在主动识别 Web 漏洞的同时，也会给线上 Web 服务带来潜在安全问题。针对扫描器的拦截，可以根据其浏览器指纹的特异性，在其扫描指定站点时，进行识别与拦截。

#### Web 攻击的追踪与溯源
在我们的浏览器上运行着各种各样的脚本，利用浏览器脚本对 Web 攻击进行溯源有绝对优势，可以通过浏览器指纹特征信息提取和关联，对攻击者进行追踪与溯源。

#### 个性化广告推送
当你在网上浏览或者查找相关商品时，是不是经常会出现与之相关的广告页面？这时你很有可能正在被跟踪，因为你的屏幕分辨率、时区和表情符号集这些信息都暴露在了网上。甚至可以在你使用无痕浏览模式时跟踪你，有兴趣可以查看[这里](https://www.nothingprivate.ml/)。

以上是目前浏览器指纹涉及的部分应用场景，从中我们可以看出：浏览器指纹既可以是广告方推送的利器，也可以是防御方识别的判据。

## 总结
本篇文章主要从浏览器指纹概述、指纹识别原理和应用场景三个方面带领大家认识了浏览器指纹。针对常见的浏览器指纹进行了介绍，对浏览器指纹和设备的关联性进行了原理解析，最后简要介绍了目前浏览器指纹的一些使用场景。下一篇文章中，我们将设计一个简单的指纹追踪模型，通过实战，了解浏览器指纹的用途。敬请期待。

## 参考链接
- [xprize](https://www.xprize.org/about/mission)
- [fingerprintjs](https://github.com/fingerprintjs/fingerprintjs)
- [信息论基础](http://home.ustc.edu.cn/~yang96/Elements_of_Information_Theory-second_edition.pdf)
- [How do trackers work？](https://coveryourtracks.eff.org/learn)
- [基于 50 万个浏览器指纹的新发现](https://github.com/xitu/gold-miner/blob/master/article/2021/we-collected-500-000-browser-fingerprints-here-is-what-we-found.md)
- [How Unique Is Your Web Browser？](https://coveryourtracks.eff.org/static/browser-uniqueness.pdf)
- [Learn how identifiable you are on the Internet](https://amiunique.org/)
- [Beauty and the Beast：Diverting modern web browsers
to build unique browser fingerprints](https://hal.inria.fr/hal-01285470/file/beauty-sp16.pdf)