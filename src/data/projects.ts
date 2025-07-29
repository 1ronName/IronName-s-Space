import { Project } from '@/types';

export const projectsData: Project[] = [
    {
        id: 'myspace',
        title: 'My Space',
        description: '效仿dogxi建的个人网站（解决不了环境配置就直接拿大佬的源码部署的）',
        // imageUrl: '/projects/mycard.jpg',
        tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        links: {
            demo: '/',
            source: 'https://github.com/1ronName/IronName-s-Space',
        },
        featured: true,
        date: '2025-07-28',
    },
    {
        id: 'more',
        title: '待更新',
        description: '接下来还是去画画吧，写网站代码给我干崩溃了...',
        // imageUrl: '/projects/mycard.jpg',
        tags: ['Godot', 'Art','Study'],
        links: {
            demo: '/',
            // source: 'https://github.com/dogxii/my-card',
        },
        featured: false,
        date: '2025-07-29',
    },
];
