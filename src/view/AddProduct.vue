<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import api from "@/axios";

const product_name = ref("");
const price = ref("");
const quantity = ref("");
const image = ref(null);

const handleImage = (e) => {
  image.value = e.target.files[0];
};

const addBtn = async (e) => {
  const formData = new FormData();
  formData.append("product_name", product_name.value);
  formData.append("price", price.value);
  formData.append("quantity", quantity.value);
  formData.append("image", image.value);

  try {
    await api.post("", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    useToast().success("Product added successfully!");
    product_name.value = "";
    price.value = "";
    quantity.value = "";
    image.value = "";
  } catch (e) {
    useToast().error("Failed to add product.");
  }
};
</script>

<template>
  <div class="form-container w-75 mx-auto shadow-lg mt-4 rounded-4">
    <form class="p-4 w-50 mx-auto" @submit.prevent="addBtn">
      <h4 class="text-center">Add Product</h4>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          name="formId1"
          id="formId1"
          placeholder=""
          required
          v-model="product_name"
        />
        <label for="formId1">Product Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          name="formId1"
          id="formId1"
          placeholder=""
          required
          v-model="quantity"
        />
        <label for="formId1">Quantity</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          name="formId1"
          id="formId1"
          placeholder=""
          required
          v-model="price"
          step="0.01"
        />
        <label for="formId1">Price</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="file"
          class="form-control"
          name="formId1"
          id="formId1"
          placeholder=""
          required=""
          @change="handleImage"
          accept="image/*"
        />
        <label for="formId1">Upload Image</label>
      </div>

      <button
        name=""
        id=""
        class="btn btn-primary w-100"
        type="submit"
        role="button"
      >
        Add Product
      </button>
    </form>
  </div>
</template>
