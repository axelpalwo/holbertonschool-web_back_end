#!/usr/bin/env python3
import asyncio
import random
from typing import Generator, List

async def async_generator() -> Generator[float, None, None]:
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
