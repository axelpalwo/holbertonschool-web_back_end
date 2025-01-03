#!/usr/bin/env python3
"""First task of this project"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Defines the start and end indexes"""

    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
