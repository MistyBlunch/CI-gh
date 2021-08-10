"""
Unit tests for the calc library
"""

import calc

class TestCalc:
  def test_addition(self):
    assert 4 == calc.add(2, 2)

  def test_subtraction(self):
    assert 2 == calc.subtract(4, 2)

  def test_multiply(self):
    assert 6 == calc.multiply(3, 2)

  def test_divide(self):
    assert 5 == calc.divide(10, 2)