#include <iostream>
#include <string> 
#include <cmath>

using namespace std;

bool isArmstrong(size_t number) {
  int cp_number = number;
  int len = to_string(cp_number).length();
  int counter = 0;
  int digit = 0;

  for(size_t i = 0; i < len; ++i) {
    digit = cp_number % 10;
    counter += pow(digit, len);
    cp_number = floor(cp_number / 10);
  }

  if(counter != number) 
    return false;
  return true
}

int main() {
  if(isArmstrong(370)) 
    cout << "Es Armstrong\n";
  else
    cout << "No es Armstrong\n";
}
