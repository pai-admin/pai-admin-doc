module.exports = {
    title: 'PaiAdmin',
    description: 'PaiAdmin Doc',
    head: [['link', {rel: 'icon', href: '/favicon.png'}]],
    themeConfig: {
        logo: '/logo.png',
        search: true,
        searchMaxSuggestions: 10,
        repo: 'vuejs/vuepress',
        repoLabel: '仓库',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: 'Last Updated',
        nav: [
            {text: '首页', link: '/'},
            {text: '文档', link: '/api/'},
            {
                text: '前端',
                ariaLabel: '前端框架',
                items: [
                    {text: 'Gin 版本', link: '/gin/'},
                    {text: 'TP6 版本', link: '/tp6/'},
                    {text: 'Boot 版本', link: '/boot/'},
                    {text: 'Flask 版本', link: '/flask/'},
                    {text: 'Hyperf 版本', link: '/hyperf/'},
                ]
            },
            {
                text: '后端',
                ariaLabel: '后端框架',
                items: [
                    {text: 'Gin 版本', link: '/gin/'},
                    {text: 'TP6 版本', link: '/tp6/'},
                    {text: 'Boot 版本', link: '/boot/'},
                    {text: 'Flask 版本', link: '/flask/'},
                    {text: 'Hyperf 版本', link: '/hyperf/'},
                ]
            },
            {text: '生态', link: '/ecology/'}
        ],
        sidebar: {
            '/api/': [
                {
                    title: "使用指引",
                    path: "/api/"
                },
                {
                    title: '登录相关',
                    collapsable: true,
                    children: [
                        ['/api/login/verify', '获取验证码'],
                        ['/api/login/login', '登录接口'],
                    ]
                },
                {
                    title: '账号管理',
                    collapsable: true,
                    children: [
                        ['/api/account/', 'sd']
                    ]
                }
            ]
        }
    },
    port: 688,
    plugins: [
        ['vuepress-plugin-nprogress', {hotReload: true}]
    ]
}
