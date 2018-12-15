<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
li{
	list-style: none;
}
*{
	margin: 0;
	padding: 0;
}
html,body{
	height: 100%;
	width: 100%;
}
#app{
	height: 100%;
	width: 100%;
	margin: 0;
}
</style>
