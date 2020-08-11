<template>
<div>
    <v-card flat tile>
        <v-toolbar dense flat>
            <v-toolbar-title>Comunidades</v-toolbar-title>
        </v-toolbar>

        <v-divider></v-divider>
        <vue-custom-scrollbar :settings="settings">
            <v-card max-width="450" class="mx-auto rounded-0" flat>
                <v-list>
                    <v-list-item-group v-for="(item, index) in communities" :key="index" color="teal">
                        <v-list-item @click="$router.push('/community').catch(()=>{})">
                            <v-list-item-avatar v-if="!item.avatar">
                                <v-avatar color="teal darken-3">
                                    <span class="white--text" v-if="!item.img">{{item.name[0]}}</span>
                                    <v-img v-else :src="require('@/assets/img/'+item.img)"></v-img>
                                </v-avatar>
                            </v-list-item-avatar>
                            <v-list-item-content class="mt-n4">{{item.name}}</v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </vue-custom-scrollbar>
    </v-card>
</div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
    components: {
        vueCustomScrollbar,

    },
    data() {
        return {
            settings: {
                maxScrollbarLength: 60,
            },
            communities: [{
                    img: null,
                    name: "Sauer LLC"

                },
                {
                    img: null,
                    name: "Lang Group",
                },
                {
                    img: "stock-30.jpg",
                    name: "Kuphal-Hane",
                },
                {
                    img: "stock-31.jpg",
                    name: "Murazik Group",
                },
            ],
        }
    }
}
</script>
