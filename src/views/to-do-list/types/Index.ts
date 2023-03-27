export interface ToDo {
  id: number; // 任务唯一id
  name: string; // 任务名称
  state: boolean; // 任务状态
  created_time: string; // 任务创建时间
  update_time: string; // 任务完成时间
}
