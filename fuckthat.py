"""Q2 - Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together,
give the target number. For example: answer([1,2,3], 4)should return [1,3]"""
test = [1, 2, 3, 4, 5]


def summation(array, target):
    for value in array:
        diff = target - value
        if value in array:
            answer_array = [value, diff]
            return answer_array


print(summation(test, 4))
