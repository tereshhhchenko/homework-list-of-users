<template>
  <section class="container">
    <div class="card">
      <h1><slot name="heading"></slot></h1>
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: $s-l;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 48rem) {
    padding: $s-xxl;
  }
}

.card {
  width: 100%;
  box-shadow: $sha-card;
  border-radius: $rad-card;
  max-width: 62rem;
  padding: $s-m;
  display: flex;
  flex-direction: column;
  min-height: 70vh;

  @media screen and (min-width: 48rem) {
    padding: $s-xl;
  }

  @media screen and (min-height: 32rem) {
    height: 86vh;
    overflow-y: auto;
  }

  h1 {
    font-size: 2.4rem;
    text-align: center;
    padding-bottom: $s-l;
    color: $c-heading;

    @media screen and (min-width: 48rem) {
      font-size: 3.6rem;
    }
  }
}
</style>
