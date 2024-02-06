# Python has several built-in data types. Here are the most commonly used ones:

# Numeric Types: int, float, complex
# Sequence Types: list, tuple, range
# Text Sequence Type: str
# Binary Sequence Types: bytes, bytearray, memoryview
# Set Types: set, frozenset
# Mapping Type: dict
# Boolean Type: bool
# None Type: None

# Bool   =>   bool()
# ------------------------------------------------------------------
# If / elif / else 
# if 1==2:
#     print(f'1 == 1 is => {1==2}')
# elif 1==1:
#     print(f'1 == 1 is => {1==1}')
# else:
#     print(1==2)
# ------------------------------------------------------------------
# match / case
# HTTPS_status = 200
# match HTTPS_status:
#     case 200 | 201:
#         print('OK')
#     case 404:
#         print('Not found')
#     case 301 | 302:
#         print('Redirect')
#     case _:
#         print('Unknown')
# ------------------------------------------------------------------

# EXERCISES
# 1. Reverse and input from a user    &&    Reverse a number
# RU: 
#     Берите текст от клиента и выведите на терминале. 
#     Найти зеркальное число.
# inp = input("What is your name: ")
# print(inp[::-1])
# print(str(num)[::-1])
# ----------------------------------------------------------
# 2. Swap first and last digits of a number
# RU: Поменяйте местами первую и последнюю цифры числа.
# x = 123456789
# x = str(x)
# print(int(x[-1] + x[1:-1] + x[0]))
# ----------------------------------------------------------
# 3. check if a string is a palindrome

# def is_polindrome(arg) -> bool:
#     if type(arg) == int:
#         arg = str(arg)
#     # if isinstance(arg, int):
#     #     arg = str(arg)
#     return arg == arg[::-1]
# print(is_polindrome(input('Guess a polindrome: ')))
# ----------------------------------------------------------

# SOLUTIONS FOR PREVIOUS EXERCISES
# print(str(num)[::-1])
# print(input('Enter a number: ')[::-1])
# print(str(num)[-1] + str(num)[1:-1] + str(num)[0])
# print(str(num) == str(num)[::-1])
