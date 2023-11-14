// 生成 5 个不重复的 1 到 10 的随机数
function generateUniqueRandomNumbers(): number[] {
    const randomNumbers: Set<number> = new Set();

    while (randomNumbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        randomNumbers.add(randomNumber);
    }

    return Array.from(randomNumbers);
}

export const utils = {
    times: (): number => {
        return new Date().getTime();
    },
    getString: (str: string): string => {
        return `yzs---${str}`;
    },
    // 动态引入图片
    getImageUrl: (name: string): string => {
        return new URL(`../assets/${name}.svg`, import.meta.url).href;
    },
    generateUniqueRandomNumbers,
};
