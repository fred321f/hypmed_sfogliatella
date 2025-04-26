<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink> | 
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/example">Example</NuxtLink>
      </nav>
    </header>
    
    <main>
      <NuxtPage />
    </main>
    
    <footer>
      <p>&copy; 2025 My Nuxt App</p>
    </footer>
  </div>
</template>

<style scoped>
nav {
  background: #333;
  padding: 10px;
}
nav a {
  color: white;
  margin-right: 10px;
  text-decoration: none;
}
footer {
  margin-top: 20px;
  text-align: center;
  padding: 10px;
  background: #eee;
}
</style>
