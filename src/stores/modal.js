import { useFavoritosStore } from "./favoritos";
import { useBebidasStore } from "./bebidas";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useModalStore = defineStore('modal', () => {
    const favoritos = useFavoritosStore();
    const bebidas = useBebidasStore();
    const modal = ref(false);

    //* When the user press clic
    function handleClicModal() {
        modal.value = !modal.value;
    }

    const textButton = computed(() => {
        return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos';
    })

    return {
        modal,
        handleClicModal,
        textButton
    }
})