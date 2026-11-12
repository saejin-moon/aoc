use std::fs;

fn part_1() {
    let contents = fs::read_to_string("input.txt").expect("read fail");
    let mut lvl = 0;
    
    for ch in contents.chars() {
        match ch {
            '(' => lvl += 1,
            ')' => lvl -= 1,
            _ => {}
        }
        
    }
    
    println!("{lvl}");
}
fn part_2() {
    let contents = fs::read_to_string("input.txt").expect("read fail");
    let mut lvl = 0;
    let mut basement_pos = 0;
    
    for (i, ch) in contents.chars().enumerate() {
        match ch {
            '(' => lvl += 1,
            ')' => lvl -= 1,
            _ => {}
        }
        
        if lvl < 0 {
            basement_pos = i + 1;
            break;    
        }
    }
    
    println!("{basement_pos}");
}

fn main() {
    part_1();
    part_2();
}
