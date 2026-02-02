import { defineStore } from "pinia";
import { computed, onMounted, reactive, ref } from "vue";
import APIService from "@/services/APIService";
import { useModalStore } from "./modal";

export const useBebidasStore = defineStore('bebidas', () => {
    //* Data
    const modal = useModalStore();
    const categorias = ref({});
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    const recetas = ref({});
    const receta = ref({});

    //* First petition
    onMounted(async function () {
        //* Petition
        const { data: { drinks } } = await APIService.obtenerCategorias();

        //* Set categorias
        categorias.value = drinks;
    })

    //* Search recipes
    async function obtenerRecetas() {
        const { data: { drinks } } = await APIService.buscarRecetas(busqueda);
        recetas.value = drinks;
    }

    //* Show drink
    async function seleccionarBebida(id) {
        const { data: { drinks } } = await APIService.buscarReceta(id);
        receta.value = drinks[0];
        modal.handleClicModal();
    }

    const noRecetas = computed(() => recetas.value.length === 0);

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        recetas,
        seleccionarBebida,
        receta,
        noRecetas
    }
});