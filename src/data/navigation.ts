import { NavLink } from '@/types';

export const navigationLinks: NavLink[] = [
    {
        id: 'home',
        name: '首页',
        url: '/',
        icon: 'FiHome',
        isExternal: false,
    },
    {
        id: 'blog',
        name: '博客',
        url: 'https://blog.ironname.top',
        icon: 'FiEdit',
        isExternal: true,
    },
    {
        id: 'projects',
        name: '项目',
        url: 'https://github.com/1ronName?tab=repositories&sort=stargazers',
        icon: 'FiFolder',
        isExternal: true,
    },
    // {
    //     id: 'about',
    //     name: '关于',
    //     url: 'https://dogxi.notion.site/',
    //     icon: 'FiUser',
    //     isExternal: true,
    // },
    {
        id: 'contact',
        name: '联系',
        url: 'mailto:hi@dogxi.me',
        icon: 'FiMail',
        isExternal: true,
    },
    {
        id: 'github',
        name: 'GitHub',
        url: 'https://github.com/1ronName',
        icon: 'FiGithub',
        isExternal: true,
    },
];
