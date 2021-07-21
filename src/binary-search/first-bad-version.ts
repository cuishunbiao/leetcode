/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        /**
         * 先定义三个变量，left,middle,right
         * 左中右三个值，判断中间值是否是正确的 isBadVersion(middle)
         * 如果正确说明正确版本在右侧；
         * 如果错误说明正确版本在左侧；
         */
        let left = 0, right = n;
        while (left <= right) {
            const middle = Math.floor(left + (right - left) / 2)
            // 如果版本正确，则向左收紧
            if (isBadVersion(middle)) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
        return left
    };
};