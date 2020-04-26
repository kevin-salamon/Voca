import json
import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from celery import Celery
from .model import sms, database
from .model.job import JobApplication
from .model.helper import EnhancedJSONEncoder

app = Flask(__name__)
CORS(app)
app.json_encoder = EnhancedJSONEncoder
app.config['CELERY_BROKER_URL'] = 'redis://localhost:6379/0'
app.config['CELERY_RESULT_BACKEND'] = 'redis://localhost:6379/0'

celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'])
celery.conf.update(app.config)

sendSMSDelayed = celery.task(sms.sendSMSFor)
def asyncJobReminder(jobJSON: JobApplication):
    #reminderTime = datetime.datetime.strptime(job.followupDate, "%d/%m/%y") - datetime.timedelta(days=1)
    #secondsUntilNotification = (reminderTime - datetime.datetime.now()).total_seconds()
    sendSMSDelayed.apply_async(args=(str(jobJSON),), countdown=10)

@app.route('/api/jobs', methods=['POST'])
def savejobs():
    d = JobApplication(**json.loads(request.data))
    asyncJobReminder(request.data)
    db_response = database.storeJob(d)
    return jsonify({'success': db_response[0],
                    'job_id': db_response[1]})

@app.route('/api/jobs', methods=['GET'])
def getJobs():
    return jsonify(database.getJobs())

@app.route('/api/jobs/<int:job_id>', methods=['DELETE'])
def deleteJob(job_id):
    # TODO: Delete this job application off the reminder queue in redis
    return jsonify(database.deleteJob(job_id))
