(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{385:function(s,a,e){"use strict";e.r(a);var t=e(44),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"本地开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地开发"}},[s._v("#")]),s._v(" 本地开发")]),s._v(" "),e("h2",{attrs:{id:"摘要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[s._v("#")]),s._v(" 摘要")]),s._v(" "),e("p",[s._v("如果你看到此处，你可能会对改进 VuePress 核心感兴趣。")]),s._v(" "),e("p",[s._v("VuePress 正在使用包含了 "),e("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/docs/workspaces/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn Workspaces"),e("OutboundLink")],1),s._v(" 和 "),e("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[s._v("Lerna"),e("OutboundLink")],1),s._v(" 的一个组合。")]),s._v(" "),e("h2",{attrs:{id:"初始化-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化-package"}},[s._v("#")]),s._v(" 初始化 package")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" // 它将安装所有 package 的依赖\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("yarn")]),s._v(" 将使用 "),e("code",[s._v("hoist")]),s._v("。它对你意味着什么？")]),s._v(" "),e("p",[s._v("它将重组工作空间根目录中的所有依赖项并链接所有 package。")]),s._v(" "),e("p",[s._v("通过运行以下命令来检查链接：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -la node_modules/@vuepress\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("你必须注意应在子文件夹的 package.json 中声明所有依赖项。如果未声明 package 的 dependencies，则在发布到 npm 时将无法正常工作。")])]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("你应该留意一个特殊的 package "),e("code",[s._v("@vuepress/shared-utils")]),s._v("，它是由 Typescript 编写的。")])]),s._v(" "),e("p",[s._v("安装完所有依赖后，它将运行 "),e("code",[s._v("yarn tsc")]),s._v(" 。该命令将告诉 workspace 的 "),e("code",[s._v("@vuepress/shared-utils")]),s._v(" 来编译他的 js。")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("从这里开始，如果你要在此 package 中进行更改，则必须始终运行 "),e("code",[s._v("yarn tsc")]),s._v(" 或在单独的终端中运行 "),e("code",[s._v("yarn run tsc -w")]),s._v(" 。当检测到 shared-utils 有任何更改时，它将重新运行 tsc。")])]),s._v(" "),e("h2",{attrs:{id:"链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[s._v("#")]),s._v(" 链接")]),s._v(" "),e("p",[s._v("从这里开始就很不错了，你已经准备就绪。你需要将 VuePress 链接到你的项目。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" register-vuepress\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("你将看到类似这样的内容："),e("code",[s._v('success Registered "vuepress".')])]),s._v(" "),e("p",[s._v("它将链接来自 "),e("code",[s._v("packages/vuepress")]),s._v(" 的 VuePress 包。 你将可以访问 VuePress 脚手架和其他内部的 packages，他们在 "),e("code",[s._v("packages/vuepress/package.json")]),s._v(" 被声明。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("///")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cli.js"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("///")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("现在转到你的项目并运行 "),e("code",[s._v("yarn link vuepress")]),s._v("。")]),s._v(" "),e("p",[s._v("你应该得到 "),e("code",[s._v('success Using linked package for "vuepress".')])]),s._v(" "),e("h2",{attrs:{id:"取消链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消链接"}},[s._v("#")]),s._v(" 取消链接")]),s._v(" "),e("p",[s._v("你可能想要取消所有链接。在工作区根文件夹中，运行：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" unregister-vuepress\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("现在你可以在你的项目文件夹中运行 "),e("code",[s._v("yarn unlink vuepress")]),s._v(" 。")]),s._v(" "),e("p",[s._v("如果一切运行正常，当你在你的项目文件夹中再次运行 "),e("code",[s._v("yarn link vuepress")]),s._v(" ，你应该获得一个错误提示你找不到名为 vuepress 的软件包。")]),s._v(" "),e("h2",{attrs:{id:"bugs-问答"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bugs-问答"}},[s._v("#")]),s._v(" BUGS / 问答")]),s._v(" "),e("p",[s._v("你可能会发现链接有些困难。如果你触发了一些类似 "),e("code",[s._v('There\'s already a package called "vuepress" registered')]),s._v(" 之类的内容，你已经注册了 VuePress ：")]),s._v(" "),e("ul",[e("li",[s._v("如果你已经从"),e("a",{attrs:{href:"#%E9%93%BE%E6%8E%A5"}},[s._v("链接")]),s._v("链接了 VuePress ，就已经很好了。如果你进行更改，由于它是 symbolic link，你不必重新运行任何指令。只有当你更新 shared-utils 软件包时，才必须重新运行 "),e("code",[s._v("yarn tsc")]),s._v(" ，仅此而已。")]),s._v(" "),e("li",[s._v("如果你什么也没做。那么你已经将 VuePress 链接到某处。你要做的就是删除你运行 "),e("code",[s._v("yarn link")]),s._v(" 或 "),e("code",[s._v("yarn unlink")]),s._v(" 的文件夹。")])]),s._v(" "),e("h2",{attrs:{id:"更多相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多相关"}},[s._v("#")]),s._v(" 更多相关")]),s._v(" "),e("p",[s._v("你可以使用更多有趣的命令：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("yarn packages:list")]),s._v(" 将列出所有存在的 packages 及其版本 "),e("a",{attrs:{href:"https://github.com/lerna/lerna/tree/master/commands/list#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("code",[s._v("yarn packages:changed")]),s._v(" 会告诉你哪些 packages 将受到下一个 lerna 的 发布/版本 的影响 "),e("a",{attrs:{href:"https://github.com/lerna/lerna/tree/master/commands/changed#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("code",[s._v("yarn packages:diff")]),s._v(" 将显示上一个版本依赖所有差异 "),e("a",{attrs:{href:"https://github.com/lerna/lerna/tree/master/commands/diff#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);