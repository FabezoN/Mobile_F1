import {useQuery} from "@tanstack/react-query";
import { ApiClient } from "../../api";


export type races = {
    MRData:{
        xmlns : string;
        series :  string;
        url :   string;
        limit : string;
        offset : string;
        total: string;
        RaceTable:{
            season:string;
            Races:{
                season: string;
                round: string;
                url: string;
                raceName: string;
                Circuit:{
                    circuitId: string;
                    url: string;
                    circuitName: string;
                    Location:{
                        lat: string;
                        long: string;
                        locality: string;
                        country: string;
                    }
                }
                date: string;
                time: string;
                FirstPractice:{
                    date: string;
                    time: string;
                }
                SecondPractice:{
                    date: string;
                    time: string;
                }
                ThirdPractice:{
                    date: string;
                    time: string;
                }
                Qualifying:{
                    date: string;
                    time: string;
                }
            }[]
        }
    }
}

export const useGetRaces = () => {
    return useQuery<races>({
      queryKey: ["races"],
      queryFn: ApiClient.getRaces,
    });
  };