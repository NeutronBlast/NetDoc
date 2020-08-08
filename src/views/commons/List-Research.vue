<template>
  <div>
    <Navigation />
    <div class="container-2">
        <v-row>
            <v-col cols="12" sm="12" md="3">
                
                <v-card max-width="450" class="mx-auto">
                    <v-list three-line>
                        <v-list-item-title class="ml-3">MIS INVESTIGACIONES</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-avatar color="teal">
                                    <span class="white--text">HUA</span>
                                </v-avatar>
                            </v-list-item-avatar>

                            <v-list-item-content class="mt-n4">
                                Hipoacusia Unilateral y Asimétrica
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
                <v-card max-width="450" class="mx-auto mt-5">
                    <v-list>
                        <v-list-item-title class="ml-3">INVESTIGACIONES DE COLEGAS</v-list-item-title>
                        <v-divider></v-divider>
                    </v-list>
                    <v-virtual-scroll :items="f_research" :item-height="50" height="210">
                        <template v-slot="{ item }">
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-avatar color="teal" size="56" class="white--text">
                                        <v-img v-if="item.img" :src="require('@/assets/img/'+item.img)"></v-img>
                                        <span class="white--text" v-else>{{item.name[0]}}</span>
                                    </v-avatar>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    {{ item.name }}
                                </v-list-item-content>

                            </v-list-item>
                        </template>
                    </v-virtual-scroll>
                </v-card>

            </v-col>

            <v-col cols="12" sm="12" md="9">
                <v-text-field outlined label="Buscar investigación" prepend-icon="mdi-magnify" color="teal darken-3"></v-text-field>
                <v-card>
                    <v-container fluid>
                        <h2>Investigaciones</h2>
                        <v-row>
                            <v-col cols="12" sm="12" md="6" v-for="res in research" :key="res.id">
                                <v-card class="mx-auto" outlined>
                                    <v-list-item three-line>
                                        <v-list-item-content>
                                            <div class="overline mb-4">{{res.type}}</div>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-list-item-title class="headline mb-1" v-bind="attrs" v-on="on">{{res.name}}</v-list-item-title>
                                                </template>
                                                <span>{{res.name}}</span>
                                            </v-tooltip>
                                            <v-list-item-subtitle>{{res.description}}</v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="80" color="grey">
                                            <v-img :src="require('@/assets/img/'+res.img)"></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-card-actions>
                                        <v-btn text color="teal darken-3" @click="$router.push('research')">Ver investigación</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>

                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/commons/Navigation.vue";

export default {
    components: {
        Navigation,
    },
    data(){
        return{
            research: [{
                    id: '1',
                    type: 'INVESTIGACIÓN',
                    name: 'Amiloidosis Sistémica',
                    description: 'Herramienta para diagnosticar la amiloidosis sistémica',
                    img: 'stock-101.jpg',
                },
                {
                    id: '2',
                    type: 'DESCUBRIMIENTO',
                    name: 'Retinosis Pigmentaria',
                    description: 'Identifican un nuevo gen asociado a retinosis pigmentaria',
                    img: 'stock-102.jpg',
                },
                {
                    id: '3',
                    type: 'INVESTIGACIÓN',
                    name: 'Síndrome de Ellis-van Creveld',
                    description: 'Mutaciones en el gen WDR35 causan una forma diferenciada del síndrome de Ellis-van Creveld',
                    img: 'stock-103.jpg',
                },
                {
                    id: '4',
                    type: 'DESCUBRIMIENTO',
                    name: 'Gen C-Raf',
                    description: 'Describen en un modelo animal el fenotipo de las hipoacusias raras en humanos causadas por la deficiencia en C-RAF',
                    img: 'stock-104.jpg',
                },
                {
                    id: '5',
                    type: 'TRATAMIENTO',
                    name: 'Enfermedad de Gaucher',
                    description: 'La UPO, en colaboración con el CSIC y la US, patenta un tratamiento para las enfermedades lisosomales',
                    img: 'stock-105.jpg',
                },
                {
                    id: '6',
                    type: 'INVESTIGACIÓN',
                    name: 'Síndrome de Discinesia Ciliar Primaria',
                    description: 'Consolidan una nueva investigación sobre enfermedades raras respiratorias en niños',
                    img: 'stock-106.jpg',
                },
                {
                    id: '7',
                    type: 'DESCUBRIMIENTO',
                    name: 'Enfermedad de Huntington',
                    description: 'Descubiertas nuevas aplicaciones del medicamento Fingolimod para mejorar los déficits cognitivos de la enfermedad de Huntington',
                    img: 'stock-107.jpg',
                },
                {
                    id: '8',
                    type: 'INVESTIGACIÓN',
                    name: 'Síndrome ICF',
                    description: 'Identificados tres genes que abren nuevas vías para el tratamiento del síndrome ICF',
                    img: 'stock-108.jpg',
                },
                {
                    id: '9',
                    type: 'TRATAMEINTO',
                    name: 'Síndrome MELAS',
                    description: 'Nuevas estrategias terapéuticas en el tratamiento de las enfermedades mitocondriales',
                    img: 'stock-109.jpg',
                },
                {
                    id: '10',
                    type: 'INVESTIGACIÓN',
                    name: 'Colitis Colágena',
                    description: 'Descubren marcadores genéticos para luchar contra una enfermedad gastrointestinal poco estudiada',
                    img: 'stock-110.jpg',
                }
                
            ],
            f_research: [{
                    img: 'stock-102.jpg',
                    name: 'Retinosis Pigmentaria'
                },
                {
                    img: null,
                    name: 'Distrofia Muscular de Duchenne'
                },
                {
                    img: null,
                    name: 'Fibrosis Quística',
                },
                {
                    img: 'stock-104.jpg',
                    name: 'Gen C-Raf',
                }
            ]
        }
    }
}
</script>

<style>

</style>