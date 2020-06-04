<template>
  <div>
    <b-navbar toggleable="lg" type variant>
      <b-container>
        <b-navbar-brand href="#">DECKCRAFTER</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Tier List Deck</b-nav-item>
            <b-nav-item href="#">Nouvelle Extension</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search for a meal"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0 navbar_button" type="submit">Search</b-button>
            </b-nav-form>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navbar"
};
</script>
<style lang="scss" scoped>
.navbar {
  background-color: $main-blue;
  padding: 0;
  border-bottom:1px solid $main-yellow;
  box-shadow: rgb(20, 11, 36) 0px 2px 6px 0px;
}
.navbar-brand {
  font-weight: 700;
  padding:0;
  color:$main-yellow
}
.navbar_button {
  background-color: $main-yellow;
  border-color: $main-yellow;
  color: $main-grey;
  &:hover {
    background-color: $secondary-yellow;
    border-color: $secondary-yellow;
    color: $main-grey;
  }
}
.nav-item .nav-link {
  color: white;
  opacity: 1;
  padding: 1.5em;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 700;
  transition: 0.2s ease;

  &:hover {
    border-bottom-color: $secondary-yellow;
    color: $main-yellow;
  }
}
</style>