<template>
  <div id="app">
    {{this.$store.poruka}}
      <table>
          <thead>
          <tr>
            <th class="text-left">
              Ime
            </th>
            <th class="text-left">
              Prezime
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Broj mobitela
            </th>
            <th class="text-left">
              Adresa
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in this.$store.getters.kontakti"
              :key="item.mobitel"
          >
            <td>{{ item.ime }}</td>
            <td>{{ item.prezime }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.mobitel }}</td>
            <td>{{ item.adresa }}</td>
          </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('getKontakti');
  }
}
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>