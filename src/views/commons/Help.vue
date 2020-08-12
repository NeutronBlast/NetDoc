<template>
<div>
    <Navigation />
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="3">
                <v-card class="rounded-0">
                    <v-list>
                        <v-subheader>CATEGORÍAS</v-subheader>
                        <v-list-item-group v-model="item" color="teal">
                            <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="9">
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item,i) in questions" :key="i">
                        <v-expansion-panel-header>{{item}}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse minima voluptatum perferendis adipisci repudiandae est impedit in magnam, dolorem recusandae officiis voluptas a unde sequi eos ut voluptates neque quas blanditiis soluta. Et magnam numquam pariatur saepe exercitationem, voluptatem beatae consequatur fugit. Inventore, facere provident rerum vel error odio laudantium illum sint deserunt officia nihil eius a ad blanditiis ut corrupti est fugit, modi ex id voluptatibus eum, similique dolores? Quaerat dolor nostrum delectus quis adipisci. Deleniti asperiores expedita totam delectus excepturi molestias cum quasi porro magnam, omnis laudantium nulla commodi tempore minus adipisci fuga vero repudiandae obcaecati molestiae!
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Navigation from '@/components/commons/Navigation.vue'
export default {
    components: {
        Navigation,
    },
    data() {
        return {
            item: 1,
            items: [{
                    text: 'Empezar',
                    icon: 'mdi-check'
                },
                {
                    text: 'General',
                    icon: 'mdi-account'
                },
                {
                    text: 'Problemas',
                    icon: 'mdi-help'
                }
            ],

            questions: [
                'Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7', 'Question 8', 'Question 9', 'Question 10'
            ]
        }
    }
}
</script>
