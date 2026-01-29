import { defineStore } from "pinia";

export const useFavoritosStore = defineStore('favoritos', () => {

    const handleClicFavoritos = () => {
        console.log('add');
    }

    return {
        handleClicFavoritos
    }
})