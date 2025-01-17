#!/usr/bin/env python3
"""Second taks of this project"""
import csv
import math
from typing import List
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Validates parameters and looks for data with those indexes"""
        try:
            assert isinstance(page, int) and isinstance(page_size, int), (
                "AssertionError raised when page and page_size are not ints")
            assert page >= 0, ("AssertionError raised with negative values")
            assert page_size > 0, ("AssertionError raised with 0")

            start, end = index_range(page, page_size)
            dataset = self.dataset()

            return dataset[start:end]
        except AssertionError as e:
            print(e)
            return []
