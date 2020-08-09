<template>
<div class="netfill">
    <v-row no-gutters>
        <v-col cols="12" md="5" class="d-none d-md-flex">
            <v-img max-height="100vh" src="@/assets/img/stock-36.jpg">
            </v-img>
        </v-col>

        <v-col cols="12" sm="12" md="7" class="mt-8">
            <v-img class="mx-auto netlogo" src="@/assets/logo.png" height="150" width="150"></v-img>

            <v-container>
                <v-row class="mx-9">
                    <v-col cols="12" sm="12">
                        <v-text-field label="Usuario/E-mail" clearable placeholder="Usuario/Email" prepend-icon="mdi-account" color="teal darken-3" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12">
                        <v-text-field label="Contraseña" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" placeholder="Contraseña" prepend-icon="mdi-lock" color="teal darken-3" outlined></v-text-field>
                    </v-col>
                    <v-checkbox class="ml-3 mt-n3" color="teal" v-model="checkbox" label="Recordarme"></v-checkbox>

                    <v-btn class="mx-auto" rounded outlined color="teal darken-3" block @click="$router.push('/').catch(()=>{})">ENTRAR</v-btn>
                </v-row>

                <v-row class="mx-9 mt-3">
                    <div class="mx-auto">
                        ¿No tienes una cuenta? <router-link to="register" class="teal--text">Regístrate</router-link>
                    </div>
                </v-row>

                <v-row class="mx-9 mt-3">
                    <div class="mx-auto">
                        <a href="#" class="teal--text">¿Olvidaste la contraseña?</a>
                    </div>
                </v-row>
                <v-row class="mx-9 mt-3">
                    <div class="mx-auto">
                        O inicia sesión utilizando
                    </div>

                </v-row>
                <v-row class="mx-9 mt-3">
                    <div class="mx-auto">
                        <v-btn fab medium color="blue darken-3" class="mr-2">
                            <v-icon large color="white">mdi-facebook</v-icon>
                        </v-btn>

                        <v-btn fab medium color="blue lighten-2" class="mr-2">
                            <v-icon large color="white">mdi-twitter</v-icon>
                        </v-btn>

                        <v-btn fab medium color="white" class="mr-2">
                            <v-icon color="pink lighten-1" large>mdi-instagram</v-icon>
                        </v-btn>
                    </div>

                </v-row>
            </v-container>

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
        }
    }
}
</script>
