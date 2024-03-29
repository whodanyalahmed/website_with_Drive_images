import http.server
import socketserver
import app


class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'test.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)


# Create an object of the above class
handler_object = MyHttpRequestHandler

PORT = 8000

my_server = socketserver.TCPServer(("", PORT), handler_object)
logger = open('log.txt', 'w+')
app.final(logger)
# close logger
logger.close()
# Star the server
my_server.serve_forever()
