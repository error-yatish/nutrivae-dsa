function Test(n) {
    if (n < 5) {
        print (n) // 1
    } else {
        for(i = 0; i < n; i++) {
            print(i) // n
        }
    }
}

// Best case: O(1)
// Worst case: O(n)