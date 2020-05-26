<template>
  <div>
    <b-sidebar id="sidebar-1" title="SidebarDeck" shadow>
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
      <div class="sideDeck-counter" :class="[{ 'active' : this.card.length === 10 }]">{{ totalCard }} / 10</div>

      <b-button v-if="this.card.length > 0" @click="removeDeck()">Supprimer tout</b-button>
      <div v-if="this.card.length === 10">Le deck est plein !</div>


      <div v-if="this.valueOf1.length > 0" class>Nombre de carte qui valent 1 : {{ totalValueOf1 }}</div>
      <div v-if="this.valueOf2.length > 0" class>Nombre de carte qui valent 2 : {{ totalValueOf2 }}</div>
      <div v-if="this.valueOf3.length > 0" class>Nombre de carte qui valent 3 : {{ totalValueOf3 }}</div>
      <div v-if="this.valueOf3.length > 0" class>Nombre de carte qui valent 4 : {{ totalValueOf4 }}</div>
      <div v-if="this.valueOf3.length > 0" class>Nombre de carte qui valent 5 : {{ totalValueOf5 }}</div>
      <div v-if="this.valueOf3.length > 0" class>Nombre de carte qui valent 6 : {{ totalValueOf6 }}</div>
      <div v-if="this.valueOf3.length > 0" class>Nombre de carte qui valent 7 : {{ totalValueOf7 }}</div>
      <div v-if="this.valueOf3.length > 0" class>Nombre de carte qui valent 8 : {{ totalValueOf8 }}</div>
      <b-button @click="countValue()">Compter</b-button>
      <deckProgressBar :totalValueOf1="totalValueOf1" :totalValueOf2="totalValueOf2" :totalValueOf3="totalValueOf3" :totalValueOf4="totalValueOf4" :totalValueOf5="totalValueOf5" :totalValueOf6="totalValueOf6" :totalValueOf7="totalValueOf7" :totalValueOf8="totalValueOf8"/>
    </b-sidebar>

  </div>
</template>
<script>
import deckProgressBar from './deckProgressBar.vue'

export default {
  name: "sidebarDeck",
  components: {
    deckProgressBar
  },
  data() {
    return {
      valueOf1: [],
      valueOf2: [],
      valueOf3: [],
      valueOf4: [],
      valueOf5: [],
      valueOf6: [],
      valueOf7: [],
      valueOf8: [],
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
    },
    countValue() {
      this.card.forEach((item) => {
        if(item.cost == 1) {
          this.valueOf1.push(item);
        } else if (item.cost == 2) {
          this.valueOf2.push(item);
        } else if (item.cost == 3) {
          this.valueOf3.push(item);
        } else if (item.cost == 4) {
          this.valueOf4.push(item);
        } else if (item.cost == 5) {
          this.valueOf5.push(item);
        } else if (item.cost == 6) {
          this.valueOf6.push(item);
        } else if (item.cost == 7) {
          this.valueOf7.push(item);
        } else if (item.cost == 8) {
          this.valueOf8.push(item);
        }
      });
    },
  },
  computed: {
    totalCard() {
      return this.card.length;
    },
    totalValueOf1() {
      return this.valueOf1.length;
    },
    totalValueOf2() {
      return this.valueOf2.length;
    },
    totalValueOf3() {
      return this.valueOf3.length;
    },
    totalValueOf4() {
      return this.valueOf4.length;
    },
    totalValueOf5() {
      return this.valueOf5.length;
    },
    totalValueOf6() {
      return this.valueOf6.length;
    },
    totalValueOf7() {
      return this.valueOf7.length;
    },
    totalValueOf8() {
      return this.valueOf8.length;
    },
  },
};
</script>
<style lang="scss" scoped>
.sideDeck {
  &-card {
    margin: 0 1em;

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