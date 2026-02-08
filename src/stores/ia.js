import IAService from "@/services/IAService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useIAStore = defineStore("ia", () => {
    const prompt = ref('');
    const result = ref('');
    const cargando = ref(false);

    async function generarReceta() {
        result.value = '';
        cargando.value = true;
        const resultado = await IAService.generarReceta(prompt.value);

        for await (const text of resultado) {
            result.value += text;
        }

        cargando.value = false;
    }

    return {
        prompt,
        result,
        cargando,
        generarReceta
    }
})