export interface Sliders {
    id: number
    image: string
    title: string
    descrip: string
}

export interface Chats {
    username: string
    content: string
    time: string
}

export interface News {
    title: string
    content: string
    time: string
    status: boolean
}

export interface Menus {
    title: string
    link: string
}

export interface ExpertAdvisor {
    status:boolean
    name: string
    balance: number
    equity: number
    profit: number
    live_profit: number
}


export interface ImageShows {
    title: string
    src: string

}