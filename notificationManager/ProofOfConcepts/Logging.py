import urllib
import re
import schedule
import time
from datetime import datetime
import logging

logging.basicConfig( level=logging.DEBUG)


class DemoObj:
    def __init__(self):
        self.x = 1

    def getX(self):
        return self.x



demoObj = DemoObj()
    

def job(sec = demoObj):
    sec.x = sec.getX() + 1
    logging.debug(datetime.now().time())
    return sec

def job2(sec = 2):
    logging.debug("_________")
    return sec

def job3(sec = 3):
    return sec

schedule.every(1).seconds.do(job)

while 1:
    schedule.run_pending()
    print("FS")
    time.sleep(1)
    