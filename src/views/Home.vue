<template>
<div class="home">
    <Navigation />
    <div class="container-2">
        <v-row>
            <v-col cols="12" sm="12" md="2">
                <h3 class="text-center mb-3">COMUNIDADES</h3>
                <v-card max-width="450" class="mx-auto">
                    <v-list>
                        <v-list-item-title class="ml-3">Administradas</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-group>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-avatar color="teal">
                                        <span class="white--text">S</span>
                                    </v-avatar>
                                </v-list-item-avatar>
                                <v-list-item-content class="mt-n4">Sauer LLC</v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
                <vue-custom-scrollbar :settings="settings">
                    <v-card max-width="450" class="mx-auto mt-5">
                        <v-list>
                            <v-list-item-title class="ml-3">Otros</v-list-item-title>
                            <v-divider></v-divider>
                            <v-list-item-group v-for="(item, index) in communities" :key="index">
                                <v-list-item>
                                    <v-list-item-avatar v-if="!item.avatar">
                                        <v-avatar color="teal">
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
            </v-col>
            <v-col cols="12" sm="12" md="10">
                <v-card class="mb-5">
                    <v-container>
                        <h2>Publicar</h2>
                        <form>
                            <v-row>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field v-model="post.title" :counter="25" label="Titulo" color="teal" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-select v-model="post.group" :items="items" color="teal" item-color="teal" label="Grupo" required></v-select>
                                </v-col>
                            </v-row>
                            <v-textarea v-model="post.content" outlined color="teal" label="Contenido"></v-textarea>
                            <v-file-input v-model="post.picture" show-size color="teal" label="Cargar archivos"></v-file-input>

                            <!-- Buttons -->
                            <v-row class="d-flex flex-row-reverse mt-5">
                                <v-btn @click="clear()" outlined color="red">LIMPIAR</v-btn>
                                <v-btn class="mr-4" color="teal" outlined @click="publish()">PUBLICAR</v-btn>
                            </v-row>

                        </form>
                    </v-container>
                </v-card>
                <v-card v-for="(item, index) in posts" :key="index" class="mx-auto mb-5">
                    <v-list-item>
                        <v-list-item-avatar color="teal">
                            <v-avatar color="teal">
                                <span class="white--text" v-if="!item.avatar">{{item.name[0]}}</span>
                                <v-img v-else :src="require('@/assets/img/'+item.avatar)"></v-img>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">{{item.title}} > <a href="#" class="teal--text">{{item.group}}</a></v-list-item-title>
                            <v-list-item-subtitle>Por {{item.name}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-row>
                        <v-col cols="2">
                            <span v-if="item.img">
                                <v-img :src="require('@/assets/img/'+item.img)" :lazy-src="require('@/assets/img/'+item.img)" class="grey lighten-2 ml-3"></v-img>
                            </span>
                        </v-col>
                        <v-col>
                            <v-card-text>{{item.content}}</v-card-text>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn outlined color="teal" class="mb-3">Ir a Post</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
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
        vueCustomScrollbar,
    },
    data() {
        return {
            select: null,
            post: {
                title: null,
                group: null,
                content: null,
                picture: null,
            },
            items: ["Sauer LLC", "Lang Group", "Kuphal-Hane", "Murazik Group"],
            settings: {
                maxScrollbarLength: 60,
            },
            communities: [{
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
            posts: [{
                    img: null,
                    avatar: "stock-16.jpg",
                    name: "Jean Kowalski",
                    title: "Example 1",
                    group: "Lang Group",

                    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magni quam, quod quos sequi enim odio illum nostrum facilis officia eveniet libero placeat explicabo? Fugiat facere, ratione cum ut omnis vitae voluptas eligendi necessitatibus sapiente pariatur molestiae, dolor amet illo quae nemo vel adipisci? Repudiandae maxime rerum ex sint commodi.",
                },
                {
                    img: "stock-34.jpg",
                    avatar: "stock-17.jpg",
                    name: "Lisa McCleod",
                    title: "Example 2",
                    group: "Lang Group",

                    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, incidunt. Architecto est nesciunt autem temporibus nemo ad laudantium dolorum sit eos similique consectetur porro, quidem laborum pariatur odit ducimus! Odit voluptate quisquam repellendus est unde tempore fuga fugiat quam ipsum perspiciatis rem labore, sit quasi dicta sunt asperiores iste? Laborum exercitationem officiis rem. Deserunt tempora beatae, excepturi nesciunt aspernatur corporis saepe sequi fugit corrupti obcaecati vitae soluta laboriosam suscipit exercitationem? Inventore est cupiditate pariatur accusamus a vel praesentium architecto molestiae neque itaque? Consequuntur quaerat, eaque hic minima earum magni, sint adipisci fugiat saepe harum doloremque natus impedit sapiente tempora! Sint!",
                },
                {
                    img: "stock-35.jpg",
                    avatar: "stock-18.jpg",
                    name: "Michelle Gonzalez",
                    title: "Example 3",
                    group: "Lang Group",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea ducimus, veniam quis necessitatibus eaque nostrum vero magnam! Recusandae sit quibusdam, maxime rerum minus neque, saepe commodi dicta ut error exercitationem magnam pariatur mollitia earum sed corporis quae assumenda consequatur accusantium sequi ipsam necessitatibus? Maxime soluta a repellendus. Unde error cumque quasi minus. Asperiores iste laboriosam eos beatae cupiditate ex dolorem ipsa modi tempore illo possimus labore fuga, reprehenderit delectus fugiat inventore sunt voluptatem molestiae.",
                },
            ],
        };
    },
    methods: {
        clear() {
            this.post.title = "";
            this.post.group = "";
            this.post.content = "";
            this.post.picture = null;
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

        publish() {
            this.posts.unshift({
                title: this.post.title,
                name: this.info().name,
                group: this.post.group,
                content: this.post.content,
                avatar: this.info().pfp
            })
        }
    },
    computed: {
        ...mapState(["mode"]),
    }
}
</script>
