<template>
  <div class="flex mb-4 items-center">
    <p
      class="w-full text-left"
      :class="completed ? 'line-through text-green' : 'text-grey-darkest'"
    >
      {{ text }}
    </p>
    <button
      class="
        flex-no-shrink
        p-2
        ml-2
        border-2
        rounded
        text-green
        border-green
        hover:text-white
        hover:bg-green
      "
      @click="toggleCompletion()"
    >
      {{ !completed ? "Not Yet" : "Done" }}</button
    ><button
      class="
        flex-no-shrink
        p-2
        ml-2
        border-2
        rounded
        text-red
        border-red
        hover:text-white
        hover:bg-red
        select-none
      "
      @click="removeItem()"
    >
      Remove
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
export default defineComponent({
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  setup(props) {
    const store = useStore();
    const toggleCompletion = () => {
      store.commit(MutationType.CompleteItem, {
        id: props.id,
        completed: !props.completed,
      });
    };
    const removeItem = () => {
      let items = store.state.items.filter((item) => item.id !== props.id);
      store.commit(MutationType.SetItems, items);
    };
    return { toggleCompletion, removeItem };
  },
});
</script>
