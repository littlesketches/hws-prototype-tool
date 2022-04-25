import App from './App.svelte';
import 'leaflet/dist/leaflet.css';

const queryParams = new URLSearchParams(window.location.search)

const app = new App({
	target: document.body,
	props: {queryParams}
});

export default app;