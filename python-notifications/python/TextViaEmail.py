import smtplib
import os

email = os.environ.get('SENDER_EMAIL')
password = os.environ.get('SENDER_EMAIL_PASSWORD')
server_address = os.environ.get('SENDER_EMAIL_ADDRESS')
server_port_number =  os.environ.get('SENDER_EMAIL_VIA_TEXT_PORT_NUMBER')


vtext = "5096884894@vtext.com"
message = "EMERGENCY: CHANGE OF TIME"

msg= """
From: %s
To: %s
Subject:%s
""" % (email, vtext, message)

server = smtplib.SMTP(server_address, server_port_number)
server.starttls()
server.login(email, password)
server.sendmail(email, vtext, msg)
server.quit()