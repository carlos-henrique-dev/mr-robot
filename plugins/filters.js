import Vue from "vue";

Vue.filter("kb", (val) => {
	return Math.floor(val / 1024);
});