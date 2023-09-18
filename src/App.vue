<script setup>
import TheHeader from "@/components/theHeader.vue";
import TheForm from "@/components/theForm.vue";
</script>

<template>
  <div class="header">
    <theHeader />
  </div>
  <main>
    <theForm />
  </main>
</template>

<style scoped>
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

@media (min-width: 1024px) {
  .header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

}
</style>
