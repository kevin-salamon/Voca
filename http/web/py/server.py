import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import py.database as database
from py.model.job import JobApplication

app = Flask(__name__)
CORS(app)

@app.route('/api/jobs', methods=['POST'])
def savejobs():
    d = JobApplication(**json.loads(request.data))
    db_response = database.storeJob(d)
    return jsonify({'success': db_response[0],
                    'job_id': db_response[1]})

@app.route('/api/jobs', methods=['GET'])
def getJobs():
    return database.getJobs()

@app.route('/api/jobs/<int:job_id>', methods=['DELETE'])
def deleteJob(job_id):
    return database.deleteJob(job_id)
