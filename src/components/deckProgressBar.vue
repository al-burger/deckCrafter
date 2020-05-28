<template>
  <div>
    <div v-for="(bar, index) in bars" class="row mb-1" v-bind:key="index">
      <div class="col-sm-2">  <b-badge variant="primary" pill>  {{ index }}</b-badge></div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="bar.value" :variant="bar.variant"></b-progress>
      </div>
    </div>
            <b-button @click="updateProgressBar()">test</b-button>
  </div>
</template>

<script>
  export default {
    name: 'deckProgressBar',
    props: {
      valueOfCards: Array
    },
     data() {
      return {
        bars: [
          { variant: '1', value: 0 },
          { variant: '2', value: 0 },
          { variant: '3', value: 0 },
          { variant: '4', value: 0 },
          { variant: '5', value: 0 },
          { variant: '6', value: 0 },
          { variant: '7', value: 0 },
          { variant: '8', value: 0 },
        ],
      }
    },
    methods: {
      updateProgressBar() {
        console.log(this.valueOfCards)
        for (var i = 0; i < this.bars.length; i++) {
          var percentValue = this.valueOfCards[i].quantity *10;
          this.bars[i].value = percentValue;
        }
      }
    },
    computed: {
    }
  }
</script>