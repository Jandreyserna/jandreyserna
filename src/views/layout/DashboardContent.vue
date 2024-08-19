<template>
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    name: 'DashboardContent',
  }
  </script>
  
  <style scoped>
  .dashboard-card {
    background-color: white;
    border: 1px solid #ddd;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>