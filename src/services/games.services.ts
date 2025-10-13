
import type { api_response, game_search_response } from '@/type';
import { GAME_SEARCH_API_URL,RAPID_HOST_HEADER, RAPID_HOST_VALUE, RAPID_KEY_HEADER } from "@/constants";

const API_KEY:string = import.meta.env.VITE_RAPID_API_KEY;

export const searchGames = async (term: string) => {
    try {
        if(!API_KEY) throw new Error("API key is not defined in environment variables");
        const response = await fetch(`${GAME_SEARCH_API_URL}${encodeURIComponent(term)}`,{
            headers: {
                [RAPID_HOST_HEADER]: RAPID_HOST_VALUE,
                [RAPID_KEY_HEADER]: API_KEY
            }
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data: api_response = await response.json();
        console.log("Search results:", data);
        const games: game_search_response = data.data;
        return games;
    } catch (error) {
        console.error("Error searching games:", error);
        throw error;
    }
}