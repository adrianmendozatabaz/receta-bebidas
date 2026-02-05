import { defineStore } from "pinia";
import { ref } from "vue";

export const useIAStore = defineStore("ia", () => {
    const prompt = ref('');
    const result = ref('');

    return {
        prompt,
        result
    }
})