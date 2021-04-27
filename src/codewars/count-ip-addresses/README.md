# Count IP addresses

Implement a function that receives two IPv4 addresses, and returns the number of
addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address
will always be greater than the first one.

## Examples

```ts
ipsBetween('10.0.0.0', '10.0.0.50') === 50
ipsBetween('10.0.0.0', '10.0.1.0') === 256
ipsBetween('20.0.0.10', '20.0.1.0') === 246
```

## Source

https://www.codewars.com/kata/526989a41034285187000de4/train/javascript
