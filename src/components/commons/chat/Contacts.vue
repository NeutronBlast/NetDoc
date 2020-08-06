<template>
<div>
    <v-card class="rounded-0" color="grey lighten-4" flat>
        <v-card-title>
            Contactos
        </v-card-title>

        <v-container>
            <v-row no-gutters>
                <v-col cols="12" sm="12">
                    <v-text-field outlined label="Buscar contactos" prepend-icon="mdi-magnify" color="teal darken-3"></v-text-field>
                </v-col>
            </v-row>

            <v-row no-gutters>
                <vue-custom-scrollbar :settings="settings">
                    <v-card class="rounded-0" height="67vh" width="400" color="grey lighten-5" flat>
                        <v-list>
                            <v-list-item-group v-for="(item, index) in contacts" :key="index">
                                <v-list-item>
                                    <v-list-item-avatar v-if="item.avatar">
                                        <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
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
                                                    <v-list-item @click="$router.push('/profile').catch(()=>{});">
                                                        <v-list-item-title>Ver perfil</v-list-item-title>
                                                    </v-list-item>
                                                    <v-divider></v-divider>
                                                    <v-list-item>
                                                        <v-list-item-title>Eliminar</v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>Bloquear</v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-list-item-title>

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
            settings: {
                maxScrollbarLength: 60
            },

        }
    },

    computed: {
        ...mapState(["mode", "contacts"]),

    }

}
</script>
