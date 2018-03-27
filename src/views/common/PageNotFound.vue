<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-2">
              <h1>Page Not Found</h1>
              <p class="text-muted">Ups!, we could not find the requested page. Come back to
                <router-link to="login">login</router-link> and start again. :) </p>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',
  data: () => {},
  methods: {}
}
</script>

