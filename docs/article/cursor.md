# Cursor：AI驱动的代码编辑器，重塑编程未来

![Cursor Logo](https://www.cursor.com/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=128&q=75)

## 引言

在技术的浪潮中，编程工具的革新一直是推动软件开发进步的关键。今天，我们要探索的是一个全新的AI驱动代码编辑器——Cursor，它正以其独特的方式改变着开发者的工作模式。

## Cursor：AI-first代码编辑器的崛起

[Cursor](https://www.cursor.com/) 是由Anysphere团队开发的新一代代码编辑器，它不仅继承了传统编辑器的强大功能，更通过深度集成AI技术，为开发者提供了前所未有的编程体验。

### 功能亮点

- **[基于代码库的AI IDE](https://docs.cursor.com/cmdk/overview)**：`Cursor` 是基于当前整个项目工程的，可以理解为项目的AI知识库，所以它给出的提示就是项目里实际做法，这一点极为重要。
  ![](/video/codeabse.gif)

- **[Tab](https://docs.cursor.com/cmdk/overview)**：只需点击`Tab`,`Cursor`可让预测下一个编辑，从而轻松完成你想要的内容
  ![](/video/cpp-full-video.gif)
- **[Cmd K](https://docs.cursor.com/cmdk/overview)**：允许你在编辑器窗口中生成新代码或编辑现有代码。
  ![](/video/codeabse.gif)


### 功能深入

- **[高级Tab功能](https://docs.cursor.com/tab/advanced-features)**：包括在Peek视图中使用Tab，预测编辑后的下一步操作等。

- **[Chat定制](https://docs.cursor.com/chat/customize)**：选择你喜欢的AI模型，定制聊天界面，包括是否搜索网络答案等。

- **[代码库聊天](https://docs.cursor.com/chat/codebase)**：通过索引代码库，Cursor Chat可以更准确地生成基于代码库的响应。

### 更多高级功能

- **[Cmd+K](https://docs.cursor.com/cmdk/overview)**：编辑和生成代码的AI助手。

- **[影子工作区](https://docs.cursor.com/advanced/shadow-workspace)**：在后台迭代代码，不影响用户的主要工作流程，这是一个创新的功能，可以大大提高代码开发的效率。

- **[AI审查](https://docs.cursor.com/advanced/ai-review)**：利用AI审查代码，提高代码质量。

## Cursor的AI模型和Chat功能

### 选择AI模型

用户可以通过模型切换器选择他们偏好的AI模型，Cursor Chat将使用该模型生成响应。默认情况下，Cursor Chat使用OpenAI的`GPT-4`作为其AI模型。

### 在编辑器中使用Chat

用户可以将Cursor Chat作为编辑器标签页使用，只需点击“更多”按钮，然后点击“在编辑器中打开Chat”按钮。之后，Cursor Chat将表现得像一个常规的编辑器标签页。

### 定制Chat

用户可以在`Cursor Settings` > `Features` > `Chat`下定制Cursor Chat，包括是否总是搜索网络答案、添加聊天淡入淡出动画等。

## Cursor的代码库索引和上下文管理

### 代码库索引

Cursor Chat通过代码库索引，能够更准确地生成基于代码库的响应。用户可以通过`Ctrl/⌘ + Enter`在输入消息后，让Cursor Chat扫描索引的代码库，找到相关代码片段。

### 上下文管理

Cursor提供了多种方式来管理代码的上下文，包括自动包含整个代码库的上下文、搜索网络、索引文档和用户指定的代码块引用。

### 忽略文件

用户可以设置某些文件或目录不被索引，以优化Cursor Chat的性能和响应速度。



## Cmd K：编辑器中的AI助手

### Prompt Bars

在Cursor中，我们称按下`Ctrl/Cmd K`时出现的栏为“Prompt Bar”。它类似于Chat的AI输入框，你可以在其中正常输入，或使用`@`符号引用其他上下文。

### 内联生成

如果按下`Ctrl/Cmd K`时没有选择代码，Cursor将根据你在提示栏中输入的提示生成新代码。

### 内联编辑

对于原地编辑，你只需选择要编辑的代码，然后在提示栏中输入。

### 后续指令

每次生成后，你可以通过在提示栏中添加更多指令来进一步完善提示，然后按`Enter`键，AI将根据你的后续指令重新生成。

### 默认上下文

默认情况下，Cursor会尝试找到除了你手动包含的`@`符号之外的不同类型的有用信息，以改进代码生成。

额外的上下文可能包括相关文件、最近查看的文件等。收集后，Cursor会根据你的编辑/生成对上下文项进行相关性排名，并保留与大型语言模型相关的顶级项。

### 快速问题

如果你在提示栏中按下`Option/Alt Enter`，Cursor将回答你对选择的内容和附加的上下文有任何问题。

这次对话的内容可以进一步用于后续生成，所以你可以在Cursor对快速问题给出响应后简单地输入“do it”来生成代码。


## 代码库索引

### 索引你的代码库

为了使用`@codebase`或`Ctrl/⌘ Enter`获得更好、更准确的代码库答案，你可以索引你的代码库。在幕后，Cursor为你的代码库中的每个文件计算嵌入，并使用这些来提高你的代码库答案的准确性。

你的代码库索引将自动与你的最新代码库更改同步。

你的代码库索引状态位于`Cursor Settings` > `Features` > `Codebase Indexing`。

### 高级设置

默认情况下，Cursor会索引你代码库中的所有文件。

你还可以展开`Show Settings`部分以访问更多高级选项。

在这里，你可以决定是否要为新仓库启用自动索引，并配置Cursor在仓库索引期间将忽略的文件，除了你的.gitignore设置之外。

如果你的项目中有任何大型内容文件，AI肯定不需要读取，忽略这些文件可以提高答案的准确性。

## 规则和上下文管理

### 规则

你可以通过修改`Cursor Settings` > `General` > `Rules for AI`部分来为Cursor添加自定义指令。

这些自定义指令将被包括在Cursor Chat和Ctrl/⌘ K等功能中。

### `.cursorrules`

对于项目特定的指令，你可以在项目的根目录中包含`.cursorrules`文件中的指令。

与“Rules for AI”部分一样，`.cursorrules`文件中的指令将被包括在Cursor Chat和Ctrl/⌘ K等功能中。

## 上下文符号和网络搜索

### 基本上下文符号

在Cursor的AI输入框中，如Cmd K、Chat或终端Cmd K，你可以通过输入`@`使用`@`符号。一个弹出菜单将出现，列出建议列表，并根据你的输入自动过滤，只显示最相关的建议。

### 键盘快捷键

你可以使用上下箭头键浏览建议列表，按`Enter`选择建议。如果建议是一个类别，如`Files`，建议将被过滤为只显示该类别中最相关的项目。

### Cmd K键盘快捷键

你可以使用上下箭头键浏览选定的Cmd K @符号列表，按`Enter`展开/折叠选定的上下文项。对于文件引用，你可以使用`Ctrl/
⌘ M`切换文件读取策略。更多关于文件读取策略的信息，请访问此处。

### `@Web`

使用`@Web`，Cursor将根据你提供的查询和上下文构建搜索查询，并在网络上搜索相关信息作为额外的上下文。这在寻找最新信息时特别有用。

### 始终开启

你可以通过在`Cursor settings` > `Features` > `Chat`下打开“始终搜索网络”，使Cursor在每个查询中都搜索网络。这相当于在每个查询中使用`@web`。

## 忽略文件

### 忽略文件

为了在Cursor功能中忽略文件，如代码库索引，你可以在项目的根目录中使用`.cursorignore`文件。它的工作方式与`.gitignore`对git的工作方式相同。

`.cursorignore`尊重`.gitignore`。如果你已经有`.gitignore`，文件将默认被忽略。
如果你想忽略额外的文件，可以将其添加到`.cursorignore`文件中。

### 示例`.cursorignore`文件

#### 忽略特定文件

```
# 忽略`dist`目录中的所有文件
dist/

# 忽略所有`.log`文件
*.log

# 忽略特定文件`config.json`
config.json

```

#### 仅包括特定文件

包括`app`目录中仅`*.py`文件。注意，这与`.gitignore`的语法相同。

```
# 忽略一切
*
# 不忽略app
!app/
# 不忽略app内的目录
!app/*/
!app/**/*/
# 不忽略Python文件
!*.py

```


## AI模型和AI审查

### AI模型

使用Cursor Chat、Ctrl/⌘ K和终端Ctrl/⌘ K，你可以轻松切换不同的模型。

### 模型下拉菜单

在AI输入框下方，你将看到一个下拉菜单，允许你选择要使用的模型。默认情况下，Cursor有这些模型可供使用：

- `GPT-4o`
- `GPT-4`
- `Claude 3.5 Sonnet`
- `cursor-small`
  - `cursor-small`是Cursor的自定义模型，它没有`GPT-4`那么智能，但是速度更快，用户可以无限制地访问它。

你可以在`Cursor Settings` > `Models` > `Model Names`下添加额外的模型。

### 仅限长上下文模型

在长上下文聊天中，模型选择限于支持长上下文的模型：

- `gpt-4o-128k`
- `gemini-1.5-flash-500k`
- `claude-3-haiku-200k`
- `claude-3-sonnet-200k`
- `claude-3-5-sonnet-200k`

### 模型X使用什么上下文窗口？

在聊天中，我们目前限制在大约20,000个令牌（如果模型不支持那么多上下文，则更少）。对于cmd-K，我们限制在大约10,000个令牌，以平衡TTFT和质量。长上下文聊天使用模型的最大上下文窗口。

### AI审查

AI Review是一个功能，允许你审查代码库中的最近更改，以捕捉任何潜在的错误。

你可以点击单个审查项目，在编辑器中查看完整上下文，并与AI聊天以获取更多信息。

### 自定义审查指令

为了使AI Review对你有利，你可以为AI提供自定义指令以集中关注。例如，如果你想让AI关注与性能相关的问题，你可以放置：

```
focus on the performance of my code/关注我的代码性能
```

这样，AI Review在扫描更改时将关注你的代码性能。

### 审查选项

目前，你有几个选项可供选择进行审查：

- `审查工作状态`
  - 这将审查你的未提交更改。
- `审查与主分支的差异`
  - 这将审查你当前工作状态与主分支之间的差异。
- `审查最后一次提交`
  - 这将审查你最后一次提交的内容。


## 从VSCode迁移到Cursor

[迁移指南](https://docs.cursor.com/get-started/migrate-from-vscode)提供了从VSCode到Cursor的一键迁移方案，包括导入扩展、主题、设置和快捷键绑定，确保平滑过渡。



## 订阅计划

Cursor提供了多种[订阅计划](https://docs.cursor.com/get-started/usage)以满足不同用户的需求，从个人开发者到企业团队。

### 用户体验

开发者们对Cursor的评价非常高：

> "After many recommendations, I finally switched from VSC to Cursor and ... wow! It's absolutely incredible." — Johannes

> "Cursor has changed the game. I really can't imagine writing code without it at this point." — Zeke

这些真实的用户反馈证明了Cursor在提升开发体验方面的卓越表现。

## 结语

Cursor不仅仅是一个编辑器，它是一个全新的开发环境，让开发者能够更专注于创新和解决问题。随着AI技术的不断进步，Cursor将继续引领编程的未来。

