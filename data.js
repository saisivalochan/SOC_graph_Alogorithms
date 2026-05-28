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
          explanation: `A linked list is a chain of nodes. Each node holds a value and a pointer to the next node. Unlike an array, the nodes can sit anywhere in memory — they're stitched together by pointers, not by contiguous storage. That trade gives you O(1) insertion and deletion if you already have a pointer to the spot, paid for with O(n) access and worse cache behaviour.

You'll write linked lists by hand far more often than you'll actually use them — but they're the gateway to pointer-thinking, which you'll need for trees, graphs, and just about every dynamic data structure.

## Singly linked list

Each node has value + next pointer. The list is identified by a head pointer; the last node's next is nullptr.

struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

Traversal is "walk next until nullptr":

for (Node* p = head; p != nullptr; p = p->next) cout << p->val << " ";

Insert at HEAD is O(1) — new node points to old head, head moves to new node.
Insert at TAIL is O(n) unless you keep a tail pointer.
Delete a node requires the PREVIOUS node so you can re-stitch.

## Doubly linked list

Each node has value + next + prev. The cost is the extra pointer per node; the benefit is O(1) deletion if you have a pointer to the node itself (you can find prev via the back-link).

struct DNode {
    int val;
    DNode* prev;
    DNode* next;
};

Every modern STL container that allows fast end-modification (std::list, std::deque internally) uses doubly linked structure under the hood.

## Sentinel / dummy nodes

A surprisingly powerful idiom: keep an always-present dummy head node before the real first element. Now you never have to special-case "what if the list is empty" or "what if we're deleting the first node" — the dummy is always there to be the previous pointer. Used heavily in interview solutions.

Node dummy(0);
dummy.next = head;
// ... operate using dummy as the "before-head" anchor ...
return dummy.next;       // the (possibly changed) real head

## Time-complexity cheat sheet

| Operation                          | Array         | Singly LL  | Doubly LL  |
|------------------------------------|---------------|------------|------------|
| Access at index i                  | O(1)          | O(n)       | O(n)       |
| Insert at head                     | O(n)          | O(1)       | O(1)       |
| Insert at tail (with tail ptr)     | O(1) amort.   | O(1)       | O(1)       |
| Insert/delete given pointer to node| O(n)          | O(n) prev  | O(1)       |
| Search by value                    | O(n)          | O(n)       | O(n)       |
| Memory per element                 | 1×            | 2×         | 3×         |

## Two-pointer tricks

Linked lists shine for two-pointer work because you can't index into them:

- **Find middle**: slow moves 1 step, fast moves 2; when fast reaches end, slow is at the middle.
- **Detect cycle**: slow + fast — they meet iff there's a cycle (Floyd's algorithm, next concept).
- **N-th from end**: advance fast n steps, then move both until fast hits end.

## When to actually use linked list

In real C++ code, almost never. std::vector is faster for nearly every workload because it's cache-friendly. The narrow wins for std::list:
- Splicing/concatenating in O(1) when you have iterators.
- Iterator stability under insertion/deletion (vector invalidates everything).
- Genuinely huge elements where you can't afford the copy on resize.

For interviews, linked-list problems are everywhere — they're how problem-setters force you to think in pointers.`,
          codeBlocks: [
            {
              title: "Singly linked list — node + traversal + insert-at-head",
              code: `struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

void printList(Node* head) {
    for (Node* p = head; p != nullptr; p = p->next) cout << p->val << " ";
    cout << "\\n";
}

Node* insertHead(Node* head, int v) {
    Node* n = new Node(v);
    n->next = head;
    return n;                          // new head
}`
            },
            {
              title: "Insert at tail (O(n) without a tail pointer)",
              code: `Node* insertTail(Node* head, int v) {
    Node* n = new Node(v);
    if (!head) return n;
    Node* p = head;
    while (p->next) p = p->next;
    p->next = n;
    return head;
}`
            },
            {
              title: "Delete by value (singly LL — need the previous pointer)",
              code: `Node* deleteVal(Node* head, int target) {
    Node dummy(0);                     // sentinel — no special case for head
    dummy.next = head;
    Node* prev = &dummy;
    while (prev->next) {
        if (prev->next->val == target) {
            Node* doomed = prev->next;
            prev->next = doomed->next;
            delete doomed;
            break;
        }
        prev = prev->next;
    }
    return dummy.next;
}`
            },
            {
              title: "Find the middle node (slow/fast)",
              code: `Node* findMiddle(Node* head) {
    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;                       // for even-length, returns the second-of-two middles
}`
            },
            {
              title: "Doubly linked list — insert and delete in O(1)",
              code: `struct DNode {
    int val;
    DNode* prev;
    DNode* next;
    DNode(int v) : val(v), prev(nullptr), next(nullptr) {}
};

// Insert n after a given node x — O(1).
void insertAfter(DNode* x, DNode* n) {
    n->prev = x;
    n->next = x->next;
    if (x->next) x->next->prev = n;
    x->next = n;
}

// Delete node x — O(1).
void deleteNode(DNode* x) {
    if (x->prev) x->prev->next = x->next;
    if (x->next) x->next->prev = x->prev;
    delete x;
}`
            },
            {
              title: "Convert array → linked list (handy for tests)",
              code: `Node* fromArray(vector<int>& a) {
    Node dummy(0);
    Node* tail = &dummy;
    for (int x : a) { tail->next = new Node(x); tail = tail->next; }
    return dummy.next;
}`
            }
          ],
          complexity: { time: "Access O(n); insert/delete given pointer O(1) (doubly) or O(prev-walk) (singly); search O(n)", space: "O(n) — extra pointer per node (2× or 3× array memory)" },
          keyPoints: [
            "A linked list is a chain of nodes; access is O(n) but pointer-known insertion/deletion is fast.",
            "Singly LL: each node has value + next. Doubly LL: also has prev — enables O(1) deletion.",
            "Insert at HEAD is always O(1). Insert at TAIL is O(1) only with a tail pointer.",
            "Deleting a node in a singly LL requires the previous node — use a dummy sentinel to avoid edge cases.",
            "Two-pointer (slow/fast) is the canonical linked-list pattern: find middle, detect cycle, find N-th-from-end.",
            "Doubly linked structure underpins std::list and the ends of std::deque.",
            "Cache behaviour is poor (nodes scattered) — std::vector beats std::list for almost every real workload.",
            "Interview problems lean heavily on linked lists because they force pointer-thinking."
          ],
          pitfalls: [
            "Forgetting to update the head pointer when inserting before it — use a dummy node to dodge this.",
            "Memory leaks: deleting a node but forgetting delete on the node itself.",
            "Null-dereferencing — always check p && p->next before p->next->something.",
            "Dangling pointers — after delete p, p still 'exists' but points to freed memory. Set to nullptr.",
            "Reversing a list while traversing it — you'll lose access to next unless you save it first.",
            "Comparing nodes by value when you should compare by address (or vice-versa) — pick one model and stick with it."
          ],
          videoId: "Crqgl10aIGQ",
          videoSearch: "linked list singly doubly"
        },
        {
          name: "Floyd's Cycle Detection & LL Reversal",
          explanation: `Two of the most asked linked-list interview questions: "is there a cycle?" and "reverse this list". Both have elegant O(n)-time / O(1)-space solutions that you should be able to write from memory. They're built on the slow/fast two-pointer idiom and an in-place pointer rewiring pattern.

## Floyd's tortoise and hare — cycle detection

A list has a cycle if some node's next points back to an earlier node, so traversal would loop forever. Floyd's algorithm runs two pointers at different speeds:

slow = head, fast = head;
while fast and fast->next:
    slow = slow->next;
    fast = fast->next->next;
    if slow == fast: return CYCLE;
return NO_CYCLE;

Why it works: if there's a cycle of length C, once both pointers are inside the cycle, the distance between them changes by 1 each step (fast gains 1 on slow). Within C steps they MUST meet. If there's no cycle, fast hits nullptr.

O(n) time, O(1) space — the gold standard. A hash-set version exists (store visited nodes, check membership) — same asymptotic time but O(n) space and slower constants.

## Find where the cycle BEGINS

Sometimes you want not just "is there a cycle" but "what node is the start of the cycle". Floyd's gives you that too. After slow and fast meet inside the cycle, reset slow to head and step both one at a time — they meet at the cycle's entry node.

The proof is a short bit of modular arithmetic about the distances; the key fact is "step both one at a time after the meeting" — that's all you need to remember.

## Iterative reverse — in place, O(n) / O(1)

The crown jewel of linked-list interviews. You walk the list once, flipping each node's next pointer to point to the PREVIOUS node.

Node* reverse(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    while (curr) {
        Node* next = curr->next;       // save before we overwrite
        curr->next = prev;              // flip
        prev = curr;
        curr = next;
    }
    return prev;                        // prev is the new head
}

Three pointers (prev, curr, next), one pass, no extra memory. Memorise this.

## Recursive reverse

For pointer-thinking practice. Recurse to the end, then on the way back rewire.

Node* reverseRec(Node* head) {
    if (!head || !head->next) return head;
    Node* rest = reverseRec(head->next);
    head->next->next = head;
    head->next = nullptr;
    return rest;
}

Same O(n) time, but O(n) stack — worse than iterative for big lists.

## Reverse a sub-section (Reverse Between)

When the problem says "reverse nodes from position m to n", use a dummy sentinel + walk to position m-1 + reverse n-m+1 nodes + reconnect. The dummy avoids special-casing m=1.

## Reverse in groups of K

A classic harder version. Walk K nodes, reverse them, stitch the reversed segment back into the chain, recurse on the rest. If fewer than K remain, leave them alone (or reverse, depending on the problem variant).

## Combining the patterns

Many "harder" linked-list problems are these two patterns glued together:
- Palindrome check: find middle (slow/fast) + reverse second half + compare halves.
- Reorder list: find middle + reverse second half + interleave halves.
- Detect intersection: count lengths via two passes, align pointers, walk together.

Get cycle detection and in-place reverse fluent — most LL problems collapse into one of these moves.`,
          codeBlocks: [
            {
              title: "Floyd's cycle detection",
              code: `bool hasCycle(Node* head) {
    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`
            },
            {
              title: "Find the start of the cycle (Linked List Cycle II)",
              code: `Node* cycleStart(Node* head) {
    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            slow = head;
            while (slow != fast) { slow = slow->next; fast = fast->next; }
            return slow;
        }
    }
    return nullptr;
}`
            },
            {
              title: "Iterative reverse — three-pointer template",
              code: `Node* reverse(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    while (curr) {
        Node* next = curr->next;       // save next
        curr->next = prev;              // flip
        prev = curr;                    // advance prev
        curr = next;                    // advance curr
    }
    return prev;
}`
            },
            {
              title: "Recursive reverse",
              code: `Node* reverseRec(Node* head) {
    if (!head || !head->next) return head;
    Node* newHead = reverseRec(head->next);
    head->next->next = head;
    head->next = nullptr;
    return newHead;
}`
            },
            {
              title: "Reverse between positions m and n",
              code: `Node* reverseBetween(Node* head, int m, int n) {
    Node dummy(0);
    dummy.next = head;
    Node* prev = &dummy;
    for (int i = 1; i < m; i++) prev = prev->next;   // node before position m
    Node* curr = prev->next;
    for (int i = 0; i < n - m; i++) {
        Node* moved = curr->next;
        curr->next  = moved->next;
        moved->next = prev->next;
        prev->next  = moved;
    }
    return dummy.next;
}`
            },
            {
              title: "Palindrome check — find middle, reverse, compare",
              code: `bool isPalindrome(Node* head) {
    // 1) find middle
    Node *slow = head, *fast = head;
    while (fast && fast->next) { slow = slow->next; fast = fast->next->next; }
    // 2) reverse from slow
    Node *prev = nullptr, *curr = slow;
    while (curr) { Node* n = curr->next; curr->next = prev; prev = curr; curr = n; }
    // 3) compare
    Node *p = head, *q = prev;
    while (q) { if (p->val != q->val) return false; p = p->next; q = q->next; }
    return true;
}`
            }
          ],
          complexity: { time: "Cycle detection O(n); reverse O(n)", space: "O(1) iterative; O(n) recursive (stack)" },
          keyPoints: [
            "Floyd's tortoise and hare detects cycles in O(n) time, O(1) space — gold standard.",
            "After slow == fast inside a cycle, reset slow to head; they meet again at the cycle's entry.",
            "Iterative reverse uses three pointers: prev, curr, next. Save next BEFORE flipping.",
            "Recursive reverse is elegant but O(n) stack — iterative is safer for big lists.",
            "Always use a dummy sentinel for problems that may modify the head — avoids null-head corner cases.",
            "Palindrome / reorder / detect-intersection problems all combine cycle/reverse/middle tricks.",
            "Slow/fast pointer also finds the MIDDLE: when fast hits end, slow is at the middle node.",
            "Reverse in K-groups = walk K, reverse, stitch, recurse — combine the basic patterns."
          ],
          pitfalls: [
            "Forgetting the fast && fast->next guard — fast->next->next null-dereferences if fast->next is null.",
            "In iterative reverse, forgetting to save next before flipping curr->next loses the rest of the list.",
            "Recursive reverse on a 10⁶-node list overflows the stack.",
            "Returning curr (not prev) from iterative reverse — curr is nullptr at the end; prev is the new head.",
            "Comparing pointers (==) when you mean values (->val == ->val), or vice versa.",
            "After reversing a sub-section, forgetting to relink the head and tail of the segment — the chain breaks."
          ],
          videoId: "Fj1ywT9ETQk",
          videoSearch: "floyd cycle detection linked list reversal"
        },
        {
          name: "Stack (LIFO, implementations)",
          explanation: `A stack is a Last-In-First-Out (LIFO) container. You push values on top and pop them off the top — the most recently pushed value is always the next one out. Think of a stack of plates: you take from the top, you put on the top, you never reach into the middle.

Despite being one of the simplest data structures, the stack underpins a huge fraction of algorithms — every recursive function uses one (the call stack), every DFS uses one (explicitly or implicitly), every expression evaluator uses one, and the "monotonic stack" trick solves a whole category of array problems in O(n).

## The operations

push(x)   — add x to the top. O(1).
pop()     — remove the top element. O(1).
top()     — peek at the top without removing. O(1).
empty()   — true if no elements. O(1).
size()    — number of elements. O(1).

Notice the asymmetry with queues — a stack has access to ONE end only. That's the whole definition.

## std::stack — the C++ STL stack

#include <stack>
stack<int> s;
s.push(3); s.push(7); s.push(1);
cout << s.top();          // 1
s.pop();
cout << s.top();          // 7
cout << s.size();         // 2

std::stack is a CONTAINER ADAPTER — it's a wrapper around another container (default: deque). All it does is restrict the interface to push/pop/top.

WARNING: in C++, s.pop() does NOT return the popped value. Use top() first, then pop(). This catches everyone the first time.

int x = s.top(); s.pop();    // C++ idiom for "pop and use"

## Implementation #1 — array-backed

The simplest stack: a fixed-size array + an integer top index. push writes to a[top++]; pop reads from a[--top]; top peeks at a[top-1]. Constant time for everything, no allocation per push.

class ArrayStack {
    int a[100], top = 0;
public:
    void push(int x) { a[top++] = x; }
    int  pop()       { return a[--top]; }
    int  peek()      { return a[top - 1]; }
    bool empty()     { return top == 0; }
};

Fixed capacity, but trivially extended to a vector for dynamic size.

## Implementation #2 — linked-list-backed

Each node has value + next. push creates a new node whose next is the old head; pop returns the head and moves head to head->next. Same O(1), more allocation overhead, worse cache behaviour. Useful when you can't predict the maximum size and don't want amortised resizes.

## The call stack — the most important stack you'll ever use

Every function call pushes a stack frame: local variables, parameters, return address. Every return pops one. Recursion just keeps pushing frames until the base case returns.

Recursion depth = stack frames in use = O(depth) memory. That's why deep recursion overflows: the call stack is fixed at 1–8 MB.

You can manually replace recursion with an explicit stack — same algorithm, more control over memory, no overflow worry. We'll see this in iterative DFS.

## Classic stack problems

- **Balanced brackets** — push openers, pop on closer and check match.
- **Infix → postfix conversion (Shunting Yard)** — operator precedence on a stack.
- **Postfix evaluation** — push operands, pop two on operator, push result.
- **Next Greater Element / Daily Temperatures** — monotonic stack pattern (next concept).
- **Largest Rectangle in Histogram** — monotonic stack.
- **Min Stack** — a stack that also returns the minimum element in O(1).
- **Iterative DFS** — replace recursion with an explicit stack.

## When to reach for a stack

The trigger: "I need to remember the most recent thing(s) and process them in reverse order." Bracket matching, undo histories, backtracking-style exploration, and reverse traversal of a structure are all instances.`,
          codeBlocks: [
            {
              title: "std::stack — basic operations",
              code: `#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;
    s.push(3);
    s.push(7);
    s.push(1);
    cout << s.top()  << "\\n";   // 1
    s.pop();
    cout << s.top()  << "\\n";   // 7
    cout << s.size() << "\\n";   // 2
}`
            },
            {
              title: "Array-backed stack from scratch",
              code: `template<int N>
class ArrayStack {
    int a[N];
    int topIdx = 0;
public:
    void push(int x) { if (topIdx < N) a[topIdx++] = x; }
    int  pop()       { return a[--topIdx]; }
    int  top() const { return a[topIdx - 1]; }
    bool empty() const { return topIdx == 0; }
    int  size()  const { return topIdx; }
};`
            },
            {
              title: "Balanced brackets — the canonical stack problem",
              code: `bool isBalanced(const string& s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') st.push(c);
        else {
            if (st.empty()) return false;
            char top = st.top(); st.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) return false;
        }
    }
    return st.empty();
}`
            },
            {
              title: "Min Stack — top + min both in O(1)",
              code: `class MinStack {
    stack<int> vals, mins;
public:
    void push(int x) {
        vals.push(x);
        mins.push(mins.empty() ? x : min(x, mins.top()));
    }
    void pop()  { vals.pop(); mins.pop(); }
    int top()   { return vals.top(); }
    int getMin(){ return mins.top(); }
};`
            },
            {
              title: "Iterative DFS on a graph (explicit stack)",
              code: `void dfsIter(int start, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<bool> visited(n, false);
    stack<int> st;
    st.push(start);
    while (!st.empty()) {
        int u = st.top(); st.pop();
        if (visited[u]) continue;
        visited[u] = true;
        cout << u << " ";
        for (int v : adj[u]) if (!visited[v]) st.push(v);
    }
}`
            },
            {
              title: "Reverse a string with a stack (toy example)",
              code: `string reverse(const string& s) {
    stack<char> st;
    for (char c : s) st.push(c);
    string out;
    while (!st.empty()) { out.push_back(st.top()); st.pop(); }
    return out;
}`
            }
          ],
          complexity: { time: "push/pop/top/empty/size all O(1)", space: "O(n)" },
          keyPoints: [
            "Stack = LIFO. Last in, first out. Access is to one end only (the 'top').",
            "All operations (push, pop, top, empty, size) are O(1).",
            "std::stack is a container adapter — pass any container (deque, vector, list) as the underlying.",
            "s.pop() in C++ does NOT return the value — call s.top() first to read it.",
            "Implementable with an array + top index (fastest) or a linked list (dynamic size).",
            "The function call stack is the most important stack: recursion uses it implicitly.",
            "Convert recursion → iteration by managing the stack yourself — avoids stack-overflow risk.",
            "Pattern triggers: bracket matching, expression evaluation, undo histories, backtracking, iterative DFS, monotonic-stack problems."
          ],
          pitfalls: [
            "Treating s.pop() as a value-returning op — it returns void in C++. Call top() then pop().",
            "Calling top() or pop() on an empty stack — undefined behaviour. Always check empty().",
            "Array-backed stack with fixed capacity: pushing past the limit silently corrupts memory.",
            "Forgetting to clear or rebuild the stack between test cases — leftover state from previous runs.",
            "Confusing push/pop on a vector (back/back) with on a stack (top/top) — both work, just different idioms.",
            "Using a stack where a queue is needed (or vice versa) — confirm the order requirements before coding."
          ],
          videoId: "JvuaAgDar1c",
          videoSearch: "stack data structure c++"
        },
        {
          name: "Queue & Deque",
          explanation: `A queue is a First-In-First-Out (FIFO) container. You enqueue at the BACK and dequeue from the FRONT — the opposite of a stack. A deque (double-ended queue) generalises this with O(1) operations on BOTH ends. Together they power BFS, scheduling, sliding window, monotonic deque, and dozens of stream-processing patterns.

## The queue operations

push(x) / enqueue(x)   — add x to the back. O(1).
pop()    / dequeue()   — remove the front element. O(1).
front()                — peek at the front without removing. O(1).
back()                 — peek at the back without removing. O(1).
empty() / size()       — O(1).

In std::queue (an STL container adapter wrapping a deque), the names are push/pop/front/back/empty/size. Like stack, queue's pop() returns void — read front() first.

## std::queue — basic FIFO

#include <queue>
queue<int> q;
q.push(10); q.push(20); q.push(30);
cout << q.front();        // 10
q.pop();
cout << q.front();        // 20
cout << q.back();         // 30

Default underlying container is deque. For FIFO use, that's optimal.

## std::deque — double-ended queue

#include <deque>
deque<int> dq;
dq.push_back(10); dq.push_front(5); dq.push_back(20);
// dq is now: [5, 10, 20]
dq.pop_front();           // [10, 20]
dq.pop_back();            // [10]
cout << dq.front() << " " << dq.back();  // 10 10

Deque also supports random access (dq[i]) and iteration, so it's more flexible than std::queue. In modern C++, when in doubt, reach for deque — it's a queue, a stack, and an array all in one.

## Why deque is fast

Internally, deque is a sequence of fixed-size blocks, each holding several elements. Push/pop at either end only touches the boundary block. Random access does an extra indirection (block lookup + offset) but is still O(1).

This blockwise design is why deque is much faster than list for the same operations — better cache behaviour, no per-element allocation.

## Implementing a queue from arrays — the circular buffer

A naive array queue that uses one end for push and the other for pop wastes memory: after enough pops, the "live" region drifts and you have to copy. Solution: circular buffer. Use two indices (head, tail) that wrap around modulo capacity.

class CircularQueue {
    vector<int> buf;
    int head = 0, tail = 0, count = 0;
public:
    CircularQueue(int n) : buf(n) {}
    void push(int x) { buf[tail] = x; tail = (tail + 1) % buf.size(); count++; }
    int  pop()       { int x = buf[head]; head = (head + 1) % buf.size(); count--; return x; }
};

## Priority queue (preview)

std::priority_queue is a heap, not a FIFO queue. The "highest priority" element comes out next, not the oldest. Default is a max-heap (largest first). We'll cover it next week with trees and heaps.

## Classic queue/deque problems

- **BFS on a graph** — the canonical use of queue. Push neighbours, pop in order.
- **Level-order traversal of a tree** — queue holds the current level's nodes.
- **Sliding window maximum** — monotonic deque maintains candidates for the max.
- **First Non-Repeating Character in a Stream** — queue of characters seen exactly once.
- **Rotting Oranges / 01 Matrix / Walls and Gates** — multi-source BFS, all using queues.
- **Number of Islands (BFS variant)** — queue holds cells to process.

## When to use a deque vs a queue vs a stack

Queue when you need FIFO and only FIFO. Stack when you need LIFO. Deque when you need either end (or both), or when you want random access AND fast push/pop on the ends. Most BFS code uses queue; most monotonic-window code uses deque.`,
          codeBlocks: [
            {
              title: "std::queue — FIFO basics",
              code: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(10); q.push(20); q.push(30);
    cout << q.front() << "\\n";   // 10
    cout << q.back()  << "\\n";   // 30
    q.pop();
    cout << q.front() << "\\n";   // 20
    cout << q.size() << "\\n";    // 2
}`
            },
            {
              title: "std::deque — push/pop on both ends",
              code: `#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq;
    dq.push_back(10);
    dq.push_front(5);
    dq.push_back(20);
    // dq is now [5, 10, 20]
    for (int x : dq) cout << x << " ";
    cout << "\\n";
    dq.pop_front();              // [10, 20]
    dq.pop_back();               // [10]
    cout << dq[0] << "\\n";       // 10
}`
            },
            {
              title: "BFS on a graph (queue is the engine)",
              code: `void bfs(int start, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<bool> visited(n, false);
    queue<int> q;
    q.push(start);
    visited[start] = true;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        cout << u << " ";
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`
            },
            {
              title: "Circular buffer queue from scratch",
              code: `class CircularQueue {
    vector<int> buf;
    int head = 0, tail = 0, count = 0;
public:
    CircularQueue(int n) : buf(n) {}
    bool push(int x) {
        if (count == (int)buf.size()) return false;
        buf[tail] = x;
        tail = (tail + 1) % buf.size();
        count++;
        return true;
    }
    bool pop() {
        if (count == 0) return false;
        head = (head + 1) % buf.size();
        count--;
        return true;
    }
    int front() { return buf[head]; }
    bool empty() { return count == 0; }
};`
            },
            {
              title: "Sliding window maximum with a monotonic deque",
              code: `// For each window of size k, output the maximum. Each element enters & leaves once → O(n).
vector<int> maxWindow(vector<int>& a, int k) {
    deque<int> dq;                    // stores indices; values decreasing front→back
    vector<int> out;
    for (int i = 0; i < (int)a.size(); i++) {
        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
        dq.push_back(i);
        if (dq.front() <= i - k) dq.pop_front();
        if (i >= k - 1) out.push_back(a[dq.front()]);
    }
    return out;
}`
            },
            {
              title: "Implement stack with two queues (interview classic)",
              code: `class StackFromQueues {
    queue<int> q1, q2;
public:
    void push(int x) {
        q2.push(x);
        while (!q1.empty()) { q2.push(q1.front()); q1.pop(); }
        swap(q1, q2);
    }
    int top()  { return q1.front(); }
    void pop() { q1.pop(); }
    bool empty() { return q1.empty(); }
};`
            }
          ],
          complexity: { time: "queue and deque push/pop/front/back all O(1); deque random access O(1)", space: "O(n)" },
          keyPoints: [
            "Queue = FIFO. Enqueue at back, dequeue at front.",
            "Deque = double-ended. O(1) push and pop on BOTH ends, plus O(1) random access.",
            "All STL queue/deque operations are O(1) amortised; deque internally uses fixed-size blocks.",
            "std::queue's pop() returns void — call front() first.",
            "BFS is the canonical queue algorithm: explore by distance from the source.",
            "Sliding window problems use a deque to keep candidates (e.g. max/min) in monotonic order — O(n) total.",
            "Circular buffer is the array-based implementation: two indices that wrap modulo capacity.",
            "When in doubt between queue/stack/array → deque. It's the Swiss army knife of sequence containers."
          ],
          pitfalls: [
            "Calling pop() on an empty queue / deque is undefined behaviour — guard with empty().",
            "Treating q.pop() as if it returns the popped value (it returns void in C++).",
            "Using vector as a queue: vec.erase(vec.begin()) is O(n) — slow. Use deque or queue.",
            "Forgetting to mark a node visited BEFORE pushing it onto the BFS queue — same node enqueued multiple times.",
            "In a monotonic deque, popping the wrong end — the structure breaks; trace the invariants.",
            "Mixing front/back semantics between stack (top only) and queue (front + back) — read the spec carefully."
          ],
          videoId: "fbonDkYsKj0",
          videoSearch: "queue deque c++"
        },
        {
          name: "Monotonic Stack/Queue + Expression Evaluation",
          explanation: `"Monotonic stack" and "monotonic deque" are two of the highest-leverage patterns in DSA — they turn a category of O(n²) brute-force scans into clean O(n) sweeps. Bracketed with these, expression-evaluation problems (postfix evaluation, infix conversion) round out the classic stack-application toolkit.

## Monotonic stack — the idea

A monotonic stack maintains its elements in sorted order (either strictly increasing or strictly decreasing from bottom to top). Whenever a new element would violate the order, you pop until it doesn't. Each element is pushed and popped at most once → O(n) total.

The pattern unlocks all the "next greater / next smaller" problems and the histograms problem. The recipe:

stack<int> st;          // stores indices (usually)
for each i in [0, n):
    while (!st.empty() && breaks_monotonicity(a[st.top()], a[i])):
        do_work_for(st.top());        // settle the popped element
        st.pop();
    st.push(i);

## Next Greater Element — the canonical example

For each element, find the next strictly-greater element to its right. Brute force: O(n²). With a monotonic decreasing stack: O(n).

vector<int> nextGreater(vector<int>& a) {
    int n = a.size();
    vector<int> ans(n, -1);
    stack<int> st;        // indices, values DECREASING from bottom to top
    for (int i = 0; i < n; i++) {
        while (!st.empty() && a[st.top()] < a[i]) {
            ans[st.top()] = a[i];     // a[i] is i's next greater
            st.pop();
        }
        st.push(i);
    }
    return ans;
}

## Variants

- **Next Smaller Element** — flip the comparison.
- **Previous Greater / Smaller** — walk from the LEFT or process in reverse.
- **Daily Temperatures** — for each day, days-until-warmer. Same algorithm.
- **Stock Span** — for each day, consecutive days of ≤ price (mirror direction).
- **Largest Rectangle in Histogram** — combine previous-smaller-left + next-smaller-right.

## Monotonic deque — for sliding window max/min

The stack version processes "from left, find on right". For SLIDING WINDOWS the queue version works the same but with a deque so you can pop from either end.

deque<int> dq;        // stores indices, values DECREASING front→back
for each i in [0, n):
    while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
    dq.push_back(i);
    if (dq.front() <= i - k) dq.pop_front();
    if (i >= k - 1) record(a[dq.front()]);     // window max

Same O(n) total amortised: each index enters and leaves once.

## Expression evaluation — postfix

Postfix (Reverse Polish Notation) is the simplest arithmetic to evaluate. There are NO precedence rules and NO parentheses — order is fully determined by position.

"3 4 + 5 *"   means  ((3 + 4) * 5) = 35

Algorithm: walk the tokens. Push numbers. On an operator, pop the top two, apply, push the result.

int evalPostfix(vector<string>& toks) {
    stack<int> st;
    for (auto& t : toks) {
        if (isOperator(t)) {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();
            if (t == "+") st.push(a + b);
            else if (t == "-") st.push(a - b);
            else if (t == "*") st.push(a * b);
            else               st.push(a / b);
        } else {
            st.push(stoi(t));
        }
    }
    return st.top();
}

## Infix → Postfix — the Shunting Yard algorithm

Standard human-written math is infix: "3 + 4 * 5". Converting to postfix lets you evaluate without juggling precedence. Dijkstra's Shunting Yard algorithm uses two structures — an output queue and an operator stack:

For each token:
  if number    → output
  if operator  → while top-of-stack has >= precedence, pop to output. Push current.
  if '('       → push.
  if ')'       → pop to output until '('. Discard the '('.
At end, pop remaining operators to output.

The output is the postfix form. Then evaluate with the algorithm above.

## When to reach for monotonic stack/queue

The trigger phrase is "for each i, find the next ___ to its left/right that satisfies ___". Or "in a sliding window of size k, what's the max/min/median". Once you spot it, the algorithm is mechanical.`,
          codeBlocks: [
            {
              title: "Next Greater Element — monotonic stack template",
              code: `vector<int> nextGreater(vector<int>& a) {
    int n = a.size();
    vector<int> ans(n, -1);
    stack<int> st;                       // indices, values DECREASING bottom→top
    for (int i = 0; i < n; i++) {
        while (!st.empty() && a[st.top()] < a[i]) {
            ans[st.top()] = a[i];
            st.pop();
        }
        st.push(i);
    }
    return ans;
}`
            },
            {
              title: "Daily Temperatures — same algorithm, return indices",
              code: `vector<int> daysUntilWarmer(vector<int>& t) {
    int n = t.size();
    vector<int> ans(n, 0);
    stack<int> st;
    for (int i = 0; i < n; i++) {
        while (!st.empty() && t[st.top()] < t[i]) {
            ans[st.top()] = i - st.top();
            st.pop();
        }
        st.push(i);
    }
    return ans;
}`
            },
            {
              title: "Largest Rectangle in Histogram — two monotonic passes",
              code: `int largestRectangle(vector<int>& h) {
    h.push_back(0);                       // sentinel forces all pops
    stack<int> st;
    int best = 0;
    for (int i = 0; i < (int)h.size(); i++) {
        while (!st.empty() && h[st.top()] > h[i]) {
            int top = st.top(); st.pop();
            int width = st.empty() ? i : i - st.top() - 1;
            best = max(best, h[top] * width);
        }
        st.push(i);
    }
    return best;
}`
            },
            {
              title: "Sliding Window Maximum (monotonic deque)",
              code: `vector<int> maxWindow(vector<int>& a, int k) {
    deque<int> dq;
    vector<int> out;
    for (int i = 0; i < (int)a.size(); i++) {
        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
        dq.push_back(i);
        if (dq.front() <= i - k) dq.pop_front();
        if (i >= k - 1) out.push_back(a[dq.front()]);
    }
    return out;
}`
            },
            {
              title: "Evaluate postfix (Reverse Polish Notation)",
              code: `int evalPostfix(vector<string>& toks) {
    stack<int> st;
    for (auto& t : toks) {
        if (t == "+" || t == "-" || t == "*" || t == "/") {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();
            if (t == "+") st.push(a + b);
            else if (t == "-") st.push(a - b);
            else if (t == "*") st.push(a * b);
            else               st.push(a / b);
        } else {
            st.push(stoi(t));
        }
    }
    return st.top();
}`
            },
            {
              title: "Infix → Postfix (Shunting Yard, simplified for + - * /)",
              code: `int prec(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

string toPostfix(const string& s) {
    string out;
    stack<char> ops;
    for (char c : s) {
        if (isdigit(c)) out.push_back(c);
        else if (c == '(') ops.push(c);
        else if (c == ')') {
            while (!ops.empty() && ops.top() != '(') { out.push_back(ops.top()); ops.pop(); }
            ops.pop();
        } else {                          // operator
            while (!ops.empty() && prec(ops.top()) >= prec(c)) { out.push_back(ops.top()); ops.pop(); }
            ops.push(c);
        }
    }
    while (!ops.empty()) { out.push_back(ops.top()); ops.pop(); }
    return out;
}`
            }
          ],
          complexity: { time: "Monotonic stack/deque: O(n) (each element pushed/popped once); postfix eval O(n); infix→postfix O(n)", space: "O(n) for the auxiliary stack/deque" },
          keyPoints: [
            "A monotonic stack keeps elements in strictly increasing or strictly decreasing order from bottom to top.",
            "Each element pushed/popped at most once → total work is O(n), not O(n²).",
            "Next Greater Element, Daily Temperatures, Stock Span, Largest Rectangle — all monotonic stack.",
            "Monotonic deque is the same idea for SLIDING-WINDOW max/min: pop from back to maintain order, pop from front when out of window.",
            "Postfix (Reverse Polish Notation) has no precedence — push numbers, on operator pop two and apply.",
            "Infix → postfix via Shunting Yard: operator stack + output, governed by precedence.",
            "The trigger phrases: 'next greater/smaller', 'sliding window max/min', 'span'.",
            "Largest Rectangle in Histogram combines previous-smaller-left + next-smaller-right; one pass with a sentinel does it."
          ],
          pitfalls: [
            "Storing values instead of indices on the stack — you lose distance/position info.",
            "Mis-orienting the comparison (< vs <=) — strict vs non-strict changes how ties are handled.",
            "Forgetting to drain the stack at the end (sentinel trick fixes this).",
            "In the deque version, popping from the wrong end — the invariant breaks silently.",
            "Postfix eval with operands popped in the wrong order: it's a then b for binary ops, NOT b then a.",
            "Shunting Yard with unary minus or function calls — needs special cases not shown in the basic algorithm."
          ],
          videoId: "5B6jw4wOJR0",
          videoSearch: "monotonic stack expression evaluation"
        },
        {
          name: "Hashing Fundamentals (hash functions, collisions)",
          explanation: `Hashing is the trick that makes hash maps and hash sets O(1) average. The basic idea: take any input (a string, an int, a struct), pass it through a hash function that produces a fixed-size integer, and use that integer (mod table size) as an index into a backing array. Lookup, insert, and delete all become array indexing — constant time. The reason it works in practice is that good hash functions scatter inputs uniformly, so collisions (two inputs landing in the same slot) are rare.

This concept is about the THEORY: what makes a good hash function, how collisions are handled, and why the average-case O(1) can degrade to O(n).

## What a hash function is

A hash function h takes an input from some universe U (could be all 32-bit ints, all strings, all structs) and produces an integer in [0, M) where M is the table size.

h: U → [0, M)

Two key properties:
1. **Deterministic** — same input always returns the same hash.
2. **Uniform** — outputs should spread evenly across [0, M) for a random set of inputs.

A third nice property: **avalanche** — flipping one input bit should flip about half the output bits. This is what makes adversarial collision-finding hard.

The cost of computing h(x) should be O(|x|): O(1) for ints, O(L) for an L-character string.

## Common hash functions

**Modular hash for integers**: h(x) = x mod M. Works if x is fairly random; terrible if inputs are spaced regularly (multiples of M all collide).

**Multiplicative hash**: h(x) = floor(M * frac(x * A)) for an irrational A like the golden-ratio constant. Smooths out regular inputs.

**Polynomial hash for strings**: h(s) = (s[0]*p^(L-1) + s[1]*p^(L-2) + ... + s[L-1]) mod M for a small prime p (often 31 or 33). std::hash<string> uses something more complex but similar in spirit.

**Cryptographic hashes** (SHA-256, MD5) — overkill for data structures, used for security. Slow.

## Collisions and how to handle them

A collision is when h(x1) == h(x2) for different x1, x2. With M slots and N items, the birthday paradox says you'll hit a collision around N ≈ √M. Two standard ways to cope:

**Chaining** (separate chaining). Each slot holds a linked list (or vector) of all items that hash there. Insert prepends; lookup scans the chain. Average chain length = N / M = load factor α. Lookup is O(1 + α). Most STL implementations of unordered_map use chaining.

**Open addressing** (probing). Each slot holds at most one item. On collision, probe to another slot by a fixed sequence (linear: try slot+1, slot+2, ...; quadratic: try slot+1, slot+4, slot+9, ...; double hashing: jump by a second hash). No extra memory per slot, better cache behaviour, but requires careful deletion (tombstones) and is more sensitive to load factor.

## Load factor and rehashing

Load factor α = N / M. Performance degrades as α grows:
- α < 0.5 — fast, low collision rate
- α ≈ 0.75 — STL's default trigger for rehashing
- α > 1.0 — chaining still works but slow; open addressing is full

When α exceeds the threshold, the table REHASHES: allocate a new table 2× the size, recompute hashes, reinsert everything. That single insert is O(n), but amortised across many inserts it's still O(1).

## Why worst case is O(n)

If many inputs collide (adversarial inputs OR a bad hash function), all items end up in one chain (or one probe sequence), and lookup degrades to O(n) — same as a linear scan. Real-world attacks have exploited this to DoS servers using hash maps with predictable hash functions.

Defence in modern languages: randomise the hash seed per process so an attacker can't pre-compute collisions. C++ doesn't do this by default; competitive coders sometimes provide a custom hasher with a random seed.

## std::hash and how to extend it

std::hash<T> is specialised for the primitives and std::string. For your own struct, you must specialise std::hash<MyStruct> (or pass a hasher as a template arg). The typical pattern is to combine the hashes of the fields:

struct MyHash {
    size_t operator()(const MyStruct& s) const {
        size_t h1 = std::hash<int>{}(s.a);
        size_t h2 = std::hash<string>{}(s.b);
        return h1 ^ (h2 << 1);   // simple combine; better recipes exist (boost::hash_combine)
    }
};

## When to NOT use a hash structure

When you need order — use map/set instead.
When inputs are adversarial — provide a randomised hasher.
When the universe of keys is tiny and dense (e.g. 0..1000) — just use an array. Direct addressing beats hashing.
When memory is constrained — hash tables have overhead (load factor < 1 means wasted slots).`,
          codeBlocks: [
            {
              title: "Polynomial string hash",
              code: `// Treats the string as a base-p number. Mod a large prime.
const int P = 31;
const int MOD = 1'000'000'007;

long long polyHash(const string& s) {
    long long h = 0;
    long long pw = 1;
    for (char c : s) {
        h = (h + (c - 'a' + 1) * pw) % MOD;
        pw = (pw * P) % MOD;
    }
    return h;
}`
            },
            {
              title: "Chained hash table from scratch",
              code: `class ChainHash {
    static const int M = 1024;
    vector<list<pair<int,int>>> table;   // (key, value)
public:
    ChainHash() : table(M) {}
    void set(int key, int val) {
        auto& chain = table[key % M];
        for (auto& [k, v] : chain) if (k == key) { v = val; return; }
        chain.push_back({key, val});
    }
    bool get(int key, int& val) {
        for (auto& [k, v] : table[key % M]) if (k == key) { val = v; return true; }
        return false;
    }
};`
            },
            {
              title: "Open addressing with linear probing",
              code: `class ProbeHash {
    static const int M = 1024;
    vector<int> keys, vals;
    vector<bool> used;
public:
    ProbeHash() : keys(M, 0), vals(M, 0), used(M, false) {}
    void set(int key, int val) {
        int i = key % M;
        while (used[i] && keys[i] != key) i = (i + 1) % M;
        used[i] = true; keys[i] = key; vals[i] = val;
    }
    bool get(int key, int& val) {
        int i = key % M;
        while (used[i]) {
            if (keys[i] == key) { val = vals[i]; return true; }
            i = (i + 1) % M;
        }
        return false;
    }
};`
            },
            {
              title: "Custom hash for std::pair to use in unordered_set/map",
              code: `struct PairHash {
    template<class T1, class T2>
    size_t operator()(const pair<T1, T2>& p) const {
        size_t h1 = hash<T1>{}(p.first);
        size_t h2 = hash<T2>{}(p.second);
        return h1 ^ (h2 + 0x9e3779b9 + (h1 << 6) + (h1 >> 2));   // boost::hash_combine
    }
};

unordered_set<pair<int,int>, PairHash> seen;
seen.insert({3, 4});`
            },
            {
              title: "Randomised hash to defend against adversarial inputs",
              code: `struct SaltedHash {
    static const uint64_t SALT;
    size_t operator()(uint64_t x) const {
        x = (x ^ SALT) * 0xbf58476d1ce4e5b9ULL;
        x = (x ^ (x >> 31));
        return x;
    }
};
const uint64_t SaltedHash::SALT =
    chrono::steady_clock::now().time_since_epoch().count();

unordered_set<uint64_t, SaltedHash> s;`
            },
            {
              title: "Direct addressing — when keys are small ints, beat hashing",
              code: `// If keys are in [0, 1000], a plain array is faster than any hash table.
const int N = 1001;
int present[N] = {0};                  // present[k] = count of key k
void add(int k) { present[k]++; }
int  count(int k) { return present[k]; }`
            }
          ],
          complexity: { time: "Insert/lookup/delete O(1) average; O(n) worst case (collisions)", space: "O(M) table + O(n) entries; typical α = 0.75" },
          keyPoints: [
            "A hash function maps keys to integers in [0, M); good ones are deterministic and uniform.",
            "Chaining: each slot holds a list of colliders — handles any load factor, simple.",
            "Open addressing: probe to next slot on collision — better cache, more sensitive to load.",
            "Load factor α = N / M; rehash (double M, reinsert all) when α exceeds ~0.75.",
            "Average O(1); worst case O(n) when all keys collide — guard against adversarial inputs.",
            "std::hash is specialised for primitives and std::string; provide your own for custom types.",
            "Use a 'boost::hash_combine' style mixer when hashing multiple fields together.",
            "For tiny dense key ranges, a plain array (direct addressing) beats any hash table."
          ],
          pitfalls: [
            "Using a bad hash like x % small_prime — regular inputs collide catastrophically.",
            "Forgetting that unordered_map's worst case is O(n) per op — TLE on adversarial inputs.",
            "Custom hash that produces all zeros for some inputs — silent perf disaster.",
            "Modifying an object after inserting it into a hash structure — its hash changes; lookups fail.",
            "Using floats as hash keys — equality is unreliable; round or use a tolerance.",
            "Open-addressing delete without tombstones — leaves a hole that breaks probe sequences."
          ],
          videoId: "0kfM_YEzR94",
          videoSearch: "hashing hash table collisions"
        },
        {
          name: "Frequency Counting & Lookup Patterns",
          explanation: `Once you have unordered_map and unordered_set in your toolkit, an enormous number of array/string problems collapse from O(n²) brute force to O(n) hash-table solutions. The trick is usually the same: as you walk the array, build a small lookup structure that lets the NEXT element answer its question in O(1).

This concept catalogues the half-dozen recurring patterns. Recognise the pattern, write 10 lines of code, done.

## Pattern 1 — Frequency table

Count occurrences of each value. Use map (for sorted output) or unordered_map (for raw speed). The map[k]++ idiom auto-inserts missing keys at 0.

unordered_map<int,int> cnt;
for (int x : a) cnt[x]++;

Applications:
- Majority element (count > n/2).
- Most frequent element (max over the map).
- Anagram check (compare frequency tables).
- Top-K frequent (frequency table + bucket sort or heap).
- Sort characters by frequency.

## Pattern 2 — Seen-before set

Walk the array once. For each element, check if you've seen it (or something complementary). Update the set.

unordered_set<int> seen;
for (int x : a) {
    if (seen.count(needed_for(x))) return YES;
    seen.insert(x);
}

Applications:
- Contains Duplicate.
- Happy Number (cycle detection on the digit-square sequence).
- Longest Substring Without Repeating Characters (sliding window + set).
- First non-repeating character (frequency table + scan).

## Pattern 3 — Value → index map (last-seen / first-seen)

Same as seen-before but you also remember WHERE you saw it. Lets you answer "complementary" or "distance" questions.

unordered_map<int,int> idx;
for (int i = 0; i < n; i++) {
    int need = target - a[i];
    if (idx.count(need)) return { idx[need], i };
    idx[a[i]] = i;
}

This is the Two Sum template. Variants:
- Contains Nearby Duplicate (index distance ≤ k).
- Longest substring with k distinct (sliding window + map of char→count).
- Subarray sum equals K (map of prefix sum → first index).

## Pattern 4 — Group by key

Bucket items into groups based on a derived key.

unordered_map<string, vector<string>> groups;
for (string& s : words) groups[canonical(s)].push_back(s);

Applications:
- Group Anagrams (key = sorted string).
- Group strings by length / first char / hash.
- Group intervals by overlap class.

## Pattern 5 — Two-set intersection / difference

For "elements in both" or "in A but not in B" types of questions.

unordered_set<int> sa(a.begin(), a.end());
vector<int> intersection;
for (int x : b) if (sa.count(x)) intersection.push_back(x);

Applications: Intersection of Two Arrays, Common Elements, Distinct Common Subarray Sums.

## Pattern 6 — Prefix sum + map (the powerful one)

Hash the running PREFIX sum (not the values). Lets you detect "subarray sum equals K" in O(n).

The idea: prefix[i] - prefix[j] = sum of subarray (j+1..i). So we want prefix[i] - K = prefix[j] for some j < i. Look up (prefix[i] - K) in the map of prefix sums seen so far.

int subarraySumK(vector<int>& a, int K) {
    unordered_map<long long, int> seen{{0, 1}};   // empty-prefix sentinel
    long long sum = 0;
    int count = 0;
    for (int x : a) {
        sum += x;
        if (seen.count(sum - K)) count += seen[sum - K];
        seen[sum]++;
    }
    return count;
}

This single pattern solves: Subarray Sum Equals K, Longest Subarray with Sum K, Continuous Subarray Sum divisible by K, Binary Subarray with Sum, and friends.

## Why all this works

A hash structure gives O(1) average lookup. So each pass through n elements costs O(n) — replacing the inner loop of a brute-force O(n²) search. The trade is O(n) extra memory, which is almost always worth it.

## When NOT to use hashing

When you need order — use map/set or sort the array.
When you need range queries — use a Fenwick tree or segment tree.
When the universe of keys is tiny — direct addressing (array) is faster.
When memory is critical — bitset for small sets, or accept the O(n log n) sorted approach.`,
          codeBlocks: [
            {
              title: "Two Sum — value→index map",
              code: `vector<int> twoSum(vector<int>& a, int target) {
    unordered_map<int,int> idx;             // value → index
    for (int i = 0; i < (int)a.size(); i++) {
        int need = target - a[i];
        if (idx.count(need)) return { idx[need], i };
        idx[a[i]] = i;
    }
    return {};
}`
            },
            {
              title: "Valid Anagram — compare frequency tables",
              code: `bool isAnagram(const string& a, const string& b) {
    if (a.size() != b.size()) return false;
    int cnt[26] = {0};
    for (char c : a) cnt[c - 'a']++;
    for (char c : b) if (--cnt[c - 'a'] < 0) return false;
    return true;
}`
            },
            {
              title: "Group Anagrams — group by sorted key",
              code: `vector<vector<string>> groupAnagrams(vector<string>& s) {
    unordered_map<string, vector<string>> g;
    for (auto& w : s) {
        string key = w;
        sort(key.begin(), key.end());
        g[key].push_back(w);
    }
    vector<vector<string>> out;
    for (auto& [_, v] : g) out.push_back(v);
    return out;
}`
            },
            {
              title: "Subarray Sum Equals K — prefix sum + map",
              code: `int subarraySumK(vector<int>& a, int K) {
    unordered_map<long long, int> seen{{0, 1}};   // empty prefix
    long long sum = 0;
    int count = 0;
    for (int x : a) {
        sum += x;
        if (seen.count(sum - K)) count += seen[sum - K];
        seen[sum]++;
    }
    return count;
}`
            },
            {
              title: "Longest Substring Without Repeating Characters",
              code: `int longestUnique(const string& s) {
    unordered_map<char, int> last;          // char → most recent index
    int best = 0, start = 0;
    for (int i = 0; i < (int)s.size(); i++) {
        if (last.count(s[i]) && last[s[i]] >= start)
            start = last[s[i]] + 1;
        last[s[i]] = i;
        best = max(best, i - start + 1);
    }
    return best;
}`
            },
            {
              title: "Top K Frequent Elements — frequency table + heap",
              code: `vector<int> topKFrequent(vector<int>& a, int k) {
    unordered_map<int,int> cnt;
    for (int x : a) cnt[x]++;
    // min-heap of (count, value); keep size k.
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    for (auto& [v, c] : cnt) {
        pq.push({c, v});
        if ((int)pq.size() > k) pq.pop();
    }
    vector<int> out;
    while (!pq.empty()) { out.push_back(pq.top().second); pq.pop(); }
    return out;
}`
            }
          ],
          complexity: { time: "Per scan O(n) with O(1) hash ops; total O(n) for all patterns above", space: "O(n) for the auxiliary map/set" },
          keyPoints: [
            "Frequency table: cnt[x]++ in a single pass — anagram, majority, top-K all use this.",
            "Seen-before set: walk array, ask 'have I seen the complement?' — Two Sum is the template.",
            "Value→index map remembers WHERE you saw each value — solves distance / pairing problems.",
            "Group by key: bucket items via map<Key, vector<Item>> — anagrams, scheduling.",
            "Prefix sum + map is the killer pattern for subarray-sum questions: O(n) instead of O(n²) or O(n³).",
            "Replace the inner O(n) loop of a brute-force solution with an O(1) hash lookup — universal speedup.",
            "When keys are characters or small ints, a fixed array beats unordered_map — direct addressing.",
            "When ORDER matters, switch to map (sorted) — same patterns, O(log n) per op."
          ],
          pitfalls: [
            "Using m[k] to test presence — accidentally inserts k with value 0. Use count() or find().",
            "Forgetting the {0, 1} sentinel in prefix-sum-map — misses subarrays starting at index 0.",
            "Comparing character frequency tables of different lengths — different sizes are never anagrams.",
            "Using sorted-string as a key (for anagrams) is fine, but O(L log L) per word — fine for short strings.",
            "Hash structure with custom struct keys — needs std::hash specialisation, not just operator==.",
            "Modifying a key after insertion — its hash changes; lookups fail silently."
          ],
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
          explanation: `A tree is a connected, acyclic, hierarchical structure. One node sits at the top (the root); each node has zero or more children. A BINARY tree is the special case where every node has at most two children, conventionally called LEFT and RIGHT. Binary trees are the foundation for binary search trees, heaps, expression trees, decision trees, segment trees, tries — basically half of all non-trivial data structures.

This concept is about the vocabulary and the standard node representation. Get fluent with the terms; the rest of the week assumes them.

## The vocabulary

**Node** — a single element holding a value and pointers to its children.
**Root** — the topmost node. The only node with no parent.
**Leaf** — a node with no children.
**Internal node** — a node with at least one child (i.e. not a leaf).
**Parent / Child** — direct hierarchical neighbours.
**Sibling** — nodes that share a parent.
**Ancestor / Descendant** — reachable by walking UP or DOWN any number of edges.
**Subtree** — a node plus all of its descendants.

## Depth, height, level

**Depth of a node** — number of edges from root to that node. Root has depth 0.
**Height of a node** — number of edges on the longest root-to-leaf path STARTING at that node. Leaves have height 0.
**Height of the tree** — height of the root.
**Level k** — all nodes at depth k.

A tree with n nodes has at LEAST log₂(n+1) - 1 height (balanced) and at MOST n-1 height (skewed like a linked list).

## Special binary trees

**Full binary tree** — every internal node has exactly TWO children (no node has just one).
**Complete binary tree** — every level except possibly the last is fully filled, and the last level is filled left-to-right. (Heaps are complete binary trees.)
**Perfect binary tree** — full AND every leaf is at the same depth. Has exactly 2^(h+1) − 1 nodes.
**Balanced binary tree** — for every node, the heights of its left and right subtrees differ by at most 1 (AVL definition). Guarantees O(log n) height.
**Skewed tree** — every node has only one child. Effectively a linked list. Height n-1, bad performance.

## The standard node representation

struct Node {
    int val;
    Node* left;
    Node* right;
    Node(int v) : val(v), left(nullptr), right(nullptr) {}
};

A nullptr child means "no child here". The pointer-based representation is what we'll use throughout. Array-based representations exist (heaps use one), but pointer trees are the general case.

## Building a tiny tree by hand

Node* root = new Node(1);
root->left  = new Node(2);
root->right = new Node(3);
root->left->left  = new Node(4);
root->left->right = new Node(5);

Visualised:
        1
       / \\
      2   3
     / \\
    4   5

## Recursion on trees — the universal idiom

Trees and recursion are made for each other. The pattern: do something at the current node, recurse on left, recurse on right, combine.

int size(Node* root) {
    if (!root) return 0;
    return 1 + size(root->left) + size(root->right);
}

The base case is always "null pointer → return zero / base value". The recursive case is "this node + result from left subtree + result from right subtree".

This shape — combine the answers from your children — is called POST-ORDER RECURSION and is the engine behind most tree algorithms.

## Why trees are everywhere

File systems, DOM trees, expression parse trees, organisation charts, scene graphs in 3D rendering — all hierarchies. Plus the data-structure family: BST (sorted), heap (priority), trie (string prefixes), segment / Fenwick (range queries), B-tree (databases), AVL / Red-Black (balanced BSTs).

For interviews, every tree problem is a recursion problem in disguise. Get comfortable writing 4-line recursive solutions and you've solved 90% of the chapter.`,
          codeBlocks: [
            {
              title: "Node definition + build a tree by hand",
              code: `struct Node {
    int val;
    Node* left;
    Node* right;
    Node(int v) : val(v), left(nullptr), right(nullptr) {}
};

int main() {
    Node* root = new Node(1);
    root->left  = new Node(2);
    root->right = new Node(3);
    root->left->left  = new Node(4);
    root->left->right = new Node(5);
    // tree is:
    //        1
    //       / \\
    //      2   3
    //     / \\
    //    4   5
}`
            },
            {
              title: "Count nodes — the simplest recursion",
              code: `int size(Node* root) {
    if (!root) return 0;
    return 1 + size(root->left) + size(root->right);
}`
            },
            {
              title: "Count leaves",
              code: `int countLeaves(Node* root) {
    if (!root) return 0;
    if (!root->left && !root->right) return 1;
    return countLeaves(root->left) + countLeaves(root->right);
}`
            },
            {
              title: "Sum of all values",
              code: `int treeSum(Node* root) {
    if (!root) return 0;
    return root->val + treeSum(root->left) + treeSum(root->right);
}`
            },
            {
              title: "Search for a value (returns true/false)",
              code: `bool contains(Node* root, int target) {
    if (!root) return false;
    if (root->val == target) return true;
    return contains(root->left, target) || contains(root->right, target);
}`
            },
            {
              title: "Build from an array (level-order, -1 = null)",
              code: `// Read like a heap: a[0]=root, a[2i+1]=left, a[2i+2]=right.
Node* buildLevel(vector<int>& a, int i) {
    if (i >= (int)a.size() || a[i] == -1) return nullptr;
    Node* n = new Node(a[i]);
    n->left  = buildLevel(a, 2 * i + 1);
    n->right = buildLevel(a, 2 * i + 2);
    return n;
}`
            }
          ],
          complexity: { time: "Most basic traversals are O(n); recursion uses O(h) stack where h is tree height", space: "O(n) for the tree + O(h) recursion" },
          keyPoints: [
            "Binary tree: each node has at most TWO children — conventionally left and right.",
            "Depth of a node = edges from root; height = longest path down to a leaf.",
            "A balanced tree has height O(log n); a skewed tree has height O(n).",
            "Standard representation: a struct/class with value + left pointer + right pointer.",
            "nullptr left/right means 'no child here' — base case for almost every recursion.",
            "Recursive pattern: base case (null), recurse left, recurse right, combine results.",
            "Full / complete / perfect / balanced / skewed — vocabulary that comes up in problem statements.",
            "Trees underpin BST, heap, trie, segment tree, AVL — get fluent with the shape."
          ],
          pitfalls: [
            "Forgetting the if (!root) return base; guard — null-deref crashes.",
            "Confusing depth with height — depth grows DOWN from root; height grows UP from leaves.",
            "Off-by-one between 'nodes' and 'edges' — height counts edges, not nodes.",
            "Building trees by hand without freeing memory — leaks pile up.",
            "Treating left as 'smaller' on a generic binary tree — that's only true for BSTs.",
            "Modifying the tree while recursing over it — invariants break, recursion confuses."
          ],
          videoId: "_jKa4gycZTw",
          videoSearch: "binary tree introduction"
        },
        {
          name: "Tree Traversals (Inorder, Preorder, Postorder)",
          explanation: `A tree traversal visits every node exactly once. For a binary tree there are three classic depth-first orderings — preorder, inorder, postorder — plus a breadth-first one (level order, next concept). The three depth-first orderings differ only in WHERE you visit the current node relative to recursing on left and right.

These are the building blocks of every tree algorithm: serialize/deserialize, expression evaluation, syntax-directed translation, BST validation, DFS-based subtree summaries.

## The three DFS orderings

For each node you do three things in some order: VISIT (process the node), LEFT (recurse on left), RIGHT (recurse on right). Pick the order:

**Preorder**:  VISIT → LEFT → RIGHT
**Inorder**:   LEFT → VISIT → RIGHT
**Postorder**: LEFT → RIGHT → VISIT

That's the whole definition. The "order" word refers to where the VISIT happens.

## On this tree

        1
       / \\
      2   3
     / \\   \\
    4   5   6

- Preorder:  1, 2, 4, 5, 3, 6     (root first, then subtree)
- Inorder:   4, 2, 5, 1, 3, 6     (left subtree, root, right subtree)
- Postorder: 4, 5, 2, 6, 3, 1     (subtree fully, then root)

## Why each matters

**Preorder** — perfect for COPYING a tree or for SERIALISING (writing the tree to a string/file). The root appears first, so deserialisation can rebuild it top-down.

**Inorder** — for a BST, inorder visits values in SORTED order. That's the magic that makes BSTs so useful for ordered queries.

**Postorder** — perfect for DELETING a tree (delete children before the parent) and for any algorithm that needs the children's answers before computing the parent's (height, diameter, max-path-sum, isBalanced).

## Recursive implementation

void preorder(Node* n) {
    if (!n) return;
    cout << n->val << " ";    // VISIT
    preorder(n->left);
    preorder(n->right);
}

void inorder(Node* n) {
    if (!n) return;
    inorder(n->left);
    cout << n->val << " ";    // VISIT
    inorder(n->right);
}

void postorder(Node* n) {
    if (!n) return;
    postorder(n->left);
    postorder(n->right);
    cout << n->val << " ";    // VISIT
}

Each is O(n) time and O(h) recursion stack.

## Iterative implementation

Sometimes you must avoid recursion (very deep trees, language constraints). Use an explicit stack:

**Iterative preorder** — push root; pop, visit, push RIGHT then LEFT (so left is on top, processed next).

stack<Node*> st;
if (root) st.push(root);
while (!st.empty()) {
    Node* n = st.top(); st.pop();
    cout << n->val << " ";
    if (n->right) st.push(n->right);
    if (n->left)  st.push(n->left);
}

**Iterative inorder** — walk left, pushing every node. Pop and visit. Then walk right's leftmost chain.

stack<Node*> st;
Node* curr = root;
while (curr || !st.empty()) {
    while (curr) { st.push(curr); curr = curr->left; }
    curr = st.top(); st.pop();
    cout << curr->val << " ";
    curr = curr->right;
}

**Iterative postorder** — trickier. Easiest: do "preorder with right before left" (root, right, left) then reverse the output. Or use two stacks.

## Morris traversal (no stack, no recursion)

A neat O(n) time, O(1) extra-space trick for inorder: temporarily rewire the rightmost node of the left subtree to point back to the current node, traverse, restore. Rarely needed but a classic interview question.

## Reconstruction from traversals

You can reconstruct a unique binary tree from PREORDER + INORDER (the preorder's first element is the root; find it in inorder to split left/right subtrees; recurse). Same with POSTORDER + INORDER. You CANNOT reconstruct from preorder + postorder alone — they don't uniquely determine the shape.

## Big-O picture

| Op                  | Time | Space      |
|---------------------|------|------------|
| Any traversal       | O(n) | O(h) stack |
| Reconstruct tree    | O(n) with hash map for inorder index lookup |
| Morris inorder      | O(n) | O(1)       |
| Serialize           | O(n) | O(n) output|

Get the recursive forms automatic, learn the iterative inorder template by heart (it's the messy one), and you've got every traversal-based problem.`,
          codeBlocks: [
            {
              title: "All three recursive traversals",
              code: `void preorder(Node* n) {
    if (!n) return;
    cout << n->val << " ";
    preorder(n->left);
    preorder(n->right);
}

void inorder(Node* n) {
    if (!n) return;
    inorder(n->left);
    cout << n->val << " ";
    inorder(n->right);
}

void postorder(Node* n) {
    if (!n) return;
    postorder(n->left);
    postorder(n->right);
    cout << n->val << " ";
}`
            },
            {
              title: "Iterative preorder",
              code: `void preorderIter(Node* root) {
    if (!root) return;
    stack<Node*> st; st.push(root);
    while (!st.empty()) {
        Node* n = st.top(); st.pop();
        cout << n->val << " ";
        if (n->right) st.push(n->right);
        if (n->left)  st.push(n->left);
    }
}`
            },
            {
              title: "Iterative inorder — the messy one to memorise",
              code: `void inorderIter(Node* root) {
    stack<Node*> st;
    Node* curr = root;
    while (curr || !st.empty()) {
        while (curr) { st.push(curr); curr = curr->left; }
        curr = st.top(); st.pop();
        cout << curr->val << " ";
        curr = curr->right;
    }
}`
            },
            {
              title: "Iterative postorder via reversed 'root-right-left'",
              code: `void postorderIter(Node* root) {
    if (!root) return;
    stack<Node*> st; st.push(root);
    vector<int> out;
    while (!st.empty()) {
        Node* n = st.top(); st.pop();
        out.push_back(n->val);
        if (n->left)  st.push(n->left);
        if (n->right) st.push(n->right);
    }
    reverse(out.begin(), out.end());
    for (int x : out) cout << x << " ";
}`
            },
            {
              title: "Reconstruct tree from preorder + inorder",
              code: `unordered_map<int,int> inIdx;             // inorder value → index

Node* build(vector<int>& pre, int& p, int l, int r) {
    if (l > r) return nullptr;
    int v = pre[p++];
    Node* n = new Node(v);
    int m = inIdx[v];
    n->left  = build(pre, p, l, m - 1);
    n->right = build(pre, p, m + 1, r);
    return n;
}

Node* buildTree(vector<int>& pre, vector<int>& in) {
    for (int i = 0; i < (int)in.size(); i++) inIdx[in[i]] = i;
    int p = 0;
    return build(pre, p, 0, in.size() - 1);
}`
            },
            {
              title: "Validate BST via inorder (must be strictly increasing)",
              code: `Node* prev = nullptr;
bool isBST(Node* root) {
    if (!root) return true;
    if (!isBST(root->left)) return false;
    if (prev && prev->val >= root->val) return false;
    prev = root;
    return isBST(root->right);
}`
            }
          ],
          complexity: { time: "Any traversal O(n); Morris inorder O(n) with O(1) extra space", space: "Recursive O(h); explicit stack O(h); Morris O(1)" },
          keyPoints: [
            "Three DFS orderings differ only in WHERE you visit the node (before / between / after recursion).",
            "Preorder: root, left, right. Use for serialisation, copy, tree-print.",
            "Inorder: left, root, right. For a BST, this visits values in sorted order.",
            "Postorder: left, right, root. Use when the parent needs children's answers (height, diameter, delete).",
            "Recursive forms are 4 lines each — write them from memory.",
            "Iterative inorder uses 'walk left pushing, pop visit, go right' — the classic interview template.",
            "Iterative postorder is best done as 'preorder with right before left' then reverse.",
            "Unique tree reconstruction needs preorder + inorder (or postorder + inorder), NOT preorder + postorder."
          ],
          pitfalls: [
            "Forgetting the base case (if (!n) return;) — null deref.",
            "Iterative postorder is the trickiest — the 'two-stack' or 'reverse preorder' tricks are easy to get wrong.",
            "Using a global `prev` for BST validation without resetting it between test cases.",
            "Confusing inorder/preorder/postorder names — write the visit-position out explicitly when in doubt.",
            "Deleting nodes during preorder/inorder — postorder is the only safe one for delete-the-tree.",
            "Assuming the tree is balanced when computing recursion-stack cost — skewed trees blow O(n) stack."
          ],
          videoId: "67zlUtAr2LE",
          videoSearch: "tree traversal inorder preorder postorder"
        },
        {
          name: "Level Order Traversal (BFS on tree)",
          explanation: `Level-order traversal walks a tree top to bottom, left to right — level by level. It's just BFS applied to a tree, using a queue. The operation is simple, but it unlocks an entire family of problems: right view, zig-zag, level averages, level-by-level min/max, vertical order, bottom view, and serialisation in level-order format (LeetCode's default).

## The basic algorithm

queue<Node*> q;
if (root) q.push(root);
while (!q.empty()) {
    Node* n = q.front(); q.pop();
    cout << n->val << " ";
    if (n->left)  q.push(n->left);
    if (n->right) q.push(n->right);
}

Each node is pushed and popped once → O(n) time, O(W) space where W is the maximum width of the tree (usually O(n/2) for a balanced tree).

## The "process level at a time" template

When you need to know which nodes belong to which level (right view, zig-zag, level averages), use a slight variant: at the start of each loop iteration, snapshot the current queue size — that's the level's width — and only process that many nodes.

while (!q.empty()) {
    int sz = q.size();              // nodes at this level
    vector<int> level;
    for (int i = 0; i < sz; i++) {
        Node* n = q.front(); q.pop();
        level.push_back(n->val);
        if (n->left)  q.push(n->left);
        if (n->right) q.push(n->right);
    }
    record(level);                  // do something with this level
}

This is the template you'll reach for 90% of the time. Memorise it.

## Common level-order variants

**Level-order with grouping** — return vector<vector<int>>, one inner vector per level. Direct application of the template.

**Right side view** — last value pushed to `level` at each iteration.

**Left side view** — first value at each iteration.

**Zig-zag (or boustrophedon)** — flip the order on odd levels. Use a deque or reverse alternate level vectors.

**Bottom view** — for each column (x-coordinate), keep the LAST node seen during level order. Use a map<int,int>.

**Top view** — for each column, keep the FIRST node seen during level order.

**Vertical order** — group nodes by column index; level-order ensures top-down order within each column.

**Minimum depth** — return the level number at which you first see a LEAF. Faster than DFS for unbalanced trees.

**Connect next pointers (Populating Next Right Pointers)** — link each node's `next` to the next node on the same level.

## DFS for level info?

You CAN compute most of these with DFS, passing the current depth as a parameter and indexing into an external vector<vector<int>>. The BFS version is usually cleaner and just as fast — and uses less stack for skewed trees.

void dfs(Node* n, int depth, vector<vector<int>>& out) {
    if (!n) return;
    if ((int)out.size() <= depth) out.push_back({});
    out[depth].push_back(n->val);
    dfs(n->left,  depth + 1, out);
    dfs(n->right, depth + 1, out);
}

## When NOT to use level order

If the algorithm needs subtree-aware information (height, diameter, ancestor relations, child aggregation), DFS is the natural fit — level order doesn't know which children belong to which parent without extra bookkeeping.`,
          codeBlocks: [
            {
              title: "Basic level-order print",
              code: `void levelOrder(Node* root) {
    if (!root) return;
    queue<Node*> q;
    q.push(root);
    while (!q.empty()) {
        Node* n = q.front(); q.pop();
        cout << n->val << " ";
        if (n->left)  q.push(n->left);
        if (n->right) q.push(n->right);
    }
}`
            },
            {
              title: "Group by level — the template",
              code: `vector<vector<int>> levels(Node* root) {
    vector<vector<int>> out;
    if (!root) return out;
    queue<Node*> q; q.push(root);
    while (!q.empty()) {
        int sz = q.size();
        vector<int> level;
        for (int i = 0; i < sz; i++) {
            Node* n = q.front(); q.pop();
            level.push_back(n->val);
            if (n->left)  q.push(n->left);
            if (n->right) q.push(n->right);
        }
        out.push_back(level);
    }
    return out;
}`
            },
            {
              title: "Right Side View",
              code: `vector<int> rightView(Node* root) {
    vector<int> out;
    if (!root) return out;
    queue<Node*> q; q.push(root);
    while (!q.empty()) {
        int sz = q.size();
        for (int i = 0; i < sz; i++) {
            Node* n = q.front(); q.pop();
            if (i == sz - 1) out.push_back(n->val);     // last in level
            if (n->left)  q.push(n->left);
            if (n->right) q.push(n->right);
        }
    }
    return out;
}`
            },
            {
              title: "Zig-zag level order",
              code: `vector<vector<int>> zigzag(Node* root) {
    vector<vector<int>> out;
    if (!root) return out;
    queue<Node*> q; q.push(root);
    bool leftToRight = true;
    while (!q.empty()) {
        int sz = q.size();
        vector<int> level(sz);
        for (int i = 0; i < sz; i++) {
            Node* n = q.front(); q.pop();
            int idx = leftToRight ? i : sz - 1 - i;
            level[idx] = n->val;
            if (n->left)  q.push(n->left);
            if (n->right) q.push(n->right);
        }
        out.push_back(level);
        leftToRight = !leftToRight;
    }
    return out;
}`
            },
            {
              title: "Average of each level",
              code: `vector<double> averageOfLevels(Node* root) {
    vector<double> out;
    if (!root) return out;
    queue<Node*> q; q.push(root);
    while (!q.empty()) {
        int sz = q.size();
        long long sum = 0;
        for (int i = 0; i < sz; i++) {
            Node* n = q.front(); q.pop();
            sum += n->val;
            if (n->left)  q.push(n->left);
            if (n->right) q.push(n->right);
        }
        out.push_back((double)sum / sz);
    }
    return out;
}`
            },
            {
              title: "Minimum depth — first leaf encountered",
              code: `int minDepth(Node* root) {
    if (!root) return 0;
    queue<Node*> q; q.push(root);
    int depth = 1;
    while (!q.empty()) {
        int sz = q.size();
        for (int i = 0; i < sz; i++) {
            Node* n = q.front(); q.pop();
            if (!n->left && !n->right) return depth;
            if (n->left)  q.push(n->left);
            if (n->right) q.push(n->right);
        }
        depth++;
    }
    return depth;
}`
            }
          ],
          complexity: { time: "O(n) — each node pushed/popped once", space: "O(W) where W is max width (O(n) worst case)" },
          keyPoints: [
            "Level order = BFS on a tree. Queue does the heavy lifting.",
            "Each node is pushed and popped once → O(n) time, O(width) space.",
            "The 'snapshot queue size before draining' template gives you per-level grouping for free.",
            "Right/left view, zig-zag, level average all use the same template with a small tweak.",
            "Minimum depth: stop at the first leaf you see during BFS — faster than DFS for unbalanced trees.",
            "DFS can compute the same things by passing depth as a parameter — pick whichever feels cleaner.",
            "Max width of a tree at any level = max queue size during BFS.",
            "Connecting next-right pointers uses level-order with a 'last in level' tracker."
          ],
          pitfalls: [
            "Forgetting the 'snapshot queue size' step — you'll process levels in one big mush.",
            "Pushing nullptr children — wastes time and breaks size-snapshot logic.",
            "Using a stack instead of a queue — that gives DFS, not BFS.",
            "Computing level-by-level depth with depth++ in the wrong place (inside vs outside the inner loop).",
            "Forgetting that an empty tree has zero levels — handle root == nullptr up front.",
            "Iterating with auto-incrementing index when you've already popped — use the snapshot size, not q.size() inside the loop."
          ],
          videoId: "vQIiUWofWw8",
          videoSearch: "level order traversal bfs tree"
        },
        {
          name: "Tree Properties (depth, height, diameter)",
          explanation: `Once you know how to traverse a tree, the next step is computing properties about it: how tall is it, how wide is its longest path, is it balanced, what's the sum of every root-to-leaf path. All of these reduce to "POSTORDER recursion that aggregates the children's answers into the parent's answer".

This concept is the gateway from "I can walk a tree" to "I can solve real tree problems".

## Depth vs height — get this right

**Depth of a node** — distance from ROOT. Root has depth 0. Computed top-down (pass depth as a parameter while recursing).

**Height of a node** — distance to the FURTHEST leaf BELOW. Leaves have height 0. Computed bottom-up (recurse to children, take max + 1).

For the WHOLE tree, depth and height refer to the deepest leaf — they're equal. The vocabulary distinction matters for individual nodes.

int height(Node* root) {
    if (!root) return -1;                  // -1 makes leaf height = 0
    return 1 + max(height(root->left), height(root->right));
}

(Some definitions say height of a leaf is 1, height of null is 0. Either works — pick one and stick with it. The video lecture uses the leaf-is-1 convention.)

## Maximum depth — the cleanest version

int maxDepth(Node* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}

This is THE classic "easy" tree problem and the foundation for everything else.

## Diameter

The diameter of a tree is the length of the LONGEST path between any two nodes. Crucially, that path doesn't have to pass through the root.

For any node, the longest path going THROUGH that node has length height(left) + height(right). So the tree's diameter is the maximum of (left height + right height) over all nodes.

The trick: compute this WHILE you compute height. One DFS, O(n).

int diameter = 0;
int h(Node* root) {
    if (!root) return 0;
    int l = h(root->left);
    int r = h(root->right);
    diameter = max(diameter, l + r);       // path through root has length l + r
    return 1 + max(l, r);                   // return height to caller
}

## Balanced — height differs by at most 1 at every node

Balanced (in the AVL sense): for every node, abs(height(left) - height(right)) <= 1.

Naive: at each node, compute heights and compare → O(n²). Smart: combine "am I balanced?" with "what's my height?" in one DFS → O(n).

int check(Node* root) {
    if (!root) return 0;
    int l = check(root->left);  if (l < 0) return -1;
    int r = check(root->right); if (r < 0) return -1;
    if (abs(l - r) > 1) return -1;          // sentinel "unbalanced"
    return 1 + max(l, r);
}
bool isBalanced(Node* root) { return check(root) >= 0; }

## More aggregations using the same pattern

- **Sum of all nodes** — sum = root->val + sum(left) + sum(right).
- **Maximum value** — max = max(root->val, max(left), max(right)).
- **Count of leaves** — leaves = (root is leaf ? 1 : 0) + leaves(left) + leaves(right).
- **Max root-to-leaf path sum** — current_sum + max(left_sum, right_sum); track max at every leaf.
- **Sum of root-to-leaf numbers** (forming digits) — current * 10 + node->val, accumulate at leaves.

## Subtree-level questions

When the question is about every NODE having a subtree property, the answer is usually a single DFS that returns the property to the parent.

- **Sum of every subtree** — at each node, compute sumSubtree = node->val + sumSubtree(left) + sumSubtree(right); record in a map or vector.
- **Number of "good" subtrees** — analogous.
- **Count of nodes whose value equals subtree-average** — DFS returns (sum, count); parent computes its own (sum, count) and checks node->val == sum/count.

## The universal pattern

Post-order recursion. Recurse left, recurse right, COMBINE the children's answers with the current node, return the combined answer (and optionally update a running global like max-diameter).

For 90% of tree problems, the answer fits in 6 lines of recursive code. Train your eye to spot the post-order shape.`,
          codeBlocks: [
            {
              title: "Maximum depth (classic warm-up)",
              code: `int maxDepth(Node* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`
            },
            {
              title: "Diameter — compute alongside height in one DFS",
              code: `int diameter = 0;

int height(Node* root) {
    if (!root) return 0;
    int l = height(root->left);
    int r = height(root->right);
    diameter = max(diameter, l + r);   // path THROUGH this node
    return 1 + max(l, r);
}

int treeDiameter(Node* root) {
    diameter = 0;
    height(root);
    return diameter;                   // measured in EDGES
}`
            },
            {
              title: "isBalanced — combine 'balanced?' with 'height?'",
              code: `int check(Node* root) {
    if (!root) return 0;
    int l = check(root->left);  if (l < 0) return -1;
    int r = check(root->right); if (r < 0) return -1;
    if (abs(l - r) > 1) return -1;
    return 1 + max(l, r);
}

bool isBalanced(Node* root) { return check(root) >= 0; }`
            },
            {
              title: "Minimum depth — shortest root-to-leaf path",
              code: `int minDepth(Node* root) {
    if (!root) return 0;
    if (!root->left)  return 1 + minDepth(root->right);
    if (!root->right) return 1 + minDepth(root->left);
    return 1 + min(minDepth(root->left), minDepth(root->right));
}`
            },
            {
              title: "Max root-to-leaf path sum",
              code: `int maxPathSum(Node* root) {
    if (!root) return 0;
    if (!root->left && !root->right) return root->val;
    int l = root->left  ? maxPathSum(root->left)  : INT_MIN;
    int r = root->right ? maxPathSum(root->right) : INT_MIN;
    return root->val + max(l, r);
}`
            },
            {
              title: "Sum root-to-leaf numbers (digits)",
              code: `// Each root-to-leaf path forms a number; sum them all.
int dfs(Node* root, int cur) {
    if (!root) return 0;
    cur = cur * 10 + root->val;
    if (!root->left && !root->right) return cur;
    return dfs(root->left, cur) + dfs(root->right, cur);
}

int sumRootToLeaf(Node* root) { return dfs(root, 0); }`
            }
          ],
          complexity: { time: "Most tree-property algorithms are O(n)", space: "O(h) recursion stack — O(log n) balanced, O(n) skewed" },
          keyPoints: [
            "Depth is measured from ROOT (top-down). Height is measured to FURTHEST LEAF (bottom-up).",
            "Maximum depth = 1 + max(maxDepth(left), maxDepth(right)) with base case 0 for null.",
            "Diameter passes through some node u; its length there is height(left) + height(right).",
            "Compute diameter WHILE computing height — one DFS, O(n).",
            "Balanced check returns a sentinel (-1) for 'unbalanced' to avoid recomputing heights.",
            "Universal pattern: post-order DFS that combines children's answers into the parent's answer.",
            "Naive 'compute heights at every node' is O(n²); the one-pass trick is O(n).",
            "Many seemingly different tree problems reduce to a small variation of the depth/height template."
          ],
          pitfalls: [
            "Mixing depth and height in code — keep one model and stick with it.",
            "Returning -1 vs 0 for null — pick a convention; off-by-one in diameter is the classic bug.",
            "Computing diameter as 'longest root-to-leaf path' — wrong; diameter can SKIP the root.",
            "isBalanced's O(n²) naive version times out on big trees — combine with height for O(n).",
            "Forgetting that minDepth is NOT just min(left, right) + 1 — a missing child can give 0 incorrectly.",
            "Counting edges vs nodes — diameter usually means edges; double-check the problem statement."
          ],
          videoId: "9fj_-Sr84CU",
          videoSearch: "depth height diameter binary tree"
        },
        {
          name: "Binary Search Tree (BST) — search, insert, delete",
          explanation: `A binary search tree (BST) is a binary tree with one extra rule: for every node, every value in its LEFT subtree is smaller, and every value in its RIGHT subtree is larger. That single invariant turns search/insert/delete into O(log n) AVERAGE operations — and lets in-order traversal visit values in sorted order.

The catch: BSTs are only O(log n) when they're balanced. A naive BST that gets sorted input degenerates into a linked list with O(n) operations. Real-world BSTs (AVL, Red-Black trees, std::set, std::map) use rotations to stay balanced; we'll mention rotations conceptually but the focus this lesson is the plain BST.

## The invariant

For every node n:
- All values in n's LEFT subtree are STRICTLY LESS than n->val.
- All values in n's RIGHT subtree are STRICTLY GREATER than n->val.

(Some variants allow duplicates in one direction; for clarity we'll assume strict here.)

Crucially, the invariant is recursive — left and right subtrees are themselves BSTs.

## Search

Standard binary search descent:

bool search(Node* root, int target) {
    if (!root) return false;
    if (root->val == target) return true;
    if (target < root->val) return search(root->left, target);
    return search(root->right, target);
}

O(h) where h is height — log n for balanced trees, n for skewed.

## Insert

Find the correct empty slot and attach there.

Node* insert(Node* root, int v) {
    if (!root) return new Node(v);
    if (v < root->val) root->left  = insert(root->left,  v);
    else if (v > root->val) root->right = insert(root->right, v);
    return root;
}

(If v == root->val you typically do nothing — duplicates aren't allowed in a standard BST. Some variants count occurrences instead.)

## Delete — the only "hard" operation

Three cases for deleting a node n:

1. **n is a leaf** — just remove it.
2. **n has ONE child** — replace n with its child.
3. **n has TWO children** — replace n's value with its INORDER SUCCESSOR (smallest value in the right subtree), then delete that successor from the right subtree.

The successor is found by going right once, then left as far as possible. The successor itself has at most one child (it's the leftmost in its subtree), so deleting it is case 1 or 2.

(Equivalently, you can use the inorder PREDECESSOR — largest value in the left subtree. Either works.)

Node* del(Node* root, int v) {
    if (!root) return nullptr;
    if (v < root->val) root->left = del(root->left, v);
    else if (v > root->val) root->right = del(root->right, v);
    else {                                  // found it
        if (!root->left)  { Node* r = root->right; delete root; return r; }
        if (!root->right) { Node* l = root->left;  delete root; return l; }
        Node* succ = root->right;
        while (succ->left) succ = succ->left;
        root->val = succ->val;
        root->right = del(root->right, succ->val);
    }
    return root;
}

## Inorder is sorted

Inorder traversal of a BST visits values in increasing order. This single fact gives you:
- Validate-BST in O(n) (one inorder pass, check strictly increasing).
- Kth smallest element in O(h + k) (inorder until you've visited k nodes).
- BST → sorted array in O(n).

## Floor and ceiling

floor(x) = largest value ≤ x.  ceiling(x) = smallest value ≥ x.

int floor(Node* root, int x) {
    int ans = -1;
    while (root) {
        if (root->val == x) return x;
        if (root->val < x) { ans = root->val; root = root->right; }
        else root = root->left;
    }
    return ans;
}

Both run in O(h).

## Validate a BST

Walk the tree with allowed (min, max) bounds. Each node must satisfy min < node->val < max; recurse with tighter bounds.

bool valid(Node* root, long lo, long hi) {
    if (!root) return true;
    if (root->val <= lo || root->val >= hi) return false;
    return valid(root->left, lo, root->val) && valid(root->right, root->val, hi);
}

Common bug: forgetting that the LEFT subtree's upper bound is the CURRENT node, not just the parent.

## When the tree degenerates

Insert sorted input (1, 2, 3, 4, ...) into a plain BST and you get a chain that goes right-only — height n. All ops become O(n).

Self-balancing variants (AVL, Red-Black) maintain O(log n) height via rotations after every insert/delete. std::set and std::map use Red-Black trees internally. For competitive coding, std::set is the BST you'll actually use.`,
          codeBlocks: [
            {
              title: "Search in a BST",
              code: `bool search(Node* root, int target) {
    if (!root) return false;
    if (root->val == target) return true;
    if (target < root->val) return search(root->left, target);
    return search(root->right, target);
}`
            },
            {
              title: "Insert into a BST (recursive)",
              code: `Node* insert(Node* root, int v) {
    if (!root) return new Node(v);
    if (v < root->val) root->left  = insert(root->left,  v);
    else if (v > root->val) root->right = insert(root->right, v);
    return root;
}`
            },
            {
              title: "Delete from a BST",
              code: `Node* del(Node* root, int v) {
    if (!root) return nullptr;
    if (v < root->val)      root->left  = del(root->left,  v);
    else if (v > root->val) root->right = del(root->right, v);
    else {
        if (!root->left)  { Node* r = root->right; delete root; return r; }
        if (!root->right) { Node* l = root->left;  delete root; return l; }
        Node* succ = root->right;                // inorder successor
        while (succ->left) succ = succ->left;
        root->val = succ->val;
        root->right = del(root->right, succ->val);
    }
    return root;
}`
            },
            {
              title: "Validate a BST with (min, max) bounds",
              code: `bool valid(Node* root, long lo, long hi) {
    if (!root) return true;
    if (root->val <= lo || root->val >= hi) return false;
    return valid(root->left, lo, root->val)
        && valid(root->right, root->val, hi);
}

bool isValidBST(Node* root) {
    return valid(root, LONG_MIN, LONG_MAX);
}`
            },
            {
              title: "Kth smallest via inorder",
              code: `int k, ans;
void inorder(Node* root) {
    if (!root || k == 0) return;
    inorder(root->left);
    if (--k == 0) { ans = root->val; return; }
    inorder(root->right);
}

int kthSmallest(Node* root, int K) {
    k = K;
    inorder(root);
    return ans;
}`
            },
            {
              title: "Lowest Common Ancestor in a BST (O(h))",
              code: `Node* lca(Node* root, int a, int b) {
    while (root) {
        if (a < root->val && b < root->val) root = root->left;
        else if (a > root->val && b > root->val) root = root->right;
        else return root;                       // split point
    }
    return nullptr;
}`
            }
          ],
          complexity: { time: "Search/insert/delete O(h) — log n balanced, n skewed", space: "O(h) recursion stack" },
          keyPoints: [
            "BST invariant: every node's left subtree is strictly less, right subtree strictly greater.",
            "Search/insert work like binary search — divide the problem by descending one side.",
            "Delete has three cases: leaf, one-child, two-children (use inorder successor for the third).",
            "Inorder traversal of a BST yields values in SORTED order — gold for validation, kth-smallest, range queries.",
            "Validate by passing (min, max) bounds down the recursion — current must lie strictly between them.",
            "Floor/ceiling/LCA all run in O(h) by descending one path through the tree.",
            "Plain BST degenerates to O(n) on sorted input — use std::set / std::map (Red-Black trees) in real code.",
            "AVL and Red-Black trees rotate after each mutation to keep height O(log n)."
          ],
          pitfalls: [
            "Forgetting that the BST invariant is recursive — left's MAX must be < node, not just left->val.",
            "Off-by-one on duplicates — pick a convention (strict vs allowed) and enforce it everywhere.",
            "Deleting a two-child node by 'just removing it' breaks the structure — always use successor (or predecessor).",
            "Validating by comparing only with the parent (instead of carrying (min, max) bounds down) is wrong.",
            "Inserting unbalanced data into a plain BST → O(n) per op — switch to std::set for production.",
            "Returning the wrong subtree after deletion — always reassign root->left or root->right to the recursive result."
          ],
          videoId: "ScdwdSCnXDU",
          videoSearch: "binary search tree operations"
        },
        {
          name: "Lowest Common Ancestor (LCA)",
          explanation: `The lowest common ancestor of two nodes p and q in a tree is the DEEPEST node that has both p and q as descendants (a node is considered a descendant of itself). LCA is a building block for many tree problems: shortest path between two nodes, range minimum queries on Euler tours, tree-edit distance, expression-tree common-subexpression.

The algorithm has two flavours depending on what tree you have:
- **General binary tree** — recursive DFS that searches both subtrees.
- **Binary search tree (BST)** — use the order to descend a single path.

## LCA in a general binary tree — the elegant recursion

The function returns:
- nullptr if neither p nor q is in the subtree.
- p (or q) if exactly one is found.
- The LCA itself if both are found.

Node* lca(Node* root, Node* p, Node* q) {
    if (!root || root == p || root == q) return root;
    Node* L = lca(root->left,  p, q);
    Node* R = lca(root->right, p, q);
    if (L && R) return root;       // p in one subtree, q in the other → root is LCA
    return L ? L : R;               // both in one side, or neither
}

O(n) time, O(h) recursion stack. The beauty: no parent pointers, no preprocessing, no auxiliary data structures.

## Why it works

Trace the recursion. When you reach a node that IS p or q, you return it — that subtree has reported "I contain p (or q)". When both subtrees return non-null, the current node is the lowest ancestor that has p in one subtree and q in the other — by definition, the LCA. If only one subtree returns non-null, both nodes live in that subtree; propagate the answer up.

## LCA in a BST — use the order

In a BST, the BST property tells you where p and q must live relative to the current node.

- If both p and q are less than root → LCA is in the left subtree.
- If both are greater → LCA is in the right subtree.
- Otherwise (the values split, or root equals one of them) → root is the LCA.

Node* lcaBST(Node* root, Node* p, Node* q) {
    while (root) {
        if (p->val < root->val && q->val < root->val) root = root->left;
        else if (p->val > root->val && q->val > root->val) root = root->right;
        else return root;
    }
    return nullptr;
}

O(h) — log n on balanced BSTs, n on skewed.

## Beyond the basic algorithm

Once you have LCA, you get other things cheaply:

- **Distance between two nodes** = depth(p) + depth(q) - 2 * depth(lca).
- **Path from p to q** = walk up from p to lca, then down from lca to q.
- **Sum / min / max on the path between p and q** = aggregate the two upward walks.

## When you need MANY LCA queries

If you'll query LCA millions of times, an O(n) DFS per query is too slow. Two standard preprocessing techniques:

- **Binary lifting** — for each node, store its 2⁰-th, 2¹-th, ... ancestors. Each LCA query takes O(log n) after O(n log n) preprocessing.
- **Euler tour + RMQ (Tarjan's LCA, sparse table)** — convert LCA to range-minimum-query on an Euler tour. O(n log n) preprocessing, O(1) per query.

These are advanced (Week 6 graphs territory); for now, the simple recursive LCA is more than enough.

## Common variants

- **LCA when p or q may not exist** — modify the base case to return nullptr unless you've truly found both.
- **LCA in a tree with parent pointers** — walk up from p, mark visited; walk up from q until you hit a marked node. O(h).
- **LCA in a generic (non-binary) tree** — same DFS shape; iterate over all children instead of just left/right.

## When NOT to use LCA

If you only need DISTANCE and you have edge weights, prefer BFS/Dijkstra. If you need the actual PATH and the tree is huge, store parent pointers during traversal and reconstruct on demand.`,
          codeBlocks: [
            {
              title: "LCA in a general binary tree (the elegant recursion)",
              code: `Node* lca(Node* root, Node* p, Node* q) {
    if (!root || root == p || root == q) return root;
    Node* L = lca(root->left,  p, q);
    Node* R = lca(root->right, p, q);
    if (L && R) return root;          // p and q in different subtrees
    return L ? L : R;
}`
            },
            {
              title: "LCA in a BST — use the order",
              code: `Node* lcaBST(Node* root, Node* p, Node* q) {
    while (root) {
        if (p->val < root->val && q->val < root->val)      root = root->left;
        else if (p->val > root->val && q->val > root->val) root = root->right;
        else return root;
    }
    return nullptr;
}`
            },
            {
              title: "Distance between two nodes using LCA",
              code: `int depth(Node* root, Node* target, int d) {
    if (!root) return -1;
    if (root == target) return d;
    int l = depth(root->left, target, d + 1);
    if (l != -1) return l;
    return depth(root->right, target, d + 1);
}

int distance(Node* root, Node* p, Node* q) {
    Node* a = lca(root, p, q);
    return depth(a, p, 0) + depth(a, q, 0);
}`
            },
            {
              title: "LCA with parent pointers — set-based",
              code: `Node* lcaParent(Node* p, Node* q) {
    unordered_set<Node*> ancestors;
    for (Node* n = p; n; n = n->parent) ancestors.insert(n);
    for (Node* n = q; n; n = n->parent) if (ancestors.count(n)) return n;
    return nullptr;
}`
            },
            {
              title: "LCA preprocessing — binary lifting (skeleton)",
              code: `// Precompute up[k][v] = 2^k-th ancestor of v. O(n log n) prep, O(log n) per query.
const int LOG = 20;
vector<vector<int>> up(LOG, vector<int>(n));
vector<int> depth(n);

void dfs(int u, int p) {
    up[0][u] = p;
    for (int k = 1; k < LOG; k++) up[k][u] = up[k-1][up[k-1][u]];
    for (int v : adj[u]) if (v != p) { depth[v] = depth[u] + 1; dfs(v, u); }
}

int lcaBL(int u, int v) {
    if (depth[u] < depth[v]) swap(u, v);
    int diff = depth[u] - depth[v];
    for (int k = 0; k < LOG; k++) if ((diff >> k) & 1) u = up[k][u];
    if (u == v) return u;
    for (int k = LOG - 1; k >= 0; k--)
        if (up[k][u] != up[k][v]) { u = up[k][u]; v = up[k][v]; }
    return up[0][u];
}`
            }
          ],
          complexity: { time: "Recursive LCA O(n); BST LCA O(h); binary lifting O(log n) per query after O(n log n) prep", space: "O(h) recursion; O(n log n) for binary lifting" },
          keyPoints: [
            "LCA = deepest node that has both target nodes as descendants.",
            "Recursive LCA on a general binary tree fits in 5 lines: search both sides, combine.",
            "If left and right both return non-null, the current node is the LCA.",
            "BST LCA exploits ordering: descend one side until the two target values split.",
            "Distance(p, q) = depth(p) + depth(q) - 2 · depth(LCA(p, q)).",
            "For many queries on the same tree, preprocess with binary lifting (O(log n) per query).",
            "Path between two nodes goes UP to the LCA and DOWN to the other node.",
            "Both targets being the same node returns that node (a node is its own ancestor)."
          ],
          pitfalls: [
            "Forgetting the (root == p || root == q) base case — recursion fails to recognise found nodes.",
            "Returning the wrong subtree when only one side has a result — handle 'L && R' before 'L ? L : R'.",
            "BST LCA without the equality case — if one of the targets equals root, root IS the LCA.",
            "Relying on parent pointers when the tree doesn't have them — restructure or pass them in.",
            "Trying to compute LCA top-down without storing intermediate state — the recursive bottom-up returns naturally.",
            "Binary-lifting implementations: off-by-one on the LOG cap, or forgetting to special-case u == v."
          ],
          videoId: "JW-9nhktGGA",
          videoSearch: "lowest common ancestor binary tree"
        },
        {
          name: "Binary Heap (min-heap & max-heap)",
          explanation: `A binary heap is a complete binary tree (every level filled left-to-right) that satisfies the heap property: in a MIN-heap, every parent is ≤ its children; in a MAX-heap, every parent is ≥ its children. The root therefore holds the minimum (or maximum) of all elements, and you can extract it in O(log n) — the foundation for priority queues, scheduling, top-K, Dijkstra, and heapsort.

The killer feature is the array representation. Because a heap is a COMPLETE binary tree, you don't need pointers at all — you can store the n elements in a flat array of length n and use index arithmetic to find parents and children.

## The array layout

Store the tree level by level, left to right. For a node at index i:
- Parent       = (i - 1) / 2
- Left child   = 2 * i + 1
- Right child  = 2 * i + 2

If you index from 1 instead of 0, the formulas are even cleaner: parent = i/2, left = 2i, right = 2i+1.

A 6-element max-heap visualised:

         50
        /  \\
       30   40
      / \\   /
     20 10 35

Stored as array: [50, 30, 40, 20, 10, 35].

## The heap property

**Min-heap**: a[parent(i)] ≤ a[i] for every i > 0.
**Max-heap**: a[parent(i)] ≥ a[i] for every i > 0.

This is WEAKER than "fully sorted" — siblings can be in any order. That's why heap operations are O(log n) (just one path through the tree), not O(n log n).

## Insert — sift up

Add the new element at the end of the array (the next empty leaf position). Then compare with its parent: if heap property is violated, swap. Repeat until either the property holds or you've reached the root.

void siftUp(vector<int>& h, int i) {
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h[p] >= h[i]) break;          // max-heap: parent must be >= child
        swap(h[p], h[i]);
        i = p;
    }
}

O(log n) — at most height of the tree.

## Extract root (extract max for max-heap) — sift down

Save root. Move the LAST element to the root. Sift down: compare with the larger child; if heap property is violated, swap with that child. Repeat.

int extractMax(vector<int>& h) {
    int top = h[0];
    h[0] = h.back();
    h.pop_back();
    int i = 0, n = h.size();
    while (true) {
        int l = 2*i+1, r = 2*i+2, best = i;
        if (l < n && h[l] > h[best]) best = l;
        if (r < n && h[r] > h[best]) best = r;
        if (best == i) break;
        swap(h[i], h[best]);
        i = best;
    }
    return top;
}

O(log n).

## Peek (get max without removing)

Just return a[0]. O(1).

## Build a heap from an array — O(n), not O(n log n)

The naive approach (insert each element one at a time) is O(n log n). The smart approach (heapify) is O(n):

for (int i = n/2 - 1; i >= 0; i--) siftDown(a, i, n);

Why O(n)? The leaves don't need to sift; internal nodes near the bottom sift only a short distance. The math works out to O(n) total — a delightful surprise.

## Heapsort

In-place O(n log n) sort using a max-heap:

1. Build a max-heap of the input → O(n).
2. Repeatedly extract max (which puts it at the END of the array as the heap shrinks) → n times O(log n).

Result: array sorted ascending, in place, with O(1) extra memory beyond the recursion. Stable? No. Cache-friendly? Less than quicksort. Useful when worst-case O(n log n) is required.

## Min-heap vs max-heap

Same algorithm; flip the comparison. STL's std::priority_queue is a MAX-heap by default. For a min-heap: priority_queue<int, vector<int>, greater<int>>.

## What heaps can't do

- **Search by value** — O(n). Heaps don't help.
- **Find the kth smallest in O(1)** — heap gives the min but you need to extract k times.
- **Remove an arbitrary element** — O(n) to locate, then O(log n) to fix.
- **Merge two heaps efficiently** — naive merge is O(n + m); special heaps (Fibonacci, leftist, skew) merge in O(log n).

For these you'd reach for a BST, an indexed heap, or a Fibonacci heap.

## Where heaps win

- Priority queue (next concept).
- Top-K largest/smallest (size-K heap, O(n log K)).
- Median maintenance (two heaps).
- Dijkstra and Prim (extract-min on the frontier).
- Event-driven simulation.`,
          codeBlocks: [
            {
              title: "Max-heap from scratch — siftUp and siftDown",
              code: `struct MaxHeap {
    vector<int> h;

    void siftUp(int i) {
        while (i > 0) {
            int p = (i - 1) / 2;
            if (h[p] >= h[i]) break;
            swap(h[p], h[i]);
            i = p;
        }
    }
    void siftDown(int i) {
        int n = h.size();
        while (true) {
            int l = 2*i+1, r = 2*i+2, best = i;
            if (l < n && h[l] > h[best]) best = l;
            if (r < n && h[r] > h[best]) best = r;
            if (best == i) break;
            swap(h[i], h[best]);
            i = best;
        }
    }
    void push(int v)   { h.push_back(v); siftUp(h.size() - 1); }
    int  top()         { return h[0]; }
    void pop()         { h[0] = h.back(); h.pop_back(); siftDown(0); }
    int  size()        { return h.size(); }
    bool empty()       { return h.empty(); }
};`
            },
            {
              title: "Heapify (build heap from array) — O(n)",
              code: `void heapify(vector<int>& a) {
    int n = a.size();
    // start from the last internal node; leaves are already heaps
    for (int i = n / 2 - 1; i >= 0; i--) {
        int j = i;
        while (true) {
            int l = 2*j+1, r = 2*j+2, best = j;
            if (l < n && a[l] > a[best]) best = l;
            if (r < n && a[r] > a[best]) best = r;
            if (best == j) break;
            swap(a[j], a[best]);
            j = best;
        }
    }
}`
            },
            {
              title: "Heapsort — in-place O(n log n)",
              code: `void heapSort(vector<int>& a) {
    int n = a.size();
    heapify(a);                              // max-heap

    for (int end = n - 1; end > 0; end--) {
        swap(a[0], a[end]);                  // place max at the end
        // sift down within shrinking heap
        int j = 0, h = end;
        while (true) {
            int l = 2*j+1, r = 2*j+2, best = j;
            if (l < h && a[l] > a[best]) best = l;
            if (r < h && a[r] > a[best]) best = r;
            if (best == j) break;
            swap(a[j], a[best]);
            j = best;
        }
    }
}`
            },
            {
              title: "std::priority_queue — STL max-heap",
              code: `#include <queue>
priority_queue<int> pq;             // max-heap by default
pq.push(5); pq.push(1); pq.push(9); pq.push(3);
cout << pq.top();                    // 9
pq.pop();
cout << pq.top();                    // 5`
            },
            {
              title: "Min-heap with priority_queue",
              code: `priority_queue<int, vector<int>, greater<int>> minPq;
minPq.push(5); minPq.push(1); minPq.push(9);
cout << minPq.top();                 // 1`
            },
            {
              title: "Top-K largest using a size-K min-heap",
              code: `vector<int> topK(vector<int>& a, int k) {
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int x : a) {
        pq.push(x);
        if ((int)pq.size() > k) pq.pop();    // keep only the k largest
    }
    vector<int> out;
    while (!pq.empty()) { out.push_back(pq.top()); pq.pop(); }
    return out;                              // ascending; reverse for descending
}`
            }
          ],
          complexity: { time: "push O(log n), pop/extract-root O(log n), top O(1), heapify O(n), heapsort O(n log n)", space: "O(n) for the array" },
          keyPoints: [
            "A binary heap is a complete binary tree satisfying the heap property (parent ≤ or ≥ children).",
            "Array representation: parent = (i-1)/2, left = 2i+1, right = 2i+2 — no pointers needed.",
            "Insert = sift up: add at end, swap with parent while needed. O(log n).",
            "Extract root = sift down: move last to root, swap with larger/smaller child while needed. O(log n).",
            "Build a heap from an array in O(n) using heapify — bottom-up sift-down.",
            "Heapsort = build max-heap + repeatedly extract max into end of array. O(n log n), in-place, NOT stable.",
            "std::priority_queue is a max-heap; for min-heap pass greater<int> as the comparator.",
            "Heaps give fast min/max + extract — but search by value is still O(n)."
          ],
          pitfalls: [
            "Mixing 0-indexed and 1-indexed formulas — always commit to one.",
            "Sifting up with a leaf when you should sift down (or vice versa) — wrong direction breaks the heap.",
            "Forgetting to update i after a swap in the siftUp / siftDown loop — infinite loop or wrong place.",
            "Using priority_queue<int> when you meant a min-heap — default is MAX.",
            "Removing an arbitrary element by value — heap doesn't support O(log n) for that without an index-map.",
            "Comparing pointers/objects in a heap without a proper comparator — undefined order."
          ],
          videoId: "MMTQz-G8e-I",
          videoSearch: "binary heap min max heap"
        },
        {
          name: "Priority Queue & Heap Operations",
          explanation: `A priority queue is an abstract data type that lets you push values in any order but always pops the one with the HIGHEST PRIORITY first. In C++ it's implemented with a binary heap and exposed as std::priority_queue. Every advanced graph and scheduling algorithm uses one: Dijkstra, Prim, A*, top-K, median-stream, K-way merge — once you internalise the priority-queue mental model, those algorithms collapse into a few lines.

This concept is about the STL interface and the practical patterns. The heap mechanics from the previous lesson explain HOW it runs underneath.

## The operations

push(x)         — add x. O(log n).
top()           — peek at highest-priority element. O(1).
pop()           — remove the top. O(log n).
size() / empty()— O(1).

That's the whole interface. No iteration. No search by value. No arbitrary removal. If you need those, you've outgrown priority_queue.

## std::priority_queue — the STL version

#include <queue>
priority_queue<int> pq;            // max-heap of ints (default)
pq.push(5); pq.push(1); pq.push(9); pq.push(3);
cout << pq.top();                   // 9
pq.pop();
cout << pq.top();                   // 5

Like std::stack and std::queue, it's a container adapter — wraps a vector internally.

## Min-heap — the most-asked variant

You'll need a min-heap (smallest first) more often than max. The trick is to provide greater<> as the comparator:

priority_queue<int, vector<int>, greater<int>> minPq;
minPq.push(5); minPq.push(1); minPq.push(9);
cout << minPq.top();                // 1

The three template parameters: element type, underlying container, comparator. The comparator semantics are "true means a comes BEFORE b in the heap order" — std::greater puts smaller values on top → min-heap.

## Custom comparators

For pairs, structs, or unusual orderings:

auto cmp = [](const pair<int,int>& a, const pair<int,int>& b) {
    return a.second > b.second;     // min-heap by second element
};
priority_queue<pair<int,int>, vector<pair<int,int>>, decltype(cmp)> pq(cmp);

(In C++20 you can write just decltype(cmp). In older standards, the lambda must be a "stateless" comparator or you pass it through the constructor.)

For a struct, define operator< (max-heap orders by it) or pass a custom comparator.

## The half-dozen patterns

**Top-K largest** — push everything onto a size-K MIN heap; whenever size > K, pop. End with K largest. O(n log K) and O(K) memory — beats a full sort.

**Top-K smallest** — same idea with a max-heap, popping when size > K.

**Kth largest** — Top-K largest + return the top of the heap (smallest of the K largest).

**K-way merge** — push the heads of all K sorted lists into a min-heap; pop the smallest, emit, push that list's next head. Total O(N log K).

**Median of a stream** — two heaps: a max-heap for the lower half, a min-heap for the upper half. Keep their sizes balanced. Median is either max-heap top, min-heap top, or the average.

**Dijkstra's shortest path** — min-heap of (distance, vertex). Pop the closest, relax its neighbours, push.

**Huffman coding** — repeatedly extract two smallest, combine, push.

**Task scheduling** — min-heap of (next-available-time, task). Always process the soonest.

## Performance reality check

priority_queue has higher constants than a hand-rolled heap (function-call overhead, comparator indirection). For competitive programming hot loops, sometimes people inline a heap by hand. For everyday code, std::priority_queue is fast enough.

For deeply repeated operations on the SAME element (decrease-key in Dijkstra), the standard trick is to push duplicates and ignore stale entries on pop — simpler than maintaining an indexed heap.

## Limitations and workarounds

| Need                          | priority_queue can't | Use instead                  |
|-------------------------------|----------------------|------------------------------|
| Search by value               | No                   | set, unordered_set           |
| Remove arbitrary element      | No                   | indexed heap, multiset       |
| Iterate over contents in order| No                   | Sort underlying container    |
| Update an element's priority  | No                   | "lazy delete + reinsert"     |
| Both ends fast (min AND max)  | No                   | multiset / two heaps         |

The pattern: priority_queue does ONE thing extremely well (pop highest priority). For anything else, reach for a richer structure.`,
          codeBlocks: [
            {
              title: "Default max-heap",
              code: `priority_queue<int> pq;
pq.push(5); pq.push(1); pq.push(9); pq.push(3);
while (!pq.empty()) {
    cout << pq.top() << " ";        // 9 5 3 1
    pq.pop();
}`
            },
            {
              title: "Min-heap with greater<int>",
              code: `priority_queue<int, vector<int>, greater<int>> minPq;
minPq.push(5); minPq.push(1); minPq.push(9); minPq.push(3);
while (!minPq.empty()) {
    cout << minPq.top() << " ";     // 1 3 5 9
    minPq.pop();
}`
            },
            {
              title: "Kth largest element in an array",
              code: `int kthLargest(vector<int>& a, int k) {
    priority_queue<int, vector<int>, greater<int>> pq;   // min-heap
    for (int x : a) {
        pq.push(x);
        if ((int)pq.size() > k) pq.pop();
    }
    return pq.top();                 // smallest of the k largest
}`
            },
            {
              title: "Merge K sorted lists",
              code: `struct Node { int val; int listIdx; int posIdx; };

vector<int> mergeK(vector<vector<int>>& lists) {
    auto cmp = [](const Node& a, const Node& b){ return a.val > b.val; };
    priority_queue<Node, vector<Node>, decltype(cmp)> pq(cmp);

    for (int i = 0; i < (int)lists.size(); i++)
        if (!lists[i].empty()) pq.push({ lists[i][0], i, 0 });

    vector<int> out;
    while (!pq.empty()) {
        Node t = pq.top(); pq.pop();
        out.push_back(t.val);
        if (t.posIdx + 1 < (int)lists[t.listIdx].size())
            pq.push({ lists[t.listIdx][t.posIdx + 1], t.listIdx, t.posIdx + 1 });
    }
    return out;
}`
            },
            {
              title: "Median of a stream — two heaps",
              code: `class MedianFinder {
    priority_queue<int> lo;                                  // max-heap (lower half)
    priority_queue<int, vector<int>, greater<int>> hi;       // min-heap (upper half)
public:
    void addNum(int x) {
        lo.push(x);
        hi.push(lo.top()); lo.pop();                         // balance
        if (lo.size() < hi.size()) { lo.push(hi.top()); hi.pop(); }
    }
    double findMedian() {
        return lo.size() > hi.size() ? lo.top() : (lo.top() + hi.top()) / 2.0;
    }
};`
            },
            {
              title: "Dijkstra-style 'pop the closest' template",
              code: `void dijkstraSketch(int src, vector<vector<pair<int,int>>>& adj, vector<int>& dist) {
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    dist[src] = 0;
    pq.push({0, src});
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;                           // stale
        for (auto [v, w] : adj[u]) {
            if (d + w < dist[v]) {
                dist[v] = d + w;
                pq.push({dist[v], v});
            }
        }
    }
}`
            }
          ],
          complexity: { time: "push/pop O(log n), top O(1)", space: "O(n) backing container" },
          keyPoints: [
            "Priority queue ADT: push any order, pop highest priority. Backed by a binary heap.",
            "std::priority_queue is a MAX-heap by default; pass greater<T> for a min-heap.",
            "Custom comparators: three template params (T, Container, Comparator) or constructor-passed lambda.",
            "Top-K pattern: size-K heap; pop when over capacity → O(n log K), O(K) memory.",
            "K-way merge: heap of heads, emit smallest, push next from that list. O(N log K).",
            "Median of stream: two heaps (max-heap lower half, min-heap upper half).",
            "Dijkstra / Prim / A* / Huffman all need a priority queue at their core.",
            "Can't search or update — use 'lazy delete + reinsert' or move to indexed heap if you need that."
          ],
          pitfalls: [
            "Using priority_queue<int> when you wanted a min-heap — silent bug, wrong answer.",
            "Custom comparators inverted — std::greater puts smaller on top (counterintuitive at first).",
            "Calling top() on an empty priority_queue — undefined behaviour. Always check empty().",
            "Modifying a key after pushing it — its priority changes; the heap invariant breaks silently.",
            "Forgetting the 'lazy delete' check in Dijkstra (if (d > dist[u]) continue;) — TLE on dense graphs.",
            "Comparator must be a STRICT WEAK ORDERING — undefined behaviour otherwise."
          ],
          videoId: "XzA5Ts_vXfw",
          videoSearch: "priority queue c++"
        },
        {
          name: "Trie (Prefix Tree)",
          explanation: `A trie (rhymes with "tree", from re-TRIE-val) is a tree where each EDGE represents a character and each PATH from the root spells a string prefix. It's the canonical data structure for string-dictionary problems: insert/search/prefix-test all run in O(L) where L is the word length — independent of the size of the dictionary.

Tries underpin autocomplete, spell-checkers, IP-routing tables (patricia trie variant), word-game solvers (boggle), and any problem that benefits from sharing common prefixes.

## The shape

The root is a special empty node. Each node has up to ALPHABET-SIZE children (26 for lowercase English; can be a map for arbitrary characters). A boolean flag at each node marks "a word ends here" — needed because "car" being inserted doesn't mean "ca" is also a word.

Inserting "cat", "car", "card", "cab", "dog":

         root
         / \\
        c   d
        |   |
        a   o
       /|\\  |
      t r b g(end)
      | |(end)
     (end)|
       d
      (end)

Both "car" and "card" share "c→a→r". "cat" and "cab" share "c→a". The structure is naturally compact for languages with lots of common prefixes.

## Node definition

struct TrieNode {
    TrieNode* child[26];     // lowercase English
    bool isEnd = false;
    TrieNode() { for (int i = 0; i < 26; i++) child[i] = nullptr; }
};

For arbitrary characters, use an unordered_map<char, TrieNode*> instead of a fixed array.

## Insert

For each character in the word, walk down the trie creating nodes as needed. Mark the final node's isEnd = true.

void insert(TrieNode* root, const string& w) {
    TrieNode* curr = root;
    for (char c : w) {
        int idx = c - 'a';
        if (!curr->child[idx]) curr->child[idx] = new TrieNode();
        curr = curr->child[idx];
    }
    curr->isEnd = true;
}

O(L).

## Search a word

Walk down; if any character is missing, return false. After walking, check isEnd.

bool search(TrieNode* root, const string& w) {
    TrieNode* curr = root;
    for (char c : w) {
        int idx = c - 'a';
        if (!curr->child[idx]) return false;
        curr = curr->child[idx];
    }
    return curr->isEnd;
}

O(L).

## startsWith — prefix test (same as search but skip the isEnd check)

bool startsWith(TrieNode* root, const string& pre) {
    TrieNode* curr = root;
    for (char c : pre) {
        int idx = c - 'a';
        if (!curr->child[idx]) return false;
        curr = curr->child[idx];
    }
    return true;
}

This is the trie's superpower. Asking "are there any words starting with 'pre'?" is O(L), regardless of dictionary size.

## Delete

Trickier. To delete word w, walk down marking the path. At the end, clear isEnd. On the way back up (post-order), free any node that:
- is not isEnd, AND
- has no children left.

If the word isn't in the trie, do nothing.

## Memory cost

Each node holds 26 pointers (208 bytes on 64-bit). A million-word trie can use lots of RAM. Solutions:
- Use a map instead of a fixed array (saves memory when few children, costs lookup time).
- Compress paths with no branching ("Radix tree" or "Patricia trie").
- Suffix arrays / FM-index for very large corpora.

For interview-scale problems (few thousand words), the simple version is fine.

## Killer applications

- **Autocomplete** — startsWith on the prefix; DFS the subtree to enumerate completions.
- **Spell-check** — search with edit-distance DP layered on top.
- **Word Search II** — board + dictionary; DFS the board while walking the trie.
- **Longest Word in Dictionary built letter-by-letter** — DFS the trie collecting paths where every prefix is also a word.
- **Replace Words** — replace each word with the SHORTEST prefix in the dictionary.
- **Maximum XOR of Two Numbers** — a binary trie (bit-level) lets you find the pair with max XOR in O(n log MAX).
- **IP routing** — longest prefix match.

## Trade-offs vs hash set

Hash set: O(L) insert/search (you hash the string), no prefix support.
Trie: O(L) insert/search, O(L) startsWith, plus naturally enumerates all words with a prefix.

For pure membership testing, a hash set is simpler and uses less memory. For prefix queries, the trie is unbeatable.`,
          codeBlocks: [
            {
              title: "TrieNode and Trie class",
              code: `class Trie {
    struct Node {
        Node* child[26];
        bool isEnd = false;
        Node() { for (int i = 0; i < 26; i++) child[i] = nullptr; }
    };
    Node* root;
public:
    Trie() : root(new Node()) {}

    void insert(const string& w) {
        Node* c = root;
        for (char ch : w) {
            int i = ch - 'a';
            if (!c->child[i]) c->child[i] = new Node();
            c = c->child[i];
        }
        c->isEnd = true;
    }

    bool search(const string& w) {
        Node* c = walk(w);
        return c && c->isEnd;
    }

    bool startsWith(const string& p) {
        return walk(p) != nullptr;
    }
private:
    Node* walk(const string& s) {
        Node* c = root;
        for (char ch : s) {
            int i = ch - 'a';
            if (!c->child[i]) return nullptr;
            c = c->child[i];
        }
        return c;
    }
};`
            },
            {
              title: "Delete a word (post-order cleanup)",
              code: `bool del(Node* c, const string& w, int idx) {
    if (idx == (int)w.size()) {
        if (!c->isEnd) return false;
        c->isEnd = false;
    } else {
        int i = w[idx] - 'a';
        if (!c->child[i] || !del(c->child[i], w, idx + 1)) return false;
        bool emptyChild = true;
        for (int k = 0; k < 26; k++) if (c->child[i]->child[k]) { emptyChild = false; break; }
        if (emptyChild && !c->child[i]->isEnd) {
            delete c->child[i];
            c->child[i] = nullptr;
        }
    }
    return true;
}`
            },
            {
              title: "Autocomplete — enumerate all words with prefix",
              code: `void dfs(Node* c, string& cur, vector<string>& out) {
    if (c->isEnd) out.push_back(cur);
    for (int i = 0; i < 26; i++) if (c->child[i]) {
        cur.push_back('a' + i);
        dfs(c->child[i], cur, out);
        cur.pop_back();
    }
}

vector<string> complete(Trie& t, const string& prefix) {
    Node* c = t.walk(prefix);
    if (!c) return {};
    vector<string> out;
    string cur = prefix;
    dfs(c, cur, out);
    return out;
}`
            },
            {
              title: "Word Search II — DFS board while walking the trie",
              code: `void searchBoard(vector<vector<char>>& b, int r, int c, Node* n, string& cur, set<string>& out) {
    int R = b.size(), C = b[0].size();
    if (r < 0 || r >= R || c < 0 || c >= C) return;
    char ch = b[r][c];
    if (ch == '#' || !n->child[ch - 'a']) return;
    n = n->child[ch - 'a'];
    cur.push_back(ch);
    if (n->isEnd) out.insert(cur);
    b[r][c] = '#';                              // visited
    searchBoard(b, r+1, c, n, cur, out);
    searchBoard(b, r-1, c, n, cur, out);
    searchBoard(b, r, c+1, n, cur, out);
    searchBoard(b, r, c-1, n, cur, out);
    b[r][c] = ch;                                // undo
    cur.pop_back();
}`
            },
            {
              title: "Map-based trie (for non-English alphabets)",
              code: `struct MapNode {
    unordered_map<char, MapNode*> child;
    bool isEnd = false;
};

void insert(MapNode* root, const string& w) {
    MapNode* c = root;
    for (char ch : w) {
        if (!c->child.count(ch)) c->child[ch] = new MapNode();
        c = c->child[ch];
    }
    c->isEnd = true;
}`
            },
            {
              title: "Binary trie for max-XOR pair",
              code: `// Insert each number as a 32-bit binary string. For each query x, walk the trie
// choosing the OPPOSITE bit at each step to maximise XOR.
struct BTrie {
    BTrie* child[2] = {nullptr, nullptr};
};

void insertBT(BTrie* root, int x) {
    BTrie* c = root;
    for (int b = 30; b >= 0; b--) {
        int bit = (x >> b) & 1;
        if (!c->child[bit]) c->child[bit] = new BTrie();
        c = c->child[bit];
    }
}

int maxXor(BTrie* root, int x) {
    BTrie* c = root;
    int xorSum = 0;
    for (int b = 30; b >= 0; b--) {
        int bit = (x >> b) & 1;
        int want = 1 - bit;
        if (c->child[want]) { xorSum |= (1 << b); c = c->child[want]; }
        else                  c = c->child[bit];
    }
    return xorSum;
}`
            }
          ],
          complexity: { time: "Insert / search / startsWith all O(L) where L is word length", space: "O(total characters across all words) × ALPHABET pointers" },
          keyPoints: [
            "Trie = tree where each EDGE is a character; PATHS spell prefixes.",
            "Each node has up to ALPHABET children + an isEnd flag.",
            "Insert / search / startsWith are all O(L) — independent of dictionary size.",
            "isEnd is mandatory — without it you can't distinguish 'car' from 'ca'.",
            "Delete is the tricky operation: post-order cleanup of nodes with no children and isEnd false.",
            "Fixed array (size 26) is fast; unordered_map handles arbitrary alphabets at memory cost.",
            "Killer apps: autocomplete, spell-check, Word Search II, IP routing, max-XOR-pair (binary trie).",
            "vs hash set: same insert/search cost, but trie also gives O(L) prefix queries and easy enumeration."
          ],
          pitfalls: [
            "Forgetting isEnd — every search returns true if the path exists.",
            "Confusing 'word in trie' (search) with 'prefix in trie' (startsWith).",
            "Memory blow-up — 26-pointer nodes are 208 bytes on 64-bit; a million-word trie is heavy.",
            "Off-by-one in c - 'a' for non-lowercase characters — validate input or use a map.",
            "Forgetting to undo board markers in Word Search II — subsequent paths see false visited cells.",
            "Naive delete that frees a node whose subtree still has words — corrupts the trie."
          ],
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
          explanation: `A graph is a set of vertices (nodes) and edges (connections between them). Edges can be DIRECTED (a one-way arrow) or UNDIRECTED (a two-way link); they can carry WEIGHTS (numbers) or be unweighted. The first decision in any graph problem is HOW to represent it in code. Three standard choices, each with a clear trade-off.

This concept is purely about representation. The next two lessons (BFS, DFS) will USE these representations to actually traverse graphs.

## The vocabulary

V = number of vertices, often called n.
E = number of edges, often called m.
For a SIMPLE graph (no parallel edges, no self-loops), E can be as small as 0 or as large as V·(V-1)/2 for undirected (or V² for directed).
DENSE graph: E close to V². SPARSE: E close to V.

Most real-world graphs are SPARSE — social networks, road networks, the web. Algorithms and representations should optimise for that.

## Adjacency list (the everyday default)

For each vertex, store a list of its neighbours. In C++:

vector<vector<int>> adj(V);                      // unweighted
vector<vector<pair<int,int>>> adj(V);            // weighted: pairs of (neighbour, weight)

To add an undirected edge between u and v:
adj[u].push_back(v);
adj[v].push_back(u);                              // both directions

For directed, only the first line.

**Space**: O(V + E). Each vertex contributes O(1) for its slot, each edge contributes O(1) per endpoint.
**Iterate neighbours of u**: O(degree(u)).
**Check if edge (u, v) exists**: O(degree(u)) — must scan u's list.
**Add edge**: O(1).
**Remove edge**: O(degree(u)) — must find and erase.

The clear winner for sparse graphs and the default in 95% of problems.

## Adjacency matrix

A V × V boolean matrix (or weight matrix) where mat[u][v] = true (or weight) iff there's an edge from u to v.

vector<vector<int>> mat(V, vector<int>(V, 0));
mat[u][v] = mat[v][u] = 1;                        // undirected, unweighted

**Space**: O(V²) regardless of E.
**Check edge (u, v)**: O(1).
**Iterate neighbours of u**: O(V) — must scan the row.
**Add/remove edge**: O(1).

Wins when V is small (< 1000) or when the graph is genuinely DENSE and you need lots of edge-existence queries. Loses badly on sparse graphs because of the V² memory.

## Edge list

A flat list of all edges. Each edge is a tuple (u, v, weight).

vector<tuple<int,int,int>> edges;    // (u, v, w)

**Space**: O(E).
**Iterate ALL edges**: O(E).
**Iterate neighbours of u**: O(E) — must scan all edges. Slow.
**Edge existence**: O(E) without a hash.

Wins for algorithms that explicitly need to process all edges (Kruskal's MST sorts the edge list; Bellman-Ford relaxes each edge V-1 times).

## Side-by-side cheat sheet

| Operation                | Adj List         | Adj Matrix       | Edge List       |
|--------------------------|------------------|------------------|-----------------|
| Space                    | O(V + E)         | O(V²)            | O(E)            |
| Neighbours of u          | O(deg u)         | O(V)             | O(E)            |
| Edge (u, v) exists?      | O(deg u)         | O(1)             | O(E)            |
| Add edge                 | O(1)             | O(1)             | O(1)            |
| Remove edge              | O(deg u)         | O(1)             | O(E)            |
| Iterate all edges        | O(V + E)         | O(V²)            | O(E)            |

## Other representations (advanced)

**Compressed Sparse Row (CSR)** — a single flat array of neighbours with a parallel offset array. Cache-friendly, used in production graph libraries. Same asymptotic as adjacency list, much smaller constants.

**Implicit graphs** — for grids and BFS-style problems, you don't store the graph explicitly. The "neighbours" of cell (r, c) are computed on the fly: (r±1, c), (r, c±1).

**Hash-map adjacency** — unordered_map<int, vector<int>> when vertices are sparse integers or strings.

## Directed vs undirected

For an undirected edge, you store it on BOTH endpoints' lists (or, in the matrix, set BOTH mat[u][v] and mat[v][u]). For a directed edge, only the source.

For directed graphs you also often want the REVERSE-adjacency list (who points TO u?), e.g. for SCC algorithms — store it as a parallel data structure.

## Weighted graphs

In the adjacency list, store pairs (neighbour, weight). In the matrix, the cell holds the weight directly (use a sentinel like INT_MAX for "no edge"). Most weighted-graph algorithms (Dijkstra, Bellman-Ford, MST) assume specific weight properties.

## How to choose

- Default: adjacency list. Always.
- V < 500 and you need edge-existence checks: adjacency matrix.
- Algorithm that processes edges as a unit (Kruskal, Bellman-Ford): edge list.
- Implicit graph (grids, mazes, state-space search): don't store at all; compute neighbours on the fly.`,
          codeBlocks: [
            {
              title: "Adjacency list — read a graph from input",
              code: `int V, E;
cin >> V >> E;
vector<vector<int>> adj(V);
for (int i = 0; i < E; i++) {
    int u, v;
    cin >> u >> v;
    adj[u].push_back(v);
    adj[v].push_back(u);             // omit for directed graphs
}

// Print neighbours of vertex 0
for (int nb : adj[0]) cout << nb << " ";`
            },
            {
              title: "Weighted adjacency list",
              code: `vector<vector<pair<int,int>>> adj(V);   // (neighbour, weight)
for (int i = 0; i < E; i++) {
    int u, v, w;
    cin >> u >> v >> w;
    adj[u].push_back({v, w});
    adj[v].push_back({u, w});
}

// Walk u's neighbours
for (auto [nb, w] : adj[u]) cout << nb << "(" << w << ") ";`
            },
            {
              title: "Adjacency matrix",
              code: `int V; cin >> V;
vector<vector<int>> mat(V, vector<int>(V, 0));    // 0 = no edge
int E; cin >> E;
for (int i = 0; i < E; i++) {
    int u, v;
    cin >> u >> v;
    mat[u][v] = mat[v][u] = 1;
}

if (mat[3][7]) cout << "edge exists\\n";          // O(1) check`
            },
            {
              title: "Edge list",
              code: `int V, E; cin >> V >> E;
vector<tuple<int,int,int>> edges;
for (int i = 0; i < E; i++) {
    int u, v, w;
    cin >> u >> v >> w;
    edges.push_back({u, v, w});
}

// Sort by weight (e.g. for Kruskal's MST)
sort(edges.begin(), edges.end(), [](const auto& a, const auto& b) {
    return get<2>(a) < get<2>(b);
});`
            },
            {
              title: "Implicit graph — grid neighbours computed on the fly",
              code: `const int dr[] = {-1, 1, 0, 0};
const int dc[] = { 0, 0,-1, 1};

void visitNeighbours(vector<vector<int>>& g, int r, int c) {
    int R = g.size(), C = g[0].size();
    for (int k = 0; k < 4; k++) {
        int nr = r + dr[k];
        int nc = c + dc[k];
        if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
        // process g[nr][nc]
    }
}`
            },
            {
              title: "Hash-map adjacency for string-keyed graphs",
              code: `unordered_map<string, vector<string>> friends;
friends["alice"].push_back("bob");
friends["alice"].push_back("carol");
friends["bob"].push_back("alice");

for (auto& f : friends["alice"]) cout << f << " ";`
            }
          ],
          complexity: { time: "Depends on representation — see table in explanation", space: "Adj list O(V+E); matrix O(V²); edge list O(E)" },
          keyPoints: [
            "Three representations: adjacency list (default), adjacency matrix (small/dense), edge list (Kruskal/Bellman-Ford).",
            "Adjacency list uses O(V + E) memory — fits sparse graphs naturally.",
            "Adjacency matrix is O(V²) memory but gives O(1) edge-existence checks.",
            "Edge list is the right choice when the algorithm processes edges as a unit.",
            "For undirected edges, add BOTH directions to the adjacency list.",
            "Weighted graphs: store (neighbour, weight) pairs in the list or weight directly in the matrix.",
            "Implicit graphs (grids, state spaces) don't need explicit storage — compute neighbours on demand.",
            "When V < 1000 and queries are dense, matrix can beat list in practice; otherwise prefer the list."
          ],
          pitfalls: [
            "Forgetting to add the reverse edge for undirected graphs — turns it into a directed graph silently.",
            "Using an adjacency matrix for V = 10⁵ — 40 GB of memory; will crash.",
            "Reading edges as 1-indexed but using 0-indexed arrays (or vice-versa).",
            "Storing duplicate edges in the adjacency list when you add the same edge twice.",
            "Iterating an edge list to find a vertex's neighbours — O(E) per call; switch to list/matrix.",
            "Using vector<set<int>> 'just in case you need to dedup' — adds log factor for usually no reason."
          ],
          videoId: "3pr9Ce9vECc",
          videoSearch: "graph representation adjacency list matrix"
        },
        {
          name: "Breadth-First Search (BFS)",
          explanation: `BFS is the graph-traversal algorithm that explores vertices in order of distance from a starting vertex. Start visits the source; first iteration visits all vertices 1 edge away; next iteration visits everything 2 edges away; and so on. It uses a queue and runs in O(V + E). On an UNWEIGHTED graph, BFS finds the SHORTEST PATH from source to any reachable vertex — guaranteed.

BFS is one of the two pillars of graph algorithms (the other is DFS, next concept). Almost every "shortest path on a grid", "minimum steps to reach state X", and "level-by-level" tree/graph problem is a BFS in disguise.

## The algorithm

queue<int> q;
vector<bool> visited(n, false);

visited[src] = true;
q.push(src);
while (!q.empty()) {
    int u = q.front(); q.pop();
    for (int v : adj[u]) {
        if (!visited[v]) {
            visited[v] = true;
            q.push(v);
        }
    }
}

The KEY rule: mark visited BEFORE pushing onto the queue, not after popping. If you mark on pop, the same vertex can be pushed multiple times, blowing memory and possibly breaking distance calculations.

## Tracking distances

To find the shortest distance from src to every reachable vertex:

vector<int> dist(n, -1);
dist[src] = 0;
queue<int> q; q.push(src);
while (!q.empty()) {
    int u = q.front(); q.pop();
    for (int v : adj[u]) {
        if (dist[v] == -1) {
            dist[v] = dist[u] + 1;
            q.push(v);
        }
    }
}

dist[v] is the SHORTEST number of edges from src to v. -1 means unreachable.

## Tracking the path

Same as above but also record the parent:

vector<int> parent(n, -1);
// ... in the if (dist[v] == -1) block:
parent[v] = u;

To reconstruct the path from src to t:
vector<int> path;
for (int cur = t; cur != -1; cur = parent[cur]) path.push_back(cur);
reverse(path.begin(), path.end());

## Multi-source BFS — the flood pattern

Instead of starting from one source, push ALL sources onto the queue at once with distance 0. The algorithm then finds, for each vertex, the distance to the NEAREST source.

Used for "rotting oranges" (every rotten orange is a source, propagate), "01 matrix" (every 0 is a source, find distance from each cell to its nearest 0), "walls and gates" (every gate is a source).

## BFS on a grid (implicit graph)

Most grid problems don't store an explicit graph — the neighbours of (r, c) are the 4 (or 8) adjacent cells. Just replace adj[u] with the four neighbour computations:

const int dr[] = {-1, 1, 0, 0};
const int dc[] = { 0, 0,-1, 1};

queue<pair<int,int>> q;
q.push({sr, sc});
visited[sr][sc] = true;
while (!q.empty()) {
    auto [r, c] = q.front(); q.pop();
    for (int k = 0; k < 4; k++) {
        int nr = r + dr[k], nc = c + dc[k];
        if (nr<0 || nr>=R || nc<0 || nc>=C || visited[nr][nc]) continue;
        visited[nr][nc] = true;
        q.push({nr, nc});
    }
}

## When BFS beats DFS

- **Shortest path on an unweighted graph** — BFS gives it directly.
- **Minimum steps to reach a state** — BFS over the state space.
- **Level-by-level exploration** (right-side view, level averages, etc.) — natural fit.
- **Avoiding deep recursion stack** — BFS uses a queue, not the call stack.

## When DFS beats BFS

- **Topological sort, cycle detection, SCC** — DFS' finish-time information.
- **Path-tracking / backtracking** — DFS keeps the path on the recursion stack.
- **Subtree/component aggregation** — DFS combines child answers naturally.

## 0-1 BFS — bonus

For graphs whose edges have weights 0 or 1, you can find shortest paths in O(V + E) using a DEQUE: push to front for weight-0 edges, push to back for weight-1 edges. Like BFS but smarter.

For arbitrary non-negative weights, use Dijkstra (Week 6).

## Complexity

O(V + E) time, O(V) space (queue + visited array). For a grid with R × C cells, that's O(R · C).`,
          codeBlocks: [
            {
              title: "BFS — visit every reachable vertex",
              code: `void bfs(int src, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<bool> visited(n, false);
    queue<int> q;
    visited[src] = true;
    q.push(src);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        cout << u << " ";
        for (int v : adj[u]) if (!visited[v]) {
            visited[v] = true;
            q.push(v);
        }
    }
}`
            },
            {
              title: "BFS that returns shortest distances",
              code: `vector<int> bfsDist(int src, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<int> dist(n, -1);
    dist[src] = 0;
    queue<int> q; q.push(src);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) if (dist[v] == -1) {
            dist[v] = dist[u] + 1;
            q.push(v);
        }
    }
    return dist;
}`
            },
            {
              title: "Reconstruct the path from src to target",
              code: `vector<int> shortestPath(int src, int t, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<int> parent(n, -1);
    vector<bool> visited(n, false);
    queue<int> q; q.push(src); visited[src] = true;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        if (u == t) break;
        for (int v : adj[u]) if (!visited[v]) {
            visited[v] = true;
            parent[v] = u;
            q.push(v);
        }
    }
    if (!visited[t]) return {};
    vector<int> path;
    for (int cur = t; cur != -1; cur = parent[cur]) path.push_back(cur);
    reverse(path.begin(), path.end());
    return path;
}`
            },
            {
              title: "BFS on a grid (implicit graph)",
              code: `int shortestGrid(vector<vector<int>>& g, int sr, int sc, int tr, int tc) {
    int R = g.size(), C = g[0].size();
    vector<vector<int>> dist(R, vector<int>(C, -1));
    queue<pair<int,int>> q;
    dist[sr][sc] = 0;
    q.push({sr, sc});
    const int dr[] = {-1, 1, 0, 0};
    const int dc[] = { 0, 0,-1, 1};
    while (!q.empty()) {
        auto [r, c] = q.front(); q.pop();
        if (r == tr && c == tc) return dist[r][c];
        for (int k = 0; k < 4; k++) {
            int nr = r + dr[k], nc = c + dc[k];
            if (nr<0 || nr>=R || nc<0 || nc>=C) continue;
            if (g[nr][nc] == 1 || dist[nr][nc] != -1) continue;   // 1 = wall
            dist[nr][nc] = dist[r][c] + 1;
            q.push({nr, nc});
        }
    }
    return -1;
}`
            },
            {
              title: "Multi-source BFS — Rotting Oranges",
              code: `int rottenSecs(vector<vector<int>>& g) {
    int R = g.size(), C = g[0].size(), fresh = 0;
    queue<pair<int,int>> q;
    for (int r = 0; r < R; r++) for (int c = 0; c < C; c++) {
        if (g[r][c] == 2) q.push({r, c});
        else if (g[r][c] == 1) fresh++;
    }
    int t = 0;
    const int dr[] = {-1, 1, 0, 0}, dc[] = {0, 0,-1, 1};
    while (!q.empty() && fresh > 0) {
        int sz = q.size();
        for (int i = 0; i < sz; i++) {
            auto [r, c] = q.front(); q.pop();
            for (int k = 0; k < 4; k++) {
                int nr = r + dr[k], nc = c + dc[k];
                if (nr<0 || nr>=R || nc<0 || nc>=C || g[nr][nc] != 1) continue;
                g[nr][nc] = 2; fresh--;
                q.push({nr, nc});
            }
        }
        t++;
    }
    return fresh ? -1 : t;
}`
            },
            {
              title: "0-1 BFS with a deque",
              code: `vector<int> zeroOneBFS(int src, vector<vector<pair<int,int>>>& adj) {
    int n = adj.size();
    vector<int> dist(n, INT_MAX);
    dist[src] = 0;
    deque<int> dq; dq.push_front(src);
    while (!dq.empty()) {
        int u = dq.front(); dq.pop_front();
        for (auto [v, w] : adj[u]) {                   // w is 0 or 1
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                if (w == 0) dq.push_front(v);
                else        dq.push_back(v);
            }
        }
    }
    return dist;
}`
            }
          ],
          complexity: { time: "O(V + E) for explicit graphs; O(R · C) for grids", space: "O(V) for queue + visited (or distance) array" },
          keyPoints: [
            "BFS explores vertices in order of distance from the source — level by level.",
            "On an UNWEIGHTED graph, BFS gives the shortest path.",
            "Mark visited BEFORE pushing — otherwise the same vertex gets enqueued repeatedly.",
            "dist[v] = dist[u] + 1 gives the shortest distance from src to v.",
            "Reconstruct paths by storing parent[v] = u during the traversal.",
            "Multi-source BFS: push all sources at once with distance 0 → distance to NEAREST source for each cell.",
            "Grid BFS is BFS over an implicit graph — neighbours are computed via direction arrays.",
            "0-1 BFS uses a deque (push_front for 0-weight edges, push_back for 1-weight)."
          ],
          pitfalls: [
            "Marking visited AFTER pop — same vertex is enqueued many times, O(V²) blow-up.",
            "Forgetting to push the source onto the queue — algorithm never starts.",
            "Using a vector<bool> visited but updating dist instead — pick ONE source of truth.",
            "Grid problems: forgetting to check bounds — out-of-range access crashes.",
            "Confusing 'distance to NEAREST source' (multi-source BFS) with 'reachable from one source' (single-source).",
            "BFS on a weighted graph (non-unit weights) — gives WRONG shortest paths. Use Dijkstra."
          ],
          videoId: "geOBaNYYInc",
          videoSearch: "bfs breadth first search graph"
        },
        {
          name: "Depth-First Search (DFS)",
          explanation: `DFS is the other half of graph traversal. Where BFS explores wave-by-wave from the source, DFS goes as DEEP as possible down one path before backtracking and trying another. It naturally fits with recursion: the call stack does all the bookkeeping for you. DFS is the foundation for cycle detection, topological sort, connected components, strongly connected components (SCC), bridges and articulation points, and tree-of-life-grid problems.

Like BFS, runs in O(V + E). Unlike BFS, doesn't give shortest paths but DOES give a wealth of structural information (entry/exit times, back-edges, etc.) that BFS doesn't.

## The recursive algorithm

void dfs(int u, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[u] = true;
    // PRE-ORDER work (entering u)
    for (int v : adj[u]) {
        if (!visited[v]) dfs(v, adj, visited);
    }
    // POST-ORDER work (leaving u, all neighbours done)
}

The base structure is "mark visited; recurse on each unvisited neighbour". That's it. Most DFS algorithms add tiny bits of bookkeeping to this skeleton.

## Iterative DFS with an explicit stack

Mostly used when recursion would overflow on huge graphs. Logic is the same; you manage the stack yourself.

void dfsIter(int src, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<bool> visited(n, false);
    stack<int> st; st.push(src);
    while (!st.empty()) {
        int u = st.top(); st.pop();
        if (visited[u]) continue;
        visited[u] = true;
        for (int v : adj[u]) if (!visited[v]) st.push(v);
    }
}

Iterative DFS doesn't process neighbours in the same order as recursive, but it's still a valid DFS.

## Tree edges, back edges, cross edges

During DFS, edges in the graph fall into four categories (for directed graphs; undirected has only two):

- **Tree edge** — leads to an unvisited vertex (forms the DFS tree).
- **Back edge** — leads to an ancestor in the DFS tree (i.e. a vertex currently on the recursion stack). The defining sign of a CYCLE.
- **Forward edge** — leads to a descendant already finished.
- **Cross edge** — leads to a vertex in a different DFS subtree, already finished.

For an UNDIRECTED graph, edges are either tree edges or back edges.

## Cycle detection — undirected

During DFS, if you find an edge to an already-visited vertex that is NOT your direct parent, there's a cycle.

bool hasCycle(int u, int parent, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) {
            if (hasCycle(v, u, adj, visited)) return true;
        } else if (v != parent) {
            return true;
        }
    }
    return false;
}

## Cycle detection — directed (3-colour DFS)

Use three states: WHITE (unvisited), GRAY (in recursion stack), BLACK (finished). A directed cycle = an edge to a GRAY vertex.

enum { WHITE, GRAY, BLACK };
vector<int> color;

bool hasCycleDirected(int u, vector<vector<int>>& adj) {
    color[u] = GRAY;
    for (int v : adj[u]) {
        if (color[v] == GRAY) return true;                        // back edge → cycle
        if (color[v] == WHITE && hasCycleDirected(v, adj)) return true;
    }
    color[u] = BLACK;
    return false;
}

## DFS for connected components (undirected)

Run DFS from every unvisited vertex. Each launch covers one component.

int components = 0;
for (int u = 0; u < n; u++) {
    if (!visited[u]) {
        dfs(u, adj, visited);
        components++;
    }
}

## DFS for topological sort

For a directed acyclic graph (DAG), the FINISH ORDER of DFS, reversed, gives a topological ordering.

void dfsTopo(int u, vector<vector<int>>& adj, vector<bool>& visited, vector<int>& out) {
    visited[u] = true;
    for (int v : adj[u]) if (!visited[v]) dfsTopo(v, adj, visited, out);
    out.push_back(u);                              // post-order
}
// After running from every unvisited vertex:
reverse(out.begin(), out.end());                   // → topo order

## Entry / exit times — the foundation of advanced algorithms

Record a counter when you enter (tin[u]) and leave (tout[u]) each vertex. The intervals [tin[u], tout[u]] reveal ancestry: u is an ancestor of v iff tin[u] <= tin[v] && tout[v] <= tout[u]. Used for LCA, bridges, articulation points, SCC.

## When to use DFS

- Cycle detection (directed and undirected).
- Topological sort.
- Connected components / SCC.
- Bridges, articulation points (Tarjan's algorithm).
- Path enumeration (all paths from s to t).
- Anywhere you need POST-ORDER information (subtree summaries, finish times).

## Pitfalls of recursion

A million-vertex graph means a million-deep recursion → stack overflow. Switch to iterative DFS or BFS if depth is a concern.`,
          codeBlocks: [
            {
              title: "Recursive DFS",
              code: `void dfs(int u, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[u] = true;
    cout << u << " ";
    for (int v : adj[u]) if (!visited[v]) dfs(v, adj, visited);
}

void run(int src, vector<vector<int>>& adj) {
    vector<bool> visited(adj.size(), false);
    dfs(src, adj, visited);
}`
            },
            {
              title: "Iterative DFS with a stack",
              code: `void dfsIter(int src, vector<vector<int>>& adj) {
    int n = adj.size();
    vector<bool> visited(n, false);
    stack<int> st; st.push(src);
    while (!st.empty()) {
        int u = st.top(); st.pop();
        if (visited[u]) continue;
        visited[u] = true;
        cout << u << " ";
        for (int v : adj[u]) if (!visited[v]) st.push(v);
    }
}`
            },
            {
              title: "Cycle detection — undirected",
              code: `bool hasCycleUndirected(int u, int parent, vector<vector<int>>& adj, vector<bool>& vis) {
    vis[u] = true;
    for (int v : adj[u]) {
        if (!vis[v]) {
            if (hasCycleUndirected(v, u, adj, vis)) return true;
        } else if (v != parent) {
            return true;                                  // visited and not parent → cycle
        }
    }
    return false;
}`
            },
            {
              title: "Cycle detection — directed (3-colour DFS)",
              code: `enum { WHITE = 0, GRAY = 1, BLACK = 2 };

bool dfsCycle(int u, vector<vector<int>>& adj, vector<int>& color) {
    color[u] = GRAY;
    for (int v : adj[u]) {
        if (color[v] == GRAY) return true;                // back edge
        if (color[v] == WHITE && dfsCycle(v, adj, color)) return true;
    }
    color[u] = BLACK;
    return false;
}

bool hasDirectedCycle(vector<vector<int>>& adj) {
    int n = adj.size();
    vector<int> color(n, WHITE);
    for (int u = 0; u < n; u++)
        if (color[u] == WHITE && dfsCycle(u, adj, color)) return true;
    return false;
}`
            },
            {
              title: "Topological sort via DFS finish order",
              code: `void dfsTopo(int u, vector<vector<int>>& adj, vector<bool>& vis, vector<int>& out) {
    vis[u] = true;
    for (int v : adj[u]) if (!vis[v]) dfsTopo(v, adj, vis, out);
    out.push_back(u);                                     // post-order
}

vector<int> topoSort(vector<vector<int>>& adj) {
    int n = adj.size();
    vector<bool> vis(n, false);
    vector<int> out;
    for (int u = 0; u < n; u++) if (!vis[u]) dfsTopo(u, adj, vis, out);
    reverse(out.begin(), out.end());
    return out;
}`
            },
            {
              title: "DFS on a grid (implicit graph — Number of Islands)",
              code: `void dfsGrid(vector<vector<char>>& g, int r, int c) {
    int R = g.size(), C = g[0].size();
    if (r<0 || r>=R || c<0 || c>=C || g[r][c] != '1') return;
    g[r][c] = '0';                                        // mark visited by sinking
    dfsGrid(g, r+1, c); dfsGrid(g, r-1, c);
    dfsGrid(g, r, c+1); dfsGrid(g, r, c-1);
}

int numIslands(vector<vector<char>>& g) {
    int count = 0, R = g.size(), C = g[0].size();
    for (int r = 0; r < R; r++)
        for (int c = 0; c < C; c++)
            if (g[r][c] == '1') { count++; dfsGrid(g, r, c); }
    return count;
}`
            }
          ],
          complexity: { time: "O(V + E) for both recursive and iterative", space: "O(V) for visited + O(V) recursion stack" },
          keyPoints: [
            "DFS explores as deep as possible, then backtracks. Recursion is the natural implementation.",
            "Runs in O(V + E) for any representation that lets you enumerate adjacencies in linear time.",
            "Mark visited BEFORE recursing — same rule as BFS to avoid infinite loops.",
            "Cycle detection in undirected: a non-parent visited neighbour means a cycle.",
            "Cycle detection in directed: 3-colour DFS — a back edge to a GRAY vertex means a cycle.",
            "Topological sort = DFS post-order, reversed. Only valid on a DAG.",
            "Run DFS from every unvisited vertex to enumerate connected components.",
            "Entry / exit times (tin / tout) are the basis for bridges, articulation points, LCA, SCC."
          ],
          pitfalls: [
            "Deep recursion on a 10⁶-vertex chain blows the stack — switch to iterative DFS or BFS.",
            "Undirected cycle detection without the parent check — every edge looks like a back edge.",
            "Directed cycle detection with only two colours — you'll miss back edges to finished branches.",
            "Forgetting to launch DFS from every component — disconnected graphs leave vertices untouched.",
            "Modifying the adjacency list during DFS — iterators invalidate.",
            "Topological sort attempted on a graph with cycles — silent garbage output."
          ],
          videoId: "GmZNp9_-imM",
          videoSearch: "dfs depth first search graph"
        },
        {
          name: "Connected Components",
          explanation: `A connected component in an UNDIRECTED graph is a maximal set of mutually reachable vertices. Two vertices u and v are in the same component if there's a path from u to v (and therefore from v to u). The whole graph splits naturally into one or more disjoint components.

Finding them is one of the simplest and most useful graph algorithms — a direct application of "DFS/BFS launched from every unvisited vertex". It's the canonical loop pattern for ANY graph algorithm that needs to handle disconnected inputs.

## The standard loop

vector<bool> visited(n, false);
int components = 0;
for (int u = 0; u < n; u++) {
    if (!visited[u]) {
        dfs(u, adj, visited);          // explore everything reachable from u
        components++;
    }
}

Each launch of dfs(u, ...) visits every vertex in u's component and marks them visited. The next time the outer loop finds an unvisited vertex, you've discovered a NEW component.

## What you can compute per-component

Once you have the components loop in place, almost any per-component statistic falls out for free:

- **Number of components** — just increment a counter on each launch.
- **Component sizes** — count visited vertices inside each DFS call.
- **Component max / min / sum** — accumulate during DFS.
- **Largest component** — track the max size seen.
- **Which component does u belong to?** — pass a component ID to DFS.

vector<int> compId(n, -1);
int cid = 0;
for (int u = 0; u < n; u++) {
    if (compId[u] == -1) {
        dfsAssign(u, cid, adj, compId);
        cid++;
    }
}

## DFS vs BFS for components

Either works. DFS is shorter to write (recursion); BFS avoids stack-overflow risk on huge graphs. Same O(V + E).

## Components in a grid

For grid problems (Number of Islands, Number of Provinces, Max Area of Island), the "graph" is implicit — each cell is a vertex, edges go to 4-neighbours (or 8). The pattern is identical: scan every cell; if it's "land" and unvisited, launch DFS/BFS, increment counter.

int numIslands(vector<vector<char>>& g) {
    int count = 0;
    for (int r = 0; r < (int)g.size(); r++)
        for (int c = 0; c < (int)g[0].size(); c++)
            if (g[r][c] == '1') {
                sinkIsland(g, r, c);          // DFS or BFS
                count++;
            }
    return count;
}

## Disjoint Set Union (DSU) — the alternative

DSU is another way to find components, especially when edges arrive ONE AT A TIME (online / streaming). Initialise each vertex as its own component; for each edge (u, v), UNION the two sets. Component count = number of distinct roots. We'll cover DSU in detail in Week 6.

For static (all-edges-known) graphs, BFS/DFS is simpler. For dynamic edge insertion or Kruskal's MST, DSU is the right tool.

## Strongly Connected Components (SCC) — preview

In a DIRECTED graph, "connected" splits into two notions: weakly connected (treat edges as undirected) and STRONGLY connected (u reaches v AND v reaches u). Strongly connected components are found by Kosaraju's or Tarjan's algorithm — two DFS passes with some bookkeeping. Week 6 territory.

## Common applications

- **Count islands / provinces** — classic.
- **Largest connected region** — DFS, track max size.
- **Is graph connected?** — components == 1.
- **Friend group sizes** — components on a social-network graph.
- **Word ladders by Hamming distance** — components on a string graph.
- **2-colouring / bipartite check** — variant of DFS per component (next concept).

## Pure component count vs full classification

If you just need the COUNT, you don't need to remember which vertex belongs to which component — just increment a counter on each DFS launch. If downstream code asks "are u and v in the same component?", you need the compId[] array.

## Complexity

O(V + E) total, regardless of how many components there are. Each vertex is visited once across all DFS launches (since visited[] is shared).`,
          codeBlocks: [
            {
              title: "Count connected components (DFS)",
              code: `void dfs(int u, vector<vector<int>>& adj, vector<bool>& vis) {
    vis[u] = true;
    for (int v : adj[u]) if (!vis[v]) dfs(v, adj, vis);
}

int countComponents(int n, vector<vector<int>>& adj) {
    vector<bool> vis(n, false);
    int components = 0;
    for (int u = 0; u < n; u++) {
        if (!vis[u]) { dfs(u, adj, vis); components++; }
    }
    return components;
}`
            },
            {
              title: "Same idea with BFS (avoids deep recursion)",
              code: `void bfs(int src, vector<vector<int>>& adj, vector<bool>& vis) {
    queue<int> q; q.push(src); vis[src] = true;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) if (!vis[v]) { vis[v] = true; q.push(v); }
    }
}

int countComponentsBFS(int n, vector<vector<int>>& adj) {
    vector<bool> vis(n, false);
    int c = 0;
    for (int u = 0; u < n; u++) if (!vis[u]) { bfs(u, adj, vis); c++; }
    return c;
}`
            },
            {
              title: "Assign a component ID to each vertex",
              code: `void dfsAssign(int u, int id, vector<vector<int>>& adj, vector<int>& compId) {
    compId[u] = id;
    for (int v : adj[u]) if (compId[v] == -1) dfsAssign(v, id, adj, compId);
}

vector<int> labelComponents(int n, vector<vector<int>>& adj) {
    vector<int> compId(n, -1);
    int id = 0;
    for (int u = 0; u < n; u++) if (compId[u] == -1) { dfsAssign(u, id++, adj, compId); }
    return compId;
}`
            },
            {
              title: "Largest connected region in a grid",
              code: `int dfsArea(vector<vector<int>>& g, int r, int c) {
    int R = g.size(), C = g[0].size();
    if (r<0 || r>=R || c<0 || c>=C || g[r][c] != 1) return 0;
    g[r][c] = 0;                                  // mark visited
    return 1 + dfsArea(g, r+1, c) + dfsArea(g, r-1, c)
             + dfsArea(g, r, c+1) + dfsArea(g, r, c-1);
}

int maxAreaOfIsland(vector<vector<int>>& g) {
    int best = 0;
    for (int r = 0; r < (int)g.size(); r++)
        for (int c = 0; c < (int)g[0].size(); c++)
            if (g[r][c] == 1) best = max(best, dfsArea(g, r, c));
    return best;
}`
            },
            {
              title: "Number of Provinces (adjacency matrix input)",
              code: `int findCircleNum(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    vector<bool> vis(n, false);
    int comps = 0;
    function<void(int)> dfs = [&](int u) {
        vis[u] = true;
        for (int v = 0; v < n; v++)
            if (isConnected[u][v] && !vis[v]) dfs(v);
    };
    for (int u = 0; u < n; u++) if (!vis[u]) { dfs(u); comps++; }
    return comps;
}`
            },
            {
              title: "Iterative version (avoids stack-overflow risk)",
              code: `int countComponentsIter(int n, vector<vector<int>>& adj) {
    vector<bool> vis(n, false);
    int comps = 0;
    for (int s = 0; s < n; s++) {
        if (vis[s]) continue;
        comps++;
        stack<int> st; st.push(s);
        while (!st.empty()) {
            int u = st.top(); st.pop();
            if (vis[u]) continue;
            vis[u] = true;
            for (int v : adj[u]) if (!vis[v]) st.push(v);
        }
    }
    return comps;
}`
            }
          ],
          complexity: { time: "O(V + E) — each vertex/edge processed once across all components", space: "O(V) for visited + O(V) recursion (DFS) or queue (BFS)" },
          keyPoints: [
            "A connected component = maximal set of mutually reachable vertices (undirected graph).",
            "Standard loop: for each vertex, if unvisited, launch DFS/BFS and increment a counter.",
            "Same visited[] array is shared across all launches — total work is O(V + E).",
            "Per-component statistics (size, sum, max) drop out of the same DFS by accumulating during the recursion.",
            "Grid 'island' problems are connected components on an implicit graph.",
            "Component COUNT = number of DFS launches. Component LABEL = pass an ID into DFS.",
            "DSU is an alternative for dynamic (edge-by-edge) component tracking — covered in Week 6.",
            "Directed graphs use SCC instead — different algorithms (Kosaraju, Tarjan)."
          ],
          pitfalls: [
            "Forgetting to launch DFS from every vertex — only the source's component is counted.",
            "Sharing visited[] across CALLS to countComponents (e.g. multiple test cases) — pre-existing state leaks.",
            "Counting BOTH directions of an undirected edge as two — your graph has the right edges, but the iteration is OK; only matters for edge counting.",
            "Treating SCC like connected components on a directed graph — different algorithm.",
            "Off-by-one when initialising compId to 0 vs -1 — pick a sentinel that can't be a valid ID.",
            "Recursive DFS overflowing the stack on a 10⁶-vertex chain — use iterative or BFS."
          ],
          videoId: "GmZNp9_-imM",
          videoSearch: "connected components graph"
        },
        {
          name: "Bipartite Check",
          explanation: `A graph is BIPARTITE if its vertices can be split into two disjoint sets A and B such that every edge has one endpoint in A and one in B — equivalently, the graph can be 2-COLOURED (paint every vertex with one of two colours so that no edge has both endpoints the same colour).

Bipartite graphs are surprisingly common: any graph representing two distinct kinds of entities (students/courses, jobs/applicants, men/women in matching), any tree, and many planar graphs. There's a famous theorem: a graph is bipartite IFF it has no ODD-LENGTH cycle. That's the structural insight behind the algorithm.

## The algorithm — BFS 2-colouring

Pick any uncoloured vertex; colour it 0; BFS, alternating colours level by level. If you ever try to colour a vertex with the OPPOSITE colour to one it already has, the graph is not bipartite.

vector<int> color(n, -1);                          // -1 = uncoloured
for (int s = 0; s < n; s++) {
    if (color[s] != -1) continue;
    color[s] = 0;
    queue<int> q; q.push(s);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) {
            if (color[v] == -1) {
                color[v] = 1 - color[u];
                q.push(v);
            } else if (color[v] == color[u]) {
                return false;                       // conflict → odd cycle exists
            }
        }
    }
}
return true;

O(V + E). The outer loop handles disconnected graphs — every component is checked independently.

## DFS variant

DFS works equally well; same idea, recursion instead of queue.

bool dfs(int u, int c, vector<vector<int>>& adj, vector<int>& color) {
    color[u] = c;
    for (int v : adj[u]) {
        if (color[v] == -1) {
            if (!dfs(v, 1 - c, adj, color)) return false;
        } else if (color[v] == c) return false;
    }
    return true;
}

bool isBipartite(int n, vector<vector<int>>& adj) {
    vector<int> color(n, -1);
    for (int s = 0; s < n; s++)
        if (color[s] == -1 && !dfs(s, 0, adj, color)) return false;
    return true;
}

## Why odd cycles break bipartiteness

In an odd cycle (length 3, 5, 7, ...), if you alternate colours around the cycle, the last vertex ends up with the SAME colour as the first one it borders → conflict. Even cycles are fine — they alternate cleanly back to the start. So bipartite ⟺ no odd cycles.

## Disconnected graphs

The outer for (int s = 0; s < n; s++) loop is essential. Without it, you only check the source's component. A counter-example without it: a graph with two components, both bipartite individually, returns "false" because you never check the second one... actually you'd return "true" since the second component isn't visited. Either way, you'd miss bugs. ALWAYS loop over all vertices.

## Variant — return the two parts

Once you have the colour array, partitioning is trivial:

vector<int> partA, partB;
for (int u = 0; u < n; u++) {
    if (color[u] == 0) partA.push_back(u);
    else if (color[u] == 1) partB.push_back(u);
}

## When the graph is directed

Bipartiteness is usually defined for UNDIRECTED graphs. For a directed graph you can ignore directions and check the undirected version, OR you can use stricter definitions depending on the problem domain.

## Common problems

- **Is Graph Bipartite?** — direct.
- **Possible Bipartition** — model dislikes as edges; check if you can split.
- **Bipartite matching** (König's theorem) — uses bipartite structure to find maximum matching.
- **Graph 2-colouring** — same problem under a different name.
- **Detect odd cycle** — bipartite ⟺ no odd cycle; an odd cycle proves non-bipartite.

## When bipartite-ness matters

Beyond the direct yes/no question, knowing a graph is bipartite unlocks:
- **Maximum matching** via Hopcroft-Karp or Hungarian algorithm in polynomial time.
- **Minimum vertex cover** = maximum matching (König's theorem).
- **Maximum independent set** = n - max matching (complement of vertex cover).

For interview-scale problems, bipartite-check is usually the destination, not the launching pad.`,
          codeBlocks: [
            {
              title: "Bipartite check via BFS 2-colouring",
              code: `bool isBipartite(int n, vector<vector<int>>& adj) {
    vector<int> color(n, -1);
    for (int s = 0; s < n; s++) {
        if (color[s] != -1) continue;
        color[s] = 0;
        queue<int> q; q.push(s);
        while (!q.empty()) {
            int u = q.front(); q.pop();
            for (int v : adj[u]) {
                if (color[v] == -1) {
                    color[v] = 1 - color[u];
                    q.push(v);
                } else if (color[v] == color[u]) {
                    return false;
                }
            }
        }
    }
    return true;
}`
            },
            {
              title: "DFS variant",
              code: `bool dfsBi(int u, int c, vector<vector<int>>& adj, vector<int>& color) {
    color[u] = c;
    for (int v : adj[u]) {
        if (color[v] == -1) {
            if (!dfsBi(v, 1 - c, adj, color)) return false;
        } else if (color[v] == c) {
            return false;
        }
    }
    return true;
}

bool isBipartiteDFS(int n, vector<vector<int>>& adj) {
    vector<int> color(n, -1);
    for (int s = 0; s < n; s++)
        if (color[s] == -1 && !dfsBi(s, 0, adj, color)) return false;
    return true;
}`
            },
            {
              title: "Return the two partitions",
              code: `pair<vector<int>, vector<int>> bipartition(int n, vector<vector<int>>& adj) {
    vector<int> color(n, -1);
    for (int s = 0; s < n; s++) {
        if (color[s] != -1) continue;
        color[s] = 0;
        queue<int> q; q.push(s);
        while (!q.empty()) {
            int u = q.front(); q.pop();
            for (int v : adj[u]) {
                if (color[v] == -1) { color[v] = 1 - color[u]; q.push(v); }
                else if (color[v] == color[u]) return {{}, {}};
            }
        }
    }
    vector<int> A, B;
    for (int u = 0; u < n; u++) (color[u] == 0 ? A : B).push_back(u);
    return {A, B};
}`
            },
            {
              title: "Possible Bipartition — dislikes as edges",
              code: `bool possibleBipartition(int n, vector<vector<int>>& dislikes) {
    vector<vector<int>> adj(n + 1);
    for (auto& e : dislikes) {
        adj[e[0]].push_back(e[1]);
        adj[e[1]].push_back(e[0]);
    }
    return isBipartite(n + 1, adj);
}`
            },
            {
              title: "Detect a node where bipartite-ness breaks",
              code: `// Returns -1 if bipartite, else returns an offending vertex (for debugging).
int firstConflict(int n, vector<vector<int>>& adj) {
    vector<int> color(n, -1);
    for (int s = 0; s < n; s++) {
        if (color[s] != -1) continue;
        color[s] = 0;
        queue<int> q; q.push(s);
        while (!q.empty()) {
            int u = q.front(); q.pop();
            for (int v : adj[u]) {
                if (color[v] == -1) { color[v] = 1 - color[u]; q.push(v); }
                else if (color[v] == color[u]) return v;
            }
        }
    }
    return -1;
}`
            },
            {
              title: "Bipartite check on an adjacency matrix (small dense graphs)",
              code: `bool isBipartiteMat(int n, vector<vector<int>>& mat) {
    vector<int> color(n, -1);
    for (int s = 0; s < n; s++) {
        if (color[s] != -1) continue;
        color[s] = 0;
        queue<int> q; q.push(s);
        while (!q.empty()) {
            int u = q.front(); q.pop();
            for (int v = 0; v < n; v++) {
                if (!mat[u][v]) continue;
                if (color[v] == -1) { color[v] = 1 - color[u]; q.push(v); }
                else if (color[v] == color[u]) return false;
            }
        }
    }
    return true;
}`
            }
          ],
          complexity: { time: "O(V + E)", space: "O(V) for the colour array + O(V) BFS queue / DFS stack" },
          keyPoints: [
            "Bipartite = vertices split into two sets, every edge crosses between them. Equivalent: 2-colourable.",
            "BFS 2-colouring: source gets colour 0; neighbours alternate. Conflict = not bipartite.",
            "DFS variant works identically — pick whichever fits the surrounding code.",
            "A graph is bipartite IFF it has no ODD-LENGTH cycle.",
            "Run from EVERY uncoloured vertex — handles disconnected graphs.",
            "Once 2-coloured, the partitions are just the colour-0 and colour-1 vertex sets.",
            "Bipartite-ness unlocks polynomial-time max matching, min vertex cover (König), max independent set.",
            "Trees are always bipartite (no cycles at all)."
          ],
          pitfalls: [
            "Forgetting the 'for every vertex' outer loop — disconnected components go unchecked.",
            "Colouring with -1 vs 0 vs 1 inconsistently — pick one sentinel for 'uncoloured' and stick to it.",
            "Mistaking 'visited' for 'coloured' — colour replaces visited entirely.",
            "Bipartite check on a directed graph without converting to undirected first — wrong by definition.",
            "Returning true after only checking one component — must verify ALL components are bipartite.",
            "Self-loops break bipartite-ness (a vertex would need to differ from itself) — handle or rule out in input."
          ],
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
          explanation: `A cycle in a graph is a closed walk that visits no edge twice — equivalently, a path that starts and ends at the same vertex. Detecting cycles is essential because many algorithms only work on acyclic graphs (topological sort needs a DAG, MST is only defined on acyclic spanning subgraphs, scheduling without circular dependencies needs to know there are none).

The algorithm differs between UNDIRECTED and DIRECTED graphs because what "cycle" means differs.

## Undirected graph — DFS with parent tracking

In an undirected graph, every edge is two-way. When DFS visits u and looks at neighbour v, finding v VISITED could mean either "v is u's direct parent in the DFS tree" (just the back-edge of the same edge — not a cycle) or "v is some other ancestor / sibling" (a real cycle).

Track the parent; ignore that one back-edge.

bool dfsU(int u, int parent, vector<vector<int>>& adj, vector<bool>& vis) {
    vis[u] = true;
    for (int v : adj[u]) {
        if (!vis[v]) {
            if (dfsU(v, u, adj, vis)) return true;
        } else if (v != parent) {
            return true;                       // visited & not parent → cycle
        }
    }
    return false;
}

bool hasCycleUndirected(int n, vector<vector<int>>& adj) {
    vector<bool> vis(n, false);
    for (int s = 0; s < n; s++)
        if (!vis[s] && dfsU(s, -1, adj, vis)) return true;
    return false;
}

O(V + E).

## Undirected — DSU alternative

For each edge (u, v): if u and v are already in the same component, adding this edge would form a cycle. Otherwise, union the two components. We'll cover DSU mechanics in lesson 6.4; here's the punchline:

bool cycleViaDSU(int n, vector<pair<int,int>>& edges) {
    DSU dsu(n);
    for (auto& [u, v] : edges) {
        if (dsu.find(u) == dsu.find(v)) return true;
        dsu.unite(u, v);
    }
    return false;
}

Same O((V + E) α(n)). Useful when edges arrive online.

## Directed graph — 3-colour DFS

In a directed graph, a cycle is a back-edge to a vertex currently ON the recursion stack. Use three states:

WHITE (0) — unvisited
GRAY  (1) — visited but recursion hasn't returned yet (i.e. on the call stack)
BLACK (2) — visited and fully processed

A directed cycle = an edge from any vertex to a GRAY vertex.

enum { WHITE = 0, GRAY = 1, BLACK = 2 };

bool dfsD(int u, vector<vector<int>>& adj, vector<int>& color) {
    color[u] = GRAY;
    for (int v : adj[u]) {
        if (color[v] == GRAY) return true;
        if (color[v] == WHITE && dfsD(v, adj, color)) return true;
    }
    color[u] = BLACK;
    return false;
}

Two-colour (just visited / unvisited) is NOT enough — you'd flag edges to finished branches as cycles when they're really just cross-edges.

## Directed — Kahn's algorithm (BFS topo)

Alternative approach: try to topologically sort the graph. If you can't, there's a cycle.

vector<int> indeg(n, 0);
for (int u = 0; u < n; u++) for (int v : adj[u]) indeg[v]++;
queue<int> q;
for (int u = 0; u < n; u++) if (indeg[u] == 0) q.push(u);
int processed = 0;
while (!q.empty()) {
    int u = q.front(); q.pop();
    processed++;
    for (int v : adj[u]) if (--indeg[v] == 0) q.push(v);
}
bool hasCycle = (processed != n);

If Kahn's processes fewer than n vertices, the unprocessed ones form a cycle. We'll cover Kahn's in detail in the next lesson.

## Why directed and undirected differ

In undirected, an edge (u, v) is the SAME thing as (v, u). The "back-edge" from v to u in DFS is just that same edge re-encountered, not a cycle. You need to skip exactly that one.

In directed, edges have orientations. An edge from v to u, when u is an ancestor of v, is a different edge from the tree edge (u → v) and absolutely indicates a cycle.

## Locating the cycle (not just detecting)

For undirected: when you find the back-edge, walk the parent chain from u back to v.

For directed (3-colour): when you hit a GRAY vertex v from u, walk the recursion stack from u back to v to extract the cycle.

For Kahn's: the vertices with non-zero indegree after the algorithm are exactly those in cycles.

## When you actually NEED cycle detection

- Validating that a graph is a DAG before running topological sort.
- Detecting deadlock in resource-allocation graphs.
- Checking course prerequisites (Course Schedule problem).
- Build-system / package-manager dependency checks.
- Verifying that a tree is actually a tree (n-1 edges, connected, no cycle).

## Complexity summary

| Method                        | Complexity   | Works on              |
|-------------------------------|--------------|------------------------|
| Undirected DFS + parent       | O(V + E)     | Undirected             |
| Undirected DSU                | O((V+E)α(n)) | Undirected (edge stream)|
| Directed 3-colour DFS         | O(V + E)     | Directed               |
| Directed Kahn's (topo)        | O(V + E)     | Directed               |`,
          codeBlocks: [
            {
              title: "Undirected cycle detection (DFS with parent)",
              code: `bool dfsU(int u, int parent, vector<vector<int>>& adj, vector<bool>& vis) {
    vis[u] = true;
    for (int v : adj[u]) {
        if (!vis[v]) {
            if (dfsU(v, u, adj, vis)) return true;
        } else if (v != parent) {
            return true;
        }
    }
    return false;
}

bool hasCycleUndirected(int n, vector<vector<int>>& adj) {
    vector<bool> vis(n, false);
    for (int s = 0; s < n; s++)
        if (!vis[s] && dfsU(s, -1, adj, vis)) return true;
    return false;
}`
            },
            {
              title: "Directed cycle detection (3-colour DFS)",
              code: `enum { WHITE = 0, GRAY = 1, BLACK = 2 };

bool dfsD(int u, vector<vector<int>>& adj, vector<int>& color) {
    color[u] = GRAY;
    for (int v : adj[u]) {
        if (color[v] == GRAY) return true;
        if (color[v] == WHITE && dfsD(v, adj, color)) return true;
    }
    color[u] = BLACK;
    return false;
}

bool hasCycleDirected(int n, vector<vector<int>>& adj) {
    vector<int> color(n, WHITE);
    for (int u = 0; u < n; u++)
        if (color[u] == WHITE && dfsD(u, adj, color)) return true;
    return false;
}`
            },
            {
              title: "Directed cycle detection via Kahn's algorithm",
              code: `bool hasCycleKahn(int n, vector<vector<int>>& adj) {
    vector<int> indeg(n, 0);
    for (int u = 0; u < n; u++) for (int v : adj[u]) indeg[v]++;
    queue<int> q;
    for (int u = 0; u < n; u++) if (indeg[u] == 0) q.push(u);
    int processed = 0;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        processed++;
        for (int v : adj[u]) if (--indeg[v] == 0) q.push(v);
    }
    return processed != n;
}`
            },
            {
              title: "Course Schedule — directly an application",
              code: `bool canFinish(int numCourses, vector<vector<int>>& prereqs) {
    vector<vector<int>> adj(numCourses);
    vector<int> indeg(numCourses, 0);
    for (auto& p : prereqs) {
        adj[p[1]].push_back(p[0]);
        indeg[p[0]]++;
    }
    queue<int> q;
    for (int u = 0; u < numCourses; u++) if (indeg[u] == 0) q.push(u);
    int done = 0;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        done++;
        for (int v : adj[u]) if (--indeg[v] == 0) q.push(v);
    }
    return done == numCourses;
}`
            },
            {
              title: "Extract the actual cycle (undirected) — walk parents",
              code: `int cycleStart = -1, cycleEnd = -1;
vector<int> parent;

bool dfsCycleU(int u, int par, vector<vector<int>>& adj, vector<int>& color) {
    color[u] = GRAY;
    for (int v : adj[u]) {
        if (color[v] == WHITE) {
            parent[v] = u;
            if (dfsCycleU(v, u, adj, color)) return true;
        } else if (v != par) {
            cycleStart = v; cycleEnd = u;
            return true;
        }
    }
    color[u] = BLACK;
    return false;
}

vector<int> findCycleU(int n, vector<vector<int>>& adj) {
    parent.assign(n, -1);
    vector<int> color(n, WHITE);
    for (int s = 0; s < n; s++)
        if (color[s] == WHITE && dfsCycleU(s, -1, adj, color)) break;
    if (cycleStart == -1) return {};
    vector<int> cyc;
    for (int v = cycleEnd; v != cycleStart; v = parent[v]) cyc.push_back(v);
    cyc.push_back(cycleStart);
    reverse(cyc.begin(), cyc.end());
    return cyc;
}`
            }
          ],
          complexity: { time: "O(V + E)", space: "O(V) for colour / visited / parent arrays + O(V) DFS stack" },
          keyPoints: [
            "Undirected: DFS with parent tracking. Visited & not parent → cycle.",
            "Directed: 3-colour DFS. Edge to GRAY vertex → cycle (back edge).",
            "Two-colour visited-only is INSUFFICIENT for directed graphs (mis-flags cross edges as cycles).",
            "Kahn's algorithm (topo sort) detects directed cycles: if fewer than n vertices processed, there's a cycle.",
            "Undirected DSU: edge (u,v) where u and v already share a root → cycle.",
            "Always loop over EVERY uncoloured/unvisited vertex — disconnected components matter.",
            "To EXTRACT the cycle, track parents and walk the chain from the offending edge.",
            "Cycle detection is required before any DAG-only algorithm (topo sort, longest path on DAG, scheduler)."
          ],
          pitfalls: [
            "Undirected DFS without parent check — every edge looks like a cycle.",
            "Multi-edges between same pair of vertices — the parent check incorrectly skips real cycles. Use edge IDs instead.",
            "Directed cycle detection with 'visited bool' instead of three colours — wrong on cross edges.",
            "Running DFS only from vertex 0 — disconnected pieces never get checked.",
            "Confusing 'has cycle' with 'is a tree' — a tree has no cycles AND is connected.",
            "Self-loops (vertex with edge to itself) — detected by both algorithms; ensure your code doesn't special-case them."
          ],
          videoId: "hGscdp38JKM",
          videoSearch: "cycle detection graph"
        },
        {
          name: "Topological Sort (Kahn's + DFS)",
          explanation: `A topological ordering of a directed graph is a linear arrangement of its vertices such that for every directed edge u → v, u appears BEFORE v in the order. Intuitively: "do all prerequisites before the thing that needs them". Such an ordering exists IFF the graph is a DAG (directed acyclic graph) — cycles make it impossible.

Topo sort is the engine for course scheduling, build-system dependency resolution, package install order, deadlock detection, and many DP-on-DAG algorithms.

## Two standard algorithms

**Kahn's algorithm** (BFS-based, uses indegrees) and **DFS-based** (uses post-order finish times). Both run in O(V + E). Pick whichever feels natural.

## Kahn's algorithm — the BFS approach

Idea: any vertex with indegree 0 has no prerequisites, so put it first. Removing it might reduce other indegrees to 0; those become next. Repeat.

1. Compute indegree of every vertex.
2. Push every indegree-0 vertex into a queue.
3. Pop u, append to result, "remove" u by decrementing the indegrees of all its neighbours; push any that hit 0.
4. If you appended fewer than V vertices, the graph has a cycle.

vector<int> indeg(n, 0);
for (int u = 0; u < n; u++) for (int v : adj[u]) indeg[v]++;

queue<int> q;
for (int u = 0; u < n; u++) if (indeg[u] == 0) q.push(u);

vector<int> order;
while (!q.empty()) {
    int u = q.front(); q.pop();
    order.push_back(u);
    for (int v : adj[u]) if (--indeg[v] == 0) q.push(v);
}

if ((int)order.size() != n) { // cycle detected
    // ... handle cycle ...
}

## DFS-based topo sort

Idea: do DFS; record each vertex AFTER all its descendants are processed (post-order). Reverse the result.

void dfs(int u, vector<vector<int>>& adj, vector<bool>& vis, vector<int>& post) {
    vis[u] = true;
    for (int v : adj[u]) if (!vis[v]) dfs(v, adj, vis, post);
    post.push_back(u);
}

vector<int> topoSort(int n, vector<vector<int>>& adj) {
    vector<bool> vis(n, false);
    vector<int> post;
    for (int u = 0; u < n; u++) if (!vis[u]) dfs(u, adj, vis, post);
    reverse(post.begin(), post.end());
    return post;
}

This version assumes the graph is a DAG. To detect cycles, layer in 3-colour DFS (previous lesson).

## When ordering isn't unique

A graph can have MANY valid topological orderings. If there are several indegree-0 vertices at any step, Kahn's can pick any of them. To get the LEXICOGRAPHICALLY smallest order, use a priority queue (min-heap) instead of a regular queue.

priority_queue<int, vector<int>, greater<int>> pq;
// ... rest of Kahn's identical

## Kahn's vs DFS — which to use

| Property                       | Kahn's              | DFS                 |
|--------------------------------|---------------------|---------------------|
| Detects cycles natively        | Yes                 | Needs 3-colour      |
| Lexicographic smallest order   | Easy (use min-heap) | Harder              |
| Iterative (no recursion)       | Yes                 | No (or rewrite)     |
| Natural for layer-by-layer     | Yes                 | No                  |
| Natural for longest-path DP    | Either              | Either              |

Kahn's is often the better choice for problems that ask about ordering directly.

## Applications

- **Course Schedule II** — actually return the order.
- **Alien Dictionary** — extract character ordering from sorted word list, then topo sort.
- **Build System** — compile in dependency order.
- **Recipes** — make sure all ingredients are prepared before the dish.
- **Longest path in a DAG** — process in topo order, dp[v] = max(dp[u] + w) for all incoming u.
- **Number of paths from s to t in a DAG** — process in topo order, dp[v] = sum of dp[u] for all incoming u.

## On a cyclic graph

Kahn's reports a cycle (fewer than V processed). DFS-without-cycle-check returns a bogus order; pair it with 3-colour DFS or use Kahn's.

## Complexity

O(V + E) time and O(V) space (queue + indegree array, or DFS stack + post-order list). Same as plain BFS/DFS — topo sort is essentially decorated BFS/DFS.`,
          codeBlocks: [
            {
              title: "Kahn's algorithm",
              code: `vector<int> topoKahn(int n, vector<vector<int>>& adj) {
    vector<int> indeg(n, 0);
    for (int u = 0; u < n; u++) for (int v : adj[u]) indeg[v]++;
    queue<int> q;
    for (int u = 0; u < n; u++) if (indeg[u] == 0) q.push(u);
    vector<int> order;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        order.push_back(u);
        for (int v : adj[u]) if (--indeg[v] == 0) q.push(v);
    }
    if ((int)order.size() != n) return {};       // cycle → no topo order
    return order;
}`
            },
            {
              title: "DFS-based topo sort",
              code: `void dfsTopo(int u, vector<vector<int>>& adj, vector<bool>& vis, vector<int>& post) {
    vis[u] = true;
    for (int v : adj[u]) if (!vis[v]) dfsTopo(v, adj, vis, post);
    post.push_back(u);
}

vector<int> topoDFS(int n, vector<vector<int>>& adj) {
    vector<bool> vis(n, false);
    vector<int> post;
    for (int u = 0; u < n; u++) if (!vis[u]) dfsTopo(u, adj, vis, post);
    reverse(post.begin(), post.end());
    return post;
}`
            },
            {
              title: "Lexicographically smallest topo order (Kahn's + min-heap)",
              code: `vector<int> topoLex(int n, vector<vector<int>>& adj) {
    vector<int> indeg(n, 0);
    for (int u = 0; u < n; u++) for (int v : adj[u]) indeg[v]++;
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int u = 0; u < n; u++) if (indeg[u] == 0) pq.push(u);
    vector<int> order;
    while (!pq.empty()) {
        int u = pq.top(); pq.pop();
        order.push_back(u);
        for (int v : adj[u]) if (--indeg[v] == 0) pq.push(v);
    }
    if ((int)order.size() != n) return {};
    return order;
}`
            },
            {
              title: "Course Schedule II — return the order or {} if impossible",
              code: `vector<int> findOrder(int numCourses, vector<vector<int>>& prereqs) {
    vector<vector<int>> adj(numCourses);
    vector<int> indeg(numCourses, 0);
    for (auto& p : prereqs) {
        adj[p[1]].push_back(p[0]);
        indeg[p[0]]++;
    }
    queue<int> q;
    for (int u = 0; u < numCourses; u++) if (indeg[u] == 0) q.push(u);
    vector<int> order;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        order.push_back(u);
        for (int v : adj[u]) if (--indeg[v] == 0) q.push(v);
    }
    return (int)order.size() == numCourses ? order : vector<int>{};
}`
            },
            {
              title: "Longest path in a DAG via topo order",
              code: `int longestPath(int n, vector<vector<pair<int,int>>>& adj) {   // adj[u] = (v, w)
    // Build indegrees and flat-edge view
    vector<int> indeg(n, 0);
    for (int u = 0; u < n; u++) for (auto& [v, w] : adj[u]) indeg[v]++;
    queue<int> q;
    for (int u = 0; u < n; u++) if (indeg[u] == 0) q.push(u);
    vector<int> dp(n, 0);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (auto& [v, w] : adj[u]) {
            dp[v] = max(dp[v], dp[u] + w);
            if (--indeg[v] == 0) q.push(v);
        }
    }
    return *max_element(dp.begin(), dp.end());
}`
            },
            {
              title: "Alien Dictionary — extract character order via topo sort",
              code: `string alienOrder(vector<string>& words) {
    unordered_map<char, set<char>> adj;
    unordered_map<char, int> indeg;
    for (auto& w : words) for (char c : w) indeg[c] = 0;
    for (int i = 0; i + 1 < (int)words.size(); i++) {
        string& a = words[i];
        string& b = words[i + 1];
        int j = 0, L = min(a.size(), b.size());
        while (j < L && a[j] == b[j]) j++;
        if (j == L) { if (a.size() > b.size()) return ""; continue; }
        if (!adj[a[j]].count(b[j])) { adj[a[j]].insert(b[j]); indeg[b[j]]++; }
    }
    queue<char> q;
    for (auto& [c, d] : indeg) if (d == 0) q.push(c);
    string out;
    while (!q.empty()) {
        char u = q.front(); q.pop();
        out.push_back(u);
        for (char v : adj[u]) if (--indeg[v] == 0) q.push(v);
    }
    return (int)out.size() == (int)indeg.size() ? out : "";
}`
            }
          ],
          complexity: { time: "O(V + E)", space: "O(V) for indegree/queue/post array + O(V) DFS stack" },
          keyPoints: [
            "Topo order exists IFF the graph is a DAG. Cycles make it impossible.",
            "Kahn's: BFS by indegree. Push indegree-0 vertices; decrement neighbours; push new zeros.",
            "DFS: process post-order, then REVERSE to get topo order.",
            "Kahn's detects cycles natively (fewer than V processed → cycle).",
            "Multiple valid orders exist when there are several indegree-0 vertices at once.",
            "For lexicographically smallest order, use a min-heap instead of a queue in Kahn's.",
            "Topo sort is the prerequisite for longest-path-on-DAG and DP-on-DAG.",
            "Course Schedule, Alien Dictionary, Task Scheduling are all topo-sort problems."
          ],
          pitfalls: [
            "DFS topo sort on a graph with cycles — silent garbage output; cycle-check separately.",
            "Forgetting to reverse the post-order in the DFS version.",
            "Off-by-one in indegree initialisation — make sure every vertex 0..n-1 is represented.",
            "Multi-edges between u and v increase indegree multiple times — usually fine, but watch out.",
            "Returning empty vector for 'no cycle' vs 'cycle' inconsistently — pick a sentinel and document it.",
            "Using regular queue when problem asks for lex-smallest order — produces a valid but wrong-priority order."
          ],
          videoId: "Yh5o_PSK9to",
          videoSearch: "topological sort kahn algorithm"
        },
        {
          name: "Dijkstra's Shortest Path",
          explanation: `Dijkstra's algorithm finds the shortest path from a single source to every other vertex in a graph with NON-NEGATIVE edge weights. Runs in O((V + E) log V) with a binary heap (the everyday implementation). For unweighted graphs, BFS does the same job in O(V + E); for graphs with NEGATIVE weights, you need Bellman-Ford (next lesson).

This is one of the most important algorithms in all of computer science — it underpins every routing protocol, every map app, every shortest-path query in production systems.

## The greedy idea

Maintain dist[v] = best known distance from source to v (start dist[src] = 0, everything else ∞).

Repeatedly: pick the unfinalised vertex with the smallest dist, FINALISE it, then RELAX its outgoing edges (update dist[neighbour] if a shorter path through this vertex was found).

Once a vertex is finalised, its dist is correct — no future relaxation can improve it. This is why negative weights break the algorithm: a later edge with negative weight could improve an "already finalised" distance.

## With a priority queue — the standard implementation

A min-heap of (distance, vertex) pairs gives O(log V) per extract-min. Each edge is relaxed at most once, costing O(log V) per relaxation. Total: O((V + E) log V).

vector<long long> dist(n, LLONG_MAX);
dist[src] = 0;
priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<>> pq;
pq.push({0, src});
while (!pq.empty()) {
    auto [d, u] = pq.top(); pq.pop();
    if (d > dist[u]) continue;                    // stale entry, ignore
    for (auto [v, w] : adj[u]) {
        if (dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;
            pq.push({dist[v], v});
        }
    }
}

The "if (d > dist[u]) continue;" is the lazy-delete trick — we don't actually update the old heap entry; we just push a new one and skip the stale one when popped.

## Why non-negative weights?

Dijkstra finalises the vertex with smallest dist FIRST. The argument is: any other path to that vertex must go through one of the unfinalised vertices, all of which have larger dist values. Adding more non-negative edge weights can only INCREASE the path length, so the direct dist is optimal.

With a negative edge, you could go through a longer-prefix vertex and end up with a shorter total — breaking the invariant.

## Reconstructing paths

Add a parent array; update parent[v] = u whenever you relax dist[v] via u.

vector<int> parent(n, -1);
// inside the relaxation:
parent[v] = u;

To get the path from src to t:
vector<int> path;
for (int cur = t; cur != -1; cur = parent[cur]) path.push_back(cur);
reverse(path.begin(), path.end());

## Dense graph variant — O(V²)

For very dense graphs (E close to V²), a plain array-based extract-min beats the priority queue. Find the min by scanning all V vertices; relax; repeat V times.

O(V² + E) = O(V²) for dense, much better than O(V² log V) when E ≈ V².

## When NOT to use Dijkstra

- Negative weights → Bellman-Ford (O(VE)) or SPFA.
- Unweighted graph → plain BFS (faster constants).
- 0-1 weights → 0-1 BFS with deque (O(V+E)).
- All-pairs shortest paths → Floyd-Warshall (O(V³)) if V is small.
- Negative-weight CYCLES → no shortest paths exist; Bellman-Ford detects this.

## Common applications

- **Network routing** (OSPF, IS-IS).
- **GPS navigation / map apps**.
- **Network Delay Time** — Dijkstra from source, return max distance.
- **Cheapest Flights Within K Stops** — Dijkstra with an extra state (stops used).
- **Path With Minimum Effort** — Dijkstra where "distance" = max edge weight on path.
- **Swim in Rising Water** — Dijkstra on grid with terrain heights.

## Variants worth knowing

- **A*** — Dijkstra + heuristic. Same algorithm with priority = dist + h(v).
- **Bidirectional Dijkstra** — run from both ends simultaneously.
- **Dial's algorithm** — for small integer weights, replace heap with buckets.`,
          codeBlocks: [
            {
              title: "Dijkstra with min-heap (the everyday version)",
              code: `vector<long long> dijkstra(int n, int src, vector<vector<pair<int,int>>>& adj) {
    vector<long long> dist(n, LLONG_MAX);
    dist[src] = 0;
    priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<>> pq;
    pq.push({0, src});
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto& [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`
            },
            {
              title: "Dijkstra with path reconstruction",
              code: `pair<vector<long long>, vector<int>> dijkstraPath(int n, int src, vector<vector<pair<int,int>>>& adj) {
    vector<long long> dist(n, LLONG_MAX);
    vector<int> parent(n, -1);
    dist[src] = 0;
    priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<>> pq;
    pq.push({0, src});
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto& [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                parent[v] = u;
                pq.push({dist[v], v});
            }
        }
    }
    return {dist, parent};
}

vector<int> reconstruct(int t, vector<int>& parent) {
    vector<int> p;
    for (int cur = t; cur != -1; cur = parent[cur]) p.push_back(cur);
    reverse(p.begin(), p.end());
    return p;
}`
            },
            {
              title: "Dense-graph Dijkstra — O(V²)",
              code: `vector<long long> dijkstraDense(int n, int src, vector<vector<int>>& w) {
    vector<long long> dist(n, LLONG_MAX);
    vector<bool> used(n, false);
    dist[src] = 0;
    for (int i = 0; i < n; i++) {
        int u = -1;
        for (int j = 0; j < n; j++)
            if (!used[j] && (u == -1 || dist[j] < dist[u])) u = j;
        if (dist[u] == LLONG_MAX) break;
        used[u] = true;
        for (int v = 0; v < n; v++) {
            if (w[u][v] != INT_MAX && dist[u] + w[u][v] < dist[v])
                dist[v] = dist[u] + w[u][v];
        }
    }
    return dist;
}`
            },
            {
              title: "Network Delay Time — Dijkstra application",
              code: `int networkDelayTime(vector<vector<int>>& times, int n, int k) {
    vector<vector<pair<int,int>>> adj(n + 1);
    for (auto& t : times) adj[t[0]].push_back({t[1], t[2]});
    auto dist = dijkstra(n + 1, k, adj);
    long long maxD = 0;
    for (int i = 1; i <= n; i++) {
        if (dist[i] == LLONG_MAX) return -1;
        maxD = max(maxD, dist[i]);
    }
    return (int)maxD;
}`
            },
            {
              title: "Path With Minimum Effort — Dijkstra where 'distance' is max edge weight",
              code: `int minimumEffortPath(vector<vector<int>>& h) {
    int R = h.size(), C = h[0].size();
    vector<vector<int>> dist(R, vector<int>(C, INT_MAX));
    dist[0][0] = 0;
    priority_queue<tuple<int,int,int>, vector<tuple<int,int,int>>, greater<>> pq;
    pq.push({0, 0, 0});
    const int dr[] = {-1, 1, 0, 0}, dc[] = {0, 0,-1, 1};
    while (!pq.empty()) {
        auto [d, r, c] = pq.top(); pq.pop();
        if (d > dist[r][c]) continue;
        if (r == R - 1 && c == C - 1) return d;
        for (int k = 0; k < 4; k++) {
            int nr = r + dr[k], nc = c + dc[k];
            if (nr<0 || nr>=R || nc<0 || nc>=C) continue;
            int nd = max(d, abs(h[nr][nc] - h[r][c]));
            if (nd < dist[nr][nc]) { dist[nr][nc] = nd; pq.push({nd, nr, nc}); }
        }
    }
    return 0;
}`
            }
          ],
          complexity: { time: "Min-heap: O((V + E) log V); array: O(V²)", space: "O(V) for dist + O(E) heap entries in the worst case" },
          keyPoints: [
            "Single-source shortest paths in non-negative weighted graphs.",
            "Greedy: finalise the closest unfinalised vertex, relax its outgoing edges, repeat.",
            "Priority queue (min-heap of (dist, vertex)) gives O((V + E) log V).",
            "Lazy delete trick: push new entries on relaxation, skip stale ones on pop.",
            "DOES NOT work with negative weights — switch to Bellman-Ford or SPFA.",
            "For unweighted graphs, use plain BFS (faster constants); for 0-1 weights, use 0-1 BFS with a deque.",
            "Track parent[v] = u during relaxation to reconstruct the actual path.",
            "Variants: A* (heuristic), bidirectional, Dial's (small-weight buckets)."
          ],
          pitfalls: [
            "Using int instead of long long for distances — easy overflow on graphs with large weights.",
            "Forgetting the 'if (d > dist[u]) continue;' guard — TLE on dense graphs because of stale entries.",
            "Pushing to the priority queue before relaxation succeeds — wrong order; relax first, then push.",
            "Running Dijkstra on a graph with even one negative edge — silently wrong answers.",
            "Initialising dist to 0 instead of INT_MAX/LLONG_MAX — every vertex looks like the source.",
            "Forgetting that A* needs an ADMISSIBLE heuristic (never overestimates) — otherwise wrong shortest path."
          ],
          videoId: "SnZ2SQARTVI",
          videoSearch: "dijkstra shortest path"
        },
        {
          name: "Bellman-Ford",
          explanation: `Bellman-Ford solves the same problem as Dijkstra — single-source shortest paths — but it handles NEGATIVE edge weights. The trade-off is speed: it runs in O(V · E) instead of O((V+E) log V). It also DETECTS negative-weight cycles, which is a question Dijkstra can't even ask.

Use Bellman-Ford when (a) weights can be negative, (b) you need to detect negative cycles, or (c) you need a simple algorithm that doesn't depend on a priority queue. Otherwise Dijkstra wins.

## The algorithm

Initialise dist[src] = 0, everything else ∞. Then repeat V-1 times: for EVERY edge (u, v, w), if dist[u] + w < dist[v], update dist[v] = dist[u] + w. After V-1 passes, all shortest paths are final.

vector<long long> dist(n, LLONG_MAX);
dist[src] = 0;
for (int i = 0; i < n - 1; i++) {
    for (auto& [u, v, w] : edges) {
        if (dist[u] != LLONG_MAX && dist[u] + w < dist[v])
            dist[v] = dist[u] + w;
    }
}

## Why V-1 passes?

The shortest path from src to ANY vertex has at most V-1 edges (else it would visit a vertex twice → cycle). In each pass, we "extend" shortest paths by one edge. After V-1 passes, every shortest path has been fully reconstructed.

## Negative cycle detection

After the V-1 passes are done, do ONE MORE pass. If any edge can still be relaxed, that path goes through a negative cycle — there is no finite shortest path along it.

for (auto& [u, v, w] : edges) {
    if (dist[u] != LLONG_MAX && dist[u] + w < dist[v])
        return "negative cycle detected";
}

To find WHICH vertices are affected, mark them and propagate.

## Bellman-Ford vs Dijkstra side-by-side

| Property                  | Dijkstra         | Bellman-Ford              |
|---------------------------|------------------|---------------------------|
| Time                      | O((V+E) log V)   | O(V·E)                    |
| Negative edges OK?        | No               | Yes                       |
| Negative-cycle detect?    | No               | Yes                       |
| Data structure            | Priority queue   | Edge list                 |
| Common use                | Most cases       | When weights can be neg.  |

For E = O(V²) (dense), Bellman-Ford is O(V³) — usually too slow for V > 500.

## SPFA (Shortest Path Faster Algorithm) — speed-up

Bellman-Ford touches every edge V-1 times even if most edges aren't useful in later passes. SPFA optimises this with a queue: relax only from vertices whose dist was just improved.

queue<int> q;
vector<bool> inQueue(n, false);
dist[src] = 0; q.push(src); inQueue[src] = true;
while (!q.empty()) {
    int u = q.front(); q.pop(); inQueue[u] = false;
    for (auto& [v, w] : adj[u]) {
        if (dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;
            if (!inQueue[v]) { q.push(v); inQueue[v] = true; }
        }
    }
}

SPFA is O(V·E) worst case (same as Bellman-Ford) but often much faster in practice. It also detects negative cycles (if a vertex enters the queue ≥ V times, there's a negative cycle reachable from src).

## Common applications

- **Currency arbitrage** — find a cycle of currency conversions whose product > 1 (take logs → negative cycle).
- **Cheapest Flights Within K Stops** — Bellman-Ford with K+1 passes naturally gives "at most K stops".
- **Graphs from physics / chemistry** with energy differences as weights (can be negative).
- **Distance Vector routing protocols** (RIP) — distributed Bellman-Ford.

## What about all-pairs?

For ALL-pairs shortest paths with negative weights (but no negative cycles), Floyd-Warshall is O(V³) and works on edge weights including negatives.

## Reconstructing paths

Same trick as Dijkstra: track parent[v] = u whenever you relax dist[v].

## Edge cases

- An unreachable vertex keeps dist = ∞ forever.
- A vertex INSIDE a negative cycle has -∞ shortest distance.
- A vertex reachable FROM a negative cycle also has -∞ (you can loop around the cycle arbitrarily many times before continuing).

After detection, set dist[v] = -∞ for all vertices reachable from any "still-relaxable" vertex.`,
          codeBlocks: [
            {
              title: "Bellman-Ford — edge-list version",
              code: `vector<long long> bellmanFord(int n, int src, vector<tuple<int,int,int>>& edges) {
    vector<long long> dist(n, LLONG_MAX);
    dist[src] = 0;
    for (int i = 0; i < n - 1; i++) {
        for (auto& [u, v, w] : edges) {
            if (dist[u] != LLONG_MAX && dist[u] + w < dist[v])
                dist[v] = dist[u] + w;
        }
    }
    return dist;
}`
            },
            {
              title: "Detect negative-weight cycle",
              code: `bool hasNegativeCycle(int n, int src, vector<tuple<int,int,int>>& edges) {
    vector<long long> dist(n, LLONG_MAX);
    dist[src] = 0;
    for (int i = 0; i < n - 1; i++) {
        for (auto& [u, v, w] : edges) {
            if (dist[u] != LLONG_MAX && dist[u] + w < dist[v])
                dist[v] = dist[u] + w;
        }
    }
    // One more pass: any relaxation = negative cycle
    for (auto& [u, v, w] : edges) {
        if (dist[u] != LLONG_MAX && dist[u] + w < dist[v]) return true;
    }
    return false;
}`
            },
            {
              title: "Cheapest Flights Within K Stops — K+1 passes",
              code: `int cheapestFlights(int n, vector<vector<int>>& flights, int src, int dst, int K) {
    vector<int> dist(n, INT_MAX);
    dist[src] = 0;
    for (int i = 0; i <= K; i++) {
        vector<int> next = dist;
        for (auto& f : flights) {
            int u = f[0], v = f[1], w = f[2];
            if (dist[u] != INT_MAX && dist[u] + w < next[v])
                next[v] = dist[u] + w;
        }
        dist = next;
    }
    return dist[dst] == INT_MAX ? -1 : dist[dst];
}`
            },
            {
              title: "SPFA — usually faster than plain Bellman-Ford",
              code: `vector<long long> spfa(int n, int src, vector<vector<pair<int,int>>>& adj) {
    vector<long long> dist(n, LLONG_MAX);
    dist[src] = 0;
    vector<bool> inQ(n, false);
    queue<int> q;
    q.push(src); inQ[src] = true;
    while (!q.empty()) {
        int u = q.front(); q.pop(); inQ[u] = false;
        for (auto& [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                if (!inQ[v]) { q.push(v); inQ[v] = true; }
            }
        }
    }
    return dist;
}`
            },
            {
              title: "Currency arbitrage — log transform → negative cycle",
              code: `bool hasArbitrage(vector<vector<double>>& rates) {
    int n = rates.size();
    vector<tuple<int,int,double>> edges;
    for (int u = 0; u < n; u++)
        for (int v = 0; v < n; v++)
            if (u != v) edges.push_back({u, v, -log(rates[u][v])});
    vector<double> dist(n, 0.0);   // any start vertex; arbitrage = global negative cycle
    for (int i = 0; i < n - 1; i++)
        for (auto& [u, v, w] : edges)
            if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
    for (auto& [u, v, w] : edges)
        if (dist[u] + w < dist[v]) return true;
    return false;
}`
            },
            {
              title: "Path reconstruction with Bellman-Ford",
              code: `vector<int> bellmanPath(int n, int src, int t, vector<tuple<int,int,int>>& edges) {
    vector<long long> dist(n, LLONG_MAX);
    vector<int> parent(n, -1);
    dist[src] = 0;
    for (int i = 0; i < n - 1; i++)
        for (auto& [u, v, w] : edges)
            if (dist[u] != LLONG_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                parent[v] = u;
            }
    if (dist[t] == LLONG_MAX) return {};
    vector<int> path;
    for (int c = t; c != -1; c = parent[c]) path.push_back(c);
    reverse(path.begin(), path.end());
    return path;
}`
            }
          ],
          complexity: { time: "Bellman-Ford O(V·E); SPFA O(V·E) worst case, often faster in practice", space: "O(V) for distances + O(E) for the edge list" },
          keyPoints: [
            "Single-source shortest paths with NEGATIVE edges allowed.",
            "V-1 passes, each relaxing every edge — total O(V·E).",
            "One extra pass detects negative cycles (any relaxation = cycle reachable).",
            "Slower than Dijkstra but works where Dijkstra can't.",
            "SPFA is a queue-based optimisation — same worst case, faster in practice.",
            "For 'at most K stops', use exactly K+1 passes with a current/next array.",
            "Currency arbitrage: take logs to convert multiplicative cycles into negative additive cycles.",
            "Distance Vector routing (RIP) is distributed Bellman-Ford."
          ],
          pitfalls: [
            "Forgetting the 'dist[u] != INF' guard — INT_MAX + w overflows.",
            "Stopping after V-1 passes without the cycle-check pass — miss negative cycles.",
            "Mutating dist[] in place across edges in 'K stops' — copy to a 'next' array each pass.",
            "Negative SELF-LOOP is a degenerate negative cycle — detected automatically.",
            "Using Bellman-Ford on dense graphs with V = 10⁴ — V·E = 10⁸+ ops, TLE.",
            "SPFA worst case is still O(V·E) — adversarial inputs exist; don't assume it's always fast."
          ],
          videoId: "LKfIjVZ6kg4",
          videoSearch: "bellman ford shortest path"
        },
        {
          name: "DSU (Union-Find) with path compression",
          explanation: `DSU (Disjoint Set Union, also called Union-Find) tracks a partition of n elements into disjoint sets and supports two operations: FIND (which set does x belong to?) and UNION (merge the sets containing x and y). With two simple optimisations — path compression and union by rank — both operations run in O(α(n)) amortised — essentially O(1) for any n we'll ever see.

DSU is the data structure for connectivity questions that arrive incrementally: edges streaming in, build Kruskal's MST, detect cycles in undirected graphs online, group accounts by transitive merges, percolation simulation, image segmentation.

## The mental model

Each element points to a "parent" element. Following parent pointers eventually leads to a ROOT — the representative of that element's set. Two elements are in the SAME set iff they have the SAME root.

vector<int> parent(n);
for (int i = 0; i < n; i++) parent[i] = i;       // initially each element is its own root

## Find — follow parents to the root

int find(int x) {
    while (parent[x] != x) x = parent[x];
    return x;
}

Naively O(depth-of-tree). With path compression, amortised O(α(n)).

## Path compression

While finding the root, RE-POINT every visited node directly to the root. Future queries on those nodes are O(1).

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

(Iterative version with two passes is also common; either works.)

## Union — merge two sets

To merge sets containing x and y: find their roots, point one root to the other.

void unite(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    parent[rx] = ry;
}

To keep the tree shallow, attach the SMALLER tree to the larger one. That's union by RANK (an upper bound on height) or union by SIZE (number of nodes).

vector<int> rnk(n, 0);
void unite(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rnk[rx] < rnk[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rnk[rx] == rnk[ry]) rnk[rx]++;
}

## Why nearly O(1)

With both optimisations, the AMORTISED time for m operations on n elements is O(m · α(n)) where α is the inverse Ackermann function — grows so slowly that α(n) < 5 for any n ≤ 2^65536. Practically O(1).

## Common patterns

**Count distinct sets**: maintain a counter; decrement on each successful union.

**Set size**: keep a size[root] array; on union, add sizes; lookup size of x's set is size[find(x)].

**Cycle detection on undirected graph**: for each edge (u, v), if find(u) == find(v), edge forms a cycle. Otherwise, unite.

**Kruskal's MST**: sort edges by weight; for each, if endpoints in different sets, take the edge and unite.

## Killer applications

- **Kruskal's MST** — DSU + sorted edges.
- **Connected components on streamed edges** — add edges one at a time.
- **Number of Provinces / Friend Circles** — group friends transitively.
- **Accounts Merge** — merge accounts that share any email.
- **Redundant Connection** — first edge that closes a cycle.
- **Smallest String With Swaps** — group swap-equivalent indices; sort within each group.
- **Number of Islands II** (online) — grid cells turn into land one at a time; report component count after each.
- **Percolation simulation** — connect cells when both are "open"; check if top is connected to bottom.

## When NOT to use DSU

- When you need DELETIONS (DSU doesn't support split).
- When you need to enumerate the members of a set (DSU stores only the partition structure).
- When edges arrive offline and the graph is static — plain DFS/BFS for components is simpler.

## Variants

- **Weighted DSU** (sometimes called "DSU with potential") — track relative offsets between elements; supports queries like "are x and y in the same set, and if so what's the difference?"
- **DSU with rollback** — supports undo, used in offline algorithms; no path compression in this case.
- **Persistent DSU** — for offline / functional-style problems.

## Complexity recap

| Op    | Naive   | Path compression only | + union by rank        |
|-------|---------|------------------------|------------------------|
| find  | O(n)    | O(log n) amortised     | O(α(n)) amortised      |
| unite | O(n)    | O(log n) amortised     | O(α(n)) amortised      |

Always use BOTH optimisations. The constant overhead is negligible and the asymptotic gain is dramatic.`,
          codeBlocks: [
            {
              title: "DSU with path compression + union by rank",
              code: `struct DSU {
    vector<int> parent, rnk;
    DSU(int n) : parent(n), rnk(n, 0) {
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);   // path compression
        return parent[x];
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rnk[rx] < rnk[ry]) swap(rx, ry);
        parent[ry] = rx;
        if (rnk[rx] == rnk[ry]) rnk[rx]++;
        return true;
    }
    bool sameSet(int x, int y) { return find(x) == find(y); }
};`
            },
            {
              title: "DSU with set sizes",
              code: `struct DSU {
    vector<int> parent, size;
    int components;
    DSU(int n) : parent(n), size(n, 1), components(n) {
        iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (size[rx] < size[ry]) swap(rx, ry);
        parent[ry] = rx;
        size[rx] += size[ry];
        components--;
        return true;
    }
    int setSize(int x) { return size[find(x)]; }
};`
            },
            {
              title: "Cycle detection on undirected graph (DSU)",
              code: `bool hasCycleDSU(int n, vector<pair<int,int>>& edges) {
    DSU dsu(n);
    for (auto& [u, v] : edges)
        if (!dsu.unite(u, v)) return true;
    return false;
}`
            },
            {
              title: "Kruskal's MST",
              code: `long long kruskal(int n, vector<tuple<int,int,int>>& edges) {
    sort(edges.begin(), edges.end(),
         [](const auto& a, const auto& b) { return get<2>(a) < get<2>(b); });
    DSU dsu(n);
    long long total = 0;
    int taken = 0;
    for (auto& [u, v, w] : edges) {
        if (dsu.unite(u, v)) { total += w; if (++taken == n - 1) break; }
    }
    return total;
}`
            },
            {
              title: "Number of Connected Components — incremental",
              code: `int countComponentsDSU(int n, vector<pair<int,int>>& edges) {
    DSU dsu(n);
    int c = n;
    for (auto& [u, v] : edges) if (dsu.unite(u, v)) c--;
    return c;
}`
            },
            {
              title: "Accounts Merge — group by shared email",
              code: `// Each account is a list: [name, email1, email2, ...]. Merge accounts sharing any email.
vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    int n = accounts.size();
    DSU dsu(n);
    unordered_map<string, int> emailToIdx;
    for (int i = 0; i < n; i++) {
        for (int j = 1; j < (int)accounts[i].size(); j++) {
            auto& e = accounts[i][j];
            if (emailToIdx.count(e)) dsu.unite(i, emailToIdx[e]);
            else emailToIdx[e] = i;
        }
    }
    unordered_map<int, set<string>> groups;
    for (auto& [e, i] : emailToIdx) groups[dsu.find(i)].insert(e);
    vector<vector<string>> out;
    for (auto& [root, emails] : groups) {
        vector<string> row{accounts[root][0]};
        row.insert(row.end(), emails.begin(), emails.end());
        out.push_back(row);
    }
    return out;
}`
            }
          ],
          complexity: { time: "find/unite O(α(n)) amortised — practically O(1)", space: "O(n) for parent + rank/size arrays" },
          keyPoints: [
            "DSU tracks a partition of n elements into disjoint sets via 'parent' pointers.",
            "find(x) follows parents to the root — the canonical representative of x's set.",
            "unite(x, y) merges sets by pointing one root at the other.",
            "Path compression: re-point every visited node directly to the root during find.",
            "Union by rank/size: attach the smaller tree to the larger to keep height shallow.",
            "Both optimisations together give O(α(n)) — practically constant time.",
            "Cycle detection (undirected): if both endpoints have the same root, the edge forms a cycle.",
            "Kruskal's MST is the canonical DSU application; Number of Provinces and Accounts Merge are too."
          ],
          pitfalls: [
            "Implementing find without path compression — O(n) per query on adversarial inputs.",
            "Implementing unite without size/rank — worst case is a chain again.",
            "Forgetting that two elements with different VALUES can still be in the same SET — compare roots, not values.",
            "Trying to UN-unite — DSU doesn't support split without 'rollback' variants.",
            "Iterating parent[] directly to find members of a set — DSU only stores the partition; you need a separate per-root list.",
            "Off-by-one when initialising parent[i] = i — easy to miss with vector default-init."
          ],
          videoId: "YZ40AZQi0bk",
          videoSearch: "union find disjoint set union"
        },
        {
          name: "MST — Kruskal & Prim",
          explanation: `A spanning tree of a connected undirected graph is a subset of edges that connects ALL vertices with NO CYCLES — exactly V-1 edges. A MINIMUM SPANNING TREE (MST) is the spanning tree whose total edge weight is minimum.

MSTs answer the question "what's the cheapest set of edges that keeps the graph connected?" — and that comes up everywhere: laying network cable, road construction, clustering, image segmentation, approximating the Traveling Salesman.

Two classic algorithms: Kruskal's (sort edges + DSU) and Prim's (grow from a vertex + heap). Both are O(E log V) for typical inputs; pick whichever matches your data representation.

## Kruskal's algorithm

1. Sort all edges by weight.
2. Walk edges from cheapest to most expensive. For each (u, v):
   - If u and v are in DIFFERENT components, ADD this edge to the MST and UNITE the components.
   - Otherwise (same component), skip — adding would form a cycle.
3. Stop when you've added V-1 edges.

long long kruskal(int n, vector<tuple<int,int,int>>& edges) {
    sort(edges.begin(), edges.end(),
         [](const auto& a, const auto& b) { return get<2>(a) < get<2>(b); });
    DSU dsu(n);
    long long total = 0;
    int taken = 0;
    for (auto& [u, v, w] : edges) {
        if (dsu.unite(u, v)) {
            total += w;
            if (++taken == n - 1) break;
        }
    }
    return total;
}

Time: O(E log E) for the sort + O(E α(n)) for the DSU operations = O(E log E) = O(E log V) (since E ≤ V²).

## Prim's algorithm

Like Dijkstra but with edge weights instead of path lengths. Grow the MST one vertex at a time, always adding the CHEAPEST EDGE that connects an in-tree vertex to an out-of-tree vertex.

1. Pick any starting vertex; mark it "in tree".
2. Repeatedly: pick the cheapest edge between an in-tree and out-of-tree vertex; add it; mark the new vertex in-tree.
3. Stop when all V vertices are in.

long long prim(int n, vector<vector<pair<int,int>>>& adj) {
    vector<bool> inMST(n, false);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    pq.push({0, 0});                           // (weight, vertex) — start at 0
    long long total = 0;
    int taken = 0;
    while (!pq.empty() && taken < n) {
        auto [w, u] = pq.top(); pq.pop();
        if (inMST[u]) continue;
        inMST[u] = true;
        total += w;
        taken++;
        for (auto& [v, ew] : adj[u])
            if (!inMST[v]) pq.push({ew, v});
    }
    return total;
}

Time: O((V + E) log V) with a binary heap.

## Why both algorithms work — the cut property

The CUT PROPERTY: for any cut (split of vertices into two non-empty sets), the lightest edge crossing the cut is in SOME MST.

Both algorithms exploit this differently:
- Kruskal's: when you union two components, you're picking the lightest edge across the cut between them.
- Prim's: when you pick the cheapest edge leaving the in-tree set, that's the lightest edge across the in-tree / out-of-tree cut.

## Kruskal's vs Prim's — when to use which

| Property                | Kruskal's          | Prim's              |
|-------------------------|--------------------|---------------------|
| Data structure          | Edge list + DSU    | Adjacency list + heap |
| Time complexity         | O(E log E)         | O((V+E) log V)      |
| Good for                | Sparse graphs      | Dense graphs        |
| Dense-graph variant     | n/a                | O(V²) with array    |
| Parallelisable          | Yes (Boruvka)      | Less so             |
| Returns disconnected MSF if input disconnected | Yes | No (only finds one component's MST) |

For the typical contest/interview problem, Kruskal's is simpler to write — just sort + DSU.

## Minimum spanning forest

If the graph isn't connected, there's no single spanning tree. Kruskal's produces a MINIMUM SPANNING FOREST — an MST for each component. Prim's, started from one vertex, only finds that component's MST.

## Edge cases

- **Multiple MSTs** — when several edges have the same weight. The TOTAL is unique, but the specific tree may vary.
- **Duplicate edges** — both algorithms handle them fine; only the cheapest will be used.
- **Self-loops** — never in an MST; both algorithms naturally skip them.

## Common applications

- **Min Cost to Connect All Points** — direct MST on point pairs (Manhattan / Euclidean distance).
- **Connecting Cities With Minimum Cost** — direct.
- **Optimize Water Distribution in a Village** — model "wells" as edges to a virtual node.
- **Clustering** — remove the K-1 heaviest MST edges to split into K clusters (single-linkage clustering).
- **Steiner tree approximations** — heuristics built on MST.
- **Image segmentation** — MST on pixel-similarity graph.`,
          codeBlocks: [
            {
              title: "Kruskal's MST (using the DSU from the previous lesson)",
              code: `long long kruskal(int n, vector<tuple<int,int,int>>& edges) {
    sort(edges.begin(), edges.end(),
         [](const auto& a, const auto& b) { return get<2>(a) < get<2>(b); });
    DSU dsu(n);
    long long total = 0;
    int taken = 0;
    for (auto& [u, v, w] : edges) {
        if (dsu.unite(u, v)) {
            total += w;
            if (++taken == n - 1) break;
        }
    }
    return total;
}`
            },
            {
              title: "Prim's MST with a min-heap",
              code: `long long prim(int n, vector<vector<pair<int,int>>>& adj) {
    vector<bool> inMST(n, false);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    pq.push({0, 0});                          // start vertex 0, edge weight 0
    long long total = 0;
    int taken = 0;
    while (!pq.empty() && taken < n) {
        auto [w, u] = pq.top(); pq.pop();
        if (inMST[u]) continue;
        inMST[u] = true;
        total += w;
        taken++;
        for (auto& [v, ew] : adj[u])
            if (!inMST[v]) pq.push({ew, v});
    }
    return total;
}`
            },
            {
              title: "Return the edges of the MST (not just the weight)",
              code: `vector<tuple<int,int,int>> kruskalEdges(int n, vector<tuple<int,int,int>>& edges) {
    sort(edges.begin(), edges.end(),
         [](const auto& a, const auto& b) { return get<2>(a) < get<2>(b); });
    DSU dsu(n);
    vector<tuple<int,int,int>> mst;
    for (auto& [u, v, w] : edges) {
        if (dsu.unite(u, v)) {
            mst.push_back({u, v, w});
            if ((int)mst.size() == n - 1) break;
        }
    }
    return mst;
}`
            },
            {
              title: "Min Cost to Connect All Points (Manhattan distance)",
              code: `int minCostConnect(vector<vector<int>>& points) {
    int n = points.size();
    vector<tuple<int,int,int>> edges;
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++) {
            int d = abs(points[i][0] - points[j][0])
                  + abs(points[i][1] - points[j][1]);
            edges.push_back({i, j, d});
        }
    return (int)kruskal(n, edges);
}`
            },
            {
              title: "Prim's for a dense graph — O(V²) array version",
              code: `long long primDense(int n, vector<vector<int>>& w) {
    vector<int> minEdge(n, INT_MAX);
    vector<bool> inMST(n, false);
    minEdge[0] = 0;
    long long total = 0;
    for (int i = 0; i < n; i++) {
        int u = -1;
        for (int j = 0; j < n; j++)
            if (!inMST[j] && (u == -1 || minEdge[j] < minEdge[u])) u = j;
        if (minEdge[u] == INT_MAX) return -1;     // disconnected
        inMST[u] = true;
        total += minEdge[u];
        for (int v = 0; v < n; v++)
            if (!inMST[v] && w[u][v] < minEdge[v]) minEdge[v] = w[u][v];
    }
    return total;
}`
            },
            {
              title: "Cluster a point set into K clusters via MST",
              code: `// Build MST, sort its edges by weight, remove the K-1 heaviest.
// Connected components in what remains = K clusters.
vector<int> mstClustering(int n, vector<tuple<int,int,int>>& edges, int K) {
    auto mst = kruskalEdges(n, edges);
    sort(mst.begin(), mst.end(),
         [](const auto& a, const auto& b) { return get<2>(a) > get<2>(b); });
    mst.erase(mst.begin(), mst.begin() + (K - 1));   // drop K-1 heaviest
    DSU dsu(n);
    for (auto& [u, v, w] : mst) dsu.unite(u, v);
    vector<int> cluster(n);
    for (int i = 0; i < n; i++) cluster[i] = dsu.find(i);
    return cluster;
}`
            }
          ],
          complexity: { time: "Kruskal O(E log E); Prim with heap O((V+E) log V); Prim dense O(V²)", space: "O(V + E)" },
          keyPoints: [
            "MST = lowest-weight set of V-1 edges connecting all V vertices, no cycles.",
            "Kruskal's: sort edges ascending; greedily take each that doesn't form a cycle (DSU).",
            "Prim's: grow from a starting vertex, always add the cheapest edge to a new vertex (heap).",
            "Both rely on the CUT PROPERTY — lightest edge across any cut is in some MST.",
            "Kruskal's wins for sparse graphs and online edge streams; Prim's wins for dense graphs.",
            "Stop early once you've taken V-1 edges (or all V vertices in for Prim's).",
            "Total weight is unique even when multiple MSTs exist; the specific edges may vary on ties.",
            "Clustering, network design, image segmentation, and Steiner-tree approximations all build on MST."
          ],
          pitfalls: [
            "Forgetting to skip same-component edges in Kruskal's — wrong answer (you'd add edges that form cycles).",
            "Using int for weight sum when E · max_weight can overflow — switch to long long.",
            "Prim's with priority_queue and stale entries — need the if (inMST[u]) continue; guard.",
            "Disconnected graph: Kruskal's returns the MSF (one tree per component); Prim's returns only the starting component's MST — handle disconnected explicitly.",
            "Prim's O(V²) on a sparse graph wastes time — use the heap version for E << V².",
            "Multi-graph (multiple edges between same pair) — both algorithms handle it; only cheapest survives."
          ],
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
          explanation: `Dynamic Programming is the technique of solving problems by breaking them into overlapping subproblems and remembering each subproblem's answer. The whole chapter is built on three rungs of the same ladder: a brute-force recursion, the same recursion plus a cache (memoization, top-down DP), and an iterative version that fills a table (tabulation, bottom-up DP). Mastering the conversion between these three forms is what separates "I can solve easy DP" from "I can solve any DP".

This concept walks the entire ladder on a single example and gives you the mechanical recipe you'll use for every DP problem afterwards.

## The two requirements for DP

A problem is a DP candidate if it has:

1. **Optimal substructure** — the answer for a larger input can be expressed in terms of answers for SMALLER inputs.
2. **Overlapping subproblems** — the same subproblem is solved many times in a naive recursion.

If only (1) holds and subproblems don't overlap, you have divide-and-conquer (merge sort), not DP.

## Rung 1 — recursion

Start by writing the natural recursive solution. Don't optimise. Just translate the problem statement into "answer(input) = combine(answer(smaller_input1), answer(smaller_input2), ...)".

Example: number of ways to climb n stairs taking 1 or 2 at a time.

int climb(int n) {
    if (n == 0) return 1;             // one way: do nothing
    if (n < 0)  return 0;             // overshot — no way
    return climb(n - 1) + climb(n - 2);
}

Time: O(2ⁿ). Way too slow for n > 30.

## Rung 2 — memoization (top-down DP)

Add a cache. Before computing, check if you've already solved this subproblem. After computing, store the result.

vector<int> memo(n + 1, -1);
int climb(int n) {
    if (n == 0) return 1;
    if (n < 0)  return 0;
    if (memo[n] != -1) return memo[n];
    return memo[n] = climb(n - 1) + climb(n - 2);
}

Time: O(n) — each subproblem computed once. Space: O(n) cache + O(n) recursion stack.

The recursion's natural shape stays intact. The cache turns exponential into linear.

## Rung 3 — tabulation (bottom-up DP)

Replace recursion with an iterative fill of the same table. Start from base cases; build up to the answer.

vector<int> dp(n + 1, 0);
dp[0] = 1;
for (int i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + (i >= 2 ? dp[i - 2] : 0);
}
return dp[n];

Time: O(n). Space: O(n) — but no recursion stack.

## Rung 4 — space-optimised tabulation

If dp[i] only depends on the last K values, you don't need the whole array. For Fibonacci-style problems, two scalars suffice:

int a = 1, b = 1;                     // dp[0], dp[1]
for (int i = 2; i <= n; i++) {
    int c = a + b;
    a = b; b = c;
}
return b;

Time: O(n). Space: O(1).

## The conversion recipe

Recursion → memoization: identify the parameters (the STATE). Create a cache keyed by those parameters. At the top of the function check cache; at the return store result.

Memoization → tabulation:
1. Make the cache a real array dp[].
2. Identify the base cases — these are the cells you fill first.
3. Identify the dependency order — bigger subproblems depend on smaller ones; fill in that order (usually small-to-large).
4. Return dp[full_input].

Tabulation → space-optimised: identify which OLD cells the current step actually uses. If only the last K rows/columns matter, keep only those.

## State design — the only thing that's actually hard

The state must include EVERYTHING that affects the answer. For climb-stairs, just n. For 0/1 knapsack, (i, capacity). For edit distance, (i, j) — the two string pointers.

If you forget a parameter → wrong answer or slow correct answer.
If you include too many → cache too big, slow / OOM.

The right state is usually the recursive call's parameter set.

## Top-down vs bottom-up — when to use which

**Top-down (memoization)**:
+ Stays close to the natural recursion — easy to derive.
+ Only computes subproblems you actually need.
- Recursion overhead.
- Stack depth = O(state depth).

**Bottom-up (tabulation)**:
+ No recursion overhead, no stack overflow risk.
+ Easier to space-optimise.
- May compute subproblems you don't need.
- Requires figuring out the dependency order.

Start with memoization. Convert to tabulation if you need the speed or the stack risk.

## Why this matters

90% of the "hard" DP problems on LeetCode are easy ONCE you have the recursion. The trick is writing the recursion. Get good at that and tabulation is mechanical.

The next nine lessons all follow this ladder: state out the problem → recurrence → memoize → tabulate → space-optimise.`,
          codeBlocks: [
            {
              title: "Climbing Stairs — naive recursion (exponential)",
              code: `int climbNaive(int n) {
    if (n == 0) return 1;
    if (n < 0)  return 0;
    return climbNaive(n - 1) + climbNaive(n - 2);
}`
            },
            {
              title: "Climbing Stairs — memoized (top-down DP)",
              code: `vector<int> memo;
int climbMemo(int n) {
    if (n == 0) return 1;
    if (n < 0)  return 0;
    if (memo[n] != -1) return memo[n];
    return memo[n] = climbMemo(n - 1) + climbMemo(n - 2);
}

int climbStairs(int n) {
    memo.assign(n + 1, -1);
    return climbMemo(n);
}`
            },
            {
              title: "Climbing Stairs — tabulation (bottom-up DP)",
              code: `int climbTab(int n) {
    vector<int> dp(n + 1, 0);
    dp[0] = 1;
    for (int i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + (i >= 2 ? dp[i - 2] : 0);
    }
    return dp[n];
}`
            },
            {
              title: "Climbing Stairs — space-optimised (O(1))",
              code: `int climbOpt(int n) {
    int a = 1, b = 1;                 // dp[0], dp[1]
    for (int i = 2; i <= n; i++) {
        int c = a + b;
        a = b;
        b = c;
    }
    return b;
}`
            },
            {
              title: "The four-rung ladder applied to Fibonacci",
              code: `// Rung 1 — exponential
long long fib1(int n) { if (n < 2) return n; return fib1(n-1) + fib1(n-2); }

// Rung 2 — memoized
vector<long long> mem;
long long fib2(int n) {
    if (n < 2) return n;
    if (mem[n] != -1) return mem[n];
    return mem[n] = fib2(n - 1) + fib2(n - 2);
}

// Rung 3 — tabulated
long long fib3(int n) {
    vector<long long> dp(n + 1);
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}

// Rung 4 — space-optimised
long long fib4(int n) {
    long long a = 0, b = 1;
    for (int i = 2; i <= n; i++) { long long c = a + b; a = b; b = c; }
    return n == 0 ? 0 : b;
}`
            },
            {
              title: "Identifying state — Min Path Sum on a grid (preview)",
              code: `// State = (r, c). dp[r][c] = min path sum from (0,0) to (r,c).
// Recurrence: dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1]).
int minPathSum(vector<vector<int>>& g) {
    int R = g.size(), C = g[0].size();
    vector<vector<int>> dp(R, vector<int>(C));
    dp[0][0] = g[0][0];
    for (int c = 1; c < C; c++) dp[0][c] = dp[0][c-1] + g[0][c];
    for (int r = 1; r < R; r++) dp[r][0] = dp[r-1][0] + g[r][0];
    for (int r = 1; r < R; r++)
        for (int c = 1; c < C; c++)
            dp[r][c] = g[r][c] + min(dp[r-1][c], dp[r][c-1]);
    return dp[R-1][C-1];
}`
            }
          ],
          complexity: { time: "O(state_count × work_per_state) — typically O(n) to O(n²) depending on state design", space: "O(state_count) for the table + O(depth) for recursion (top-down only)" },
          keyPoints: [
            "DP needs OPTIMAL SUBSTRUCTURE and OVERLAPPING SUBPROBLEMS.",
            "Four rungs: recursion → memoization → tabulation → space-optimised.",
            "Recursion is just the problem statement translated into code. Don't optimise yet.",
            "Memoization adds a cache to the recursion — turns 2ⁿ into n in many cases.",
            "Tabulation rewrites the recursion as an iterative fill. Same time, no stack.",
            "Space-optimise when dp[i] only depends on a few previous cells.",
            "STATE DESIGN is the hard part — every parameter that affects the answer must be in the state.",
            "Top-down is easier to derive; bottom-up is easier to space-optimise. Pick freely."
          ],
          pitfalls: [
            "Memoizing a function with no overlapping subproblems — no speedup, just overhead.",
            "Missing a parameter from the state — wrong answer or accidental TLE.",
            "Off-by-one in base cases (climbStairs(0) — is it 1 or 0?). Decide and document.",
            "Sentinel collision in memo (-1 used as 'not computed' when -1 is also a valid answer).",
            "Cache persisting across test cases — answers leak from one input to the next.",
            "Recursing through 10⁶ states on top-down — stack overflow; switch to tabulation."
          ],
          videoId: "sPeKpctCL-c",
          videoSearch: "dynamic programming introduction memoization tabulation"
        },
        {
          name: "1-D DP (Fibonacci, Climbing Stairs, House Robber)",
          explanation: `1-D DP problems are the simplest DP shape: the state is ONE parameter (usually an index into an array), and dp[i] depends on a handful of earlier dp[j] values. Almost every recurrence in this category fits the template dp[i] = something_about(dp[i-1], dp[i-2], ..., a[i]). They're the bread-and-butter of DP practice.

This concept walks through the canonical 1-D DP patterns. Once you've internalised these, multi-dimensional DP is mostly more of the same.

## Pattern A — additive (Fibonacci, Climbing Stairs)

dp[i] = dp[i-1] + dp[i-2]

Classic: number of ways to reach state i, given you can come from i-1 or i-2.

Climbing Stairs:    ways(n) = ways(n-1) + ways(n-2)
House Robber:       maxLoot(i) = max(maxLoot(i-1), maxLoot(i-2) + a[i])
Decode Ways:        ways(i) = ways(i-1) [if a[i] valid] + ways(i-2) [if a[i-1..i] valid]
Min Cost Climbing:  cost(i) = a[i] + min(cost(i-1), cost(i-2))

The common shape: each state depends on a fixed small set of previous states. Space-optimisable to O(1).

## Pattern B — max/min over previous (House Robber, Maximum Subarray)

dp[i] = max(dp[i-1] + a[i], a[i])    (Maximum Subarray / Kadane's)
dp[i] = max(dp[i-1], dp[i-2] + a[i]) (House Robber)

dp tracks the BEST value attainable ending at index i (or up through index i).

## Pattern C — count over previous (Coin Change II, Word Break)

dp[i] = sum of dp[j] for valid j < i.

Word Break:     dp[i] = OR over j < i of (dp[j] AND s[j..i] in dict)
Coin Change II: dp[amt] = sum over coins of dp[amt - coin]
Decode Ways:    dp[i] = (one-digit valid ? dp[i-1] : 0) + (two-digit valid ? dp[i-2] : 0)

## House Robber — the classic

You can't rob two adjacent houses. Find the max total.

dp[i] = max(dp[i-1], dp[i-2] + a[i])

Either you SKIP house i (carry dp[i-1] forward) or you ROB house i and add a[i] to whatever you could get up through i-2.

int rob(vector<int>& a) {
    int n = a.size();
    if (n == 0) return 0;
    if (n == 1) return a[0];
    int prev2 = 0, prev1 = a[0];
    for (int i = 1; i < n; i++) {
        int curr = max(prev1, prev2 + a[i]);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

O(n) time, O(1) space.

## House Robber II — circular variant

Houses arranged in a CIRCLE: house 0 and house n-1 are adjacent. Trick: run the linear version twice, once on a[0..n-2] (excluding last) and once on a[1..n-1] (excluding first); return the max.

## Decode Ways

Number of ways to decode a digit string into letters (A=1, ..., Z=26).

dp[i] = (a[i-1] != 0 ? dp[i-1] : 0) + (valid_two_digit(a[i-2..i-1]) ? dp[i-2] : 0)

The two paths represent "decode the last digit alone" and "decode the last two digits as one letter".

## Maximum Subarray (Kadane's algorithm)

Find the maximum sum of a contiguous subarray.

dp[i] = max(dp[i-1] + a[i], a[i])

Track the overall maximum as you go.

int kadane(vector<int>& a) {
    int curr = a[0], best = a[0];
    for (int i = 1; i < (int)a.size(); i++) {
        curr = max(a[i], curr + a[i]);
        best = max(best, curr);
    }
    return best;
}

## Min Cost Climbing Stairs

Each step has a cost. You can start at step 0 or 1, and take 1 or 2 steps at a time. Find the min cost to reach beyond the last step.

dp[i] = a[i] + min(dp[i-1], dp[i-2]).
Answer = min(dp[n-1], dp[n-2]).

## The state-of-the-art mindset

For any "consider the array left-to-right, make a decision at each index" problem, the 1-D template fits. The hard part is identifying:

- What's the state? Usually i (index processed so far).
- What's the answer at i? Best value / count / sum that uses elements 0..i.
- What's the recurrence? What decisions can you make at index i?
- What's the base case? Often dp[0] or dp[-1].

Once you've answered those four, the code writes itself.`,
          codeBlocks: [
            {
              title: "House Robber — the canonical 1-D DP",
              code: `int rob(vector<int>& a) {
    int n = a.size();
    if (n == 0) return 0;
    if (n == 1) return a[0];
    int prev2 = 0, prev1 = a[0];
    for (int i = 1; i < n; i++) {
        int curr = max(prev1, prev2 + a[i]);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`
            },
            {
              title: "House Robber II — circular variant",
              code: `int robLinear(vector<int>& a, int l, int r) {
    int prev2 = 0, prev1 = 0;
    for (int i = l; i <= r; i++) {
        int curr = max(prev1, prev2 + a[i]);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

int robCircle(vector<int>& a) {
    int n = a.size();
    if (n == 1) return a[0];
    return max(robLinear(a, 0, n - 2), robLinear(a, 1, n - 1));
}`
            },
            {
              title: "Maximum Subarray (Kadane's)",
              code: `int maxSubArray(vector<int>& a) {
    int curr = a[0], best = a[0];
    for (int i = 1; i < (int)a.size(); i++) {
        curr = max(a[i], curr + a[i]);
        best = max(best, curr);
    }
    return best;
}`
            },
            {
              title: "Decode Ways",
              code: `int numDecodings(const string& s) {
    int n = s.size();
    if (s[0] == '0') return 0;
    int prev2 = 1, prev1 = 1;
    for (int i = 1; i < n; i++) {
        int curr = 0;
        if (s[i] != '0') curr += prev1;
        int two = (s[i-1] - '0') * 10 + (s[i] - '0');
        if (two >= 10 && two <= 26) curr += prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`
            },
            {
              title: "Min Cost Climbing Stairs",
              code: `int minCostClimb(vector<int>& cost) {
    int n = cost.size();
    int prev2 = 0, prev1 = 0;
    for (int i = 2; i <= n; i++) {
        int curr = min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`
            },
            {
              title: "Maximum Product Subarray — track BOTH max and min",
              code: `// Negatives flip min ↔ max, so you must track BOTH at each step.
int maxProduct(vector<int>& a) {
    int curMax = a[0], curMin = a[0], best = a[0];
    for (int i = 1; i < (int)a.size(); i++) {
        int x = a[i];
        int candMax = max({x, curMax * x, curMin * x});
        int candMin = min({x, curMax * x, curMin * x});
        curMax = candMax;
        curMin = candMin;
        best = max(best, curMax);
    }
    return best;
}`
            }
          ],
          complexity: { time: "O(n) for almost every 1-D DP", space: "O(n) with full table; usually optimisable to O(1)" },
          keyPoints: [
            "1-D DP: state is one parameter (usually an index); dp[i] depends on a few earlier dp[j].",
            "Pattern A (additive): dp[i] = dp[i-1] + dp[i-2]. Climbing Stairs, Decode Ways.",
            "Pattern B (max/min over previous): dp[i] = max(dp[i-1], dp[i-2] + a[i]). House Robber.",
            "Pattern C (count over previous): dp[i] = sum dp[j] for valid j. Coin Change II.",
            "Kadane's algorithm is 1-D DP: dp[i] = max(a[i], dp[i-1] + a[i]).",
            "Circular variants split into two linear runs (House Robber II).",
            "Almost every 1-D DP is space-optimisable to O(1) — just two scalars.",
            "Max Product subarray needs BOTH max and min because negatives flip them."
          ],
          pitfalls: [
            "Forgetting the n == 0 / n == 1 base case — index out of bounds.",
            "Off-by-one between 'best up to i' and 'best ending exactly at i' — pick a convention.",
            "Space-optimising before the recurrence is verified — bugs compound when you can't see intermediate dp values.",
            "Max Product without tracking min — negative * negative = positive can win.",
            "Decode Ways with leading zeros or '0' as a stand-alone digit — handle the invalid-decoding cases.",
            "House Robber II: returning a single robLinear instead of max of two — wrong on circular adjacency."
          ],
          videoId: "0zvG6bIZ5KY",
          videoSearch: "1d dynamic programming house robber"
        },
        {
          name: "2-D DP (Unique Paths, grid problems)",
          explanation: `2-D DP problems have a state described by TWO parameters. The most common pair is (row, column) for grid problems, but it could be (i, j) for two-string problems, (i, capacity) for knapsack, (i, k) for "K of something" variants. The dp table becomes a 2-D array, and you fill it row-by-row or diagonal-by-diagonal depending on the dependency direction.

This concept covers the GRID family: Unique Paths, Min Path Sum, Maximal Square, paths-with-obstacles. Multi-string DPs (LCS, Edit Distance) come in later lessons.

## Unique Paths — the simplest 2-D DP

How many distinct paths from (0,0) to (m-1, n-1) when you can only move RIGHT or DOWN?

dp[r][c] = number of distinct paths from (0,0) to (r,c).
Recurrence: dp[r][c] = dp[r-1][c] + dp[r][c-1].
Base: dp[0][0] = 1; the entire top row and left column are 1 (only one way to reach them).

int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    for (int r = 1; r < m; r++)
        for (int c = 1; c < n; c++)
            dp[r][c] = dp[r-1][c] + dp[r][c-1];
    return dp[m-1][n-1];
}

O(m·n) time, O(m·n) space.

## Space optimisation

dp[r][c] only depends on the CURRENT row's previous column and the PREVIOUS row's same column. Keep only one row:

vector<int> dp(n, 1);
for (int r = 1; r < m; r++)
    for (int c = 1; c < n; c++)
        dp[c] += dp[c-1];
return dp[n-1];

O(n) space.

## Unique Paths II — with obstacles

Same setup but some cells are blocked. dp[r][c] = 0 if cell is blocked, else the same recurrence.

if (grid[r][c] == 1) dp[r][c] = 0;
else                 dp[r][c] = dp[r-1][c] + dp[r][c-1];

## Min Path Sum

Instead of counting paths, MINIMISE the sum of values along the path.

dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1]).

## Maximal Square

Find the largest square of 1s in a binary matrix.

dp[r][c] = side length of the largest all-1s square ending at (r, c).
Recurrence: if grid[r][c] == '1':
              dp[r][c] = 1 + min(dp[r-1][c-1], dp[r-1][c], dp[r][c-1]);
            else dp[r][c] = 0.

The min-of-three rule: the square ending at (r,c) is bounded by the squares ending at the three neighbours.

## Cherry Pickup / Path Counts with Two Walkers

Some problems track TWO simultaneous traversals on the same grid → 3-D state (r1, c1, r2). The recurrence aggregates four combinations of moves.

## Recipes for grid DP problems

1. **State** — usually (r, c). Sometimes add extra dimensions for direction, K steps remaining, etc.
2. **Base case** — dp[0][0] (or the first row/column).
3. **Recurrence** — combines values from cells you can REACH the current one FROM.
4. **Fill order** — depends on the recurrence; for "from top-left", fill top-to-bottom, left-to-right.
5. **Answer** — dp[m-1][n-1] (or some aggregate).

## When the state isn't a grid

Two-string problems (LCS, Edit Distance, Longest Common Substring) use (i, j) where i indexes into string s1, j into s2. Same DP machinery, different interpretation.

Knapsack: (i, capacity) — item index and remaining capacity.
Longest Bitonic Subsequence: (i, going_up) where going_up is a boolean.

The shape changes, but the principles are identical: define state, write recurrence, fill in dependency order, return answer.

## Path reconstruction in grid DP

After filling dp[][], reconstruct by walking BACKWARDS from (m-1, n-1):

vector<pair<int,int>> path;
int r = m-1, c = n-1;
path.push_back({r, c});
while (r > 0 || c > 0) {
    if (r == 0) c--;
    else if (c == 0) r--;
    else if (dp[r-1][c] < dp[r][c-1]) r--;
    else c--;
    path.push_back({r, c});
}
reverse(path.begin(), path.end());

## Common pitfalls

- Confusing dp[r][c] = "ways FROM (0,0) to (r,c)" with "ways FROM (r,c) to (m-1,n-1)" — pick a convention.
- Off-by-one on dimensions: m rows, n columns; loops should run i < m and j < n.
- Forgetting that the FIRST row and column need special initialisation (only one way to reach each).
- Space-optimising prematurely — make the 2-D table version work first, then collapse.`,
          codeBlocks: [
            {
              title: "Unique Paths — basic 2-D DP",
              code: `int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    for (int r = 1; r < m; r++)
        for (int c = 1; c < n; c++)
            dp[r][c] = dp[r-1][c] + dp[r][c-1];
    return dp[m-1][n-1];
}`
            },
            {
              title: "Unique Paths — space-optimised to O(n)",
              code: `int uniquePathsOpt(int m, int n) {
    vector<int> dp(n, 1);
    for (int r = 1; r < m; r++)
        for (int c = 1; c < n; c++)
            dp[c] += dp[c-1];
    return dp[n-1];
}`
            },
            {
              title: "Unique Paths II — with obstacles",
              code: `int uniquePathsWithObstacles(vector<vector<int>>& g) {
    int m = g.size(), n = g[0].size();
    if (g[0][0] == 1) return 0;
    vector<vector<long long>> dp(m, vector<long long>(n, 0));
    dp[0][0] = 1;
    for (int c = 1; c < n; c++) dp[0][c] = g[0][c] ? 0 : dp[0][c-1];
    for (int r = 1; r < m; r++) dp[r][0] = g[r][0] ? 0 : dp[r-1][0];
    for (int r = 1; r < m; r++)
        for (int c = 1; c < n; c++)
            dp[r][c] = g[r][c] ? 0 : dp[r-1][c] + dp[r][c-1];
    return (int)dp[m-1][n-1];
}`
            },
            {
              title: "Min Path Sum",
              code: `int minPathSum(vector<vector<int>>& g) {
    int R = g.size(), C = g[0].size();
    vector<vector<int>> dp(R, vector<int>(C, 0));
    dp[0][0] = g[0][0];
    for (int c = 1; c < C; c++) dp[0][c] = dp[0][c-1] + g[0][c];
    for (int r = 1; r < R; r++) dp[r][0] = dp[r-1][0] + g[r][0];
    for (int r = 1; r < R; r++)
        for (int c = 1; c < C; c++)
            dp[r][c] = g[r][c] + min(dp[r-1][c], dp[r][c-1]);
    return dp[R-1][C-1];
}`
            },
            {
              title: "Maximal Square (largest all-1 square in a binary matrix)",
              code: `int maximalSquare(vector<vector<char>>& m) {
    int R = m.size(), C = m[0].size();
    vector<vector<int>> dp(R + 1, vector<int>(C + 1, 0));
    int best = 0;
    for (int r = 1; r <= R; r++)
        for (int c = 1; c <= C; c++)
            if (m[r-1][c-1] == '1') {
                dp[r][c] = 1 + min({dp[r-1][c-1], dp[r-1][c], dp[r][c-1]});
                best = max(best, dp[r][c]);
            }
    return best * best;
}`
            },
            {
              title: "Triangle (variable-width rows)",
              code: `int minimumTotal(vector<vector<int>>& t) {
    int n = t.size();
    vector<int> dp(t.back().begin(), t.back().end());
    for (int r = n - 2; r >= 0; r--)
        for (int c = 0; c <= r; c++)
            dp[c] = t[r][c] + min(dp[c], dp[c+1]);
    return dp[0];
}`
            }
          ],
          complexity: { time: "O(R · C) for most grid DPs", space: "O(R · C) full table; usually O(C) optimised" },
          keyPoints: [
            "2-D DP: state has two parameters. Most common: (row, column) in a grid.",
            "Unique Paths: dp[r][c] = dp[r-1][c] + dp[r][c-1]; top row + left column = 1.",
            "Min Path Sum: dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1]).",
            "Maximal Square: dp[r][c] = 1 + min(three diagonal/adjacent neighbours).",
            "Obstacles: set dp = 0 at blocked cells; recurrence otherwise unchanged.",
            "Space optimisation: 2-D often collapses to O(n) using one or two rows.",
            "Path reconstruction: walk backwards from the goal cell, choosing the smaller predecessor.",
            "Same pattern extends to 3-D for two-walker problems and 4-D for multi-state grids."
          ],
          pitfalls: [
            "Confusing rows and columns (m vs n) — write a tiny test grid by hand to verify.",
            "Forgetting to initialise the entire first row and first column.",
            "Off-by-one when using dp[R+1][C+1] vs dp[R][C] — pick a convention.",
            "Premature space optimisation — write the 2-D version, verify, then collapse.",
            "Min Path Sum from top-left to bottom-right vs bottom-right to top-left — direction matters for the recurrence.",
            "Maximal Square: returning the SIDE instead of the AREA — read the problem statement carefully."
          ],
          videoId: "EoMxK6zh9wU",
          videoSearch: "2d dynamic programming grid"
        },
        {
          name: "0/1 Knapsack",
          explanation: `0/1 Knapsack is the prototypical DP problem. You have n items, each with weight w[i] and value v[i], and a knapsack with capacity W. You can either TAKE item i (using w[i] of capacity and gaining v[i] of value) or SKIP it (capacity unchanged). Each item is available AT MOST ONCE. Maximise total value subject to total weight ≤ W.

The 0/1 in the name comes from the binary include/exclude choice for each item. The Unbounded Knapsack (next lesson) lets you take each item as many times as you like — a small change with a noticeable effect on the recurrence.

## The recurrence

State: dp[i][c] = max value using items 0..i with capacity c remaining.

Recurrence: dp[i][c] = max(
    dp[i-1][c],                                 // skip item i
    dp[i-1][c - w[i]] + v[i]    if w[i] <= c    // take item i
)

Base: dp[-1][c] = 0 for all c (no items, no value).

Answer: dp[n-1][W].

## Why it works

For each item, we ask "do I take it or not?". Taking it consumes w[i] capacity and gains v[i] value, leaving us with the subproblem on items 0..i-1 with capacity c - w[i]. Skipping it leaves the subproblem on items 0..i-1 with capacity c.

The MAX of the two options gives the best decision for state (i, c). We've reduced an exponential search over 2ⁿ subsets to O(n · W) states.

## Top-down (memoized)

int knap(vector<int>& w, vector<int>& v, int i, int c, vector<vector<int>>& memo) {
    if (i < 0 || c == 0) return 0;
    if (memo[i][c] != -1) return memo[i][c];
    int skip = knap(w, v, i - 1, c, memo);
    int take = (w[i] <= c) ? v[i] + knap(w, v, i - 1, c - w[i], memo) : 0;
    return memo[i][c] = max(skip, take);
}

O(n · W) time, O(n · W) memory.

## Bottom-up (tabulated)

int knapTab(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int c = 0; c <= W; c++) {
            dp[i][c] = dp[i-1][c];               // skip
            if (w[i-1] <= c)
                dp[i][c] = max(dp[i][c], dp[i-1][c - w[i-1]] + v[i-1]);
        }
    }
    return dp[n][W];
}

O(n · W) time, O(n · W) space.

## Space-optimised to O(W)

dp[i][c] only depends on dp[i-1][...]. We can roll the 2-D table into one row — but we must iterate c from RIGHT TO LEFT, otherwise we'd use the already-updated value (which would simulate Unbounded Knapsack).

int knapOpt(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; i++) {
        for (int c = W; c >= w[i]; c--) {        // CRITICAL: right to left
            dp[c] = max(dp[c], dp[c - w[i]] + v[i]);
        }
    }
    return dp[W];
}

O(n · W) time, O(W) space.

## Why right-to-left for 0/1

We want dp[c - w[i]] to refer to the row BEFORE we processed item i. Iterating c large-to-small ensures we read the "old" dp[c - w[i]] before overwriting it. If we iterated small-to-large, dp[c - w[i]] would already be the "new" value (with item i taken), and we'd accidentally take item i multiple times → Unbounded Knapsack.

## Reconstructing which items to take

Walk backwards through the 2-D dp. At each (i, c), check if dp[i][c] != dp[i-1][c] — if so, item i was taken; subtract w[i-1] from c. If equal, item i was skipped.

vector<int> chosen;
int c = W;
for (int i = n; i >= 1; i--) {
    if (dp[i][c] != dp[i-1][c]) {
        chosen.push_back(i - 1);
        c -= w[i-1];
    }
}

## Knapsack-family problems

The pattern recurs constantly with different cover stories:

- **Partition Equal Subset Sum** — split array into two equal-sum subsets. Equivalent: can we hit exactly sum/2 using a subset? = subset-sum (knapsack with value = weight).
- **Target Sum** — assign + or - to each number to hit target. Transform: pick a subset with sum = (total + target) / 2.
- **Last Stone Weight II** — minimise the difference between two subset sums; knapsack with capacity sum/2.
- **Number of Subsets with Given Sum** — count instead of decide; knapsack with sum instead of max.
- **Tushar's Birthday Party** — multi-friend variant.

## Edge cases

- W = 0: answer is 0 (can't carry anything).
- No items: answer is 0.
- All items too heavy: answer is 0.
- Items with value 0: trivially never reduces the optimum.

## Complexity caveat — pseudo-polynomial

O(n · W) looks polynomial but W is encoded in log(W) bits. The algorithm is technically PSEUDO-POLYNOMIAL — for W = 10⁹ it doesn't run. Real-world knapsack with huge W needs LP relaxation or approximation algorithms.`,
          codeBlocks: [
            {
              title: "Top-down memoization",
              code: `int knap(vector<int>& w, vector<int>& v, int i, int c, vector<vector<int>>& memo) {
    if (i < 0 || c == 0) return 0;
    if (memo[i][c] != -1) return memo[i][c];
    int skip = knap(w, v, i - 1, c, memo);
    int take = (w[i] <= c) ? v[i] + knap(w, v, i - 1, c - w[i], memo) : 0;
    return memo[i][c] = max(skip, take);
}

int knapsack(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<vector<int>> memo(n, vector<int>(W + 1, -1));
    return knap(w, v, n - 1, W, memo);
}`
            },
            {
              title: "Bottom-up 2-D tabulation",
              code: `int knapTab(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int c = 0; c <= W; c++) {
            dp[i][c] = dp[i-1][c];
            if (w[i-1] <= c)
                dp[i][c] = max(dp[i][c], dp[i-1][c - w[i-1]] + v[i-1]);
        }
    }
    return dp[n][W];
}`
            },
            {
              title: "Space-optimised to O(W) (iterate c right-to-left)",
              code: `int knapOpt(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; i++) {
        for (int c = W; c >= w[i]; c--) {
            dp[c] = max(dp[c], dp[c - w[i]] + v[i]);
        }
    }
    return dp[W];
}`
            },
            {
              title: "Reconstruct chosen items",
              code: `vector<int> knapItems(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    for (int i = 1; i <= n; i++)
        for (int c = 0; c <= W; c++) {
            dp[i][c] = dp[i-1][c];
            if (w[i-1] <= c)
                dp[i][c] = max(dp[i][c], dp[i-1][c - w[i-1]] + v[i-1]);
        }
    vector<int> chosen;
    int c = W;
    for (int i = n; i >= 1; i--) {
        if (dp[i][c] != dp[i-1][c]) {
            chosen.push_back(i - 1);
            c -= w[i-1];
        }
    }
    reverse(chosen.begin(), chosen.end());
    return chosen;
}`
            },
            {
              title: "Subset Sum (decision variant)",
              code: `// Is there a subset of nums summing exactly to target?
bool canPartition(vector<int>& nums, int target) {
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int x : nums)
        for (int c = target; c >= x; c--)
            dp[c] = dp[c] || dp[c - x];
    return dp[target];
}`
            },
            {
              title: "Partition Equal Subset Sum — direct application",
              code: `bool canPartitionEqual(vector<int>& nums) {
    int total = accumulate(nums.begin(), nums.end(), 0);
    if (total & 1) return false;
    int t = total / 2;
    vector<bool> dp(t + 1, false);
    dp[0] = true;
    for (int x : nums)
        for (int c = t; c >= x; c--)
            dp[c] = dp[c] || dp[c - x];
    return dp[t];
}`
            }
          ],
          complexity: { time: "O(n · W)", space: "O(n · W) full table; O(W) space-optimised" },
          keyPoints: [
            "State: (item index, remaining capacity). Choice: take or skip the current item.",
            "Recurrence: dp[i][c] = max(skip, take) where take needs w[i] <= c.",
            "O(n · W) time and space; space-optimisable to O(W) using one row.",
            "When optimising, iterate capacity RIGHT-TO-LEFT to preserve 0/1 semantics.",
            "Iterating left-to-right turns 0/1 into Unbounded Knapsack accidentally.",
            "Reconstruction: walk backwards through the 2-D dp, checking which decisions were made.",
            "Pseudo-polynomial: O(n · W) is polynomial in W's value, exponential in W's bit length.",
            "Subset Sum, Partition Equal Subset Sum, Target Sum, Last Stone Weight II all reduce to 0/1 knapsack."
          ],
          pitfalls: [
            "Iterating capacity LEFT-TO-RIGHT in the O(W) version — turns it into Unbounded Knapsack silently.",
            "Forgetting the w[i] <= c guard — negative array index crashes or returns garbage.",
            "Confusing the 'i is 0-indexed item' vs '1-indexed' conventions when reading dp[i][c].",
            "Treating capacity 0 as 'no items chosen' — usually correct but verify the base case.",
            "Trying to run with W = 10⁹ — pseudo-polynomial, won't fit. Need different approach (LP, FPTAS).",
            "Memoization without checking cache before recursion — defeats the purpose."
          ],
          videoId: "PPcpC5QbMx0",
          videoSearch: "0 1 knapsack dynamic programming"
        },
        {
          name: "Unbounded Knapsack",
          explanation: `Unbounded Knapsack is the same problem as 0/1 Knapsack except each item can be taken UNLIMITED times. The recurrence changes slightly, the space-optimised loop direction FLIPS, and the family of derived problems grows to include Coin Change (count ways), Coin Change (min coins), Rod Cutting, and "how many ways to make X" generally.

This concept teaches the tiny but crucial differences from 0/1 Knapsack and walks through the canonical applications.

## The recurrence

State: dp[i][c] = max value using items 0..i with capacity c remaining, ITEMS REUSABLE.

Recurrence: dp[i][c] = max(
    dp[i-1][c],                                  // skip item i
    dp[i][c - w[i]] + v[i]    if w[i] <= c       // take item i AGAIN (note: dp[i], not dp[i-1])
)

The crucial change: when we TAKE item i, the recursion is dp[i][c - w[i]] (still considering item i as available), not dp[i-1][...]. That's what makes the unbounded reuse possible.

## Top-down (memoized)

int knapU(vector<int>& w, vector<int>& v, int i, int c, vector<vector<int>>& memo) {
    if (i < 0 || c == 0) return 0;
    if (memo[i][c] != -1) return memo[i][c];
    int skip = knapU(w, v, i - 1, c, memo);
    int take = (w[i] <= c) ? v[i] + knapU(w, v, i, c - w[i], memo) : 0;   // i, not i-1
    return memo[i][c] = max(skip, take);
}

## Bottom-up tabulation

int knapUTab(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int c = 0; c <= W; c++) {
            dp[i][c] = dp[i-1][c];
            if (w[i-1] <= c)
                dp[i][c] = max(dp[i][c], dp[i][c - w[i-1]] + v[i-1]);  // dp[i], not dp[i-1]
        }
    }
    return dp[n][W];
}

## Space-optimised — iterate LEFT-TO-RIGHT

For 0/1 we iterated capacity RIGHT-TO-LEFT to prevent re-using the same item. For Unbounded we WANT re-use, so iterate LEFT-TO-RIGHT.

int knapU_opt(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; i++) {
        for (int c = w[i]; c <= W; c++) {            // CRITICAL: left to right
            dp[c] = max(dp[c], dp[c - w[i]] + v[i]);
        }
    }
    return dp[W];
}

The two-line difference (loop direction) is the entire distinction between 0/1 and Unbounded in the optimised form. Remember it.

## Coin Change — minimum coins to make target

Given coins (unlimited supply of each), find the minimum number to make exactly amount.

dp[amt] = 1 + min(dp[amt - coin]) over all coins where amt >= coin.

int coinChange(vector<int>& coins, int amt) {
    vector<int> dp(amt + 1, amt + 1);                 // sentinel = "impossible"
    dp[0] = 0;
    for (int a = 1; a <= amt; a++)
        for (int c : coins)
            if (c <= a) dp[a] = min(dp[a], dp[a - c] + 1);
    return dp[amt] > amt ? -1 : dp[amt];
}

## Coin Change II — count ways to make target

Different from "min coins" — now we COUNT distinct combinations (order doesn't matter).

int change(int amt, vector<int>& coins) {
    vector<int> dp(amt + 1, 0);
    dp[0] = 1;
    for (int c : coins)                              // coins outer loop ← crucial
        for (int a = c; a <= amt; a++)
            dp[a] += dp[a - c];
    return dp[amt];
}

If you swap the loops (amounts outer, coins inner), you count PERMUTATIONS instead of combinations. That's the LeetCode "Combination Sum IV" problem.

## Rod Cutting

Cut a rod of length n into pieces of various lengths with prices. Maximise revenue.

Same structure as Unbounded Knapsack: lengths play the role of weights, prices the role of values.

## Common Unbounded Knapsack family

- **Coin Change** (min coins)
- **Coin Change II** (count ways)
- **Combination Sum IV** (count ordered ways)
- **Rod Cutting**
- **Word Break II**

## The order-of-loops rule

This trips people up. Read it three times:

**Coin Change II** — coins OUTER, amount INNER → counts COMBINATIONS (each coin chosen once in the loop, can be picked any number of times within).

**Combination Sum IV** — amount OUTER, coins INNER → counts PERMUTATIONS (different orderings counted separately).

Same recurrence, different loop nesting, different answers. Trace by hand on a tiny input to internalise.

## Edge cases

- amount = 0: 1 way (use no coins).
- empty coin list: 0 ways for any positive amount.
- coin > amount: just skip.

## Pitfalls

- Iterating right-to-left in the optimised version of UNBOUNDED Knapsack → wrong (turns into 0/1).
- Order of loops in Coin Change II vs Combination Sum IV — verify with a hand trace.
- Min-coins sentinel: using INT_MAX and adding 1 overflows. Use amt + 1 as the sentinel (any value > amt is "impossible").`,
          codeBlocks: [
            {
              title: "Unbounded Knapsack — bottom-up tabulation",
              code: `int knapUTab(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int c = 0; c <= W; c++) {
            dp[i][c] = dp[i-1][c];
            if (w[i-1] <= c)
                dp[i][c] = max(dp[i][c], dp[i][c - w[i-1]] + v[i-1]);
        }
    }
    return dp[n][W];
}`
            },
            {
              title: "Unbounded Knapsack — O(W) space (iterate left-to-right)",
              code: `int knapU_opt(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; i++)
        for (int c = w[i]; c <= W; c++)             // left to right!
            dp[c] = max(dp[c], dp[c - w[i]] + v[i]);
    return dp[W];
}`
            },
            {
              title: "Coin Change — minimum coins to make amount",
              code: `int coinChange(vector<int>& coins, int amt) {
    vector<int> dp(amt + 1, amt + 1);               // sentinel = impossible
    dp[0] = 0;
    for (int a = 1; a <= amt; a++)
        for (int c : coins)
            if (c <= a) dp[a] = min(dp[a], dp[a - c] + 1);
    return dp[amt] > amt ? -1 : dp[amt];
}`
            },
            {
              title: "Coin Change II — count distinct combinations",
              code: `// COINS outer, AMOUNT inner → combinations (unordered).
int change(int amt, vector<int>& coins) {
    vector<unsigned long long> dp(amt + 1, 0);
    dp[0] = 1;
    for (int c : coins)
        for (int a = c; a <= amt; a++)
            dp[a] += dp[a - c];
    return (int)dp[amt];
}`
            },
            {
              title: "Combination Sum IV — count ordered ways",
              code: `// AMOUNT outer, COINS inner → permutations (ordered).
int combinationSum4(vector<int>& nums, int target) {
    vector<unsigned long long> dp(target + 1, 0);
    dp[0] = 1;
    for (int a = 1; a <= target; a++)
        for (int c : nums)
            if (c <= a) dp[a] += dp[a - c];
    return (int)dp[target];
}`
            },
            {
              title: "Rod Cutting",
              code: `// price[i] = price of a piece of length i+1. Maximise revenue from a rod of length n.
int rodCut(vector<int>& price, int n) {
    vector<int> dp(n + 1, 0);
    for (int len = 1; len <= n; len++)
        for (int p = 1; p <= len; p++)
            dp[len] = max(dp[len], price[p - 1] + dp[len - p]);
    return dp[n];
}`
            }
          ],
          complexity: { time: "O(n · W) (or O(coins · amount))", space: "O(W) when optimised, O(n · W) full" },
          keyPoints: [
            "Same problem as 0/1 Knapsack with one rule change: items are reusable.",
            "Top-down: 'take' recursion uses dp[i][c - w[i]] (still index i, not i-1).",
            "Bottom-up O(W) version: iterate capacity LEFT-TO-RIGHT (opposite of 0/1).",
            "Coin Change (min coins): use amt + 1 as the 'impossible' sentinel to avoid overflow.",
            "Coin Change II (count combinations): COINS outer, AMOUNT inner.",
            "Combination Sum IV (count permutations): AMOUNT outer, COINS inner.",
            "Rod Cutting reduces to Unbounded Knapsack with lengths as weights.",
            "Loop direction in the optimised version IS the entire difference between 0/1 and Unbounded."
          ],
          pitfalls: [
            "Iterating capacity right-to-left in unbounded → silently turns into 0/1 Knapsack.",
            "Confusing 'count combinations' (coins outer) with 'count permutations' (amount outer).",
            "Min-coins sentinel of INT_MAX → INT_MAX + 1 overflows. Use amt + 1.",
            "Forgetting that dp[0] = 1 for count problems (one way: empty selection).",
            "Coin Change II using 'int' for large counts — switch to unsigned long long.",
            "For empty input, count is 0 (or undefined) — depends on problem spec."
          ],
          videoId: "CB8w6MzXsx4",
          videoSearch: "unbounded knapsack dynamic programming"
        },
        {
          name: "Longest Common Subsequence (LCS family)",
          explanation: `LCS is the second-most-important DP after knapsack. Given two strings A and B, find the longest subsequence (NOT substring — characters need not be contiguous) that appears in both. A whole family of string-DP problems share the same 2-D state and recurrence: just LCS, shortest common supersequence, distinct subsequences, longest palindromic subsequence, even edit distance (next lesson).

Master LCS and most string DPs become mechanical.

## Subsequence vs substring

A SUBSEQUENCE keeps the order of characters but allows arbitrary GAPS. "abc" is a subsequence of "axbycz" — you skip x, y, z. A SUBSTRING requires contiguous characters.

For "ABCBDAB" and "BDCAB", the LCS is "BCAB" or "BDAB" (length 4) — neither is contiguous in either string.

## The recurrence

State: dp[i][j] = LCS length of A[0..i-1] and B[0..j-1] (the prefixes of lengths i and j).

Recurrence:
  if A[i-1] == B[j-1]:  dp[i][j] = 1 + dp[i-1][j-1]
  else                  dp[i][j] = max(dp[i-1][j], dp[i][j-1])

Base: dp[0][j] = dp[i][0] = 0 (empty prefix → empty LCS).

Answer: dp[n][m].

## Why it works

If A[i-1] == B[j-1], that character can extend the LCS of the smaller prefixes — so add 1 to the diagonal.

Otherwise the LCS doesn't include this pair. Either the LCS uses up A[i-1] (then it lives in dp[i-1][j]) or it uses up B[j-1] (then it lives in dp[i][j-1]) or neither. The max covers all three cases.

## The code

int lcs(const string& a, const string& b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            if (a[i-1] == b[j-1]) dp[i][j] = 1 + dp[i-1][j-1];
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    return dp[n][m];
}

O(n · m) time, O(n · m) space.

## Reconstruct the actual LCS string

Walk backwards through dp[][] from (n, m) to (0, 0). At each (i, j):
- If a[i-1] == b[j-1], this character is in the LCS; add it and go to (i-1, j-1).
- Else go to whichever of (i-1, j) or (i, j-1) has the larger dp value.

string out;
int i = n, j = m;
while (i > 0 && j > 0) {
    if (a[i-1] == b[j-1]) { out.push_back(a[i-1]); i--; j--; }
    else if (dp[i-1][j] > dp[i][j-1]) i--;
    else j--;
}
reverse(out.begin(), out.end());

## Space optimisation

dp[i][j] only depends on dp[i-1][*] and dp[i][j-1] — two rows. Roll into two rows or even one row with careful update.

## The LCS family

Once you have the LCS recurrence, MANY problems fall out:

**Longest Palindromic Subsequence** — LCS of s and reverse(s).

**Shortest Common Supersequence** — n + m - LCS(s, t). And the actual string is built by walking through the LCS reconstruction.

**Distinct Subsequences** — count how many distinct subsequences of S equal T.
dp[i][j] = (T[j-1] != S[i-1] ? 0 : dp[i-1][j-1]) + dp[i-1][j]

**Minimum Deletions/Insertions to make A into B** —
deletions = n - LCS(a, b).
insertions = m - LCS(a, b).
total = n + m - 2 · LCS.

**Longest Common Substring** (different from subsequence — contiguous):
dp[i][j] = (a[i-1] == b[j-1] ? dp[i-1][j-1] + 1 : 0)
Track the maximum.

## Why LCS is so general

Strings and arrays are 1-D sequences with a natural order. Many "find/count something that respects order in both inputs" problems reduce to LCS.

## Pitfalls

- Confusing subsequence with substring — the recurrence is DIFFERENT (max vs reset to 0 on mismatch).
- Off-by-one: prefixes of length i correspond to indices 0..i-1. Easy to forget.
- Space-optimising before verifying the 2-D version works.
- Reconstruction: when dp[i-1][j] == dp[i][j-1], either path works — pick a convention.`,
          codeBlocks: [
            {
              title: "LCS length",
              code: `int lcs(const string& a, const string& b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            if (a[i-1] == b[j-1]) dp[i][j] = 1 + dp[i-1][j-1];
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    return dp[n][m];
}`
            },
            {
              title: "LCS reconstruction — return the actual string",
              code: `string lcsString(const string& a, const string& b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            dp[i][j] = (a[i-1] == b[j-1]) ? 1 + dp[i-1][j-1]
                                          : max(dp[i-1][j], dp[i][j-1]);
    string out;
    int i = n, j = m;
    while (i > 0 && j > 0) {
        if (a[i-1] == b[j-1])           { out.push_back(a[i-1]); i--; j--; }
        else if (dp[i-1][j] > dp[i][j-1]) i--;
        else                               j--;
    }
    reverse(out.begin(), out.end());
    return out;
}`
            },
            {
              title: "Longest Palindromic Subsequence — LCS of s and reverse(s)",
              code: `int lps(const string& s) {
    string r = s;
    reverse(r.begin(), r.end());
    return lcs(s, r);
}`
            },
            {
              title: "Shortest Common Supersequence (length)",
              code: `int scsLen(const string& a, const string& b) {
    return (int)a.size() + (int)b.size() - lcs(a, b);
}`
            },
            {
              title: "Longest Common Substring (contiguous — DIFFERENT recurrence)",
              code: `int longestCommonSubstr(const string& a, const string& b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    int best = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            if (a[i-1] == b[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
                best = max(best, dp[i][j]);
            }
            // else dp[i][j] stays 0 — RESET on mismatch
    return best;
}`
            },
            {
              title: "Distinct Subsequences — count subsequences of S equal to T",
              code: `int numDistinct(const string& s, const string& t) {
    int n = s.size(), m = t.size();
    vector<vector<unsigned long long>> dp(n + 1, vector<unsigned long long>(m + 1, 0));
    for (int i = 0; i <= n; i++) dp[i][0] = 1;     // empty t can match in 1 way
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            dp[i][j] = dp[i-1][j];                 // skip s[i-1]
            if (s[i-1] == t[j-1]) dp[i][j] += dp[i-1][j-1];  // match
        }
    return (int)dp[n][m];
}`
            }
          ],
          complexity: { time: "O(n · m)", space: "O(n · m) full table; O(min(n, m)) optimised" },
          keyPoints: [
            "LCS = longest subsequence (NON-CONTIGUOUS) appearing in both strings.",
            "Recurrence: match → 1 + diagonal; mismatch → max of skip-row, skip-col.",
            "O(n · m) time and space; optimisable to O(min(n,m)) space.",
            "Reconstruction: walk backwards from (n,m), following the recurrence in reverse.",
            "Longest Palindromic Subsequence = LCS(s, reverse(s)).",
            "Shortest Common Supersequence length = n + m - LCS.",
            "Min insertions+deletions to convert A→B = n + m - 2·LCS.",
            "Longest Common SUBSTRING has a DIFFERENT recurrence (reset on mismatch)."
          ],
          pitfalls: [
            "Confusing subsequence with substring — the substring version RESETS to 0 on mismatch.",
            "Off-by-one between 'prefix of length i' (dp index i) and 'character at index i-1'.",
            "Forgetting to initialise dp[0][j] = dp[i][0] = 0 — usually 0-initialised vectors handle this.",
            "Distinct Subsequences uses 'long long' or 'unsigned long long' — counts can be huge.",
            "Reconstruction with ties: pick one direction consistently or you'll skip characters.",
            "Trying to do LCS for THREE strings with the same template — that's 3-D DP, O(n·m·k)."
          ],
          videoId: "Esx-TxF5PSo",
          videoSearch: "longest common subsequence dp"
        },
        {
          name: "Longest Increasing Subsequence (LIS)",
          explanation: `LIS asks: given an integer array, find the longest STRICTLY INCREASING subsequence (not necessarily contiguous). Two well-known algorithms: the intuitive O(n²) DP, and a beautiful O(n log n) version that uses binary search on a "tails" array.

LIS is the foundation for box-stacking, longest bitonic subsequence, Russian-doll envelopes, patience sorting, and a class of problems where you want to keep things "increasing" while picking a subset.

## The brute force won't do

Trying every subsequence is O(2ⁿ). For n = 50 you're already at 10¹⁵ — far too slow.

## O(n²) DP — the natural recurrence

Let dp[i] = length of the LIS ENDING at index i. For each i, look at all earlier j < i; if a[j] < a[i], we can extend the subsequence ending at j by appending a[i].

dp[i] = 1 + max(dp[j]) over all j < i with a[j] < a[i]
       (or 1 if no such j exists)

The final LIS length is max(dp[]).

int lisN2(vector<int>& a) {
    int n = a.size();
    vector<int> dp(n, 1);
    for (int i = 1; i < n; i++)
        for (int j = 0; j < i; j++)
            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
    return *max_element(dp.begin(), dp.end());
}

O(n²) — fine for n ≤ 10⁴, too slow for n = 10⁵.

## O(n log n) — the tails trick

Maintain an array tails[]:

tails[k] = the SMALLEST possible LAST element of an increasing subsequence of length k+1.

Walk a[]. For each x:
- Binary-search the LEFTMOST position in tails[] where tails[i] >= x.
- If found (i < tails.size()), overwrite tails[i] = x.
- Else (x is larger than all), APPEND x to tails.

The size of tails[] at the end IS the LIS length. (Note: the contents of tails are NOT the LIS itself — they're just the optimised "best last elements" — see reconstruction below.)

int lisNlogN(vector<int>& a) {
    vector<int> tails;
    for (int x : a) {
        auto it = lower_bound(tails.begin(), tails.end(), x);
        if (it == tails.end()) tails.push_back(x);
        else *it = x;
    }
    return (int)tails.size();
}

O(n log n) — clean and fast.

## Why it works

The invariant: tails[k] holds the SMALLEST possible value that could END an increasing subsequence of length k+1. By keeping tails minimal, we maximise our chances of extending it later.

When a new x arrives:
- If x is larger than everything in tails, we extend the longest subsequence by 1.
- Otherwise, x replaces the first tails[i] that's >= x. This gives us a NEW increasing subsequence of length i+1 ending at x, with a smaller last element than before. Future numbers will find it easier to extend.

The tails array doesn't represent ANY single subsequence — it's a fictional "best case" for each length. The answer (length of LIS) is just |tails|.

## Strict vs non-strict

For STRICTLY increasing: use lower_bound (first element ≥ x).
For NON-strict (allowing equal): use upper_bound (first element > x).

Read the problem carefully.

## Reconstruction (when you need the actual subsequence)

Track, for each element, "after processing me, what length of LIS did I belong to?" and a parent index. Then walk back from the highest length.

vector<int> lisReconstruct(vector<int>& a) {
    int n = a.size();
    vector<int> tails, idx;        // tails of values, and source indices
    vector<int> parent(n, -1);
    for (int i = 0; i < n; i++) {
        auto it = lower_bound(tails.begin(), tails.end(), a[i]);
        int pos = it - tails.begin();
        if (it == tails.end()) tails.push_back(a[i]), idx.push_back(i);
        else                   *it = a[i], idx[pos] = i;
        parent[i] = (pos > 0) ? idx[pos - 1] : -1;
    }
    vector<int> out;
    for (int k = idx.back(); k != -1; k = parent[k]) out.push_back(a[k]);
    reverse(out.begin(), out.end());
    return out;
}

## Variants

- **Longest Decreasing Subsequence** — reverse the array (or use greater<>).
- **Longest Bitonic Subsequence** — first increasing then decreasing. Compute LIS from left and LIS from right; combine.
- **Russian Doll Envelopes** — 2-D LIS. Sort by width ascending and height DESCENDING (for ties on width), then LIS on heights.
- **Number of LIS** — count the LIS lengths; harder, O(n²) DP with a count array.
- **Maximum Sum Increasing Subsequence** — same O(n²) shape; dp[i] = sum (not length) ending at i.

## Patience Sorting

The O(n log n) algorithm is exactly Patience Sorting from card games. You deal cards into piles such that each pile's top card is strictly smaller than the card you're about to place. The minimum number of piles = LIS length. A beautiful, century-old algorithm.`,
          codeBlocks: [
            {
              title: "LIS O(n²) — natural DP",
              code: `int lisN2(vector<int>& a) {
    int n = a.size();
    vector<int> dp(n, 1);
    for (int i = 1; i < n; i++)
        for (int j = 0; j < i; j++)
            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
    return *max_element(dp.begin(), dp.end());
}`
            },
            {
              title: "LIS O(n log n) — tails + binary search",
              code: `int lisNlogN(vector<int>& a) {
    vector<int> tails;
    for (int x : a) {
        auto it = lower_bound(tails.begin(), tails.end(), x);
        if (it == tails.end()) tails.push_back(x);
        else                   *it = x;
    }
    return (int)tails.size();
}`
            },
            {
              title: "LIS — non-strict (allow equal) version",
              code: `int lisNonStrict(vector<int>& a) {
    vector<int> tails;
    for (int x : a) {
        auto it = upper_bound(tails.begin(), tails.end(), x);   // upper_bound for non-strict
        if (it == tails.end()) tails.push_back(x);
        else                   *it = x;
    }
    return (int)tails.size();
}`
            },
            {
              title: "LIS — reconstruct the actual subsequence",
              code: `vector<int> lisRebuild(vector<int>& a) {
    int n = a.size();
    vector<int> tails, idxOfTail;
    vector<int> parent(n, -1);
    for (int i = 0; i < n; i++) {
        auto it = lower_bound(tails.begin(), tails.end(), a[i]);
        int pos = it - tails.begin();
        if (pos > 0) parent[i] = idxOfTail[pos - 1];
        if (it == tails.end()) {
            tails.push_back(a[i]);
            idxOfTail.push_back(i);
        } else {
            *it = a[i];
            idxOfTail[pos] = i;
        }
    }
    vector<int> out;
    for (int k = idxOfTail.back(); k != -1; k = parent[k]) out.push_back(a[k]);
    reverse(out.begin(), out.end());
    return out;
}`
            },
            {
              title: "Longest Bitonic Subsequence — LIS from both sides",
              code: `int lbs(vector<int>& a) {
    int n = a.size();
    vector<int> up(n, 1), down(n, 1);
    for (int i = 0; i < n; i++)
        for (int j = 0; j < i; j++)
            if (a[j] < a[i]) up[i] = max(up[i], up[j] + 1);
    for (int i = n - 1; i >= 0; i--)
        for (int j = n - 1; j > i; j--)
            if (a[j] < a[i]) down[i] = max(down[i], down[j] + 1);
    int best = 0;
    for (int i = 0; i < n; i++) best = max(best, up[i] + down[i] - 1);
    return best;
}`
            },
            {
              title: "Russian Doll Envelopes — 2-D LIS",
              code: `int maxEnvelopes(vector<vector<int>>& env) {
    sort(env.begin(), env.end(), [](const auto& a, const auto& b) {
        if (a[0] != b[0]) return a[0] < b[0];
        return a[1] > b[1];                          // descending on height for ties
    });
    vector<int> tails;
    for (auto& e : env) {
        int h = e[1];
        auto it = lower_bound(tails.begin(), tails.end(), h);
        if (it == tails.end()) tails.push_back(h);
        else                   *it = h;
    }
    return (int)tails.size();
}`
            }
          ],
          complexity: { time: "O(n²) DP; O(n log n) tails+binary-search", space: "O(n)" },
          keyPoints: [
            "LIS = longest strictly increasing subsequence (non-contiguous).",
            "O(n²) DP: dp[i] = 1 + max dp[j] for j < i with a[j] < a[i]. Intuitive.",
            "O(n log n) tails trick: maintain smallest possible LAST element for each length.",
            "tails is NOT the LIS itself — its LENGTH is the LIS length.",
            "Strict: lower_bound. Non-strict (≤): upper_bound.",
            "Reconstruction needs parent[] alongside the tails algorithm.",
            "Longest Decreasing = LIS on reversed array.",
            "Longest Bitonic = LIS_left + LIS_right - 1 at each pivot index.",
            "Russian Doll Envelopes: sort widths ascending, heights descending, LIS on heights."
          ],
          pitfalls: [
            "Using lower_bound when the problem allows equal values — should be upper_bound.",
            "Believing the tails array is the actual LIS — it isn't; reconstruct properly with parents.",
            "O(n²) DP TLE on n = 10⁵ — must switch to O(n log n).",
            "Russian Doll: NOT sorting heights descending on width ties — counts incompatible pairs as compatible.",
            "Forgetting that LIS handles n = 0 trivially (empty array → 0).",
            "Reading the problem as 'increasing run' (contiguous) instead of subsequence — totally different problem (O(n) sliding)."
          ],
          videoId: "okgM58Tv9jQ",
          videoSearch: "longest increasing subsequence dp"
        },
        {
          name: "Edit Distance & DP on Strings",
          explanation: `Edit distance (Levenshtein distance) is the minimum number of single-character INSERTIONS, DELETIONS, and REPLACEMENTS needed to turn string A into string B. It's the algorithm behind diff tools, spell-checkers, DNA alignment, and fuzzy string matching. The DP has the same shape as LCS but with a min-of-three recurrence.

This concept also covers the broader "DP on two strings" family: distinct subsequences, wildcard matching, regex matching. All of them are 2-D DP with (i, j) pointers into the two inputs.

## Edit distance — the recurrence

State: dp[i][j] = min operations to turn A[0..i-1] into B[0..j-1].

Base:
  dp[0][j] = j      (insert j chars to build B from empty)
  dp[i][0] = i      (delete i chars to reduce A to empty)

Recurrence:
  if A[i-1] == B[j-1]:  dp[i][j] = dp[i-1][j-1]                  // no-op
  else                  dp[i][j] = 1 + min(
                            dp[i-1][j],      // delete A[i-1]
                            dp[i][j-1],      // insert B[j-1]
                            dp[i-1][j-1]     // replace A[i-1] with B[j-1]
                        )

The three options correspond exactly to the three edit operations.

## Implementation

int editDistance(const string& a, const string& b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1));
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            if (a[i-1] == b[j-1]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});
        }
    return dp[n][m];
}

O(n · m) time, O(n · m) space (collapsible to O(min(n, m))).

## Why the base cases

dp[i][0] = i: to convert "a string of length i" into "empty", you delete every character → i deletions.

dp[0][j] = j: to convert "empty" into "a string of length j", you insert every character → j insertions.

## Reconstruction — get the actual sequence of edits

Walk backwards through dp from (n, m) and report which edit was taken at each step.

if a[i-1] == b[j-1]: no edit; i--; j--;
else if dp[i][j] == dp[i-1][j-1] + 1: REPLACE a[i-1] with b[j-1]; i--; j--;
else if dp[i][j] == dp[i-1][j] + 1:   DELETE a[i-1]; i--;
else: INSERT b[j-1]; j--;

## DP on two strings — the broader family

The (i, j) state, with "consume from A" / "consume from B" / "consume from both" transitions, is the universal template.

**Distinct Subsequences** — count distinct subsequences of S equal to T.
dp[i][j] = dp[i-1][j] + (s[i-1] == t[j-1] ? dp[i-1][j-1] : 0)

**Min ASCII delete sum to make two strings equal** — like edit distance but with weights = ASCII values.

**Wildcard Matching** ('?' matches one char, '*' matches any sequence):
dp[i][j] = true iff p[0..j-1] matches s[0..i-1].
  if p[j-1] == s[i-1] || p[j-1] == '?':  dp[i][j] = dp[i-1][j-1]
  else if p[j-1] == '*':                  dp[i][j] = dp[i-1][j] || dp[i][j-1]
  else                                    dp[i][j] = false

**Regular Expression Matching** ('.', '*'):
More complex because '*' applies to the previous character, not as a wildcard sequence.
  if p[j-1] == '*':
    dp[i][j] = dp[i][j-2]                                            // zero of preceding
            || (matches(s[i-1], p[j-2]) ? dp[i-1][j] : false)        // one or more
  else: dp[i][j] = matches(s[i-1], p[j-1]) ? dp[i-1][j-1] : false

## Min insertions / deletions to make A into B

By Edit Distance with REPLACEMENTS forbidden:
- deletions = n - LCS(a, b)
- insertions = m - LCS(a, b)
- total = n + m - 2 · LCS(a, b)

With replacements allowed, you get edit distance (which is ≤ the above).

## Min insertions to make a string a palindrome

= n - longest palindromic subsequence(s).

## Why this matters

Every "transform string A into string B" or "match A against pattern B" question is in this family. Once you see the (i, j) state plus the small set of consume-A / consume-B / consume-both transitions, you can write the recurrence in a minute.

## Pitfalls specific to edit distance

- Forgetting the base cases dp[i][0] and dp[0][j] — comparing against 0 garbage values.
- Wildcard '*' vs regex '*' — completely different semantics; read the problem.
- Operation costs: standard edit distance counts each op as 1; some variants weight them.
- Damerau-Levenshtein: also allows TRANSPOSITION (swap adjacent chars) — different recurrence, longer code.`,
          codeBlocks: [
            {
              title: "Edit Distance — Levenshtein",
              code: `int editDistance(const string& a, const string& b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1));
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            if (a[i-1] == b[j-1]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});
        }
    return dp[n][m];
}`
            },
            {
              title: "Edit Distance — O(min(n,m)) space",
              code: `int editDistanceOpt(const string& a, const string& b) {
    int n = a.size(), m = b.size();
    if (m < n) return editDistanceOpt(b, a);
    vector<int> prev(m + 1), curr(m + 1);
    for (int j = 0; j <= m; j++) prev[j] = j;
    for (int i = 1; i <= n; i++) {
        curr[0] = i;
        for (int j = 1; j <= m; j++) {
            if (a[i-1] == b[j-1]) curr[j] = prev[j-1];
            else curr[j] = 1 + min({prev[j], curr[j-1], prev[j-1]});
        }
        swap(prev, curr);
    }
    return prev[m];
}`
            },
            {
              title: "Reconstruct the edit operations",
              code: `vector<string> editOps(const string& a, const string& b) {
    int n = a.size(), m = b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1));
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            dp[i][j] = (a[i-1] == b[j-1]) ? dp[i-1][j-1]
                                          : 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});
    vector<string> ops;
    int i = n, j = m;
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && a[i-1] == b[j-1]) { i--; j--; }
        else if (i > 0 && j > 0 && dp[i][j] == dp[i-1][j-1] + 1) {
            ops.push_back("REPLACE " + string(1, a[i-1]) + " with " + string(1, b[j-1]));
            i--; j--;
        } else if (i > 0 && dp[i][j] == dp[i-1][j] + 1) {
            ops.push_back("DELETE " + string(1, a[i-1]));
            i--;
        } else {
            ops.push_back("INSERT " + string(1, b[j-1]));
            j--;
        }
    }
    reverse(ops.begin(), ops.end());
    return ops;
}`
            },
            {
              title: "Distinct Subsequences (count subseqs of S equal to T)",
              code: `int numDistinct(const string& s, const string& t) {
    int n = s.size(), m = t.size();
    vector<vector<unsigned long long>> dp(n + 1, vector<unsigned long long>(m + 1, 0));
    for (int i = 0; i <= n; i++) dp[i][0] = 1;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            dp[i][j] = dp[i-1][j];
            if (s[i-1] == t[j-1]) dp[i][j] += dp[i-1][j-1];
        }
    return (int)dp[n][m];
}`
            },
            {
              title: "Wildcard Matching ('?' = one char, '*' = any sequence)",
              code: `bool wildcardMatch(const string& s, const string& p) {
    int n = s.size(), m = p.size();
    vector<vector<bool>> dp(n + 1, vector<bool>(m + 1, false));
    dp[0][0] = true;
    for (int j = 1; j <= m; j++) if (p[j-1] == '*') dp[0][j] = dp[0][j-1];
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++) {
            if (p[j-1] == '?' || p[j-1] == s[i-1]) dp[i][j] = dp[i-1][j-1];
            else if (p[j-1] == '*')                  dp[i][j] = dp[i-1][j] || dp[i][j-1];
        }
    return dp[n][m];
}`
            },
            {
              title: "Min insertions to make a string a palindrome",
              code: `int minInsertionsPalindrome(const string& s) {
    string r = s;
    reverse(r.begin(), r.end());
    // n - longest palindromic subsequence = min insertions
    int n = s.size();
    vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            dp[i][j] = (s[i-1] == r[j-1]) ? 1 + dp[i-1][j-1] : max(dp[i-1][j], dp[i][j-1]);
    return n - dp[n][n];
}`
            }
          ],
          complexity: { time: "O(n · m)", space: "O(n · m) full table; O(min(n, m)) optimised" },
          keyPoints: [
            "Edit distance = min insert+delete+replace ops to turn A into B.",
            "Same shape as LCS: 2-D DP on prefixes of the two strings.",
            "Recurrence: match → diagonal; mismatch → 1 + min(insert, delete, replace).",
            "Base cases: dp[i][0] = i (delete all), dp[0][j] = j (insert all).",
            "Reconstruction: walk back through dp, identifying which of the three ops was taken.",
            "Wildcard '*' = any sequence; regex '*' = zero or more of preceding char. Different recurrences.",
            "Min insertions to make a palindrome = n - LPS = n - LCS(s, reverse(s)).",
            "Distinct Subsequences uses 'count' instead of 'min', same (i,j) state."
          ],
          pitfalls: [
            "Forgetting dp[i][0] and dp[0][j] base cases — answers are off by entire strings.",
            "Confusing wildcard '*' with regex '*' — completely different semantics.",
            "Min(insert, delete, replace) when match — should just take diagonal, NOT add 1.",
            "Reconstructing with multiple optimal paths — pick a consistent tie-break.",
            "Counts in Distinct Subsequences overflow int — use unsigned long long.",
            "Damerau-Levenshtein (allowing transposition) needs an extra condition — not the same as plain edit distance."
          ],
          videoId: "Esx-TxF5PSo",
          videoSearch: "edit distance levenshtein dp"
        },
        {
          name: "DP on Intervals (Palindrome Partitioning, MCM)",
          explanation: `Interval DP is the family of problems where the state is a RANGE [i..j] of an array or string, and the recurrence usually splits the range at some midpoint k. dp[i][j] = answer for the subproblem on indices i through j (inclusive). The fill order is by INCREASING INTERVAL LENGTH because dp[i][j] depends on smaller intervals.

This concept covers the classic shapes: Matrix Chain Multiplication (MCM), Palindrome Partitioning (min cuts), Burst Balloons, optimal BST, and the longest palindromic subsequence done as interval DP.

## The general template

for (int len = 1; len <= n; len++) {
    for (int i = 0; i + len - 1 < n; i++) {
        int j = i + len - 1;
        // recurrence: dp[i][j] = something over k in [i, j-1] or k in [i+1, j]
    }
}

The OUTER loop is over interval length. Then i sweeps over starting positions. j is implied by i + len - 1.

## Matrix Chain Multiplication — the prototype

Given dimensions of n matrices (A₁: p[0]×p[1], A₂: p[1]×p[2], ..., Aₙ: p[n-1]×p[n]), find the optimal parenthesisation that minimises total scalar multiplications.

State: dp[i][j] = min cost to multiply Aᵢ ... Aⱼ.

Recurrence:
dp[i][j] = min over k in [i, j-1] of (dp[i][k] + dp[k+1][j] + p[i-1] · p[k] · p[j])

Base: dp[i][i] = 0 (single matrix, no multiplication).

Answer: dp[1][n].

int mcm(vector<int>& p) {
    int n = p.size() - 1;
    vector<vector<int>> dp(n + 2, vector<int>(n + 2, 0));
    for (int len = 2; len <= n; len++) {
        for (int i = 1; i + len - 1 <= n; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++)
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j]);
        }
    }
    return dp[1][n];
}

## Palindrome Partitioning — min cuts

Partition a string into the FEWEST substrings such that every substring is a palindrome.

Two-step DP:

Step 1 — Precompute isPalin[i][j] for every substring using interval DP:
isPalin[i][j] = (s[i] == s[j]) && (j - i < 2 || isPalin[i+1][j-1])

Step 2 — Linear DP for min cuts:
cuts[i] = min cuts needed for s[0..i]
        = 0 if s[0..i] is itself a palindrome
        = 1 + min over j in [0, i-1] of cuts[j]  for which s[j+1..i] is a palindrome

## Burst Balloons — the inside-out trick

Each balloon has a value. When you burst balloon i, you gain a[i-1] · a[i] · a[i+1] (with sentinels at the ends). Find the max total coins.

The trick: define dp[i][j] = max coins to burst all balloons STRICTLY BETWEEN i and j, leaving i and j intact. Then think about WHICH balloon you burst LAST in the range — that balloon gets a[i] · a[k] · a[j] as its reward.

Recurrence: dp[i][j] = max over k in (i, j) of (dp[i][k] + dp[k][j] + a[i] · a[k] · a[j])

Fill by length. Pad with 1s at both ends to handle boundaries.

int burst(vector<int>& nums) {
    vector<int> a = {1};
    a.insert(a.end(), nums.begin(), nums.end());
    a.push_back(1);
    int n = a.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 0; i + len < n; i++) {
            int j = i + len;
            for (int k = i + 1; k < j; k++)
                dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + a[i] * a[k] * a[j]);
        }
    }
    return dp[0][n - 1];
}

The "burst LAST" framing is the key insight. Without it the problem looks exponential.

## Optimal Binary Search Tree

Given keys and access frequencies, build a BST that minimises total expected search cost.

dp[i][j] = min total cost when keys i..j form a BST.
Recurrence: for each possible root k in [i, j]:
  dp[i][j] = sum_freq[i..j] + min(dp[i][k-1] + dp[k+1][j])

## Longest Palindromic Subsequence — interval DP form

Earlier we did LPS as LCS(s, reverse(s)). Here it is as interval DP:

dp[i][j] = length of LPS in s[i..j].
  if s[i] == s[j]:  dp[i][j] = 2 + dp[i+1][j-1]   (special case if i+1 > j-1)
  else              dp[i][j] = max(dp[i+1][j], dp[i][j-1])

## The recipe

For "split a range at some midpoint and optimise":
1. State: dp[i][j].
2. Identify whether dp[i][j] depends on dp[i+1][j-1] (substring shrink), dp[i][k] + dp[k+1][j] (split), or some other pattern.
3. Fill BY LENGTH — smaller intervals first.
4. Answer = dp[0][n-1] (or dp[1][n] depending on indexing).

## Complexity

Most interval DPs are O(n³) — n² states times n choices of split point. Sometimes you can prune with the Knuth optimisation (used in Optimal BST) to get O(n²).

## When NOT to use interval DP

If the problem has linear structure (process one element at a time), use 1-D DP.
If splitting doesn't naturally fit, look for a different DP shape (knapsack, LCS).
If the state has more than 2 indices, you're in 3-D+ DP territory; reconsider whether all dimensions are needed.`,
          codeBlocks: [
            {
              title: "Matrix Chain Multiplication",
              code: `int mcm(vector<int>& p) {
    int n = p.size() - 1;
    vector<vector<int>> dp(n + 2, vector<int>(n + 2, 0));
    for (int len = 2; len <= n; len++) {
        for (int i = 1; i + len - 1 <= n; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++)
                dp[i][j] = min(dp[i][j],
                               dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j]);
        }
    }
    return dp[1][n];
}`
            },
            {
              title: "Burst Balloons — pick which to burst LAST",
              code: `int burstBalloons(vector<int>& nums) {
    vector<int> a = {1};
    a.insert(a.end(), nums.begin(), nums.end());
    a.push_back(1);
    int n = a.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 0; i + len < n; i++) {
            int j = i + len;
            for (int k = i + 1; k < j; k++)
                dp[i][j] = max(dp[i][j],
                               dp[i][k] + dp[k][j] + a[i] * a[k] * a[j]);
        }
    }
    return dp[0][n - 1];
}`
            },
            {
              title: "Palindrome Partitioning II — min cuts",
              code: `int minCutPalindrome(const string& s) {
    int n = s.size();
    vector<vector<bool>> isPalin(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            isPalin[i][j] = (s[i] == s[j]) && (j - i < 2 || isPalin[i+1][j-1]);

    vector<int> cuts(n, 0);
    for (int i = 1; i < n; i++) {
        if (isPalin[0][i]) { cuts[i] = 0; continue; }
        cuts[i] = i;                                  // worst case: cut between each char
        for (int j = 1; j <= i; j++)
            if (isPalin[j][i]) cuts[i] = min(cuts[i], cuts[j-1] + 1);
    }
    return cuts[n - 1];
}`
            },
            {
              title: "Longest Palindromic Subsequence — interval DP form",
              code: `int lpsInterval(const string& s) {
    int n = s.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int i = 0; i < n; i++) dp[i][i] = 1;
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i + len - 1 < n; i++) {
            int j = i + len - 1;
            if (s[i] == s[j]) dp[i][j] = 2 + (len == 2 ? 0 : dp[i+1][j-1]);
            else              dp[i][j] = max(dp[i+1][j], dp[i][j-1]);
        }
    }
    return dp[0][n - 1];
}`
            },
            {
              title: "Number of Palindromic Substrings — count, not length",
              code: `int countPalindromes(const string& s) {
    int n = s.size(), count = 0;
    vector<vector<bool>> dp(n, vector<bool>(n, false));
    for (int len = 1; len <= n; len++) {
        for (int i = 0; i + len - 1 < n; i++) {
            int j = i + len - 1;
            if (s[i] == s[j] && (len < 3 || dp[i+1][j-1])) {
                dp[i][j] = true;
                count++;
            }
        }
    }
    return count;
}`
            },
            {
              title: "Optimal BST (sketch)",
              code: `int optimalBST(vector<int>& freq) {
    int n = freq.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    vector<int> pre(n + 1, 0);
    for (int i = 0; i < n; i++) pre[i + 1] = pre[i] + freq[i];
    for (int i = 0; i < n; i++) dp[i][i] = freq[i];
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i + len - 1 < n; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            int sumF = pre[j + 1] - pre[i];
            for (int k = i; k <= j; k++) {
                int left  = (k > i) ? dp[i][k-1] : 0;
                int right = (k < j) ? dp[k+1][j] : 0;
                dp[i][j] = min(dp[i][j], left + right + sumF);
            }
        }
    }
    return dp[0][n - 1];
}`
            }
          ],
          complexity: { time: "O(n³) for most interval DPs (n² states × n splits)", space: "O(n²)" },
          keyPoints: [
            "Interval DP: state is dp[i][j] = answer for the range [i..j].",
            "Fill by INCREASING interval length — dp[i][j] depends on smaller intervals.",
            "Typical recurrence: split at some k in (i, j), combine left + right + extra.",
            "MCM: min cost to multiply matrices i..j; split at k → A_i...A_k times A_{k+1}...A_j.",
            "Burst Balloons: pick which balloon to burst LAST (not first) — this makes it solvable.",
            "Palindrome Partitioning II: precompute isPalin[][], then linear DP for min cuts.",
            "LPS as interval DP: dp[i][j] = 2 + dp[i+1][j-1] if endpoints match.",
            "Time is usually O(n³); Knuth optimisation can get O(n²) for some problems."
          ],
          pitfalls: [
            "Forgetting to iterate by LENGTH — using the wrong fill order means reading uninitialised cells.",
            "Off-by-one in MCM's p[i-1] · p[k] · p[j] — the dimensions are p[i-1], p[i], ..., p[n].",
            "Burst Balloons solved by picking which to burst FIRST — the recurrence doesn't work that way.",
            "LPS base case dp[i][i] = 1 — easy to forget single characters are palindromes.",
            "Palindrome Partitioning min cuts: forgetting to handle cuts[i] = 0 when 0..i is itself a palindrome.",
            "O(n³) on n = 10⁴ is 10¹² ops — TLE. Interval DP usually caps at n ≤ 500."
          ],
          videoId: "-g_xhI_tZfA",
          videoSearch: "dp on intervals palindrome partitioning"
        },
        {
          name: "Greedy vs DP",
          explanation: `A greedy algorithm makes the LOCALLY BEST choice at each step and commits to it, never reconsidering. When it works, it's usually faster and simpler than DP. When it doesn't, the wrong answer is silent — no error, just an off-by-some-amount result. Knowing WHEN greedy works (and being able to PROVE it works) is what separates senior engineers from junior ones.

This concept closes the DP chapter by contrasting the two approaches, walking through the classic "greedy fails but DP saves you" example (Coin Change), and listing the greedy algorithms you should know cold.

## Greedy in two sentences

Make the choice that LOOKS best right now. Trust that local optima compose into a global optimum.

## The Coin Change comparison

Coin denominations [1, 5, 10, 25]. Make 30 cents.
Greedy (take the largest coin ≤ remainder): 25 + 5 = 2 coins. Optimal.

Now consider denominations [1, 3, 4, 5]. Make 7.
Greedy: 5 + 1 + 1 = 3 coins.
Optimal: 3 + 4 = 2 coins.

Greedy FAILS on the second example because taking 5 first ruled out the better "3 + 4" decomposition. The greedy CHOICE was locally best (5 is the largest ≤ 7) but not globally best.

US coin denominations are SPECIALLY CHOSEN so greedy works. Arbitrary denominations need DP.

## When does greedy work?

Two properties (and you must PROVE both, not just hope):

1. **Greedy Choice Property** — there's a locally optimal choice that leads to a globally optimal solution.

2. **Optimal Substructure** — after making that greedy choice, the remaining subproblem can also be solved optimally.

The proof technique is usually the EXCHANGE ARGUMENT: take any optimal solution, show that you can swap its first move for the greedy move without making it worse. Therefore the greedy move is in SOME optimal solution.

## The greedy classics

These are the algorithms where greedy is PROVABLY OPTIMAL:

- **Activity Selection** — given activities with start/end times, schedule the maximum non-overlapping subset. Sort by END time; greedily pick the earliest-ending compatible activity. Proof: exchange argument.

- **Fractional Knapsack** — like 0/1 Knapsack but you can take FRACTIONS. Sort by value/weight ratio; take the highest-ratio items first.

- **Huffman Coding** — minimal-cost prefix-free encoding. Repeatedly merge the two lowest-frequency nodes.

- **Minimum Spanning Tree (Kruskal's, Prim's)** — greedy choices justified by the cut property.

- **Dijkstra's Shortest Path** — greedy: always finalise the closest unfinalised vertex.

- **Job Sequencing with Deadlines** — sort by profit descending; schedule each in the latest available slot before its deadline.

- **Jump Game** — at each index, track the FURTHEST you can reach; greedy O(n).

- **Gas Station** — single greedy pass with running tank.

- **Assign Cookies** — sort children's greed and cookies; give each cookie to the least-greedy child it satisfies.

## When greedy FAILS

The signal is "I can construct a counter-example". A handful of classic traps:

- **0/1 Knapsack** — greedy by value/weight ratio doesn't work (it works for FRACTIONAL but not 0/1).
- **Longest Increasing Subsequence** — greedy (take every value larger than the last taken) misses optimal.
- **Travelling Salesman** — nearest-neighbour heuristic is greedy and often wrong by a large factor.
- **Coin Change with arbitrary denominations** — see above.
- **Edit Distance** — no greedy choice is provably optimal.

When greedy fails, DP usually rescues you (at a cost in time and code).

## Greedy + DP hybrids

Some problems use greedy reasoning to prune a DP. Examples:
- **Longest Increasing Subsequence with patience sorting** — the O(n log n) tails trick is greedy at heart (always replace with the smallest possible).
- **Stock Buy and Sell with cooldown** — DP with a few state variables; the transitions are greedy within each state.

## How to tell at a glance

1. If the problem can be DECOMPOSED into independent subproblems and you're not sure greedy works → try DP first.
2. If the problem feels like "at each step, the best move is obvious" → suspect greedy; PROVE it before relying on it.
3. If you've written a greedy and you can't prove correctness, write a brute force, run both on random inputs, and compare. If they ever disagree, greedy is wrong.

## Proof techniques

The exchange argument: if S is any optimal solution and your greedy makes a different first choice g, swap S's first choice for g. Show that the resulting S' is also optimal.

Induction: greedy is optimal for size 0; assume optimal for size n; show it for size n+1.

If you can't find a proof, your greedy is probably wrong.

## Greedy vs DP — a summary

| Property            | Greedy                  | DP                       |
|---------------------|-------------------------|--------------------------|
| Speed               | Usually O(n log n)      | Usually O(n) to O(n³)    |
| Code complexity     | Simple                  | Moderate to complex      |
| Memory              | O(1) to O(n)            | O(n) to O(n²)            |
| Provability         | Hard — exchange arg     | Easier — structural      |
| When wrong          | SILENTLY wrong          | Doesn't happen if recurrence is right |
| Typical apps        | Scheduling, MST, Huffman| Knapsack, LCS, optimisation |

## The mature engineer's mindset

Don't reach for greedy because it's "simpler". Reach for greedy because you have a proof. If you don't have a proof, write DP — slower at worst, correct always.

This concludes the DP chapter. Congratulations: you've covered C++ basics, arrays, strings, sorting, searching, recursion, hashing, linked lists, stacks, queues, trees, BSTs, heaps, tries, graphs (BFS, DFS, Dijkstra, Bellman-Ford, MST, DSU), and dynamic programming. That's the entire interview canon.`,
          codeBlocks: [
            {
              title: "Activity Selection — the canonical provable greedy",
              code: `// Given activities (start, end), select max non-overlapping subset.
int activitySelect(vector<pair<int,int>>& act) {
    sort(act.begin(), act.end(),
         [](const auto& a, const auto& b) { return a.second < b.second; });
    int count = 0, lastEnd = INT_MIN;
    for (auto& [s, e] : act) {
        if (s >= lastEnd) { count++; lastEnd = e; }
    }
    return count;
}`
            },
            {
              title: "Fractional Knapsack — greedy by value/weight ratio",
              code: `double fractionalKnapsack(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<pair<double,int>> ratio(n);                // (ratio, index)
    for (int i = 0; i < n; i++) ratio[i] = {(double)v[i] / w[i], i};
    sort(ratio.begin(), ratio.end(), greater<>());
    double total = 0;
    for (auto& [r, i] : ratio) {
        if (W >= w[i]) { total += v[i]; W -= w[i]; }
        else { total += r * W; break; }
    }
    return total;
}`
            },
            {
              title: "Jump Game — greedy O(n)",
              code: `bool canJump(vector<int>& nums) {
    int reachable = 0;
    for (int i = 0; i < (int)nums.size(); i++) {
        if (i > reachable) return false;
        reachable = max(reachable, i + nums[i]);
    }
    return true;
}`
            },
            {
              title: "Gas Station — single greedy pass",
              code: `int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
    int total = 0, tank = 0, start = 0;
    for (int i = 0; i < (int)gas.size(); i++) {
        int diff = gas[i] - cost[i];
        total += diff;
        tank  += diff;
        if (tank < 0) { start = i + 1; tank = 0; }
    }
    return total >= 0 ? start : -1;
}`
            },
            {
              title: "Coin Change — greedy FAILS for arbitrary denominations",
              code: `// Greedy version — WRONG for [1, 3, 4] with target 6 (returns 3, optimal is 2).
int coinGreedy(vector<int>& coins, int target) {
    sort(coins.begin(), coins.end(), greater<>());
    int count = 0;
    for (int c : coins)
        while (target >= c) { target -= c; count++; }
    return target == 0 ? count : -1;
}

// DP version — always correct.
int coinDP(vector<int>& coins, int target) {
    vector<int> dp(target + 1, target + 1);
    dp[0] = 0;
    for (int a = 1; a <= target; a++)
        for (int c : coins)
            if (c <= a) dp[a] = min(dp[a], dp[a - c] + 1);
    return dp[target] > target ? -1 : dp[target];
}`
            },
            {
              title: "Stress-test greedy vs brute force on random inputs",
              code: `// When you can't prove greedy works, COMPARE against brute force on random inputs.
#include <random>
mt19937 rng(42);

void stress() {
    for (int it = 0; it < 1000; it++) {
        int n = rng() % 8 + 1;
        vector<int> a(n);
        for (int& x : a) x = rng() % 100;
        int g = greedySolve(a);
        int b = bruteForce(a);
        if (g != b) {
            cout << "MISMATCH on: "; for (int x : a) cout << x << " ";
            cout << "\\n  greedy = " << g << " brute = " << b << "\\n";
            return;
        }
    }
    cout << "passed 1000 random tests\\n";
}`
            }
          ],
          complexity: { time: "Greedy usually O(n log n); DP usually O(n) to O(n³)", space: "Greedy O(1) to O(n); DP O(n) to O(n²)" },
          keyPoints: [
            "Greedy makes the locally best choice at each step and commits. Faster than DP when it works.",
            "Two requirements: Greedy Choice Property + Optimal Substructure. Both must be PROVEN.",
            "When greedy works: Activity Selection, Fractional Knapsack, Huffman, MST, Dijkstra, Job Scheduling.",
            "When greedy fails: 0/1 Knapsack, LIS, TSP, Coin Change (arbitrary denoms), Edit Distance.",
            "Proof technique: exchange argument — swap greedy's first move into any optimal solution.",
            "When in doubt, stress-test greedy against brute force on random inputs.",
            "Greedy that's wrong fails SILENTLY — no error, just suboptimal output.",
            "Greedy + DP hybrids exist (e.g. LIS with patience sorting)."
          ],
          pitfalls: [
            "Assuming greedy works because the answer 'looks right' on a few examples.",
            "Greedy on 0/1 Knapsack by ratio — works for fractional, NOT for 0/1.",
            "Greedy coin change for non-canonical denominations — silently wrong.",
            "Forgetting to sort by the right key — Activity Selection by end time, not start time.",
            "Greedy without an exchange-argument proof — high risk of being wrong on adversarial inputs.",
            "Choosing greedy over DP for SPEED when the problem is small enough that DP is fine — premature optimisation."
          ],
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
