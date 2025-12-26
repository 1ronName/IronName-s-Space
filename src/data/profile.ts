import { Profile } from '@/types';

export const profileData: Profile = {
    name: 'IronName',
    title: '尊重客观规律，发挥主观能动性',
    bio: "志同道合的人总会相遇",
    avatar: 'images/avatar3.png', 
    social: [
        {
            id: 'bilibili',
            username: '铁名_IronName',
            url: 'https://space.bilibili.com/57447177',
            icon: 'SiBilibili',
            tooltip: 'bilibili'
        },
        {
            id: 'rednote',
            username: '铁名_IronName',
            url: 'https://space.bilibili.com/57447177',
            icon: 'SiXiaohongshu',
            tooltip: '小红书'
        },
        {
            id: 'wechat',
            username: 'GameDev之旅',
            url: '/',
            icon: 'SiWechat',
            tooltip: '微信公众号'
        },
        // {
        //     id: 'email',
        //     name: 'Email',
        //     url: 'mailto:w526377yu@qq.com',
        //     icon: 'FiMail',
        //     tooltip: '发送邮件'
        // },
    ],
    location: '中国',
    email: 'w526377yu@qq.com',
};
