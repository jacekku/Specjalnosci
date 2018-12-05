import requests
from bs4 import BeautifulSoup
import re
import datetime
import json
import os
import time,sched

from config_login import *

def main():
    with requests.Session() as s:
        InzOPreq = s.post(InzOP, data=payload)
        SysInfreq = s.post(SysInf, data=payload)
        s.close()
        

    InzOPsoup=BeautifulSoup(InzOPreq.text,'html.parser')
    SysInfsoup=BeautifulSoup(SysInfreq.text,'html.parser')

    finder=re.compile("[0-9]+\s\(")
    updateTime=datetime.datetime.now().ctime()
    data={  "InzOP":int(finder.findall(InzOPsoup.getText())[1][:-2]),
            "SysInf":int(finder.findall(SysInfsoup.getText())[1][:-2]),
            "UpdatedAt":updateTime
            }

    
    with open('data.json', 'r+') as outfile:
        print(data)
        json.dump(data, outfile)
        
    time.sleep(5)
    print("PULLING")
    os.system("git pull")
    time.sleep(5)
    print("ADDING DATA.JSON")
    os.system("git add ./data.json")
    time.sleep(5)
    print("COMMITING")
    os.system("git commit -vm \""+updateTime+"\"")
    time.sleep(5)
    print("PUSHIMG")
    os.system("git push --progress -u origin master")


    schedule.enter(timeout, 1, main)



timeout=60*5

schedule = sched.scheduler(time.time, time.sleep)
schedule.enter(timeout, 1, main)
schedule.run()
