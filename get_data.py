import requests
import json
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path='credentials.env')


API_KEY = os.getenv('API_KEY')
URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC"

parameters = {

  'convert':'GBP'
}
headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': API_KEY,
}


def get_data():
    
    session = requests.Session()
    session.headers.update(headers)

    response = session.get(URL, params=parameters)
    data = response.json()

    name = data['data']['BTC']['name']
    max_supply = data['data']['BTC']['max_supply']
    total_supply = data['data']['BTC']['total_supply']
    gbp_price = data['data']['BTC']['quote']['GBP']['price']
    last_updated = data['data']['BTC']['quote']['GBP']['last_updated']
    pct_change_1h = data['data']['BTC']['quote']['GBP']['percent_change_1h']
    pct_change_24h = data['data']['BTC']['quote']['GBP']['percent_change_24h']
    pct_change_7d = data['data']['BTC']['quote']['GBP']['percent_change_7d']
    pct_change_30d = data['data']['BTC']['quote']['GBP']['percent_change_30d']
    pct_change_60d = data['data']['BTC']['quote']['GBP']['percent_change_60d']
    pct_change_90d = data['data']['BTC']['quote']['GBP']['percent_change_90d']
  
    
    
    
    
  
    return name, max_supply, total_supply, gbp_price, last_updated, pct_change_1h, pct_change_24h, pct_change_7d, pct_change_30d, pct_change_60d, pct_change_90d
    
  

   
   


