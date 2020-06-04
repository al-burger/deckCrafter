<template>
  <sidebar-menu :menu="menu" collapsed="true" width="200px" />
</template>

<script>
import cardSVG from "../svg/cards.svg";
import deckSVG from "../svg/deck.svg";
import deckBuilder from "../svg/deckBuilder.svg";
export default {
  data() {
    return {
      menu: [
        {
          header: false,
          hiddenOnCollapse: true,
          hidden: true
        },
        {
          href: "/",
          title: "Liste de cartes",
          icon: {
            //adjust element
            element: "img",
            attributes: { src: cardSVG }
          }
        },
                {
          href: "/",
          title: "Créateur de deck",
          icon: {
            //adjust element
            element: "img",
            attributes: { src: deckBuilder }
          }
        },
        {
          href: "/",
          title: "Galeries de decks",
          icon: {
            //adjust element
            element: "img",
            attributes: { src: deckSVG }
          }
        },
      ]
    };
  }
};
</script>
<style lang="scss">
#app .v-sidebar-menu {
  border-right: 1px solid $main-yellow;
  position: relative;
  height: auto;

  .vsm--icon {
    background-color: transparent;
    margin-top: 5px;
  }
  .vsm--title {
    color: $main-yellow;
  }
  .vsm--mobile-bg {
    background-color: white;
  }
  .vsm--toggle-btn {
    background-color: transparent;
    border-top: 1px solid $main-yellow;
    display: flex;
    &::after {
      display: block;
      background-size: 1em;
      height: 1em;
      width: 1em;
      margin: auto;
      content: url("../svg/arrowSidemenu.svg");
      transform: rotate(0deg);
      transition: 0.2s ease;
    }
  }
  &.vsm_expanded {
    .vsm--toggle-btn::after {
      transform: rotate(180deg);
    }
  }
}
</style>