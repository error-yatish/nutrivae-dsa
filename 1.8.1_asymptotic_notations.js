/**
 * Asymptotic Notations
 * -----------------------------------
 * Ō - big-oh     - Upper bound
 * Ω - big-omega  - Lower bound
 * ʘ - theta      - Average bound
 * -----------------------------------
 * 
 * 1 < logn < √n < n < nlogn < n² < n³ < ..... < 2ⁿ < 3ⁿ < .... < nⁿ
 * 
 * Notation does not mean best OR worst case its just notation
 * 
 * General Properties
 * - if f(n) is Ō(g(n)) then a*f(n) is Ō(g(n)) // a is some constant
 * - if f(n) is Ω(g(n)) then a*f(n) is Ω(g(n)) // a is some constant
 * - if f(n) is ʘ(g(n)) then a*f(n) is ʘ(g(n)) // a is some constant
 * 
 * Reflexive Properties
 * - if f(n) is given then f(n) is Ō(f(n))
 * 
 * Transitive Properties (a < b  abd b < c then a < c)
 * - if f(n) is Ō(g(n)) and g(n) is Ō(h(n)) then f(n) = Ō(h(n))
 * 
 * Symmetric Properties (only for ʘ)
 * - if f(n) is ʘ(g(n)) then g(n) is ʘ(f(n))
 * 
 * Transpose Symmetric
 * - if f(n) = Ō(g(n)) then g(n) is Ω(f(n))
 * 
 */