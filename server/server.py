from flask import Flask
import json
from db import movieList, casts
from flask import Response
import time 
app = Flask(__name__)


def get_movie(id):
    for movie in movieList:
        if movie['id'] == id:
            return movie

def get_credits(id):
    for cast in casts:
        print(cast['id'])
        print(id)
        if str(cast['id']) == id:
            return cast


@app.route('/')
def index():
    return 'Hello world'


@app.route('/movies')
def movies():
    movies = json.dumps(movieList)
    resp = Response(movies, status=200, mimetype='application/json')
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp


@app.route('/movies/<movie_id>')
def movie(movie_id):
    movies = json.dumps(get_movie(movie_id))
    resp = Response(movies, status=200, mimetype='application/json')
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/movies/<movie_id>/credits')
def movie_credits(movie_id):
    movies = json.dumps(get_credits(movie_id))
    resp = Response(movies, status=200, mimetype='application/json')
    resp.headers['Access-Control-Allow-Origin'] = '*'
    # time.sleep(3)
    return resp

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
