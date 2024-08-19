<template>
    <aside class="dashboard-sidebar">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Reportes</a></li>
          <li><a href="#">Ajustes</a></li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'DashboardSidebar',
  }
  </script>
  
  <style scoped>
  .dashboard-sidebar {
    width: 200px;
    background-color: #f4f4f4;
    padding: 1rem;
  }
  .dashboard-sidebar ul {
    list-style: none;
    padding: 0;
  }
  .dashboard-sidebar li {
    margin: 0.5rem 0;
  }
  .dashboard-sidebar a {
    text-decoration: none;
    color: #333;
  }
  </style>