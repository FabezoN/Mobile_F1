import {useQuery} from "@tanstack/react-query";
import { ApiClient } from "../../api";

export type DriversDetails= {
    MRData:{
        xmlns : string;
        series :  string;
        url :   string;
        limit : string;
        offset : string;
        total: string;
        DriverTable:{
            driverId: string;
            Drivers: {
                driverId: string,
                permanentNumber: string,
                code: string,
                url: string,
                givenName: string,
                familyName: string,
                dateOfBirth: string,
                nationality: string,
            }[]
        }
    }
}

export const useGetDriversDetails = () => {
    return useQuery<DriversDetails>({
      queryKey: ["DriversDetails"],
      queryFn: ApiClient.getDriverDetails,
    });
  };