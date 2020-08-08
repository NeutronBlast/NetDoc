<template>
<div>
    <Navigation />

    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="3">
                <v-card outlined flat>
                    <!-- Profile pic -->
                    <v-img class="img-responsive mx-auto rounded-circle" :src="require('@/assets/img/'+info.pfp)" height="200" width="200"></v-img>
                    <div class="text-center">
                        <h1>{{info.name}}</h1>
                        <h3 class="font-weight-regular">{{info.role}}</h3>
                    </div>
                    <v-divider></v-divider>

                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <h3 class="mb-2">Sobre mí</h3>
                                <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae similique iste, architecto voluptatum voluptates maiores? Quas, soluta dignissimos accusamus dolorem repellendus fugit provident ipsum! Id quas ducimus soluta rem nemo?</p>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-row>
                            <v-col cols="12" sm="12">
                                <h3 class="mb-2">Otras redes</h3>
                                <v-icon class="mr-2" color="teal darken-3">mdi-facebook</v-icon>
                                <v-icon class="mr-2" color="teal darken-3">mdi-instagram</v-icon>
                                <v-icon class="mr-2" color="teal darken-3">mdi-twitter</v-icon>
                                <v-icon class="mr-2" color="teal darken-3">mdi-linkedin</v-icon>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <h3 class="mb-2">Acciones</h3>
                                <v-btn block text outlined color="teal" @click="$router.push('/chat').catch(()=>{})">
                                    <v-icon left>mdi-message</v-icon>Enviar mensaje
                                </v-btn>
                                <v-btn block text outlined color="teal">
                                    <v-icon left>mdi-account-plus</v-icon>Añadir a contactos
                                </v-btn>
                                <v-btn block text outlined color="teal">
                                    <v-icon left>mdi-do-not-disturb</v-icon>Bloquear usuario
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" :md="info.colmd">
                <v-card>
                    <v-tabs color="teal">
                        <v-tab @click="currentTab = 'Overview'">Vista previa</v-tab>
                        <v-tab @click="currentTab = 'Edit'">Editar</v-tab>
                    </v-tabs>

                    <component :is="currentTab"></component>
                </v-card>
            </v-col>

            <v-col v-if="mode == 1" cols="12" sm="12" md="3">
                <v-card max-width="450" class="mx-auto">
                    <v-list>
                        <v-list-item-title class="ml-3">INVESTIGACIONES</v-list-item-title>
                    </v-list>
                    <v-divider></v-divider>
                    <v-col v-for="res in research" :key="res.id">
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
                                <v-btn text color="teal darken-3" @click="$router.push('/research').catch(()=>{})">Ver investigación</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Navigation from "@/components/commons/Navigation.vue";
import Overview from "@/components/commons/profile/Overview.vue";
import Edit from "@/components/commons/profile/Edit.vue";

import {
    mapState,
    mapMutations
} from "vuex";

export default {
    components: {
        Navigation,
        Overview,
        Edit
    },
    data() {
        return {
            currentTab: 'Overview',
            research: [{
                    id: '1',
                    type: 'INVESTIGACIÓN',
                    name: 'Amiloidosis Sistémica',
                    description: 'Herramienta para diagnosticar la amiloidosis sistémica',
                    img: 'stock-101.jpg',
                },
                {
                    id: '5',
                    type: 'TRATAMIENTO',
                    name: 'Enfermedad de Gaucher',
                    description: 'La UPO, en colaboración con el CSIC y la US, patenta un tratamiento para las enfermedades lisosomales',
                    img: 'stock-105.jpg',
                },
                {
                    id: '10',
                    type: 'INVESTIGACIÓN',
                    name: 'Colitis Colágena',
                    description: 'Descubren marcadores genéticos para luchar contra una enfermedad gastrointestinal poco estudiada',
                    img: 'stock-110.jpg',
                }

            ],
        }
    },
    computed: {
        ...mapState(["mode"]),
        info() {
            var user = {
                name: "",
                username: "",
                role: "",
                pfp: "",
                colmd: "",
            };

            this.mode == 1 ? (user.name = "Frank Hesse") : (user.name = "Leo Barnes");
            this.mode == 1 ? (user.username = "NeutronBlast") : (user.username = "EternalGrey");
            this.mode == 1 ? (user.role = "Médico") : (user.role = "");
            this.mode == 1 ? (user.pfp = "stock-1.jpg") : (user.pfp = "stock-3.jpg");
            this.mode == 1 ? (user.colmd = 6) : (user.colmd = 9);

            return user;
        },
    },
}
</script>
