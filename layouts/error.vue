<template>
  <div class="mainbox">
    <div class="err">404</div>
    <div class="msg">Maybe this page moved? <br>
      Got deleted? <br>
      Is hiding out in quarantine? <br>
      Never existed in the first place?
      <p>
        Let's go
        <NuxtLink to="/">home page</NuxtLink>
        and try from there.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
.mainbox {
  background-color: #f3fbfb;
  margin: auto;
  height: 50vh;
  width: 100%;
  position: relative;
}

.err {
  color: #666666;
  font-size: 11rem;
  position: relative;
  text-align: center;
}

.msg {
  text-align: center;
  font-size: 18px;
  position: relative;
  width: 100%;
  color: #333333;
}

a {
  text-decoration: underline;
  color: #999999;
  margin: 0 !important;
}

a:hover {
  text-decoration: none;
}
</style>
