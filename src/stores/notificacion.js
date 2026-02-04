import { ref } from "vue";
import { defineStore } from "pinia";

export const useNotificacionStore = defineStore("notificacion", () => {
    const mostrar = ref(false);
    const texto = ref('');
    const error = ref(false);

    function $reset() {
        mostrar.value = false;
        texto.value = '';
        error.value = false;
    }

    return {
        mostrar,
        texto,
        error,
        $reset
    }

});