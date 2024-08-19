<template>
    <header class="dashboard-header">
      <div class="content-header">
        <img :src="biblionero" alt="" class="logo-header">
        <h1 class="title-header">Biblionero</h1>
      </div>
  
    </header>
  </template>
  
  <script>
  import Biblionero from '../../assets/Biblionero.png';
  
  export default {
    name: 'DashboardHeader',
    data() {
      return {
        biblionero: Biblionero,
      };
    },
  }
  </script>
  
  <style scoped>
  .dashboard-header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  .content-header{
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  
  .logo-header{
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
  
  .title-header{
    flex: 1;
    text-align: center;
  }
  </style>