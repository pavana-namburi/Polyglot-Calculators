# Cooking Measures Converter 
Simple utility to convert between common cooking measurements.

> **Author:** Alexandr Anatoliev
> **GitHub:** [AlexandrAnatoliev](https://github.com/AlexandrAnatoliev)

---

## Features 
* Supports common cooking measures: 
  - Milliliters -> ml
  - Cups -> cup
  - Tablespoons -> tbsp
  - Teaspoons -> tsp
* Enchanced console output with ANSI colors
* Provides clear error messages for invalid input

---

## Project structure 

```
CookingMeasurementConverter/
├── README.md
└── src
   ├── Colors.java
   ├── Converter.java
   └── Measures.java
```

---

## Compilation
To compile the source classes:
```
javac -d bin src/*.java
```

---

## Usage

* Navigate to `bin/` directory
```
cd bin/
```
* Run program
```
java Converter <arguments>
```
* Run from root directory
```
java -cp bin Converter <arguments>
```
* Input format:
  - [value]       Value of user's product     
  - [from units]  Units need to convert from     
  - [to units]    Units need to convert to     
``` 
[value] [from units] [to units]
``` 

---

## Examples of use
```
java -cp bin/ Converter 1 cup tbsp
1 cup = 16 tbsp
```
```
bin$ java TZConverter Moscow
The time in Moscow is 22:06:56 on 28.11.2025 and its time zone is Europe/Moscow
```
```
java -cp bin/ Converter invalid input arguments

ERROR: For input string: "invalid"

Input format:
Converter [value] [from units] [to units]
Units:
Milliliters -> ml
Cups -> cup
Tablespoons -> tbsp
Teaspoons -> tsp
Example use:
java -cp bin/ Converter 1 cup tbsp
```

---

## Requirements
* Java 8 or higher
