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

export interface Indicator {
    name: string
    data: number

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
    long_all: Array<string>
    short_all: Array<string>
    long_change: Array<string>
    short_change: Array<string>
    name: string
}

export interface FedWatch {
    current: string
    categories: Array<string>
    now: Array<number>
    oneday: Array<number>
    oneweek: Array<number>
    onemonth: Array<number>

}

export interface Contents {
    title: string
    descrip: string
    image: string
    url:string
    content:string
    created_at:string
    type:string
    viewer:string
    keyword:string
}

export interface Previews {
    title: string
    descrip: string
    thumb: string
    url:string
    viewer:number
    created_at:string
}


