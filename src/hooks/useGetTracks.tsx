import {useQuery} from "@tanstack/react-query";
import { ApiClient } from "../../api";

type tracks = {
    MRData:{
        xmlns : string;
        series :  string;
        url :   string;
        limit : string;
        offset : string;
        total: string;
        CircuitTable:{
            season:string;
            Circuits:{
                circuitId: string;
                url: string;
                circuitName: string;
                Location:{
                    lat: string;
                    long: string;
                    locality: string;
                    country: string;
                }
            }[]
        }
    }
}

export const useGetTracks = () => {
    return useQuery<tracks>({
      queryKey: ["tracks"],
      queryFn: ApiClient.getTracks,
    });
  };