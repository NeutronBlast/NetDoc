<template>
<div>
    <Navigation />
    <v-parallax src="@/assets/img/stock-32.jpg">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="netsearch-title">Buscador de enfermedades</h1>
                <h4 class="netsearch-subtitle">Toda la información acerca de enfermedades raras al alcance de un click</h4>

                <v-container>
                    <v-row>
                        <v-col sm="12" md="6">
                            <v-text-field label="Nombre" dense placeholder="Buscar por nombre" outlined color="teal darken-3"></v-text-field>
                        </v-col>

                        <v-col sm="12" md="6">
                            <v-select v-model="s" outlined dense :items="syns" deletable-chips label="Sintomas" multiple color="teal darken-3" item-color="teal" chips>
                                <template #selection="{ item }">
                                    <v-chip x-small color="teal lighten-4">{{item}}</v-chip>
                                </template>
                            </v-select>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn class="mt-n6" color="teal lighten-3" @click="show = true">BUSCAR</v-btn>
                <v-btn class="mt-n6 ml-4" color="teal lighten-3" @click="show = false">LIMPIAR</v-btn>

            </v-col>
        </v-row>
    </v-parallax>
<Show v-if="show" />

</div>
</template>

<script>
import Navigation from "@/components/commons/Navigation.vue";
import Show from "@/components/commons/diseases/Show.vue"

export default {
    components: {
        Navigation,
        Show
    },
    data() {
        return {
            show: false,
            s: [],
            syns: ['Sintoma 1', 'Sintoma 2', 'Sintoma 3', 'Sintoma 4', 'Sintoma 5']
        }
    }
}
</script>
