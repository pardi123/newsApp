<template>
<v-app id="inspire">
      <v-app-bar app color="primary"  danse dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-spacer></v-spacer>
        <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>  
  </v-app-bar>
  
     <v-navigation-drawer
      v-model="drawer"
      app
      color="primary"  
      danse 
      dark
       width="350px"
      
    >
    <v-list>
     <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                  News App
              </v-list-item-title>
               <v-list-item-subtitle>
                 subtext
              </v-list-item-subtitle>
            </v-list-item-content>
      </v-list-item>
            <v-divider></v-divider>
      <v-list-item>
      </v-list-item>
      <v-list-item >
           <router-link to="/">
               <v-list-item-content >
                  <v-list-item-title>     
                   <v-avatar
                     color="#fffff"
                     size="56"
                  > <v-img :src="require('../assets/appel.png')"></v-img> </v-avatar>  
                 All articles mentioning Apple 
               </v-list-item-title>
                </v-list-item-content>
           </router-link>

          
      </v-list-item>
            <v-list-item >
           <router-link to="/testlaNews">
               <v-list-item-content >
                  <v-list-item-title>     
                   <v-avatar
                     color="#ffff"
                     size="56"
                  > <v-img :src="require('../assets/tesla.png')"></v-img> </v-avatar>  
                    All articles about Tesla               
                </v-list-item-title>
                </v-list-item-content>
           </router-link>

          
      </v-list-item>
            <v-list-item >
           <router-link to="/busnisesNews">
               <v-list-item-content >
                  <v-list-item-title>     
                   <v-avatar
                     color="#ffff"
                     size="56"
                  > <v-img :src="require('../assets/busnises.png')"></v-img> </v-avatar>  
                  business headlines in the US 
               </v-list-item-title>
                </v-list-item-content>
           </router-link>

          
      </v-list-item>
            <v-list-item >
           <router-link to="/TechCrunchNews">
               <v-list-item-content >
                  <v-list-item-title>     
                   <v-avatar
                     color="#ffff"
                     size="56"
                  > <v-img :src="require('../assets/techcunch.png')"></v-img> </v-avatar>  
                  Top headlines from TechCrunch
               </v-list-item-title>
                </v-list-item-content>
           </router-link>

          
      </v-list-item>
            <v-list-item >
           <router-link to="/wallStreetNews">
               <v-list-item-content >
                  <v-list-item-title>     
                   <v-avatar
                     color="#ffff"
                     size="56"
                  > <v-img :src="require('../assets/wl.png')"></v-img> </v-avatar>  
                   articles published by the Wall Street
               </v-list-item-title>
                </v-list-item-content>
           </router-link>

          
      </v-list-item>
    </v-list>
     

  
        
    </v-navigation-drawer>
    <v-main>
        <router-view />
    </v-main>
</v-app>

</template>

<script>
import { mapGetters,mapActions} from 'vuex';

export default {
    computed:{
      ...mapGetters('news',['dataArticles']),
   
      
 
    },
    data() {
        return {
          test: 'test',
            drawer: null,
            items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
            ],
                colorCache: {}
        }
    },
      mounted() {
      this.fetchNews()
  },
  methods: {
    ...mapActions('news',['fetchNews']),
  
  
  
  },
}
</script>

<style>
  a {
    color: #ffff !important;
    text-decoration: none;
  }
</style>