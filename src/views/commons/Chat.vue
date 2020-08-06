<template>
<div class="netfill">
    <Navigation />

    <!-- Toolbar PC -->
    <v-row no-gutters>
        <v-col md="1" cols="12" class="d-none d-md-flex">
            <v-card class="rounded-0" height="92vh" width="100%" flat>
                <v-container fluid>
                    <v-row>
                        <v-col>
                            <div class="text-center">
                                <v-row>
                                    <v-col>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon large color="teal darken-3" v-bind="attrs" v-on="on" @click="currentTabPC = 'RecentMessages'">
                                                    <v-icon>mdi-message</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Chats</span>
                                        </v-tooltip>
                                    </v-col>

                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon large color="teal darken-3" v-bind="attrs" v-on="on" @click="currentTabPC = 'Groups'">
                                                    <v-icon>mdi-account-multiple</v-icon>
                                                </v-btn>

                                            </template>
                                            <span>Grupos</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon large color="teal darken-3" v-bind="attrs" v-on="on">
                                                    <v-icon>mdi-contacts</v-icon>
                                                </v-btn>

                                            </template>
                                            <span>Contactos</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon large color="teal darken-3" v-bind="attrs" v-on="on">
                                                    <v-icon>mdi-tools</v-icon>
                                                </v-btn>

                                            </template>
                                            <span>Configuración</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col class="mx-auto">
                                        <v-avatar>
                                            <img :src="require('@/assets/img/'+info.pfp)" alt="John">
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                            </div>

                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>

        <!-- Left tab PC -->
        <v-col cols="12" sm="12" md="3">
            <component v-bind:is="currentTabPC" class="d-none d-md-block">
            </component>
            <!--<RecentMessages class="d-none d-md-block" />-->
        </v-col>

        <!-- Dynamic view Phone -->
        <v-col cols="12" sm="12" md="8">
            <v-card class="rounded-0 d-block d-sm-block d-md-none d-lg-none d-xl-none" color="teal lighten-5" v-if="currentTab == 'Messages'">
                <v-card-title>
                    <v-btn icon class="d-flex d-sm-flex d-md-none d-lg-none d-xl-none" @click="currentTab = 'RecentMessages'">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-avatar class="ml-3">
                        <img :src="require('@/assets/img/stock-5.jpg')" alt="John">
                    </v-avatar>
                    <h6 class="ml-3">Midori Pavlichenko</h6>
                    <v-spacer></v-spacer>
                    <v-menu offset-y transition="scale-transition" :close-on-content-click="false">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>
                                    <v-text-field label="Buscar mensajes" color="teal darken-3"></v-text-field>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon>mdi-do-not-disturb</v-icon>
                            </v-btn>

                        </template>
                        <span>Bloquear</span>
                    </v-tooltip>

                </v-card-title>
            </v-card>

            <v-card class="rounded-0 d-none d-md-block" color="teal lighten-5">
                <v-card-title>
                    <v-btn icon class="d-flex d-sm-flex d-md-none d-lg-none d-xl-none" @click="currentTab = 'RecentMessages'">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-avatar class="ml-3">
                        <img :src="require('@/assets/img/stock-5.jpg')" alt="John">
                    </v-avatar>
                    <h5 class="ml-3">Midori Pavlichenko</h5>
                    <v-spacer></v-spacer>
                    <v-menu offset-y transition="scale-transition" :close-on-content-click="false">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>
                                    <v-text-field label="Buscar mensajes" color="teal darken-3"></v-text-field>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon>mdi-do-not-disturb</v-icon>
                            </v-btn>

                        </template>
                        <span>Bloquear</span>
                    </v-tooltip>

                </v-card-title>
            </v-card>

            <div class="d-block d-sm-block d-md-none d-lg-none d-xl-none">
                <component :tab="currentTab" v-on:message="message" v-bind:is="currentTab">
                </component>

                <v-row no-gutters class="d-flex d-sm-flex d-md-none d-lg-none d-xl-none" v-if="currentTab != 'Messages'">
                    <v-col sm="12">
                        <v-card color="teal lighten-5">
                            <v-container>
                                <v-row no-gutters class="mt-1">
                                    <v-col class="ml-3">
                                        <v-btn icon color="teal darken-3" @click="currentTab = 'RecentMessages'">
                                            <v-icon>mdi-message</v-icon>
                                        </v-btn>
                                    </v-col>
                                    <v-col>
                                        <v-btn icon color="teal darken-3" @click="currentTab = 'Groups'">
                                            <v-icon>mdi-account-multiple</v-icon>
                                        </v-btn>

                                    </v-col>
                                    <v-col>

                                        <v-btn icon color="teal darken-3">
                                            <v-icon>mdi-contacts</v-icon>
                                        </v-btn>

                                    </v-col>
                                    <v-col>

                                        <v-btn icon color="teal darken-3">
                                            <v-icon>mdi-tools</v-icon>
                                        </v-btn>
                                    </v-col>

                                    <v-col>
                                        <v-avatar class="mt-n1">
                                            <img :src="require('@/assets/img/stock-1.jpg')">
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </div>

            <component :is="RecentMessages" class="d-none d-md-block">
            </component>
        </v-col>
    </v-row>
</div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/commons/Navigation.vue'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import RecentMessages from '@/components/commons/chat/RecentMessages.vue'
import Messages from '@/components/commons/chat/Messages.vue'
import Groups from '@/components/commons/chat/Groups.vue'

import {
    mapState,
    mapMutations
} from "vuex";

export default {
    components: {
        Navigation,
        vueCustomScrollbar,
        RecentMessages,
        Messages,
        Groups
    },
    data() {
        return {
            currentTabPC: "RecentMessages",
            currentTab: "Messages",
            RecentMessages: "Messages",
        }
    },
    computed: {
        ...mapState(["mode"]),
        info() {
            var user = {
                pfp: '',
            };

            (this.mode == 1) ? user.pfp = 'stock-1.jpg': user.pfp = 'stock-3.jpg';
            return user;
        },

    },

    methods: {
        message(value) {
            this.currentTab = value;
        }
    }

}
</script>
