package main

import (
	"fmt"
	"os"
)

func part1() {
	data, err := os.ReadFile("input.txt")
	if err != nil { 
		panic(err) 
	}
	
	lvl := 0
	
	for _, ch := range string(data) {
		switch ch {
			case '(':
				lvl++
			case ')':
				lvl--
		}
	}
	
	fmt.Println(lvl)
}

func part2() {
	data, err := os.ReadFile("input.txt")
	if err != nil { 
		panic(err) 
	}
	
	lvl := 0
	
	for i, ch := range string(data) {
		switch ch {
			case '(':
				lvl++
			case ')':
				lvl--
		}
		if lvl < 0 {
			fmt.Println(i + 1)
			break
		}
	}
}

func main() {
	part1()
	part2()
}