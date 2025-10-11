
import type { api_response, game_search_response } from '@/type';
import { GAME_SEARCH_API_URL,RAPID_HOST_HEADER, RAPID_HOST_VALUE, RAPID_KEY_HEADER } from "@/constants";

export const searchGames = async (term: string) => {
    try {
        console.log('Searching for games with term: ',term);
        console.log('RAPID_API_KEY: ',process.env.RAPID_API_KEY);
        console.log('VITE_RAPID_API_KEY: ',process.env.VITE_RAPID_API_KEY);
        if(!process.env.RAPID_API_KEY || !process.env.VITE_RAPID_API_KEY) throw new Error("API key is not defined in environment variables");
        const response = await fetch(`${GAME_SEARCH_API_URL}${encodeURIComponent(term)}`,{
            headers: {
                [RAPID_HOST_HEADER]: RAPID_HOST_VALUE,
                [RAPID_KEY_HEADER]: '621b5a1b1dmshb2cd4ebcd50e9cfp1a7c99jsnedeef3fbc421'
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