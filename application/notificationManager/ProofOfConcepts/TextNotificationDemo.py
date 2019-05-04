import os
from twilio.rest import Client
import random

class TextNotification:

    @staticmethod
    def send_text_demo():
        account_sid = "AC3a0ee9182965b69fcd1197784ed7d678"
        auth_token = "dba3152c5db621d66875637a1ed0ad24"

        client = Client(account_sid, auth_token)

        greetings = ["greetings", "hello", "hi", "sup", "what's up", "how is the day?", "This is a cron job"]

        value = random.randint(0, len(greetings) -1)

        client.messages.create(
            to="5094960234",
            from_="+15092452263",
            body=greetings[value]
        )


if __name__ == "__main__":
    TextNotification.send_text_demo()
