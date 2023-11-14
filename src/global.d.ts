export {};

declare module 'vue' {
    interface ComponentCustomProperties {
        $utils: {
            times: () => number;
            getString: (str: string) => string;
            getImageUrl: (name: string) => string;
            generateUniqueRandomNumbers: () => string[];
        };
        $sockets: {
            on: (type: string, fn: Function) => void;
            emit: (type: string, params: any) => void;
        };
    }
}
