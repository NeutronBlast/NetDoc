<template>
<div>
    <v-app-bar height="60px" src="@/assets/img/stock-2.jpeg">

        <!-- Logo -->
        <v-app-bar-nav-icon class="d-none d-sm-flex">
            <v-img class="ml-9" src="@/assets/img/logo-3.png" height="70px" width="70px" @click="$router.push('/').catch(()=>{}); ">
            </v-img>
        </v-app-bar-nav-icon>

        <!-- Right side of the bar -->
        <v-spacer></v-spacer>

        <v-tooltip bottom>
            <template v-slot:activator=" { on, attrs }">
                <v-btn icon class="mr-2" v-bind="attrs" v-on="on" @click="$router.push('/communities').catch(()=>{});">
                    <v-icon>mdi-account-group</v-icon>
                </v-btn>

            </template>
            <span>Comunidades</span>
        </v-tooltip>

        <!-- Messages -->
        <v-menu offset-y transition="scale-transition" :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-on="on" v-bind="attrs" class="mr-1">
                    <v-badge color="red" :content="nunreads" v-if="nunreads > 0">
                        <v-icon>mdi-message</v-icon>
                    </v-badge>

                    <v-btn icon v-else>
                        <v-icon>mdi-message</v-icon>
                    </v-btn>
                </v-btn>
            </template>

            <!-- Views -->
            <v-card class="mx-auto" max-width="400" outlined>

                <v-list>
                    <v-subheader>MENSAJES</v-subheader>
                    <v-list-item-group v-for="(item, index) in msg" v-bind:key="index">
                        <v-list-item @click="$router.push('/chat').catch(()=>{})" v-bind:class=" {netmsjunread: item.isNotRead}">
                            <v-list-item-avatar class="mt-3">
                                <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{item.person}}
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn icon class="mr-2" v-bind="attrs" v-on="on">
                                                <v-icon @click="item.isNotRead = !item.isNotRead">{{message(item.isNotRead).icon}}</v-icon>
                                            </v-btn>

                                        </template>
                                        <span>{{message(item.isNotRead).tooltip}}</span>
                                    </v-tooltip>
                                </v-list-item-title>
                                <v-list-item-subtitle class="mt-n1">{{item.message}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>

                <v-card-actions>
                    <v-btn text small @click="allRead()">Marcar todo como leído</v-btn>
                    <v-spacer></v-spacer>

                    <v-btn text small @click="$router.push('chat')">Ver todo</v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>

        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="mr-2" v-bind="attrs" v-on="on" @click="$router.push('/help').catch(()=>{});">
                    <v-icon>mdi-help</v-icon>
                </v-btn>

            </template>
            <span>Ayuda</span>
        </v-tooltip>

        <!-- Avatar -->
        <v-menu offset-y transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
                <div v-on="on" v-bind="attrs">
                    <v-list-item>
                        <v-list-item-avatar>
                            <img :src="require('@/assets/img/'+info.pfp)">
                        </v-list-item-avatar>

                        <v-list-item-content class="d-none d-sm-flex mr-n16">
                            <v-list-item-title>{{info.name}}</v-list-item-title>
                            <v-list-item-subtitle>{{info.username}}</v-list-item-subtitle>
                        </v-list-item-content>

                    </v-list-item>

                </div>
            </template>

            <!-- Views -->
            <v-list>
                <v-subheader v-if="mode == 1">VISTAS (MÉDICO)</v-subheader>
                <v-subheader v-else>VISTAS (PACIENTE)</v-subheader>

                <v-list-item-group color="teal">
                    <v-list-item>
                        <v-icon left color="cyan darken-4">mdi-home</v-icon>
                        <v-list-item-content @click="$router.push('/').catch(()=>{})">
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-icon left color="cyan darken-4">mdi-login</v-icon>
                        <v-list-item-content @click="$router.push('/login').catch(()=>{})">
                            <v-list-item-title>Login</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-icon left color="cyan darken-4">mdi-account-plus</v-icon>
                        <v-list-item-content @click="$router.push('/register').catch(()=>{})">
                            <v-list-item-title>Registro</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-icon left color="cyan darken-4">mdi-lock</v-icon>
                        <v-list-item-content @click="$router.push('/recovery').catch(()=>{})">
                            <v-list-item-title>Recuperación</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>

                    <v-list-item @click="$router.push('/profile').catch(()=>{});">
                        <v-icon left color="cyan darken-4">mdi-account</v-icon>
                        <v-list-item-content>
                            <v-list-item-title>Perfil</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <!-- Exclusive views -->
                    <div v-if="mode == 1">
                        <v-divider></v-divider>
                        <v-list-item @click="$router.push('/list-research').catch(()=>{});">
                            <v-icon left color="cyan darken-4">mdi-account-search</v-icon>
                            <v-list-item-content>
                                <v-list-item-title>Investigaciones</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item @click="$router.push('/patients').catch(()=>{});">
                            <v-icon left color="cyan darken-4">mdi-medical-bag</v-icon>
                            <v-list-item-content>
                                <v-list-item-title>Pacientes</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </div>

                    <v-divider></v-divider>
                    <v-list-item>
                        <v-icon left color="cyan darken-4">mdi-bandage</v-icon>
                        <v-list-item-content>
                            <v-list-item-title @click="$router.push('/diseases').catch(()=>{});">Enfermedades</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>

                    <!-- Switch -->
                    <v-list-item v-if="mode == 1">
                        <v-list-item-content>
                            <v-list-item-title @click="setMode(2)">Vista de paciente</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-else>
                        <v-list-item-content>
                            <v-list-item-title @click="setMode(1)">Vista de médico</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </v-app-bar>
</div>
</template>

<script>
import {
    mapState,
    mapMutations
} from "vuex";

export default {
    data() {
        return {
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
                }
            ],
        }
    },
    methods: {
        ...mapMutations(['setMode']),

        unread() {
            this.isNotRead = false;
        },

        read() {
            this.isNotRead = true;
        },

        message(isNotRead) {
            var option = {
                icon: 'mdi-email-mark-as-unread',
                tooltip: 'Marcar como no leído'
            };

            if (isNotRead == true) {
                option.icon = 'mdi-email-check';
                option.tooltip = 'Marcar como leído'

            } else {
                option.icon = 'mdi-email-mark-as-unread';
                option.tooltip = 'Marcar como no leído';
            }
            return option;
        },

        msgState(obj) {
            return (obj.isNotRead == true);
        },

        allRead() {
            var i, n = this.msg.length;
            for (i = 0; i < n; ++i) {
                this.msg[i].isNotRead = false;
            }
        }
    },
    computed: {
        ...mapState(["mode"]),

        info() {
            var user = {
                name: '',
                username: '',
                pfp: '',
            };

            (this.mode == 1) ? user.name = 'Frank Hesse': user.name = 'Leo Barnes';
            (this.mode == 1) ? user.username = 'NeutronBlast': user.username = 'EternalGrey';
            (this.mode == 1) ? user.pfp = 'stock-1.jpg': user.pfp = 'stock-3.jpg';
            return user;
        },

        nunreads() {
            return this.msg.filter(this.msgState).length;
        }
    }
}
</script>
