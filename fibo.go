package main

import "fmt"

func printFibonacci(a int, b int, n int) {
	var sum int = 0
	if n > 0 {
		sum = a + b
		fmt.Printf("%d ", sum)
		a = b
		b = sum
		printFibonacci(a, b, n-1)
	}
}

func main() {
	var a, b, n int

	a = 0
	b = 1

	fmt.Printf("Escribe el total de términos: ")
	fmt.Scanf("%d", &n)

	fmt.Printf("La serie Fibonacci es: ")
	fmt.Printf("%d %d ", a, b)

	printFibonacci(a, b, n-2)
	fmt.Printf("\n")
}