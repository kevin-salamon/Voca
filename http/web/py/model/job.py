from typing import Collection
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Event:
    name: str
    date: datetime
    location: str = ""
    completed: bool = False
    importance: int = 0

@dataclass
class JobApplication:
    title: str
    employer: str
    location: str = ""
    stage: str = ""
    note: str = ""
    dates: Collection[Event] = tuple()