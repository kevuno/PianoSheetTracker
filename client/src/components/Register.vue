<template>
  <div>
        <section class="section">
            <div class="container is-one-fifth">
                <h1 class="title"> Register </h1>
                <p class="subtitle">
                My first website with <strong>Bulma AND Vue.js</strong>!
                </p>
                <form>
                    <div class="columns">
                    <div class="column">
    
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="Email input" v-model="email">
                                    
                                </div>
                            </div>
                    </div>
                    <div class="column">
                            <div class="field">
                                <label class="label"> Password </label>
                                <div class="control">
                                    <input class="input" type="password" name="password" id="password" v-model="password">
                                </div>
                            </div>
                    
                    </div>
                    </div>
                </form>
                
            </div>
        </section>


    

  </div>
  
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: 'Insert your email here',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
