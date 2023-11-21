const BASE_URL = "http://ergast.com/api/f1";

export class ApiClient {
  static getConstructors = async () => {
    return fetch(`${BASE_URL}/current/constructorStandings.json`).then((res) => res.json());
  };

  static getTracks = async () => {
    return fetch(`${BASE_URL}/2023/circuits.json`).then((res) => res.json());
  };
}
