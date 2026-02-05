import IAService from "@/services/IAService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useIAStore = defineStore("ia", () => {
    const prompt = ref('');
    const result = ref('');

    async function generarReceta() {
        await IAService.generarReceta(prompt.value);
    }

    return {
        prompt,
        result,
        generarReceta
    }
})