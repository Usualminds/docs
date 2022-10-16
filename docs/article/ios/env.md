# IOS 开发第一弹-环境构建
近期笔者计划开发一个**待办事项**相关的 IOS APP（先定个小目标😂），打算系统地学习下移动端开发，顺便将近期 H5 学习相关的知识在实际使用中串联起来，俗话说：光说不练，等于白干。那我们就先从环境构建开始学习。本期文章主要分为以下几个部分。
- 图片 xmind

## 开发工具
### 下载
提到应用程序开发，第一个可能就是开发使用的 IDE 了，类似于 Java 开发者使用的 IDEA 或 Eclipse，前端开发者使用 Vscode 或 Webstorm。IOS 开发者需要使用苹果统一指定的开发 IDE：Xcode，直接去应用商店下载即可，也就 7.6G 大小。
![](https://files.mdnice.com/user/8106/9a37257d-494c-496b-b441-d832de95386b.png)
### 特性
从 Xcode 的大小我们可以预感到这个 IDE 的强大，它的几个特性简单介绍下
- 跨平台：针对苹果生态内的应用，它可以支持支持所有 Apple 平台上的开发工作，包括：`iOS`、`iPadOS`、`macOS` 和 `tvOS`。
- 高效快速：**所见即所得**的开发体验，使用 `Swift` 和 `SwiftUI` 可以自定义构建过程。这一点和 `Web`开发类似甚至更优越，因为开发和预览在同一个 IDE 的界面即可完成，类似下图：
 ![](https://developer.apple.com/xcode/images/screen-hero-14-large_2x.png)
- 智能语法提示：这一点不多说，和 VScode 的强类型语言类似，Xcode 不仅支持语法提示，还包含跳转文档、代码内嵌等诸多功能
- 云：通过 Xcode 和云可以可以实现应用测试、部署、`TestFlight` 和应用商店全过程的持续集成和交付，并且可以查看应用状态并进行监控和报告。
  ![](https://files.mdnice.com/user/8106/ff5aa5e1-87ff-49a7-85e5-9b7b3a2aa60e.png)
### 使用
- 实时预览功能，点击右下角播放按钮，同时上方还有钉子功能，可以固定住当前 View 视图，这样不用来回切换 View ，方便查看
![](https://files.mdnice.com/user/8106/aed41908-4e5a-4c96-a429-fa4d9e1e730c.png)
- UI 检视功能，类似浏览器检视 DOM 元素，可以快速定位出当前视图对应的代码
  ![](https://files.mdnice.com/user/8106/dddf9fef-9827-49f1-89fb-0c97a18f8efc.png)

- Debug 功能，调试自然是开发过程中必不可少的一关，Xcode 支持程序实时调试，类似浏览器的 Sources 调试，同时也支持控制台调试，类似浏览器的 Console，如下
  ![](https://files.mdnice.com/user/8106/7b883b46-0c23-41c4-a14c-01708385d57e.png)
 
- 语法提示功能，这一点对开发特别重要，通过 Command 键可以调出快捷菜单，如下：
  ![](https://files.mdnice.com/user/8106/f4d090b1-1135-4b2f-a014-e47c3a2cc2b7.png)

- 多模式调试。支持暗色模式和亮色模式调试，支持多设备屏幕大小调试等

以上只介绍了我暂时用到的部分功能，更多功能可以参考[官方文档](https://developer.apple.com/xcode/)。
## 包管理工具
每一个受欢迎的开发语言都具有强大的生态，并且离不开第三方的包的支持，所以一个包管理工具尤为重要。像 `Node` 的包管理工具 `Npm`,`Java` 的包管理工具 `Maven`，对于 `Swift` 也不例外，`CocosPods` 是其开发所需要的包管理工具。安装步骤如下

```shell
#安装 ruby，一般 mac 是有预装的，只需要确认下版本
ruby --version

#输出 gem 的版本号
gem --version

#切换国内 ruby 镜像
gem sources --remove https://rubygems.org/
gem sources -a https://gems.ruby-china.com/

#安装 CocoaPods
sudo gem install cocoapods

#初始化
pod setup

#验证 pod
pod --version
```

## 创建你的第一个应用程序
- File -> New -> Project
![](https://files.mdnice.com/user/8106/ec9df237-df22-4072-a3dc-8e8eb886a16c.png)
- 选择 iOS -> App
![](https://files.mdnice.com/user/8106/fdc8d4c9-580c-422e-961f-59c50922bf25.png)

- 指定项目名称、语言、是否需要单测等
  ![](https://files.mdnice.com/user/8106/f60c299e-1ce1-431d-be33-6d14031eaef2.png)

- 创建成功。来自程序员都懂的 `Hello, world!`
  ![](https://files.mdnice.com/user/8106/d8d7d384-5af1-41ec-b427-5928df9d8b30.png)
## 其他周边
开发过程中，我们涉及开发的周边简单介绍几个：
### Developer APP 
Developer APP 是苹果针对开发者开发的 APP，它包含了开发技术涉及的方方面面，同时要在商店发布应用，必须注册开发者账号。

![](https://files.mdnice.com/user/8106/d0a1d715-5171-42ac-8ccd-2124e46d0eba.png)
### Playgrounds
Swift Playgrounds 内置了很多适合入门的小项目，可以作为入门练习，老少咸宜。
![](https://files.mdnice.com/user/8106/ddb570f5-14cd-4fa4-a1cf-25004af9ace2.png)
### SF 符号
[SF 符号](https://developer.apple.com/sf-symbols/)是苹果官方的符号库，日常使用可以参考。
![](https://files.mdnice.com/user/8106/922d37ba-97fd-4f22-be33-15b6012dbc8c.png)

## 总结
本文简要介绍了 IOS 开发所需要的构建环境，简单介绍了 Xcode 的特性、基本使用方法，并学习了 IOS 包管理工具的安装以及如何创建你的第一个 IOS 应用程序，最后我们介绍了 iOS 开发会涉及的相关周边。下节我们将介绍如何开发一个待办事项应用。
