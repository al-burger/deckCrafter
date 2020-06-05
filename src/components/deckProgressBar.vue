<template>
	<div>
		<!--DIV REMPLIEs -->
		<div v-for="(cost, costKey) in totalCostCard" class="row mb-1" :key="'manaCost'+costKey">
			<div class="col-sm-2">
				<b-badge variant="primary" pill>{{ costKey }}</b-badge>
			</div>

			<div class="col-sm-10 pt-1">
				<b-progress :value="cost * 10"></b-progress>
			</div>

		</div>

	</div>
</template>

<script>
    export default {
        name: "deckProgressBar",
        props: {
            totalCostCard: Array
        },
        data() {
            return {
			};
        },
    }
    ;
</script>