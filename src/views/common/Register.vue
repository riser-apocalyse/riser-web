<template>
  <div class="app cover flex-row align-items-center">
    <!--<div class="container">-->
      <!--<b-row class="justify-content-center">-->
        <!--<b-col md="6" sm="8">-->
          <!--<b-card no-body class="mx-4">-->
            <!--<b-card-body class="p-4">-->
              <!--<h1>Register</h1>-->
              <!--<p class="text-muted">Create your account</p>-->

              <!--<b-input-group class="mb-3">-->
                <!--&lt;!&ndash;<input type="text" class="form-control" placeholder="First Name" v-model="firstName">&ndash;&gt;-->
                <!--<input-->
                  <!--name="firstName"-->
                  <!--v-model="firstName"-->
                  <!--v-validate="'required|alpha'"-->
                  <!--:class="{ 'input': true, 'is-danger': errors.has('name') }"-->
                  <!--type="text" placeholder="First name"-->
                <!--&gt;-->
                <!--<i v-show="errors.has('firstName')" class="fa fa-warning"></i>-->
                <!--<span v-show="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</span>-->
                <!--<input type="text" class="form-control" placeholder="Last Name" v-model="lastName">-->
              <!--</b-input-group>-->

              <!--<b-input-group class="mb-3">-->
                <!--<div class="input-group-prepend">-->
                  <!--<span class="input-group-text">@</span>-->
                <!--</div>-->
                <!--<input type="text" class="form-control" placeholder="Email" v-model="email">-->
              <!--</b-input-group>-->

              <!--<b-input-group class="mb-3">-->
                <!--<div class="input-group-prepend">-->
                  <!--<span class="input-group-text">-->
                    <!--<i class="icon-lock"></i>-->
                  <!--</span>-->
                <!--</div>-->
                <!--<input-->
                  <!--v-validate="'required'"-->
                  <!--type="password"-->
                  <!--class="form-control"-->
                  <!--placeholder="Password"-->
                  <!--v-model="password"-->
                <!--&gt;-->
                <!--<input-->
                  <!--v-validate="'required|confirmed:password'"-->
                  <!--type="password"-->
                  <!--class="form-control"-->
                  <!--placeholder="Confirm password"-->
                  <!--v-model="passwordConfirmation"-->
                  <!--data-as-vv-as="password"-->
                  <!--@blur="validatePassword"-->
                <!--&gt;-->
              <!--</b-input-group>-->

              <!--<b-button v-on:click="signUp" variant="success" block>Create Account</b-button>-->
            <!--</b-card-body>-->
          <!--</b-card>-->
        <!--</b-col>-->
      <!--</b-row>-->
    <!--</div>-->
  <!--</div>-->
    <div class="container">
      <div class="row main" style="text-align: center; margin: 0 auto;">
        <div class="main-login main-center">
          <h5>Sign up once and watch any of our free demos.</h5>
          <form class="" method="post" action="#">

            <div class="form-group">
              <label for="name" class="cols-sm-2 control-label">Your Name</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-text"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                  <!--<input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>-->
                  <input
                  name="firstName"
                  class="form-control"
                  v-model="firstName"
                  v-validate="'required|alpha'"
                  :class="{ 'input': true, 'is-danger': errors.has('firstName') }"
                  type="text" placeholder="First name"
                  >
                  <i v-show="errors.has('firstName')" class="fa fa-warning"></i>
                  <span v-show="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</span>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="email" class="cols-sm-2 control-label">Your Email</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-text"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                  <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="username" class="cols-sm-2 control-label">Username</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-text"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                  <input type="text" class="form-control" name="username" id="username"  placeholder="Enter your Username"/>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="password" class="cols-sm-2 control-label">Password</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                  <input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
              <div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-text"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                  <!--<input type="password" class="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>-->
                  <input
                  v-validate="'required|confirmed:password'"
                  type="password"
                  class="form-control"
                  placeholder="Confirm password"
                  v-model="passwordConfirmation"
                  data-as-vv-as="password"
                  @blur="validatePassword"
                  >
                </div>
              </div>
            </div>

            <div class="form-group ">
              <a href="http://deepak646.blogspot.in" target="_blank" type="button" id="button" class="btn btn-primary btn-lg btn-block login-button">Register</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import VeeValidate from 'vee-validate'

export default {
  name: 'Register',
//  components: {
//    VeeValidate
//  },
  data: function () {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    signUp: function () {
      console.log(this.email, this.password)
      let userData = {
        email: this.email,
        password: this.password,
        first: this.firstName,
        last: this.lastName,
        user_type: this.userType
      }
      let url = `http://${SERVER_URL}/user/riseranagraph.fcgi`
      return axios
        .post(url, { user: userData })
        .then(res => {
          return res.data
        })
        .catch(res => {
          console.log('ERROR: ' + res)
        })
    },
    validatePassword: function () {
      this.$validator.validateAll()
        .then(function (response) {
          //
        })
        .catch(function (e) {
          //
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
  #button {
    border: 1px solid #ccc;
    margin-top: 28px;
    padding: 6px 12px;
    color: #666;
    text-shadow: 0 1px #fff;
    cursor: pointer;
    -moz-border-radius: 3px 3px;
    -webkit-border-radius: 3px 3px;
    border-radius: 3px 3px;
    -moz-box-shadow: 0 1px #fff inset, 0 1px #ddd;
    -webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;
    box-shadow: 0 1px #fff inset, 0 1px #ddd;
    background: #f5f5f5;
    background: -moz-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f5f5f5), color-stop(100%, #eeeeee));
    background: -webkit-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    background: -o-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    background: linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);
  }
  .main-center{
    margin-top: 30px;
    margin: 0 auto;
    position: relative;
    /*max-width: 400px;*/
    padding: 10px 40px;
    background:#bebec6; /* important!! */
    color: #FFF;
    text-shadow: none;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);

  }

  .login-button{
    margin-top: 5px;
  }

</style>
