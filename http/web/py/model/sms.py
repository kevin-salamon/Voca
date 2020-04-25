import pause
import pymongo
import datetime

def sendSMSFor(job):
    print("Follow up with", job.title, job.employer)

def smsDaemon():
    ''' Every hour, check if a job application reminder occurs in the next hour
    if so, send the SMS reminder.
    '''
    from .database import getFollowUpsTomorrow
    while True:
        print("Doing stuff")
        for job in getFollowUpsTomorrow():
            sendSMSFor(job)
        print("Continuing doing stuff")
        tomorrow = datetime.datetime.now() + datetime.timedelta(days=1)
        pause.until(tomorrow)
