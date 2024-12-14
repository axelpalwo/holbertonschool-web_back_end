#!/usr/bin/env python3
import asyncio
import random
from typing import Generator
"""First task from this project sssssssssssss"""


async def async_generator() -> Generator[float, None, None]:
    """
    Coroutine that asynchronously generates 10 random numbers.
    It waits for 1 second before yielding each random number.
    """

    # Loop aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
