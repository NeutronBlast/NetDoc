<template>
<div>
    <div>
        <vue-custom-scrollbar :settings="settings">
            <v-card class="rounded-0" height="500" color="grey lighten-4" flat>
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
            <!-- PC -->
            <v-row no-gutters class="d-none d-md-flex">
                <v-col md="10">
                    <v-text-field v-model="message" v-on:keyup="prepareToSend" prepend-icon="mdi-attachment" placeholder="Escribe Mensaje" outlined color="teal darken-3">
                    </v-text-field>
                </v-col>

                <v-col md="2" class="d-flex">
                    <v-btn icon class="ml-auto mr-5 mt-3">
                        <v-icon size="x-large">mdi-emoticon-happy</v-icon>
                    </v-btn>
                    <v-btn class="netmsjsend" color="teal lighten-2">
                        <v-icon size="x-large" color="white" @click="send(message)">
                            mdi-send</v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <!-- PHONE -->
            <v-row no-gutters class="d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
                <v-col md="10">
                    <v-text-field v-model="message" v-on:keyup="prepareToSend" prepend-icon="mdi-attachment" placeholder="Escribe Mensaje" outlined color="teal darken-3">
                    </v-text-field>
                </v-col>

                <v-col cols="4">
                    <v-btn icon>
                        <v-icon size="x-large">mdi-emoticon-happy</v-icon>
                    </v-btn>
                    <v-btn class="netmsjsend" color="teal lighten-2">
                        <v-icon size="x-large" color="white" @click="send(message)">
                            mdi-send</v-icon>
                    </v-btn>
                </v-col>
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
    props: ['currentTab'],
    components: {
        vueCustomScrollbar,
    },
    data() {
        return {
            settings: {
                maxScrollbarLength: 60
            },
            message: '',
            /* 0 = Midori, 1 = Frank */
            chat: [{
                    message: "I'm about to welcome change",
                    state: false,
                    avatar: 'stock-5.jpg',
                    col_one: 3,
                    col_two: 8,
                    color: 'teal lighten-4',
                    date: '04/08/2020 11:13 AM',
                    chip: 'netmsjchip'
                },
                {
                    message: 'Looking at the sky',
                    state: true,
                    avatar: 'stock-1.jpg',
                    col_one: 8,
                    col_two: 3,
                    date: '04/08/2020 11:20 AM',
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
                    date: '04/08/2020 11:20 AM',
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
                    date: '04/08/2020 11:13 AM',
                    chip: 'netmsjchip',
                },
                {
                    message: 'Logs',
                    state: true,
                    avatar: 'stock-1.jpg',
                    col_one: 8,
                    col_two: 3,
                    date: '04/08/2020 11:20 AM',
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
                    date: '04/08/2020 11:13 AM',
                    chip: 'netmsjchip'
                },
            ]

        }
    },

    methods: {
        scrollToEnd() {
            setTimeout(() => {
                const container = this.$el.querySelector('.ps-container');
                container.scrollTop = container.scrollHeight;
            }, 0);
        },
        send(message) {
            var options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
            var today = new Date();
            this.chat.push({
                message: message,
                state: true,
                avatar: 'stock-1.jpg',
                col_one: 8,
                col_two: 3,
                date: today.toLocaleDateString("en-US", options),
                class: 'd-flex align-start flex-column',
                color: 'grey lighten-3',
                chip: 'netmsjchip ml-auto'
            })

            this.message = '';

            this.scrollToEnd();
        },

        prepareToSend: function (e) {
            if (e.keyCode == 13) this.send(this.message);
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
}
</script>
