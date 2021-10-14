<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="50"
    viewBox="0 0 40 50"
    fill="none"
	class="trash"
	@click="clicked"
  >
    <g clip-path="url(#clip0)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.85714 44.4444C2.85714 47.5 5.42857 50 8.57143 50H31.4286C34.5714 50 37.1429 47.5 37.1429 44.4444V11.1111H2.85714V44.4444ZM8.57143 16.6667H31.4286V44.4444H8.57143V16.6667ZM30 2.77778L27.1429 0H12.8571L10 2.77778H0V8.33333H40V2.77778H30Z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="40" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
	methods: {
		clicked() {
			this.$emit('clicked')
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.trash {
	width: 20px;
	height: 25px;
  path {
    fill: $primary;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>