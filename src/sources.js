async function creditsGetApi() {
  return (await fetch('http://localhost:9999/api/credits?limit=2000')).json();
}
async function sourcesGetApi() {
  return (await fetch('http://localhost:9999/api/sources?limit=2000')).json();
}

const sources = [creditsGetApi(), sourcesGetApi()];

const results = async () => await Promise.all(sources);

export default results;
