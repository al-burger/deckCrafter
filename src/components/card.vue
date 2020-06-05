
<template>
  <div>
    <div style="color:white">{{totalCostCard}}</div>
    <div style="color:white">{{totalCostCard[1]}}</div>
    <div v-if="cards.length" class="card-container">
      <b-row>
        <b-col cols="3" :key="card.title" class="DC-card" v-for="card in cards">
          <b-card :header="card.title | toUpperCase" align="center">
            <div class="overlay">
              <div class="addToDeck">
                <b-button @click="addCard(card);incrementTotalCostCard(card)">Ajouter au deck</b-button>
              </div>
            </div>
            <b-card-text>COÛT : {{ card.cost }}</b-card-text>
            <b-card-footer>
              <div class="stats atk">
                ATK :
                <span>{{ card.attack }}</span>
              </div>
              <div class="stats def">
                DEF :
                <span>{{ card.defense }}</span>
              </div>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <h5>No meals available yet 😢</h5>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cards: [
        {
          title: "Paysan",
          cost: "1",
          attack: "1",
          defense: "1"
        },
        {
          title: "Disciple",
          cost: "2",
          attack: "2",
          defense: "2"
        },
        {
          title: "Maitre",
          cost: "4",
          attack: "4",
          defense: "4"
        },
        {
          title: "Armurier",
          cost: "3",
          attack: "2",
          defense: "4"
        },
        {
          title: "Brute",
          cost: "5",
          attack: "8",
          defense: "2"
        },
        {
          title: "General",
          cost: "6",
          attack: "5",
          defense: "7"
        },
        {
          title: "Sorcier",
          cost: "6",
          attack: "8",
          defense: "4"
        },
        {
          title: "Loup Sauvage",
          cost: "2",
          attack: "3",
          defense: "1"
        },
        {
          title: "Roi",
          cost: "8",
          attack: "7",
          defense: "9"
        },
        {
          title: "Archer",
          cost: "4",
          attack: "6",
          defense: "2"
        },
        {
          title: "Epouvantail",
          cost: "1",
          attack: "0",
          defense: "2"
        },
        {
          title: "Forgeron",
          cost: "3",
          attack: "3",
          defense: "3"
        }
      ],
      totalCostCard: [0, 0, 0, 0, 0, 0, 0, 0],
    };
  },
  filters: {
    toUpperCase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    }
  },
  methods: {
    addCard(card) {
      this.$emit("addCardEvent", card);
    },
    incrementTotalCostCard(card) {
      if (card.cost == 1) {
        this.$set(this.totalCostCard, 1, this.totalCostCard[1] + 1)
      } else {
        console.log("pas cool");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.DC-card {
  padding: 1em;
}

.card-container {
  padding: 1em 0 3em;
}

.card {
  border: 1px solid $main-yellow;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.75em;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba($main-yellow, 0.4) 0px 0px 5px 3px;
  }

  .card-header {
    background-color: $main-yellow;
    color: $main-grey;
  }

  .card-body {
    padding: 0;

    .card-text {
      margin-top: 1em;
    }
  }

  .card-footer {
    padding: 0;
    display: flex;
    justify-content: space-around;

    .stats {
      width: 5em;
      height: 2em;
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
}

.overlay {
  transition: 0.3s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
</style>