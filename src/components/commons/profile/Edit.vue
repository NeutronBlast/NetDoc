<template>
<div>
    <v-container>
        <v-row>
            <v-col cols="12" sm="12">
                <h3 class="mb-3">Información personal</h3>
                <v-divider></v-divider>
            </v-col>
        </v-row>

        <v-row class="mx-3">
            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Primer Nombre" color="teal darken-3"></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Segundo Nombre" color="teal darken-3"></v-text-field>
            </v-col>
        </v-row>

        <v-row class="mx-3">
            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Primer Apellido" color="teal darken-3"></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Segundo Apellido" color="teal darken-3"></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="6">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Fecha de Nacimiento" color="teal darken-3" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" color="teal darken-3" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="teal darken-3" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="teal darken-3" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>

            <v-col cols="12" sm="12" md="6">
                <v-select label="Género" color="teal darken-3" item-color="teal darken-3" :items="generos"></v-select>
            </v-col>
        </v-row>

        <!-- Address -->

        <v-row class="mx-3">
            <v-col cols="12" sm="12" md="6">
                <v-select label="Pais" color="teal darken-3"></v-select>
            </v-col>

            <v-col cols="12" sm="12" md="6">
                <v-select label="Ciudad" color="teal darken-3"></v-select>
            </v-col>
        </v-row>

        <!-- About me -->

        <v-divider></v-divider>

        <h3 class="mt-3 mb-3">Sobre mi</h3>

        <v-divider></v-divider>

        <v-row class="mx-3">
            <v-col cols="12" sm="12">
                <v-textarea label="Sobre Mi" outlined color="teal darken-3"></v-textarea>
            </v-col>
        </v-row>

        <v-row class="mx-3">
            <v-col cols="12" sm="12">
                <v-file-input label="Imagen de perfil" color="teal darken-3"></v-file-input>
            </v-col>
        </v-row>

        <!-- Clinic info -->
        <div v-if="mode == 1">
            <v-divider></v-divider>
            <h3 class="mt-3 mb-3">Información profesional</h3>

            <v-row class="mx-3">
                <v-col cols="12" sm="12" md="6">
                    <v-text-field label="Nombre de Clínica" color="teal darken-3"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                    <v-text-field label="Dirección de Clínica" color="teal darken-3"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                    <v-text-field label="Especialidad" color="teal darken-3"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                    <v-text-field label="Precio por consulta" color="teal darken-3" append-outer-icon="mdi-currency-usd"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                    <v-select v-model="d" outlined dense :items="days" deletable-chips label="Días disponibles" multiple color="teal darken-3" item-color="teal" chips>
                        <template #selection="{ item }">
                            <v-chip x-small color="teal lighten-4">{{item}}</v-chip>
                        </template>
                    </v-select>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                    <v-menu ref="menu" v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="time" color="teal darken-3" label="Hora disponible (Inicio)" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-time-picker v-if="menu2" v-model="time" color="teal darken-3" full-width>
                            <v-spacer></v-spacer>
                            <v-btn text color="teal darken-3" @click="menu2 = false">Cancel</v-btn>
                            <v-btn text color="teal darken-3" @click="$refs.menu.save(time); menu2 = false">OK</v-btn>
                        </v-time-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                    <v-menu ref="menu" v-model="menu3" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time2" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="time2" color="teal darken-3" label="Hora disponible (Fin)" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-time-picker v-if="menu3" v-model="time2" color="teal darken-3" full-width>
                            <v-spacer></v-spacer>
                            <v-btn text color="teal darken-3" @click="menu3 = false">Cancel</v-btn>
                            <v-btn text color="teal darken-3" @click="$refs.menu.save(time2)">OK</v-btn>
                        </v-time-picker>
                    </v-menu>
                </v-col>
            </v-row>

            <v-divider></v-divider>
            <h3 class="mt-3 mb-3">Educación</h3>

            <v-row class="mx-3">
                <v-col cols="12" sm="12" md="4">
                    <v-text-field label="Título" color="teal darken-3"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="4">
                    <v-text-field label="Instituto" color="teal darken-3"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="4">
                    <v-text-field label="Año de completación" color="teal darken-3"></v-text-field>
                </v-col>

            </v-row>
        </div>

        <!-- Account info -->
        <v-divider></v-divider>
        <h3 class="mt-3 mb-3">Información de cuenta</h3>
        <v-divider></v-divider>

        <v-row class="mx-3">
            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Contraseña" color="teal darken-3" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Confirmar Contraseña" color="teal darken-3" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'" @click:append="show2 = !show2"></v-text-field>
            </v-col>
        </v-row>

        <v-row class="mx-3">
            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Correo Electrónico" color="teal darken-3"></v-text-field>
            </v-col>
        </v-row>
        <v-btn class="float-right mt-n3" color="teal lighten-5">Guardar</v-btn>
        <br><br>
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
            d: [],
            days: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            menu3: false,
            time: null,
            time2: null,
            show1: false,
            show2: false,
            generos: [{
                    value: 1,
                    text: 'Hombre'
                },
                {
                    value: 2,
                    text: 'Mujer'
                },
                {
                    value: 3,
                    text: 'Otro'
                }
            ]
        }
    },
    computed: {
        ...mapState(["mode"]),

    }
}
</script>
