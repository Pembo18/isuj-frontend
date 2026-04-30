<script setup></script>

<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <RouterLink class="navbar-brand" :to="'/'">E-Commerce</RouterLink>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" :to="'/'" aria-current="page"
              >All Products
              <span class="visually-hidden">(current)</span></RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="'/add'">Add Products</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
