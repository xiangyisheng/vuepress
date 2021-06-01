(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{382:function(s,t,a){"use strict";a.r(t);var e=a(44),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"永久链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#永久链接"}},[s._v("#")]),s._v(" 永久链接")]),s._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("在 1.x.x 版本之前，VuePress 会检索文档源目录下的所有 markdown 文件并按照文件的层次结构去定义页面链接。\n比如你有以下的文件结构：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("├── package.json\n└── source\n    ├── _post\n    │   └── intro-vuepress.md\n    ├── index.md\n    └── tags.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("那么你就会获得以下的可用页面：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/source/\n/source/tags.html\n/source/_post/intro-vuepress.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("然而对于 blog 来说，我们希望文章的链接更加灵活，而不是局限于目录结构。VuePress 把这个功能称为永久链接 (permalinks) ，并从 "),a("code",[s._v("1.0.0")]),s._v(" 版本开始支持。")]),s._v(" "),a("p",[s._v("如果使用永久链接，那么实际的页面链接会像这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/source/\n/source/tags/\n/source/2018/4/1/intro-vuepress.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("看起来我们已经看过了 blog 的阴暗面。那么让我们继续看下去。")]),s._v(" "),a("h2",{attrs:{id:"永久链接-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#永久链接-2"}},[s._v("#")]),s._v(" 永久链接")]),s._v(" "),a("p",[s._v("一个永久链接是一个旨在未来很多年里维持不变的 URL，由此产生一个发生链接失效（link rot"),a("sup",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Link_rot",target:"_blank",rel:"noopener noreferrer"}},[s._v("1"),a("OutboundLink")],1)]),s._v("）的可能性较小的超链接。VuePress 支持一种灵活的方式去生成固定链接，这种方式允许你使用各种模板变量。")]),s._v(" "),a("p",[s._v("默认的永久链接是"),a("code",[s._v("/:regular")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"配置永久链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置永久链接"}},[s._v("#")]),s._v(" 配置永久链接")]),s._v(" "),a("p",[s._v("你可以使用全局配置来向所有页面应用永久链接：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  permalink"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/:year/:month/:day/:slug"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("另外，你也可以只为单独一个页面去设置永久链接。这种方式比全局配置拥有更高的优先级。")]),s._v(" "),a("p",[s._v("📝 "),a("strong",[s._v("hello.md")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Hello World\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("permalink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("world")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")])]),s._v("\n\nHello!\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"模板变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板变量"}},[s._v("#")]),s._v(" 模板变量")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("变量")]),s._v(" "),a("th",[s._v("介绍")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v(":year")]),s._v(" "),a("td",[s._v("文章发布的年份 (4数字)")])]),s._v(" "),a("tr",[a("td",[s._v(":month")]),s._v(" "),a("td",[s._v("文章发布的月份 (2数字)")])]),s._v(" "),a("tr",[a("td",[s._v(":i_month")]),s._v(" "),a("td",[s._v("文章发布的月份 (前面不带0)")])]),s._v(" "),a("tr",[a("td",[s._v(":day")]),s._v(" "),a("td",[s._v("文章发布的日份 (2数字)")])]),s._v(" "),a("tr",[a("td",[s._v(":i_day")]),s._v(" "),a("td",[s._v("文章发布的日份 (前面不带0)")])]),s._v(" "),a("tr",[a("td",[s._v(":slug")]),s._v(" "),a("td",[s._v("蛞蝓化文件路径 (不带扩展名)")])]),s._v(" "),a("tr",[a("td",[s._v(":regular")]),s._v(" "),a("td",[s._v("VuePress默认的生成永久链接的方式，具体实现看 "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/fileToPath.ts",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);