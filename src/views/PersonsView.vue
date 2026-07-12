<script setup>
  import { ref, onMounted } from "vue";
  import { getPersons } from "../api/budgetmanager";

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
</template>