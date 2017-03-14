/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
// const Interval = function (start, end) {
//     this.start = start;
//     this.end = end;
// }
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
const insertInterval = (intervals, newInterval) => {
   let result = [];
     intervals.map(i => {
        // 目前的end 小於 新的start => 保留目前
        if (i.end < newInterval.start) { 
            result.push(i); 
        }
        // 目前的start 大於 新的end => 加入新的
        else if (i.start > newInterval.end ) {
            result.push(newInterval);
            newInterval = i;
        }
        // 重疊的話 merge
        else if (i.end >= newInterval.start || i.start <= newInterval.end) {
            let min = Math.min(i.start, newInterval.start);
            let max = Math.max(i.end, newInterval.end);
            newInterval = new Interval(min, max);
        }
    });
    result.push(newInterval);
    return result.map(i=>([i.start, i.end]));
}
console.log(insertInterval([new Interval(1,3), new Interval(6,9)], new Interval(2,5)));