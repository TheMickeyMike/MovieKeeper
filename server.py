from flask import Flask
import json
from flask import Response

app = Flask(__name__)


movieList = [
    {
        'id': '1',
        'image': 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        'title': 'Venom',
        'original_title': 'Venom',
        'overview': '''Venom, obcy symbiont, jedna z najważniejszych, najbardziej złożonych postaci Marvela wychodzi z cienia, wchodząc w ciało i osobowość Eddiego Brocka(Tom Hardy). Jako dziennikarz, Eddie próbował zdemaskować niecne działania słynnej firmy Life Foundation, prowadzonej przez naukowca Carltona Drake'a (Riz Ahmed). Przez lata stało się to jego obsesją, zniszczyło mu karierę oraz związek z Anne (Michelle Williams). Kiedy jeden z eksperymentów Drake'a - obcy Venom, scala się z ciałem Brocka, ten otrzymuje supermoce i zdolność robienia wszystkiego, czego tylko zapragnie. Wynaturzony, mroczny, nieprzewidywalny, agresywny Venom w ciele Brocka sprawia, że Eddie próbuje zapanować nad nowymi mocami, choć jednocześnie są one kuszące i inspirujące. Jeden i drugi starają się przejąć kontrolę nad sobą nawzajem i dostać to, czego chcą, coraz bardziej spajając się ze sobą.''',
        'release_date_digital': '2018-12-11T00:00:00.000Z',
        'release_date_physical': '2018-12-18T00:00:00.000Z',
        'release_date': '2018-10-03',
        'original_language': 'en',
        'vote_average_mdb': 7,
        'vote_count': 967,
        'runtime': 112,
        'genres': [
            {
                'id': 878,
                'name': "Sci-Fi"
            }
        ],

    },
    {
        'id': '338952',
        'image': 'https://image.tmdb.org/t/p/w500/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg',
        'title': 'Fantastyczne zwierzęta: Zbrodnie Grindelwalda',
        'original_title': 'Fantastic Beasts: The Crimes of Grindelwald',
        'overview': '''Akcja filmu, do którego scenariusz napisała J.K. Rowling, rozpoczyna się w 1927 r., kilka miesięcy po tym, jak Newt pomógł zdemaskować i schwytać niesławnego czarnoksiężnika Gellerta Grindelwalda. Ten dotrzymał danego wcześniej słowa i uciekł w dramatycznych okolicznościach. Cały czas gromadzi nowych zwolenników swojej sprawy — wyniesienia czarodziejów ponad wszystkie niemagiczne istoty. Jedyną osobą będącą w stanie go powstrzymać jest czarodziej, którego niegdyś uważał za swojego najlepszego przyjaciela — Albus Dumbledore. Jednak Dumbledore nie obejdzie się bez pomocy swojego byłego ucznia Newta Scamandera, któremu już raz udało się pokrzyżować plany Grindelwaldowi. Przygoda ponownie splata losy Newta, Tiny, Queenie i Jacoba. Jednak misja ta będzie także sprawdzianem ich lojalności, kiedy będą stawiali czoła nowym zagrożeniom w coraz bardziej niebezpiecznym i podzielonym świecie czarodziejów.''',
        'release_date_digital': '',
        'release_date_physical': '',
        'release_date': '2018-11-14',
        'original_language': 'en',
        'vote_average_mdb': 5.2,
        'vote_count': 345,
        'runtime': 134,
        'genres': [
            {
                'id': 10751,
                'name': "Familijny"
            },
            {
                'id': 14,
                'name': "Fantasy"
            },
            {
                'id': 12,
                'name': "Przygodowy"
            }
        ],
    },
]


def get_movie(id):
    for movie in movieList:
        if movie['id'] == id:
            return movie


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


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
