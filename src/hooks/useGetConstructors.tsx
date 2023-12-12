import {useQuery} from "@tanstack/react-query";
import { ApiClient } from "../../api";

type Constructor = {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

export type ConstructorStanding = {
    MRData:{
        xmlns : string;
        series :  string;
        url :   string;
        limit : string;
        offset : string;
        total: string;
        StandingsTable:{
            season: string;
            StandingsLists:{
                season: string;
                round: string;
                ConstructorStandings:{
                    position: string;
                    positionText: string;
                    points: string;
                    wins: string;
                    Constructor: Constructor
                }[]
            }[]
        }
    }
}

export const useGetProducts = () => {
    return useQuery<ConstructorStanding>({
      queryKey: ["ConstructorStanding"],
      queryFn: ApiClient.getConstructors,
    });
  };
  