import Vue from 'vue'
import Vuex from 'vuex'
import jwtdecode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user:null,
    datosServicios: [],
    datosServicio: null
  },
  mutations: {
    setToken(state, token){
        state.token = token;

    },
   
    setUsuario(state, usuario){
        state.user = usuario;
    },

    //agregado
    addServicios( state){
        state.datosServicios = [state.datosServicio, ...state.datosServicios]
    },

    borrarServicios( state ){
        state.datosServicios = []
    }

    //**********/
    },

    actions: {
        //agregado
        saveServicios ( contex ){
            contex.commit('addServicios');
        },

        boorar ( contex ) {
            contex.commit('borrarServicios');
        },
        //******** */
        
        guardarToken({commit}, token){
            commit("setToken", token);
            commit("setUsuario", jwtdecode(token));
            localStorage.setItem('token', token)
        },
        autoLogin({commit}){
            const token = localStorage.getItem('token');
            if(token){
                commit("setToken", token);
                commit("setUsuario", jwtdecode(token)); 
                
            }
        },
        salir({commit}){
            commit("setToken", null);
            commit("setUsuario", null);
            localStorage.removeItem('token');
            router.push({name: 'Home'});
        }

    }
  
})