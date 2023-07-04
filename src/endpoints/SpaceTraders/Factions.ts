import axios from "axios";
import { config } from "./config";

interface Traits {
    symbol: string,
    name: string,
    description: string,
}

interface Faction {
    symbol: string,
    name: string,
    description: string,
    headquarters: string,
    traits: Traits[],
}

type listFactionsResponse = {
    data: Faction[],
    meta: {
        total: number,
        page: number,
        limit: number
    }
}

async function listFactions() {
    var page = 1;
    const limit = 20;

    var factions: Faction[] = [];

    while(page > 0) {
        const { data, status } = await axios.get<listFactionsResponse>(
            config.baseUrl + `/factions?page=${page}&limit=${limit}`,
        )

        if(status == 200) {
            if(data.data.length > 0) {
                data.data.map(faction => {
                    factions.push(faction);
                })
            } else {
                break;
            }
        } else {
            break;
        }

        page++;
    }
    
    return factions;
}

export { listFactions }