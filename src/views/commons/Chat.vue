<template>
<div>
    <Navigation />
    <v-row no-gutters>
        <v-col md="1" cols="12" class="d-none d-md-flex">
            <v-card class="rounded-0" width="100%">
                <v-container fluid>
                    <v-row>
                        <v-col>
                            <div class="text-center">
                                <v-row>
                                    <v-col>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon large color="teal darken-3" v-bind="attrs" v-on="on">
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
                                                <v-btn icon large color="teal darken-3" v-bind="attrs" v-on="on">
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

                                <v-row justify="end">
                                    <v-col class="mx-auto">
                                        <v-avatar>
                                            <img :src="require('@/assets/img/stock-1.jpg')" alt="John">
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                            </div>

                        </v-col>
                    </v-row>
                </v-container>
            </v-card>

        </v-col>

        <v-col cols="12" sm="12" md="3">
            <v-card class="rounded-0" color="grey lighten-5">
                <v-card-title>
                    Mensajes

                    <v-spacer></v-spacer>

                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" color="teal darken-3" depressed fab small>
                                <v-icon color="white">mdi-tools</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Chats archivados</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Chats no leídos</v-list-item-title>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-title>Ayuda</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                </v-card-title>
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="12" sm="12">
                            <v-text-field outlined label="Buscar mensajes" prepend-icon="mdi-magnify" color="teal darken-3"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row no-gutters>
                        <vue-custom-scrollbar :settings="settings">
                            <v-card class="rounded-0" height="508" color="grey lighten-5" flat>
                                <v-list>
                                    <v-list-item-group v-for="(item, index) in msg" :key="index">
                                        <v-list-item v-bind:class="{netmsjunread: item.isNotRead}">
                                            <v-list-item-avatar>
                                                <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-title>{{item.person}}
                                                    <v-menu offset-y>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn icon v-bind="attrs" v-on="on">
                                                                <v-icon>mdi-cogs</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <v-list>
                                                            <v-list-item>
                                                                <v-list-item-title>Silenciar</v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item>
                                                                <v-list-item-title>Archivar</v-list-item-title>
                                                            </v-list-item>
                                                            <v-list-item>
                                                                <v-list-item-title>Eliminar</v-list-item-title>
                                                            </v-list-item>
                                                            <v-divider></v-divider>
                                                            <v-list-item>
                                                                <v-list-item-title>{{message(item.isNotRead).tooltip}}</v-list-item-title>
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
        </v-col>

        <!-- PERSON -->
        <v-col cols="12" sm="12" md="8">
            <v-card class="rounded-0" color="teal lighten-5">
                <v-card-title>
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

            <div>
                <vue-custom-scrollbar :settings="settings">
                    <v-card class="rounded-0" height="508" color="grey lighten-4" flat>
                        <v-container>
                            <v-row no-gutters class="mb-10" v-for="(item, index) in chat" :key="index">
                                <v-spacer v-if="item.state == true"></v-spacer>
                                <v-col cols="12" sm="12" md="4">
                                    <v-row no-gutters>
                                        <v-col :cols="item.col_one" :class="item.class">
                                            <div v-if="item.state == false" class="text-center">
                                                <v-avatar v-if="item.state == false">
                                                    <img :src="require('@/assets/img/'+item.avatar)">
                                                </v-avatar>
                                            </div>

                                            <v-tooltip v-if="item.state == true" bottom>
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-card :class="item.chip" :color="item.color" v-bind="attrs" v-on="on">
                                                        <v-container>
                                                            <v-row no-gutters>
                                                                <v-col>
                                                                    <div>
                                                                        <div v-if="item.message.includes('<img')" v-html="item.message" style="text-align:center">

                                                                        </div>

                                                                        <div v-else>
                                                                            {{item.message}}

                                                                        </div>

                                                                    </div>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
                                                    </v-card>
                                                </template>
                                                <span>{{item.date}}</span>
                                            </v-tooltip>
                                        </v-col>

                                        <v-col :cols="item.col_two">
                                            <v-tooltip bottom v-if="item.state == false">
                                                <template v-slot:activator="{on, attrs}">
                                                    <v-card :class="item.chip" :color="item.color" v-bind="attrs" v-on="on">
                                                        <v-container>
                                                            <v-row no-gutters>
                                                                <v-col>
                                                                    <div>
                                                                        <div v-if="item.message.includes('<img')" v-html="item.message" style="text-align:center">

                                                                        </div>

                                                                        <div v-else>
                                                                            {{item.message}}

                                                                        </div>

                                                                    </div>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
                                                    </v-card>
                                                </template>
                                                <span>{{item.date}}</span>
                                            </v-tooltip>
                                            <div class="text-center" v-else>
                                                <v-avatar v-if="item.state == false">
                                                    <img :src="require('@/assets/img/'+item.avatar)">
                                                </v-avatar>

                                                <v-avatar v-else>
                                                    <img :src="require('@/assets/img/'+info.pfp)">
                                                </v-avatar>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>

                        </v-container>
                    </v-card>
                </vue-custom-scrollbar>
            </div>

            <!-- Send message -->

            <v-card class="rounded-0">
                <v-container>
                    <v-row no-gutters>
                        <v-col sm="10">
                            <v-text-field prepend-icon="mdi-attachment" placeholder="Escribe Mensaje" outlined color="teal darken-3">
                            </v-text-field>
                        </v-col>

                        <v-col cols="2" class="d-flex align-start">
                            <v-btn icon class="ml-auto mr-5 align-self-center mt-n7">
                                <v-icon size="x-large">mdi-emoticon-happy</v-icon>
                            </v-btn>
                            <v-btn class="netmsjsend" color="teal lighten-2">
                                <v-icon size="x-large" color="white">
                                    mdi-send</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>

            </v-card>
        </v-col>
    </v-row>

</div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/commons/Navigation.vue'
import vueCustomScrollbar from 'vue-custom-scrollbar'

import {
    mapState,
    mapMutations
} from "vuex";

export default {

    name: 'Home',
    components: {
        Navigation,
        vueCustomScrollbar
    },
    data() {
        return {
            settings: {
                maxScrollbarLength: 60
            },
            msg: [{
                    avatar: 'stock-4.jpg',
                    person: 'John Willard',
                    message: 'Everything changes when you make it out alive',
                    isNotRead: true
                },
                {
                    avatar: 'stock-5.jpg',
                    person: 'Midori Pavlichenko',
                    message: "What's the first thing you say when you're about to do something irresponsible?",
                    isNotRead: false
                },
                {
                    avatar: 'stock-6.jpg',
                    person: 'Little Pluto',
                    message: "Never had a doubt that I wanna make changes",
                    isNotRead: false
                },
                {
                    avatar: 'stock-7.jpg',
                    person: 'Stephan Schonlau',
                    message: "Set the bait and I'm waiting in a state of concentrating",
                    isNotRead: false
                },
                {
                    avatar: 'stock-8.jpg',
                    person: 'Megan Schmidt',
                    message: '<i class="v-icon notranslate mdi mdi-file-image theme--light mr-1"></i>2020-08-04 08:04.jpg',
                    isNotRead: true
                },
                {
                    avatar: 'stock-9.jpg',
                    person: 'Lisa Schneider',
                    message: `<span style="color:#00bfa5">Escribiendo...</span>`,
                    isNotRead: false
                },
                {
                    avatar: 'stock-10.jpg',
                    person: 'Thomas Danforth',
                    message: `<span style="color:#00bfa5">Escribiendo...</span>`,
                    isNotRead: false
                },
                {
                    avatar: 'stock-11.jpg',
                    person: 'Justin Novak',
                    message: `👁️👄👁️`,
                    isNotRead: false
                },
            ],

            /* 0 = Midori, 1 = Frank */
            chat: [{
                    message: "I'm about to welcome change",
                    state: false,
                    avatar: 'stock-5.jpg',
                    col_one: 3,
                    col_two: 8,
                    color: 'teal lighten-4',
                    date: '04/08/2020 11:13',
                    chip: 'netmsjchip'
                },
                {
                    message: 'Looking at the sky',
                    state: true,
                    avatar: 'stock-1.jpg',
                    col_one: 8,
                    col_two: 3,
                    date: '04/08/2020 11:20',
                    class: 'd-flex align-start flex-column',
                    color: 'grey lighten-3',

                    chip: 'netmsjchip ml-auto'

                },
                {
                    message: 'Hungry',
                    state: true,
                    avatar: 'stock-1.jpg',
                    col_one: 8,
                    col_two: 3,
                    date: '04/08/2020 11:20',
                    class: 'd-flex align-start flex-column',
                    color: 'grey lighten-3',

                    chip: 'netmsjchip ml-auto'
                },
                {
                    message: '<img class="netmsjimg" src="https://i.picsum.photos/id/630/200/300.jpg?grayscale&hmac=gTtOzMbZdOc-a5xbYZ0p3Wydvtcme2nc2shLX6aJyeU">',
                    state: false,
                    avatar: 'stock-5.jpg',
                    col_one: 3,
                    col_two: 8,
                    color: 'teal lighten-4',
                    date: '04/08/2020 11:13',
                    chip: 'netmsjchip',
                },
                {
                    message: 'Logs',
                    state: true,
                    avatar: 'stock-1.jpg',
                    col_one: 8,
                    col_two: 3,
                    date: '04/08/2020 11:20',
                    class: 'd-flex align-start flex-column',
                    color: 'grey lighten-3',
                    chip: 'netmsjchip ml-auto'
                },
                {
                    message: "What's the first thing you say when you're about to do something irresponsible?",
                    state: false,
                    avatar: 'stock-5.jpg',
                    col_one: 3,
                    col_two: 8,
                    color: 'teal lighten-4',
                    date: '04/08/2020 11:13',
                    chip: 'netmsjchip'
                },
            ]

        }
    },
    methods: {
        message(isNotRead) {
            var option = {
                tooltip: 'Marcar como no leído'
            };

            if (isNotRead == true) {
                option.tooltip = 'Marcar como leído'

            } else {
                option.tooltip = 'Marcar como no leído';
            }
            return option;
        },
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
}
</script>
