<template>
  <form class="mb-4 select-none" @submit.prevent="createTask">
    <h1 class="text-grey-darkest">Todo List</h1>
    <div class="flex mt-4">
      <input
        v-model="todoText"
        type="text"
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          mr-4
          text-grey-darker
        "
        placeholder="Add Todo"
      />
      <button
        class="
          flex-no-shrink
          p-2
          ml-4
          mr-2
          border-2
          rounded
          hover:text-white
          text-green
          border-green
          hover:bg-green
        "
      >
        Add
      </button>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
export default defineComponent({
  setup() {
    const todoText = ref("");
    const store = useStore();
    const createTask = () => {
      if (todoText.value === "") return;
      const item = {
        id: Date.now(),
        text: todoText.value,
        completed: false,
      };
      store.commit(MutationType.CreateItem, item);
      todoText.value = "";
    };
    return { createTask, todoText };
  },
});
</script>
