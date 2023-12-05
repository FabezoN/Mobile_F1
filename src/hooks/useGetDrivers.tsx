import {useQuery} from "@tanstack/react-query";
import { ApiClient } from "../../api";

export type DriverStandingTable = {
    position: number;
    positionText: number;
    points: number;
    wins: string;
    Driver: {
        driverId: string,
        permanentNumber: string,
        code: string,
        url: string,
        givenName: string,
        familyName: string,
        dateOfBirth: string,
        nationality: string,
    }
    Constructors: {
        constructorId: string;
        url: string;
        name: string;
        nationality: string;
    } []
}


export type DriversTable = {
    MRData:{
        xmlns : string;
        series :  string;
        url :   string;
        limit : string;
        offset : string;
        total: string;
        StandingsTable:{
            season: string;
            StandingsLists: {
                season: string;
                round: string;
                DriverStandings: DriverStandingTable[]
            }[]
        }
    }
}

export const useGetDrivers = () => {
    return useQuery<DriversTable>({
      queryKey: ["DriverTable"],
      queryFn: ApiClient.getDrivers,
    });
};
  