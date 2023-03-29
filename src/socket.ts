import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

// 连接成功
socket.on("connect", () => {
  console.log("连接成功...");
});

// 连接失败
socket.on("disconnect", () => {
  console.log("连接失败...");
});

export const sockets = {
  on(type: string, fn: Function = (msg: any) => {}) {
    socket.on(type, (msg) => {
      msg = JSON.parse(msg);
      fn(msg);
    });
  },
  emit(type: string, params: any) {
    socket.emit(type, params);
  },
};
