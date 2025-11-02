from flask import jsonify, Response

def example() -> Response:
    return jsonify({'hello': 'world'})