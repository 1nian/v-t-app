// 返回结果
export interface AxiosCustomResponse<T> {
    data: T;
    status: number;
    message: string;
    success: boolean;
}

// 咖啡属性
export interface Coffees {
    _id?: string; // id
    name: string; // 名称
    price: number; // 价格
    description: string; // 描述
}

// 咖啡列表
export interface CoffeesLists {
    list: Coffees[];
    total: number;
}
