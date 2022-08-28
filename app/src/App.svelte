<script lang="ts">
  import {Router} from 'svelte-router-spa'
  import { routes } from './router/routes';
</script>
<div>
  <Router {routes}/>
</div>