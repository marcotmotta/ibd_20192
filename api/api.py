from flask import Flask
from flask_restful import Resource, Api
import sqlite3 as sql
import pandas as pd 
import json

app = Flask(__name__)
api = Api(app)

def sql_query(query_string, connection):
    return pd.read_sql_query(query_string, connection)

class Query(Resource):
    def get(self, query):
        connection = sql.connect('test.db')
        response_obj = sql_query(query, connection)

        return app.response_class(
            response=json.dumps(response_obj.to_dict(orient='records')),
            status=200,
            mimetype='application/json'
        )

api.add_resource(Query, '/query/<query>')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')