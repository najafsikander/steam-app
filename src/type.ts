export type api_response = {
    status: number;
    message: string;
    data: any
}

export type game_info = {
    id: string;
    image: string;
    name: string;
    price: string;
}

export type game_search_response = {
    search: [game_info],
    total: number
}