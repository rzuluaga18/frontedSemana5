<template>
 <v-layout>
     <v-row>
         <v-col>
             <v-card>
                 <v-card-title>
                    Login
                 </v-card-title>
                 <v-card-text>

                      <v-form
                        ref="form"
                        lazy-validation
                    >

                        <v-text-field
                        v-model="login.email"
                        label="E-mail"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="login.password"
                        label="Contraseña"
                        type="password"
                        required
                        ></v-text-field>

                    

                        <v-btn
                        :disabled="!(this.login.password && this.login.email)"
                        color="success"
                        class="mr-4"
                        block
                        @click="loginUser"
                        >
                        Validate
                        </v-btn>

    
                     </v-form>

                 </v-card-text>
                 <v-card-actions>

                 </v-card-actions>
             </v-card>
         </v-col>
     </v-row>
 </v-layout>

</template>


<script>

import swal from 'sweetalert';
import axios from 'axios'

export default {
    name: 'TheLogin',
    data(){
        return{
            login:{
                email:'',
                password:''
            }

        }

    },
    beforeCreate(){
    this.$store.dispatch('autoLogin')? this.$router.push({path: '/privado'}) : false;
    },
    methods:{
        loginUser(){
            axios.post('http://localhost:3000/api/usuario/login', this.login)
            .then(response => {
                return response.data;
            })
            .then(data => {
                this.$store.dispatch('guardarToken', data.tokenReturn)
                swal(" Éxito!!", "Login correcto", "success");
                this.$router.push({name: 'Privado'});
                console.log(data);

            })
            .catch(error =>{
                swal(" Oops !", "Algo salió mal", "error")
                console.log(error);
                return error;
            })

            
            
        }

    }

}

</script>
