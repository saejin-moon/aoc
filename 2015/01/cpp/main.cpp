#include <iostream>
#include <fstream>
#include <string>

int part1() {
    std::ifstream file("../input.txt");
    if(!file.is_open()) {
        std::cerr << "read fail\n";
        return 1;
    }
    
    std::string contents;
    std::getline(file, contents);
    int lvl = 0;
    
    for(char ch : contents) {
        switch(ch) {
            case '(':
                lvl++;
            break;
            case ')':
                lvl--;
            break;
        }
    }
    
    std::cout << lvl << "\n";
    return 0;
}

int part2() {
    std::ifstream file("../input.txt");
    if(!file.is_open()) {
        std::cerr << "read fail\n";
        return 1;
    }
    
    std::string contents;
    std::getline(file, contents);
    int lvl = 0;
    
    for(size_t i = 0; i < contents.size(); i++) {
        char ch = contents[i];
        switch(ch) {
            case '(':
                lvl++;
            break;
            case ')':
                lvl--;
            break;
        }
        if(lvl < 0){
            std::cout << i + 1 << "\n";
            break;
        }
    }
    
    return 0;
}

int main() {
    part1();
    part2();
    return 0;
}