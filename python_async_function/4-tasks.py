#!/usr/bin/env python3
""" Importing wait_random funct"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Creates n tasks
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    delays = []
    # When completing each task
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return sorted(delays)
