<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Recieved</h2>
      </header>
      <ul></ul>
      <h3>You haven't recieved any requests yet!</h3>
    </base-card>
  </section>
</template>

<style lang="scss" scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
