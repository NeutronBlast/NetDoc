<template>
<div>
    <Navigation />
    <div class="container-2">
        <v-row>
            <v-col cols="12" sm="12" md="2">
                <v-card flat tile class="mb-9">
                    <v-toolbar dense flat>
                        <v-toolbar-title>Lang Group</v-toolbar-title>
                    </v-toolbar>

                    <v-divider></v-divider>
                    <v-card max-width="450" class="mx-auto rounded-0" flat>
                        <v-list>
                            <v-list-item-group color="teal">
                                <v-list-item @click="currentTab = 'Rules'">
                                    <v-list-item-avatar>
                                        <v-avatar color="teal darken-3">
                                            <span>
                                                <v-icon color="white">mdi-information</v-icon>
                                            </span>
                                        </v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content class="mt-n4">Reglas</v-list-item-content>
                                </v-list-item>

                                <v-list-item @click="currentTab = 'Posts'">
                                    <v-list-item-avatar>
                                        <v-avatar color="teal darken-3">
                                            <span>
                                                <v-icon color="white">mdi-pencil</v-icon>
                                            </span>
                                        </v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content class="mt-n4">Posts</v-list-item-content>
                                </v-list-item>

                                <v-list-item @click="currentTab = 'Members'">
                                    <v-list-item-avatar>
                                        <v-avatar color="teal darken-3">
                                            <span>
                                                <v-icon color="white">mdi-account</v-icon>
                                            </span>
                                        </v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-content class="mt-n4">Miembros</v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-card>

                <Shorcuts />
            </v-col>

            <v-col cols="12" sm="12" md="7">
                <component :is="currentTab"></component>
            </v-col>

            <v-col cols="12" sm="12" md="3" class="d-none d-md-block">
                <People />
            </v-col>
        </v-row>
    </div>
</div>
</template>

<script>
import Navigation from '@/components/commons/Navigation.vue'
import Shorcuts from '@/components/commons/communities/Shorcuts.vue'
import Posts from '@/components/commons/communities/Posts.vue'
import Rules from '@/components/commons/communities/Rules.vue'
import Members from '@/components/commons/communities/Members.vue'
import People from '@/components/commons/People.vue'
import {
    mapState,
    mapMutations
} from "vuex";

export default {
    components: {
        Navigation,
        Shorcuts,
        Posts,
        Rules,
        Members,
        People,
    },

    data() {
        return {
            currentTab: 'Posts',
        }
    },
    computed: {
        ...mapState(["mode", "contacts"]),

    }
}
</script>
