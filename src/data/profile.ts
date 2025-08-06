import { Profile } from '@/types';

export const profileData: Profile = {
    name: 'IronName',
    title: '是一个一个大学生，对游戏开发感兴趣，还有其他有意思的东西。',
    bio: "目标是成为独立制作人！(大概不止游戏？",
    avatar: 'images/avatar.png', 
    social: [
        {
            id: 'bilibili',
            name: 'Bilibili',
            url: 'https://space.bilibili.com/57447177',
            icon: 'FiVideo',
            tooltip: 'bilibili主页'
        },
        {
            id: 'email',
            name: 'Email',
            url: 'mailto:w526377yu@qq.com',
            icon: 'FiMail',
            tooltip: '发送邮件'
        },
    ],
    location: '中国',
    email: 'w526377yu@qq.com',
};
