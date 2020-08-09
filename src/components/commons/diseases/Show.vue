<template>
<div class="netdisease">
    <v-container>
        <v-row>
            <v-col cols="12" sm="12">
                <h1>Enfermedad de Refsum</h1>
                <p>Enfermedad genética</p>

                <v-img src="@/assets/img/stock-33.jpg" height="300">
                </v-img>

                <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed, corrupti natus fugit perspiciatis reiciendis expedita dolor harum omnis exercitationem quis debitis modi odio minus, sit necessitatibus error dignissimos maiores ut laboriosam placeat alias molestias? Quidem quo accusantium tempora quae commodi consequuntur, incidunt culpa sequi hic id quia at corporis repudiandae. Obcaecati nostrum aliquam ducimus provident saepe laudantium fugit assumenda totam eius, mollitia nihil nesciunt est labore facere eligendi dolore? Tempore quas laborum reiciendis architecto modi iusto, pariatur nemo, officia officiis illum vitae odit exercitationem eos corrupti velit quasi! Iste debitis laudantium molestias, officia corrupti laboriosam laborum voluptatibus aut quos?</p>

                <h3>Causas</h3>
                <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium hic veniam mollitia reiciendis magni officia aut, itaque esse, illo accusamus autem dolore tempore? Facilis dolorum recusandae cum harum! Molestiae facere beatae impedit consectetur ab debitis corrupti. Earum eaque exercitationem a officia atque dicta ad porro expedita maxime corporis, ab dolores. Nostrum aut, repudiandae itaque ea non repellendus, perferendis quasi nobis in ratione recusandae et beatae exercitationem? Laudantium ab voluptates quas! Nulla eveniet incidunt consectetur similique praesentium! Dignissimos, nobis expedita consequuntur nisi nihil obcaecati culpa mollitia, vitae, quia exercitationem neque dicta nostrum distinctio quam voluptates sed porro nesciunt doloribus accusantium nulla!</p>

                <h3>Síntomas</h3>
                <p class="text-justify">
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                </p>

                <h3>Prevención</h3>
                <p class="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus commodi sint! Quo voluptates delectus sit, in labore error obcaecati maxime cum amet dolore rerum odio, saepe ducimus perspiciatis distinctio eos explicabo alias modi debitis esse dolorem sed hic. Sed similique at, repellendus pariatur omnis deserunt cum fugiat laborum deleniti saepe amet dolore, iure repudiandae cupiditate aliquam id. Minima voluptatem ipsa nulla dolor est esse, optio provident nemo laudantium similique. Eligendi, officiis, possimus dignissimos ea sed fugit repellendus eaque, hic illum aliquid quae quisquam. Dignissimos eveniet recusandae maiores beatae, libero, odio nesciunt necessitatibus, suscipit eius neque amet obcaecati. Sunt, porro.</p>

                <h3>Tratamiento</h3>
                <p class="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eius veniam dignissimos minus, quis suscipit voluptates rerum vitae magni qui fugit ratione omnis nulla, a temporibus in, explicabo inventore similique nihil unde facere quas tempore! Aspernatur dignissimos quam aperiam officia praesentium ea illum atque quae necessitatibus voluptas, consectetur recusandae illo nobis quia, cumque id, tempora dicta nihil. Corrupti doloribus, fugit dignissimos odit nihil totam officiis culpa distinctio aliquid porro molestias nulla, voluptate dolorem corporis eos tempore repellendus dolore maiores amet esse assumenda! Velit omnis eveniet nostrum laudantium, natus tempore, ducimus est architecto veritatis voluptates nemo obcaecati sed labore magni vitae?</p>
            </v-col>
        </v-row>
    </v-container>

    <div>
        <v-container>
            <h1 class="text-center">DOCTORES DISPONIBLES EN TU ZONA</h1>
            <v-divider></v-divider>
            <v-row >
                <v-col cols="12" sm="12" md="4" v-for="(item,index) in doctors" :key="index">
                    <v-card class="mx-auto my-12" max-width="374" color="grey lighten-4">
                        <v-img height="200" width="200" class="mx-auto rounded-circle" :src="require('@/assets/img/'+item.avatar)"></v-img>

                        <v-card-title>{{item.name}}</v-card-title>

                        <v-card-text class="mt-n5">
                            <div class="my-4 subtitle-1">
                                <v-icon left color="teal darken-3">mdi-currency-usd</v-icon>{{item.price}}
                                <br>
                                <v-icon left color="teal darken-3">mdi-map-marker</v-icon>Memphis, TN, USA
                                <br>
                                <v-icon left color="teal darken-3">mdi-hospital</v-icon>Saint Francis Hospital
                                <br>
                                <v-icon left color="teal darken-3">mdi-calendar</v-icon>{{item.schedule}}
                            </div>

                            <div class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem enim cumque porro ducimus cum aut repellat quaerat dolorum natus eveniet, possimus adipisci nemo explicabo deleniti illo dolor eaque optio. Eum!</div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-title>Disponibilidad</v-card-title>

                        <v-card-text>
                            <v-chip-group column>
                                <v-chip color="teal lighten-5">8:00AM</v-chip>

                                <v-chip color="teal lighten-5">10:00AM</v-chip>

                                <v-chip color="teal lighten-5">1:00PM</v-chip>

                                <v-chip color="teal lighten-5">3:00PM</v-chip>
                            </v-chip-group>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="teal darken-3" text @click="$router.push('/profile').catch(()=>{});">
                                VER PERFIL
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            doctors:[{
                name: 'Frank Hesse',
                price: '100-1000',
                schedule: 'Lunes a Viernes',
                avatar: 'stock-1.jpg'
            },
            {
                name: 'Midori Pavlichenko',
                price: '1500-3000',
                schedule: 'Lunes a Domingo',
                avatar: 'stock-5.jpg'
            },
            {
                name: 'Stephan Schonlau',
                price: '300-500',
                schedule: 'Lunes, Martes y Viernes',
                avatar: 'stock-7.jpg'
            }]
        }
    }
}
</script>
