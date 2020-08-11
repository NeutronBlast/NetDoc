<template>
<div>
    <v-card flat>
        <v-toolbar color="teal darken-3" flat>
            <v-toolbar-title class="white--text">Invitar</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <v-text-field class="mt-6 mx-5" outlined label="Buscar contactos" prepend-icon="mdi-magnify" color="teal darken-3"></v-text-field>

            <v-list-item-group v-model="members" multiple>
                <v-list-item v-for="(item, index) in contacts" :key="index">

                    <template v-slot:default="{ active }">

                        <v-list-item-action>
                            <v-checkbox :input-value="active" color="teal"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-avatar>
                            <v-img :src="require('@/assets/img/'+item.avatar)"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content class="ml-4">
                            <v-list-item-title>{{item.name}}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                </v-list-item>
            </v-list-item-group>

            <v-btn block color="teal" text outlined @click="closeDialog()">Invitar</v-btn>
        </v-list>
    </v-card>
</div>
</template>

<script>
import {
    mapState,
    mapMutations
} from "vuex";
export default {
    props:{
        dialog: Boolean
    },
    data() {
        return {
            members: [],

        }
    },
    computed: {
        ...mapState(["mode", "contacts"]),

    },

    methods: {
        closeDialog(){
            var st = false;
            this.$emit('dialog', st);
        }
    }
}
</script>
