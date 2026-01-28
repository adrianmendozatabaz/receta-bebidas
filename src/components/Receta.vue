<script setup>
import { useBebidasStore } from '@/stores/bebidas';

const bebidas = useBebidasStore();

defineProps({
    receta: Object
})


</script>

<template>
    <div class="border-light shadow-lg">
        <div class="overflow-hidden">
            <img :src="receta.strDrinkThumb" :alt="'Imagen de: ' + receta.strDrink"
                class="hover:scale-115 transition-transform hover:rotate-2">
        </div>
        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{ receta.strDrink }}</h2>
            <button type="button"
                class="bg-orange-400 mt-5 w-full p-3 font-bold text-white text-lg rounded hover:bg-orange-600"
                @click="bebidas.seleccionarBebida(receta.idDrink)">Ver
                Receta</button>
        </div>
    </div>
</template>