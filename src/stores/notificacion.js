import { ref } from "vue";
import { defineStore } from "pinia";

export const useNotificacionStore = defineStore("notificacion", () => {
    const mostrar = ref(false);
    const texto = ref('');
    const error = ref(false);

    return {
        mostrar,
        texto,
        error
    }

});