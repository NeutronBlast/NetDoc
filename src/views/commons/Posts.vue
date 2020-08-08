<template>
  <div>
    <Navigation />
    <div class="container-2">
      <v-row>
        <v-col cols="12" sm="12" md="2">
          <v-text-field
            outlined
            label="Buscar publicación"
            prepend-icon="mdi-magnify"
            color="teal darken-3"
          ></v-text-field>
          <v-card max-width="450" class="mx-auto">
            <v-list three-line>
              <v-list-item-title class="ml-3">Administradas</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar color="teal">
                    <span class="white--text">S</span>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content class="mt-n4">Sauer LLC</v-list-item-content>
              </v-list-item>
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
            <v-container fluid>
              <h2>Publicar</h2>
              <form>
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="25"
                  label="Titulo"
                  color="teal"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-select
                  v-model="select"
                  :items="items"
                  :error-messages="selectErrors"
                  color="teal"
                  label="Grupo"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                ></v-select>
                <v-textarea background-color="grey lighten-2" color="teal" label="Contenido"></v-textarea>
                <v-file-input show-size counter color="teal" multiple label="Cargar archivos"></v-file-input>
                <v-btn
                  class="mr-4"
                  color="teal"
                  outlined
                  @click="submit"
                >submit</v-btn>
                <v-btn @click="clear" outlined color="red">clear</v-btn>
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
                <v-list-item-title class="headline">{{item.title}}</v-list-item-title>
                <v-list-item-subtitle>Por {{item.name}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-row>
              <v-col cols="2">
                <span v-if="!item.img">
                  <v-img class="teal lighten-2 ml-3" style>
                    <span
                      class="white--text align-center"
                      style="font-size:2rem;"
                      v-if="!item.img"
                    >{{item.title[0]}}</span>
                  </v-img>
                </span>
                <span v-else>
                  <v-img
                    :src="require('@/assets/img/'+item.img)"
                    :lazy-src="require('@/assets/img/'+item.img)"
                    class="grey lighten-2 ml-3"
                  ></v-img>
                </span>
              </v-col>
              <v-col>
                <v-card-text>{{item.content}}</v-card-text>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-btn outlined color="teal">Leer</v-btn>
              <v-btn outlined color="teal">Guardar</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/commons/Navigation.vue";
export default {
  components: {
    Navigation,
  },

  data() {
    return {
      select: null,
      post: {
        title: null,
        group: null,
        content: null,
      },
      items: ["Sauer LLC", "Lang Group", "Kuphal-Hane", "Murazik Group"],
      settings: {
        maxScrollbarLength: 60,
      },
      communities: [
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
      posts: [
        {
          img: null,
          avatar: "stock-23.jpg",
          name: "Lang Group",
          title: "Lang Group",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        },
        {
          img: "stock-30.jpg",
          avatar: "stock-24.jpg",
          name: "Kuphal-Hane",
          title: "Lang Group",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        },
        {
          img: "stock-31.jpg",
          avatar: "stock-26.jpg",
          name: "Murazik Group",
          title: "Lang Group",
          content:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        },
      ],
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>

