<template>
  <b-container>
    <b-row>
      <b-col>
        <ButtonAndFilters />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <sidebarDeck :card="card"/>
        <Card @addCardEvent="addCard($event)" />
        <div style="color:white">arrayCostCard : {{arrayCostCard}}</div>
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
      arrayCostCard: []
    };
  },
  methods: {
    addCard(card, totalCostCard) {
      console.log('card', card);
      console.log('totalCostCard', totalCostCard)
      if (this.card.length < 10) {
        this.card.push(card);
      } else {
        alert("Le Deck Est Plein !");
      }
      this.arrayCostCard = this.totalCostCard
    },
  },
};
</script>
<style scoped>
</style>