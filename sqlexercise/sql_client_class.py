import psycopg2
import json

class SqlClient:

    def __init__(self, id, name, email, city, birth_year, credits=None):
        self.id = id
        self.name = name
        self.email = email
        self.city = city
        self.birth_year = birth_year
        self.credits = credits

    @staticmethod
    def client_sql_queries(sql, noClass):
        allClients = []
        creditsNoClients = []
        conn = psycopg2.connect('dbname=evolveu')
        cur = conn.cursor()
        cur.execute(sql)

        rows = cur.fetchall()
        for row in rows:
            if noClass:
                pass
                creditsNoClients.append({'id': row[0], 'client_id': row[1], 'month': row[2], 'credits': row[3]})
            else:
                allClients.append(SqlClient(row[0], row[1], row[2], row[3], row[4], row[5]))

        cur.close()
        conn.close()

        if noClass:
            return creditsNoClients
        else:
            return allClients


    @staticmethod
    def show_all_clients():
        return SqlClient.client_sql_queries("""SELECT *, null from clients""", False)

    @staticmethod
    def show_one_client(client):
        sql="SELECT *, null from clients where client_id = "+str(client)
        conn = psycopg2.connect('dbname=evolveu')
        cur = conn.cursor()
        cur.execute(sql)

        row = cur.fetchone()
        # 'id': row[0], 'client_id': row[1], 'name': row[2], 'email': row[3], 'city': row[4], 'birth_year': row[5]
        # print(json.dumps(row))
        cur.close()
        conn.close()

        return json.dumps({'id': row[0], 'client_id': row[1], 'name': row[2], 'email': row[3], 'city': row[4], 'birth_year': row[5]})

        # return SqlClient.client_sql_queries("SELECT *, null from clients where client_id = "+str(client)+" ", False)


    @staticmethod
    def show_clients_per_month(month):
        return SqlClient.client_sql_queries("""SELECT clients.*, credits.credits from clients join credits on clients.client_id = credits.client_id where credits.month='2018-07' """, False)

    @staticmethod
    def show_clients_nocredits(month):
        return SqlClient.client_sql_queries("""SELECT clients.*, null from clients left join credits on clients.client_id = credits.client_id where credits.credits is null """, False)

    @staticmethod
    def show_credits_noclients():
        return SqlClient.client_sql_queries("""SELECT cr.id, cr.client_id, cr.month, cr.credits
                                               FROM clients cl RIGHT JOIN credits cr
                                                    ON cl.client_id = cr.client_id 
                                               WHERE cl.client_id IS NULL """, True)

    @staticmethod
    def return_allclient():
        print("Here")
        print(SqlClient.allClients)

        return SqlClient.allClients