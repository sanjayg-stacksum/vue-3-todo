<template>
  <div
    class="
      h-full
      w-full
      flex
      items-center
      justify-center
      bg-teal-lightest
      font-sans
      lg:p-6
    "
  >
    <div
      class="
        h-full
        w-full
        bg-white
        rounded
        shadow
        p-4
        w-full
        lg:w-3/4
        lg:max-w-lg
        flex flex-col
      "
    >
      <NewItem />
      <div data-todo-container="" class="flex-1 overflow-x-scroll">
        <TodoItem v-for="item in items" :key="item" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, defineComponent } from "vue";
import NewItem from "@/components/NewItem.vue";
import TodoItem from '@/components/TodoItem.vue';
import { useStore } from "@/store";

export default defineComponent({
  components: {
    NewItem,
    TodoItem,
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);
    return { items };
  },
});
</script>
