<template>
<div>
    <Navigation />
    <v-container fluid>
        <v-row class="mx-5">
            <v-col cols="12" sm="12" md="9">
                <v-data-table :headers="headers" :items="desserts" class="elevation-1">
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Mis pacientes</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn fab small color="teal darken-3">
                                <v-icon color="white">mdi-plus</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.foto="{ item }">
                        <div class="p-2 mt-2 mb-2">
                            <v-img class="rounded-circle" :src="require('@/assets/img/'+item.foto)" :alt="item.path" height="50px" width="50px"></v-img>
                        </div>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon small v-bind="attrs" v-on="on" class="mr-2">
                                    mdi-pencil
                                </v-icon>

                            </template>
                            <span>Editar paciente</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon small v-bind="attrs" v-on="on" class="mr-2">
                                    mdi-delete
                                </v-icon>

                            </template>
                            <span>Eliminar paciente</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon small v-bind="attrs" v-on="on">
                                    mdi-eye
                                </v-icon>

                            </template>
                            <span>Visualizar historia médica</span>
                        </v-tooltip>

                    </template>
                </v-data-table>
            </v-col>

            <v-col cols="12" sm="12" md="3">
                <v-card color="grey lighten-4">
                    <v-card-title>Citas pendientes</v-card-title>
                    <v-divider></v-divider>
                    <v-img height="100" width="100" class="mx-auto rounded-circle mt-2" :src="require('@/assets/img/stock-9.jpg')"></v-img>

                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title><strong>Paciente</strong> Lisa Schneider</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title><strong>Para el: </strong>10 de Agosto de 2020</v-list-item-title>
                                    <v-list-item-subtitle>2:00 PM - 3:00 PM</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title><strong>Motivo de la consulta</strong></v-list-item-title>
                                    <v-list-item-subtitle>
                                        Secondary line text Lorem ipsum dolor sit amet,
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        consectetur adipiscing elit.
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-btn block text color="teal darken-3" @click="$router.push('/chat').catch(()=>{})">
                                <v-icon left>mdi-message</v-icon>Enviar mensaje
                            </v-btn>
                            <v-btn block text color="teal darken-3">
                                <v-icon left>mdi-check</v-icon>Resolver
                            </v-btn>

                        </v-col>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>
    </v-container>

</div>
</template>

<script>
import Navigation from "@/components/commons/Navigation.vue";

export default {
    components: {
        Navigation,
    },

    data: () => ({
        dialog: false,
        headers: [{
                text: 'Foto',
                align: 'start',
                sortable: false,
                value: 'foto',
            },
            {
                text: 'Nombre',
                value: 'nombre'
            },
            {
                text: 'Ubicación',
                value: 'ubicacion'
            },
            {
                text: 'Actions',
                value: 'actions',
                sortable: false
            },
        ],
        desserts: [],
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
    }),

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [{
                    foto: 'stock-4.jpg',
                    nombre: 'John Willard',
                    ubicacion: 'Louisville, TN, USA'
                },
                {
                    foto: 'stock-9.jpg',
                    nombre: 'Lisa Schneider',
                    ubicacion: 'Memphis, TN, USA'
                },
                {
                    foto: 'stock-19.jpg',
                    nombre: 'Lia Preobrazhensky',
                    ubicacion: 'Memphis, TN, USA'
                },
                {
                    foto: 'stock-6.jpg',
                    nombre: 'Little Pluto',
                    ubicacion: 'Nashville, TN, USA'
                },
                {
                    foto: 'stock-8.jpg',
                    nombre: 'Megan Schmidt',
                    ubicacion: 'Nashville, TN, USA'
                },
                {
                    foto: 'stock-7.jpg',
                    nombre: 'Stephan Schonlau',
                    ubicacion: 'Knoxville, TN, USA'
                },
                {
                    foto: 'stock-18.jpg',
                    nombre: 'Michelle Gonzalez',
                    ubicacion: 'Clarksville, TN, USA'
                },
            ]
        },

    },
}
</script>
