function divisibleSumPairs(n, k, ar) {
    var ans = 0;
    for (var i = 0; i < ar.length - 1; i++) {
        for (var j = i+ 1; j < ar.length; j++) {
            if((ar[i] + ar[j]) % k === 0) {
                ans += 1;
            }
        }
    }
    return ans;

}
