function twoSum(nums, target){
    const mapa = {}

    for(let i=0; i<nums.length; i++){
        const complemento = target - nums[i];

        if(mapa[complemento] !== undefined){
            return [mapa[complemento], i];
        }
        mapa[nums[i]] = i;
    }
}