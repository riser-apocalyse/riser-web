<template>
  <div class="app cover flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>

              <b-input-group class="mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" placeholder="Email" v-model="email">
              </b-input-group>

              <b-input-group class="mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="icon-lock"></i>
                  </span>
                </div>
                <input type="password" class="form-control" placeholder="Password" v-model="password">
              </b-input-group>

              <b-button v-on:click="signUp" variant="success" block>Create Account</b-button>
            </b-card-body>
            <b-card-footer class="p-4">
              <b-row>
                <b-col cols="6">
                  <b-button block class="btn btn-facebook">
                    <span>facebook</span>
                  </b-button>
                </b-col>
                <b-col cols="6">
                  <b-button block class="btn btn-twitter" type="button">
                    <span>twitter</span>
                  </b-button>
                </b-col>
              </b-row>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Register',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            console.log('signed up')
          },
          function (err) {
            console.log('error', err)
          }
        )
    }
  }
}
</script>
