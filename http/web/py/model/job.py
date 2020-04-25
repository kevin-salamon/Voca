from typing import Collection
from dataclasses import dataclass, asdict
from datetime import datetime

@dataclass
class Event:
    name: str
    date: datetime
    location: str = ""
    completed: bool = False
    importance: int = 0

    def to_dict(self):
        return asdict(self)

@dataclass
class JobApplication:
    title: str
    employer: str
    location: str = ""
    stage: str = "waiting"
    note: str = ""
    followDate: str = ""
    dates: Collection[Event] = tuple()

    def to_dict(self):
        return asdict(self)
