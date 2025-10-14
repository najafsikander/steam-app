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

export type pricing = {
    discount: string;
    originalPrice: string;
    discountPrice: string;
}

export type external_links = {
    name: string;
    link: string;
}

export type sys_req = {
    window: {
        min: [string];
        recomm: [string];
    }
}

export type game_details = {
    name: string;
    desc: string;
    release_date: string;
    about_game: string;
    pricing: [pricing];
    external_links: [external_links];
    tags: [string];
    lang: [string];
    dev_details: {
        developer_name: string;
        publisher: string;
        franchise: string;
    };
    media: {
        screenshots: [string];
        videos: [string];
    };
    sys_req: sys_req;
}