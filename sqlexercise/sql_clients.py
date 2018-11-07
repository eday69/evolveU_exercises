from flask import Flask, render_template
import sql_client_class

# setup flask project
app = Flask(__name__,
            static_url_path='',
            static_folder='templates',
            template_folder='templates')

@app.route('/allclients')
def get_all_clients():
    return render_template("allclients.html", AllClients=sql_client_class.SqlClient.show_all_clients())

@app.route('/oneclient/<id>')
def get_one_client(id):
    # print(sql_client_class.SqlClient.show_one_client(id))
    return sql_client_class.SqlClient.show_one_client(id)

@app.route('/clientmonth')
def get_clients_per_month():
    return render_template("allclients.html", AllClients=sql_client_class.SqlClient.show_clients_per_month('JUL'))

@app.route('/clientnocredits')
def get_clients_nocredits():
    return render_template("allclients.html", AllClients=sql_client_class.SqlClient.show_clients_nocredits('JUL'))

@app.route('/creditsnoclients')
def get_credits_noclients():
    return render_template("creditsnoclients.html", credits=sql_client_class.SqlClient.show_credits_noclients())

@app.route('/page')
def sendPageModule():
    return render_template("basic.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
