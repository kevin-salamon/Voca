from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/jobs', methods=['POST'])
def savejobs():
    return jsonify({'result': 'dey took er jerbs!'})

@app.route('/api/jobs', methods=['GET'])
def getJobs():
    return jsonify({'result': "all the jerbs"})

@app.route('/api/jobs/<int:job_id>', methods=['DELETE'])
def deleteJob(job_id):
    return jsonify({'result': 'job deleted'})
