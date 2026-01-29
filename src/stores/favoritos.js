import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const bebidas = useBebidasStore();
    const favoritos = ref([]);

    const handleClicFavoritos = () => {
        favoritos.value.push(bebidas.receta);
    }

    return {
        favoritos,
        handleClicFavoritos
    }
})