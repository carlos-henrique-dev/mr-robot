<template>
  <div :class="['card', isSelected && 'selected']">
    <div @click="handleSelect(data.id)" class="wrapper">
      <h1 class="title">{{ data.name.toUpperCase() }}</h1>
      <span class="description">{{ data.description }}</span>
      <span class="keyWords">{{ formatKeyWorkds(data.keyWords) }}</span>
    </div>
    <div class="options">
      <div class="edit" @click="handleEdit(data)">Editar</div>
      <div class="delete" @click="handleDelete(data.id)">Remover</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatKeyWorkds(keyWords) {
      let concatened = "";

      keyWords.forEach((word, index, array) => {
        concatened = concatened + ` ${word}`;
        if (!(index + 1 > array.length - 1)) concatened = concatened + ",";
      });

      return concatened;
    },
    handleSelect(id) {
      this.$emit("select", id);
    },
    handleDelete(id) {
      this.$emit("delete", id);
    },
    handleEdit(category) {
      this.$emit("edit", category);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/variables.scss";

.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 250px;
  border: 2px solid transparent;
  border-radius: 5px;
  position: relative;
  min-height: 60px;
  padding: 5px;

  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .title,
    .description,
    .keyWords {
      display: block;
      margin: 0 0 3px 0;
      color: $white;
    }
    .title {
      letter-spacing: 1px;
      font-size: 16px;
    }

    .description {
      font-size: 14px;
    }

    .keyWords {
      font-weight: 300;
      font-size: 11px;
      padding-left: 5px;
    }
  }

  .options {
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    width: 100%;
    background: $light-background;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    .edit,
    .delete {
      color: $white;
      width: 100%;
      text-align: center;
      padding: 5px 0;
    }
    .edit {
      border-bottom-left-radius: 5px;
    }
    .delete {
      border-bottom-right-radius: 5px;
    }
  }

  &.selected {
    border-color: $primary;
    background: $light-background;
  }

  &:hover {
    border: 2px solid $primary;
    cursor: pointer;

    .options {
      opacity: 1;
    }
  }
  .edit {
    &:hover {
      background: $primary;
    }
  }
  .delete {
    &:hover {
      background: $primary;
    }
  }
}
</style>