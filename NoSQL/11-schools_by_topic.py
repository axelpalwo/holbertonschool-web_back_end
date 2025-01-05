#!/usr/bin/env python3
"""Task 11"""


def schools_by_topic(mongo_collection, topic):
    """Looks in a collection many documents"""
    return list(mongo_collection.find({ "topic": topic}))
