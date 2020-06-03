<template>
  <div>
    <div v-for="(result, index) in costCounterArray" class="row mb-1" v-bind:key="index">
      <div class="col-sm-2">
        <b-badge variant="primary" pill>{{ result.cost }}</b-badge>
      </div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="result.count * 10"></b-progress>
      </div>
    </div>

    <hr/>

    <div v-for="(bar, index) in bars" class="row mb-1" v-bind:key="index">
      <div class="col-sm-2">
        <b-badge variant="primary" pill>{{ bar.cost }}</b-badge>
      </div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="bar.value *10"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deckProgressBar",
  props: {
    card: Array
  },
  data() {
    return {
      bars: [
          { cost: '1', value: 0 },
          { cost: '2', value: 0 },
          { cost: '3', value: 0 },
          { cost: '4', value: 0 },
          { cost: '5', value: 0 },
          { cost: '6', value: 0 },
          { cost: '7', value: 0 },
          { cost: '8', value: 0 }
        ],
    };
  },
  computed: {
    costCounterArray() {
      var costCounter = {};
      for (var i = 0; i < this.card.length; i++) {
        let key = this.card[i].cost;
        costCounter[key] = {
          cost: key,
          count:
            costCounter[key] && costCounter[key].count
              ? costCounter[key].count + 1
              : 1
        };
      }
      return Object.values(costCounter);
    },
  }
};
</script>