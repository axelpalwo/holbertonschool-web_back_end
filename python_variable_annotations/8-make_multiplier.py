#!/usr/bin/env python3
"""Import Callable for variable annotation"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by a given multiplier.
    """

    
    def multiplier_function(value: float) -> float:
        return value * multiplier

    return multiplier_function