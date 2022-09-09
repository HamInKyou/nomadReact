export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  ); //fetch promise를 리턴해줘야해!
}
