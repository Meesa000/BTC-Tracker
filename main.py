from flask import Flask, render_template, jsonify
from get_data import get_data

app = Flask(__name__)

@app.route("/")
def display_data():
    
    name, max_supply, total_supply, gbp_price, last_updated, pct_change_1h, pct_change_24h, pct_change_7d, pct_change_30d, pct_change_60d, pct_change_90d = get_data()
    
    supply_left = max_supply - total_supply
    max_supply = f"{max_supply:,}"
    total_supply = f"{total_supply:,}"
    supply_left = f"{supply_left:,}"
    gbp_price = f"{gbp_price:,.2f}"
    pct_change_1h = f"{pct_change_1h:.2f}"
    pct_change_24h = f"{pct_change_24h:.2f}"
    pct_change_7d = f"{pct_change_7d:.2f}"
    pct_change_30d = f"{pct_change_30d:.2f}"
    pct_change_60d = f"{pct_change_60d:.2f}"
    pct_change_90d = f"{pct_change_90d:.2f}"
    last_updated = last_updated[:-5]
    last_updated_formatted = last_updated.replace("T", " ")
    
    
    return render_template('index.html', name=name, max_supply=max_supply, total_supply=total_supply, gbp_price=gbp_price, last_updated=last_updated_formatted,
                           supply_left=supply_left, pct_change_1h=pct_change_1h, pct_change_24h=pct_change_24h, pct_change_7d=pct_change_7d, pct_change_30d=pct_change_30d,
                           pct_change_60d=pct_change_60d, pct_change_90d= pct_change_90d)

if __name__ == '__main__':
    app.run(debug=True)
    