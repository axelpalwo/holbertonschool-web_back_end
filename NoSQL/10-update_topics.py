#!/usr/bin/env python3
"""Task 10"""


def update_topics(mongo_collection, name, topics):
    """Updates documents in a collection, first param is filter
    second param is the new setted attribute"""
    mongo_collection.update_many( name, {'$set': topics })
