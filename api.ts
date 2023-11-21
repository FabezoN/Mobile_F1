const BASE_URL = "http://ergast.com/api/f1";

export class ApiClient {
  static getConstructors = async () => {
    return fetch(`${BASE_URL}/current/constructorStandings.json`).then((res) => res.json());
  };
  static getDrivers = async () => {
    return fetch(`${BASE_URL}/current/driverStandings.json`).then((res) => res.json());
  };
}
