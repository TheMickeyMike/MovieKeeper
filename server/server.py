from flask import Flask
import json
from db import movieList, casts, videos
from flask import Response, request
import time 
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

def get_movie(id):
    for movie in movieList:
        if movie['id'] == id:
            return movie

def get_credits(id):
    for cast in casts:
        if str(cast['id']) == id:
            return cast


def get_video(id):
    for video in videos:
        if str(video['id']) == id:
            return video

@app.route('/')
def index():
    return 'Hello world'


@app.route('/movies', methods=['GET'])
def movies():
    movies = json.dumps(movieList)
    resp = Response(movies, status=200, mimetype='application/json')
    return resp

@app.route('/movies', methods=['POST'])
def newMovie():
    data = request.json
    print(data)
    resp = Response(status=201, mimetype='application/json')
    return resp

@app.route('/movies/<movie_id>', methods=['GET'])
def movie(movie_id):
    movies = json.dumps(get_movie(movie_id))
    resp = Response(movies, status=200, mimetype='application/json')
    return resp

@app.route('/movies/<movie_id>', methods=['DELETE'])
def deleteMovie(movie_id):
    print('Delete movie {}'.format(movie_id))
    resp = Response(status=204, mimetype='application/json')
    return resp

@app.route('/movies/<movie_id>/credits')
def movie_credits(movie_id):
    movies = json.dumps(get_credits(movie_id))
    resp = Response(movies, status=200, mimetype='application/json')
    # time.sleep(3)
    return resp

@app.route('/movies/<movie_id>/videos')
def movie_video(movie_id):
    movies = json.dumps(get_video(movie_id))
    resp = Response(movies, status=200, mimetype='application/json')
    # time.sleep(3)
    return resp

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
