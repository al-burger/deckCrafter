<template>
  <div>
    <b-sidebar id="sidebar-1" title="SidebarDeck" type="dark">
      <b-container>
        <b-row>
          <b-col>
            <b-list-group>
              <transition-group name="slide-fade">
                <b-list-group-item
                  class="d-flex justify-content-between align-items-center sideDeck-card"
                  v-for="(card, index) in card"
                  :key="card.title"
                >
                  <span class="sideDeck-card_title">{{card.title}}</span>
                  <span>{{card.attack}}</span>
                  <span>{{card.defense}}</span>
                  <b-badge variant="primary" pill>{{ card.cost }}</b-badge>
                  <b-button @click="removeCard(index)">Supprimer</b-button>
                </b-list-group-item>
              </transition-group>
            </b-list-group>
            <div
              class="sideDeck-counter"
              :class="[{ 'active' : this.card.length === 10 }]"
            >{{ totalCard }} / 10</div>
            <b-button v-if="this.card.length > 0" @click="removeDeck()">Supprimer tout</b-button>
            <div v-if="this.card.length === 10">Le deck est plein !</div>
            <deckProgressBar :card="card" />
          </b-col>
        </b-row>
      </b-container>
    </b-sidebar>
  </div>
</template>
<script>
import deckProgressBar from "./deckProgressBar.vue";

export default {
  name: "sidebarDeck",
  components: {
    deckProgressBar
  },
  data() {
    return {
    };
  },
  props: {
    card: Array
  },
  methods: {
    removeCard(index) {
      this.card.splice(index, 1);
    },
    removeDeck() {
      this.card.splice(0);
    }
  },
  computed: {
    totalCard() {
      return this.card.length;
    },
  }
};
</script>
<style lang="scss" scoped>
#sidebar-1 {
  background-color: black;
}
.sideDeck {
  &-card {
    padding: 0;

    .badge {
      margin: 0.5em;
    }
  }
  &-card_title {
    background-color: $main-yellow;
    padding: 0.5em;
    width: 5em;
  }
  &-counter {
    &.active {
      color: green;
    }
  }
}

.b-sidebar-body {
  padding: 0.5em 1em;
}
/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-1em);
  opacity: 0;
}
</style>