#!/usr/bin/env python3
import asyncio
from typing import List
from 0-async_generator import async_generator  # Import the generator


async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers asynchronously using an async comprehension
    over async_generator, then return the 10 random numbers.
    """


    return [number async for number in async_generator()]