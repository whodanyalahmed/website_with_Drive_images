import numpy as np


# create an array using np
arr = np.array([2, 4, 8, 6, 3, 41, 5, 6])

# find mean of arr
mean = arr.mean()

# find mode of arr
val, mode = np.unique(arr, return_counts=True)
index = np.argmax(mode)

mode = val[index]

# find median
median = np.median(arr)

# find max
max = arr.max()

# find min
min = arr.min()

# find standard deviation
std = arr.std()

# find variance
var = arr.var()

print("Mean: ", mean)
print("Mode: ", mode)
print("Median: ", median)
print("Max: ", max)
print("Min: ", min)
print("Standard Deviation: ", std)
print("Variance: ", var)


# find roundoff values of arr
roundoff = np.round(arr, 2)
print("Roundoff: ", roundoff)
