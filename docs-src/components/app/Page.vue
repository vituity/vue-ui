<template>
  <div class="page">
    <div class="page--header">
      <slot name="header">
        <h3 class="title">{{ title }} <small>{{ subTitle }}</small></h3>
      </slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.page {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page--header {
  padding: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 3rem;
  z-index: 1;
  flex: auto 0 0;
}

.page--header > * {
  flex: auto 0 0;
}

.title {
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: 0;
}

.spacer {
  flex: auto 1 1;
  width: 0;
  height: 0;
}

.page--body {
  padding: 10px;
}
</style>
