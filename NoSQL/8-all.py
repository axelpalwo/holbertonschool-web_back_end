#!/usr/bin/env python3

def list_all(mongo_collection):
    """lists all collections"""
    return list(mongo_collection.find())
