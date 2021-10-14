<template>
  <div></div>
  <!-- <section class="container">
    <div>
      <h2>Write to Firestore.</h2>
      <div>
        <button @click="writeToFirestore">
          <span>Write now</span>
        </button>
      </div>
    </div>
    <div>
      <h2>Read from Firestore.</h2>
      <div>
        <button @click="readFromFirestore">
          <span> Read now </span>
        </button>
      </div>
    </div>
  </section> -->
</template>

<script>
// import { db } from "~/plugins/firebase";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// export default {
//   methods: {
//     async readFromFirestore() {
//       const ref = doc(db, "testCollection", "testDoc");
//       try {
//         const document = await getDoc(ref);
//         alert(document.data().text);
//       } catch (e) {
//         alert("Error!");
//         console.error(e);
//       }
//     },
//     async writeToFirestore() {
//       const ref = doc(db, "testCollection", "testDoc 3");
//       const document = {
//         text: "Firebase 9 rocks 3!",
//       };
//       try {
//         const response = await setDoc(ref, document);
// 		console.log(response)
//         alert("Success!");
//       } catch (e) {
//         alert("Error!");
//         console.error(e);
//       }
//     },
//   },
// };
</script>

<style>
/* .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>

