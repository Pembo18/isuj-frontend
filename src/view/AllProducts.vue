<script setup>
import api from "@/axios";
import { ref, onMounted, nextTick } from "vue";

const table = ref(null);
const products = ref([]);

const display = async () => {
  try {
    const res = await api.get("");
    products.value = res.data;
    console.log(products.value);

    await nextTick();

    table.value = window.$("#myTable").DataTable();
  } catch (e) {}
};

$("#Edit").on("click", function () {
  console.log("Edit button clicked");
});

onMounted(() => {
  display();
});
</script>

<template>
  <h3 class="text-center">All Products</h3>
  <div class="table-container mx-auto" style="width: 75%">
    <div class="table-responsive">
      <table class="table table-primary" id="myTable">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Created at</th>
            <th scope="col">Update at</th>
            <th scope="col" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-for="product in products" :key="product.id">
            <td scope="row">{{ product.product_name }}</td>
            <td>{{ product.quantity }}</td>
            <td>₱ {{ product.price }}</td>
            <td>
              <img
                :src="product.image_url"
                class="img-fluid rounded-top"
                alt=""
                style="width: 50px; height: 50px"
              />
            </td>
            <td>{{ product.created_at }}</td>
            <td>{{ product.updated_at }}</td>
            <td colspan="2">
              <button id="Edit">Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
