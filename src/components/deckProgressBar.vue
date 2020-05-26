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
      totalValueOf1: Number,
      totalValueOf2: Number,
      totalValueOf3: Number,
      totalValueOf4: Number,
      totalValueOf5: Number,
      totalValueOf6: Number,
      totalValueOf7: Number,
      totalValueOf8: Number,
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
        for (var i = 0; i < this.bars.length; i++) {
          var value = this.totalValueOf2;
            this.bars[1].value = value *10;
            console.log(value);
        }
      }
    },
    computed: {
    }
  }
</script>