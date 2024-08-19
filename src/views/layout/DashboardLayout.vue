<template>
    <div id="app">
      <DashboardHeader />
      <div class="main">
          <DashboardSidebar />
        <div class="content">
          <ContentPage/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DashboardHeader from './DashboardHeader.vue'
  import DashboardSidebar from './DashboardSidebar.vue'
  import ContentPage from './DashboardContent.vue'

  export default {
    name: 'App',
    components: {
      DashboardHeader,
      DashboardSidebar,
      ContentPage,
    },
  }
  </script>
  
  <style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .main {
    display: flex;
    flex: 1;
  }
  .content {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  