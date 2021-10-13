<script lang="ts">
import BaseLayout from "~/components/BaseLayout.vue";
import Loader from "~/components/Loader.vue";

export default {
  components: { BaseLayout, Loader },
  data() {
    return {
      loadingFiles: false,
    };
  },
  computed: {
    isLoading(): Boolean {
      return this.loadingFiles;
    },
  },
  methods: {
    startLoading() {},
    finishLoading() {},
    goToAnalytics() {
      this.$router.push({ path: "/analytics" });
    },
    handleFileDrop(e: any) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      [...droppedFiles].forEach((f) => {
        this.$store.commit("files/add", f);
      });

      this.goToAnalytics();
    },
    handleFileInput(e: any) {
      let inputFiles = e.target.files;

      if (!inputFiles) return;
      [...inputFiles].forEach((f) => {
        this.$store.commit("files/add", f);
      });
      this.goToAnalytics();
    },
  },
};
</script>

<template>
  <base-layout>
    <main class="home-container">
      <robot-logo />
      <h1 class="title">Mr Robot</h1>
      <p class="subtitle">
        Extraia informação de arquivos PDF de forma rápida e fácil.
      </p>
      <NuxtLink to="/tutorial" class="button">Como usar</NuxtLink>

      <div
        class="drag-and-drop-area"
        v-cloak
        @drop.prevent="handleFileDrop"
        @dragover.prevent
      >
        <loader v-show="isLoading" />
        <p v-show="!isLoading">
          <span>
            Arraste e solte os PDF's aqui
            <br />
            ou clique no botão abaixo para selecionar os arquivos.
          </span>

          <input
            type="file"
            id="upload"
            hidden
            accept=".pdf"
            name="file-input"
            multiple="True"
            @change="handleFileInput"
            class="custom-file-input"
          />
          <label for="upload" class="custom-file-label">
            Selecionar arquivos
          </label>
        </p>
      </div>
    </main>
  </base-layout>
</template>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 125px;

  .subtitle,
  .title {
    color: $white;
  }

  .title {
    font-weight: 700;
    margin: 15px 0 0;
  }
  .subtitle {
    margin-top: 15px;
  }

  .button {
    margin-top: 80px;
  }

  .drag-and-drop-area {
    margin-top: 70px;
    width: 100%;
    max-width: 800px;
    background: $light-background;
    border: dotted 2px $primary;
    border-radius: 10px;
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
      color: $white;
      line-height: 25px;

      span {
        color: $white;
        margin-bottom: 15px;
        display: block;
      }

      .custom-file-label {
        background-color: $primary;
        color: white;
        padding: 0.5rem;
        font-family: sans-serif;
        border-radius: 0.3rem;
        cursor: pointer;
        margin-top: 1rem;
      }
    }
  }
}
</style>