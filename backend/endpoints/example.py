from json import dumps as jsonify

def example() -> str:
    return jsonify({'hello': 'world'})