<template>
  <b-container>
    <b-row>
      <b-col>
        <ButtonAndFilters />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <sidebarDeck :card="card" :totalCostCard="totalCostCard"/>
        <Card @addCardEvent="addCard($event)" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Card from "./card.vue";
import sidebarDeck from "./sidebarDeck.vue";
import ButtonAndFilters from "./ButtonAndFilters.vue";

export default {
  name: "card",
  components: {
    Card,
    sidebarDeck,
    ButtonAndFilters
  },
  data() {
    return {
      card: [],
      totalCostCard:[],
    };
  },
  methods: {
    addCard(payload) {
      console.log('card', payload.card);
      console.log('totalCostCard', payload.totalCostCard)
      if (this.card.length < 10) {
        this.card.push(payload.card);
        this.totalCostCard = payload.totalCostCard;
      } else {
        alert("Le Deck Est Plein !");
      }
    },
  },
};
</script>
<style scoped>
</style>