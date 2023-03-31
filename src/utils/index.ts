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
};
