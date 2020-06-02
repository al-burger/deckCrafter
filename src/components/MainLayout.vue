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
    };
  },
  methods: {
    addCard(card) {
      if (this.card.length < 10) {
        this.card.push(card);
      } else {
        alert("Le Deck Est Plein !");
      }
    },
  },
};
</script>
<style scoped>
.test {
  color: white;
}
</style>