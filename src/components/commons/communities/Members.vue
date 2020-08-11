<template>
<div>
    <v-card class="mx-auto" outlined>
        <v-list>
            <v-subheader>ADMINISTRADORES</v-subheader>
            <v-list-item-group v-for="(item, index) in adm" v-bind:key="index">
                <v-list-item>
                    <v-list-item-avatar class="mt-3">
                        <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{item.person}}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-icon @click="$router.push('/chat').catch(()=>{})">
                        <v-icon color="teal darken-3">mdi-message</v-icon>
                    </v-list-item-icon>

                    <v-list-item-icon>
                        <v-icon color="teal darken-3">mdi-account-plus</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>

    <v-card class="mx-auto mt-5" outlined>
        <v-list>
            <v-subheader>CONTACTOS</v-subheader>
            <v-list-item-group v-for="(item, index) in adm" v-bind:key="index">
                <v-list-item>
                    <v-list-item-avatar class="mt-3">
                        <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{item.person}}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-icon @click="$router.push('/chat').catch(()=>{})">
                        <v-icon color="teal darken-3">mdi-message</v-icon>
                    </v-list-item-icon>

                    <v-list-item-icon>
                        <v-icon color="teal darken-3">mdi-account-plus</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>

    <v-card class="mx-auto mt-5" outlined>
        <v-list>
            <v-subheader>OTROS</v-subheader>
            <v-list-item-group v-for="(item, index) in other" v-bind:key="index">
                <v-list-item>
                    <v-list-item-avatar class="mt-3">
                        <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{item.person}}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-icon @click="$router.push('/chat').catch(()=>{})">
                        <v-icon color="teal darken-3">mdi-message</v-icon>
                    </v-list-item-icon>

                    <v-list-item-icon>
                        <v-icon color="teal darken-3">mdi-account-plus</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            adm: [{
                    avatar: 'stock-4.jpg',
                    person: 'John Willard',
                },
                {
                    avatar: 'stock-5.jpg',
                    person: 'Midori Pavlichenko',
                },
                {
                    avatar: 'stock-6.jpg',
                    person: 'Little Pluto',
                }
            ],

            other: [{
                    avatar: 'stock-7.jpg',
                    person: 'Stephan Schonlau',
                },
                {
                    avatar: 'stock-8.jpg',
                    person: 'Megan Schmidt',
                },
                {
                    avatar: 'stock-9.jpg',
                    person: 'Lisa Schneider',

                }
            ]
        }
    },
}
</script>
