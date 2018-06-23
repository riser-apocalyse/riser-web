<template>
  <div class="app cover flex-row align-items-center">
    <div class="container">
      <div class="row main" style="text-align: center; margin: 0 auto;">
        <div class="main-login main-center">
          <h5>Join our network!</h5>
          <p v-if="successfullyRegistered">
            Check your inbox, we've sent you a confirmation email!<br/>
            Please verify your account before you <router-link to="login">sign in</router-link>.
          </p>
          <form class="form" @submit.prevent="processSave">
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

            <div class="form-group">
              <label for="confirmation" class="cols-sm-2 control-label label-element">Confirm Password</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                  <input
                    name="confirmation"
                    class="form-control"
                    v-model="confirmation"
                    v-validate="'required|confirmed:password'"
                    type="password"
                    placeholder="Confirm password"
                    data-as-vv-as="password"
                  >
                </div>
                <i v-show="errors.has('confirmation')" class="fa fa-warning"></i>
                <span v-show="errors.has('confirmation')" class="help is-danger">{{ errors.first('confirmation') }}</span>
              </div>
            </div>

            <b-button
              class="btn btn-primary btn-log btn-bock login-button"
              variant="success"
              type="submit"
              block
            >Create Account</b-button>

          </form>
          <b-button
            class="btn secondary btn-log btn-bock btn-secondary"
            style="margin-top:2%; max-width:30%;"
            block
          ><i class="fa fa-caret-square-o-left"></i>
            <router-link to="login" style="text-decoration: none; color:inherit;">  Back</router-link></b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js'

export default {
  name: 'Register',
  data: function () {
    return {
      email: '',
      password: '',
      confirmation: '',
      successfullyRegistered: false
    }
  },
  methods: {
    signUp: function () {
      console.log(this.email, this.password)
      let poolData = {
        UserPoolId: 'eu-west-1_K7tIw04Ij',
        ClientId: '11f10uefa40qu2v0j2n42ovee'
      }
      let userPool = new CognitoUserPool(poolData)
      userPool.signUp(this.email, this.password, [], null, function (err, result) {
        if (err) {
          alert(err.message || JSON.stringify(err))
          return
        }
        let cognitoUser = result.user
        console.log('user name is ' + cognitoUser.getUsername())
      })
    },
    processSave: function () {
      console.log(this.email, this.password)
      this.$validator.validateAll().then(res => {
        if (res) {
          this.signUp()
          this.successfullyRegistered = true
        } else {
          console.log('nooooooooooooooo')
        }
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
    /*max-width: 400px;*/
    padding: 10px 40px;
    background:white; /* important!! #bebec6 */
    color: black;
    text-shadow: none;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
  }

  .login-button {
    margin-top: 5px;
  }

  .label-element {
    float: left;
    color: black;
  }

  .is-danger {
    color: red;
  }

</style>
