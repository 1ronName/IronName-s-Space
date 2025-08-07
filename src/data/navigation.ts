import { NavLink } from '@/types';

export const navigationLinks: NavLink[] = [
    // {
    //     id: 'home',
    //     name: '首页',
    //     url: '/',
    //     icon: 'FiHome',
    //     isExternal: false,
    // },

    {
        id: 'itch.io',
        name: 'itch.io主页',
        url: 'https://ironname.itch.io/',
        icon: 'SiItchdotio',
        isExternal: true,
    },

    {
        id: 'bilibili',
        name: 'b站主页',
        url: 'https://space.bilibili.com/57447177',
        icon: 'SiBilibili',
        isExternal: true,
    },

    // {
    //     id: 'blog',
    //     name: '博客',
    //     url: 'https://blog.ironname.top',
    //     icon: 'FiEdit',
    //     isExternal: true,
    // },
    {
        id: 'projects',
        name: 'Github项目',
        url: 'https://github.com/1ronName?tab=repositories&sort=stargazers',
        icon: 'FiGithub',
        isExternal: true,
    },

];
