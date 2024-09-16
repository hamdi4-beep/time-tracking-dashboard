export type Data = {
    title: string
    src: string
    timeframes: {
        daily: {
            current: number
            previous: number
        }
        weekly: {
            current: number
            previous: number
        }
        monthly: {
            current: number
            previous: number
        }
    }
}