<template>
  <div class="modal-dialog text-center">
    <div class="col-sm-8 main-section justify-content-center" id="main-section">
      <!-- Begin of modal content -->
      <div class="modal-content" id="modal-content">
        <div class="col-12" id="user-img">
          <img
            src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            width="200px"
            height="200px"
            alt="user photo"
          />
        </div>
        <form class="col-12">
          <div class="form-group" id="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Enter e-mail"
              v-model="login.email"
            />
          </div>
          <div class="form-group" id="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Enter Password "
              v-model="login.password"
            />
          </div>
         

          <button 
          type="submit" 
          class="btn" 
          id="btn"
          @click.prevent="loginUser"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-box-arrow-in-right"
              id="svg-inline"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
            &nbsp; Login
          </button>
        </form>
        <div class="col-12" id="forgot">
          <a href="#"> Forgot Password?</a>
        </div>
      </div>
      <!-- End of modal content -->
    </div>
  </div>

  
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

<style scoped>
#main-section {
  margin: 0 auto;
  margin-top: 130px;
  padding: 0;
}

#modal-content {
  background-color: white;
  opacity: 0.97;
  padding: 0 18px;
  box-shadow: 0px 0px 3px #3b3b36;
}

#user-img {
  margin-top: -50px;
  margin-bottom: 35px;
}
#user-img img {
  border-radius: 5px;
  box-shadow: 0px 0px 2px #3b3b36;
}
#form-group {
  margin-bottom: 25px;

}

#form-group input {
  height: 42px;
  border-radius: 5px;
  border: 2;
  font-size: 18px;
  padding-left: 54px;
}

#form-group ::before {
  font-family: "Font Awesome\ 5 Free";
  content: "\f007";
  position: absolute;
  color: #3b3b36;
  left: 28px;
  padding-top: 4px;
}

button {
  width: 40%;
  margin: 5px 0 25px;
}

#btn {
  background-color: #57048A;
  color: white;
  font-size: 19px;
  padding: 7px 14px;
  border-radius: 5px;
  border-bottom: 4px solid #690aa3;
}
#btn:hover,
#btn:focus {
  background-color:#7619af;
  border-bottom: 4px solid #690aa3;
}
#svg-inline {
  margin-right: 4px;
}
#forgot {
  padding: 5px 0 25px;
}
#forgot a {
  color: #57048A;
}
</style>
