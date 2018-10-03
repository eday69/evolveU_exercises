import unittest

class myObject:
    def __init__(self, city, height, size):
        self.city = city
        self.height = height
        self.size = size
        self.altitude = 1000 + height

    def addHeight(self, adding):
        self.altitude += adding


class TestOo1(unittest.TestCase):

    def test_myObject(self):
        test_obj = myObject('Calgary', 3.4, 5)
        self.assertEqual(1003.4, test_obj.altitude)

        test_obj.addHeight(10)
        self.assertEqual(1013.4, test_obj.altitude)

