<template>
  <main class="app-container">
    <nav v-show="showHeader" class="nav-bar">
      <robot-logo size="small" />
      <nuxt-link to="/" class="home-anchor">Mr Robot</nuxt-link>
    </nav>
    <slot></slot>
    <footer>
      <span>{{ new Date().getFullYear() }}</span>
      <span
        >Desenvolvidor por
        <a href="https://carloshenrique.dev">Carlos Henrique</a></span
      >
      <span
        ><a href="https://github.com/carlos-henrique-dev/mr-robot"
          >Repositório do projeto</a
        ></span
      >
    </footer>
  </main>
</template>

<script>
import RobotLogo from "./RobotLogo.vue";
export default {
  components: { RobotLogo },
  props: {
    showHeader: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/variables.scss";

.app-container {
  background: $background;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .nav-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;

    .home-anchor {
      color: $white;
      margin-left: 15px;
      text-decoration: none;
      font-weight: bold;
      font-size: 25px;
    }
  }

  footer {
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    span {
      font-size: 12px;
      margin: 0 10px;
      color: $white;
      a {
        color: $primary;
        text-decoration: none;
      }
    }
  }
}
</style>