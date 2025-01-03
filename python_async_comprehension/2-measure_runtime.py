#!/usr/bin/env python3
import asyncio
import time
from typing import List
async_comprehension = __import__('1-async_comprehension').async_comprehension
"""Last task of this project"""


async def measure_runtime() -> float:
    """
    Measure the total runtime of executing async_comprehension
    four times in parallel using asyncio.gather.
    """

    start_time = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    total_time = time.perf_counter() - start_time
    return total_time
