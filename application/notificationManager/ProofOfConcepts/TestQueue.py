from Reminder import Reminder
from UserInfoObj import UserInfoObj
import heapq as heap

class TestQueue:

    @staticmethod
    def print_array(array):
        for index in range(len(array)):
            print(array[index])

    @staticmethod
    def demo():
        t = Reminder("Ches", 25)
        j = Reminder("Joe", 12)
        k = Reminder("Chet", 30)
        m = Reminder("Charlie", 32)
        y = Reminder("Charlie", 32)


        reminder_list = [t, j, m]

        heap.heapify(reminder_list)

        for x in range(len(reminder_list)):
            print(reminder_list[x], end=",")

        print()

        reminder_list.append(k)
        heap.heapify(reminder_list)

        for x in range(len(reminder_list)):
            print(reminder_list[x], end=",")

        print()

        reminder_list.pop()
        
        for x in range(len(reminder_list)):
            print(reminder_list[x], end=",")

        print(y in reminder_list)



if __name__ == '__main__':
    TestQueue.demo()

