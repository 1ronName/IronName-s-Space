import { Skill } from '@/types';

export const skillsData: Skill[] = [
    // 游戏制作技能
    {
        id: 'gameplay',
        name: '玩法设计',
        category: 'gamedesign',
        level: 2,
        icon: 'FaGamepad',
    },
    {
        id: 'story',
        name: '故事设计',
        category: 'gamedesign',
        level: 1,
        icon: 'FiEdit',
    },
    {
        id: 'drawing',
        name: '绘画',
        category: 'gamedesign',
        level: 1,
        icon: 'FaPaintBrush',
    },
    {
        id: 'model',
        name: '建模',
        category: 'gamedesign',
        level: 2,
        icon: 'FaCube',
    },
    {
        id: 'music',
        name: '音乐',
        category: 'gamedesign',
        level: 0,
        icon: 'FiMusic',
    },
    {
        id: 'sfx',
        name: '音效设计',
        category: 'gamedesign',
        level: 1,
        icon: 'FiHeadphones',
    },

    // 编程技能
    {
        id: 'gdscript',
        name: 'GDscript',
        category: 'code',
        level: 3,
        icon: 'SiGodotengine',
    },
    {
        id: 'c/cpp',
        name: 'C/CPP',
        category: 'code',
        level: 3,
        icon: 'SiC',
    },
    {
        id: 'python',
        name: 'Python',
        category: 'code',
        level: 2,
        icon: 'SiPython',
    },
    {
        id: 'frontend',
        name: '网站搭建',
        category: 'code',
        level: 1,
        icon: 'FaReact',
    },


    // 其他技能
    {
        id: 'videomake',
        name: '视频制作',
        category: 'other',
        level: 4,
        icon: 'FiVideo',
    },
    {
        id: 'search',
        name: '搜索',
        category: 'other',
        level: 4,
        icon: 'FiSearch',
    },
];
