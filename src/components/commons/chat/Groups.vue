<template>
<div>
    <v-card class="rounded-0" color="grey lighten-4" flat>
        <v-card-title>
            Grupos
            <v-spacer></v-spacer>
            <!-- CREATE GROUP -->
            <v-dialog v-model="dialog" max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="teal darken-3" fab small v-bind="attrs" v-on="on">
                        <v-icon color="white">mdi-account-multiple-plus</v-icon>
                    </v-btn>

                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">Crear grupo</span>
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

                            <v-card class="mx-auto" flat>
                                <v-toolbar color="teal lighten-5" flat>
                                    <v-toolbar-title class="black--text">Personas</v-toolbar-title>
                                </v-toolbar>

                                <v-list subheader two-line flat>
                                    <v-text-field class="mt-6" outlined label="Buscar contactos" prepend-icon="mdi-magnify" color="teal darken-3"></v-text-field>

                                    <v-list-item-group v-model="members" multiple>
                                        <v-list-item v-for="(item, index) in contacts" :key="index">

                                            <template v-slot:default="{ active }">

                                                <v-list-item-action>
                                                    <v-checkbox :input-value="active" color="teal"></v-checkbox>
                                                </v-list-item-action>
                                                <v-list-item-avatar>
                                                    <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
                                                </v-list-item-avatar>
                                                <v-list-item-content class="ml-4">
                                                    <v-list-item-title>{{item.name}}</v-list-item-title>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>

                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="teal darken-3" text @click="dialog = false">CANCELAR</v-btn>
                        <v-btn color="teal darken-3" text @click="dialog = false">CREAR</v-btn>
                    </v-card-actions>

                </v-card>

            </v-dialog>

        </v-card-title>

        <v-container>
            <v-row no-gutters>
                <v-col cols="12" sm="12">
                    <v-text-field outlined label="Buscar grupos" prepend-icon="mdi-magnify" color="teal darken-3"></v-text-field>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <vue-custom-scrollbar :settings="settings">
                    <v-card class="rounded-0" height="67vh" width="400" color="grey lighten-5" flat>
                        <v-list>
                            <v-list-item-group v-for="(item, index) in msg" :key="index">
                                <v-list-item>
                                    <v-list-item-avatar v-if="item.avatar">
                                        <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-avatar v-else>
                                        <v-avatar :color="randomColor">
                                            <span class="white--text">{{item.name[0]}}</span>
                                        </v-avatar>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>{{item.name}}
                                            <v-menu offset-y>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn icon v-bind="attrs" v-on="on">
                                                        <v-icon>mdi-dots-vertical</v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item>
                                                        <v-list-item-title>Marcar como no leído</v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>Silenciar</v-list-item-title>
                                                    </v-list-item>
                                                    <v-divider></v-divider>
                                                    <v-list-item>
                                                        <v-list-item-title>Salir</v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-list-item-title>
                                        <v-list-item-subtitle v-html="item.message">

                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>

                    </v-card>
                </vue-custom-scrollbar>

            </v-row>
        </v-container>
    </v-card>
</div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import {
    mapState,
    mapMutations
} from "vuex";

export default {
    components: {
        vueCustomScrollbar
    },
    data() {
        return {
            dialog: false,
            settings: {
                maxScrollbarLength: 60
            },
            members: [],
            colors: ['teal darken-3', 'blue darken-3', 'cyan darken-3', 'blue-grey darken-2'],

            msg: [{
                    avatar: null,
                    name: 'Technik Dev',
                    message: "<strong>Leo: </strong>:)",
                }, {
                    avatar: 'stock-15.jpg',
                    name: 'NetDoc OGs',
                    message: '<strong>Johan: </strong>Hands down',
                }, {
                    avatar: null,
                    name: 'UCAB Allies',
                    message: '<strong>Ria: </strong><i class="v-icon notranslate mdi mdi-file-image theme--light mr-1"></i>2020-08-06 06:45.jpg',
                }, {
                    avatar: 'stock-13.jpg',
                    name: 'Carlos, Andres, Midori, Tú',
                    message: '<strong>Andres: </strong>Lorem ipsum dolor',
                },
                {
                    avatar: 'stock-14.jpg',
                    name: 'General',
                    message: '<strong>Tú: </strong>Hello everyone',
                },

            ],
        }
    },

    computed: {
        ...mapState(["mode", "contacts"]),

        randomColor() {
            return this.colors[Math.floor(Math.random() * this.colors.length)];
        }
    }

}
</script>
