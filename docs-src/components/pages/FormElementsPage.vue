<template>
  <Page title="Form Elements">
    <div class="page--body">
      <div class="b-box">
        <vue-input
          class="is-primary"
          v-model="string"
          placeholder="Type a message"
          icon-left="fas fa-times"
        />
        <vue-input
          class="is-info"
          v-model="string"
          placeholder="Search a fruit"
          :suggestion="suggestion"
        />
        <vue-input
          v-model="string"
          placeholder="Type a message"
          status="danger"
          icon-right="fas fa-exclamation-circle"
        />
        <vue-input
          icon-right="lock"
          type="password"
          class="is-accent"
          v-model="string"
          placeholder="Password"
        />
        <button class="b-btn is-primary">
          <div class="b-icon">
            <i class="fa fa-recycle" @click="string = ''"></i>
          </div>
          <span>Reset</span>
        </button>
      </div>
    </div>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      string: '',
      suggestions: ['apple', 'orange', 'banana']
    };
  },
  computed: {
    suggestion() {
      return this.suggestions.find((s) =>
        s.startsWith(this.string)
      );
    }
  }
};
</script>

<style scoped>

</style>
