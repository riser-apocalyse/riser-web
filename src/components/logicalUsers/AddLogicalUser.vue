<template>
  <div>
    <h1>Choose the type of profile</h1>
    <ul class="nav nav-tabs nav-fill" style="margin-top: 5%;">
      <li class="nav-item">
        <router-link :to="{ name: 'createCandidateUser' }" style="text-decoration:none; color:inherit;">
          <div class="nav-link">
            <h3>Candidate</h3>
          </div>
        </router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link :to="{ name: 'createCandidateUser' }" style="text-decoration:none; color:inherit;">
          <div class="nav-link">
            <h3>Candidate</h3>
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'createCandidateUser' }" style="text-decoration:none; color:inherit;">
          <div class="nav-link">
            <h3>Candidate</h3>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'add-user-form'
}
</script>
<style>
  .card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
  }
</style>
