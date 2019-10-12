<template>
  <span>
    {{text}}
    {{secondText}}
  </span>
</template>

<script>
export default {
  name: "polishdeclinationnumbers",
  props: ["text", "zero", "one", "twoFour", "afterFive", "value"],
  data() {
    return {
      secondText: ""
    };
  },
  methods: {
    setDeclination() {
       this.secondText =
        this.value == 0
          ?  this.zero
          :  this.value == 1
          ?  this.one
          :  this.value > 1 &&  this.value < 5
          ?  this.twoFour
          :  this.value > 4
          ?  this.afterFive
          : null;
    }
  },
  mounted() {
    this.setDeclination() 
  },
};
</script>

