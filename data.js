// =================================================================
// EDIT THIS FILE TO UPDATE WEEKLY DSA CONTENT
// =================================================================
// Each concept can be either a plain string OR an object with:
//   name           → required, displayed in the list and page title
//   explanation    → text (use blank line for paragraph break, "## " for sub-heading)
//   image          → optional path, e.g. "images/week1/two-pointers.png"
//   imageCaption   → optional caption under the image
//   codeBlocks     → array of { title, code } objects (preferred)
//   complexity     → object: { time, space, best, average, worst }
//   keyPoints      → array of takeaway bullet strings
//   pitfalls       → array of short warning strings
//   videoId        → YouTube ID for the embed (Apna College preferred)
//   videoSearch    → fallback search term (auto-prefixed with "apna college ")
// =================================================================

const SITE_DATA = {

  authorName: "SaiSivaLochan",

  about: "A structured 7-week curriculum covering modern C++ and the core data structures & algorithms used in technical interviews. Every concept page includes a detailed write-up, executable C++ code, complexity analysis, common pitfalls, and a curated Apna College video lecture.",

  references: [
    {
      badge: "Video Course",
      title: "Complete C++ DSA Course",
      subtitle: "YouTube Playlist · Shradha Khapra Ma'am",
      desc: "The full DSA series in C++ — every concept's video lecture on this site is sourced from this playlist.",
      url: "https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
      cta: "Open Playlist"
    },
    {
      badge: "Textbook",
      title: "Introduction to Algorithms (CLRS), 4th Edition",
      subtitle: "Cormen · Leiserson · Rivest · Stein · MIT Press",
      desc: "The canonical algorithms textbook used in CS programs worldwide. Rigorous coverage of every topic in this curriculum — and far beyond. Available at university libraries and via Open Library for free borrowing.",
      url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
      cta: "View at MIT Press"
    },
    {
      badge: "University Course",
      title: "CS213 / 293 — Data Structures and Algorithms (2025)",
      subtitle: "IIT Bombay · CSE Department",
      desc: "Lecture slides, assignments, and course materials from IIT Bombay's official DSA course.",
      url: "https://www.cse.iitb.ac.in/~akg/courses/2025-ds/",
      cta: "Open Course Page"
    },
    {
      badge: "Web Tutorial",
      title: "DSA Tutorial",
      subtitle: "GeeksforGeeks",
      desc: "Comprehensive article-based DSA reference covering every topic with examples, edge cases, and multiple language implementations.",
      url: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/",
      cta: "Open Tutorial"
    }
  ],

  weeks: [

    // ============================================================
    // WEEK 1 — C++ Basics + Arrays + Strings
    // ============================================================
    {
      number: 1,
      title: "C++ Foundations + Arrays & Strings + Bits",
      topics: ["C++ Basics", "Arrays", "Strings", "Big-O", "Bits"],
      goal: "Get comfortable with C++ syntax, array/string patterns, Big-O analysis, and bit manipulation.",

      concepts: [
        {
          name: "Input / Output (cin, cout, scanf, printf, fast I/O)",
          explanation: `Every program needs a way to talk to the outside world. Input is data flowing in (keyboard, files); output is data flowing out (screen, files). C++ gives you two completely separate I/O systems, and you should know both.

The modern C++ system uses streams from the <iostream> header. The old C system uses formatted functions from <cstdio>. They both work in the same C++ program, but mixing them carelessly causes ordering bugs, and turning on fast-I/O mode forbids mixing entirely.

## Stream-based I/O — cin and cout

The two main objects are std::cin (the standard input stream) and std::cout (the standard output stream). You "insert" data into cout with << and "extract" data from cin with >>. The operators chain, so you can read or print several values in one statement.

cout << 5 << " " << x << endl;
cin  >> a >> b;

Whitespace (spaces, tabs, newlines) separates values when you read with >>. Reading an int with cin >> x stops at the first non-digit. Reading a string with cin >> s stops at the first whitespace, so cin can never read a name like "Sai Siva" into one string.

endl writes a newline AND flushes the buffer (forces output to appear immediately). "\\n" writes a newline without flushing — much faster in loops. Use endl only when you need the flush, otherwise prefer "\\n".

## C-style I/O — printf and scanf

These come from C and use format strings: a string with %-codes that say what type goes where. The variables follow as extra arguments. With scanf you must pass the *address* of the variable (the & operator), because scanf needs to write into it.

printf("x = %d, y = %.2f\\n", x, y);
scanf("%d %lf", &x, &y);

Format specifiers you must memorize: %d (int), %lld (long long), %f (float), %lf (double for scanf, %f for printf), %c (char), %s (C-string), %x (hex). Forgetting the & in scanf is the single most common C-style bug — it compiles but crashes at runtime.

## Reading strings with spaces

cin >> s stops at the first whitespace, so "Mohith Lochan" gets read as just "Mohith". To read a whole line including spaces, use std::getline(cin, s). It reads until newline.

There is one trap: if you mix cin >> n; with std::getline(cin, s); the >> leaves the newline character behind, and the very next getline reads an empty line. Fix it with cin.ignore() between the two.

## Fast I/O for competitive programming

C++ streams are synchronized with C stdio by default. That makes them slow. For large inputs (10⁵+ numbers) this matters a lot. Two lines at the top of main() turn off sync and untie cin from cout:

ios_base::sync_with_stdio(false);
cin.tie(NULL);

This typically gives a 5–10× speedup. The cost: you must NOT mix cin/cout with scanf/printf after disabling sync — output order becomes undefined.

## Output formatting

For decimals, cout's default behaviour is annoying — it may use scientific notation or truncate. Force fixed-point with std::fixed and pick the precision with std::setprecision(k):

cout << fixed << setprecision(2) << 3.14159; // prints 3.14

For printf the equivalent is "%.2f". For minimum field width (right-aligned numbers in a table), use std::setw(k) or "%5d" in printf.

## File I/O (preview)

The same stream interface works for files via <fstream>. std::ifstream is for reading, std::ofstream is for writing. Once opened, you use them exactly like cin/cout. You'll meet this again when you tackle larger projects.`,
          image: "",
          codeBlocks: [
            {
              title: "Hello World — the canonical first program",
              code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`
            },
            {
              title: "Reading values with cin",
              code: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Enter two integers: ";
    cin >> a >> b;                          // reads two ints separated by whitespace
    cout << "Sum = " << a + b << "\\n";
    return 0;
}`
            },
            {
              title: "C-style: printf and scanf",
              code: `#include <cstdio>

int main() {
    int x;
    double y;
    printf("Enter int and double: ");
    scanf("%d %lf", &x, &y);                // remember the & !
    printf("x = %d, y = %.2f\\n", x, y);
    return 0;
}`
            },
            {
              title: "Reading a full line (with spaces) using getline",
              code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;                               // read a number
    cin.ignore();                           // discard leftover newline
    string line;
    getline(cin, line);                     // now reads the whole next line
    cout << "n = " << n << ", line = " << line << "\\n";
    return 0;
}`
            },
            {
              title: "Fast I/O for competitive programming",
              code: `#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);       // unsync C and C++ I/O
    cin.tie(NULL);                          // untie cin from cout

    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        cout << x << "\\n";                  // use "\\n", NOT endl
    }
    return 0;
}`
            },
            {
              title: "Formatted output — decimal places and field width",
              code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double pi = 3.14159265;
    cout << fixed << setprecision(2) << pi << "\\n";   // 3.14
    cout << setw(8) << 42 << "\\n";                    // "      42" (right-aligned width 8)
    return 0;
}`
            }
          ],
          keyPoints: [
            "cin >> and cout << work for all built-in types; chain them to read/print multiple values.",
            "cin >> stops at whitespace — to read a full line use std::getline(cin, s).",
            "endl writes a newline AND flushes the buffer; '\\n' is faster because it doesn't flush.",
            "scanf needs the address of the variable (the & symbol) — forgetting it is the classic C bug.",
            "Add ios_base::sync_with_stdio(false); cin.tie(NULL); at the start of main for ~10× faster I/O.",
            "After fast-I/O, do NOT mix cin/cout with scanf/printf — output order becomes undefined.",
            "Mixing cin >> n with getline(cin, s) leaves a stray newline — call cin.ignore() between them.",
            "Use fixed + setprecision(k) (or '%.kf' in printf) when printing decimals."
          ],
          pitfalls: [
            "Forgetting the & in scanf — compiles fine, crashes at runtime.",
            "Using endl inside tight loops — flushes every iteration and tanks performance.",
            "cin >> name only reads up to the first space — won't read 'Mohith Lochan' as one string.",
            "Mixing scanf/printf with cin/cout AFTER calling sync_with_stdio(false).",
            "getline after cin >> n reads an empty line — you forgot cin.ignore().",
            "Using %f instead of %lf in scanf for a double — silently reads the wrong size."
          ],
          videoId: "VTLCoHnyACE",
          videoSearch: "input output cin cout"
        },

        {
          name: "Data Types & Operators",
          explanation: `A data type tells the compiler two things: how many bytes a variable occupies and what kinds of values and operations are valid on it. Picking the right type is not cosmetic — it controls whether your number overflows, whether division rounds, and whether comparisons make sense.

C++ gives you a small set of primitive types and a rich set of operators that work on them. Most bugs in early DSA code come from picking the wrong type (using int where long long is needed) or misunderstanding an operator (integer division, signed-modulo, post-increment).

## Primitive types you must know

bool — 1 byte. true or false.
char — 1 byte. A single character. Internally an integer in [-128, 127] (signed) or [0, 255] (unsigned).
int — typically 4 bytes. Range roughly ±2 × 10⁹.
long long — 8 bytes. Range roughly ±9 × 10¹⁸. Use this whenever your numbers might exceed 2 × 10⁹.
float — 4-byte floating point. ~7 significant decimal digits.
double — 8-byte floating point. ~15 significant decimal digits. Prefer over float in almost all DSA work.

The exact sizes are not fixed by the standard. Use sizeof(int) to check on your machine. Use std::numeric_limits<T>::max() to query the range.

## Modifiers

signed and unsigned change whether the type can hold negatives. unsigned int doubles the positive range but cannot represent negative values.
short and long change the size — short int (≥ 2 bytes), long int (≥ 4 bytes), long long (≥ 8 bytes).

The safe rule of thumb in competitive programming: use int by default, and switch to long long whenever multiplying two ints whose product might exceed 2 × 10⁹.

## Declaring a variable

int x;            uninitialised — contains garbage in C++.
int x = 5;        traditional copy initialisation.
int x{5};         modern uniform initialisation — prevents narrowing.
auto x = 5;       let the compiler infer the type (int here).

Always initialise. Reading an uninitialised variable is undefined behaviour and is one of the nastiest bug sources in C++.

## Arithmetic operators

+, -, *, /, %. Standard, but two pitfalls:

Integer division truncates toward zero. 7 / 2 is 3, not 3.5. To get a floating result, at least one operand must be a floating type — write 7.0 / 2 or (double) a / b.

Modulo with negative operands is implementation-defined before C++11, then defined to truncate toward zero from C++11 onward. -7 % 2 is -1 (not 1). For "always non-negative" modulo write ((a % m) + m) % m.

## Relational and logical operators

<, >, <=, >=, ==, != return bool.

&& (AND), || (OR), ! (NOT) operate on booleans and short-circuit: in a && b, if a is false, b is never evaluated. This lets you write safe checks like if (p != nullptr && p->value == 5).

Don't confuse == (compare) with = (assign). if (x = 0) compiles, assigns 0, and is always false — a classic bug.

## Bitwise operators

& (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift). They operate on the binary representation of integers. We'll cover the tricks they enable in the Bit Manipulation lesson.

## Assignment, compound, and increment

= is assignment. += -= *= /= %= are the compound forms (x += 3 is shorter than x = x + 3).

++x and x++ both add 1 to x, but they return different things. ++x (prefix) returns the new value; x++ (postfix) returns the old value. arr[i++] uses the old i, then increments. In a loop condition both are equivalent.

## Type conversion

Implicit: when types mix, the compiler promotes the smaller type. int + double becomes double + double, and the result is a double.

Explicit: use static_cast<T>(value) for safe, intention-revealing casts. C-style casts like (int) 3.7 also work but are less safe — the compiler can't catch as many mistakes.

## When to reach for long long

Any time you multiply two ints whose result might exceed 2 × 10⁹, the multiplication overflows silently — you get garbage. Cast one operand to long long first:

long long product = (long long) a * b;

Constants like 10000000000 (more than ~2 × 10⁹) must be written with the LL suffix: 10000000000LL.`,
          codeBlocks: [
            {
              title: "Declaring every primitive type",
              code: `#include <iostream>
using namespace std;

int main() {
    bool      flag    = true;
    char      letter  = 'A';
    int       age     = 22;
    long long bigNum  = 10'000'000'000LL;   // > 2e9, needs long long
    float     pi_f    = 3.14f;
    double    pi_d    = 3.14159265358979;

    cout << sizeof(int)       << " bytes per int\\n";
    cout << sizeof(long long) << " bytes per long long\\n";
    cout << sizeof(double)    << " bytes per double\\n";
}`
            },
            {
              title: "Integer vs floating-point division",
              code: `int a = 7, b = 2;
cout << a / b      << "\\n";   // 3  (integer division)
cout << (double)a / b << "\\n"; // 3.5 (one operand is double → real division)
cout << a % b      << "\\n";   // 1  (remainder)

// Always-positive modulo (handles negative a):
int mod = ((a % m) + m) % m;`
            },
            {
              title: "Overflow when you forget long long",
              code: `int a = 100000, b = 100000;
int      bad  = a * b;                 // overflow: garbage value
long long good = (long long) a * b;    // 10,000,000,000 — correct
cout << bad << " vs " << good << "\\n";`
            },
            {
              title: "Pre-increment vs post-increment",
              code: `int x = 5;
cout << ++x << "\\n";   // 6  (incremented first, then printed)
x = 5;
cout << x++ << "\\n";   // 5  (printed first, then incremented)
cout << x   << "\\n";   // 6  (now it's 6)`
            },
            {
              title: "Compound assignment + short-circuit logical",
              code: `int score = 10;
score += 5;            // 15
score *= 2;            // 30

int* p = nullptr;
// Safe because && short-circuits — p->v never runs if p is null
if (p != nullptr && p->v == 5) {
    cout << "found";
}`
            },
            {
              title: "Type conversion — static_cast",
              code: `double d = 3.7;
int    i = static_cast<int>(d);   // 3 (truncates, doesn't round)

int a = 7, b = 2;
double r = static_cast<double>(a) / b;   // 3.5

// Rounding (not truncating): use round() from <cmath>
int rounded = static_cast<int>(round(3.7));   // 4`
            }
          ],
          keyPoints: [
            "Use int by default; switch to long long whenever a value or product might exceed 2 × 10⁹.",
            "Integer division truncates: 7 / 2 is 3. Cast at least one operand to double for real division.",
            "C++ modulo with negative operands can return a negative — use ((a % m) + m) % m for always-positive.",
            "&& and || short-circuit — they don't evaluate the right side if the left already decides the answer.",
            "++x returns the new value; x++ returns the old. Inside expressions the difference matters.",
            "Prefer static_cast<T>(v) to C-style casts — the compiler catches more mistakes.",
            "Always initialise variables — reading uninitialised memory is undefined behaviour.",
            "double has ~15 significant digits; float has only ~7. Use double in DSA unless memory is critical."
          ],
          pitfalls: [
            "int * int multiplication overflows silently around 2 × 10⁹ — cast one operand to long long first.",
            "if (x = 0) compiles but always evaluates false. You meant ==. Enable -Wall to catch this.",
            "Comparing a signed int with an unsigned int can give surprising results; the signed value is promoted to unsigned.",
            "Reading an uninitialised variable gives random data — initialise everything.",
            "Comparing doubles with == is unreliable due to floating-point error. Use fabs(a - b) < 1e-9 instead.",
            "Forgetting the LL suffix on large literals: 10000000000 overflows int even when assigned to a long long."
          ],
          videoId: "Dxu7GKtdbnA",
          videoSearch: "data types operators c++"
        },
        {
          name: "Loops & Functions",
          explanation: `Loops let a program repeat work; functions let a program reuse it. Together they take you from "I can compute one thing" to "I can compute a thousand things, and I can name and call that capability." Both are foundational — every algorithm you write afterwards uses them.

## The three loops

for is for counted iteration — when you know up front how many times you'll run, or you have a clear increment pattern.
while runs as long as a condition is true. Best when the number of iterations isn't known in advance.
do-while runs the body once, then checks the condition — the only loop that always executes at least once.

## The for loop in detail

for (init; condition; update) { body }

init runs once at the start. condition is checked before each iteration. update runs after each iteration. All three parts are optional — for (;;) is an infinite loop.

## Range-based for (the modern way to iterate)

for (int x : arr) { ... } walks through every element of a container. Use auto for unknown types. Add & to modify in place: for (auto& x : arr) x *= 2;.

## break, continue, and nested loops

break exits the innermost loop immediately. continue skips the rest of the current iteration and goes to the next one. Nesting works — be careful that break only exits ONE level.

## Functions — definition and call

A function has a return type, a name, parameters, and a body. The compiler must know about a function before you call it, so either define it above main or use a forward declaration (a prototype).

returnType name(paramType param1, paramType param2) {
    // body
    return value;
}

If a function returns nothing, the return type is void.

## Pass by value vs pass by reference

Pass by value (the default) — the function receives a COPY of the argument. Changes inside don't affect the caller. Safe but slow for big objects.

Pass by reference — write & after the parameter type. The function works directly on the caller's variable. Use for big objects or when you want to mutate.

Pass by const reference — combine & with const. No copy, no mutation. The idiomatic way to pass strings and vectors that the function only reads.

## Default arguments and overloading

A parameter can have a default value: int power(int base, int exp = 2). Callers can omit it.

Overloading: two functions can share the same name as long as their parameter lists differ. The compiler picks the matching one.

## Recursion (brief)

A function can call itself. Every recursion needs a base case (when to stop) and a recursive step (smaller subproblem). We'll dive deeper in Week 2.

## Scope

Variables declared inside { } only exist until the closing }. Globals live for the whole program. Always prefer local variables — they're easier to reason about.`,
          codeBlocks: [
            {
              title: "All three loops printing 1 to 5",
              code: `#include <iostream>
using namespace std;

int main() {
    // for loop
    for (int i = 1; i <= 5; i++) cout << i << " ";
    cout << "\\n";

    // while loop
    int j = 1;
    while (j <= 5) { cout << j << " "; j++; }
    cout << "\\n";

    // do-while (runs at least once)
    int k = 1;
    do { cout << k << " "; k++; } while (k <= 5);
}`
            },
            {
              title: "Range-based for + modifying with reference",
              code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};

    // Read-only walk
    for (int x : nums) cout << x << " ";
    cout << "\\n";

    // Modify in place — note the &
    for (int& x : nums) x *= 2;

    for (int x : nums) cout << x << " ";   // 2 4 6 8 10
}`
            },
            {
              title: "Nested loops + break & continue",
              code: `// Print a 5x5 grid, but skip the diagonal and stop early after row 3.
for (int i = 0; i < 5; i++) {
    if (i == 3) break;             // exit outer loop early
    for (int j = 0; j < 5; j++) {
        if (i == j) continue;       // skip diagonal
        cout << "(" << i << "," << j << ") ";
    }
    cout << "\\n";
}`
            },
            {
              title: "Function definition + pass by value vs reference",
              code: `#include <iostream>
using namespace std;

// Pass by value — n inside the function is a COPY
void byValue(int n) { n = 99; }

// Pass by reference — &n is the caller's variable
void byRef(int& n) { n = 99; }

int main() {
    int x = 5;
    byValue(x);
    cout << x << "\\n";   // 5 — unchanged
    byRef(x);
    cout << x << "\\n";   // 99 — modified
}`
            },
            {
              title: "Const reference for big objects (idiomatic)",
              code: `#include <iostream>
#include <vector>
using namespace std;

// Read-only, no copy. The standard way to pass a vector.
int sumVector(const vector<int>& v) {
    int s = 0;
    for (int x : v) s += x;
    return s;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    cout << sumVector(nums) << "\\n";   // 15
}`
            },
            {
              title: "Default arguments + overloading",
              code: `#include <iostream>
using namespace std;

int power(int base, int exp = 2) {      // default exponent is 2
    int r = 1;
    for (int i = 0; i < exp; i++) r *= base;
    return r;
}

// Overloaded — different parameter list, same name
double power(double base, int exp) {
    double r = 1;
    for (int i = 0; i < exp; i++) r *= base;
    return r;
}

int main() {
    cout << power(5)       << "\\n";   // 25 (default exp = 2)
    cout << power(2, 10)   << "\\n";   // 1024
    cout << power(1.5, 3)  << "\\n";   // 3.375 (double overload)
}`
            }
          ],
          keyPoints: [
            "for is for counted iteration; while is condition-based; do-while always runs the body at least once.",
            "Range-based for (auto x : v) is the modern, safe way to walk a container. Add & to modify in place.",
            "break exits the innermost loop; continue skips to the next iteration.",
            "Pass-by-value gives the function a copy; pass-by-reference gives it the original.",
            "Pass big objects (vector, string) by const reference: const vector<int>& v — no copy, no mutation.",
            "A function must be declared before it's called — either define above main or write a forward prototype.",
            "Default arguments let callers omit a parameter; overloading lets multiple functions share a name with different signatures.",
            "Variables declared inside { } are local to that block — prefer locals over globals."
          ],
          pitfalls: [
            "Off-by-one in for (int i = 0; i <= n; i++) — uses i = n one extra time. Should be < not <=.",
            "Forgetting the & in for (int x : nums) when you mean to modify — you're modifying a copy.",
            "Forgetting return in a non-void function. Compiles with a warning; runtime is undefined behaviour.",
            "Returning a reference or pointer to a LOCAL variable — that variable dies when the function returns.",
            "Default arguments must appear in the declaration the caller sees, not just the definition.",
            "break only exits the innermost loop — use a flag or restructure for multi-level exit."
          ],
          videoId: "qR9U6bKxJ7g",
          videoSearch: "loops functions c++"
        },

        {
          name: "Time & Space Complexity (Big-O notation)",
          explanation: `When you write a program you need to predict how it will scale — will it run in milliseconds on a million inputs, or grind to a halt? Complexity analysis answers this without ever running the code. The trick is to stop measuring time in seconds (that depends on the hardware) and instead count how the number of operations grows with the input size n.

If doubling n doubles the work, the algorithm is linear. If it quadruples the work, it is quadratic. That growth pattern is the algorithm's complexity, and it is the single most important property of any algorithm you write.

## Big-O — the formal idea, the everyday rules

Big-O is a mathematical upper bound on growth. We say an algorithm is O(f(n)) if, for large enough n, the work it does is at most some constant multiple of f(n). The formal definition matters when you read research papers, but in everyday coding you only need three rules:

1. Drop the constants. 3n + 5 → O(n). The 3 and the 5 vanish.
2. Keep only the dominant term. n² + 100n + 1000 → O(n²). For large n, the n² term swallows the rest.
3. Only large n matters. A function might be slower than another for n = 10 yet faster for n = 10⁶ — Big-O describes the long-run behaviour.

A function doing 5n² + 100n + 200 operations is, by Big-O, simply O(n²).

## Related notations: Big-Omega and Big-Theta

Big-O is an *upper bound*. Two siblings:

Big-Omega Ω(f(n)) is a *lower bound*: the algorithm cannot run faster than f(n).
Big-Theta Θ(f(n)) is a *tight bound*: the algorithm runs in exactly that class — both upper and lower bound match.

In casual conversation people say "Big-O" when they really mean Big-Theta (the tight, true class). That's fine to do as long as you know the difference.

## The complexity hierarchy you must memorize

From fastest to slowest, the classes that appear over and over:

O(1) — constant. Work doesn't depend on n at all. Example: arr[5].
O(log n) — logarithmic. The work halves at each step. Example: binary search.
O(√n) — sublinear. Example: trial division to check if a number is prime.
O(n) — linear. Example: one pass through an array.
O(n log n) — linearithmic. Example: merge sort, std::sort.
O(n²) — quadratic. Example: nested loops over the same array, bubble sort.
O(n³) — cubic. Example: naive matrix multiplication.
O(2ⁿ) — exponential. Example: enumerating all subsets by brute force.
O(n!) — factorial. Example: brute-force traveling salesman.

To feel the difference, imagine n = 1,000,000 and roughly 10⁸ ops per second:

O(n)        → ~10 ms
O(n log n)  → ~200 ms
O(n²)       → ~17 minutes
O(2ⁿ)       → longer than the age of the universe

That gap is why algorithmic improvement always beats hardware improvement.

## Reading code → its complexity

A short recipe that handles 90% of code:

1. A single loop running n times → O(n).
2. Two nested loops, each running n → multiply → O(n²).
3. Sequential blocks → add, then keep the largest → O(a) + O(b) = O(max(a, b)).
4. Recursion → write the recurrence relation and solve it. For example, T(n) = T(n/2) + O(1) → O(log n). T(n) = 2·T(n/2) + O(n) → O(n log n) (the master theorem).
5. Halving / doubling → almost always introduces a log n factor.

Always look for hidden costs inside library calls. A push to a vector is O(1) amortized — but a sort inside the loop is O(n log n) per iteration, multiplying the outer loop's cost.

## Best case, worst case, average case

Three flavors of running-time analysis, each describing a different family of inputs:

Best case is the input on which the algorithm finishes fastest. It is rarely useful — linear search has a best case of O(1) (target at index 0), but that tells you nothing about how the algorithm behaves in practice.

Worst case is the input on which the algorithm is slowest. This is what Big-O most commonly refers to, because we want to know what is the maximum time we might wait.

Average case is the expected running time over random inputs. Quick sort is the famous example: O(n²) worst case but O(n log n) on average — and the average is what we observe in practice with a randomized pivot.

When someone says "binary search is O(log n)" without qualifying it, they mean worst case.

## Space complexity

Memory, not time. Three things to count:

The output you allocate (a result array, a string you build, etc.).
Auxiliary data structures you create — extra arrays, hash maps, stacks, queues.
Recursion stack space. Every recursive call sits on the call stack until it returns. A recursion of depth n uses O(n) stack space even if the function allocates no extra memory at all. People forget this constantly.

Some textbooks split into "auxiliary space" (extra memory beyond the input) and "total space" (input + auxiliary). Be aware of which one the question is asking about.

## Amortized complexity — the average over a sequence

Some operations are usually cheap but occasionally expensive. The textbook example is std::vector::push_back: most of the time it's O(1), but when the internal buffer fills up the vector reallocates a bigger buffer and copies everything over — an O(n) step. So a single push_back is O(n) worst case.

But amortized over a sequence of n pushes, the total work is still O(n). Each push is O(1) on average across the sequence. That's the amortized complexity. It is why vector::push_back is fine to call millions of times in a loop.

## Why constants still matter in real life

Big-O ignores constants, but on the actual CPU two O(n) algorithms can differ by 100× because of cache friendliness, branch prediction, and the cost of memory allocation. Bigger lesson: first get the Big-O right (no n² loops when O(n) is possible), then tune constants. Don't reverse the order — micro-optimizing an O(n²) algorithm rarely beats simply replacing it with an O(n log n) one.`,
          image: "",
          codeBlocks: [
            {
              title: "O(1) — constant time",
              code: `// One memory access. The work does not depend on n at all.
#include <vector>
int firstElement(const std::vector<int>& arr) {
    return arr[0];        // O(1)
}`
            },
            {
              title: "O(n) — single loop over n elements",
              code: `// Exactly n iterations, each doing O(1) work.
#include <vector>
int sumArray(const std::vector<int>& arr) {
    int total = 0;
    for (int x : arr) {
        total += x;       // executed n times → O(n)
    }
    return total;
}`
            },
            {
              title: "O(n^2) — nested loops",
              code: `// n outer iterations * n inner iterations = n^2 work.
#include <vector>
#include <iostream>
void printAllPairs(const std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            std::cout << "(" << arr[i] << "," << arr[j] << ") ";
        }
    }
}`
            },
            {
              title: "O(log n) — halving the search space",
              code: `// Each step throws away half the array → log2(n) steps.
#include <vector>
int binarySearch(const std::vector<int>& a, int target) {
    int l = 0, r = (int)a.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;       // safe from overflow
        if (a[mid] == target) return mid;
        if (a[mid] < target)  l = mid + 1;
        else                  r = mid - 1;
    }
    return -1;                           // not found
}`
            },
            {
              title: "O(n log n) — sort + linear scan",
              code: `// Sorting dominates: O(n log n). The for-loop is only O(n).
#include <vector>
#include <algorithm>
bool hasDuplicate(std::vector<int> arr) {
    std::sort(arr.begin(), arr.end());           // O(n log n)
    for (size_t i = 1; i < arr.size(); i++) {    // O(n)
        if (arr[i] == arr[i - 1]) return true;
    }
    return false;
}`
            },
            {
              title: "O(2^n) — recursion that branches twice",
              code: `// Naive Fibonacci. Each call spawns two more → exponential blow-up.
int fib(int n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);   // T(n) = T(n-1) + T(n-2) + O(1)
}`
            },
            {
              title: "Counting recursion stack — space complexity",
              code: `// No extra arrays. But each call frame stays on the stack.
// Recursion depth = n  →  Space = O(n).
int sumRecursive(int n) {
    if (n == 0) return 0;
    return n + sumRecursive(n - 1);   // O(1) time per call, O(n) stack
}`
            }
          ],
          complexity: { time: "Depends on the algorithm", space: "Depends on the algorithm" },
          keyPoints: [
            "Big-O measures growth rate, not actual time — it is hardware-independent.",
            "Drop constants and lower-order terms: 5n² + 100n + 7 becomes simply O(n²).",
            "Nested loops multiply; sequential blocks add and then you keep only the largest.",
            "Best / worst / average cases can be very different — Big-O usually quotes the worst case.",
            "Logarithms appear whenever you halve, double, or use a balanced tree-like structure.",
            "Recursion uses O(depth) stack space even when the function allocates no other memory.",
            "Amortized analysis spreads occasional expensive operations across many cheap ones (vector::push_back is the classic example).",
            "First fix the asymptotic complexity; only then tune constants and cache behaviour."
          ],
          pitfalls: [
            "Writing O(2n) or O(n + 5) — constants and lower-order terms always drop.",
            "Forgetting recursion stack space when computing space complexity.",
            "Confusing best case with worst case — best case is almost never what matters.",
            "Assuming two O(n) algorithms must perform the same on a real CPU — constants and cache can give 10× differences.",
            "Forgetting that std::sort is O(n log n) — putting it inside a loop multiplies it.",
            "Reading 'log n' as natural log: in CS log usually means log base 2, but the base only changes a constant factor, so it's all O(log n) anyway."
          ],
          videoId: "PwKv8fOcriM",
          videoSearch: "time complexity big o notation"
        },

        {
          name: "Arrays (1-D & 2-D)",
          explanation: `An array is a fixed-size contiguous block of memory holding elements of the same type. Contiguous and same-type are the two magic words — they're what make array access O(1): given the base address and an index, the CPU can compute the location of any element in one step.

Arrays are the workhorse data structure of DSA. Two-thirds of interview problems are array problems in disguise.

## 1-D arrays — declaration and traversal

int arr[5];               uninitialised — contains garbage.
int arr[5] = {1, 2, 3, 4, 5};   initialised with all five values.
int arr[5] = {0};         all zero.
int arr[] = {1, 2, 3};    size deduced — length is 3.

To find the length, you must remember it. C-style arrays don't track their size. Better: use std::vector or std::array, which do.

Access with arr[i]. Indexing starts at 0. arr[5] in a 5-element array is OUT OF BOUNDS — undefined behaviour, sometimes a crash, sometimes silent corruption.

## Time complexity at a glance

Random access (arr[i]): O(1).
Search by value: O(n) — you must scan.
Insert at front: O(n) — every element shifts right.
Insert at end (with a fixed-size array): impossible without copying. With vector::push_back: O(1) amortised.
Delete in the middle: O(n) — shift everything to the left.

## 2-D arrays — matrices

int mat[3][4];              3 rows, 4 columns.
int mat[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};

Access with mat[row][col]. Both indices are 0-based.

Internally, a 2-D array is stored row by row in memory (row-major order). That means iterating row-by-row is cache-friendly; iterating column-by-column is slower.

For dynamic 2-D structures, use vector<vector<int>> — each inner vector is a row.

## Common patterns

Linear scan: a single for loop over the array. Used for sum, min, max, search.
Two-pointer (next concept): two indices moving over the array — turns many O(n²) brute-force solutions into O(n).
Sliding window (also next): a moving range over the array — for substring and subarray problems.
Prefix sum: precompute partial sums so range queries become O(1).
Matrix traversal: row-major, column-major, diagonals, spirals, or boundary-only.

## Pass an array to a function

C-style: void f(int arr[], int n) — the array decays to a pointer, so you must pass the size separately.

Modern C++: void f(const vector<int>& v). Vectors know their own size — much safer.

For 2-D, prefer vector<vector<int>> when the dimensions are runtime-known.`,
          codeBlocks: [
            {
              title: "Declare, traverse, find max",
              code: `#include <iostream>
using namespace std;

int main() {
    int arr[6] = {3, 7, 1, 9, 4, 2};
    int n = 6;

    // Print
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << "\\n";

    // Find maximum
    int best = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > best) best = arr[i];
    }
    cout << "max = " << best << "\\n";   // 9
}`
            },
            {
              title: "Insert and delete (shifting in a fixed array)",
              code: `// Insert value v at index pos in an array of current size n.
// Requires arr to have capacity for one more element.
void insertAt(int arr[], int& n, int pos, int v) {
    for (int i = n; i > pos; i--) arr[i] = arr[i - 1];
    arr[pos] = v;
    n++;
}

// Delete the element at index pos.
void deleteAt(int arr[], int& n, int pos) {
    for (int i = pos; i < n - 1; i++) arr[i] = arr[i + 1];
    n--;
}`
            },
            {
              title: "2-D matrix — declare, print, sum a row",
              code: `#include <iostream>
using namespace std;

int main() {
    int mat[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };

    // Print row by row
    for (int r = 0; r < 3; r++) {
        for (int c = 0; c < 4; c++) cout << mat[r][c] << "\\t";
        cout << "\\n";
    }

    // Sum of row 1 (the second row)
    int rowSum = 0;
    for (int c = 0; c < 4; c++) rowSum += mat[1][c];
    cout << "row 1 sum = " << rowSum << "\\n";   // 26
}`
            },
            {
              title: "Dynamic 2-D with vector<vector<int>>",
              code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int rows = 3, cols = 4;
    vector<vector<int>> mat(rows, vector<int>(cols, 0));

    // Fill with i*cols + j
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            mat[i][j] = i * cols + j;

    for (auto& row : mat) {
        for (int x : row) cout << x << "\\t";
        cout << "\\n";
    }
}`
            },
            {
              title: "Passing an array safely with std::vector",
              code: `#include <iostream>
#include <vector>
using namespace std;

// const vector<int>& — read-only reference, no copy, knows its own size.
int sumArr(const vector<int>& v) {
    int s = 0;
    for (int x : v) s += x;
    return s;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    cout << sumArr(nums) << "\\n";   // 15
}`
            }
          ],
          complexity: { time: "Access O(1); search/insert/delete O(n)", space: "O(n)" },
          keyPoints: [
            "Arrays are contiguous memory with fixed-size, same-type elements. Random access is O(1).",
            "Indexing starts at 0. arr[n] in an n-element array is out of bounds — undefined behaviour.",
            "C-style arrays don't know their own size — you must pass it separately. std::vector does know.",
            "Inserting/deleting in the middle costs O(n) because of shifting.",
            "2-D arrays are stored row-by-row in memory; row-major traversal is cache-friendly.",
            "vector<vector<int>> mat(R, vector<int>(C, 0)) creates an R × C grid initialised to 0.",
            "Pass big arrays by const reference (const vector<int>& v) — no copy, can't be modified.",
            "Most DSA patterns are on top of arrays — two-pointer, sliding window, prefix sum, sorting."
          ],
          pitfalls: [
            "Going out of bounds (arr[n] when length is n) doesn't crash deterministically — it corrupts memory silently.",
            "C-style int arr[] decays to a pointer when passed to a function — the function can't tell its size.",
            "Iterating a matrix column-by-column is much slower than row-by-row because of CPU cache misses.",
            "vector<int> v(n); creates a vector with n zeros. vector<int> v{n}; creates a vector with one element n. The braces matter!",
            "Modifying a vector while iterating over it with iterators is undefined behaviour.",
            "Forgetting to actually allocate the inner vectors — vector<vector<int>> mat(R); gives you R empty rows."
          ],
          videoId: "8wmn7k1TTcI",
          videoSearch: "arrays in c++"
        },
        {
          name: "Strings (C-style & std::string)",
          explanation: `A string is just a sequence of characters. C++ gives you two ways to handle them — the old C-style char array (a leftover from C) and the modern std::string class. They interoperate freely, but std::string is what you'll use 99% of the time.

## C-style strings — char arrays

A C-string is a char array that ends with a special null terminator: '\\0'. The terminator is what marks the end; functions like printf and strlen scan until they see it.

char name[] = "Hello";    sizeof is 6 (5 letters + '\\0').
char name[10] = "Hi";     room for more characters; positions 2-9 hold zeros.

Operations live in <cstring>: strlen, strcpy, strcmp, strcat. They're fast but unsafe — they'll happily overflow buffers if the destination is too small.

## std::string — the modern choice

#include <string>. A std::string knows its own length, grows automatically, and supports all the operators you'd expect.

string s = "hello";
s.length()                   5
s[0]                          'h'
s += " world";                "hello world"
s == "hi"                     false
s + s                         "hellohello"

## Common operations cheat sheet

s.length() / s.size()         number of characters (both work)
s.empty()                     true if length is 0
s.push_back(c)                append one character
s.pop_back()                  remove last character
s.substr(start, len)          substring starting at start, len characters
s.find("xyz")                 index of first occurrence, or string::npos if not found
s.replace(start, len, "abc")  replace a range
s.insert(pos, "xyz")          insert at pos
s.erase(pos, len)             remove a range

## Reading strings from input

cin >> s reads one whitespace-separated token. To read a whole line, use getline(cin, s).

If you mix cin >> n; with getline(cin, s); right after, getline reads an empty line — call cin.ignore() between them.

## Converting between strings and numbers

stoi(s)      string → int
stoll(s)     string → long long
stod(s)      string → double
to_string(n) any number → string

These throw std::invalid_argument if the string can't be parsed.

## Char-level tricks

A char is just a small integer. 'A' is 65, 'a' is 97. You can do arithmetic on it:

int idx = c - 'a';           position in the alphabet (0-25)
char upper = c - 'a' + 'A';  convert lowercase to uppercase

Functions in <cctype>: isalpha(c), isdigit(c), isspace(c), tolower(c), toupper(c).

## Useful patterns

Reverse a string: reverse(s.begin(), s.end()) — needs <algorithm>.
Sort characters: sort(s.begin(), s.end()).
Count characters: array of 26 ints, increment count[c - 'a'] for each character.

## Why std::string over C-string?

Knows its own length, grows automatically, never overflows, integrates with the STL, has a rich API. The only reason to use C-strings is when interfacing with C APIs or when working in very memory-constrained code.`,
          codeBlocks: [
            {
              title: "Declaring and using a std::string",
              code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "hello";
    cout << s.length()       << "\\n";   // 5
    cout << s[0]              << "\\n";   // h
    cout << s + " world"      << "\\n";   // hello world
    s += "!";
    cout << s                 << "\\n";   // hello!
    cout << s.substr(1, 3)    << "\\n";   // ell
}`
            },
            {
              title: "Reading input (cin vs getline)",
              code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string token, line;

    // Reads one word (stops at whitespace)
    cin >> token;

    cin.ignore();             // consume the leftover newline
    // Reads the rest of the next line, including spaces
    getline(cin, line);

    cout << "Token: " << token << "\\n";
    cout << "Line:  " << line  << "\\n";
}`
            },
            {
              title: "Reverse + check palindrome",
              code: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isPalindrome(const string& s) {
    int l = 0, r = (int)s.length() - 1;
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++; r--;
    }
    return true;
}

int main() {
    string s = "racecar";
    cout << (isPalindrome(s) ? "yes" : "no") << "\\n";

    // Or reverse the whole string with STL
    reverse(s.begin(), s.end());
    cout << s << "\\n";   // still racecar
}`
            },
            {
              title: "Check anagram with a 26-char frequency array",
              code: `#include <iostream>
#include <string>
using namespace std;

bool isAnagram(const string& a, const string& b) {
    if (a.length() != b.length()) return false;
    int freq[26] = {0};
    for (char c : a) freq[c - 'a']++;
    for (char c : b) freq[c - 'a']--;
    for (int i = 0; i < 26; i++) if (freq[i] != 0) return false;
    return true;
}

int main() {
    cout << isAnagram("listen", "silent") << "\\n";   // 1
    cout << isAnagram("hello",  "world")  << "\\n";   // 0
}`
            },
            {
              title: "Convert between strings and numbers",
              code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "42";
    int n = stoi(s);
    cout << n + 1 << "\\n";          // 43

    int x = 100;
    string t = to_string(x);
    cout << t + " bottles" << "\\n";  // 100 bottles

    double d = stod("3.14");
    cout << d * 2 << "\\n";           // 6.28
}`
            }
          ],
          complexity: { time: "Most ops O(n); access O(1)", space: "O(n)" },
          keyPoints: [
            "C-strings are char arrays ending in '\\0'. std::string is the modern, safer, length-aware choice.",
            "cin >> s reads one word; getline(cin, s) reads a whole line including spaces.",
            "After cin >> n, call cin.ignore() before getline — otherwise getline reads an empty line.",
            "s.length() and s.size() are the same; both run in O(1).",
            "s.find(\"xyz\") returns string::npos if not found — check with !=, not <0.",
            "Convert numbers ↔ strings with stoi / stod / to_string. They throw on invalid input.",
            "Use c - 'a' to map a lowercase letter to 0-25. A 26-int array is the canonical letter counter.",
            "reverse(s.begin(), s.end()) reverses in place. sort does the same for sorting characters."
          ],
          pitfalls: [
            "C-string operations (strcpy, strcat) don't check buffer sizes — easy to overflow.",
            "Comparing C-strings with == compares pointers, not characters. Use strcmp or convert to std::string.",
            "Forgetting cin.ignore() between cin >> n and getline(cin, s) → getline reads empty.",
            "Using s.find(\"x\") < 0 — wrong. The return type is unsigned. Use != string::npos.",
            "Modifying a string while holding an iterator to it can invalidate the iterator.",
            "tolower / toupper return int, not char — explicit cast if you assign back into a char."
          ],
          videoId: "MOSjYaVymcU",
          videoSearch: "strings c++"
        },
        {
          name: "Two-Pointer Technique",
          explanation: `The two-pointer technique uses two indices that move through an array under simple rules. By coordinating their movement, you replace many O(n²) brute-force solutions with O(n) ones — without losing any correctness.

It works in three main flavours, which you'll see again and again:

## Flavour 1 — Pointers at opposite ends

Used on a sorted array (or one you sorted yourself) for problems like "find a pair with a given sum" or "is this string a palindrome".

Start with left = 0 and right = n - 1. At each step, look at the pair (arr[left], arr[right]) and either record it as the answer, move left forward (to increase the sum), or move right backward (to decrease the sum). The two pointers will meet in the middle in O(n) steps total.

## Flavour 2 — Both pointers moving in the same direction (fast / slow)

Used for problems like "remove duplicates from a sorted array", "move all zeros to the end", or "longest subarray with property X". One pointer (write) builds the answer; the other (read) scans the input. They both move forward, never backward.

This is also the structure behind sliding-window solutions, which we cover next.

## Flavour 3 — Two arrays, one pointer each

Used for merging two sorted arrays, finding intersection or union, or comparing sequences. You hold one index per array and advance whichever index's value is smaller.

## Why it works — the invariant

The whole technique rests on a monotonic invariant: as one pointer moves, the relationship being tracked changes monotonically. In the pair-sum example, moving left forward only ever increases the sum, and moving right backward only ever decreases it. That monotonicity lets you skip huge regions of the n² search space.

## Recipe to spot a two-pointer problem

1. Is the input sorted, or can it be sorted cheaply?
2. Are you looking for a pair, a subarray, or a relationship between two ends?
3. Does moving one pointer change the answer in a predictable direction?

If yes to all three, two-pointer almost certainly applies.

## Complexity

Time: O(n) (or O(n log n) if you sort first).
Space: O(1) — the technique uses only two indices.`,
          codeBlocks: [
            {
              title: "Pair with target sum in a sorted array",
              code: `#include <vector>
#include <utility>
using namespace std;

// Returns {l, r} indices of a pair that sums to target, or {-1, -1}.
pair<int,int> twoSumSorted(const vector<int>& arr, int target) {
    int l = 0, r = (int)arr.size() - 1;
    while (l < r) {
        int sum = arr[l] + arr[r];
        if (sum == target) return {l, r};
        else if (sum < target) l++;
        else r--;
    }
    return {-1, -1};
}`
            },
            {
              title: "Reverse an array in place",
              code: `#include <vector>
using namespace std;

void reverseArr(vector<int>& a) {
    int l = 0, r = (int)a.size() - 1;
    while (l < r) {
        swap(a[l], a[r]);
        l++; r--;
    }
}`
            },
            {
              title: "Palindrome check",
              code: `#include <string>
using namespace std;

bool isPalindrome(const string& s) {
    int l = 0, r = (int)s.length() - 1;
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++; r--;
    }
    return true;
}`
            },
            {
              title: "Remove duplicates from a sorted array (fast/slow)",
              code: `#include <vector>
using namespace std;

// Returns the new length; arr is modified in place.
int removeDuplicates(vector<int>& arr) {
    if (arr.empty()) return 0;
    int write = 1;                          // slow pointer
    for (int read = 1; read < (int)arr.size(); read++) {  // fast pointer
        if (arr[read] != arr[read - 1]) {
            arr[write] = arr[read];
            write++;
        }
    }
    return write;
}`
            },
            {
              title: "Merge two sorted arrays",
              code: `#include <vector>
using namespace std;

vector<int> merge(const vector<int>& a, const vector<int>& b) {
    vector<int> out;
    out.reserve(a.size() + b.size());
    int i = 0, j = 0;
    while (i < (int)a.size() && j < (int)b.size()) {
        if (a[i] <= b[j]) out.push_back(a[i++]);
        else              out.push_back(b[j++]);
    }
    while (i < (int)a.size()) out.push_back(a[i++]);
    while (j < (int)b.size()) out.push_back(b[j++]);
    return out;
}`
            },
            {
              title: "Container With Most Water (classic two-pointer)",
              code: `#include <vector>
#include <algorithm>
using namespace std;

int maxArea(const vector<int>& height) {
    int l = 0, r = (int)height.size() - 1;
    int best = 0;
    while (l < r) {
        int h = min(height[l], height[r]);
        best = max(best, h * (r - l));
        // Move the shorter side inward — that's the only way the height can grow.
        if (height[l] < height[r]) l++;
        else                       r--;
    }
    return best;
}`
            }
          ],
          complexity: { time: "O(n) (or O(n log n) including the sort)", space: "O(1)" },
          keyPoints: [
            "Two pointers replace O(n²) double loops with O(n) for many pair/subarray problems.",
            "The opposite-end variant needs the array sorted (or sortable).",
            "The fast/slow variant has both pointers move forward — one builds the answer, the other reads.",
            "Each pointer crosses the array at most once, so total work is O(n).",
            "The technique works because there's a monotonic invariant — moving a pointer changes the metric in one direction.",
            "Most 'pair with sum X', 'remove duplicates', and 'palindrome' problems are two-pointer in disguise.",
            "Choose < or <= as your loop condition based on whether l == r should be a final check.",
            "If you find yourself sorting before applying two-pointer, the overall complexity is O(n log n)."
          ],
          pitfalls: [
            "Forgetting to sort first when the algorithm requires a sorted input.",
            "Off-by-one — using l <= r instead of l < r can re-process the middle element.",
            "Moving the wrong pointer when the predicate's direction is reversed.",
            "On Container With Most Water, moving the taller side is always wrong — only moving the shorter side can improve the answer.",
            "On 'remove duplicates', forgetting that the function only normalizes the prefix [0, write); the elements after are garbage.",
            "Comparing pointers (or indices) using unsigned arithmetic can wrap around — cast to int explicitly."
          ],
          videoId: "BCLfxQja9dI",
          videoSearch: "two pointer technique"
        },
        {
          name: "Sliding Window",
          explanation: `Sliding window is two-pointer with discipline. Both pointers move forward only, and at every step you maintain a "window" — a contiguous subarray — between them. You update the answer incrementally as the window expands or contracts, never recomputing from scratch. That's what makes it O(n).

It is the right tool whenever the question involves a contiguous subarray or substring with some property: maximum sum, longest with all distinct characters, smallest with sum ≥ k, and so on.

## Two flavours

Fixed-size window. The window size k is given. Slide it from left to right; at each step, add the new element and subtract the one that just left. Used for "max sum of any k consecutive elements", "average over every k-sized chunk".

Variable-size window. The window grows when a condition lets it and shrinks when it must. Used for "longest substring without repeats", "smallest subarray with sum ≥ s", "longest subarray with at most k distinct".

## Template for the fixed-size version

1. Compute the property for the first window [0, k-1] in O(k).
2. Slide: for i from k to n-1, add arr[i] and subtract arr[i-k]. Update the answer.

## Template for the variable-size version

Two pointers, left = 0 and right = 0. Expand right one step at a time. Each step:
1. Update window state (e.g., a running sum or character count) with arr[right].
2. While the window violates the condition, shrink from the left: remove arr[left] from the state, increment left.
3. Update the answer using the current window.

The trick is that each element enters and leaves the window at most once. So total work is O(n), even though it looks like a nested loop.

## State the window has to maintain

Choose your state based on the question:

Running sum — for "max sum subarray of size k" or "smallest subarray with sum ≥ s".
HashMap<char, int> — for "longest substring without repeating characters" or "longest with at most k distinct".
Deque of indices — for "sliding window maximum" (with a monotonic deque).
A bit mask or 26-int array — for fixed alphabets.

## When NOT to use sliding window

The technique requires that as you expand the window, the property you're tracking changes monotonically (or in a predictable direction). For non-contiguous subsequences, or problems without that monotonicity, sliding window doesn't apply — reach for DP instead.`,
          codeBlocks: [
            {
              title: "Fixed window — max sum of any k consecutive elements",
              code: `#include <vector>
#include <algorithm>
using namespace std;

int maxSumWindow(const vector<int>& arr, int k) {
    int n = (int)arr.size();
    if (n < k) return 0;

    int windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += arr[i];

    int best = windowSum;
    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];   // slide
        best = max(best, windowSum);
    }
    return best;
}`
            },
            {
              title: "Variable window — longest substring without repeating chars",
              code: `#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

int longestUnique(const string& s) {
    unordered_map<char, int> count;
    int left = 0, best = 0;
    for (int right = 0; right < (int)s.length(); right++) {
        count[s[right]]++;
        // Shrink while the new character has been seen before
        while (count[s[right]] > 1) {
            count[s[left]]--;
            left++;
        }
        best = max(best, right - left + 1);
    }
    return best;
}`
            },
            {
              title: "Smallest subarray with sum >= target",
              code: `#include <vector>
#include <climits>
#include <algorithm>
using namespace std;

int minSubArrayLen(const vector<int>& arr, int target) {
    int n = (int)arr.size(), left = 0, sum = 0, best = INT_MAX;
    for (int right = 0; right < n; right++) {
        sum += arr[right];
        while (sum >= target) {                       // shrink while still valid
            best = min(best, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }
    return best == INT_MAX ? 0 : best;
}`
            },
            {
              title: "Longest substring with at most k distinct characters",
              code: `#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

int longestKDistinct(const string& s, int k) {
    unordered_map<char, int> count;
    int left = 0, best = 0;
    for (int right = 0; right < (int)s.length(); right++) {
        count[s[right]]++;
        while ((int)count.size() > k) {
            count[s[left]]--;
            if (count[s[left]] == 0) count.erase(s[left]);
            left++;
        }
        best = max(best, right - left + 1);
    }
    return best;
}`
            },
            {
              title: "Sliding window maximum with a monotonic deque",
              code: `#include <vector>
#include <deque>
using namespace std;

vector<int> maxSlidingWindow(const vector<int>& arr, int k) {
    vector<int> out;
    deque<int> dq;   // stores INDICES, values decreasing front -> back
    for (int i = 0; i < (int)arr.size(); i++) {
        // Drop indices that are out of the window
        while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
        // Drop smaller elements from the back — they can never be max again
        while (!dq.empty() && arr[dq.back()] < arr[i]) dq.pop_back();
        dq.push_back(i);
        if (i >= k - 1) out.push_back(arr[dq.front()]);
    }
    return out;
}`
            }
          ],
          complexity: { time: "O(n) — each element enters and leaves at most once", space: "O(k) for the state" },
          keyPoints: [
            "Sliding window applies to contiguous subarray / substring problems.",
            "Fixed window: add the new element, subtract the one leaving the window.",
            "Variable window: expand on the right, shrink from the left when the window violates the condition.",
            "Each element enters and leaves the window at most once → total work O(n) despite the inner while loop.",
            "Pick the right state: running sum, hash map of counts, monotonic deque, or fixed-size array.",
            "Sliding window maximum needs a monotonic deque — keeps the largest at the front in O(1).",
            "The technique requires monotonic behaviour — if shrinking from the left fixes the violation, sliding window applies.",
            "For non-contiguous subsequences or no-monotonicity problems, use DP instead."
          ],
          pitfalls: [
            "Updating best inside the wrong branch — typical place is RIGHT after the while-loop shrink, not inside it.",
            "Off-by-one in window size: arr[right] - arr[left] + 1 is the size, not right - left.",
            "Forgetting to remove a map entry when its count hits zero — count.size() then misreports distinct count.",
            "Using a recursive shrink instead of a while loop — leads to bugs or stack overflow.",
            "Confusing fixed vs variable window: a fixed window never shrinks, a variable one might shrink several times in one step.",
            "Sliding window doesn't work on negative-number arrays for some problems — verify the monotonic property first."
          ],
          videoId: "nvE5kQVdLc4",
          videoSearch: "sliding window technique"
        },
        {
          name: "Prefix Sum & Kadane's Algorithm",
          explanation: `Prefix sums and Kadane's algorithm are two short-but-mighty tricks on top of arrays. Both are O(n), both are easy to code, and both show up in dozens of problems. Learn them once, recognise them everywhere.

## Prefix sums — the idea

Build a new array prefix where prefix[i] is the sum of arr[0..i]. Now any range sum sum(arr[l..r]) can be answered in O(1):

If l > 0: prefix[r] - prefix[l - 1]
If l == 0: prefix[r]

You pay O(n) once to build the prefix array, and every subsequent range query is free. This converts O(n) range scans into O(1), which is huge when you have many queries.

## Variations

Range sum on 2-D — build a 2-D prefix sum; range sum on a sub-rectangle is computed with four lookups using inclusion–exclusion.

Prefix XOR — same idea, but with XOR. xor[l..r] = prefXor[r] XOR prefXor[l-1].

Difference array — the inverse operation. Useful when you have many "add v to range [l..r]" updates: record +v at index l and -v at l+1 in a diff array, then prefix-sum it at the end.

Count subarrays with sum K — store running prefix sums in a hash map; at each index, look up (currentPrefix - K). This is the trick behind the classic LeetCode "Subarray Sum Equals K".

## Kadane's algorithm — the idea

Find the maximum-sum contiguous subarray in O(n). The insight: at each index, the best subarray ending there is either the current element alone, or it extends the previous best.

curr = max(arr[i], curr + arr[i])
best = max(best, curr)

If curr ever goes negative, throw it away — starting fresh at the next element will give a higher sum.

## Why it works

Kadane's is dynamic programming in disguise — one state (curr = best sum ending here) updated in O(1) per index. The classic intuition: a subarray with a negative prefix can never be optimal, so cut it off.

## All-negative arrays

If every element is negative, the answer is the single largest element (the least negative). Initialise curr and best with arr[0], not 0 — otherwise you'd return 0 (an empty subarray) which isn't allowed in most formulations.

## Tracking the indices

To return the actual subarray, track the start index when curr resets and the (start, end) of the best window when best updates.

## Complexity

Prefix sum build: O(n). Each query: O(1). Total space: O(n).
Kadane's: O(n) time, O(1) space.`,
          codeBlocks: [
            {
              title: "Build prefix sums and answer range queries",
              code: `#include <vector>
using namespace std;

class PrefixSum {
    vector<long long> ps;
public:
    PrefixSum(const vector<int>& arr) {
        ps.assign(arr.size(), 0);
        if (arr.empty()) return;
        ps[0] = arr[0];
        for (int i = 1; i < (int)arr.size(); i++) ps[i] = ps[i-1] + arr[i];
    }
    long long rangeSum(int l, int r) const {     // inclusive both ends
        if (l == 0) return ps[r];
        return ps[r] - ps[l - 1];
    }
};`
            },
            {
              title: "Subarray Sum Equals K (prefix sum + hash map)",
              code: `#include <vector>
#include <unordered_map>
using namespace std;

int subarraySumEqualsK(const vector<int>& arr, int k) {
    unordered_map<int, int> count;        // prefix sum -> how many times seen
    count[0] = 1;                          // empty prefix
    int running = 0, answer = 0;
    for (int x : arr) {
        running += x;
        if (count.count(running - k)) answer += count[running - k];
        count[running]++;
    }
    return answer;
}`
            },
            {
              title: "Kadane's algorithm — maximum subarray sum",
              code: `#include <vector>
#include <algorithm>
using namespace std;

int maxSubarraySum(const vector<int>& arr) {
    int curr = arr[0], best = arr[0];
    for (int i = 1; i < (int)arr.size(); i++) {
        curr = max(arr[i], curr + arr[i]);
        best = max(best, curr);
    }
    return best;
}`
            },
            {
              title: "Kadane's that also returns the indices",
              code: `#include <vector>
#include <algorithm>
using namespace std;

// Returns { maxSum, startIndex, endIndex }
struct Result { int sum, l, r; };

Result kadaneWithIndices(const vector<int>& arr) {
    int curr = arr[0], best = arr[0];
    int s = 0, l = 0, r = 0;
    for (int i = 1; i < (int)arr.size(); i++) {
        if (arr[i] > curr + arr[i]) {
            curr = arr[i];
            s = i;                       // start a fresh subarray here
        } else {
            curr = curr + arr[i];
        }
        if (curr > best) {
            best = curr;
            l = s; r = i;
        }
    }
    return {best, l, r};
}`
            },
            {
              title: "2-D prefix sum for sub-rectangle queries",
              code: `#include <vector>
using namespace std;

class Matrix2DPrefix {
    vector<vector<long long>> ps;
public:
    Matrix2DPrefix(const vector<vector<int>>& m) {
        int R = m.size(), C = R ? m[0].size() : 0;
        ps.assign(R + 1, vector<long long>(C + 1, 0));
        for (int i = 1; i <= R; i++)
            for (int j = 1; j <= C; j++)
                ps[i][j] = m[i-1][j-1] + ps[i-1][j] + ps[i][j-1] - ps[i-1][j-1];
    }
    // Sum of m[r1..r2][c1..c2] inclusive
    long long rangeSum(int r1, int c1, int r2, int c2) const {
        return ps[r2+1][c2+1] - ps[r1][c2+1] - ps[r2+1][c1] + ps[r1][c1];
    }
};`
            }
          ],
          complexity: { time: "Build O(n); query O(1) (prefix). Kadane's: O(n).", space: "O(n)" },
          keyPoints: [
            "prefix[i] = sum of arr[0..i]. Range sum arr[l..r] = prefix[r] - prefix[l-1] (handle l == 0 separately).",
            "Build once O(n), answer many queries in O(1) each.",
            "Hash-map + prefix sum is the trick for 'count subarrays with sum equal to K' — O(n) total.",
            "2-D prefix sums use inclusion–exclusion: four lookups per rectangle query.",
            "Kadane's picks, at each index, between starting fresh and extending — one line of code.",
            "If curr ever goes negative, restart — a negative prefix can never help a future maximum.",
            "Initialise curr and best with arr[0] (not 0) so all-negative arrays still work.",
            "To return the actual subarray indices, track the start index whenever curr resets."
          ],
          pitfalls: [
            "Off-by-one on the l == 0 edge case — using prefix[l - 1] when l is 0 is an out-of-bounds access.",
            "Integer overflow on prefix sums — for large n use long long.",
            "Initialising Kadane's best to 0 — fails when the input is all negative.",
            "Forgetting to insert count[0] = 1 in the 'sum equals K' hash trick — misses subarrays starting at index 0.",
            "On 2-D prefix sums, mixing up 0-indexed input with 1-indexed prefix array.",
            "Using Kadane's on circular arrays — needs a small variant (max(kadane, total - minKadane))."
          ],
          videoId: "6PxU4rfnf4Q",
          videoSearch: "kadane algorithm maximum subarray prefix sum"
        },
        {
          name: "Bit Manipulation & XOR Tricks",
          explanation: `Every integer in C++ is stored as a sequence of bits. Bit manipulation lets you act on those bits directly, often replacing entire loops with a single line. It's also how you encode small sets, build bitmasks, and pull off the famous XOR tricks for "find the odd one out" type problems.

## The six bitwise operators

a & b   AND. Bit is 1 only if both bits are 1.
a | b   OR. Bit is 1 if either is 1.
a ^ b   XOR. Bit is 1 if exactly one is 1.
~a      NOT. Flip every bit.
a << k  Left shift. Multiplies by 2^k.
a >> k  Right shift. Divides by 2^k (integer division, sign-extending if signed).

## Set, clear, toggle, check the i-th bit

set:    x = x | (1 << i)
clear:  x = x & ~(1 << i)
toggle: x = x ^ (1 << i)
check:  bool isOn = (x >> i) & 1;   // also (x & (1 << i)) != 0

These four operations are the bread and butter of bit manipulation.

## XOR — the three magic identities

x ^ 0 = x        XOR with zero is identity.
x ^ x = 0        XOR with itself is zero.
XOR is commutative and associative.

Together they enable elegant tricks:

Single number: in an array where every number appears twice except one, XOR all elements — pairs cancel, the unique survives.
Swap without a temp variable: a ^= b; b ^= a; a ^= b; (also: doesn't help with same memory).
Find missing number from 1..n: XOR all elements with XOR of 1..n.

## Common useful tricks

Check power of 2: (n > 0) && (n & (n - 1)) == 0. A power of two has exactly one bit set; subtracting 1 flips that bit and all bits below.

Count set bits (Brian Kernighan): repeatedly do n &= n - 1 until n is 0; each step removes the lowest set bit.

Lowest set bit value: n & -n. In two's-complement, -n is the bitwise complement plus one, so n & -n isolates the lowest 1 bit.

Multiply by 2: n << 1. Divide by 2: n >> 1 (faster than * 2 / / 2 in some old compilers — modern compilers do this automatically).

## Bitmasks — using an int as a small set

If you have at most 30 elements, an int can represent any subset. Bit i is "is element i in the set?".

Add element i:    mask |= (1 << i)
Remove element i: mask &= ~(1 << i)
Has element i:    mask & (1 << i)
All subsets of an n-element set: for (int m = 0; m < (1 << n); m++)

This is the basis of bitmask DP — common in graph problems and competitive programming.

## Signed vs unsigned shifts

In C++, >> on a signed negative integer is implementation-defined before C++20 (usually arithmetic shift, preserving sign). Use unsigned int (or std::uint32_t) when you need logical right shift with zero fill.

## Built-in functions you'll love

__builtin_popcount(x)    number of 1 bits in x (int).
__builtin_popcountll(x)  same for long long.
__builtin_clz(x)         count leading zeros (undefined if x is 0).
__builtin_ctz(x)         count trailing zeros (undefined if x is 0).

These are compiler intrinsics that compile to single CPU instructions. Use them; don't reinvent.`,
          codeBlocks: [
            {
              title: "Set / clear / toggle / check the i-th bit",
              code: `int setBit   (int x, int i) { return x |  (1 << i); }
int clearBit (int x, int i) { return x & ~(1 << i); }
int toggleBit(int x, int i) { return x ^  (1 << i); }
bool checkBit(int x, int i) { return (x >> i) & 1; }

// Example
int x = 0b1010;          // 10
x = setBit(x, 0);        // 0b1011 = 11
x = clearBit(x, 1);      // 0b1001 = 9
x = toggleBit(x, 3);     // 0b0001 = 1
bool b = checkBit(x, 0); // true`
            },
            {
              title: "Single Number (XOR trick)",
              code: `#include <vector>
using namespace std;

int singleNumber(const vector<int>& arr) {
    int x = 0;
    for (int n : arr) x ^= n;
    return x;
}

// Input:  [4, 1, 2, 1, 2]
// Output: 4   (pairs cancel; the loner stays)`
            },
            {
              title: "Power of two + Brian Kernighan's popcount",
              code: `bool isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

// Count set bits, dropping the lowest 1 each iteration
int countSetBits(int n) {
    int count = 0;
    while (n != 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}

// Or, just use the compiler intrinsic:
int countFast(int n) { return __builtin_popcount(n); }`
            },
            {
              title: "Iterate every subset of {0, 1, ..., n-1}",
              code: `#include <iostream>
using namespace std;

void printAllSubsets(int n) {
    int total = 1 << n;                  // 2^n subsets
    for (int mask = 0; mask < total; mask++) {
        cout << "{ ";
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) cout << i << " ";
        }
        cout << "}\\n";
    }
}`
            },
            {
              title: "Number of 1 bits + missing number from 0..n",
              code: `#include <vector>
using namespace std;

int hammingWeight(uint32_t n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

// Array contains every number from 0..n EXCEPT one. Find the missing.
int missingNumber(const vector<int>& arr) {
    int n = (int)arr.size();
    int x = n;                          // XOR with n (the upper bound)
    for (int i = 0; i < n; i++) {
        x ^= i ^ arr[i];                // each index and value cancel
    }
    return x;
}`
            },
            {
              title: "Isolate / clear lowest set bit",
              code: `// Value of the lowest set bit:
int lowestBit = n & -n;

// Index of the lowest set bit (assumes n != 0):
int lowestIdx = __builtin_ctz(n);

// Clear the lowest set bit:
n = n & (n - 1);

// Examples for n = 0b10100 (= 20):
//   n & -n        = 0b00100 (= 4)
//   __builtin_ctz = 2
//   n & (n-1)     = 0b10000 (= 16)`
            }
          ],
          complexity: { time: "Most ops O(1); set-bit count O(set bits)", space: "O(1)" },
          keyPoints: [
            "AND, OR, XOR, NOT, <<, >> are the six bitwise operators — each one CPU instruction.",
            "Set / clear / toggle / check a bit are the four core operations — memorise them.",
            "XOR identities (x^x=0, x^0=x) enable elegant 'find the loner' tricks.",
            "n & (n - 1) drops the lowest set bit. It's the basis of Brian Kernighan's bit-count.",
            "(n > 0) && (n & (n - 1)) == 0 is the canonical power-of-two check.",
            "Use an int as a tiny set: bit i means 'is element i in the set'. Up to 30 elements fit safely.",
            "Iterate every subset of an n-element set with for (int m = 0; m < (1 << n); m++).",
            "Use __builtin_popcount / __builtin_ctz / __builtin_clz for fast bit operations."
          ],
          pitfalls: [
            "1 << 32 is undefined behaviour on a 32-bit int. Use 1LL << k for shifts of 32 or more.",
            "Right shift on a signed negative integer can sign-extend (fill with 1s) — use unsigned for logical shift.",
            ">> and << have low precedence — wrap them in parentheses: (x >> i) & 1, not x >> i & 1.",
            "The XOR swap trick fails when both variables point to the same memory location.",
            "__builtin_ctz(0) and __builtin_clz(0) are undefined behaviour — guard with n != 0.",
            "Comparing (x & (1 << i)) with true/false directly — the result is an int, not a bool. Compare with != 0 to be explicit."
          ],
          videoId: "r-u4uh3QvsQ",
          videoSearch: "bit manipulation xor c++"
        }
      ],

      problems: [
        { title: "Two Sum",                                  difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/two-sum/" },
        { title: "Best Time to Buy and Sell Stock",          difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { title: "Maximum Subarray (Kadane's)",              difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/maximum-subarray/" },
        { title: "Move Zeroes",                              difficulty: "Easy",                  url: "https://leetcode.com/problems/move-zeroes/" },
        { title: "Container With Most Water",                difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/container-with-most-water/" },
        { title: "3Sum",                                     difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/3sum/" },
        { title: "4Sum",                                     difficulty: "Medium",                url: "https://leetcode.com/problems/4sum/" },
        { title: "Longest Substring Without Repeating Chars",difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { title: "Valid Anagram",                            difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/valid-anagram/" },
        { title: "Valid Palindrome",                         difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/valid-palindrome/" },
        { title: "Subarray Sum Equals K",                    difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
        { title: "Rotate Array",                             difficulty: "Medium",                url: "https://leetcode.com/problems/rotate-array/" },
        { title: "Set Matrix Zeroes",                        difficulty: "Medium",                url: "https://leetcode.com/problems/set-matrix-zeroes/" },
        { title: "Spiral Matrix",                            difficulty: "Medium",                url: "https://leetcode.com/problems/spiral-matrix/" },
        { title: "Pascal's Triangle",                        difficulty: "Easy",                  url: "https://leetcode.com/problems/pascals-triangle/" },
        { title: "Next Permutation",                         difficulty: "Medium",                url: "https://leetcode.com/problems/next-permutation/" },
        { title: "Majority Element",                         difficulty: "Easy",                  url: "https://leetcode.com/problems/majority-element/" },
        { title: "Trapping Rain Water",                      difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/trapping-rain-water/" },
        { title: "Longest Palindromic Substring",            difficulty: "Medium",                url: "https://leetcode.com/problems/longest-palindromic-substring/" },
        { title: "Reverse Words in a String",                difficulty: "Medium",                url: "https://leetcode.com/problems/reverse-words-in-a-string/" },
        { title: "String to Integer (atoi)",                 difficulty: "Medium",                url: "https://leetcode.com/problems/string-to-integer-atoi/" },
        { title: "Single Number (XOR)",                      difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/single-number/" },
        { title: "Number of 1 Bits",                         difficulty: "Easy",                  url: "https://leetcode.com/problems/number-of-1-bits/" },
        { title: "Counting Bits",                            difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/counting-bits/" },
        { title: "Missing Number",                           difficulty: "Easy",                  url: "https://leetcode.com/problems/missing-number/" },
        { title: "Power of Two",                             difficulty: "Easy",                  url: "https://leetcode.com/problems/power-of-two/" }
      ],

      links: [], videos: [], pdfs: [], notes: []
    },

    // ============================================================
    // WEEK 2 — STL + Sorting + Searching + Recursion
    // ============================================================
    {
      number: 2,
      title: "STL + Sorting + Searching + Recursion",
      topics: ["STL", "Sorting", "Searching", "Recursion", "Backtracking"],
      goal: "Master the STL containers and core algorithms — sorting, binary search, recursion, and backtracking.",

      concepts: [
        {
          name: "STL Overview & Vectors",
          explanation: `The Standard Template Library (STL) is the part of C++ that gives you ready-made containers (vector, set, map, ...), iterators that traverse them, and algorithms (sort, find, accumulate, ...) that work on any container through those iterators. Together they save you from writing the same data structures by hand every time, and they are blisteringly fast because they're heavily templated and inlined by the compiler.

For DSA work you don't need to memorise every container — you need to know which container to reach for, the rough cost of each operation, and the half-dozen algorithms you'll call constantly. Vector comes first because it replaces C-style arrays in almost every situation.

## The three pillars

Containers hold data. They split into sequence containers (vector, deque, list — order matters), associative containers (set, map — sorted, log-time), and unordered containers (unordered_set, unordered_map — hashed, average O(1)).

Iterators are pointer-like objects that walk a container. v.begin() returns an iterator to the first element; v.end() returns one PAST the last. Most STL algorithms take a [first, last) pair.

Algorithms (sort, find, count, reverse, accumulate, lower_bound, ...) live in <algorithm> and <numeric>. They never know about the container type — they only see iterators, which is why std::sort works on a vector, a deque, or a raw array all the same.

## Vector — the dynamic array

A vector<T> is a contiguous block of memory holding T elements, exactly like a C array, except it can grow. When you push past its current capacity, it allocates a bigger block (typically 2× the current), copies everything over, and frees the old. That occasional copy is what makes a single push_back O(n) worst case but O(1) AMORTISED across many pushes.

Random access is O(1) because elements are contiguous: v[i] is just *(v.data() + i).

## Declaring and initialising

vector<int> v;                    empty
vector<int> v(10);                10 zeros
vector<int> v(10, 5);             10 copies of 5
vector<int> v{1, 2, 3};           three elements: 1, 2, 3
vector<int> v = {1, 2, 3};        same
vector<vector<int>> g(3, vector<int>(4, 0));   3×4 grid of zeros

## Size vs capacity

v.size() — how many elements are currently in the vector.
v.capacity() — how many it can hold before the next reallocation.
v.reserve(n) — pre-allocate space for n elements (no copy when you later push up to n). Use this when you know the upper bound ahead of time; it eliminates the resize copies entirely.

## Operations cheat sheet

push_back(x) / pop_back()           O(1) amortised / O(1)
emplace_back(args...)               construct in place — slightly faster than push_back of a temporary
front() / back()                    O(1)
insert(it, x) / erase(it)           O(n) — everything after the position shifts
clear()                             O(n) — destruct every element
size() / empty()                    O(1)
data()                              raw pointer to the storage; works with C APIs

## Iterating

Three ways, all equivalent:

for (int i = 0; i < (int)v.size(); i++) cout << v[i];
for (auto it = v.begin(); it != v.end(); ++it) cout << *it;
for (int x : v) cout << x;        // modern range-for, preferred

Add & for in-place modification: for (auto& x : v) x *= 2;

## Passing to functions

Always pass big vectors by const reference: const vector<int>& v. No copy, can't be mutated. Pass by reference (vector<int>& v) when the function should modify. Pass by value (vector<int> v) only when you genuinely want an independent copy.

## When NOT to use vector

If you need fast insertion/deletion in the MIDDLE → std::list (linked list, but cache-unfriendly).
If you need fast pushes on BOTH ends → std::deque.
If size is known at compile time AND tiny → std::array<T, N>.
If you need an actual mathematical set or map → set, map, unordered_set, unordered_map (next two lessons).`,
          codeBlocks: [
            {
              title: "Declaring and basic access",
              code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6};

    cout << v.size()  << "\\n";   // 8
    cout << v.front() << "\\n";   // 3
    cout << v.back()  << "\\n";   // 6
    cout << v[3]      << "\\n";   // 1  (random access O(1))
}`
            },
            {
              title: "push_back, pop_back, and emplace_back",
              code: `vector<int> v;
v.push_back(10);                      // O(1) amortised
v.push_back(20);
v.emplace_back(30);                   // constructs in place
v.pop_back();                         // removes 30
cout << v.size() << "\\n";             // 2`
            },
            {
              title: "Iterating in three styles",
              code: `vector<int> v = {1, 2, 3, 4, 5};

// 1) index
for (int i = 0; i < (int)v.size(); i++) cout << v[i] << " ";
cout << "\\n";

// 2) iterator
for (auto it = v.begin(); it != v.end(); ++it) cout << *it << " ";
cout << "\\n";

// 3) range-for (modern, preferred)
for (int x : v) cout << x << " ";`
            },
            {
              title: "2-D vector (grid) initialised to zero",
              code: `int rows = 3, cols = 4;
vector<vector<int>> grid(rows, vector<int>(cols, 0));

for (int r = 0; r < rows; r++)
    for (int c = 0; c < cols; c++)
        grid[r][c] = r * cols + c;`
            },
            {
              title: "reserve() to avoid resize-copies",
              code: `vector<int> v;
v.reserve(1'000'000);                 // one allocation up front
for (int i = 0; i < 1'000'000; i++)
    v.push_back(i);                   // no reallocations now`
            },
            {
              title: "Pass by const reference for read-only work",
              code: `int sum(const vector<int>& v) {     // no copy
    int s = 0;
    for (int x : v) s += x;
    return s;
}`
            }
          ],
          complexity: { time: "Access O(1); push_back O(1) amortised; insert/erase in middle O(n)", space: "O(n)" },
          keyPoints: [
            "STL = containers + iterators + algorithms. Algorithms work on any container via iterators.",
            "vector<T> is a contiguous, dynamically-growing array — the everyday replacement for C arrays.",
            "Random access v[i] is O(1); push_back/pop_back at the end are O(1) amortised.",
            "Insert or erase in the MIDDLE of a vector is O(n) because elements shift.",
            "size() is the element count; capacity() is the allocated room. reserve(n) pre-allocates.",
            "Range-for (for (auto x : v)) is the modern, safe way to iterate. Add & to modify in place.",
            "Pass big vectors by const reference (const vector<int>& v) — no copy, no mutation.",
            "vector<vector<int>> mat(R, vector<int>(C, 0)) creates an R×C grid initialised to 0."
          ],
          pitfalls: [
            "vector<int> v(n) creates n zeros; vector<int> v{n} creates a single element n — the braces matter.",
            "v[i] does NOT bounds-check. v.at(i) does and throws std::out_of_range if i is invalid.",
            "Any push_back/insert/erase can invalidate ALL existing iterators and references — don't hold them across mutations.",
            "Forgetting reserve when you know the size — every doubling reallocation costs O(n).",
            "Returning a vector by value used to be slow; with move-semantics (C++11+) it's free, so don't fight it with new/delete.",
            "Mixing signed loop counter (int i) with unsigned v.size() triggers compiler warnings — cast or use size_t."
          ],
          videoId: "NWg38xWYzEg",
          videoSearch: "stl vectors c++"
        },
        {
          name: "Sets (set, unordered_set, multiset)",
          explanation: `A set is a collection that stores unique values and lets you ask "is x in here?" much faster than scanning an array. C++ ships three flavours: the ordered set, the hashed unordered_set, and the multiset that allows duplicates. Choosing the right one is mostly about whether you need elements sorted and whether your keys are hashable.

## std::set — ordered, log-time

set<T> is a balanced binary search tree (Red-Black tree in every major implementation). Every operation is O(log n) — insert, erase, count, find. The killer feature is that elements stay SORTED, so iterating from begin() to end() gives them in order, and you can ask for the smallest/largest in O(log n).

set<int> s = {3, 1, 4, 1, 5};   // duplicates dropped, stored as {1, 3, 4, 5}
s.insert(2);                     // s == {1, 2, 3, 4, 5}
s.erase(3);                      // s == {1, 2, 4, 5}
if (s.count(4)) { ... }          // 0 or 1 (never more for a set)
auto it = s.find(2);             // iterator or s.end()
*s.begin()                       // smallest
*s.rbegin()                      // largest

The order matters: lower_bound(x) returns an iterator to the first element ≥ x, upper_bound(x) the first strictly > x. These two are how you do floor/ceiling queries.

## std::unordered_set — hashed, average O(1)

unordered_set<T> uses a hash table. find/insert/erase are O(1) AVERAGE — but O(n) worst case if many keys collide. Iteration order is undefined (it's the order of the internal buckets, which can change with each insert).

unordered_set<int> u = {5, 2, 8};
u.insert(3);
if (u.count(8)) { ... }
u.erase(2);

Use unordered_set when you just need fast lookup. Use set when you also need order.

## std::multiset — sorted with duplicates

Same API as set, but the same key can be inserted multiple times. count(x) returns how many copies. erase(x) by value removes ALL copies; erase(it) by iterator removes just one.

multiset<int> ms = {5, 1, 5, 3};   // stored as {1, 3, 5, 5}
ms.count(5)                         // 2
ms.erase(ms.find(5));               // removes ONE 5

## Hashing custom types

unordered_set<string> works out of the box because std::hash<string> is defined. For your own struct you need to specialise std::hash or pass a hasher as a template argument. set is easier — it only needs operator< (the default works for primitives).

## Performance picture

| Op       | set         | unordered_set        | multiset    |
|----------|-------------|----------------------|-------------|
| insert   | O(log n)    | O(1) avg, O(n) worst | O(log n)    |
| erase    | O(log n)    | O(1) avg             | O(log n)    |
| find     | O(log n)    | O(1) avg             | O(log n)    |
| min/max  | O(log n)    | NOT supported        | O(log n)    |
| in-order | O(n)        | impossible           | O(n)        |

## When to use which

Use unordered_set when: you need pure set semantics (membership, dedup, fast lookup) and order does not matter. This is the default 90% of the time in DSA.
Use set when: you also need "smallest", "largest", "first element ≥ x", or you need to iterate in sorted order.
Use multiset when: duplicates are meaningful — e.g. a stream of numbers where you need to count how many are equal to x, or you need a sorted bag.`,
          codeBlocks: [
            {
              title: "set — unique, sorted",
              code: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {3, 1, 4, 1, 5, 9, 2, 6};
    s.insert(8);
    s.erase(4);

    for (int x : s) cout << x << " ";   // 1 2 3 5 6 8 9 (sorted)
    cout << "\\n";
    cout << *s.begin()  << "\\n";        // 1 (smallest)
    cout << *s.rbegin() << "\\n";        // 9 (largest)
}`
            },
            {
              title: "unordered_set — hashed, fastest lookup",
              code: `#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
    unordered_set<int> u = {5, 2, 8, 13};
    u.insert(7);
    if (u.count(8)) cout << "8 is in u\\n";   // O(1) average
    u.erase(2);
    cout << u.size() << "\\n";   // 4
}`
            },
            {
              title: "multiset — duplicates allowed",
              code: `#include <iostream>
#include <set>
using namespace std;

int main() {
    multiset<int> ms = {5, 1, 5, 3, 5};
    cout << ms.count(5) << "\\n";   // 3
    ms.erase(ms.find(5));            // remove ONE 5
    cout << ms.count(5) << "\\n";   // 2
    ms.erase(5);                     // erase ALL remaining 5s
    cout << ms.count(5) << "\\n";   // 0
}`
            },
            {
              title: "lower_bound / upper_bound — floor and ceiling",
              code: `set<int> s = {1, 4, 7, 10, 13};
auto it = s.lower_bound(7);          // first >= 7 → 7
auto it2 = s.upper_bound(7);         // first  > 7 → 10
if (it != s.end()) cout << *it << "\\n";   // 7`
            },
            {
              title: "Deduplicate a vector via set",
              code: `vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3};
unordered_set<int> seen(v.begin(), v.end());
vector<int> uniq(seen.begin(), seen.end());   // order not preserved`
            },
            {
              title: "Count distinct elements in a stream",
              code: `unordered_set<int> seen;
int x;
while (cin >> x) seen.insert(x);
cout << "distinct = " << seen.size() << "\\n";`
            }
          ],
          complexity: { time: "set/multiset O(log n); unordered_set O(1) average, O(n) worst", space: "O(n)" },
          keyPoints: [
            "set is a Red-Black tree: unique elements kept SORTED, every op O(log n).",
            "unordered_set is a hash table: O(1) average lookup, no order, O(n) worst case on bad hash.",
            "multiset = set with duplicates allowed. count(x) returns how many; erase(x) removes ALL of them.",
            "set supports lower_bound/upper_bound for floor/ceiling queries; unordered_set does not.",
            "*s.begin() is the smallest; *s.rbegin() is the largest — both O(log n) on a set.",
            "Reach for unordered_set by default; reach for set when you need order or min/max.",
            "Constructing a set from a vector's iterators is the standard trick to dedup."
          ],
          pitfalls: [
            "Iteration order of unordered_set is undefined and can change after every insert.",
            "unordered_set<T> for custom T needs you to provide std::hash<T> — set just needs operator<.",
            "ms.erase(x) removes EVERY occurrence; use ms.erase(ms.find(x)) to remove only one.",
            "Worst-case unordered_set degenerates to O(n) per operation when many keys hash to the same bucket.",
            "Comparing two sets with == is O(n) — they're equal iff they contain the same elements.",
            "Hash collisions can be a security issue (DoS) — competitive coders sometimes use custom hashes to avoid adversarial inputs."
          ],
          videoId: "okhdtEk1iKk",
          videoSearch: "set unordered_set c++"
        },
        {
          name: "Maps (map, unordered_map)",
          explanation: `A map is a set of key→value pairs. You look up by key and get the value. C++ ships two: std::map (sorted by key, O(log n) per op) and std::unordered_map (hashed, O(1) average per op). Maps are the single most useful data structure in interview-style DSA — frequency counts, lookup tables, memoization, graph adjacency lists, last-seen indices, all of it.

## std::map — sorted, log-time

A Red-Black tree of pairs, sorted by key. Every operation is O(log n). Iteration walks keys in order.

map<string, int> m;
m["alice"] = 90;
m["bob"]   = 75;
m["alice"]++;                // 91
if (m.count("bob")) ...;     // 0 or 1
m.erase("alice");
auto it = m.find("bob");     // iterator to {key, value}, or m.end()

## std::unordered_map — hashed, average O(1)

Same interface, hash table instead of tree. Constant-time on average; iteration order is undefined.

unordered_map<string, int> u;
u["alice"] = 90;
u["bob"]   = 75;
if (u.count("alice")) cout << u["alice"];

## The [] operator and its trap

m[k] returns a reference to the value at k. If k doesn't exist, it INSERTS a default-constructed value (0 for int, "" for string) and returns that. This is handy for counting:

map<string, int> cnt;
for (string w : words) cnt[w]++;     // missing keys start at 0

But it bites when you just want to CHECK presence without inserting. Use count(k) or find(k) for that — they don't mutate.

## Iterating

for (auto& [k, v] : m) cout << k << " -> " << v << "\\n";   // C++17 structured binding
for (auto& p  : m) cout << p.first << " " << p.second;       // pre-C++17

## insert vs []

m[k] = v always works — overwrites if k exists, inserts otherwise.
m.insert({k, v}) inserts only if k is NEW; if k exists, the existing value stays.
m.emplace(k, v) is like insert but constructs in place.

## Common DSA patterns

Frequency table:    map<int,int> freq; for (int x : a) freq[x]++;
Last-seen index:    unordered_map<int,int> last; last[x] = i;
Adjacency list:     unordered_map<int, vector<int>> adj; adj[u].push_back(v);
Memoization cache:  unordered_map<int,int> memo; if (memo.count(n)) return memo[n];
Group by key:       map<string, vector<string>> groups; groups[key(s)].push_back(s);

## Performance picture

| Op       | map         | unordered_map           |
|----------|-------------|-------------------------|
| insert   | O(log n)    | O(1) avg, O(n) worst    |
| erase    | O(log n)    | O(1) avg                |
| find     | O(log n)    | O(1) avg                |
| [] access| O(log n)    | O(1) avg                |
| min/max  | O(log n)    | NOT supported           |
| in-order | O(n)        | impossible              |

## When to use which

unordered_map for raw speed and when order doesn't matter — this is the default.
map when you need keys SORTED, range queries (lower_bound), or smallest/largest key.

## Custom keys

unordered_map<MyStruct, V> needs std::hash<MyStruct>. map<MyStruct, V> only needs operator< (or a custom comparator as the third template arg).`,
          codeBlocks: [
            {
              title: "Frequency counting (the everyday use)",
              code: `#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

int main() {
    vector<string> words = {"apple", "banana", "apple", "cherry", "banana", "apple"};
    unordered_map<string, int> freq;
    for (const string& w : words) freq[w]++;

    for (auto& [w, c] : freq) cout << w << " -> " << c << "\\n";
}`
            },
            {
              title: "Two Sum — the canonical map problem",
              code: `// Return indices of the two numbers that add up to target. O(n) with a hash map.
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;       // value -> index
    for (int i = 0; i < (int)nums.size(); i++) {
        int need = target - nums[i];
        if (seen.count(need)) return { seen[need], i };
        seen[nums[i]] = i;
    }
    return {};
}`
            },
            {
              title: "Iterating with structured bindings (C++17)",
              code: `map<string, int> scores = {{"alice", 90}, {"bob", 75}, {"carol", 88}};
for (auto& [name, score] : scores)              // sorted by key
    cout << name << " -> " << score << "\\n";`
            },
            {
              title: "Range query with map's lower_bound",
              code: `map<int, string> events = {{10,"a"}, {25,"b"}, {40,"c"}, {55,"d"}};
auto it = events.lower_bound(30);     // first key >= 30 → 40
if (it != events.end())
    cout << it->first << " -> " << it->second << "\\n";`
            },
            {
              title: "[] vs count — accidentally inserting keys",
              code: `unordered_map<string,int> m;
if (m["maybe"] == 0) { ... }   // BUG: this just inserted "maybe" with value 0!

// Correct: don't mutate while checking
if (m.count("maybe")) { ... }
if (m.find("maybe") != m.end()) { ... }`
            },
            {
              title: "Memoized Fibonacci",
              code: `unordered_map<int, long long> memo;
long long fib(int n) {
    if (n < 2) return n;
    if (memo.count(n)) return memo[n];
    return memo[n] = fib(n - 1) + fib(n - 2);
}`
            }
          ],
          complexity: { time: "map O(log n); unordered_map O(1) average, O(n) worst", space: "O(n)" },
          keyPoints: [
            "map<K,V> = sorted Red-Black tree. unordered_map<K,V> = hash table.",
            "Operations: insert / erase / find / []-access — log(n) for map, O(1) average for unordered_map.",
            "m[k] auto-inserts a default value if k is missing — handy for counting, dangerous for checks.",
            "Use m.count(k) or m.find(k) when you only want to TEST presence (won't insert).",
            "Structured bindings (auto& [k, v] : m) is the modern way to iterate (C++17+).",
            "map keys are sorted — use lower_bound / upper_bound for range queries.",
            "Frequency tables, last-seen indices, memoization caches, adjacency lists all use unordered_map by default."
          ],
          pitfalls: [
            "if (m[k] == 0) inserts k with value 0 — use count or find for read-only checks.",
            "unordered_map's iteration order is undefined and changes after insertions.",
            "unordered_map<CustomKey, V> needs you to provide std::hash<CustomKey>; map<CustomKey, V> only needs operator<.",
            "Worst-case unordered_map degenerates to O(n) per op on bad hashes — consider a custom hash for adversarial inputs.",
            "Modifying a map while iterating with iterators invalidates iterators (for erase, use the it = m.erase(it) idiom).",
            "Storing references to map values across insertions is unsafe — a rehash (unordered_map) or tree rotation (map) can move them."
          ],
          videoId: "okhdtEk1iKk",
          videoSearch: "map unordered_map c++"
        },
        {
          name: "Sorting Basics & std::sort",
          explanation: `Sorting is the gateway algorithm — half of all DSA tricks become trivial once the input is sorted. You should know three things: the three simple O(n²) sorts (for intuition), the industrial-grade O(n log n) sort that you'll actually use (std::sort), and how to sort by a custom rule with a comparator.

## The three O(n²) basics

**Bubble sort.** Walk the array; swap adjacent pairs that are out of order; repeat until a full pass does no swaps. Easy to write, painfully slow. O(n²) time, O(1) space, STABLE.

**Selection sort.** Walk i from 0 to n-1. For each i, scan i..n-1 to find the minimum and swap it into position i. Always makes exactly n-1 swaps. O(n²) time, O(1) space, NOT stable.

**Insertion sort.** Walk i from 1 to n-1. Take a[i] and slide it left until everything before it is smaller. O(n²) worst case but O(n) on nearly-sorted input — that's why hybrid sorts use it for small subarrays. STABLE, in-place.

None of these are competitive on real inputs. They're worth knowing because they show up in the analysis section of other algorithms and they're great for tiny n.

## std::sort — what you'll actually use

In <algorithm>:

sort(v.begin(), v.end());                    // ascending
sort(v.begin(), v.end(), greater<int>());    // descending
sort(v.begin(), v.end(), cmp);               // custom comparator

std::sort is O(n log n) in all real implementations — typically introsort, which starts as quicksort and falls back to heapsort when recursion gets too deep, plus insertion sort for small subranges. It is NOT stable. If you need stability (equal elements keep their relative order), use stable_sort, which is O(n log n) worst case with O(n) extra memory.

## Comparators — the rule that defines the order

A comparator returns true if its first argument should come BEFORE its second. It must be a strict weak ordering: irreflexive (cmp(x,x) is false), antisymmetric, and transitive. Violating that gives undefined behaviour — the runtime can crash or hang.

bool cmp(int a, int b) { return a > b; }     // descending
sort(v.begin(), v.end(), cmp);

Lambdas are the standard modern form:

sort(v.begin(), v.end(), [](int a, int b) { return a > b; });

For pairs/structs, sort by a field:

sort(people.begin(), people.end(),
     [](const Person& a, const Person& b) { return a.age < b.age; });

## Sorting in reverse

Three equivalent ways: pass greater<int>() as the comparator, pass a custom lambda return a > b, or sort ascending then reverse(v.begin(), v.end()). All O(n log n).

## Sorting indices instead of values

When you need to remember WHERE each element came from, sort an index array by the values:

vector<int> idx(v.size());
iota(idx.begin(), idx.end(), 0);             // 0, 1, 2, ...
sort(idx.begin(), idx.end(), [&](int a, int b) { return v[a] < v[b]; });

## Sorting a 2-D thing (vector of vectors / pairs)

A pair<int,int> is sorted lexicographically by default: by .first first, then .second. For different rules, supply a comparator.

vector<pair<int,int>> intervals = {{3,6}, {1,4}, {2,5}};
sort(intervals.begin(), intervals.end());    // {{1,4},{2,5},{3,6}}

## When NOT to use std::sort

For sorting strings by a custom locale rule, std::sort with a lambda is fine but slow on huge inputs — consider radix sort. For sorting integers in a known small range, counting sort is O(n + k). For partial sorts (find the top-K elements without sorting the whole array), use std::partial_sort or std::nth_element — both O(n log K) or O(n) respectively, much faster than full sort + slice.`,
          codeBlocks: [
            {
              title: "std::sort — the everyday call",
              code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3};
    sort(v.begin(), v.end());
    for (int x : v) cout << x << " ";   // 1 1 2 3 3 4 5 5 6 9
}`
            },
            {
              title: "Descending — three ways",
              code: `sort(v.begin(), v.end(), greater<int>());
sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
sort(v.begin(), v.end());
reverse(v.begin(), v.end());`
            },
            {
              title: "Custom comparator on a struct",
              code: `struct Person { string name; int age; };
vector<Person> p = { {"alice", 30}, {"bob", 25}, {"carol", 28} };

sort(p.begin(), p.end(),
     [](const Person& a, const Person& b) { return a.age < b.age; });

for (auto& x : p) cout << x.name << " ";   // bob carol alice`
            },
            {
              title: "Insertion sort (for intuition; not for speed)",
              code: `void insertionSort(vector<int>& a) {
    for (int i = 1; i < (int)a.size(); i++) {
        int key = a[i];
        int j = i - 1;
        while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }
        a[j + 1] = key;
    }
}`
            },
            {
              title: "Bubble sort with early-exit on a sorted array",
              code: `void bubbleSort(vector<int>& a) {
    int n = a.size();
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) { swap(a[j], a[j + 1]); swapped = true; }
        }
        if (!swapped) break;          // already sorted
    }
}`
            },
            {
              title: "Sort indices by value (argsort)",
              code: `vector<int> v = {30, 10, 20};
vector<int> idx(v.size());
iota(idx.begin(), idx.end(), 0);
sort(idx.begin(), idx.end(),
     [&](int a, int b) { return v[a] < v[b]; });
// idx == {1, 2, 0}  (values would be {10, 20, 30})`
            }
          ],
          complexity: { time: "Bubble/Selection/Insertion O(n²); std::sort O(n log n); stable_sort O(n log n)", space: "O(1) in-place; stable_sort needs O(n)", best: "Insertion O(n) on sorted; bubble O(n) with early-exit", average: "std::sort O(n log n)", worst: "std::sort O(n log n) (introsort)" },
          keyPoints: [
            "Use std::sort — it's O(n log n), in-place, and uses the best of quicksort+heapsort+insertion sort.",
            "std::sort is NOT stable. Use stable_sort when equal elements must keep their relative order.",
            "A comparator returns true when its first arg should come BEFORE its second.",
            "Pairs sort lexicographically by default: first, then second.",
            "Sort indices (argsort) when you need to remember where elements came from.",
            "For top-K only, prefer nth_element (O(n)) or partial_sort (O(n log K)) over a full sort.",
            "Insertion sort is fast on tiny or nearly-sorted arrays — that's why hybrid sorts use it for small subranges."
          ],
          pitfalls: [
            "Comparator must be a strict weak ordering. cmp(x, x) == true (using <= instead of <) is undefined behaviour.",
            "Sorting a vector and forgetting to .begin()/.end() — passing the vector directly doesn't compile.",
            "std::sort being unstable surprises people who relied on insertion order — use stable_sort if you need it.",
            "Sorting a vector of pointers/references but expecting the OBJECTS to move — the pointers move, not the data.",
            "Reverse iterators with sort + greater work, but reading the code is harder than a lambda.",
            "Custom hash/equality types must agree (unordered_*) — but for sort, only the comparator matters; ties may resolve arbitrarily."
          ],
          videoId: "1jCFUv-Xlqo",
          videoSearch: "sorting algorithms std sort"
        },
        {
          name: "Merge Sort & Quick Sort",
          explanation: `Merge sort and quick sort are the two divide-and-conquer sorts every CS student must know cold. Both achieve O(n log n) on average, but they make opposite trade-offs. Merge sort has a guaranteed O(n log n) worst case and is stable, paid for with O(n) extra memory. Quick sort is in-place and usually faster in practice, but its naive form can degrade to O(n²) on already-sorted inputs.

## Divide and conquer — the shared recipe

Both algorithms follow the same outline: split the problem into smaller subproblems, solve each recursively, combine the results. The difference is where the work happens.

In merge sort the SPLIT is trivial (cut the array in half) and the COMBINE is the real work (merge two sorted halves).
In quick sort the SPLIT is the real work (partition around a pivot) and the COMBINE is trivial (concatenate).

## Merge sort

mergeSort(a, l, r):
   if l >= r: return
   mid = (l + r) / 2
   mergeSort(a, l, mid)
   mergeSort(a, mid+1, r)
   merge(a, l, mid, r)        // combine two sorted halves

The merge step walks both halves with two pointers, picking the smaller front element each time. It runs in O(n) and needs O(n) extra space (a temporary buffer). The recursion tree has height log n and does n work per level → O(n log n) total.

Merge sort is STABLE (equal elements keep their order), which matters when sorting records by one field while preserving the order of equal-keyed records.

## Quick sort

quickSort(a, l, r):
   if l >= r: return
   p = partition(a, l, r)       // pivot lands at index p
   quickSort(a, l, p - 1)
   quickSort(a, p + 1, r)

The partition step: pick a pivot (often a[r] or a random element), rearrange so that everything ≤ pivot is on its left and everything > pivot is on its right, return the pivot's final index. Done in O(n) with one or two pointer passes (Lomuto and Hoare are the two textbook schemes).

Expected runtime is O(n log n) — the recursion tree's average height is log n when the pivot splits the array roughly in half. The worst case is O(n²): if the pivot is always the smallest or largest element (which happens on sorted input with a naive "pick last" pivot), recursion goes n deep and each level does n work.

The fix is randomisation: pick a random pivot. With a random pivot, the chance of degenerate behaviour is negligible. Production sorts (like std::sort = introsort) also fall back to heapsort if the recursion depth gets too large.

## Side-by-side trade-offs

|                       | Merge sort       | Quick sort                |
|-----------------------|------------------|---------------------------|
| Average time          | O(n log n)       | O(n log n)                |
| Worst-case time       | O(n log n)       | O(n²)                     |
| Space (auxiliary)     | O(n)             | O(log n) recursion        |
| In-place?             | No               | Yes                       |
| Stable?               | Yes              | No                        |
| Cache-friendly?       | Less so          | Yes                       |
| Real-world speed      | Slower in practice| Faster in practice        |

## Why std::sort uses BOTH

Modern C++'s std::sort is introsort: it starts as randomised quick sort, switches to heapsort if recursion gets too deep, and uses insertion sort on tiny subarrays. That gives you quick sort's average speed with merge/heap sort's worst-case guarantee.

stable_sort uses merge sort because it's stable by nature.

## When to actually pick one by hand

In real code you call std::sort. You'd write merge sort by hand if you need a stable in-place-feeling sort and don't trust std::stable_sort's memory cost, or if you're sorting a linked list (where merge sort is perfect because it doesn't need random access). You'd write quick sort to teach yourself partitioning, which underpins quickselect, the Dutch National Flag, and many other algorithms.`,
          codeBlocks: [
            {
              title: "Merge sort — full implementation",
              code: `void merge(vector<int>& a, int l, int mid, int r) {
    vector<int> tmp(r - l + 1);
    int i = l, j = mid + 1, k = 0;
    while (i <= mid && j <= r)
        tmp[k++] = (a[i] <= a[j]) ? a[i++] : a[j++];
    while (i <= mid) tmp[k++] = a[i++];
    while (j <= r)   tmp[k++] = a[j++];
    for (int p = 0; p < (int)tmp.size(); p++) a[l + p] = tmp[p];
}

void mergeSort(vector<int>& a, int l, int r) {
    if (l >= r) return;
    int mid = l + (r - l) / 2;
    mergeSort(a, l, mid);
    mergeSort(a, mid + 1, r);
    merge(a, l, mid, r);
}`
            },
            {
              title: "Quick sort with Lomuto partition",
              code: `int partition(vector<int>& a, int l, int r) {
    int pivot = a[r];                 // pivot is the last element
    int i = l - 1;
    for (int j = l; j < r; j++)
        if (a[j] <= pivot) swap(a[++i], a[j]);
    swap(a[i + 1], a[r]);
    return i + 1;
}

void quickSort(vector<int>& a, int l, int r) {
    if (l >= r) return;
    int p = partition(a, l, r);
    quickSort(a, l, p - 1);
    quickSort(a, p + 1, r);
}`
            },
            {
              title: "Quick sort with randomised pivot (avoids O(n²))",
              code: `#include <random>
mt19937 rng(42);

int randPartition(vector<int>& a, int l, int r) {
    int idx = l + rng() % (r - l + 1);
    swap(a[idx], a[r]);
    return partition(a, l, r);        // reuse Lomuto from above
}

void quickSortRand(vector<int>& a, int l, int r) {
    if (l >= r) return;
    int p = randPartition(a, l, r);
    quickSortRand(a, l, p - 1);
    quickSortRand(a, p + 1, r);
}`
            },
            {
              title: "Counting inversions with merge sort (bonus pattern)",
              code: `// Number of pairs (i, j) with i < j and a[i] > a[j] — classic merge sort trick.
long long merge_cnt(vector<int>& a, int l, int mid, int r) {
    vector<int> tmp;
    int i = l, j = mid + 1; long long inv = 0;
    while (i <= mid && j <= r) {
        if (a[i] <= a[j]) tmp.push_back(a[i++]);
        else { tmp.push_back(a[j++]); inv += (mid - i + 1); }
    }
    while (i <= mid) tmp.push_back(a[i++]);
    while (j <= r)   tmp.push_back(a[j++]);
    for (int p = 0; p < (int)tmp.size(); p++) a[l + p] = tmp[p];
    return inv;
}`
            },
            {
              title: "Quickselect — find the k-th smallest in O(n) average",
              code: `int quickselect(vector<int>& a, int l, int r, int k) {
    if (l == r) return a[l];
    int p = partition(a, l, r);          // pivot ends at p
    if (k == p) return a[p];
    if (k < p)  return quickselect(a, l, p - 1, k);
    return quickselect(a, p + 1, r, k);
}`
            }
          ],
          complexity: { time: "Merge sort O(n log n) always; quick sort O(n log n) average, O(n²) worst", space: "Merge O(n) extra; quick O(log n) recursion (in-place)", best: "Quick O(n log n)", average: "Both O(n log n)", worst: "Merge O(n log n); quick O(n²) without randomisation" },
          keyPoints: [
            "Divide and conquer: split the array, recurse on each half, combine.",
            "Merge sort: trivial split, real work in the merge — O(n log n) always, STABLE, O(n) extra memory.",
            "Quick sort: real work in the partition — O(n log n) average, O(n²) worst, in-place, NOT stable.",
            "Randomise the pivot in quick sort to make the O(n²) worst case statistically impossible.",
            "std::sort (introsort) = quick sort + heapsort fallback + insertion sort on small ranges.",
            "stable_sort uses merge sort because merge sort is stable by nature.",
            "The partition step is reusable — quickselect uses it to find the k-th smallest in O(n) average.",
            "Merge sort is the natural choice for linked lists because it doesn't need random access."
          ],
          pitfalls: [
            "Quick sort with 'pivot = last element' on a sorted array gives O(n²) — always randomise or use median-of-three.",
            "Off-by-one in merge: forgetting to copy the leftover tail from one of the halves.",
            "Recursion depth: deep recursion (n = 10⁶) can blow the stack — iterative versions or randomisation help.",
            "Modifying the array between recursive calls breaks the divide-and-conquer invariant.",
            "Forgetting that merge sort needs O(n) extra space — on memory-constrained inputs, this matters.",
            "Confusing average and worst case in interviews — quick sort is O(n log n) AVERAGE but O(n²) worst."
          ],
          videoId: "cQDtOBTy7_Y",
          videoSearch: "merge sort quick sort"
        },
        {
          name: "Binary Search & Binary Search on Answer",
          explanation: `Binary search is the single highest-leverage algorithm in DSA. The classic version finds a value in a sorted array in O(log n). The meta-trick — "binary search on the answer" — turns a yes/no predicate into an optimisation answer in O(log range) and shows up in dozens of medium-hard problems.

## Classic binary search

The array is sorted. You're looking for target. Maintain two pointers l and r bracketing the search range. Look at the middle. If a[mid] == target, done. If a[mid] < target, the answer is to the right, so l = mid + 1. Otherwise r = mid - 1.

The textbook trap is integer overflow: writing mid = (l + r) / 2 can overflow when both are near INT_MAX. Always write mid = l + (r - l) / 2.

## Iterative template (the safe one)

while (l <= r) {
    int mid = l + (r - l) / 2;
    if (a[mid] == target) return mid;
    if (a[mid] <  target) l = mid + 1;
    else                  r = mid - 1;
}
return -1;

## Variants — lower_bound, upper_bound

Sometimes you don't want the exact match — you want the first element ≥ target (floor of insertion point), or the first element > target (one past). STL gives you both:

lower_bound(v.begin(), v.end(), x)   // first iterator with *it >= x
upper_bound(v.begin(), v.end(), x)   // first iterator with *it >  x

(upper_bound − lower_bound) is how many times x appears.

## The half-open template (the modern one)

When the answer is "an index", the cleanest form keeps a half-open window [l, r) and converges l == r:

int l = 0, r = (int)v.size();
while (l < r) {
    int mid = l + (r - l) / 2;
    if (v[mid] < target) l = mid + 1;
    else                 r = mid;
}
// l is now the first index with v[l] >= target (or v.size() if none)

This template is the right one to memorise. It handles "first true index" problems uniformly.

## Binary search on the ANSWER

This is the unlock for many "minimum/maximum X such that condition Y holds" problems. The recipe:

1. Decide what the answer is — usually a numeric value (capacity, time, length, position).
2. Define a predicate canDo(x) that returns true iff x is feasible.
3. Observe that canDo is monotonic — there's a threshold value where it flips from false to true (or true to false).
4. Binary-search the answer range to find the threshold.

Classic examples:

- **Koko Eating Bananas** — minimum eating speed K. canDo(K) = "can finish in H hours at speed K". Monotonic: bigger K only helps. Binary-search K from 1 to max(pile).

- **Capacity to Ship Packages in D Days** — minimum capacity C. canDo(C) = "can ship in ≤ D days with capacity C". Monotonic.

- **Aggressive Cows** — maximum minimum-distance D between cows. canDo(D) = "can place all cows so adjacent pairs are ≥ D apart". Monotonic decreasing — bigger D harder.

- **Median of Two Sorted Arrays** — binary-search the partition position.

## Choosing the search range

The trick is bracketing. For Koko: lo = 1, hi = max(pile). For capacity: lo = max(pkg), hi = sum(pkg). Get this wrong and the search either misses the answer (range too narrow) or runs forever (the predicate isn't monotonic over the range you chose).

## Real vs. integer binary search

When the answer is a real number (e.g. minimum distance), you can't write "if equal, return". Instead loop ~60 times (each halves precision; 60 gives ~10⁻¹⁸) or until hi - lo < EPS.`,
          codeBlocks: [
            {
              title: "Classic binary search — find the index",
              code: `int binarySearch(const vector<int>& a, int target) {
    int l = 0, r = (int)a.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;       // avoids overflow
        if (a[mid] == target) return mid;
        if (a[mid] <  target) l = mid + 1;
        else                  r = mid - 1;
    }
    return -1;
}`
            },
            {
              title: "lower_bound / upper_bound from STL",
              code: `#include <algorithm>
vector<int> v = {1, 3, 3, 3, 5, 7};
auto lb = lower_bound(v.begin(), v.end(), 3);   // points to first 3 (index 1)
auto ub = upper_bound(v.begin(), v.end(), 3);   // points to 5 (index 4)
cout << (ub - lb) << "\\n";                      // 3  (count of 3s)`
            },
            {
              title: "Half-open template — first index with v[i] >= target",
              code: `int lowerBoundManual(const vector<int>& v, int target) {
    int l = 0, r = (int)v.size();
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (v[mid] < target) l = mid + 1;
        else                 r = mid;
    }
    return l;                            // v.size() if no element is >= target
}`
            },
            {
              title: "Binary search on answer — Koko Eating Bananas",
              code: `// Minimum speed K so Koko finishes piles[] within H hours.
long long hoursAt(const vector<int>& p, int k) {
    long long h = 0;
    for (int x : p) h += (x + k - 1) / k;     // ceil(x / k)
    return h;
}

int minEatingSpeed(vector<int>& piles, int H) {
    int lo = 1, hi = *max_element(piles.begin(), piles.end());
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (hoursAt(piles, mid) <= H) hi = mid;
        else                          lo = mid + 1;
    }
    return lo;
}`
            },
            {
              title: "Search a rotated sorted array",
              code: `int searchRotated(vector<int>& a, int target) {
    int l = 0, r = a.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (a[mid] == target) return mid;
        if (a[l] <= a[mid]) {                 // left half is sorted
            if (a[l] <= target && target < a[mid]) r = mid - 1;
            else                                   l = mid + 1;
        } else {                              // right half is sorted
            if (a[mid] < target && target <= a[r]) l = mid + 1;
            else                                   r = mid - 1;
        }
    }
    return -1;
}`
            },
            {
              title: "Real-valued binary search (60 iterations gives full double precision)",
              code: `double findSqrt(double x) {
    double lo = 0, hi = max(1.0, x);
    for (int it = 0; it < 60; it++) {
        double mid = (lo + hi) / 2;
        if (mid * mid < x) lo = mid;
        else               hi = mid;
    }
    return lo;
}`
            }
          ],
          complexity: { time: "O(log n) per search; binary search on answer O(log(range) · cost(predicate))", space: "O(1) iterative; O(log n) recursive" },
          keyPoints: [
            "Always write mid = l + (r - l) / 2 to avoid integer overflow.",
            "Two templates: closed [l, r] with l <= r, or half-open [l, r) with l < r — pick one and stick with it.",
            "lower_bound returns first iterator >= x; upper_bound returns first iterator > x. Their difference is the count.",
            "Binary search on the answer: binary-search the numeric answer; check feasibility with a predicate.",
            "The predicate must be MONOTONIC (one flip point in the range) for binary search on answer to work.",
            "Bracketing matters: lo and hi must contain the true answer for the search to converge.",
            "Real-valued binary search: loop 60 times (precision halves each step → ~10⁻¹⁸).",
            "Rotated sorted array: one half is always sorted — figure out which, then narrow."
          ],
          pitfalls: [
            "mid = (l + r) / 2 OVERFLOWS when l + r exceeds INT_MAX.",
            "Off-by-one in the loop condition: [l, r] uses l <= r; [l, r) uses l < r. Mixing them loops forever.",
            "Forgetting that lower_bound/upper_bound need a SORTED range. They return undefined results otherwise.",
            "Choosing a non-monotonic predicate — binary search on answer silently returns garbage.",
            "Initial range too small — if the answer is outside [lo, hi], the search returns the boundary.",
            "Updating l = mid (not mid + 1) when the half-open template requires it — infinite loop.",
            "On a rotated array, the trick is which half is sorted (check a[l] <= a[mid])."
          ],
          videoId: "TbbSJrY5GqQ",
          videoSearch: "binary search"
        },
        {
          name: "Recursion Fundamentals",
          explanation: `Recursion is a function calling itself with a smaller version of the same problem until the problem becomes trivial. It's the foundation for divide-and-conquer, backtracking, tree/graph traversal, and dynamic programming — once you internalise recursion, half of DSA becomes natural.

The simplest mental model: a recursive function is a contract. Assume the function works for every smaller input. Use that assumption to solve the current input. Verify the base case.

## The two ingredients

**Base case** — when the problem is so small you can answer it directly without recursing. Every recursive function needs at least one. No base case = infinite recursion = stack overflow.

**Recursive case** — assume the function works for a smaller subproblem, call it, combine its result with the current step.

Factorial, the cliché example:

int fact(int n) {
    if (n <= 1) return 1;             // base case
    return n * fact(n - 1);           // recursive case
}

The trust is the magic. Don't trace fact(5) by hand all the way down. Trust that fact(4) returns 24, multiply by 5, return 120. That mental shift is what makes recursion easy.

## The call stack and recursion depth

Every recursive call creates a new stack frame holding the local variables and the return address. When the call returns, its frame is popped. A recursion of depth d uses O(d) stack space, even if the function allocates no other memory.

Default thread stack on most systems is 1–8 MB → roughly 10⁵–10⁶ recursive calls before overflow. Linked-list reversal recursively on a 10⁶-node list will crash.

## Recursion tree — the visualisation

For each recursive call, draw a node. Children = the recursive calls it makes. Leaves = base cases.

fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)  ...
│   │   └── fib(1)
│   └── fib(2)
└── fib(3)
    ├── fib(2)
    └── fib(1)

The tree's HEIGHT is the recursion depth (space). The total number of NODES is the time complexity. For naive fib, height = n and nodes = O(2ⁿ).

## Recurrence relations

T(n) describes how time grows. Write it from the structure of the recursion:

Factorial:          T(n) = T(n-1) + O(1) → O(n)
Binary search:      T(n) = T(n/2) + O(1) → O(log n)
Merge sort:         T(n) = 2 T(n/2) + O(n) → O(n log n)
Naive Fibonacci:    T(n) = T(n-1) + T(n-2) + O(1) → O(φⁿ) ≈ O(1.618ⁿ)
Tower of Hanoi:     T(n) = 2 T(n-1) + O(1) → O(2ⁿ)

The Master Theorem solves T(n) = a T(n/b) + O(n^c) in closed form.

## Tail recursion

A call is tail-recursive if it's the last action in the function (no work after the recursive call). Some languages (and some compilers, with optimisation enabled) reuse the same stack frame for tail calls, eliminating the depth problem. C++ does this only when the optimiser feels like it — don't rely on it. Rewrite a deep tail-recursive function as a loop if depth is a concern.

## Common patterns

- **Linear recursion** — one recursive call per invocation (factorial, list traversal). O(n) work, O(n) stack.
- **Binary recursion** — two recursive calls (Fibonacci, tree traversal, merge sort).
- **Multiple recursion** — k recursive calls (k-way trees, k-ary search).
- **Mutual recursion** — two functions call each other (rare, but elegant for grammars).

## When to STOP using recursion

Recursion is beautiful and slow. Each call has overhead: stack frame setup, register saves, jump. For tight loops or hot paths, an iterative version is faster. Also, recursion that re-computes overlapping subproblems (naive fib) becomes exponential — memoize it or convert to DP.`,
          codeBlocks: [
            {
              title: "Factorial — the textbook recursion",
              code: `long long fact(int n) {
    if (n <= 1) return 1;             // base case
    return n * fact(n - 1);           // recursive case
}`
            },
            {
              title: "Power — exponentiation by squaring (O(log n))",
              code: `long long power(long long base, long long exp) {
    if (exp == 0) return 1;
    long long half = power(base, exp / 2);
    if (exp % 2 == 0) return half * half;
    return half * half * base;
}`
            },
            {
              title: "Sum of digits",
              code: `int sumDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}`
            },
            {
              title: "Print 1 to N and N to 1 — two recursion shapes",
              code: `void printUp(int i, int n) {
    if (i > n) return;
    cout << i << " ";
    printUp(i + 1, n);
}

void printDown(int i, int n) {
    if (i > n) return;
    printDown(i + 1, n);
    cout << i << " ";                 // print AFTER recursing — reverse order
}`
            },
            {
              title: "Naive Fibonacci (don't actually use this for n > 30)",
              code: `// T(n) = T(n-1) + T(n-2) + O(1) → O(φⁿ) — exponential.
long long fib(int n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}`
            },
            {
              title: "Reverse a string with recursion",
              code: `void reverseStr(string& s, int l, int r) {
    if (l >= r) return;               // base case
    swap(s[l], s[r]);
    reverseStr(s, l + 1, r - 1);      // recurse on smaller range
}`
            }
          ],
          complexity: { time: "Depends on the recurrence", space: "O(depth) call-stack" },
          keyPoints: [
            "Two ingredients: a base case and a recursive case that calls a smaller version.",
            "The 'trust' principle: assume the function works for smaller inputs, then build on that.",
            "Every recursive call uses O(1) stack — total stack used = recursion depth.",
            "Naive recursion that re-computes overlapping subproblems (Fibonacci) is exponential — memoize.",
            "Recurrence relations capture time complexity: T(n) = a T(n/b) + work.",
            "Master Theorem solves T(n) = a T(n/b) + O(n^c) — memorise the three cases.",
            "C++ doesn't reliably do tail-call optimisation — deep tail recursion can still overflow.",
            "When recursion depth exceeds 10⁵–10⁶, switch to iteration or convert to BFS/DFS-iterative."
          ],
          pitfalls: [
            "Missing or unreachable base case — infinite recursion crashes with stack overflow.",
            "Recursive call with the SAME argument instead of a smaller one — also infinite.",
            "Forgetting to RETURN the recursive call's result — function returns garbage.",
            "Computing the same subproblem repeatedly — memoize for an instant speedup.",
            "Mutating shared state across recursion levels without unwinding it on the way out — bugs in backtracking.",
            "Assuming the compiler will tail-call-optimise — write a loop if depth could blow the stack."
          ],
          videoId: "9OsMG4fI4OY",
          videoSearch: "recursion basics"
        },
        {
          name: "Backtracking (Subsets, Permutations, N-Queens)",
          explanation: `Backtracking is "intelligent brute force". You explore the tree of all possible decisions, but the moment a branch can't possibly lead to a valid solution you prune it and back up. It's the right tool whenever a problem asks for "all" / "any" / "count of" arrangements satisfying constraints, and when the constraints can be checked incrementally.

## The template

void backtrack(current_state, decision_index) {
    if (is_complete(current_state)) {
        record(current_state);
        return;
    }
    for (choice of available_choices(decision_index)) {
        if (!is_valid(current_state + choice)) continue;   // prune
        apply(choice);                                      // try
        backtrack(current_state, decision_index + 1);
        undo(choice);                                       // un-try
    }
}

Three moving parts: the **state** (the partial solution you're building), the **choices** at each step, and the **prune** (cut branches that can't succeed).

The "undo" is what makes it BACKTRACK rather than just brute force — you share one mutable state across the whole recursion to save memory, and you reverse each step on the way back up.

## Subsets — the simplest

For each element, decide "include or skip". 2ⁿ subsets total.

void subsets(int i, vector<int>& a, vector<int>& cur, vector<vector<int>>& out) {
    if (i == (int)a.size()) { out.push_back(cur); return; }
    cur.push_back(a[i]);             // include
    subsets(i + 1, a, cur, out);
    cur.pop_back();                  // un-include
    subsets(i + 1, a, cur, out);     // skip
}

## Permutations

For each position, try every unused element. n! permutations total.

void perms(vector<int>& a, int i, vector<vector<int>>& out) {
    if (i == (int)a.size()) { out.push_back(a); return; }
    for (int j = i; j < (int)a.size(); j++) {
        swap(a[i], a[j]);            // pick a[j] for position i
        perms(a, i + 1, out);
        swap(a[i], a[j]);            // undo
    }
}

## N-Queens — backtracking with pruning

Place n queens on an n×n board so none attack each other. State = which column each row's queen sits in. Try each column in the current row; if it conflicts with any previously placed queen, prune. If you reach row n, record the solution.

The key insight: you can check "does column c work for row r?" in O(r) by walking previous rows. With three sets (used columns, used diagonals, used anti-diagonals) you can check in O(1).

## Pruning is the difference

A backtracking solution with no pruning is just brute force — it'll time out. Effective pruning:

- **Constraint propagation** — drop choices that immediately violate a constraint.
- **Bounding** — track the current best; abandon any branch that can't beat it.
- **Symmetry breaking** — for problems like N-Queens, the first row only needs ⌈n/2⌉ starting columns; mirror the rest.
- **Ordering choices** — try the most constrained variable / least constraining value first.

## Counting paths vs enumerating them

If the problem asks "how MANY" rather than "list them all", you can often skip building the state — just increment a counter when you reach a leaf. That removes the O(n) cost per solution.

## When NOT to use backtracking

If the search tree is too large with no good pruning, backtracking will still time out. Check:
- Is there a DP formulation? (Overlapping subproblems → memoize.)
- Is there a greedy or graph algorithm? (For pathfinding, BFS / Dijkstra usually wins.)
- Can you reformulate as constraint satisfaction with smarter heuristics? (For Sudoku, AC-3 + backtracking.)

Common backtracking problems: subsets, permutations, combinations, N-Queens, Sudoku, word search on a grid, generate parentheses, palindrome partitioning, Hamilton path, knight's tour.`,
          codeBlocks: [
            {
              title: "All subsets of an array (the include/skip template)",
              code: `void subsets(int i, vector<int>& a, vector<int>& cur, vector<vector<int>>& out) {
    if (i == (int)a.size()) { out.push_back(cur); return; }
    // include a[i]
    cur.push_back(a[i]);
    subsets(i + 1, a, cur, out);
    cur.pop_back();
    // skip a[i]
    subsets(i + 1, a, cur, out);
}`
            },
            {
              title: "All permutations via swap-and-recurse",
              code: `void perms(vector<int>& a, int i, vector<vector<int>>& out) {
    if (i == (int)a.size()) { out.push_back(a); return; }
    for (int j = i; j < (int)a.size(); j++) {
        swap(a[i], a[j]);
        perms(a, i + 1, out);
        swap(a[i], a[j]);             // undo
    }
}`
            },
            {
              title: "N-Queens with three boolean arrays for O(1) attack check",
              code: `int n;
vector<bool> col, diag1, diag2;       // diag1 = r + c; diag2 = r - c + n
vector<int> placement;                 // placement[r] = column of queen in row r
int count = 0;

void solve(int r) {
    if (r == n) { count++; return; }
    for (int c = 0; c < n; c++) {
        if (col[c] || diag1[r + c] || diag2[r - c + n]) continue;  // prune
        col[c] = diag1[r + c] = diag2[r - c + n] = true;
        placement[r] = c;
        solve(r + 1);
        col[c] = diag1[r + c] = diag2[r - c + n] = false;          // undo
    }
}`
            },
            {
              title: "Generate all valid n-pair parentheses",
              code: `void gen(int open, int close, int n, string& cur, vector<string>& out) {
    if ((int)cur.size() == 2 * n) { out.push_back(cur); return; }
    if (open < n)  { cur.push_back('('); gen(open + 1, close, n, cur, out); cur.pop_back(); }
    if (close < open) { cur.push_back(')'); gen(open, close + 1, n, cur, out); cur.pop_back(); }
}`
            },
            {
              title: "Combination Sum (target sum from candidates, reuse allowed)",
              code: `void combo(vector<int>& a, int target, int start, vector<int>& cur, vector<vector<int>>& out) {
    if (target == 0) { out.push_back(cur); return; }
    for (int i = start; i < (int)a.size(); i++) {
        if (a[i] > target) continue;             // prune
        cur.push_back(a[i]);
        combo(a, target - a[i], i, cur, out);     // i (not i+1) → reuse allowed
        cur.pop_back();
    }
}`
            },
            {
              title: "Word search on a grid (DFS with visited-undo)",
              code: `bool dfs(vector<vector<char>>& g, int r, int c, const string& w, int k) {
    if (k == (int)w.size()) return true;
    int R = g.size(), C = g[0].size();
    if (r < 0 || r >= R || c < 0 || c >= C || g[r][c] != w[k]) return false;
    char saved = g[r][c]; g[r][c] = '#';              // mark visited
    bool found = dfs(g, r+1, c, w, k+1) || dfs(g, r-1, c, w, k+1)
              || dfs(g, r, c+1, w, k+1) || dfs(g, r, c-1, w, k+1);
    g[r][c] = saved;                                   // undo
    return found;
}`
            }
          ],
          complexity: { time: "Subsets O(2ⁿ); permutations O(n!); N-Queens roughly O(n!) with pruning", space: "O(depth) recursion + O(state)" },
          keyPoints: [
            "Backtracking = brute-force-with-pruning. Try, recurse, undo.",
            "Three moving parts: state (partial solution), choices (at each step), prune (skip impossible branches).",
            "The 'undo' step is what makes it backtracking, not just exhaustive enumeration.",
            "Subsets: include/skip each element → 2ⁿ.",
            "Permutations: swap-and-recurse on each position → n!.",
            "Pruning is the difference between AC and TLE — eliminate impossible branches early.",
            "Use three boolean arrays for O(1) attack-check in N-Queens (cols, diag1, diag2).",
            "When the problem says 'how many' (not 'list them'), increment a counter at the leaf instead of copying state."
          ],
          pitfalls: [
            "Forgetting to UNDO the choice after the recursive call — state leaks into sibling branches.",
            "Pushing onto the result vector by reference and continuing to mutate — the recorded answer changes later.",
            "Wrong index for 'reuse allowed' vs 'reuse forbidden' — i vs i+1 in the recursive call.",
            "Recomputing constraints inside the loop instead of caching incrementally.",
            "Generating duplicate subsets/permutations when the input has duplicates — sort + skip-equal pattern.",
            "No pruning → 2ⁿ or n! brute force times out. Add the prune BEFORE recursing, not after."
          ],
          videoId: "pNzljlzDCiI",
          videoSearch: "backtracking subsets permutations"
        },
        {
          name: "Memoization Intro",
          explanation: `Memoization is the simplest possible introduction to dynamic programming: take a recursive function that re-computes the same subproblem many times, and cache each result the first time you compute it. The second time the function is called with the same arguments, return the cached value. That single change can drop an exponential algorithm to polynomial in one line.

It's "top-down DP" — you keep the natural recursive structure of the problem and just add memory. Tabulation ("bottom-up DP", next week) builds the same answers iteratively from the base case up. Both work; memoization is usually easier to derive from the recursion, and is the right place to START learning DP.

## The classic example — Fibonacci

Naive recursion:

long long fib(int n) {
    if (n < 2) return n;
    return fib(n-1) + fib(n-2);
}

fib(40) takes seconds; fib(50) takes forever. The recursion tree has 2ⁿ leaves and recomputes the same fib(k) over and over. Add a cache and the same function runs fib(10⁶) in a blink:

unordered_map<int, long long> memo;
long long fib(int n) {
    if (n < 2) return n;
    if (memo.count(n)) return memo[n];           // cache hit
    return memo[n] = fib(n-1) + fib(n-2);        // compute, cache, return
}

The cache turns 2ⁿ work into O(n) — each subproblem now runs only once.

## When does memoization help?

Two requirements:

1. **Overlapping subproblems** — the same recursive call is made many times. (Fibonacci, grid path counts, knapsack — yes. Merge sort — no, each subproblem is unique.)

2. **Optimal substructure** — the answer for n is computed from the answers for smaller inputs. Almost all DP problems have this.

If both hold, memoization gives the best speedup of any technique you'll learn this term.

## How to add memoization to ANY recursive function

1. Identify the parameters that uniquely determine the answer (the "state").
2. Pick a cache keyed by those parameters (array if integer indices; map otherwise).
3. At the top of the function: if the state is in the cache, return the cached value.
4. At the return: store the computed value in the cache.

That's it. The recursion itself doesn't change.

## State design — the only hard part

The state must be everything the answer depends on. Forget a parameter → wrong answer or extra work. Include too many → cache too big.

Climbing Stairs: state is i (current step). 1-D cache.
Knapsack: state is (i, remaining_capacity). 2-D cache.
Edit Distance: state is (i, j) — pointers into the two strings.
Grid path: state is (r, c).
Coin Change: state is target — what's left to make.

## Array vs map for the cache

If state is small integers, use a vector (vector<int> memo(n+1, -1)) — fastest. Use -1 as "not computed yet" if 0 is a valid answer; otherwise use a separate boolean vector.

If state is huge or sparse, use unordered_map. Slightly slower but works for anything hashable.

For 2-D states, use vector<vector<int>>; for 3-D, vector<vector<vector<int>>>; etc.

## Cost vs benefit

Memoization changes time from O(branching^depth) to O(state_count * work_per_state). For Fibonacci that's 2ⁿ → n. For 0/1 Knapsack: 2ⁿ → n·W. For Edit Distance: 3ⁿ → n·m. Always a massive win when overlapping subproblems exist.

Cost: O(state_count) extra memory. For most problems that's worth it.

## Memoization → Tabulation

Once you've memoized a recursive function, converting to bottom-up tabulation is mechanical:

1. Make the cache an explicit array dp[].
2. Initialise dp at the base cases.
3. Fill dp in order of dependencies (smaller subproblems first).
4. Return dp[full_input].

We'll do this in detail in Week 7. For now, focus on the memoization mental model: recursion + cache.`,
          codeBlocks: [
            {
              title: "Fibonacci — naive vs memoized",
              code: `// Naive: O(φⁿ) ≈ O(1.618ⁿ). fib(40) takes seconds.
long long fibNaive(int n) {
    if (n < 2) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// Memoized: O(n) time, O(n) space.
vector<long long> memo;
long long fibMemo(int n) {
    if (n < 2) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
}

int main() {
    memo.assign(101, -1);
    cout << fibMemo(100) << "\\n";       // works instantly
}`
            },
            {
              title: "Climbing Stairs (1-D DP)",
              code: `// Number of distinct ways to climb n stairs taking 1 or 2 at a time.
vector<int> memo;
int climb(int n) {
    if (n <= 1) return 1;
    if (memo[n] != -1) return memo[n];
    return memo[n] = climb(n - 1) + climb(n - 2);
}`
            },
            {
              title: "Grid unique paths (2-D state)",
              code: `// How many ways from (0,0) to (m-1, n-1) moving right or down?
vector<vector<int>> memo;
int paths(int r, int c, int m, int n) {
    if (r == m - 1 && c == n - 1) return 1;
    if (r >= m || c >= n) return 0;
    if (memo[r][c] != -1) return memo[r][c];
    return memo[r][c] = paths(r + 1, c, m, n) + paths(r, c + 1, m, n);
}`
            },
            {
              title: "0/1 Knapsack with memoization",
              code: `vector<vector<int>> memo;
int knap(vector<int>& w, vector<int>& v, int i, int cap) {
    if (i < 0 || cap == 0) return 0;
    if (memo[i][cap] != -1) return memo[i][cap];
    int skip = knap(w, v, i - 1, cap);
    int take = (w[i] <= cap) ? v[i] + knap(w, v, i - 1, cap - w[i]) : 0;
    return memo[i][cap] = max(skip, take);
}`
            },
            {
              title: "Coin Change — minimum coins to make target",
              code: `vector<int> memo;
int coinChange(vector<int>& coins, int amt) {
    if (amt == 0) return 0;
    if (amt < 0)  return INT_MAX;
    if (memo[amt] != -1) return memo[amt];
    int best = INT_MAX;
    for (int c : coins) {
        int sub = coinChange(coins, amt - c);
        if (sub != INT_MAX) best = min(best, sub + 1);
    }
    return memo[amt] = best;
}`
            },
            {
              title: "Map-based memoization (use when state isn't a simple int)",
              code: `// State is a pair (i, j). Use unordered_map with a custom hash if needed.
map<pair<int,int>, int> memo;
int solve(int i, int j) {
    if (/* base case */) return /* answer */;
    auto key = make_pair(i, j);
    if (memo.count(key)) return memo[key];
    // ... compute ans recursively ...
    return memo[key] = /* ans */;
}`
            }
          ],
          complexity: { time: "O(state_count × work_per_state) — typically O(n) to O(n·W) per problem", space: "O(state_count) for the cache + O(depth) recursion stack" },
          keyPoints: [
            "Memoization = recursion + cache. Compute each subproblem once; reuse the cached answer afterwards.",
            "Requires overlapping subproblems (same recursive call made multiple times) AND optimal substructure.",
            "Turns Fibonacci from O(2ⁿ) to O(n) — same algorithm, one cache.",
            "Use vector<int> initialised to -1 (or sentinel) for integer-keyed states. Use unordered_map for complex keys.",
            "State design is the only hard part: parameters must uniquely determine the answer.",
            "Top-down (memoization) keeps the recursion; bottom-up (tabulation) replaces it with an iterative fill.",
            "Mechanical conversion: write the recursion → identify state → add cache → memoize.",
            "Trade memory for time — almost always worth it when overlapping subproblems exist."
          ],
          pitfalls: [
            "Returning the cached value WITHOUT first checking it's actually been set (uninitialised reads).",
            "Forgetting a parameter in the state → wrong answer or extra (correct but slow) recomputation.",
            "Sentinel collision: using -1 as 'not computed' when -1 is a valid answer.",
            "Cache shared across multiple test cases without clearing — answers leak from one input to the next.",
            "Recursion depth blowing the stack on large n — switch to iterative tabulation if depth > 10⁵.",
            "Memoizing a function that doesn't have overlapping subproblems (merge sort, binary search) — no speedup, just overhead."
          ],
          videoId: "sPeKpctCL-c",
          videoSearch: "memoization dp introduction"
        }
      ],

      problems: [
        { title: "Binary Search",                            difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/binary-search/" },
        { title: "Search in Rotated Sorted Array",           difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { title: "Search in Rotated Sorted Array II",        difficulty: "Medium",                url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" },
        { title: "Find Peak Element",                        difficulty: "Medium",                url: "https://leetcode.com/problems/find-peak-element/" },
        { title: "First Bad Version",                        difficulty: "Easy",                  url: "https://leetcode.com/problems/first-bad-version/" },
        { title: "Find First and Last Position of Element",  difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
        { title: "Search a 2D Matrix",                       difficulty: "Medium",                url: "https://leetcode.com/problems/search-a-2d-matrix/" },
        { title: "Median of Two Sorted Arrays",              difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
        { title: "Koko Eating Bananas",                      difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/koko-eating-bananas/" },
        { title: "Capacity to Ship Packages Within D Days",  difficulty: "Medium",                url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
        { title: "Sort Colors (Dutch National Flag)",        difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/sort-colors/" },
        { title: "Merge Intervals",                          difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/merge-intervals/" },
        { title: "Insert Interval",                          difficulty: "Medium",                url: "https://leetcode.com/problems/insert-interval/" },
        { title: "Group Anagrams",                           difficulty: "Medium",                url: "https://leetcode.com/problems/group-anagrams/" },
        { title: "Top K Frequent Elements",                  difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        { title: "Subsets",                                  difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/subsets/" },
        { title: "Subsets II",                               difficulty: "Medium",                url: "https://leetcode.com/problems/subsets-ii/" },
        { title: "Permutations",                             difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/permutations/" },
        { title: "Combinations",                             difficulty: "Medium",                url: "https://leetcode.com/problems/combinations/" },
        { title: "Combination Sum",                          difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/combination-sum/" },
        { title: "Letter Combinations of a Phone Number",    difficulty: "Medium",                url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
        { title: "Generate Parentheses",                     difficulty: "Medium",                url: "https://leetcode.com/problems/generate-parentheses/" },
        { title: "Word Search",                              difficulty: "Medium",                url: "https://leetcode.com/problems/word-search/" },
        { title: "Palindrome Partitioning",                  difficulty: "Medium",                url: "https://leetcode.com/problems/palindrome-partitioning/" },
        { title: "N-Queens",                                 difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/n-queens/" }
      ],

      links: [], videos: [], pdfs: [], notes: []
    },

    /* ==================================================================
       Weeks 3-7 are commented out below.
       They will be enabled as content is finalised week by week.
       To publish a week, move the closing comment delimiter
       (the asterisk-slash) below that week.
       ==================================================================

    // ============================================================
    // WEEK 3 — Linked Lists + Stacks/Queues + Hashing
    // ============================================================
    {
      number: 3,
      title: "Linked Lists, Stacks/Queues & Hashing",
      topics: ["Linked List", "Stack", "Queue", "Hashing"],
      goal: "Master pointer-based linear structures and the hashing trick for O(1) lookups.",

      concepts: [
        {
          name: "Singly & Doubly Linked Lists",
          explanation: "Detailed notes coming soon. A chain of nodes connected by next (and prev) pointers. Insertion at head is O(1); search is O(n).",
          videoId: "Crqgl10aIGQ",
          videoSearch: "linked list singly doubly"
        },
        {
          name: "Floyd's Cycle Detection & LL Reversal",
          explanation: "Detailed notes coming soon. Two-pointer (slow/fast) tricks for finding cycles, middles, and reversing a list in O(n) time and O(1) space.",
          videoId: "Fj1ywT9ETQk",
          videoSearch: "floyd cycle detection linked list reversal"
        },
        {
          name: "Stack (LIFO, implementations)",
          explanation: "Detailed notes coming soon. Last-In-First-Out. Built via array or linked list. Used for balanced brackets, expression evaluation, undo systems, and DFS.",
          videoId: "JvuaAgDar1c",
          videoSearch: "stack data structure c++"
        },
        {
          name: "Queue & Deque",
          explanation: "Detailed notes coming soon. FIFO with enqueue/dequeue, plus the double-ended deque for O(1) ops on either end. Used for BFS and scheduling.",
          videoId: "fbonDkYsKj0",
          videoSearch: "queue deque c++"
        },
        {
          name: "Monotonic Stack/Queue + Expression Evaluation",
          explanation: "Detailed notes coming soon. Keep the stack/queue in monotonic (sorted) order for next-greater-element and sliding-window-maximum in O(n). Plus infix→postfix conversion and evaluation.",
          videoId: "5B6jw4wOJR0",
          videoSearch: "monotonic stack expression evaluation"
        },
        {
          name: "Hashing Fundamentals (hash functions, collisions)",
          explanation: "Detailed notes coming soon. What is a hash function? Why does hashing give O(1) average lookup? Collision handling: chaining vs open addressing, and when each degrades to O(n).",
          videoId: "0kfM_YEzR94",
          videoSearch: "hashing hash table collisions"
        },
        {
          name: "Frequency Counting & Lookup Patterns",
          explanation: "Detailed notes coming soon. The everyday use of hash maps and hash sets — counting occurrences, deduplication, lookup-in-loop, and turning O(n²) brute force into O(n).",
          videoId: "2yCsrWvHcKQ",
          videoSearch: "frequency counting hashmap"
        }
      ],

      problems: [
        { title: "Reverse Linked List",                      difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/reverse-linked-list/" },
        { title: "Linked List Cycle",                        difficulty: "Easy",                  url: "https://leetcode.com/problems/linked-list-cycle/" },
        { title: "Linked List Cycle II",                     difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
        { title: "Merge Two Sorted Lists",                   difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { title: "Remove Nth Node from End of List",         difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        { title: "Add Two Numbers",                          difficulty: "Medium",                url: "https://leetcode.com/problems/add-two-numbers/" },
        { title: "Reorder List",                             difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/reorder-list/" },
        { title: "Intersection of Two Linked Lists",         difficulty: "Easy",                  url: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
        { title: "Palindrome Linked List",                   difficulty: "Easy",                  url: "https://leetcode.com/problems/palindrome-linked-list/" },
        { title: "Remove Duplicates from Sorted List",       difficulty: "Easy",                  url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" },
        { title: "Copy List with Random Pointer",            difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
        { title: "Reverse Nodes in k-Group",                 difficulty: "Hard",                  url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
        { title: "Valid Parentheses",                        difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/valid-parentheses/" },
        { title: "Min Stack",                                difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/min-stack/" },
        { title: "Daily Temperatures (Monotonic Stack)",     difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/daily-temperatures/" },
        { title: "Next Greater Element I",                   difficulty: "Easy",                  url: "https://leetcode.com/problems/next-greater-element-i/" },
        { title: "Largest Rectangle in Histogram",           difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
        { title: "Sliding Window Maximum",                   difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/sliding-window-maximum/" },
        { title: "Implement Queue using Stacks",             difficulty: "Easy",                  url: "https://leetcode.com/problems/implement-queue-using-stacks/" },
        { title: "Evaluate Reverse Polish Notation",         difficulty: "Medium",                url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
        { title: "Contains Duplicate (Hashing)",             difficulty: "Easy",                  url: "https://leetcode.com/problems/contains-duplicate/" },
        { title: "Longest Consecutive Sequence (Hashing)",   difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        { title: "First Unique Character in a String",       difficulty: "Easy",                  url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
        { title: "Happy Number (Hashing)",                   difficulty: "Easy",                  url: "https://leetcode.com/problems/happy-number/" }
      ],

      links: [], videos: [], pdfs: [], notes: []
    },

    // ============================================================
    // WEEK 4 — Trees + BST + Heaps + Tries
    // ============================================================
    {
      number: 4,
      title: "Trees, BST, Heaps & Tries",
      topics: ["Binary Tree", "BST", "Heap", "Trie"],
      goal: "Master the non-linear structures — every traversal cold, BST operations, heap mechanics, and tries.",

      concepts: [
        {
          name: "Binary Tree Fundamentals",
          explanation: "Detailed notes coming soon. Tree terminology: root, leaf, parent, child, depth, height. Difference between general trees and binary trees.",
          videoId: "_jKa4gycZTw",
          videoSearch: "binary tree introduction"
        },
        {
          name: "Tree Traversals (Inorder, Preorder, Postorder)",
          explanation: "Detailed notes coming soon. Three depth-first orderings. Inorder of a BST is sorted. Each has a recursive and iterative version.",
          videoId: "67zlUtAr2LE",
          videoSearch: "tree traversal inorder preorder postorder"
        },
        {
          name: "Level Order Traversal (BFS on tree)",
          explanation: "Detailed notes coming soon. Walk a tree level by level using a queue. Many tree problems (right view, zig-zag, average per level) reduce to a level-order walk with a twist.",
          videoId: "vQIiUWofWw8",
          videoSearch: "level order traversal bfs tree"
        },
        {
          name: "Tree Properties (depth, height, diameter)",
          explanation: "Detailed notes coming soon. Depth = distance from root. Height = distance to farthest leaf. Diameter = longest path between any two nodes.",
          videoId: "9fj_-Sr84CU",
          videoSearch: "depth height diameter binary tree"
        },
        {
          name: "Binary Search Tree (BST) — search, insert, delete",
          explanation: "Detailed notes coming soon. Left subtree < node < right subtree. Search/insert/delete in O(log n) average, O(n) worst when the tree degenerates.",
          videoId: "ScdwdSCnXDU",
          videoSearch: "binary search tree operations"
        },
        {
          name: "Lowest Common Ancestor (LCA)",
          explanation: "Detailed notes coming soon. Deepest node that has both target nodes as descendants. BST has a shortcut; general binary trees use DFS recursion.",
          videoId: "JW-9nhktGGA",
          videoSearch: "lowest common ancestor binary tree"
        },
        {
          name: "Binary Heap (min-heap & max-heap)",
          explanation: "Detailed notes coming soon. A complete binary tree stored in an array with the heap property. Insert and extract-root in O(log n).",
          videoId: "MMTQz-G8e-I",
          videoSearch: "binary heap min max heap"
        },
        {
          name: "Priority Queue & Heap Operations",
          explanation: "Detailed notes coming soon. The std::priority_queue interface, heapify, sift-up, sift-down. Used for top-K, scheduling, and Dijkstra.",
          videoId: "XzA5Ts_vXfw",
          videoSearch: "priority queue c++"
        },
        {
          name: "Trie (Prefix Tree)",
          explanation: "Detailed notes coming soon. A tree where each edge is a character. Insert, search, and startsWith all run in O(L). Used for autocomplete and dictionary problems.",
          videoId: "dOXfffhl4uI",
          videoSearch: "trie data structure"
        }
      ],

      problems: [
        { title: "Maximum Depth of Binary Tree",             difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        { title: "Invert Binary Tree",                       difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/invert-binary-tree/" },
        { title: "Same Tree",                                difficulty: "Easy",                  url: "https://leetcode.com/problems/same-tree/" },
        { title: "Symmetric Tree",                           difficulty: "Easy",                  url: "https://leetcode.com/problems/symmetric-tree/" },
        { title: "Path Sum",                                 difficulty: "Easy",                  url: "https://leetcode.com/problems/path-sum/" },
        { title: "Binary Tree Inorder Traversal",            difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
        { title: "Binary Tree Preorder Traversal",           difficulty: "Easy",                  url: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
        { title: "Binary Tree Postorder Traversal",          difficulty: "Easy",                  url: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
        { title: "Binary Tree Level Order Traversal",        difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        { title: "Binary Tree Zigzag Level Order",           difficulty: "Medium",                url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
        { title: "Diameter of Binary Tree",                  difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
        { title: "Balanced Binary Tree",                     difficulty: "Easy",                  url: "https://leetcode.com/problems/balanced-binary-tree/" },
        { title: "Binary Tree Right Side View",              difficulty: "Medium",                url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
        { title: "Construct Binary Tree from Preorder + Inorder", difficulty: "Medium", mustDo: true, url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
        { title: "Binary Tree Maximum Path Sum",             difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
        { title: "Lowest Common Ancestor of a Binary Tree",  difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
        { title: "Flatten Binary Tree to Linked List",       difficulty: "Medium",                url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
        { title: "Serialize and Deserialize Binary Tree",    difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
        { title: "Validate Binary Search Tree",              difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/validate-binary-search-tree/" },
        { title: "Lowest Common Ancestor of a BST",          difficulty: "Medium",                url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
        { title: "Kth Smallest Element in a BST",            difficulty: "Medium",                url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
        { title: "Convert Sorted Array to BST",              difficulty: "Easy",                  url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
        { title: "Kth Largest Element in an Array (heap)",   difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { title: "Find Median from Data Stream (Heap)",      difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/find-median-from-data-stream/" },
        { title: "Merge K Sorted Lists",                     difficulty: "Hard",                  url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        { title: "Implement Trie (Prefix Tree)",             difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        { title: "Word Search II (Trie)",                    difficulty: "Hard",                  url: "https://leetcode.com/problems/word-search-ii/" }
      ],

      links: [], videos: [], pdfs: [], notes: []
    },

    // ============================================================
    // WEEK 5 — Graphs: Foundations
    // ============================================================
    {
      number: 5,
      title: "Graphs — Foundations (BFS/DFS focus)",
      topics: ["Graphs", "BFS", "DFS", "Components", "Bipartite"],
      goal: "Start the graph chapter. BFS and DFS until they are reflex.",

      concepts: [
        {
          name: "Graph Representations (adj list, matrix, edge list)",
          explanation: "Detailed notes coming soon. Three ways to encode a graph: adjacency list (O(V+E) space), adjacency matrix (O(V²)), and edge list. Each suits different algorithms.",
          videoId: "3pr9Ce9vECc",
          videoSearch: "graph representation adjacency list matrix"
        },
        {
          name: "Breadth-First Search (BFS)",
          explanation: "Detailed notes coming soon. Explore level by level using a queue. On unweighted graphs BFS finds the shortest path. Multi-source BFS handles 'flood' problems.",
          videoId: "geOBaNYYInc",
          videoSearch: "bfs breadth first search graph"
        },
        {
          name: "Depth-First Search (DFS)",
          explanation: "Detailed notes coming soon. Explore as deep as possible before backtracking. Recursive or iterative-stack. Foundation for cycle detection, topo sort, and components.",
          videoId: "GmZNp9_-imM",
          videoSearch: "dfs depth first search graph"
        },
        {
          name: "Connected Components",
          explanation: "Detailed notes coming soon. The maximal sets of mutually reachable vertices in an undirected graph. Found via a DFS/BFS launched from each unvisited vertex.",
          videoSearch: "connected components graph"
        },
        {
          name: "Bipartite Check",
          explanation: "Detailed notes coming soon. A graph is bipartite iff it can be 2-colored. Check via BFS while alternating colors and looking for conflicts.",
          videoId: "orl8SsQOToc",
          videoSearch: "bipartite graph check"
        }
      ],

      problems: [
        { title: "Number of Islands",                        difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/number-of-islands/" },
        { title: "Clone Graph",                              difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/clone-graph/" },
        { title: "Flood Fill",                               difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/flood-fill/" },
        { title: "Surrounded Regions",                       difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/surrounded-regions/" },
        { title: "Max Area of Island",                       difficulty: "Medium",                url: "https://leetcode.com/problems/max-area-of-island/" },
        { title: "Number of Provinces",                      difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/number-of-provinces/" },
        { title: "Is Graph Bipartite?",                      difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/is-graph-bipartite/" },
        { title: "Possible Bipartition",                     difficulty: "Medium",                url: "https://leetcode.com/problems/possible-bipartition/" },
        { title: "Rotting Oranges (multi-source BFS)",       difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/rotting-oranges/" },
        { title: "Pacific Atlantic Water Flow",              difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
        { title: "Word Ladder",                              difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/word-ladder/" },
        { title: "Word Ladder II",                           difficulty: "Hard",                  url: "https://leetcode.com/problems/word-ladder-ii/" },
        { title: "01 Matrix",                                difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/01-matrix/" },
        { title: "Walls and Gates",                          difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/walls-and-gates/" },
        { title: "Open the Lock",                            difficulty: "Medium",                url: "https://leetcode.com/problems/open-the-lock/" },
        { title: "Shortest Bridge",                          difficulty: "Medium",                url: "https://leetcode.com/problems/shortest-bridge/" },
        { title: "Keys and Rooms",                           difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/keys-and-rooms/" },
        { title: "Find if Path Exists in Graph",             difficulty: "Easy",                  url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        { title: "All Paths From Source to Target",          difficulty: "Medium",                url: "https://leetcode.com/problems/all-paths-from-source-to-target/" },
        { title: "Snakes and Ladders",                       difficulty: "Medium",                url: "https://leetcode.com/problems/snakes-and-ladders/" },
        { title: "As Far from Land as Possible",             difficulty: "Medium",                url: "https://leetcode.com/problems/as-far-from-land-as-possible/" },
        { title: "Number of Closed Islands",                 difficulty: "Medium",                url: "https://leetcode.com/problems/number-of-closed-islands/" }
      ],

      links: [], videos: [], pdfs: [], notes: []
    },

    // ============================================================
    // WEEK 6 — Graphs: Advanced
    // ============================================================
    {
      number: 6,
      title: "Graphs — Advanced (Shortest Path, MST, DSU)",
      topics: ["Topo Sort", "Dijkstra", "Bellman-Ford", "DSU", "MST"],
      goal: "Layer on the advanced graph algorithms — shortest paths, MSTs, and the Union-Find structure.",

      concepts: [
        {
          name: "Cycle Detection (directed & undirected)",
          explanation: "Detailed notes coming soon. Undirected: a non-parent visited neighbour means a cycle. Directed: a back-edge to a gray (in-progress) vertex means a cycle.",
          videoId: "hGscdp38JKM",
          videoSearch: "cycle detection graph"
        },
        {
          name: "Topological Sort (Kahn's + DFS)",
          explanation: "Detailed notes coming soon. An ordering of a DAG's vertices so that every edge u→v has u before v. Kahn's uses indegree+queue; DFS variant uses finish-time.",
          videoId: "Yh5o_PSK9to",
          videoSearch: "topological sort kahn algorithm"
        },
        {
          name: "Dijkstra's Shortest Path",
          explanation: "Detailed notes coming soon. Single-source shortest paths in O((V+E) log V) using a min-heap. Requires non-negative edge weights.",
          videoId: "SnZ2SQARTVI",
          videoSearch: "dijkstra shortest path"
        },
        {
          name: "Bellman-Ford",
          explanation: "Detailed notes coming soon. Single-source shortest paths in O(V·E), handles negative weights, detects negative-weight cycles.",
          videoId: "LKfIjVZ6kg4",
          videoSearch: "bellman ford shortest path"
        },
        {
          name: "DSU (Union-Find) with path compression",
          explanation: "Detailed notes coming soon. Track 'which group am I in?' for n elements. Two operations (find, union) in nearly O(1) amortized with path compression + union by rank.",
          videoId: "YZ40AZQi0bk",
          videoSearch: "union find disjoint set union"
        },
        {
          name: "MST — Kruskal & Prim",
          explanation: "Detailed notes coming soon. Find the minimum-weight tree connecting all vertices. Kruskal sorts edges and uses DSU; Prim grows the tree with a min-heap.",
          videoId: "J7nUacHWtsM",
          videoSearch: "minimum spanning tree kruskal prim"
        }
      ],

      problems: [
        { title: "Course Schedule (Topo sort)",              difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/course-schedule/" },
        { title: "Course Schedule II",                       difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/course-schedule-ii/" },
        { title: "Alien Dictionary (Topo sort)",             difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/alien-dictionary/" },
        { title: "Find Eventual Safe States",                difficulty: "Medium",                url: "https://leetcode.com/problems/find-eventual-safe-states/" },
        { title: "Network Delay Time (Dijkstra)",            difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/network-delay-time/" },
        { title: "Cheapest Flights Within K Stops",          difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
        { title: "Path With Minimum Effort",                 difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/path-with-minimum-effort/" },
        { title: "Swim in Rising Water",                     difficulty: "Hard",                  url: "https://leetcode.com/problems/swim-in-rising-water/" },
        { title: "Shortest Path in a Binary Matrix",         difficulty: "Medium",                url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
        { title: "The Maze",                                 difficulty: "Medium",                url: "https://leetcode.com/problems/the-maze/" },
        { title: "Min Cost to Connect All Points (MST)",     difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
        { title: "Connecting Cities With Minimum Cost",      difficulty: "Medium",                url: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/" },
        { title: "Number of Connected Components (DSU)",     difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
        { title: "Redundant Connection",                     difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/redundant-connection/" },
        { title: "Accounts Merge (DSU)",                     difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/accounts-merge/" },
        { title: "Most Stones Removed with Same Row or Column", difficulty: "Medium",             url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/" },
        { title: "Satisfiability of Equality Equations",     difficulty: "Medium",                url: "https://leetcode.com/problems/satisfiability-of-equality-equations/" },
        { title: "Smallest String With Swaps",               difficulty: "Medium",                url: "https://leetcode.com/problems/smallest-string-with-swaps/" },
        { title: "Number of Operations to Make Network Connected", difficulty: "Medium",          url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/" },
        { title: "Evaluate Division",                        difficulty: "Medium",                url: "https://leetcode.com/problems/evaluate-division/" },
        { title: "Reconstruct Itinerary",                    difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/reconstruct-itinerary/" },
        { title: "Critical Connections in a Network",        difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/critical-connections-in-a-network/" }
      ],

      links: [], videos: [], pdfs: [], notes: []
    },

    // ============================================================
    // WEEK 7 — Dynamic Programming
    // ============================================================
    {
      number: 7,
      title: "Dynamic Programming (Foundations + Patterns)",
      topics: ["DP Intro", "Knapsack", "LCS", "LIS", "DP on Strings", "Intervals"],
      goal: "Master DP end-to-end — from recursion → memoization → tabulation, through every classic pattern.",

      concepts: [
        {
          name: "DP Intro: Recursion → Memoization → Tabulation",
          explanation: "Detailed notes coming soon. Every DP solution starts as a recursion. Add caching → memoization. Convert to a loop → tabulation. We explore the ladder in detail.",
          videoId: "sPeKpctCL-c",
          videoSearch: "dynamic programming introduction memoization tabulation"
        },
        {
          name: "1-D DP (Fibonacci, Climbing Stairs, House Robber)",
          explanation: "Detailed notes coming soon. When the state is one integer (an index), the DP array is 1-D. Classic recurrences: dp[i] depends on dp[i-1] and dp[i-2].",
          videoId: "0zvG6bIZ5KY",
          videoSearch: "1d dynamic programming house robber"
        },
        {
          name: "2-D DP (Unique Paths, grid problems)",
          explanation: "Detailed notes coming soon. When state has two parameters (row + column, or i + j across two strings), use a 2-D table. Grid path counts, edit distance, LCS.",
          videoSearch: "2d dynamic programming grid"
        },
        {
          name: "0/1 Knapsack",
          explanation: "Detailed notes coming soon. Items have weights and values; capacity is W. Each item used at most once. The canonical DP problem — pattern recurs everywhere.",
          videoId: "PPcpC5QbMx0",
          videoSearch: "0 1 knapsack dynamic programming"
        },
        {
          name: "Unbounded Knapsack",
          explanation: "Detailed notes coming soon. Same setup as 0/1 but each item can be picked any number of times. Subtle change to the recurrence and the loop direction.",
          videoId: "CB8w6MzXsx4",
          videoSearch: "unbounded knapsack dynamic programming"
        },
        {
          name: "Longest Common Subsequence (LCS family)",
          explanation: "Detailed notes coming soon. Given two strings, find the longest subsequence in both. The pattern generalizes to shortest-common-supersequence, distinct-subsequences, and edit distance.",
          videoId: "Esx-TxF5PSo",
          videoSearch: "longest common subsequence dp"
        },
        {
          name: "Longest Increasing Subsequence (LIS)",
          explanation: "Detailed notes coming soon. Find the longest strictly increasing subsequence. The O(n²) DP is intuitive; the O(n log n) version uses binary search on a 'tails' array.",
          videoId: "okgM58Tv9jQ",
          videoSearch: "longest increasing subsequence dp"
        },
        {
          name: "Edit Distance & DP on Strings",
          explanation: "Detailed notes coming soon. Minimum insert/delete/replace operations to turn one string into another. Foundational pattern for diff tools and spell-check.",
          videoSearch: "edit distance levenshtein dp"
        },
        {
          name: "DP on Intervals (Palindrome Partitioning, MCM)",
          explanation: "Detailed notes coming soon. dp[i][j] = answer for the interval [i..j]. Fill by increasing interval length. Used in palindrome partitioning and matrix-chain multiplication.",
          videoId: "-g_xhI_tZfA",
          videoSearch: "dp on intervals palindrome partitioning"
        },
        {
          name: "Greedy vs DP",
          explanation: "Detailed notes coming soon. Greedy = locally best at each step. Works only with proof (exchange argument). When greedy fails, DP saves you. Classic comparison: coin change.",
          videoId: "bDPtZO_Skyc",
          videoSearch: "greedy algorithm vs dynamic programming"
        }
      ],

      problems: [
        { title: "Climbing Stairs",                          difficulty: "Easy",   mustDo: true,  url: "https://leetcode.com/problems/climbing-stairs/" },
        { title: "Min Cost Climbing Stairs",                 difficulty: "Easy",                  url: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
        { title: "House Robber",                             difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/house-robber/" },
        { title: "House Robber II",                          difficulty: "Medium",                url: "https://leetcode.com/problems/house-robber-ii/" },
        { title: "Decode Ways",                              difficulty: "Medium",                url: "https://leetcode.com/problems/decode-ways/" },
        { title: "Maximum Product Subarray",                 difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/maximum-product-subarray/" },
        { title: "Coin Change",                              difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/coin-change/" },
        { title: "Coin Change II (unbounded)",               difficulty: "Medium",                url: "https://leetcode.com/problems/coin-change-ii/" },
        { title: "Combination Sum IV",                       difficulty: "Medium",                url: "https://leetcode.com/problems/combination-sum-iv/" },
        { title: "Unique Paths",                             difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/unique-paths/" },
        { title: "Unique Paths II",                          difficulty: "Medium",                url: "https://leetcode.com/problems/unique-paths-ii/" },
        { title: "Minimum Path Sum",                         difficulty: "Medium",                url: "https://leetcode.com/problems/minimum-path-sum/" },
        { title: "Triangle",                                 difficulty: "Medium",                url: "https://leetcode.com/problems/triangle/" },
        { title: "Maximal Square",                           difficulty: "Medium",                url: "https://leetcode.com/problems/maximal-square/" },
        { title: "Partition Equal Subset Sum (0/1 knapsack)",difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
        { title: "Target Sum",                               difficulty: "Medium",                url: "https://leetcode.com/problems/target-sum/" },
        { title: "Longest Common Subsequence",               difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/longest-common-subsequence/" },
        { title: "Longest Increasing Subsequence",           difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        { title: "Longest Palindromic Subsequence",          difficulty: "Medium",                url: "https://leetcode.com/problems/longest-palindromic-subsequence/" },
        { title: "Palindromic Substrings",                   difficulty: "Medium",                url: "https://leetcode.com/problems/palindromic-substrings/" },
        { title: "Edit Distance",                            difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/edit-distance/" },
        { title: "Distinct Subsequences",                    difficulty: "Hard",                  url: "https://leetcode.com/problems/distinct-subsequences/" },
        { title: "Wildcard Matching",                        difficulty: "Hard",                  url: "https://leetcode.com/problems/wildcard-matching/" },
        { title: "Regular Expression Matching",              difficulty: "Hard",                  url: "https://leetcode.com/problems/regular-expression-matching/" },
        { title: "Word Break",                               difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/word-break/" },
        { title: "Best Time to Buy and Sell Stock II",       difficulty: "Medium",                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
        { title: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "Medium", mustDo: true, url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
        { title: "Burst Balloons (interval DP)",             difficulty: "Hard",   mustDo: true,  url: "https://leetcode.com/problems/burst-balloons/" },
        { title: "Jump Game (greedy)",                       difficulty: "Medium", mustDo: true,  url: "https://leetcode.com/problems/jump-game/" },
        { title: "Jump Game II",                             difficulty: "Medium",                url: "https://leetcode.com/problems/jump-game-ii/" },
        { title: "Gas Station (greedy)",                     difficulty: "Medium",                url: "https://leetcode.com/problems/gas-station/" }
      ],

      links: [], videos: [], pdfs: [], notes: []
    }

    ==================================================================
    End of commented-out weeks 3-7.
    ================================================================== */

  ]
};
