<template>
<div>
    <Navigation />

    <div class="container-2">
        <v-row no-gutters class="mt-5">
            <v-col cols="12" sm="12" md="3">
                <v-card flat>
                    <v-img class="mx-auto" src="@/assets/img/stock-22.jpg" max-width="200px">
                    </v-img>
                    <h2 class="text-center">{{info.name}}</h2>
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="9">
                <v-card flat>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="6">
                                <h3>Detalles personales</h3>

                                <v-list>
                                    <v-list-item-group v-model="model">
                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon>mdi-map-marker</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>Memphis, Tennessee, USA</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon>mdi-phone</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>+123456789</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon>mdi-email</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>fh@gmail.ca</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>

                                <v-divider></v-divider>
                                <h3 class="mt-3">Sobre mi</h3>
                                <p class="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum qui inventore cumque vel aliquid ducimus maxime, dolor laboriosam praesentium corporis doloribus saepe temporibus veniam quo velit, hic perferendis facilis! Cumque maxime ducimus facere dolorem odit aspernatur sit perspiciatis sed animi nulla, impedit blanditiis dolores recusandae quaerat totam dicta mollitia!</p>
                            </v-col>

                            <v-col cols="12" sm="12" md="6">
                                s
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>

        </v-row>
    </div>

</div>
</template>

<script>
import Navigation from '@/components/commons/Navigation.vue'
import {
    mapState,
    mapMutations
} from "vuex";

export default {
    components: {
        Navigation,
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
    }
}
</script>
