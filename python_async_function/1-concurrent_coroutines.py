#!/usr/bin/env python3
""" Importing wait_random funct"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Waits n times using wait_random
    """
    tasks = [wait_random(max_delay) for _ in range(n)]

    delays = []
    # When completing each task
    for task in asyncio.as_completed(tasks):
        delay = await task
        for i, value in enumerate(delays):
            if delay < value:
                delays.insert(i, delay)
                break
        else:
            delays.append(delay)

    return delays
