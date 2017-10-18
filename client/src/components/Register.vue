<template>
  <div>
    <h1> Register </h1>
    <form>
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email input" value="">
                <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
                </span>
            </div>
        </div>


        <label for="password"> Password </label>
        <input type="password" name="password" id="password">
    </form>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
