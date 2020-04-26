import pause
import pymongo
import datetime
import json
from .job import JobApplication
from .helper import EnhancedJSONEncoder

def sendSMSFor(jobJSON):
    job = JobApplication(**json.loads(jobJSON, cls=EnhancedJSONEncoder))
    print("Follow up with", job.title, job.employer)
