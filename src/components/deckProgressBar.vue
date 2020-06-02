<template>
  <div>
    {{costCounterArray}}
    <div v-for="(result, index) in costCounterArray" class="row mb-1" v-bind:key="index">
      <div class="col-sm-2">
        <b-badge variant="primary" pill>{{ result.cost }}</b-badge>
      </div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="result.count * 10"></b-progress>
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
    };
  },
  methods: {
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
    }
  }
};
</script>