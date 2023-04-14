import { computed } from "vue";

export function useVModel(props: any, propName: string, emit: any) {
  return computed({
    get() {
      return new Proxy(props[propName], {
        set(obj, name, value) {
          emit("update:" + propName, {
            ...obj,
            [name]: value,
          });
          return true;
        },
      });
    },
    set(val) {
      emit("update:" + propName, val);
    },
  });
}
