import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore('modal', () => {
    const modal = ref(false);

    //* When the user press clic
    function handleClicModal() {
        modal.value = !modal.value;
    }

    return {
        modal,
        handleClicModal
    }
})