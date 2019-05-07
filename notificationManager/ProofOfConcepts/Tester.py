from EmailNotification import EmailNotification
import os

class Tester:

    def main(self):
        t = EmailNotification()
        t.send_email("lilchedder13@gmail.com", "TestHeadFromMain", "TestBodyFromMain")

test_instance = Tester()

if __name__ == "__main__":
    test_instance.main()
else:
    print("Tester did not run")