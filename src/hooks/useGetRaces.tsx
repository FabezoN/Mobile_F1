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
                firstPractice:{
                    date: string;
                    time: string;
                }
                songPractice:{
                    date: string;
                    time: string;
                }
                thirdPractice:{
                    date: string;
                    time: string;
                }
                qualifying:{
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