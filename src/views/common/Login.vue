<template>
    <div class="app cover flex-row align-items-center">
      <div class="container">
        <div class="row main" style="text-align: center; margin: 0 auto; min-width:1000px">
          <div class="main-login main-center" style="margin-right:0;">
            <h5>Sign in to your account</h5>
            <form class="form" @submit.prevent="signIn">

              <div class="form-group">
                <label for="email" class="cols-sm-2 control-label label-element">Your Email</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                    <input
                      name="email"
                      class="form-control"
                      v-model="email"
                      v-validate="'required|email'"
                      :class="{ 'input': true, 'is-danger': errors.has('email') }"
                      type="text" placeholder="Enter your Email"
                    >
                  </div>
                  <i v-show="errors.has('email')" class="fa fa-warning"></i>
                  <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="password" class="cols-sm-2 control-label label-element">Password</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                    <input
                      name="password"
                      class="form-control"
                      v-model="password"
                      v-validate="'required'"
                      type="password"
                      placeholder="Enter your Password"
                      data-as-vv-as="password"
                    >
                  </div>
                  <i v-show="errors.has('password')" class="fa fa-warning"></i>
                  <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                </div>
              </div>

              <b-button type="submit" variant="primary" class="px-4" style="float:left;">Login</b-button>
              <div style="margin-top:20px;">
                <router-link to="/remember" variant="link" class="px-0" style="float:right;">Forgot password?</router-link>
              </div>
            </form>
          </div>
          <div class="main-login main-center" style="margin-left:0; background-color:#66c6e8;">
            <h2 style="margin-top:20px">Sign up</h2>
            <div style="margin-top:20px;"><p style="font-size:15px;">
              Join the most dynamic community of professionals!
            </p></div>
            <div style="margin-top:25px;">
            <router-link
              style="height:50px;"
              to="/register"
              tag="b-button"
              variant="primary"
              class="active button is-primary px-4 mt-3"
            >
              Register Now!
            </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios'

const SERVER_URL = process.env.SERVER_URL || '82.223.35.243'

export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.verifyCredentials()
        } else {
          console.log('nooooooooooooooo')
        }
      })
    },
    verifyCredentials: function () {
      console.log(this.username, this.password)
      let userData = {
        alias: this.email,
        password: this.password
      }
      let url = `http://${SERVER_URL}/login`
      return axios
        .post(url, { user: userData })
        .then(res => {
          this.$router.replace('main/dashboard')
        })
        .catch(res => {
          console.log('ERROR: ' + res)
        })
    }
  }
}
</script>

<style>

  .form-group{
    margin-bottom: 15px;
  }

  label{
    margin-bottom: 15px;
  }

  input,
  input::-webkit-input-placeholder {
    font-size: 11px;
    padding-top: 3px;
  }

  .main-login{
    background-color: #fff;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }

  .form-control {
    height: auto!important;
    padding: 8px 12px !important;
  }

  .input-group {
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;
  }

  .main-center {
    margin-top: 30px;
    margin: 0 auto;
    position: relative;
    width: 450px;
    padding: 10px 40px;
    background:white;
    color: black;
    text-shadow: none;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
  }

  .label-element {
    float: left;
    color: black;
  }

  .is-danger {
    color: red;
  }

</style>
