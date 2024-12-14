#!/usr/bin/env python3
import asyncio
import time
from typing import List

async def async_generator():
    """
    Coroutine that asynchronously generates 10 random numbers.
    It waits for 1 second before yielding each random number.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers asynchronously using an async comprehension
    over async_generator, then return the 10 random numbers.
    """
    return [number async for number in async_generator()]

async def measure_runtime() -> float:
    """
    Measure the total runtime of executing async_comprehension
    four times in parallel using asyncio.gather.
    """
    start_time = time.perf_counter()  # Start the timer
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    total_time = time.perf_counter() - start_time  # Measure elapsed time
    return total_time
