<template>
    <nav class="text-white mt-[2.5vw]">
        <div class="flex justify-around" >
            <div class="mt-[1vh]"> <a class="text-[28px]">Hi, i'm <span class=" animate-breathingTextAnim ">corrupted</span> </a> </div>

            <div class="py-[2.7vh] text-[16px]" >
             <a  href="#services" class=" hover:underline hover:cursor-pointer" >services</a> 
             <span class="ml-[0.2vw] mr-[0.2vw]"> / </span>
             <a href="#tech" class=" hover:underline hover:cursor-pointer">tech</a>
              <span class="ml-[0.2vw] mr-[0.2vw]"> / </span>
              <a  href="#contact" class=" hover:underline hover:cursor-pointer">contact</a>
        </div>
        </div>
        <div class="text-[18px] flex text-left ml-[18.8vw] flex-col ">
            <span> I'm a teenager who likes computers! </span> 
            <span v-if="listening"> I'm currently listening to  <span class="animate-breathingTextAnim"> {{ listening?.song }} </span> by <span class="animate-breathingTextAnim"> {{ listening?.artist }} </span> on <span class="animate-breathingTextAnim"> {{ listening?.album }} </span> </span>
            <span v-if="!listening"> I'm currently not listening to anything.</span>
        </div>
    </nav>
</template>

<script setup lang ="ts">
import { ref, onMounted } from "vue";
import { useLanyard, LanyardData } from '@leonardssh/use-lanyard';

const listening = ref();
  
onMounted(async () => {
  await useLanyard({
    userId: "1032318325637775471",
    socket: true,
    onPresenceUpdate(presence: LanyardData) {
      listening.value = presence.spotify || null;
    },
  });
});
</script>