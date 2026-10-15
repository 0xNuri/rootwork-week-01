# Scholarship Eligibility

## Plain English

To pass the scholarship interview, some criteria must be met, which include:

1. A score above 60
2. Must have stable internet access
3. Must have access to a functioning laptop
4. Must have completed the application
5. Must be above 18

If an applicant passes the above criteria and scores above 85, they'd be bumped up to a priority applicant in the admission process.

## Pseudocode
IF participant scores above 85 AND has internet AND has completed application AND has laptop AND is above 18
PRINT Priority candidate
ELSE IF participant scores above 60 AND has internet AND has completed application AND has laptop AND is above 18
PRINT Eligible
ELSE
PRINT Not eligible


## Tests

### Test 1
- **Input:** age = 17, score = 90, hasLaptop = true, hasInternet = true, completedApplication = true
- **Expected result:** Not eligible
- **Actual result:** Not eligible

### Test 2
- **Input:** age = 21, score = 50, hasLaptop = true, hasInternet = true, completedApplication = true
- **Expected result:** Not eligible
- **Actual result:** Not eligible

### Test 3
- **Input:** age = 21, score = 70, hasLaptop = true, hasInternet = false, completedApplication = true
- **Expected result:** Not eligible
- **Actual result:** Not eligible

### Test 4
- **Input:** age = 21, score = 70, hasLaptop = true, hasInternet = true, completedApplication = false
- **Expected result:** Not eligible
- **Actual result:** Not eligible

### Test 5
- **Input:** age = 21, score = 70, hasLaptop = false, hasInternet = true, completedApplication = true
- **Expected result:** Not eligible
- **Actual result:** Not eligible

### Test 6
- **Input:** age = 18, score = 90, hasLaptop = true, hasInternet = true, completedApplication = true
- **Expected result:** Not eligible
- **Actual result:** Not eligible

### Test 7
- **Input:** age = 21, score = 60, hasLaptop = true, hasInternet = true, completedApplication = true
- **Expected result:** Not eligible
- **Actual result:** Not eligible

### Test 8
- **Input:** age = 21, score = 90, hasLaptop = true, hasInternet = true, completedApplication = true
- **Expected result:** Priority candidate
- **Actual result:** Priority candidate