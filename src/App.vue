<script setup>
import TheHeader from "@/components/theHeader.vue";
import TheForm from "@/components/theTasks.vue";
</script>

<template>
  <section>
    <div class="header">
      <theHeader />
    </div>
    <theForm />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
