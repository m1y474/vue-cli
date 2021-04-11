<template>
  <!-- テンプレートの中は１つの要素である必要がある -->
  <div>
    <header-component></header-component>
    <button v-on:click="alertDialog">click !</button>
    <h3>{{ heading }}</h3>
    <input v-model="inputValue" />
    <p>文字数: {{ inputCount }}</p>
    <p class="red">{{ validateMessage }}</p>
    <a href="http://localhost:8080/#/">back</a>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'ComponentA',
  components: {
    'header-component': Header
  },
  data () {
    return {
      heading: 'title text',
      inputCount: 0,
      inputValue: '',
      validateMessage: ''
    }
  },
  watch: {
    inputValue: function (value) {
      this.validateMessage = ''
      if (value.length >= 10) {
        this.validateMessage = '10文字以内で入力してください。'
      }
      return (this.inputCount = value.length)
    }
  },
  methods: {
    alertDialog: function () {
      return alert('test message')
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
