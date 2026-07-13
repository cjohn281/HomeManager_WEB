<script setup>
  import { ref, onMounted } from "vue";
  import { getPersons } from "../../api/budgetmanager";


  const persons = ref([]);

  onMounted(async () => {
    try {
      const response = await getPersons();
      persons.value = Array.isArray(response) ? response : [];
    } catch (error) {
      console.error("Failed to load persons", error);
      persons.value = [];
    }
  });
</script>

<template>
  <div>
    <h1>Persons</h1>
    <ul>
      <li v-for="person in persons" :key="person.prnID ?? person.id">
        {{ person.prnNameFirst ?? person.name ?? "Unknown person" }}
        {{ person.prnEmail ?? person.email ?? "Unknown email" }}
      </li>
    </ul>
  </div>
  <div class="container mt-4">
    <h1 class="mb-3">Stuff</h1>

    <button class="btn btn-primary">Add Stuff</button>

    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Stuff</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>