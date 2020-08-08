<template>
<div>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="12">
                <h2 class="mb-4">Últimos posts</h2>
                <v-card v-for="(item, index) in posts" :key="index" class="mx-auto mb-5">
                    <v-list-item>
                        <v-list-item-avatar color="teal">
                            <span class="white--text" v-if="!info.pfp">{{item.name[0]}}</span>
                            <v-img v-else :src="require('@/assets/img/'+info.pfp)"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-container>
                    <v-row v-if="item.img">
                        <v-img :src="require('@/assets/img/'+item.img)" :lazy-src="require('@/assets/img/'+item.img)" class="grey lighten-2 mx-auto" max-height="300"></v-img>
                    </v-row>
                    </v-container>

                    <v-row>
                        <v-col>
                            <v-card-text class="text-justify">{{item.content}}</v-card-text>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn outlined color="teal" class="mb-3">Ir a Post</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>
    </v-container>

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
            posts: [{
                    img: null,
                    name: "Jean Kowalski",
                    title: "Lang Group",
                    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magni quam, quod quos sequi enim odio illum nostrum facilis officia eveniet libero placeat explicabo? Fugiat facere, ratione cum ut omnis vitae voluptas eligendi necessitatibus sapiente pariatur molestiae, dolor amet illo quae nemo vel adipisci? Repudiandae maxime rerum ex sint commodi.",
                },
                {
                    img: "stock-34.jpg",
                    name: "Lisa McCleod",
                    title: "Lang Group",
                    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, incidunt. Architecto est nesciunt autem temporibus nemo ad laudantium dolorum sit eos similique consectetur porro, quidem laborum pariatur odit ducimus! Odit voluptate quisquam repellendus est unde tempore fuga fugiat quam ipsum perspiciatis rem labore, sit quasi dicta sunt asperiores iste? Laborum exercitationem officiis rem. Deserunt tempora beatae, excepturi nesciunt aspernatur corporis saepe sequi fugit corrupti obcaecati vitae soluta laboriosam suscipit exercitationem?",
                },
            ],
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
    }
}
</script>
