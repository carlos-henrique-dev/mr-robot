<template>
  <div class="file-item">
    <span>{{ file.name }} ({{ file.size | kb }} kb)</span>

    <div class="delete-file">
      <span
        :class="['message', showMessage && 'show']"
        @click="removeFile(file.name)"
        >{{ `Excluir ${file.name}` }}</span
      >
      <trash v-show="!showMessage" @clicked="openMessage()" />
      <cancel v-show="showMessage" @clicked="closeMessage()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FileItem",
  props: {
    file: {
      type: File,
      required: true,
    },
  },
  data() {
    return {
      showMessage: false,
    };
  },
  methods: {
    openMessage() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    },
    closeMessage() {
      this.showMessage = false;
    },
    removeFile(name) {
      this.$emit("delete", name);
      this.closeMessage();
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/variables.scss";

.file-item {
  color: $white;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 5px 3px 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  span {
    margin-right: auto;
  }

  .delete-file {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .message {
      padding: 2px;
      margin-right: 2px;
      background: $primary;
      color: $white;
      border-radius: 5px;
      font-size: 15px;
      position: absolute;
      right: -150px;
      visibility: hidden;
      transition: all 0.3s ease-in-out;

      &.show {
        right: 25px;
        visibility: inherit;
      }
    }
  }

  &:hover {
    background: $background;
    border-radius: 5px;
  }
}
</style>