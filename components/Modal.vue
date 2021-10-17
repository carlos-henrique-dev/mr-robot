<script>
import Cancel from "~/components/Cancel.vue";

export default {
  components: { Cancel },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
			
<template>
  <div class="modal-mask" v-show="isOpen">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <cancel @clicked="closeModal" />
        </div>

        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/style/variables.scss";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  box-sizing: border-box;
	
	@media (max-width: 600px) {
		padding: 0 20px;
	}
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 800px;
  margin: 0px auto;
  padding: 20px 30px 10px;
  background-color: $light-background;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 10px;

}

.modal-header {
  display: flex;
  flex-direction: row;
  h3 {
    margin-top: 0;
    color: $white;
    margin-right: auto;
  }
}

.modal-body {
  margin: 20px 0;
  max-height: 90vh;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>