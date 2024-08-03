export const value_converter = (value) => {
    if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`
        //return Math.floor(value / 1000000) + 'M'
    } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`
    } else {
        return value
    }
}