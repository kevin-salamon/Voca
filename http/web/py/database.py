from pymongo import MongoClient
from py.model.job import JobApplication

MONGODB_URL = 'mongodb+srv://salmonTimo:Mongo%20Horse%20Dawg22@cluster0-h61kz.mongodb.net/test?retryWrites=true&w=majority'
client = MongoClient(MONGODB_URL)

db = client['JTrackr']['jobs']

def storeJob(job_application):
    d = job_application.to_dict()
    result = db.insert_one(d)
    return result.acknowledged, result.inserted_id.__str__()

def getJobs():
    return list(db.find())

def deleteJob(job_id):
    result = db.restaurants.delete_many("job_id")
    return result
