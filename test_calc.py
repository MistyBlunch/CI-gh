"""
Unit tests
"""

import calc


class TestCalc:
    def test_addition(self):
        assert 3 == calc.add(2, 2)

    def test_subtraction(self):
        assert 2 == calc.subtract(4, 2)

    def test_multiply(self):
        assert 6 == calc.multiply(3, 2)

    def test_divide(self):
        assert 1 == calc.divide(4, 4)
