<template>
	<div>
		<!--DIV REMPLIEs -->
		<div v-for="(cost, costKey) in bars" class="row mb-1" :key="'manaCost'+costKey">
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
            card: Array
        },
        data() {
            return {
                localCards: this.card,
                bars: [0,0,0,
                     0,
                     0,
                     0,
                     0,
                     0,
                ],
			};
        },
        /**watch: {
            localCards:function() {
                this.bars.forEach((value, key) => {
                    this.localCards.forEach((card)=>{
                        if(card.cost == key){

                            this.bars[key] = this.bars[key]+1;

                            this.$forceUpdate();
						}
					})
                });
            }
        }*/
    }
    ;
</script>