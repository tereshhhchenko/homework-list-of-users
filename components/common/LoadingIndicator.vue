<template>
  <div class="loader">Loading</div>
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $c-background;
  opacity: 0;
  animation: uppear 0.2s 0.35s; // Uppear only on slow connections
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes uppear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
