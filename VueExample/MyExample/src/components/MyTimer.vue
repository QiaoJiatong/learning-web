<template>
    <label
     >Elapsed Time: <progress :value="progressRate"></progress
   ></label>
 
   <div>{{ (elapsed / 1000).toFixed(1) }}s</div>
 
   <div>
     Duration: <input type="range" v-model="duration" min="1" max="30000">
     {{ (duration / 1000).toFixed(1) }}s
   </div>
 
   <button @click="reset">Reset</button>
 </template>
 <script>
 export default {
   name: "MyTimer",
   data() {
     return {
       duration: 15 * 1000,
       elapsed: 0,
     };
   },
   created() {
     this.reset()
   },
   unmounted() {
     cancelAnimationFrame(this.handle)
   },
   computed: {
     progressRate() {
       return Math.min(this.elapsed / this.duration, 1)
     }      
   },
   methods: {
     update() {
       this.elapsed = performance.now() - this.lastTime
       if (this.elapsed >= this.duration) {
         cancelAnimationFrame(this.handle)
       } else {
         this.handle = (this.update)
       }
     },
     reset() {
       this.elapsed = 0
       this.lastTime = performance.now()
       this.update()
     }
   }
 }
 </script>
 
 <style></style>
 