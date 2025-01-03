#!/usr/bin/env python3
import asyncio
import random
from typing import Generator, List
async_generator = __import__('0-async_generator').async_generator
"""Second task of this project"""


async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers asynchronously using an async comprehension
    over async_generator, then return the 10 random numbers.
    """

    return [number async for number in async_generator()]
