import pymysql

class database_sql:

    def __init__(self):
        self.db = pymysql.connect(host='mysql5015.site4now.net',user='a444c6_csouthw',passwd="5Tkikc2y!!!")
        self.cursor = self.db.cursor()
        self.execute_use_database(self.cursor)

    def execute_use_database(self, cursor):
        query = ("USE db_a444c6_csouthw")
        cursor.execute(query)

    def print_tables(self):
        cursor = self.cursor
        print(cursor.execute("Show Tables"))
        cursor.execute("SELECT one FROM ass;")
        items = cursor.fetchall()
        for item in items:
            print(str(item)[2:len(item)-4])






d = database_sql()

d.print_tables()