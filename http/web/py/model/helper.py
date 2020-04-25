import dataclasses
from datetime import datetime
import json
from bson import ObjectId

class EnhancedJSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime):
            return o.__str__()
        if isinstance(o, ObjectId):
            return o.__str__()
        if dataclasses.is_dataclass(o):
            return dataclasses.asdict(o)
        return super().default(o)