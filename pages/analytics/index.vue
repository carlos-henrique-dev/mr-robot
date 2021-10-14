<script>
import BaseLayout from "~/components/BaseLayout.vue";
import Cancel from "~/components/Cancel.vue";
import Empty from "~/components/Empty.vue";
import FileItem from "~/components/FileItem.vue";
import Modal from "~/components/Modal.vue";
import Trash from "~/components/Trash.vue";

export default {
  data() {
    return {
      showModal: false,
      showConfirmRemoveDialog: false,
    };
  },
  components: { BaseLayout, Trash, Modal, Cancel, Empty, FileItem },
  computed: {
    files() {
      return this.$store.state.files.files;
    },
  },
  methods: {
    removeFile(fileName) {
      console.log("remove this file", fileName);
    },
    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<template>
  <base-layout showHeader>
    <main class="analytics-container" v-if="files.length > 0">
      <div class="categories">
        <h3 class="title">
          Escolha as categorias de informações que deseja extrair
        </h3>
        <button class="button" @click="openModal">Adicionar categoria</button>
        <div class="items"></div>
      </div>
      <div class="file-list">
        <ul class="list">
          <li v-for="file in files" :key="file.name" class="item">
            <file-item :file="file" @delete="removeFile" />
          </li>
        </ul>
      </div>
      <span class="files-count">{{
        `Arquivos para analisar: ${files.length}`
      }}</span>
      <button :class="['button', 'start']">Iniciar</button>
    </main>
    <main v-else class="analytics-container">
      <div class="empty">
        <empty />
        <h3 class="title">Nenhum arquivo para analisar</h3>
        <p>
          Volte para a página inicial e adicione algum arquivo PDF para iniciar
          o processo.
        </p>
        <nuxt-link to="/" class="button">Ir para a página inicial</nuxt-link>
      </div>
    </main>
    <modal :isOpen="showModal" />
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

  .title {
    color: $white;
  }

  .categories {
    margin-top: 65px;
    width: 100%;
    max-width: 800px;
    height: 400px; // TODO retirar esse valor fixo
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
    }
  }

  .files-count {
    max-width: 800px;
    width: 100%;
    color: $white;
    margin-top: 10px;
    font-size: 12px;
  }

  .empty {
    margin-top: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: $white;
      margin: 30px 0;
    }
  }
}
</style>