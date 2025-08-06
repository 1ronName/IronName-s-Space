import { Project } from '@/types';

export const projectsData: Project[] = [

    // 每次添加在这里，自然形成倒序

    {
        id: 'photon loop',
        title: 'Photon Loop',
        description: '参加GMTK GameJam 2025的作品，也是我做的第三个游戏作品。个人4天内完成',
        imageUrl: 'images/projects/photon loop.png',
        tags: ['游戏','GameJam'],
        links: {
            demo: 'https://ironname.itch.io/photon-loop',
            video: '/'
        },
        featured: false,
        date: '2025-08-06',
    },
    
    {
        id: 'myspace',
        title: 'My Space',
        description: '效仿dogxi建的个人网站（解决不了环境配置就直接拿大佬的源码部署的）',
        // imageUrl: '/projects/mycard.jpg',
        tags: ['网站'],
        links: {
            demo: '/',
            source: 'https://github.com/1ronName/IronName-s-Space',
        },
        featured: false,
        date: '2025-07-28',
    },

    {
        id: 'watch your step',
        title: '小心脚下(Watch Your Step)',
        description: '参加萌芽Gamejam2025；第二个游戏作品。个人10天内完成。',
        imageUrl: 'images/projects/小心脚下封面.png',
        tags: ['游戏','GameJam'],
        links: {
            demo: 'https://ironname.itch.io/watch-your-step',
            video: 'https://www.bilibili.com/video/BV1zXZFYSE1N'
        },
        featured: false,
        date: '2025-02-10',
    },

    {
        id: 'collapsed dream',
        title: '破碎梦境(Collapsed Dream)',
        description: '参加吉比特Gamejam2024的作品，是我做的第一个游戏作品。组员还有 美术叶，关卡设计吴。测试张',
        imageUrl: 'images/projects/破碎梦境封面.png',
        tags: ['游戏','GameJam'],
        links: {
            demo: 'https://ironname.itch.io/collapseddream',
            video: 'https://www.bilibili.com/video/BV1S8ZFYvEiX'
        },
        featured: false,
        date: '2024-12-01',
    },

    {
        id: 'outer wilds gmv',
        title: '剧情向GMV | 群星在上，探索不止',
        description: '《Outer Wilds》的剧情向剪辑。虽然播放量不高，仍是我喜爱的作品',
        imageUrl: 'images/projects/群星在上，仰望不止.png',
        tags: ['视频'],
        links: {
            video: 'https://www.bilibili.com/video/BV1t337eUEkd/'
        },
        featured: true,
        date: '2024-06-24',
    },
    
];
