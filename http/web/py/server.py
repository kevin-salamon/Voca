import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from .model import database
from .model.job import JobApplication
from .model.helper import EnhancedJSONEncoder

app = Flask(__name__)
CORS(app)
app.json_encoder = EnhancedJSONEncoder

@app.route('/api/jobs', methods=['POST'])
def savejobs():
    job_app = JobApplication(**json.loads(request.data))
    db_response = database.storeJob(job_app)
    return jsonify({'success': db_response[0],
                    'job_id': db_response[1]})

@app.route('/api/jobs/<string:job_id>', methods=['PUT'])
def updateJob(job_id):
    db_response = database.updateJob(job_id, json.loads(request.data))
    return jsonify({'success': db_response[0]})

@app.route('/api/jobs', methods=['GET'])
def getJobs():
    return jsonify(database.getJobs())

@app.route('/api/jobs/<string:job_id>', methods=['DELETE'])
def deleteJob(job_id):
    r = database.deleteJob(job_id)
    return jsonify({'acknowledged': r.acknowledged})
