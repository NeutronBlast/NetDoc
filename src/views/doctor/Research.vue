<template>
    <div>
        <Navigation />
        <div class="container-2">
            <v-row>
                <v-col cols="12" sm="12" md="3">
                    <v-card max-width="450" class="mx-auto mt-5">
                        <v-list>
                            <v-list-item-title class="ml-3">CENTRO DE INVESTIGACIONES</v-list-item-title>
                            <v-divider></v-divider><br>
                            <p class="ml-3">Centro de Investigación Biomédica en Red de Enfermedades Raras</p>
                        </v-list>
                    </v-card>
                    <v-card max-width="450" class="mx-auto mt-5">
                        <v-list>
                            <v-list-item-title class="ml-3">MEDICOS E INVESTIGADORES</v-list-item-title>
                        </v-list>
                        <v-divider></v-divider>
                        <v-virtual-scroll :items="profiles" :item-height="50" height="210">
                            <template v-slot="{ item }">
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-avatar color="teal" size="56" class="white--text">
                                            <v-img v-if="item.img" :src="require('@/assets/img/'+item.img)"></v-img>
                                            <span class="white--text" v-else>{{item.name[0]}}</span>
                                        </v-avatar>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>{{item.name}}
                                            <v-menu offset-y>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn icon v-bind="attrs" v-on="on" >
                                                        <v-icon>mdi-dots-vertical</v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item @click="$router.push('/profile').catch(()=>{});" >
                                                        <v-list-item-title>Ver perfil</v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-list-item-title>
                                    </v-list-item-content>

                                </v-list-item>
                            </template>
                        </v-virtual-scroll>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="12" md="6">
                    <v-card class="mx-auto mt-5" outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-list-item-title class="headline mb-1" v-bind="attrs" v-on="on">Retinosis Pigmentaria</v-list-item-title>
                                    </template>
                                    <span>Retinosis Pigmentaria</span>
                                </v-tooltip>
                                <v-list-item-subtitle>Identifican un nuevo gen asociado a retinosis pigmentaria</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-avatar tile size="100" color="grey">
                                <v-img :src="require('@/assets/img/stock-102.jpg')"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-card>
                    <br>
                    <v-card>
                        <v-container fluid>
                            <h2>Avance de la investigación</h2>
                            <br><hr><br>
                            <p class="text-justify">
                                Los investigadores sugieren que el gen ZNF408 tiene un papel importante en el desarrollo del ojo, ya que puede cumplir funciones esenciales en el mantenimiento de la homeostasis de la retina, además de su papel en el desarrollo vascular. Este gen ya se había asociado previamente a otra patología ocular y ahora por primera vez se vincula a la retinosis pigmentaria.
                                "El gen ZNF408 podrá ahora incluirse en los paneles de diagnóstico genético para la retinosis pigmentaria, facilitando así el diagnóstico precoz, la identificación de portadores y la apertura de nuevas vías de investigación en su tratamiento", explica Carmen Ayuso, quien resalta los avances en la investigación: "Las distrofias hereditarias de retina son un grupo numeroso y heterogéneo de enfermedades de diagnóstico muy complejo para las que no existe aún tratamiento eficaz pero que están generando gran cantidad de investigaciones y muy prometedoras opciones terapéuticas".
                            </p>
                            <h2>Acerca de la Retinosis Pigmentaria</h2>
                            <br><hr><br>
                            <p class="text-justify">
                                La retinosis pigmentaria constituye un grupo de distrofias de retina hereditarias poco frecuentes caracterizadas por la pérdida progresiva de la capacidad visual como consecuencia de la muerte de las células fotorreceptoras. La retinosis pigmentaria es heterogénea, tanto genética como clínicamente, y es la distrofia hereditaria de retina más común, con una prevalencia aproximada de 1 de cada 4.000 personas. Hasta la fecha, se han identificado más de 70 genes asociados con la retinosis pigmentaria, aunque todavía se desconoce la causa genética en casi la mitad de los casos.
                            </p>
                        </v-container>
                    </v-card>

                    <v-dialog v-model="dialog" max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <div class="text-center mt-4">
                            <v-btn block color="teal lighten-4" v-bind="attrs" v-on="on">Incorporarse a la investigación</v-btn>
                        </div>

                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Solicitud de incorporación a la investigación</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                 <v-textarea label="Motivo de la solicitud" color="teal" outlined></v-textarea>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="teal darken-3" text @click="dialog = false">CANCELAR</v-btn>
                            <v-btn color="teal darken-3" text @click="dialog = false">ENVIAR</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                </v-col>

                <v-col cols="12" sm="12" md="3">
                    <v-card max-width="450" class="mx-auto mt-5">
                        <v-list>
                            <v-list-item-title class="ml-3">INVESTIGACIONES DESTACADAS</v-list-item-title>
                        </v-list>
                        <v-divider></v-divider>
                        <v-col v-for="res in research" :key="res.id">
                            <v-card class="mx-auto" outlined>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <div class="overline mb-4">{{res.type}}</div>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-list-item-title class="headline mb-1" v-bind="attrs" v-on="on">{{res.name}}</v-list-item-title>
                                            </template>
                                            <span>{{res.name}}</span>
                                        </v-tooltip>
                                        <v-list-item-subtitle>{{res.description}}</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar tile size="80" color="grey">
                                        <v-img :src="require('@/assets/img/'+res.img)"></v-img>
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn text color="teal darken-3">Ver investigación</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
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
    data(){
        return{
            dialog: false,
            research: [{
                    id: '1',
                    type: 'INVESTIGACIÓN',
                    name: 'Amiloidosis Sistémica',
                    description: 'Herramienta para diagnosticar la amiloidosis sistémica',
                    img: 'stock-101.jpg',
                },
                {
                    id: '5',
                    type: 'TRATAMIENTO',
                    name: 'Enfermedad de Gaucher',
                    description: 'La UPO, en colaboración con el CSIC y la US, patenta un tratamiento para las enfermedades lisosomales',
                    img: 'stock-105.jpg',
                },
                {
                    id: '10',
                    type: 'INVESTIGACIÓN',
                    name: 'Colitis Colágena',
                    description: 'Descubren marcadores genéticos para luchar contra una enfermedad gastrointestinal poco estudiada',
                    img: 'stock-110.jpg',
                }
                
            ],
            profiles: [{
                    img: 'stock-18.jpg',
                    name: 'Gonzalez, Michelle'
                },
                {
                    img: 'stock-16.jpg',
                    name: 'Kowalski, Jean'
                },
                {
                    img: 'stock-17.jpg',
                    name: 'McCleod, Lisa'
                },
                {
                    img: 'stock-20.jpg',
                    name: 'Rorras, Pamon'
                }
            ]
        }
    }
}
</script>

<style>

</style>