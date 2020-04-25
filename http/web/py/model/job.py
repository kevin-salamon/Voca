from typing import Collection
from dataclasses import dataclass, asdict
from datetime import datetime

@dataclass
class JobApplication:
    title: str
    employer: str
    location: str = ""
    stage: str = "waiting"
    note: str = ""
    followupDate: datetime = ""

    def to_dict(self):
        return asdict(self)
