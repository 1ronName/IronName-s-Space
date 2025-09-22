import { Project } from '@/types';

export const projectsData: Project[] = [

    // 每次添加在这里，自然形成倒序
    {
        id: 'melody witch',
        title: '调律师',
        description: '“调制音乐，改变人生”，聚光灯线下48hgamejam作品。5人小队，都是第一次参加线下48h限时开发，完工即胜利！ 但还是打算稍微修正下再发视频',
        imageUrl: '/images/projects/调律师 宣传图.png',
        tags: ['游戏','48h限时开发'],
        links: {

        },
        featured: false,
        date: '2025-09-14',
    },

    {
        id: 'photon loop',
        title: 'Photon Loop',
        description: '基于Godot物理的解密游戏，第三个游戏作品，个人4天内完成',
        imageUrl: 'images/projects/photon loop.png',
        tags: ['游戏','GMTK GameJam 2025'],
        links: {
            demo: 'https://ironname.itch.io/photon-loop',
            video: 'https://www.bilibili.com/video/BV1BVtXzaEcF'
        },
        featured: false,
        date: '2025-08-06',
    },
    
    {
        id: 'myspace',
        title: 'My Space 个人网站',
        description: '效仿dogxi建的个人网站（解决不了环境配置就直接拿大佬的源码部署的）',
        // imageUrl: '/projects/mycard.jpg',
        tags: ['网站'],
        links: {
            source: 'https://github.com/1ronName/IronName-s-Space',
        },
        featured: false,
        date: '2025-07-28',
    },

    {
        id: 'watch your step',
        title: '小心脚下(Watch Your Step)',
        description: '以视觉受限为核心体验，并不好玩。第二个游戏作品，10天内独自完成。',
        imageUrl: 'images/projects/小心脚下封面.png',
        tags: ['游戏','2025萌芽Gamejam'],
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
        description: '物理，平台跳跃，第一个游戏作品。组员还有 美术叶，关卡设计吴。测试张',
        imageUrl: 'images/projects/破碎梦境封面.png',
        tags: ['游戏','2024吉比特高校GameJam'],
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
