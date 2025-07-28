import { Profile } from '../types';

export const profileData : Profile = {
    name: 'IronName',
    title: '👋 Hey there',
    bio: "I'm a university student interested in Game Dev, and more.",
    avatar: 'public/avatar.png', // 添加头像文件到 public 目录
    social: [
        {
            id: 'github',
            name: 'GitHub',
            url: 'https://github.com/1ronName',
            icon: 'FiGithub',
        },
        {
            id: 'bilibili',
            name: 'Bilibili',
            url: 'https://space.bilibili.com/57447177',
            icon: 'FiVideo',
        },
        {
            id: 'email',
            name: 'Email',
            url: 'mailto:w526377yu@qq.com',
            icon: 'FiMail',
        },
    ],
    location: '中国',
    email: 'w526377yu@qq.com',
};