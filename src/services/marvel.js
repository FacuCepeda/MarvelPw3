export async function getHeroes(startIndex = 0, amount = 20, searchText = "") {
  let postFix = "";
  if (searchText) {
    postFix = `&nameStartsWith=${searchText}`;
  }

  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=987f821ab5044c054598b7744de12d23&offset=${startIndex}&limit=${amount}${postFix}`
  )
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .catch((e) => console.error(e));
}
