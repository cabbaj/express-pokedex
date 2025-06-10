let content = document.getElementById("content");

window.onload = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100");
  const data = res.data.results;

  console.log("all data", data);

  // create object to store the data what you want
  let pokemon = data.map((data, index) => {
    return {
      name: data.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        index + 1
      }.png`,
    };
  });

  console.log(pokemon);

  // update the HTML DOM
  pokeList = "";
  pokemon.forEach((pokemon) => {
    pokeList += `
          <div style="margin-left: 10px; margin-right: 10px">
          <h3>${pokemon.name}</h3>
          <img src="${pokemon.img}" style="width: 50px; height: 50px;">
          </div>`;
  });
  content.innerHTML += pokeList;
};
