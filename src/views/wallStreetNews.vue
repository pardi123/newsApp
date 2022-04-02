<template>
  <div class="newsVie">
           <v-app>
    <v-container
        class="py-8 px-12"
        fluid
      >
        <v-row>
          <v-col
          class="mx-auto"
            cols="6"
            centered
          >
          <v-card  v-for="(news,index) in dataArticles"  :key="index"
          class="mx-auto my-12"
         >

           <template slot="progress">
             <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              >


              </v-progress-linear>
            </template>

            <v-img
                height="400"
                :src="`${news.urlToImage}`"
            >
              
            </v-img>
            
            <v-card-title>{{ news.title }} 
           
             </v-card-title>
            <v-card-text>
                <div class="my-4 text-subtitle-1">
                 {{ news.description }} 
               </div>

            <div>
              
            </div>
         
            </v-card-text>

            <v-card-text class="d-flex justify-space-between my-10 py-5">
              <v-chip color="secondary"> {{  }} </v-chip>
              <v-row justify="center">
               <v-icon
                  large
                  color="green darken-2"
                >
                  mdi-domain
                </v-icon>

                <v-icon
                  large
                  color="blue darken-2"
               >
                     mdi-message-text

                </v-icon>
              </v-row>
                            <v-btn color="primary" dark> READ MORE</v-btn>
                            


            </v-card-text>

        
          </v-card>
          
          </v-col>
        </v-row>
      </v-container>
  </v-app>
  </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex';

export default {
  name: 'newsViews',
  computed: {
          ...mapGetters('news',['dataArticles']),
     
  },
  mounted(){
    this.fetchWallStreet();
  },
  methods: {
    ...mapActions('news',['fetchWallStreet'])
  },
}
</script>

<style>

</style>