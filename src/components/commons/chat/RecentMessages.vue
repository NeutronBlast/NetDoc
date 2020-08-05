<template>
<div>
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
                                <v-list-item v-on:click="sendTab" v-bind:class="{netmsjunread: item.isNotRead}" >
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
</div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
    props: {
        tab: String
    },

    components: {
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

        sendTab(){
            var ct = 'Messages';
            this.$emit('message', ct);
        }

    },

}
</script>
