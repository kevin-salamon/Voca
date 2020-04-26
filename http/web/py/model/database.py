from pymongo import MongoClient
from .job import JobApplication
from bson import ObjectId
import json
import os

data = {}
with open(os.path.join(os.path.dirname(__file__), "db_user.json"), "r") as f:
    data = json.load(f)

MONGODB_URL = f'mongodb+srv://{data.get("username", "")}:{data.get("password", "")}@cluster0-h61kz.mongodb.net/test?retryWrites=true&w=majority'
client = MongoClient(MONGODB_URL)

db = client['JTrackr']['jobs']

def storeJob(job_application):
    d = job_application.to_dict()
    result = db.insert_one(d)
    return result.acknowledged, result.inserted_id.__str__()

def getJobs():
    return list(db.find())

def deleteJob(job_id):
    result = db.delete_many({"_id": ObjectId(job_id)})
    return result
