<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close-modal-btn" @click="close">&times;</div>
          <div class="modal-content">
            <h3>Add Item</h3>
            <form @submit.prevent="handleSubmit">
              <div class="input-container">
                <input
                  type="text"
                  required
                  name="title"
                  placeholder="Title"
                  :value="title"
                  @input="updateTitle"
                />
              </div>
              <div class="input-container">
                <textarea
                  wrap="hard"
                  rows="4"
                  required
                  maxlength="450"
                  name="description"
                  placeholder="Describe your product"
                  :value="description"
                  @input="updateDescription"
                ></textarea>
              </div>
              <div id="imageInput" class="input-container">
                <label for="image" class="label-file"
                  >Choose product image</label
                >
                <input
                  id="image"
                  type="file"
                  name="image"
                  class="input-image"
                  @change="encodImage"
                  accept="image/*"
                />
                <img id="preview" class="modal-preview-image" :src="imageUrl" />
              </div>

              <div class="input-container">
                <input
                  type="number"
                  required
                  name="price"
                  min="1"
                  :value="price"
                  @input="updatePrice"
                />
              </div>
              <div class="modal-form-btn-wrapper">
                <input
                  v-if="!isUpdating"
                  id="modal-submit-btn"
                  class="modal-form-btn"
                  type="submit"
                  value="Create"
                />
                <input
                  v-if="isUpdating"
                  id="modal-submit-btn"
                  class="modal-form-btn"
                  type="submit"
                  value="Update"
                />
                <input
                  type="button"
                  id="modal-discard-btn"
                  class="modal-form-btn"
                  value="Discard"
                  @click="discard"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Modal",

  computed: {
    ...mapGetters([
      "userId",
      "productId",
      "isUpdating",
      "price",
      "title",
      "description",
      "imageUrl",
    ]),
  },

  methods: {
    updateTitle(e) {
      this.$store.commit("updateTitle", e.target.value);
    },

    updateDescription(e) {
      this.$store.commit("updateDescription", e.target.value);
    },

    updatePrice(e) {
      this.$store.commit("updatePrice", e.target.value);
    },

    updateImageUrl(image) {
      this.$store.commit("updateImageUrl", image);
    },

    close() {
      this.$store.dispatch("hideModal");
      this.$store.commit("clearForm");
    },

    discard() {
      this.$store.commit("clearForm");
    },

    showBlankImage() {
      let output = document.getElementById("preview");
      output.src = "";
    },

    previewImage(image) {
      let output = document.getElementById("preview");
      output.src = URL.createObjectURL(image);
    },

    encodImage(e) {
      let image = e.target.files[0];
      this.previewImage(image);
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        this.updateImageUrl(reader.result);
      };
    },

    handleSubmit() {
      const productData = {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
        userId: this.userId,
        price: this.price,
      };
      if (this.isUpdating) {
        this.$store.dispatch('updateProductInServer',{data : productData, productId : this.productId});
      } else {
        this.$store.dispatch('createProduct',{data : productData});
      }
      this.close();
    },
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 15px 30px;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease-out;
  overflow: hidden;
  transform: scale(0.85);
}

.close-modal-btn {
  font-size: 22px;
  font-weight: 600;
  background-color: transparent;
  float: right;
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 50px;
  text-align: center;
  line-height: 24px;
}

.close-modal-btn:hover {
  background-color: #002442;
  color: white;
}

.modal-content h3 {
  margin-top: 1em;
  color: #001325;
  text-align: center;
}

.modal-content form {
  width: 100%;
}

.modal-content form input {
  background-color: #edf2f5;
}

textarea {
  color: #636970;
  border: 1px #edf2f5 solid;
  resize: none;
  background-color: #edf2f5;
  font-size: 16px;
  font-weight: 600;
  max-height: 80px;
}

.input-container {
  padding: 15px;
  border-bottom: none;
  position: relative;
  background: #edf2f5;
  border-bottom: 1px solid #e6edf1;
  margin: 0.7em 0;
  border-radius: 0.25rem;
}

.label-file {
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  color: #636970;
}
.label-file:hover {
  color: #002442;
}

.input-image {
  display: none;
}

.modal-preview-image {
  width: 200px;
  max-height: 300px;
  border-radius: 0.25rem;
}
#imageInput {
  display: flex;
  flex-direction: column;
}

.modal-form-btn-wrapper {
  margin: 1.2em;
  display: flex;
  justify-content: space-around;
}

.modal-form-btn {
  width: 100px;
  padding: 0.5em;
  color: white;
  border-radius: 0.25rem;
  font-size: 16px;
  cursor: pointer;
}

#modal-submit-btn {
  background-color: #002442;
}

#modal-submit-btn:hover {
  background-color: #001325;
}

#modal-discard-btn {
  background-color: #001325;
}

#modal-discard-btn:hover {
  background-color: #002442;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media (max-width: 500px) {
  .modal-container {
    width: 100%;
  }
}
</style>
