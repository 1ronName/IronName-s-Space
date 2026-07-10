/**
 * 计算日期字符串与当前时间的各项差值
 */
function getDateDiff(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);

    return { diffInSeconds, diffInMinutes, diffInHours, diffInDays, diffInMonths, diffInYears };
}

/**
 * 格式化日期为本地字符串表示
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

/**
 * 格式化相对时间（精确到分钟）
 */
export function formatRelativeTime(dateString: string): string {
    const { diffInSeconds, diffInMinutes, diffInHours, diffInDays, diffInMonths, diffInYears } = getDateDiff(dateString);

    if (diffInSeconds < 60) return '刚刚';
    if (diffInMinutes < 60) return `${diffInMinutes} 分钟前`;
    if (diffInHours < 24) return `${diffInHours} 小时前`;
    if (diffInDays < 30) return `${diffInDays} 天前`;
    if (diffInMonths < 12) return `${diffInMonths} 个月前`;
    return `${diffInYears} 年前`;
}

/**
 * 格式化相对日期（精确到天）
 */
export function formatRelativeDate(dateString: string): string {
    const { diffInHours, diffInDays, diffInMonths, diffInYears } = getDateDiff(dateString);

    if (diffInHours < 24) return '不到 1 天';
    if (diffInDays < 30) return `${diffInDays} 天前`;
    if (diffInMonths < 12) return `${diffInMonths} 个月前`;
    return `${diffInYears} 年前`;
}