## Part 5: Explaining my logic

### What each variable represents
- `age`: the applicant's age
- `score`: the applicant's interview score
- `hasLaptop`: true if the applicant has access to a working laptop
- `hasInternet`: true if the applicant has stable internet access
- `completedApplication`: true if the applicant finished the application

### What each condition does
- The first `if` checks for a **priority** applicant: age above 18, score above 85, and a laptop, internet and a completed application.
- The `else if` checks for an **eligible** applicant: the same requirements, but the score only needs to be above 60.
- The `else` catches everyone who failed at least one requirement and prints "not eligible".

### Logical operators used
- `&&` (AND) joins the requirements so all of them must be true
- Comparison operators `>` check that age and score are above the limits.

### Why the order of conditions matters
JavaScript checks from top to bottom and stops at the first true condition. The priority check (score above 85) comes first because a score of 90 also passes the "above 60" check. If eligible came first, a priority applicant would be labelled eligible and never reach the priority line. 

### Why an applicant can still fail with a high score
Because the conditions are joined with `&&`, every one must be true. If even one is false, such as no internet or an incomplete application, the whole condition is false, no matter how high the score is. 

### The difference between `&&` and `||`
- `&&` (AND): every condition must be true.
- `||` (OR): at least one condition must be true.
- Here I used `&&` because the applicant must meet all requirements. `||` would let someone pass with only one. 

### A mistake or bug I ran into and how I fixed it
forgot to save when i started iteration testing and misrepresented the result before correcting and saving