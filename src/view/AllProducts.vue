<script setup>
import api from "@/axios";
import { ref, onMounted, nextTick } from "vue";

const table = ref(null);
const products = ref([]);

const display = async () => {
  try {
    const res = await api.get("");
    products.value = res.data;

    await nextTick();

    table = window.$("#myTable").DataTable();
  } catch (e) {}
};

const editProductName = ref("");
const editPrice = ref("");
const editQuantity = ref("");
const editImage = ref("");

const editBtn = (product) => {
  editProductName.value = product.product_name;
  editPrice.value = product.price;
  editQuantity.value = product.quantity;
};

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
              <!-- Modal trigger button -->
              <button
                type="button"
                class="btn btn-primary me-2"
                data-bs-toggle="modal"
                :data-bs-target="'#modalId' + product.id"
                @click="editBtn(product)"
              >
                Edit
              </button>

              <!-- Modal Body -->
              <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
              <div
                class="modal fade"
                :id="'modalId' + product.id"
                tabindex="-1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modalTitleId">
                        {{ product.product_name }}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form action="">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            required
                            v-model="editProductName"
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
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
