//max area
function maxArea(height) {
    let max=0
    let left=0
    let right=height.length-1
    while(left<right){
        let h=Math.min(height[left],height[right])
        max=Math.max(max,h*(right-left))
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return max

}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))