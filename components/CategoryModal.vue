
<script>
import Modal from "./Modal.vue";
import { categoryInitialState } from "~/mixins/category.js";

const defaultForm = {
  name: "",
  description: "",
  keyWords: "",
};

export default {
  name: "CategoryModal",
  components: { Modal },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    selectedCategory: {
      type: Object | null,
      default: null,
    },
  },
  data() {
    return categoryInitialState();
  },
  watch: {
    selectedCategory: function (newVal) {
      if (newVal !== null) {
        this.formData = {
          ...newVal,
          keyWords: newVal.keyWords.join(","),
        };
      } else {
        this.clearForm();
      }
    },
  },
  computed: {
    isValid() {
      return (
        this.formData.name.trim() !== "" &&
        this.formData.keyWords.replaceAll(/,/g, "").trim() !== ""
      );
    },
  },
  methods: {
    clearForm() {
      Object.assign(this.$data, categoryInitialState());
    },
    close() {
      this.clearForm();
      this.$emit("closeModal");
    },
    saveCategory() {
      this.$emit("save", this.formData);
      this.close();
    },
  },
  created() {
    this.clearForm();
  },
};
</script>
	
<template>
  <modal :title="'Criar Categoria'" :isOpen="showModal" @close="close">
    <div class="content">
      <form class="form">
        <div class="item">
          <label for="name">Nome *</label>
          <input id="name" type="text" v-model="formData.name" />
        </div>
        <div class="item">
          <label for="description">Descrição</label>
          <input id="description" type="text" v-model="formData.description" />
        </div>
        <div class="item">
          <label for="keyWords">Palavra chave *</label>
          <input id="keyWords" type="text" v-model="formData.keyWords" />
          <span class="field-tip"
            >Se tiver mais de uma palavra chave, separe elas usando
            vírgula.</span
          >
        </div>
      </form>
      <div class="bottom">
        <button
          :class="['button', !isValid && 'disabled']"
          @click="saveCategory()"
        >
          Salvar
        </button>
      </div>
    </div>
  </modal>
</template>

<style lang="scss">
@import "../assets/style/variables.scss";

.content {
  display: flex;
  flex-direction: column;
}

.form {
  width: 100%;

  .item {
    display: flex;
    flex-direction: column;
    margin: 10px 0 20px;

    label {
      color: $white;
      font-size: 15px;
      margin-bottom: 7px;
    }

    input {
      font-size: 16px;
      height: 20px;
      color: $white;
      border: none;
      outline: none;
      border-bottom: 1px solid $white;
      background: none;
    }

    .field-tip {
      margin: 5px 0 0 5px;
      font-size: 12px;
      color: $white;
    }
  }
}

.bottom {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .button {
    &.disabled {
      background-color: #888;
      cursor: not-allowed;
    }
  }
}
</style>