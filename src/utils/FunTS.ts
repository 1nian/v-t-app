/**
 * FunTS.ts 纯js逻辑的公共函数
 *
 * @Author: GB
 * @Date:   2018-09-20 11:52:42
 * @Last Modified by:   GB
 * @Last Modified time: 2019-11-05 11:15:28
 */

/**
 * 等待函数
 * @param time 等待的时间
 * @returns Promise<void>
 */
export function wait(time: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

/**
 * 概率检测
 * @param p 概率[0,1]
 * @returns 检测结果
 */
export function checkProbability(p: number) {
    return Math.random() <= p;
}

/**
 * 从数组中随机获取【一个】
 * @param arr 取样数组
 * @returns 结果
 */
export function randomSample<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

/**
 * 从数组中随机获取【N个】
 * @param array 取样数组
 * @param n 取样数量
 * @returns 结果数组
 */
export function randomSampleSome<T>(array: T[], n = 1) {
    const arr = array;

    for (let i = 1; i < arr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }

    return arr.slice(0, n);
}

/**
 * 生成随机数
 * @param start 随机数区间起始,默认为0
 * @param end 随机数区间结束,默认为10
 * @param step 随机数增长步幅,默认为1
 * @returns 产生的随机数
 */
export function createRandom(start = 0, end = 10, step = 1): number {
    const range = end - start;
    const r = Math.random() * (range / step);
    const i = Math.floor(r) / (1 / step) + start;

    return i;
}

/**
 * 打乱数组,返回新数组
 * @param array 原数组
 * @returns 打乱之后的数组
 */
export function shuffle<T>(array: T[]): T[] {
    const arr = array;

    for (let i = 1; i < arr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }

    return arr;
}

/**
 * 根据权重随机返回itemArr中对象
 * @param itemArr 随机的数组
 * @param pArr 随机数组每项出现的权重
 * @returns 取得的结果
 */
export function randomInItems<T>(itemArr: T[], pArr: number[]): T {
    let sum = 0;
    let factor = 0;
    let random = Math.random();

    for (let p of pArr) {
        sum += p; // 统计概率总和
    }

    random *= sum; // 生成概率随机数

    for (let i = 0; i < pArr.length; i++) {
        factor += pArr[i];
        if (random <= factor) return itemArr[i];
    }

    return null;
}

/**
 * 生成指定长度的随机字符串
 * @param length 字符串长度
 * @returns 随机字符串
 */
export function randomString(length = 32): string {
    const str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const maxLength = str.length;

    let res = '';

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * maxLength);
        res += str.charAt(index);
    }

    return res;
}

/**
 * 按照类型将item分类输出到指定Map
 * @param type item的类别
 * @param item 需要被分类的对象
 * @param typeMap 分类后会输出到该Map
 * @returns 返回typeMap
 */
export function typeIn(type: string | number | boolean, item: any, typeMap: Map<any, any>): Map<any, any> {
    if (typeMap.has(type)) {
        const arr = typeMap.get(type);
        arr.push(item);
        typeMap.set(type, arr);
    } else {
        typeMap.set(type, [item]);
    }

    return typeMap;
}

/**
 * 利用JSON.stringify拷贝对象,对象中函数会丢失
 * @param obj 待拷贝的对象
 * @returns 拷贝结果
 */
export function simpleDeepCopy(obj: Object): Object {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * 字符串首部补位
 * @param str 待操作字符串
 * @param length 补位长度
 * @param char 补位字符,默认为空格
 * @returns 结果字符串
 */
export function padLeft(str: string, length: number, charStr = ' '): string {
    return new Array(Math.max(length - str.length, 0) + 1).join(charStr) + str;
}

/**
 * 字符串尾部补位
 * @param str 待操作字符串
 * @param length 补位长度
 * @param char 补位字符,默认为空格
 * @returns 结果字符串
 */
export function padRight(str: string, length: number, charStr = ' '): string {
    return str + new Array(Math.max(length - str.length, 0) + 1).join(charStr);
}
