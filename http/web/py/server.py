import json
import atexit
from multiprocessing import Process
from flask import Flask, request, jsonify
from flask_cors import CORS
from .model import sms
from .model.job import JobApplication
from .model.helper import EnhancedJSONEncoder

background = Process(target=sms.smsDaemon)

def close_running_threads():
    background.join()
    print("closing thread")
atexit.register(close_running_threads)
background.start()

from .model import database

app = Flask(__name__)
CORS(app)
app.json_encoder = EnhancedJSONEncoder

@app.route('/api/jobs', methods=['POST'])
def savejobs():
    d = JobApplication(**json.loads(request.data))
    db_response = database.storeJob(d)
    return jsonify({'success': db_response[0],
                    'job_id': db_response[1]})

@app.route('/api/jobs', methods=['GET'])
def getJobs():
    return jsonify(database.getJobs())

@app.route('/api/jobs/<int:job_id>', methods=['DELETE'])
def deleteJob(job_id):
    return database.deleteJob(job_id)
