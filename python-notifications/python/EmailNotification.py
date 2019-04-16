import os
import smtplib
import imghdr
from email.message import EmailMessage

class EmailNotification:

    def __init__(self):
        self._sender_email = os.environ.get('SENDER_EMAIL')
        self._sender_email_password = os.environ.get('SENDER_EMAIL_PASSWORD')
        self._server_address = os.environ.get('SENDER_EMAIL_ADDRESS')
        self._server_port_number = os.environ.get('SENDER_EMAIL_PORT_NUMBER')
        print(os.environ)

    @property
    def sender_email(self):
        return self._sender_email

    @sender_email.setter
    def sender_email(self, sender_email_new):
        self._sender_email = sender_email_new

    @sender_email.deleter
    def sender_email(self):
        del self._sender_email

    @property
    def sender_email_password(self):
        return self._sender_email_password

    @sender_email_password.setter
    def sender_email_password(self, sender_email_password_new):
        self._sender_email_password = sender_email_password_new

    @sender_email_password.deleter
    def sender_email_password(self):
        del self._sender_email_password

    @property
    def server_address(self):
        return self._server_address

    @property
    def server_port_number(self):
        return self._server_port_number

    def send_email(self, reciever_email, body, subject):

        msg = EmailMessage()

        msg['Subject'] = subject
        msg['From'] = self.sender_email
        msg['To'] = reciever_email

        msg.set_content("Sexy devil")

        # 'HTML BODY EXAMPE
        # msg.add_alternative("""
        # <!DOCTYPE html>
        # <html>
        # <body>
        # <h1>HI</h1>
        # <h6>Bye</h6>
        # </body>
        # </body>
        # """, subtype='html')

        # 'msg['To'] = [self.sender_email, "Chestersouthwood.gmail.com", "lilchedder13@gmail.com"]
        # 'Can send to multiple emails without looping, may be handy for 'emergency' messages or changes

        # 'attach photo and pdf example
        # 'can submit any list of pics, and any list of documents, but not both list combined at once

        #'Image(s)

        #msg.set_content("Image attached")

        files = ['randomCat.png', 'randomCat2.png']
        for file in files:
            with open(file, 'rb') as f:
                file_data = f.read()
                file_type = imghdr.what(f.name)
                file_name = f.name

        #' msg.add_attachment(file_data, maintype='image', subtype=file_type)
            msg.add_attachment(file_data, maintype='image', subtype=file_type, filename=file_name)

        #'File(s)

        # msg.set_content("Image attached")
        #
        # files = ['plain.txt', 'plain2.pdf']
        # for file in files:
        #     with open(file, 'rb') as f:
        #         file_data = f.read()
        #         file_type = imghdr.what(f.name)
        #         file_name = f.name
        #
        #     msg.add_attachment(file_data, maintype='application', subtype='octet-stream', filename=file_name)

        try:
            with smtplib.SMTP_SSL(self._server_address, self._server_port_number) as server:
                server.login(self.sender_email, self.sender_email_password)
                server.send_message(msg)
                print("Email sent")
        except Exception as e:
                print(e)
                print("Email NOT sent")
