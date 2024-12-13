#!/usr/bin/env python3
import asyncio
import random

async def async_generator():
    """
    Coroutine that asynchronously generates 10 random numbers.
    It waits for 1 second before yielding each random number.
    """


    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)