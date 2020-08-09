<template>
<div class="netfill">
    <v-row no-gutters>

        <v-col cols="12" sm="12" md="7" class="mt-4">
            <v-img class="mx-auto netlogo" src="@/assets/logo.png" height="150" width="150"></v-img>

            <v-container>
                <v-row class="mx-9">
                    <v-col cols="12" sm="12" md="6">
                        <v-text-field label="Correo Electrónico" clearable placeholder="Correo Electrónico" color="teal darken-3" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                        <v-text-field label="Nombre de usuario" clearable placeholder="Nombre de usuario" color="teal darken-3" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                        <v-text-field label="Contraseña" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" placeholder="Contraseña" color="teal darken-3" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                        <v-text-field label="Confirmar Contraseña" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'" @click:append="show2 = !show2" placeholder="Confirmar Contraseña" color="teal darken-3" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                        <v-text-field label="Primer Nombre" clearable placeholder="Primer Nombre" color="teal darken-3" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                        <v-text-field label="Segundo Nombre" clearable placeholder="Segundo Nombre" color="teal darken-3" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                        <v-select label="País" color="teal darken-3" outlined>

                        </v-select>
                    </v-col>

                    <v-col cols="12" sm="12" md="6">
                        <v-select label="Ciudad" color="teal darken-3" outlined>

                        </v-select>
                    </v-col>

                    <v-btn class="mx-auto" rounded outlined color="teal darken-3" block @click="$router.push('/').catch(()=>{})">REGISTRARSE</v-btn>
                </v-row>

                <v-row class="mx-9 mt-3">
                    <div class="mx-auto">
                        ¿Ya tienes una cuenta? <router-link to="login" class="teal--text">Login</router-link>
                    </div>
                </v-row>

            </v-container>

        </v-col>
        <v-col cols="12" md="5" class="d-none d-md-flex">
            <v-img max-height="100vh" src="@/assets/img/stock-37.jpg">
            </v-img>
        </v-col>

    </v-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            checkbox: true,
            show1: false,
            show2: false,
        }
    }
}
</script>
