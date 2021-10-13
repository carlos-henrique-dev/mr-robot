<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
import BaseLayout from "~/components/BaseLayout.vue";
import Trash from "~/components/Trash.vue";

Vue.filter("kb", (val: any) => {
  return Math.floor(val / 1024);
});

export default {
  components: { BaseLayout, Trash },
  computed: {
    files(): any[] {
      console.log("files", this.$store.state.files.files);
      return this.$store.state.files.files;
    },
  },
  methods: {
    removeFile(file: any) {
      this.files = this.files.filter((f: any) => {
        return f != file;
      });
    },
  },
};
</script>

<template>
  <base-layout showHeader>
    <main class="analytics-container">
      <div class="categories">
        <h3 class="title">
          Escolha as categorias de informações que deseja extrair
        </h3>
        <button class="button">Adicionar categoria</button>
        <div class="items"></div>
      </div>
      <div class="file-list">
        <ul class="list">
          <li v-for="file in files" :key="file.name" class="item">
            <span>{{ file.name }} ({{ file.size | kb }} kb)</span>
            <trash />
            <!-- <button @click="removeFile(file)" title="Remove">X</button> -->
          </li>
        </ul>
      </div>
      <span class="files-count">{{
        `Arquivos para analisar: ${files.length}`
      }}</span>
      <button :class="['button', 'start']">Iniciar</button>
    </main>
  </base-layout>
</template>


<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

.analytics-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button {
    margin: 15px 0 25px;
    font-size: 15px;

    &.start {
      margin-top: 25px;
    }
  }
  .categories {
    margin-top: 65px;
    width: 100%;
    max-width: 800px;
    height: 400px; // TODO retirar esse valor fixo

    .title {
      color: $white;
    }
  }

  .file-list {
    background: $light-background;
    padding: 10px 10px 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 800px;
    max-height: 300px;
    overflow-y: scroll;
    box-sizing: border-box;

    .list {
      list-style: none;
      margin: 0;
      padding: 0;

      .item {
        color: $white;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 3px 5px 3px 10px;
        cursor: pointer;

        span {
          margin-right: auto;
        }

        &:hover {
          background: $background;
          border-radius: 5px;
        }
      }
    }
  }

  .files-count {
    max-width: 800px;
    width: 100%;
    color: $white;
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>