module.exports = {
    base: '/vuepress/',
    title: 'VuePress', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Vue 驱动的静态网站生成器', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '文档',
                ariaLabel: '文档',
                items: [
                    { text: 'Vue.js 中文文档', link: 'https://cn.vuejs.org/' },
                    { text: 'Node.js 中文网', link: 'http://nodejs.cn/' },
                    { text: 'Node.js 中文文档', link: 'https://www.nodeapp.cn/' },
                    { text:'Markdown',link:'https://www.markdownguide.org/'}
                ]
            },
            { text: '指南', link: '/pages/guide/' },
            { text: '配置', link: '/pages/config/' },
            { text: '主题', link: '/pages/theme/' },
            {
                text: '了解更多',
                ariaLabel: '了解更多',
                items: [
                    {
                        text: 'API',
                        items: [
                            { text: 'CLI', link: '/pages/api/cli' },
                            { text: 'Node', link: '/pages/api/node.md' }
                        ]
                    },
                    {
                        text: '开发指南',
                        items: [
                            { text: '本地开发', link: '/pages/miscellaneous/local-development.html' },
                            { text: '设计理念', link: '/pages/miscellaneous/design-concepts.html' },
                            { text: 'FAQ', link: '/pages/faq/' },
                            { text: '术语', link: '/pages/miscellaneous/glossary.html' }
                        ]
                    },
                    {
                        text: '其他',
                        items: [
                            { text: '从 0.x 迁移', link: '/pages/miscellaneous/migration-guide.html' },
                            { text: 'Changelog', link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md' }
                        ]
                    }
                ]
            },
            { text: 'Github', link: 'https://vuepress.vuejs.org/' }
        ],
        sidebar: {
            '/pages/api/': getApiSidebar(),
            '/pages/guide/': getGuideSidebar('指南', '深入'),
            '/pages/theme/': getThemeSidebar('主题', '介绍')
        }
    }
}

function getApiSidebar() {
    return [
        'cli',
        'node'
    ]
}

function getGuideSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'getting-started',
                'directory-structure',
                'basic-config',
                'assets',
                'markdown',
                'using-vue',
                'i18n',
                'deploy'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'frontmatter',
                'permalinks',
                'markdown-slot',
                'global-computed'
            ]
        }
    ]
}

function getThemeSidebar(groupA, introductionA) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['', introductionA],
                'using-a-theme',
                'writing-a-theme',
                'option-api',
                'default-theme-config',
                'blog-theme',
                'inheritance'
            ]
        }
    ]
}