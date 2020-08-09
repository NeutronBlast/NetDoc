<template>
<div>
    <Navigation />
    <div class="container-2">
        <v-row>
            <v-col cols="12" sm="12" md="2">
                <v-text-field outlined label="Buscar comunidad" prepend-icon="mdi-magnify" color="teal darken-3"></v-text-field>
                <v-card max-width="450" class="mx-auto">
                    <v-list three-line>
                        <v-list-item-title class="ml-3">Administradas</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-avatar color="teal">
                                    <span class="white--text">S</span>
                                </v-avatar>
                            </v-list-item-avatar>

                            <v-list-item-content class="mt-n4">
                                Sauer LLC
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
                <v-card max-width="450" class="mx-auto mt-5">
                    <v-list>
                        <v-list-item-title class="ml-3">Otros</v-list-item-title>
                        <v-divider></v-divider>
                    </v-list>
                    <v-virtual-scroll :items="communities" :item-height="50" height="320">
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

                <!-- Create community -->
                <v-dialog v-model="dialog" max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <div class="text-center mt-4">
                            <v-btn block color="teal lighten-4" v-bind="attrs" v-on="on">Crear comunidad</v-btn>

                        </div>

                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Crear comunidad</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="12" md="6">
                                        <v-text-field label="Nombre*" color="teal darken-3"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="12" md="6">
                                        <v-file-input multiple label="Imagen" color="teal darken-3"></v-file-input>
                                    </v-col>
                                </v-row>
                                <v-divider></v-divider>

                                <v-row>
                                    <v-col cols="12" sm="12">
                                        <v-radio-group v-model="radioGroup" label="Privacidad">
                                            <v-radio label="Médicos y pacientes pueden enviar invitación" color="teal" value="1"></v-radio>
                                            <v-radio v-if="mode == 1" label="Sólo Médicos pueden enviar invitación" value="2" color="teal"></v-radio>
                                            <v-radio v-else label="Médicos no pueden enviar invitación" value="2" color="teal"></v-radio>

                                        </v-radio-group>
                                    </v-col>
                                </v-row>

                                <v-divider></v-divider>

                                <v-row>
                                    <v-col cols="12" sm="12">
                                        <v-textarea label="Reglas" color="teal" outlined></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="teal darken-3" text @click="dialog = false">CANCELAR</v-btn>
                            <v-btn color="teal darken-3" text @click="dialog = false">CREAR</v-btn>
                        </v-card-actions>

                    </v-card>

                </v-dialog>

            </v-col>

            <!-- Categories -->
            <v-col cols="12" sm="12" md="10">
                <v-card class="mb-5">
                    <v-container fluid>
                        <h2>Categorías</h2>

                        <v-row>
                            <v-col v-for="(item, index) in images" :key="index" class="d-flex child-flex" cols="6" sm="6" md="3">
                                <v-hover v-slot:default="{ hover }">

                                    <v-card flat tile class="d-flex">
                                        <v-img :src="require('@/assets/img/'+item.src)" :lazy-src="require('@/assets/img/'+item.src)" aspect-ratio="1" class="grey lighten-2">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-row>
                                            </template>
                                            <v-expand-transition>
                                                <div v-if="hover" class="d-flex transition-fast-in-fast-out teal v-card--reveal display-3 white--text" style="height: 100%;">
                                                    <small>{{item.categoria}}</small>

                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab right bottom>
                                                <v-icon>mdi-magnify</v-icon>
                                            </v-btn>

                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>

                <v-card>
                    <v-container fluid>
                        <h2>Sugerencias</h2>
                        <v-row>
                            <v-col cols="12" sm="12" md="4">
                                <v-card class="mx-auto" outlined>
                                    <v-list-item three-line>
                                        <v-list-item-content>
                                            <div class="overline mb-4">MEDICINA</div>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-list-item-title class="headline mb-1" v-bind="attrs" v-on="on">H.I.I</v-list-item-title>

                                                </template>
                                                <span>H.I.I</span>
                                            </v-tooltip>
                                            <v-list-item-subtitle>Grupo para compartir experiencias sobre la Hipertensión intracraneal idiopática</v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="80" color="grey">
                                            <v-img :src="require('@/assets/img/stock-27.jpg')"></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-card-actions>
                                        <v-btn text color="teal darken-3">Unirse</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="12" md="4">
                                <v-card class="mx-auto" outlined>
                                    <v-list-item three-line>
                                        <v-list-item-content>
                                            <div class="overline mb-4">MEDICINA</div>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-list-item-title class="headline mb-1" v-bind="attrs" v-on="on">NORD</v-list-item-title>

                                                </template>
                                                <span>NORD</span>
                                            </v-tooltip>
                                            <v-list-item-subtitle>Aliados de la organización nacional para enfermedades raras</v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="80" color="grey">
                                            <v-img :src="require('@/assets/img/stock-28.jpg')"></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-card-actions>
                                        <v-btn text color="teal darken-3">Unirse</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>

                            <v-col cols="12" sm="12" md="4">
                                <v-card class="mx-auto" outlined>
                                    <v-list-item three-line>
                                        <v-list-item-content>
                                            <div class="overline mb-4">MEDICINA</div>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-list-item-title class="headline mb-1" v-bind="attrs" v-on="on">Fliedner Tagesklinik Berlin</v-list-item-title>

                                                </template>
                                                <span>Fliedner Tagesklinik Berlin</span>
                                            </v-tooltip>
                                            <v-list-item-subtitle>Pacientes que han visitado el hospital Fliedner Tagesklinik Berlin</v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="80" color="grey">
                                            <v-img :src="require('@/assets/img/stock-29.jpg')"></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-card-actions>
                                        <v-btn text color="teal darken-3">Unirse</v-btn>
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
import Navigation from '@/components/commons/Navigation.vue'
import {
    mapState,
    mapMutations
} from "vuex";

export default {
    components: {
        Navigation,
    },
    data() {
        return {
            dialog: false,
            radioGroup: 1,
            settings: {
                maxScrollbarLength: 60
            },
            images: [{
                    src: 'stock-23.jpg',
                    categoria: 'Estilo de vida'
                },
                {
                    src: 'stock-24.jpg',
                    categoria: 'Medicina',
                },
                {
                    src: 'stock-25.jpg',
                    categoria: 'Investigación',
                },
                {
                    src: 'stock-26.jpg',
                    categoria: 'Otros'
                }
            ],

            communities: [{
                    img: null,
                    name: 'Lang Group'
                },
                {
                    img: 'stock-30.jpg',
                    name: 'Kuphal-Hane'
                },
                {
                    img: 'stock-31.jpg',
                    name: 'Murazik Group',
                }
            ]
        }
    },
    computed: {
        ...mapState(["mode"]),

    }
}
</script>
