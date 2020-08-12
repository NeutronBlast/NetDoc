<template>
<div>
    <v-card flat>
        <v-toolbar src="@/assets/img/stock-38.jpg" color="teal" dark extended flat height="200px" class="d-flex flex-row-reverse align-end">
            <v-row style="align-self:end" no-gutters class="mb-4">
                <!-- Options -->
                <v-col cols="12" sm="12">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="mr-2" color="teal" dark v-bind="attrs" v-on="on">
                                <v-icon left>mdi-check</v-icon> Miembro
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item-group>
                                <v-list-item>
                                    <v-list-item-title>Abandonar comunidad</v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>

                    <v-btn color="teal" @click.stop="dialog = true" class="d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
                        <v-icon left>mdi-plus</v-icon>Invitar
                    </v-btn>

                    <v-dialog v-model="dialog">
                        <People :dialog="dialog" v-on:dialog="dialogstate" />
                    </v-dialog>
                </v-col>
            </v-row>
        </v-toolbar>
    </v-card>

    <!-- PUBLISH -->

    <v-card class="mb-5 mt-5">
        <v-container>
            <h2>Publicar</h2>
            <form class="mt-3">
                <v-textarea v-model="post.content" outlined color="teal" label="Contenido"></v-textarea>
                <v-file-input v-model="post.picture" show-size color="teal" label="Cargar archivos"></v-file-input>

                <!-- Buttons -->
                <v-row class="d-flex flex-row-reverse mt-5">
                    <v-btn @click="clear()" outlined color="red" class="mr-2">LIMPIAR</v-btn>
                    <v-btn class="mr-4" color="teal" outlined @click="publish()">PUBLICAR</v-btn>
                </v-row>

            </form>
        </v-container>
    </v-card>

    <v-card v-for="(item, index) in posts" :key="index" class="mx-auto mb-5 mt-5">
        <v-list-item>
            <v-list-item-avatar color="teal">
                <span class="white--text" v-if="!item.author.avatar">{{item.author.name[0]}}</span>
                <v-img v-else :src="require('@/assets/img/'+item.author.avatar)"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="netgtitle">
                    <router-link to="profile" class="teal--text netglink">{{item.author.name}}</router-link>
                </v-list-item-title>
                <v-list-item-subtitle>
                    <v-icon x-small color="teal">mdi-clock</v-icon> {{item.date}}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-container>
            <v-row v-if="item.img">
                <v-img contain :src="require('@/assets/img/'+item.img)" :lazy-src="require('@/assets/img/'+item.img)" class="grey lighten-5 mx-auto" max-height="300"></v-img>
            </v-row>
        </v-container>

        <v-row>
            <v-col>
                <v-card-text class="text-justify">{{item.content}}</v-card-text>
            </v-col>
        </v-row>
    </v-card>
    <v-btn block color="teal lighten-5">Ver más</v-btn>

</div>
</template>

<script>
import People from '@/components/commons/People.vue'
import {
    mapState,
    mapMutations
} from "vuex";
export default {
    components: {
        People,
    },
    data() {
        return {
            dialog: false,
            post: {
                title: null,
                group: null,
                content: null,
                picture: null,
            },
            posts: [{
                    img: null,
                    title: "Lang Group",
                    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magni quam, quod quos sequi enim odio illum nostrum facilis officia eveniet libero placeat explicabo? Fugiat facere, ratione cum ut omnis vitae voluptas eligendi necessitatibus sapiente pariatur molestiae, dolor amet illo quae nemo vel adipisci? Repudiandae maxime rerum ex sint commodi.",
                    author: {
                        name: 'John Willard',
                        avatar: 'stock-4.jpg'
                    },
                    date: '11/08/2020, 03:57 PM'
                },
                {
                    img: "stock-34.jpg",
                    title: "Lang Group",
                    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, incidunt. Architecto est nesciunt autem temporibus nemo ad laudantium dolorum sit eos similique consectetur porro, quidem laborum pariatur odit ducimus! Odit voluptate quisquam repellendus est unde tempore fuga fugiat quam ipsum perspiciatis rem labore, sit quasi dicta sunt asperiores iste? Laborum exercitationem officiis rem. Deserunt tempora beatae, excepturi nesciunt aspernatur corporis saepe sequi fugit corrupti obcaecati vitae soluta laboriosam suscipit exercitationem?",
                    author: {
                        name: 'John Willard',
                        avatar: 'stock-4.jpg'
                    },
                    date: '11/08/2020, 01:57 PM'

                },
            ],
        }
    },
    methods: {
        dialogstate(value) {
            this.dialog = value;
        },

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

        clear() {
            this.post.content = "";
            this.post.picture = null;
        },

        publish() {
            var options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
            var today = new Date();

            var obj = {
                name: this.info().name,
                avatar: this.info().pfp
            };

            this.posts.unshift({
                content: this.post.content,
                author: obj,
                date: today.toLocaleDateString("en-US", options),

            })

            this.clear();
        }
    },
    computed: {
        ...mapState(["mode"]),

    }
}
</script>
