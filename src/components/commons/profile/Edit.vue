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
        </v-row>

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

        <!-- Account info -->
        <v-divider></v-divider>
        <h3 class="mt-3 mb-3">Información de cuenta</h3>
        <v-divider></v-divider>

        <v-row class="mx-3">
            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Contraseña" color="teal darken-3" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show1 = !show1"></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="6">
                <v-text-field label="Confirmar Contraseña" color="teal darken-3" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show2 = !show2"></v-text-field>
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
export default {
    data() {
        return {
            show1: false,
            show2: false,
        }
    }
}
</script>
