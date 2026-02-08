import IAService from "@/services/IAService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useIAStore = defineStore("ia", () => {
    const prompt = ref('');
    const result = ref('');

    async function generarReceta() {
        const resultado = await IAService.generarReceta(prompt.value);

        for await (const text of resultado) {
            console.log(text);
        }
    }

    return {
        prompt,
        result,
        generarReceta
    }
})