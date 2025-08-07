import { Memo } from '@/types';

export const memosData: Memo[] = [

    {
        id: 'memo4',
        content: '昨天晚上“把自己的作品摆到架子上”了。'
        +'<br> 今天更换了一些图标，增加了“计划”模块',
        date: '2025-08-07',
        tags: ['个人网站'],
    },

    {
        id: 'memo3',
        content: '基本把这个网页修改好了，个人信息、还有图标、背景，小改了一下布局（因为我不怎么用Github）'
        +'<br> <"br">(忽略引号）可以换行！',
        date: '2025-07-29',
        tags: ['个人网站'],
    },
    {
        id: 'memo2',
        content: '改了半天，心态炸了。（主要是因为环境配置问题）\n最后还是直接用[dogxi的源码](https://github.com/dogxii/my-card)改方便',
        date: '2025-07-28',
        tags: ['记录','开始'],
    },
    {
        id: 'memo1',
        content: '在kimi的帮助下，部署了个人网页和博客; 购买了域名并设置好DNS解析',
        date: '2025-07-26',
        tags: ['记录', '开始'],
    },
];
