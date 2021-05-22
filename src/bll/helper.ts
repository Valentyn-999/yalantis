export const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"]

const state = "2019-09-03T04:38:44.400Z"
const parts = state.split('T')[0].split("-").reverse()
let v = `${Number(parts[0])} ${months[Number(parts[1])]} ${parts[2]} year`
export function getTheDate(date: any) {

}