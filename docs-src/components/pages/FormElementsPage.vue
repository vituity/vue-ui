<template lang="pug">
Page(title="Form Elements")
  .page--body
    .b-box
      vue-input.is-primary(v-model="string" placeholder="Type a message" iconLeft="fas fa-times")
      vue-input.is-info(v-model="string" placeholder="Search a fruit" :suggestion="suggestion")
      vue-input(v-model='string' placeholder='Type a message' status='danger' icon-right='fas fa-exclamation-circle')
      vue-input(icon-right="lock" type="password" class="is-accent" v-model="string" placeholder="Password")
      button.b-btn.is-primary
        .b-icon
          i.fa.fa-recycle(@click="string = ''")
        span Reset
</template>

<script>
export default {
  data() {
    return {
      string: '',
      suggestions: [
        'apple',
        'orange',
        'banana'
      ]
    }
  },
  computed: {
    suggestion() {
      return this.suggestions.find(
        s => s.startsWith(this.string)
      )
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
