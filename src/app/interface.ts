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
    balance: number
    equity: number
    pos_profit: number
    his_profit: number
    per_profit: number
    id: number
}


export interface ImageShows {
    title: string
    src: string
}

export interface BankRates {
    name: string
    friendly: string
    current: number
    previous: number
    date: string
}

export interface ChartDatas {
    categories: Array<string>
    long: Array<string>
    short: Array<string>
    title: string
}

export interface FedWatch {
    current: string
    categories: Array<string>
    now: Array<number>
    oneday: Array<number>
    oneweek: Array<number>
    onemonth: Array<number>

}